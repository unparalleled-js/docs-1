---
title: SDK - Poll Trigger
date: 2018-05-24 14:00:00 Z
---

# Poll Trigger
Records (tickets, leads, items etc.) are called events in a poll. A poll trigger constantly executes a poll block for new events at fixed time intervals. This time interval depends on a user's subscription (5 or 10 minutes). At the same time, it is also able to support pagination. This is useful to prevent request timeouts when making requests with large response results. A trigger can execute immediate consecutive polls to retrieve events from successive pages.

No need to define any type to use the classic trigger. In the example below, we go through how you would create a `Updated ticket` trigger as well as the various components you need to define in the trigger object to create a polling trigger.

## Sample code snippet
```ruby
{
  title: 'My Freshdesk connector',

  connection: {
    # Some code here
  },
  test: {
    # Some code here
  },
  actions: {
    # Some code here
  },
  triggers: {

    updated_ticket: {
      input_fields: lambda do
        [
          {
            name: 'since',
            type: :timestamp,
            optional: false
          }
        ]
      end,

      poll: lambda do |connection, input, last_updated_since|
        page_size = 100
        updated_since = (last_updated_since || input['since']).to_time.utc.iso8601

        tickets = get("https://#{connection['helpdesk']}.freshdesk.com/api/v2/tickets.json").
                  params(order_by: 'updated_at',
                         order_type: 'asc',
                         per_page: page_size,
                         updated_since: updated_since)

        next_updated_since = tickets.last['updated_at'] unless tickets.blank?

        {
          events: tickets,
          next_poll: next_updated_since,
          can_poll_more: tickets.length >= page_size
        }
      end,

      dedup: lambda do |event|
        event['id']
      end,  

      output_fields: lambda do |object_definitions|
        object_definitions['ticket']
      end
    }

   },
  object_definitions: {
    # Some code here
  },
  picklists: {
    # Some code here
  },
  methods: {
    # Some code here
  }
}
```
Now lets go through the various blocks that are required in every polling trigger.

## `input_fields:`
In this object, you can define the input fields that end users will have to fill in to begin running your trigger. Over here, we have defined a single input field called 'since'. You'll be able to add more input fields by adding more hashes into the array.

```ruby
input_fields: lambda do
  [
    {
      name: 'since',
      type: :timestamp,
      optional: false
    }
  ]
end,
```

> While we have kept this example relatively simple, we also offer capabilities to dynamically generate input fields as well as store these input field definitions in `object definitions` to keep your custom connector code DRY.

## `poll:`
This is analogous to the `execute:` block in actions. Over here, we do all the heavy lifting of sending out requests every polling interval and also define the logic of the trigger.

```ruby
poll: lambda do |connection, input, last_updated_since|
  page_size = 100
  updated_since = (last_updated_since || input['since']).to_time.utc.iso8601

  tickets = get("https://#{connection['helpdesk']}.freshdesk.com/api/v2/tickets.json").
            params(order_by: 'updated_at',
                   order_type: 'asc',
                   per_page: page_size,
                   updated_since: updated_since)

  next_updated_since = tickets.last['updated_at'] unless tickets.blank?

  {
    events: tickets,
    next_poll: next_updated_since,
    can_poll_more: tickets.length >= page_size
  }
end,
```
| Argument | Description |
| -- | ----- |
| connection | `connection` object, frequently used to access domain or subdomain information from the user. |
| input | `input` object: Data from trigger input fields. In this example, the input contains the Room ID to receive messages from. |
| last_updated_since | A cursor "stored" from a previous poll. This is crucial to a good trigger design. It is used to determine where the last poll stopped and where to begin next. As an example, it is usually given the last (latest) "updated"/"created" time. When the trigger is first started, this value is `nil`. |

A ruby hash is returned in each poll. This hash is expected to follow the same structure below.
```ruby
  {
    events: tickets,
    next_poll: next_updated_since,
    can_poll_more: tickets.length >= page_size
  }
```

1. The array of events, or data, should be passed into the `events` key. Each index in the array will be processed as a separate job.

2. At the same time, a cursor is saved in `next_page`/`next_poll` (depending on the trigger type). This cursor provides information about where the current poll stopped, and used in the next poll.

3. A classic type trigger has an additional boolean key `can_poll_more`, which can be defined to conditionally fire immediate polls for multi-page results.

**Important**:
This trigger type does not have automatic-immediate polling. Immediate polling is determined by `can_poll_more`, which is a boolean value for whether an immediate poll should be made.

