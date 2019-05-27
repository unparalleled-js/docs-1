# Test

Test endpoint to ensure that connection is successful.

Typically, this should be a request that will always be accessible to any user.

Here are some examples:

```ruby
{
  title: 'My cisco connector',

  connection: { ... },

  test: lambda do |connection|
    get("https://person.clearbit.com/v1/people/email/eeshansim@gmail.com")
  end

  actions: { ... },
  triggers: { ... },
  object_definitions: { ... },
  picklists: { ... },
  methods: { ... },
}
```

```ruby
{
  title: 'My cisco connector',

  connection: { ... },

  test: lambda do |connection|
    get("https://app.clicktime.com/api/1.3/session")
  end

  actions: { ... },
  triggers: { ... },
  object_definitions: { ... },
  picklists: { ... },
  methods: { ... },
}
```

### Other authentication methods
Check out the other authentication methods we support. [Learn more]()

### Next section
If you're already familiar with the authentication methods we support, check out the triggers that our SDK supports as well as how to implement them. [Learn more]()
