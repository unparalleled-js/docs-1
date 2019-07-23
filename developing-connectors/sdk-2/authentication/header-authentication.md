# Header Authentication
For APIs requiring header authentication, this can be easily accomplished if the token is supplied by the user directly through user input fields.

## Example header authentication

```ruby
{
  title: 'My connector',

  connection: {

    fields: [
      {
        name: "token",
        control_type: "string",
        label: "Bearer token",
        optional: false,
        hint: "Available in 'My Profile' page"
      }
    ],

    authorization: {
      type: 'custom_auth',

      apply: lambda do |connection|
        headers("Authorization": "Bearer #{connection["token"]}")
      end
    }
  },

  test: {
    # Some code here
  },
  actions: {
    # Some code here
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

## apply
Synonym of the `credentials` block: Basically how to apply the credentials to an action/trigger/test request. All requests made in actions, triggers, tests and pick lists will be applied with the credentials defined here. In the example above, the apply block pulls the `token` field directly from user input fields in the `connection` object.

Here are a list of accepted inputs into the apply block

```ruby
apply: lambda do |connection|
  # Adds in URL parameters passed as a hash object
  # i.e. authtoken=[connection['authtoken']]
  params(authtoken: connection['authtoken'])

  #Adds in payload fields (PATCH, POST, PUT only) pass as hash
  payload(grant_type: "authorization_code",
          client_id: connection["client_id"],
          client_secret: connection["client_secret"],
          code: auth_code)

  # Adds in headers into every request passed as a hash.
  # The variable access_token can be retrieved from input prompts defined in the 'fields' schema earlier or a return from the acquire block
  # i.e. Authorization : Bearer [given access token]
  headers("Authorization": "Bearer #{connection["access_token"]}")  

  # Used in conjunction with password function
  # i.e. sends the input as username and password in HTTP authentication
  user(connection["username"])   
  password(connection["username"])
end
```

> The `apply` block will not be applied to any requests made in `acquire`. So you will have to include the required credentials for a successful API request there.

### Other authentication methods
Check out the other authentication methods we support as well as how to set up a custom connector that works for on-premise connections. [Go back to our list of authentication methods](/developing-connectors/sdk-2/authentication.md) or check our our [best practices](/developing-connectors/sdk-2/best-practices.md) for some tips.

### Next section
If you're already familiar with the authentication methods we support, check out the actions that our SDK supports as well as how to implement them. [Learn more](/developing-connectors/sdk-2/action.md)
