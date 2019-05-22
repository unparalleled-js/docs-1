# Registering New client
___

The prebuilt Workato connectors are designed to cater to most of your business needs. However if required, you can customise your own client in order to facilitate the interaction between your apps and the other connected apps on Workato.

Beyond customising your own [Custom Actions](/custom-actions.md), you can also register a new client to interact with your web application. In doing so, you would effective address the concerns of using the prebuilt Workato client.

## Why Register a New Client
There may be scenarios where it is necessary to alter permissioned access to your applications. Your company might decide to tailor specific scopes for the your business use cases. It might involve restricting or broadening the scope of the authorized application.

### Use Customized Clients with Workato's Connected apps

By registering your new client with Workato, you are staying connected with the ecosystem. This means that you are still able to link up your apps through Workato connectors and automate your business processes, whilst using your new customized client ID.

### Developing New Connectors
This means that you do not have to manually create connections with the other 1000+ apps that are within Workato's ecosystem.

Although, we offer the option to develop new connectors which are currently not available. For more information please visit the documentation for the [HTTP universal connector](/developing-connectors/http.md) or the [SDK](/developing-connectors/sdk.md).

## Issues with Callback URL (Redirect URL)

Most cloud apps require new clients to use OAuth2. You would have to provide a Workato callback URL (or **Redirect URL**) to establish a connection. In the process, you may find yourself failing to connect as the callback URL is not found in the app's Authorized Domains List. Thus, you may encounter the following issues.

#### Callback URL not found on the Authorized Domains List

Your cloud app does not accept your Callback URl as it is not found in the authorized domain list. This is where most users will encounter the issue where the Workato callback URL is invalid as it is not found in the **Authorized Domains List**.

![Create OAuth client ID](/assets/images/developing-connectors/registering-new-clients/create-oauth-client-id.png)
*Create OAuth Client ID*

#### Error 400

You may encounter error 400 if you did not verify the redirect URL.

![Error 400. Redirect URI Mismatch](/assets/images/developing-connectors/registering-new-clients/error-redirect-url-mismatch.png)
*Error 400. Redirect URI Mismatch*

#### Request to verify ownership
Google may prompt you to verify ownership of the domain. Since our customers do not have ownership of the domain, it would be impossible to resolve the issue by this method.

  ![Webmaster Central Recommended Actions](/assets/images/developing-connectors/registering-new-clients/webmaster-central-recommended.png)
*Webmaster Central Recommended Actions*


## Resolving Issue with Callback URL

Here is a simple step-by-step guide to resolving the issue with Authorized Domains List. Since Google Cloud Platform frequently returns this issue with Workato customer, we will use the Google Cloud Platform as an example.

1. Starting at the create client credentials page. We access **Settings** -> **Credentials** -> **OAuth consent screen**

![OAuth consent screen](/assets/images/developing-connectors/registering-new-clients/oauth-Credentials.png)
*OAuth consent screen*

2. To effectively enable Workato to automate your business processes, it is important to define the following scopes for the client.

      | Scopes for Google APIs  |
      |:--------------------|
      | https://www.googleapis.com/auth/admin.directory.group |
      | https://www.googleapis.com/auth/admin.directory.user |

You can do so by clicking on **Add scope**.

![Add scope](/assets/images/developing-connectors/registering-new-clients/add-scope.png)
*Add scope*


3. Next, add "workato.com" to **Authorized domains**. Then, click *Save* at the bottom of the page.

![Authorize workato](/assets/images/developing-connectors/registering-new-clients/authorize-workato.png)
*Authorize Workato*

4. Your should be brought back to the **Credentials** page. Go ahead and **Create Credentials** with the Workato Callback URL `https://workato.com/oauth/callback`.

![Authorized Redirect URI](/assets/images/developing-connectors/registering-new-clients/valid-authoized-redirect-uri.png)
*Authorized Redirect URI*

5. Once done, you would be able to retrieve the necessary information (**Client ID** and **Client Secret**) for OAuth2 from the Workato Client Credentials.

![completed Client Credential Page](/assets/images/developing-connectors/registering-new-clients/completed-client-credential.png)
*Completed Client Credential Page*
