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

```ruby

```
