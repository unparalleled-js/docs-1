# JSON data format

The Workato SDK's default expected data format is JSON. Action and trigger inputs will be passed as JSON payloads if no request format is specified.

Similarly, if no response format is specified, SDK will parse body as JSON. JSON parser error will be raised otherwise.

Below we have an example of an action declaration inside the actions object titled `post_message`. We will go through the specifics of creating actions further in the notes so there isn't need to fully understand this.

This simple action collects input from the user based on fields defined in the `input_fields` lambda function in the `post_message` block and when the action is executed in a recipe, the execute lambda function is run that creates a `POST` HTTP call to `https://api.ciscospark.com/v1/messages` with `input` as its body.

## Example action:
```ruby
{
  title: 'My cisco connector',

  connection: { ... ),
  test: { ... },

  actions: {
    post_message: {
      input_fields: lambda do |object_definitions|
        object_definitions['message_detail'].only('roomId', 'text', 'toPersonEmail', 'toPersonId')
      end,

      execute: lambda do |connection,input|
        post("https://api.ciscospark.com/v1/messages", input)
      end,

      output_fields: lambda do |object_definitions|
        object_definitions['message_detail']
      end
    }
  },

  triggers: { ... },
  object_definitions: ( ... },
  picklists: ( ... },
  methods: ( ... },
}
```

Here we have the resultant request that is sent when the `execute` block above is executed. We default your `Content-Type` to `application/json` and also format your input as key-value pairs in a json formatted string. This minimises the amount of pre and post request processing that you need to do.

### Request

```
POST https://api.ciscospark.com/v1/messages
Accept  application/json
Content-Type  application/json
Authorization Bearer ---
```

Request body:
```
{
  "roomId":"1234",
  "text":"testing"
}
```

### Response

Status: `200 OK`

Response body:
```
{
  "id":"1",
  "roomId":"1234",
  "roomType":"group",
  "text":"testing",
  "personId":"101",
  "personEmail":"eeshan@workato.com",
  "created":"2017-03-26T13:28:22.131Z"
}
```

### Other data Formats
Check out the other data formats we support. [Learn more]()

### Next section
If you're already familiar with the data formats we support, check out the authentication types that our SDK supports as well as how to implement them. [Learn more]()
