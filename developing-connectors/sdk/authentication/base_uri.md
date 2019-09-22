---
title: SDK - Defining a Base URI
date: 2018-05-24 14:00:00 Z
---

# Base URI
In some cases, defining a base URI can reduce the amount of redundancy in your code.

## Sample code snippet
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
In this example, we introduced a new block in our `connection:` block called `base_uri:`. This allows us to define a URI that will be prepended to any URIs we define later on in the connector code.

This saves users from having to continuously define the entire URI especially when the base URI contains user input. This is often the case when dealing with applications that allow users to have their own subdomains.

### Other authentication methods
Check out the other authentication methods we support as well as how to set up a custom connector that works for on-premise connections. [Go back to our list of authentication methods](/developing-connectors/sdk/authentication.md) or check our our [best practices](/developing-connectors/sdk/best-practices.md) for some tips.

### Next section
If you're already familiar with the authentication methods we support, check out the actions that our SDK supports as well as how to implement them. [Learn more](/developing-connectors/sdk/action.md)
