# Static Webhook Trigger
A static webhook trigger is one that requires manual registration. This usually involves a user creating a webhook in the application user interface with a pre-defined webhook URL. It defers from a dynamic webhook because it requires a fixed webhook URL for use in the manual registration process, instead of having it be done in the background (programmatic subscription through the API when a user starts a recipe).

## Sample code snippet
```ruby
{
  title: 'My connector',

  connection: {
    # Some code here
  },
  test: {
    # Some code here
  },
  actions: {
    # Some code here
  },

  webhook_keys: lambda do |params, headers, payload|
    params['spaceId']
  end,

  triggers: {
    new_message: {
      input_fields: lambda do
        [
          {
            name: 'space_id',
            label: "Space",
            control_type: "select",
            pick_list: "space_list",
            optional: false
          }
        ]
      end,

      webhook_key: lambda do |connection, input|
        input['space_id']
      end,

      webhook_notification: lambda do |connection, payload|
        payload
      end,

      dedup: lambda do |messages|
        messages['messageId']
      end,

      output_fields: lambda do |object_definitions|
        object_definitions['message']
      end
    }
  }
  object_definitions: {
    # Some code here
  },
  picklists: {
    # Some code here
  },
  methods: {
    # Some code here
  },
}
```

## `webhook_keys:`
This is a top level key (connnector-wide definition). This code block is called for each webhook notification. This code block should return the key(s) in the webhook notification that will be used to match any running triggers.

In a statically-registered webhook, this will be compared with each recipe that has a trigger running under this connector.
Those with matching results from their `webhook_key` hook (if any) will be "notified". When that happens, the webhook notification will be translated into trigger events to be processed in each respective recipe.

| Argument | Description |
| -- | ----- |
| params | A hash of all response URL parameters |
| headers | A hash of all response headers |
| payload | Original payload from the webhook POST/PUT notification. |

```ruby
webhook_keys: lambda do |params, _headers, _payload|
  params['spaceId']
end
```

In this example, the `webhook_keys` uses the spaceId of the webhook notification. Each webhook event received by this connector will be processed and identified by the spaceId. It is then matched against individual active triggers that have the same `webhook_key` value.

## `webhook_key:`
This code block is used to filter incoming webhook notifications. All webhook notifications that have `key`s matching the one defined here will be translated into trigger events.

```ruby
webhook_key: lambda do |connection, input|
  input['space_id']
end
```

| Argument | Description |
| -- | ----- |
| connection | `connection` object, frequently used to access domain or subdomain information from the user. |
| input | `input` object: Data from trigger input fields. In this example, the input contains the Room ID to receive messages from. |

In this example, the `key` defined here is the spaceId selected by the user from trigger input. When the recipe is started, only webhook notifications with matching spaceId values will be translated into a trigger event.

## `webhook_notification:`
When the webhook trigger receives a webhook notification, the payload is processed through this block. Here, we can access the desired key that contains the webhook notification data.

```ruby
webhook_notification: lambda do |input, payload|
  payload
end
```

| Argument | Description |
| -- | ----- |
| input | `input` object: Data from trigger input fields. In this example, the input contains the Room ID to receive messages from. |
| payload | Original payload from the webhook POST/PUT notification. |

## `output_fields:`
You can statically define output_fields in the same way you define input_fields. This time, however, we have used something called object_definitions to define the output schema, where we defined the schema for the `message` object once and can continue to reuse this same schema by referencing it in multiple areas in the custom connector code.

```ruby
output_fields: lambda do |object_definitions|
  object_definitions["message"]
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

![Sample output](/assets/images/sdk/sample_output_sample.png)
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
      <img src="/assets/images/sdk/title.png">
      </td>
    </tr>
    <tr>
      <td><code>subtitle:</code></td>
      <td><code>subtitle: "This is a subtitle"</code></td>
      <td>This shows up below the main action name when users are looking at the dropdown of possible actions<br>
      <img src="/assets/images/sdk/subtitle.png">
      </td>
    </tr>
    <tr>
      <td><code>description:</code></td>
      <td><code>description: "This is a description"</code></td>
      <td>This is what shows up as the summary of an action when looking at the recipe.<br>
      <img src="/assets/images/sdk/description.png">
      </td>
    </tr>
    <tr>
      <td><code>help:</code></td>
      <td><code>help: "This is a help text"</code></td>
      <td>This shows up as the help hint when users are configuring the action. Use this to detail any important information the user should have<br>
      <img src="/assets/images/sdk/help.png">
      </td>
    </tr>  
  </tbody>
</table>

## Other trigger types
Check out the other trigger types we support. [Go back to our list of triggers.](/developing-connectors/sdk/trigger.md)

## Next section
If you're already familiar with the trigger types we support, check out the various types of HTTP requests that our SDK supports as well as how to use them in your `connection:`, `actions:` and `triggers:` blocks. [Go to our HTTP methods documentation](/developing-connectors/sdk/http-requests-and-response-handling.md) or check our our [best practices](/developing-connectors/sdk/best-practices.md) for some tips on building triggers.
