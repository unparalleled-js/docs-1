---
title: HTTP connector - HTTP connection setup
date: 2019-11-17 11:00:00 Z
isTocVisible: true
---

# HTTP connection setup
In order to interact with an API, we first need to set up our connection to the app to interact with. Click the `Link your account` button and the connection popup appears.

![Connection popup for HTTP connector](/assets/images/developing-connectors/http/connection-popup.png)
*Connection popup for HTTP connector*

Configure the following input fields to connect successfully. Apart from authentication type and fields subsequently generated when a type is selected, most fields can usually be left to their default values.

| Input field                | Description      |
| -------------------------- | ---------------- |
| Connection name            | Give your HTTP connection a name to identify this connection.
| Authentication type        | Type of authentication used to connect to your app. Refer to the API documentation of the app you're connecting to for more information. |
| Use client SSL certificate | `Yes` if your API requires client SSL certificates. `No` if it does not require client SSL certificates. |
| Is this app in a private network? | `Yes` if you're connecting to an on-premise app behind the firewall. This requires an [on-premise agent](/on-prem.md) to be set up in Workato. `No` if you're connecting to an app on the public cloud. |

## Authentication types
The following section details the different authentication types and how to set them up. They include:
- [None](#authentication-type-none)
- [Basic](#authentication-type-basic)
- [Header auth](#authentication-type-header-auth)
- [Query params](#authentication-type-query-params)
- [Custom](#authentication-type-custom)
- [OAuth2 (authorization code grant)](#authentication-type-oauth2-authorization-code-grant)
- [OAuth2 (client credentials grant)](#authentication-type-oauth2-client-credentials-grant)

The process of setting up a non-OAuth2 connection on Workato is similar regardless of the authentication type. This is because after setting up the non-OAuth2 connection, you would need to test it out to ensure that it's valid. To do that, you would need to send out a test API request - a simple one would be a GET request. If it succeeds, you know that the connection is valid.

In this article, we provide a [basic auth example](#authentication-type-basic) as an example of a non-OAuth2 connection and an [OAuth2 example](#authentication-type-oauth2-authorization-code-grant).

## Authentication type: None
This allows you to create a connection without providing any authentication details. This is usually the case when you wish to just receive a webhook trigger from the app. Workato generates a URL for you to direct your webhooks to, and retrieves information from the webhook payload sent in.

![HTTP connector authentication type: None](/assets/images/developing-connectors/http/http-connector-auth-none.png)
*HTTP connector authentication type: None*

## Authentication type: Basic
This requires your username and password. An alternative to your username and password would be an API key or API token, retrieved from your account settings. This is encoded with Base64 in transit, over SSL. This is a common authentication flow.
![HTTP connector authentication type: Basic](/assets/images/developing-connectors/http/http-connector-auth-basic.png)
*HTTP connector authentication type: Basic*

### Example - connecting to Jira via basic authentication and testing the connection via a GET action
Let’s try to connect to Jira using basic authentication - Jira's documentation for basic authentication can be found [here](https://developer.atlassian.com/cloud/jira/platform/jira-rest-api-basic-authentication/?_ga=1.137752242.320850437.1478498822). In the case of JIRA, we need to provide several things: subdomain (which tells us what JIRA company instance to connect to, essentially - your company’s Jira database), username and password.

For this example, I’ve created a company instance in Jira with a company name Workato321, and Jira has automatically assigned my subdomain to be workato321.atlassian.net

I’ve also created a project in my new Jira instance, named PPP, to be used for testing out my connection later.

#### Setting up your Jira connection

![Jira Connection](/assets/images/http/jira-connection.png)
*Jira screenshot with subdomain workato321.atlassian.net and existing project PPP*

We can provide our username and password in the connection settings as below. For the field **On-prem secure agent**, I selected no gateway as my Jira instance is on the cloud.

![Jira Connection settings](/assets/images/http/connection-settings-jira.png)
*Jira connection settings*

Click `Connect`. For non-OAuth2 connections, remember to send a quick test request, e.g. a GET request, to verify that you are successfully connected to the app.

## Authentication type: Header auth
For applications which require additional headers outside of the usual username and password or API key, or if you want to customize the headers sent in the request. Header authentication can be used when you have a generated token ready for use.
![HTTP connector authentication type: Header auth](/assets/images/developing-connectors/http/http-connector-auth-header.png)
*HTTP connector authentication type: Header authorization*

## Authentication type: Query params
For applications where the authentication structure is based on validating an API key as a parameter. What you need to do is to add the parameter key/value pair in the params authorization field.
![HTTP connector authentication type: Query params](/assets/images/developing-connectors/http/http-connector-auth-query-params.png)
*HTTP connector authentication type: Query params*

## Authentication type: Custom
Custom allows you to use a combination of input fields as needed.
![Custom http connector](/assets/images/developing-connectors/http/http-connector-auth-custom.png)
*HTTP connector authentication type: Custom*

| Input field                 | Description |
| --------------------------- | ----------- |
| Authorization URL           | URL that Workato redirects you to when you click on the ‘Connect’ button. This usually brings you to the login screen of your app. Some APIs require that you include certain parameters in the authorization URL. Common examples are response_type (`code` or `token`) and scope (`read`, `write`, `admin`, etc.). This should be publicly available from the API documentation of the app you’re connecting to, under the Authentication section. |
| Token URL                   | URL that Workato will retrieve an auth token from. This auth token is used to verify that we have permission to access your app and its data. This should be publicly available from the API documentation of the app you’re connecting to, under the Authentication section. |
| Client ID and client secret | The client ID identifies you as the user who’s sending these API calls, while the client secret authenticates that you as this user. This is usually found in the Settings or Integrations page (or equivalent) of your logged in app account that you wish to connect to. This is specific to your account and should be kept secret. |

In addition, it requires you to have the following information ready.

## Authentication type: OAuth2 (authorization code grant)
OAuth2 is the authentication standard adopted by a number of cloud apps. It’s widely adopted because it allows you to give third parties access to your apps without having to disclose your username and password to the third party. In this case, Workato simply redirects you to your app, where you key in your login credentials, and that’s sufficient for the app to trust that Workato is acting on your behalf when it makes API requests.

The Authorization Code grant type is used by confidential and public clients to exchange an authorization code for an access token.

![HTTP (OAuth2 auth code grant) connector's connection fields](/assets/images/developing-connectors/http/http-connector-auth-oauth2-code-grant.PNG)
*HTTP (OAuth2 authorization code grant) connector's connection fields*

## Authentication type: OAuth2 (client credentials grant)
Using the client credentials grant, the client can request an access token using only its client credentials. This is usually used when the client is requesting access to the protected resources under its control or for machine-to-machine authentication where a specific user’s permission to access data is not required.

The client credentials grant type must only be used by confidential clients.

![HTTP (OAuth2 client cred grant) connector's connection fields](/assets/images/developing-connectors/http/http-connector-auth-oauth2-cred-grant.PNG)
*HTTP (OAuth2 client credentials grant) connector's connection fields*

OAuth2 authentication type requires the following fields.

| Information | Description |
| ----------- | ----------- |
| Credentials | A set of username and password for logging into your app to give permission for Workato to access the data in the app. This user (to whom the credentials belong) should have the correct permissions to read/write to the records (e.g. customer records, sales invoice records) you want to access. |
|  Redirect/callback URL (to be configured in the app) | The URL provided to the app for redirection back to Workato after going through the authentication flow and credentials/token exchange. Provide this URL `https://www.workato.com/oauth/callback` to the app if it asks for it in the Integration setup screen. |

### Example - connecting to Eventbrite via OAuth2
Let us run through an example of how we can connect to an OAuth2 application. In this case, we’ll use Eventbrite, an events management and ticketing application.

![Eventbrite OAuth2 authentication page](/assets/images/http/eventbrite-authentication.png)
*Eventbrite OAuth2 authentication page*

From the documentation page, we can obtain 2 of the required fields for our connection - the authorization URL and the access token URL. We would need to append further parameters to the URL. Eventbrite's documentation mentions that we'd need to post to this URL: `https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=YOUR_CLIENT_KEY`

But as Workato will handle the client key, the following is what's needed in the input field to connect.

Eventbrite authorization URL:
```ruby
https://www.eventbrite.com/oauth/authorize?response_type=code
```
Eventbrite access token URL:
```ruby
https://www.eventbrite.com/oauth/token
```

In order to connect to your Eventbrite account successfully, you would also need a set of client ID and client secret. To obtain this, you will need to register an app with Eventbrite so that they can assign the app with a client ID and secret. Log into Eventbrite and navigate to Account Settings > App Management.

![Eventbrite's App Management screen](/assets/images/http/eventbrite-app-management.png)
*Eventbrite's app management screen*

In the app management page, you will be able to find your client ID (also called key). Expand the Show Client Secret and OAuth Token section to retrieve the client secret, and navigate to the App Extension section to input the callback URL `https://www.workato.com/oauth/callback` into Eventbrite.

![Completed Eventbrite connection](/assets/images/developing-connectors/http/http-connector-auth-oauth2.png)
*Completed Eventbrite connection*

## HTTP setup documentation
Next, learn more about triggers and actions:

- [Building a HTTP trigger](/developing-connectors/http/building-http-trigger.md)
- [Building a HTTP action](/developing-connectors/http/building-http-action.md)
