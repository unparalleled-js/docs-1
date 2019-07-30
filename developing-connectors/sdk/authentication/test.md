# Testing your connection
Workato requires you to define a simple test to ensure that connection is successful. Typically, this should be a request that will always be accessible to any user.

## Sample code snippet
```ruby
{
  title: 'My cisco connector',

  connection: {
    # Some code here
  },

  test: lambda do |connection|
    get("https://person.clearbit.com/v1/people/email/eeshansim@gmail.com")
  end

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
  },
}
```

```ruby
{
  title: 'My cisco connector',

  connection: {
    # Some code here
  },

  test: lambda do |connection|
    get("https://app.clicktime.com/api/1.3/session")
  end

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
  },
}
```
The test is executed after an attempted connection using the information defined in the `connection:` block. This determines whether the connection was successful and should return a response with status code = 200.

### Other authentication methods
Check out the other authentication methods we support as well as how to set up a custom connector that works for on-premise connections. [Go back to our list of authentication methods](/developing-connectors/sdk/authentication.md) or check our our [best practices](/developing-connectors/sdk/best-practices.md) for some tips.

### Next section
If you're already familiar with the authentication methods we support, check out the actions that our SDK supports as well as how to implement them. [Learn more](/developing-connectors/sdk/action.md)
