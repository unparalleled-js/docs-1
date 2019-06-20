---
title: SDK - Secure Connection
date: 2018-10-10 00:00:00 Z
---

# Secure Connection
HTTP requests made in a custom adapter will be sent from Workato by default. This means that all traffic will come through our [IP addresses](/security.md#traffic-from-workato). However, you can also configure it to route all requests through an [on-prem agent](/on-prem.md).

## Enable connection through on-prem agent
By default, a custom adapter does not provide an option to connect through an on-prem agent. As a result, when setting up a connection, there will not be a way to configure it.

![Connection without option to use OPA](/assets/images/sdk/connection_without_secure_tunnel_option.png)
*Connection without option to use OPA*

To enable the option for connecting through an OPA, all you have to do is add the `secure_tunnel` property in your custom adapter code. This should be set to `true` and be defined as a top level property.
```ruby
{
  title: "Mandrill",

  # This is needed for OPA
  secure_tunnel: true,

  connection: {
    fields: [
      {
        name: 'api_key',
        label: 'API key',
        control_type: 'password',
        optional: false
      }
    ],
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
  },
}
```

With this property added, an input field will be visible when setting up a connection to choose an existing on-prem agent in your account.

![Connection with option to use OPA](/assets/images/sdk/connection_with_secure_tunnel_option.png)
*Connection with option to use OPA*

Learn how to setup an on-prem agent [here](/on-prem/setup.md).

### Other authentication methods
Check out the other authentication methods we support as well as how to set up a custom connector that works for on-premise connections. [Go back to our list of authentication methods](/developing-connectors/sdk-2/authentication.md) or check our our [best practices](/developing-connectors/sdk-2/best-practices.md) for some tips.

### Next section
If you're already familiar with the authentication methods we support, check out the actions that our SDK supports as well as how to implement them. [Learn more](/developing-connectors/sdk-2/action.md)
