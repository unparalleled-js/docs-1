# Authentication
When you're looking to connect to an API, the first step is authenticating your custom connector. This means giving the API some way to know that it can trust you and send you potentially sensitive information.

Workato currently supports the following forms of authentication as well as custom authentication that gives you a free form way to authenticate yourself. Reading the documentation of the API you hope to connect to should help you determine which form of authentication is the most appropriate for the custom connector you are building.

- [Basic Authentication](authentication/basic-authentication.md)
- [OAuth 2.0](authentication/oauth2-authentication.md)
- [Header Authentication](authentication/header-authentication.md)
- [Custom Authentication](authentication/custom-authentication.md)
- [Test](authentication/test.md)
- [On-premise configuration](authentication/secure_connection.md)

## Next section
If you're already familiar with the authentication methods we support, check out the actions that our SDK supports as well as how to implement them. [Learn more](/developing-connectors/sdk/action.md)
