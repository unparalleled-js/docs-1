---
title: Security Best Practices for APIs
date: 2019-04-09 09:30:00 Z
---

# Security Best Practices for APIs

Workato Callable recipes as APIs are a powerful feature that allows access to Workato functionality from other recipes as well as from sources external to Workato. But, since recipes can perform operations on your business systems, it is important to avoid unauthorized access to them through APIs.

Here are some recommendations for maintaining security when using APIs:

1) **Treat API tokens like a password**. They are confidential information that can grant access to your API to anyone who possesses them. As a best practice, don't distribute them to clients through insecure channels such as email. Use a secure messaging system or a document system such as Dropbox to which both the API owner and the intended client have access.

2) **Don't distribute the same API token to multiple people**. An API token identifies a client and enables monitoring requests in the API dashboard on a per-client basis. If multiple people have the same API token, there is no ready way to determine who is making calls to your API.

3) **Consider having a policy to periodically refresh API tokens**. This is similar to expiring a password and ensures that any compromise of an API token does not provide very long-term access to systems. Alternatively, distribute a JWT token with an expiration time set ("exp" claim). This will give the token a limited lifetime.

4) **Use IP whitelisting** (part of the [Access Profile](/api-mgmt/api-client-mgmt.md) for a client) to restrict the originating IPs that are allowed to have API access. A whitelist is a best practice from a security perspective. However, some clients may not have a fixed IP address (for example, clients connected from a home network may get varied IPs from their providers), or may connect from multiple IP addresses (for example, while traveling). In this case, it may not be readily possible
to whitelist their IPs.

5) Consider distributing a JWT token encapsulating the Auth Token secret instead of the secret itself. JWT tokens are signed, include the client identity and can have an expiration. Learn how to set up a [JWT token](api-mgmt/access-tokens.md#jwt-tokens).

6) If a person should no longer have access to APIs (e.g. because they are leaving employment), ensure that a person's client profile is disabled or deleted in Workato.
