---
title: SDK - HTTP Requests
date: 2018-05-24 14:00:00 Z
isTocVisible: true
---

# HTTP Requests and post-response processing
In this section we cover the various HTTP methods that Workato supports. You should already be familiar with most of them. We also cover how you can do post-response processing of your HTTP calls to manipulate data into formats that are easier to use later on in your connector code.

## HTTP verb methods
|HTTP verb | Method | Example |
| -- | -- | ------- |
| GET | `get()` | `get("url", parameters)` |
| POST | `post()` | `post("url", payload)` |
| PUT | `put()` | `put("url", payload)` |
| PATCH | `patch()` | `patch("url", payload)` |
| DELETE | `delete()` | `delete("url", parameters)` |
| OPTIONS | `options()` | `options("url", parameters)` |

### Forming a request
Each HTTP verb method must be provided a `url` string as the first argument. The second argument (optional) can be in 2 forms.

Firstly, `input` can be passed as a single hash. This hash can simply be the `input` of the `execute` or `poll` argument, such as the following:
```ruby
execute: lambda do |connection, input|
  get("https://www.some_api_endpoint.com/api", input)
end
```

The hash can also be formed before like this:
```ruby
execute: lambda do |connection, input|
  params = {
    "id" => input["id"]
  }

  get("https://www.some_api_endpoint.com/api", params)
end
```

The Workato SDK framework processes this hash value and transforms it into the respective data format. For GET, DELETE OPTIONS requests, the hash data is converted to URL query parameters.

For POST, PUT and PATCH, the payload is formed into the request body into a format that you specify. Learn how to work with the various data formats [here](/developing-connectors/sdk/data-format.md).

The other method of passing request data is as a series of key/value pairs.

```ruby
execute: lambda do |connection, input|
  post("https://www.some_api_endpoint.com/api", name: input["name"], email: input["email"])
end
```

All arguments after the first will be transformed into request data. In this case, since the default data format is JSON, the following request body is formed:
```json
{
  "name": "Ee Shan",
  "email": "eeshan@workato.com"
}
```

For a GET request, the following URL parameters are formed.
```ruby
execute: lambda do |connection, input|
  get("https://www.some_api_endpoint.com/api", name: input["name"], email: input["email"])
end
```

The full request URL string will be:

`https://www.some_api_endpoint.com/api?name%3DEe%20Shan%26email%3Deeshan%40workato.com`

> Any other forms of authentication will also be appended. For the case of the example above, we have assumed no authentication is needed. Authentications are applied through the `apply` block defined in the `connection` object.

### Testing
Verify your HTTP requests directly on the code editor UI by heading over to the `Network` tab. Over there you'll be able to see all HTTP requests sent during the test run of the action or trigger.

![Network tab](/assets/images/sdk/network_tab.png)
<center>View HTTP calls directly from the network tab</center>

## Post-response processing

### Default response data
By default, all HTTP verb methods will return the response body of the request. For example, the following request creates a user in **Okta**.

```ruby
execute: lambda do |connection, input|
  response = post("/api/v1/users", profile: { login: input["email"], displayName: input["name"] })
end
```

`response` variable will a hash that looks like this:
```ruby
{
  "id": "00ub0oNGTSWTBKOLGLNR",
  "status": "STAGED",
  "created": "2018-03-13T21:36:25.344Z",
  "activated": null,
  "statusChanged": null,
  "lastLogin": null,
  "lastUpdated": "22018-03-13T21:36:25.344Z",
  "passwordChanged": null,
  "profile": {
    "firstName": "Ee Shan",
    "lastName": "Sim",
    "email": "eeshan@workato.com",
    "login": "eeshan@workato.com",
    "mobilePhone": null
  },
  "credentials": {
    "provider": {
      "type": "OKTA",
      "name": "OKTA"
    }
  }
}
```

### Response handling
`after_response` is an optional block that can be chained to the HTTP verb methods to handle the various parts of a HTTP response. Let's take a look at an example, again using the **Okta** API.

When a request is sent to the [List all users](https://developer.okta.com/docs/api/resources/users#list-all-users) endpoint, the truncated response looks like this.

```http
HTTP/1.1 200 OK
Content-Type: application/json
Link: <https://workatotest.okta.com/api/v1/users?limit=200>; rel="self"

[
  {
    "id": "00utti9t3j1xO9jOm2p6",
    "status": "ACTIVE",
    "created": "2018-03-15T08:23:05.000Z",
    "activated": null,
    "statusChanged": "2018-03-15T08:39:39.000Z",
    "lastLogin": "2018-03-15T08:39:40.000Z",
    "lastUpdated": "2018-03-15T08:39:40.000Z",
    "passwordChanged": "2018-03-15T08:39:39.000Z",
    "profile": {},
    "credentials": {},
    "_links": {}
  }
]
```

This response can be broken down into 3 parts. The HTTP response **code**, **header** and **body**.

`after_response` can be used to handle all these parts of the HTTP response. Suppose I have an action that lists all users and outputs the entire response, including the link to the existing page from the header.
```ruby
execute: lambda do |connection, input|
  get("/api/v1/users").after_response do |code, body, headers|
    {
      code: code,
      next_link: headers["link"],
      users: body
    }
  end
end
```

The resultant output of this action will contain all 3 parts of the response.

```json
{
  "code": 200,
  "next_link": "<https://workatotest.okta.com/api/v1/users?limit=200>; rel=\"self\"",
  "users": [
    {
      "id": "00utti9t3j1xO9jOm2p6",
      "status": "ACTIVE",
      "created": "2018-03-15T08:23:05.000Z",
      "activated": null,
      "statusChanged": "2018-03-15T08:39:39.000Z",
      "lastLogin": "2018-03-15T08:39:40.000Z",
      "lastUpdated": "2018-03-15T08:39:40.000Z",
      "passwordChanged": "2018-03-15T08:39:39.000Z",
      "profile": {},
      "credentials": {},
      "_links": {}
    }
  ]
}
```

### Testing
You can easily verify this while developing your custom connector. When you include post-request handling, the output tab should reflect the expected JSON object.

![Output with response code and header values](/assets/images/sdk/response_with_headers.png)
<center>Output with response code and header values*</center>

### Next section
Check out our object_definitions section, which details how you can use it to reduce the amount of redundant code in your connector. We also go through the different types of parameters you can declare in each input and output field hash. [Go to our object definitions documentation](/developing-connectors/sdk/object-definition.md) or check our our [best practices](/developing-connectors/sdk/best-practices.md) for some tips.
