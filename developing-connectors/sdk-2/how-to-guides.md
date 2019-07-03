# How-to guides
This section aims to guide you through the creation of various types of connections, actions and triggers whilst making full use of all the features available to users building a custom connector.

# Guides on authentication
Our [initial walkthrough](/developing-connectors/sdk-2/walk-through.md) goes through how to connect to an API which requires no form of authentication. Now lets go through some more advanced examples using the [authentication methods](developing-connectors/sdk-2/authentication.md) we detailed down in our authentication section. We recommend that you take a look at our documentation of our authentication methods before checking out these guides.

## Basic Authentication
Basic authentication is when an API authenticates the HTTP request by verifying the username and password appending the the request. Each request is required to contain this username and password in the header field.

### Harvest app
[Harvest](https://www.getharvest.com/) app is a cloud based platform that helps freelancers and contractors track their time on projects. They have an API and their documentation of the API can be found over [here](https://help.getharvest.com/api-v1/authentication/authentication/http-basic/).

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