Example JSON response:
```ruby
[
  {
    "id": 1,
    "updated_at": "2016-08-13T00:53:44Z"
  },
  {
    "id": 2,
    "updated_at": "2016-09-14T02:25:00Z"
  },
  ...
]
```

When a get request receives this JSON response, it looks up the array for the last record (latest record) and passes it as the cursor for the next poll. It also checks the response array size. If it is equal to the size limit, it is likely that there are more records matching this request in consequtive pages. Hence the expression given to `can_poll_more` evaluates to true and invokes an immediate successive poll. This loop continues until response array size is smaller than page limit.

At the end of the loop. The last (latest) created date is passed as `next_poll`. This value will be used in the next poll cycle to pick up new records.

## `dedup:`
The dedup block is used to identify individual events. It is given a single argument "event", which corresponds to individual elements in the records array passed into "events".

```ruby
dedup: lambda do |event|
  event["id"]
end
```
| Argument | Description |
| -- | ----- |
| ticket | A typical dedup input is `event[‘id’]` where the `event` argument name can be replaced to make the code more readable.  |

In some instances, a record needs to be processed as separate events. A typical scenario is updated records. To do this, append updated timestamp field to the dedup expression like so.
```ruby
dedup: lambda do |ticket|
  event["id"] + "@" + event["updated_at"]
end
```
With this, 2 occurence of a record with the same "ID" but with different "updated_at" values will be recorded as separate events.

## `output_fields:`
You can define output_fields in the same way you define input_fields. This time, however, we have used something called object_definitions to define the output schema, where we defined the schema for the `ticket` object once and can continue to reuse this same schema by referencing it in multiple areas in the custom connector code.

```ruby
output_fields: lambda do |object_definitions|
  object_definitions["ticket"]
end
```

| Argument | Description |
| -- | ----- |
| object_definitions | This allows us to access a static or dynamic definition declared in the object_definitions block |

This is something we will cover later on in our [object definitions](/developing-connectors/sdk/object-definition.md) section.

## `sample_output:`
This is an optional block that populates the datapills defined in the `output_fields:` block with some sample information for users. It is exposed as grey text next to datapills. Check out [best practices](/developing-connectors/sdk/best-practices.md) section on how to use sample_outputs.

```ruby
sample_output: lambda do |_connection, _input|
  {
    accounts: call("format_api_output_field_names",
                   get("/api/accounts",
                       return_object: "shallow",
                       limit: 1)&.compact)
  }
end
```

![Sample output](~@img/sdk/sample_output_sample.png)
*Sample outputs make your datapills more usable by giving some context to users.*

## Other optional blocks
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='10%'>Block</th>
        <th width='20%'>Example</th>        
        <th width='70%'>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>title:</code></td>
      <td><code>title: "This is the title of the action"</code></td>
      <td>This shows up as the main action/trigger name and override the name given to the action block. This is useful in naming actions and triggers that have special characters<br>
      <img src="~@img/sdk/title.png">
      </td>
    </tr>
    <tr>
      <td><code>subtitle:</code></td>
      <td><code>subtitle: "This is a subtitle"</code></td>
      <td>This shows up below the main action name when users are looking at the dropdown of possible actions<br>
      <img src="~@img/sdk/subtitle.png">
      </td>
    </tr>
    <tr>
      <td><code>description:</code></td>
      <td><code>description: "This is a description"</code></td>
      <td>This is what shows up as the summary of an action when looking at the recipe.<br>
      <img src="~@img/sdk/description.png">
      </td>
    </tr>
    <tr>
      <td><code>help:</code></td>
      <td><code>help: "This is a help text"</code></td>
      <td>This shows up as the help hint when users are configuring the action. Use this to detail any important information the user should have<br>
      <img src="~@img/sdk/help.png">
      </td>
    </tr>  
  </tbody>
</table>

## Other trigger types
Check out the other trigger types we support. [Go back to our list of triggers.](/developing-connectors/sdk/trigger.md)

## Next section
If you're already familiar with the trigger types we support, check out the various types of HTTP requests that our SDK supports as well as how to use them in your `connection:`, `actions:` and `triggers:` blocks. [Go to our HTTP methods documentation](/developing-connectors/sdk/http-requests-and-response-handling.md) or check our our [best practices](/developing-connectors/sdk/best-practices.md) for some tips on building triggers.
