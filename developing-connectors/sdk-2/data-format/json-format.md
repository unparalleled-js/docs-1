# JSON data format
The Workato SDK's default expected data format is JSON. Action and trigger inputs will be passed as JSON payloads if no data format is specified. A JSON parser error will be shown if the SDK expected JSON and got another data format.

> When sending HTTP requests to API endpoints, the data format is defined in the requests. This is done by embedding the data format inside the `Content-Type` header.

Below we have an example of an action block titled `post_message`. This simple action collects input from the user based on fields defined in the `input_fields` block in the `post_message` block and when the action is executed in a recipe, the execute block is run that creates a `POST` HTTP call to `https://api.ciscospark.com/v1/messages` with `input` as its body.

## Sample code snippet
```ruby
{
  title: 'My cisco connector',

  connection: {
    # Some code here
  },
  test: {
    # Some code here
  },

  actions: {
    post_message: {
      input_fields: lambda do
        [
          {
            name: "roomId"
          },
          {
            name: "text"
          }
        ]
      end,

      execute: lambda do |connection,input|
        post("https://api.ciscospark.com/v1/messages", input)
      end,

      output_fields: lambda do
        [
          {
            name: "id"
          },
          {
            name: "roomId"
          },
          {
            name: "roomType"
          },
          {
            name: "text"
          },
          {
            name: "personId"
          },
          {
            name: "personEmail"
          },
          {
            name: "created"
          }
        ]
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
  },
}
```

Here we have the resultant request that is sent when the `execute:` block above is executed. We default your `Content-Type` header to `application/json` and also format your input as key-value pairs in a JSON formatted string. This minimises the amount of pre and post request processing that you need to do.

## Request
Now lets go through what happens when we run the `post_message` action that we just defined. Below we go through the POST HTTP request we send out to https://api.ciscospark.com/v1/messages

> POST HTTP requests can be split into 2 different sections of `Headers` and `Body`. Request headers are where the HTTP method is defined as well as metadata related to the request body. The body contains the actual content of the request.

### Request headers
Since no data format was declared in our action, Workato defaults to JSON and assigns `Content-Type` to `application/json`. This tells the API we sent the request to that our request body is in a JSON data format.
```
POST https://api.ciscospark.com/v1/messages
Accept  application/json
Content-Type  application/json
Authorization Bearer ---
```

### Request body:
This request body is generated based on the user's input and transformed into a JSON format by Workato. This request body corresponds to a user's input for the `roomId` field being `1234` and `text` field being `testing`.
```
{
  "roomId":"1234",
  "text":"testing"
}
```

## Response
Whenever you send a HTTP request, you expect a response back which contains a few components

### Response status code
The response status code is an important way to know whether your request to the API was good.
`HTTP/1.1 200 OK`

### Response headers
This is similar to request headers and contains metadata about the response body.

### Response body:
The response body is where the API sends the most of information in response to your request.
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
Check out the other data formats we support. [Learn more](/developing-connectors/sdk-2/data-format.md)

### Next section
If you're already familiar with the data formats we support, check out the authentication types that our SDK supports as well as how to implement them. [Learn more](/developing-connectors/sdk-2/authentication.md)
