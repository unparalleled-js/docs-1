# How-to guides
This section aims to guide you through the creation of various types of connections, actions and triggers whilst making full use of all the features available to users building a custom connector.

# Guides on authentication
Our [initial walkthrough](/developing-connectors/sdk/walk-through.md) goes through how to connect to an API which requires no form of authentication. Now lets go through some more advanced examples using the [authentication methods](developing-connectors/sdk/authentication.md) we detailed down in our authentication section. We recommend that you take a look at our documentation of our authentication methods before checking out these guides.

## Basic Authentication
Basic authentication is when an API authenticates the HTTP request by verifying the username and password appending the the request. Each request is required to contain this username and password in the header field.

### Harvest app
[Harvest](https://www.getharvest.com/) app is a cloud based platform that helps freelancers and contractors track their time on projects. Documentation of Harvest's API can be found over [here](https://help.getharvest.com/api-v1/authentication/authentication/http-basic/).

Taking a look at the documentation, we first see that Harvest allows users to authenticate via HTTP basic authentication and accepts and returns data in XML data formats. These are important features that you need to take note before building a custom connector.

> You should always read the documentation of the target API to understand the capabilities possible as well as to fully know which endpoints you want to use.

Detailed in their documentation, connecting to the Harvest app simply requires us to append `Authorization: Basic <base64 encoded string of username:password>`. Lets find out how this can be done configured easily in Workato's SDK.

### Sample code snippet
```ruby
{
  title: 'Harvest',

  # HTTP basic auth example.
  connection: {
    fields: [
      {
        name: 'subdomain',
        control_type: 'subdomain',
        url: '.harvestapp.com',
        hint: 'The subdomain found in your Harvest URL',
        optional: false
      },
      {
        name: 'username',
        optional: false
      },
      {
        name: 'password',
        control_type: 'password',
        optional: false
      }
    ],

    authorization: {
      type: 'basic_auth',

      # Basic auth credentials are just the username and password; framework handles adding
      # them to the HTTP requests.
      apply: lambda do |connection|
        user(connection['username'])
        password(connection['password'])
      end
    }
  },

  test: lambda do |connection|
    get("https://#{connection['subdomain']}.harvestapp.com/account/who_am_i")
  end,
}
```

#### Input fields
Declaring input fields for users can be done inside the `fields:` block of the `connection:` block. Over here, we want to be able to make sure we give the fields needed for users of our connector to make a valid connection.

From the Harvest api documentation, we can quickly see that we need 3 inputs from the user to establish a valid connection - the subdomain of the user's Harvest instance, a username and matching password. This is something that all HTTP requests from the connector will require to be accepted by Harvest API endpoints.

When building the input field schema that will rendered as input fields to an end user of your connector, be sure to add things like hints to guide the user. Since all these fields are required for us to make a connection, we have also set `optional:` to false to render these input fields as required. Workato will perform validation to ensure the user has filled in these fields.

Another important aspect would be to set the `control_type:` as `password` which gives the user the option to hide the password as he is typing.

#### Authorization
After the input fields for connection have been declared, we now need to define how we are going to use the users input. In Workato, the user's input for connection is compiled and made into a `connection` hash which we can use in our `authorization:` block (or any other block in our connector code).

For a user whose Harvest subdomain is `acmeInc`, username is `johnappleseed@acmeInc.com` and password is `workatoRocks`, the resultant `connection` hash would look like this.

``` ruby
{
  subdomain: 'acmeInc',
  username: 'johnappleseed@acmeInc.com',
  password: 'workatoRocks'
}
```

In the `authorization:` block, we first begin by defining the `type:` as basic_auth. This is a predefined type which our SDK supports and lets the Workato framework know which authentication method to support.

Workato already has helper methods `user()` and `password()` which are base64 encoded and appended to headers. By placing them within the `apply:` block, every following HTTP call that this connector makes will now have the `user()` and `password()` added to it.

> Don't forget to add the `connection` object into the `apply:` block's argument so that you can reference it. Leaving it out will cause errors!

#### Testing the connection
With that, we've reached the final step - writing a simple test that allows Workato to know whether the user's input created a valid connection. We define this in the `test:` block, where we make a simple GET request to a Harvest API endpoint which is relatively simple.

> Remember to use the subdomain in the connection hash to send the request to the right API URL. We suggest using string interpolation using `#{connection['subdomain']}` instead of concatenating them using `"https://"+connection['subdomain']+".harvestapp.com/account/who_am_i"`. This approach is more defensive against inputs that are `null`.

When a user attempts to make a connection, a validation is done on his input fields given and then the test is run. A connection is deemed successful when the response has a status code 200.

> We recommend choosing a simple endpoint that returns minimal amounts of data and requires no input from the user beyond whats necessary.

## API Key Authentication
API key authentication is a common authentication format which requires you to authenticate your connection on Workato by sending a key with each request. Applications which use this method often require you to generate API keys and let you control the scope of access for each key generated. It is recommended that you only allow access to parts of the application required for the connector. Depending on the application, API keys could be added in the header of each API request or as a query parameter in the request.

### Coupa
For this example, we will be using Coupa - a Business spend management tool for enterprises. Their API documentation can be found over [here.](https://success.coupa.com/Integrate/Technical_Documentation/API/Get_Started)

From their documentation, we can see that Coupa's API requires a user to generate an API key directly inside the application. Detailed in their documentation, we can see that the API key should be appended inside the header of each HTTP call in the format `"X-COUPA-API-KEY" : connection["api_key"]`.

### Sample code snippet
```ruby
{
  title: "Coupa",

  connection: {
    fields: [
      {
        name: "host",
        control_type: "subdomain",
        url: ".com",
        hint: "Enter your Coupa URL.<br>Eg: https://<b>your-instance-name.coupacloud</b>.com",
        optional: false
      },
      {
        name: "api_key",
        label: "API key",
        control_type: "password",
        hint: "Select the <b>Setup</b> tab and click on <b>API Keys</b> under <b>Integrations</b> to generate API key.<br>" +
              "Or go to <b>https://your-instance-name.coupacloud.com/api_keys</b> to generate API key.",
        optional: false
      }
    ],

    authorization: {
      type: "api_key",

      apply: lambda do |connection|
        headers("X-COUPA-API-KEY" : connection["api_key"])
      end
    },

    base_uri: lambda do |connection|
      "https://#{connection['host']}.com/"
    end
  },

  test: lambda do
      get("api/departments", return_object: "limited", limit: 1)
  end,
}
```

#### Input fields
When establishing a connection to the Coupa API, a user needs to supply 2 inputs -  the subdomain of the Coupa instance and the API key they have already generated inside the application. Inside the `fields:` block, we have declared 2 input fields to collect this information from users.

In our first input field named `host`, we use a Workato specific control_type called subdomain. This control_type makes it easier to indicate to users what you really require from them by rendering as a URL which is already half completed. The `url:` key allows you to define what shows up in the text that immediately follows the text input field.

<img src="/assets/images/sdk/subdomain.png" alt="subdomain control type">

The second input field named `api_key` allows us to collect the API key users should have generated earlier.

> Use hints with relevant links to the application to make it easier for them to establish a connection.

#### Authorization
We define the `type:` as api_key which allows Workato to know that we are trying to establish a connection via API key authentication.

Secondly, we define our `apply:` block using the headers() function - a helper function on Workato that appends the arguments to the header of an HTTP request. Since this was declared in the `apply:` block, this will be appended to the header of every HTTP request sent outside of the connection block.

#### Base_uri
Since each HTTP request should be sent to an endpoint specific to the subdomain provided by the user, you're able to declare the base_uri inside the connection block. Through this, you only need to provide the filepath following the base URI in future declarations of URLs in your HTTP requests.

#### Testing the connection
Since Coupa does not have a simple endpoint as we saw in the Harvest app above, we tested the connectiong through a GET request to retrieve department information inside Coupa.

> To minimise the amount of data returned in the connection test, we made use of various Coupa specific URL query parameters such as `return_object` and `limit` to control the amount of data returned unnecessarily.
