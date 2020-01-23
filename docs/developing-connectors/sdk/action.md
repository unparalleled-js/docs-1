---
title: SDK - Actions
date: 2018-05-24 14:00:00 Z
---

# Action
This section will now dive deeper into the details of how to create actions. This assumes that you have already learn't how to create a successful connection using one of the available authentication methods our SDK supports. Actions receive data from earlier steps in a recipe, transform it and send this data to your target API through HTTP requests.

A single action can make one or more requests to various endpoints. Because the framework handles the authentication side of a request, you will not have to worry about that here. Despite the ability to make multiple requests, best practices in building actions dictate that you keep actions simple minimising the number of HTTP requests and limiting the scope of the action to a single operation.

> All authentication is handled by the `apply` block declared earlier in the `connection` object.

## Sample code snippet
The most important thing is to identify which endpoint will address the purpose of the action. Here we will take a look at Close.io's Lead object and how to retrieve it via the API.

![close.io get lead object image](~@img/closeio-doc.png)

```ruby
{
  title: 'My Cisco connector',

  connection: {
      # Some code here
  },
  test: {
      # Some code here
  },

  actions: {

    get_lead_by_id: {
      input_fields: lambda do
        [
          { name: "lead_id", optional: false }
        ]
      end,

      execute: lambda do |connection, input|
        get("https://app.close.io/api/v1/lead/#{input["lead_id"]}/")
      end,

      output_fields: lambda do |object_definitions|
        object_definitions["lead"]
      end
    }

  },

  triggers: {
      # Some code here
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
A very simple action looks like this. A get request to the Close.io leads endpoint. Now lets go through the various blocks that are required in every action.

## `input_fields:`
After creating a new action, we first need to define the input fields for this action.
```ruby
input_fields: lambda do
  [
    { name: "lead_id", optional: false }
  ]
end,
```
In the case above, we have defined a very simple single input field with the name `lead_id`. This would result in an end user being able to see a single input field called `lead_id` when building a recipe using this action.

> While we have kept this example relatively simple, we also offer capabilities to dynamically generate input fields as well as store these input field definitions in `object definitions` to keep your custom connector code DRY.

## `execute:`
The `execute` block is where you can declare any HTTP requests that this action should make. Since you needn't worry about authentication, you can focus on defining your HTTP requests that contains the data you require to complete your action.

```ruby
execute: lambda do |connection, input|
  get("https://app.close.io/api/v1/lead/#{input["lead_id"]}/")
end,
```

| Argument | Description |
| -- | ----- |
| connection | `connection` object, frequently used to access domain or subdomain information from the user. |
| input | `input` object: Data from trigger input fields. In this example, the input contains the Room ID to receive messages from. |

Aside from the HTTP request, `execute` blocks can be used to do any pre-processing of input data and post-processing of responses. We have a set of Whitelisted ruby functions that you can use to do this. [Check them out here](/developing-connectors/sdk/methods.md)

## `output_fields:`
You can define output_fields in the same way you define input_fields. This time, however, we have used something called object_definitions to define the output schema, where we defined the schema for the `lead` objects once and can continue to reuse this same schema by referencing it in multiple areas in the custom connector code.

```ruby
output_fields: lambda do |object_definitions|
  object_definitions["lead"]
end
```

| Argument | Description |
| -- | ----- |
| object_definitions | This allows us to access a static or dynamic definition declared in the object_definitions block |

This is something we will cover later on in our [object definitions](/developing-connectors/sdk/object-definition.md) section.

## sample_output
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

### Testing
After defining your action block, you'll be able to test this action directly immediately from the custom connector homepage. At the bottom of the code editor for each custom connector, you will be able to see a list of actions and triggers that you have defined.

> Your custom connector code needs to compile successfully for actions and triggers to show up. If no console is found, double check your custom connector code for any errors which should already be highlighted.

> Remember to set up your connection block first if the API which requests are being sent to expects some form of authentication.

Each action should have a `Test` button which would allow you to manually declare inputs in a JSON format. Once valid inputs have been given, Workato runs this single action and populates with the inputs, outputs, any network requests and a console log.

> Console logs come in useful with ruby <code>puts</code> functions. You can use this to debug your actions and triggers easily

## Variations
### Adding parameters and payloads to requests
Other endpoints require parameters to access certain details, instead of accessing a particular resource route.

A GET request can have parameters added to the request. There are 2 ways you can do this.

Add query parameters to the method.
```ruby
execute: lambda do |connection, input|
  {
    'companies': get("https://#{connection['deployment']}.api.accelo.com/api/v0/companies.json", input)["response"]
  }
end
```

Add query parameters using the `params` method.
```ruby
execute: lambda do |connection, input|
  {
    'companies': get("https://#{connection['deployment']}.api.accelo.com/api/v0/companies.json").
                 params(_search: input["company_name"])["response"]
  }
end
```

A POST or PUT or PATCH request can have payloads attached as well. There are 2 ways you can do this.

Add payloads to the method.
```ruby
execute: lambda do |connection, input|
  {
    "users": post("https://#{connection['helpdesk']}.freshdesk.com/api/users.json", input)["results"]
  }
end
```

Add payloads using the `payload` method.
```ruby
execute: lambda do |connection, input|
  post("https://api.pushbullet.com/v2/pushes").
    payload(
      email: input["email"],
      title: input["title"]
      body: input["body"]
    )
end
```

See [Methods](/developing-connectors/sdk/methods.md) section for list of methods available for use in your custom connector actions.

### Configuring actions which download binary files
As Workato expects data in JSON formats unless told otherwise, download actions which work with Binary files require you to tell Workato to expect the response in a raw format.

Below we have an example from the Egnyte API, where we want to download files of any content-type.

```ruby
execute: lambda do |_connection, input|
  file_path = input['file_path'].encode_url.gsub(/%2F/, '/')

  get("/pubapi/v1/fs-content/#{file_path}").
    headers('Accept' => '*/*').
    response_format_raw # essential to handle binary files
end,
```

## Next section
Find out more about how to build triggers for your connector that can listen for events and trigger recipes based on that.
[Go to our triggers documentation](/developing-connectors/sdk/trigger.md) or check our our [best practices](/developing-connectors/sdk/best-practices.md) for some tips on building your actions.
