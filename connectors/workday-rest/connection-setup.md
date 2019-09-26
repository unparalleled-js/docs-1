---
title: Workato connectors - Workday REST approve/reject inbox task action
date: 2019-08-01 00:00:00 Z
---

# Workday REST Connection

## How to connect to Workday on Workato

The Workday REST connector uses the [Workday REST API](https://doc.workday.com/reader/wsiU0cnNjCc_k7shLNxLEA/HvgwLwxCHVdBlZUTNd9s7A). Workday recommends using an Integration System User (ISU) for integration using third party services like Workato.

### Connect to Workday on Workato

![Workday connection fields](/assets/images/workday-rest/workday-rest-connection.png)
*Workday connection fields*

| Connection field  | Description |
| ----------------- | ----------- |
| Connection name   | Give this Workday connection a unique name that identifies which Workday tenant it is connected to. |
| REST API endpoint | This is the base URL of all requests made to your Workday instance. |
| Authorization endpoint | Authorization endpoint of your Workday instance.               |  
| Token endpoint    | Token endpoint of your Workday instance.                            |
| Client ID         | Client ID of theAPI Client you created to connect to Workato.       |
| Client secret     | Client secret of the API Client you created to connect to Workato.  |
| Refresh token     | Provide a refresh token if this connection is restricted to an integration user instead of a user account. See [API Client](#api-client) for more details. |

## API Client
You will need to create an API client to connect to Workday REST API. There are 2 ways to connect using API clients:
1. Authorize using a user account
2. Use an API Client for Integration

### API Client for user account
Use a regular **API Client** to authorize a connection to the REST API using a user account.

First, navigate to the **View API Clients** page by typing it into the search bar. You should see this screen. Here, you will see the endpoints required for the connection. Take note of **REST API endpoint**, **Token endpoint** and **Authorization endpoint**.

![View API Clients](/assets/images/workday-rest/view-api-client-endpoints.png)
*View API clients*

Click on an existing API Clients that is available to integration if there are any. Otherwise, you need to create a new one. Navigate to **Register API Client** in your Workday instance.

![Register API Client](/assets/images/workday-rest/register-api-client.png)
*Registering a new client*

- Enter a meaningful name to indicate that this API client is used for Workato recipes
- Select **Authorization Code Grant** for **Client Grant Type**
- Select **Bearer** for **Access Token Type**
- Use `https://www.workato.com/oauth/callback` as the Redirection URL
- Select all the **OAuth2 scopes** and **Functional Area scope** that you need for the recipes you intend to create

![API Client credentials](/assets/images/workday-rest/api-client-details.png)
*API client details*

Remember to save the **Client ID** and **Client Secret** before clicking **Done**. This will be required to create a Workday REST connection.

### API Client for Integrations
If you wish to use a manually generated token to connect to Workday, you will need to register an **API client for integration**. This is required when using an ISU that does not have login access and is used only for API access.

Navigate to **Register API Client for integration** in your Workday instance.

![Register API Client for Integrations](/assets/images/workday-rest/register-api-client-for-integration.png)
*Registering a new client for Integrations*

- Enter a meaning name to indicate that this API client is used for Workato recipes
- Select **Non-Expiring Refresh Tokens** to avoid regenerating and reconnecting
- Select all the **OAuth2 scopes** and **Functional Area scope** that you need for the recipes you intend to create

![API client details](/assets/images/workday-rest/api-client-for-integration-details.png)
*API client details*

Remember to save the **Client ID** and **Client Secret** before clicking **Done**. This will be required to create a Workday REST connection.

Lastly, navigate to **Action** > **API Client** > **Manage Refresh Tokens for Integrations**.

![Generate refresh token](/assets/images/workday-rest/generate-refresh-token.png)
*Generate refresh token*

Select the Integration user to perform all recipe actions.

![Select refresh token for ISU](/assets/images/workday-rest/choose-isu.png)
*Select refresh token for ISU*

If there are no existing refresh tokens, select **Generate new refresh token** and copy the new **Refresh token**. This will be required to create a Workday REST connection.

![Refresh token for ISU](/assets/images/workday-rest/isu-refresh-token.png)
*Refresh token for ISU*
