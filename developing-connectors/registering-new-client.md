---
title: Registering a New client
date: 2019-05-22 23:00:00 Z
---
#Registering New Client

The prebuilt Workato connectors are designed to cater to most of your business needs. However, if required, you can use a custom client in order to satisfy use-case requirements beyond the scope of Workato's prebuilt connectors.

This is different from creating your own [Custom Actions](/developing-connectors/custom-actions.md), where you are designating new endpoints from the one preconfigured in the Workato connectors.

## Why register a new client
There may be use-cases where the scope of the prebuilt connector is insufficient. Therefore, you need to register a custom client with specific scopes to satisfy your business use-case.

#### Use custom clients with Workato's connected apps

When you are using a customized connectors, with your own client, on Workato platform, you are still able to make use of all other prebuilt connectors. You will be asked to provide OAuth2 credential information (e.g. Client ID, Client Secret).

#### Developing new connectors
When developing new connectors, you will be using a custom client. For more information please visit the documentation for the [HTTP universal connector](/developing-connectors/http.md) or the [SDK](/developing-connectors/sdk.md).

## Callback URL

Many cloud apps use OAuth2 and part of the OAuth2 flow involves a callback URL (or **Redirect URL**). Use the Workato callback URL `https://www.workato.com/oauth/callback` to let your client interact with Workato.

Some cloud apps, like Google, require additional measures in the form of an Authorized Domains List. This is a security measure to prevent unwanted access to your account. If you did not register the callback URL, you may encounter error 400.
|   ![Error 400. Redirect URI Mismatch](/assets/images/developing-connectors/registering-new-clients/error-redirect-url-mismatch.png)|
  |:-----|
  *Error 400. Redirect URI Mismatch*

## Registering new client with callback URL

Let's take a look at the steps needed to register and authorize callback URL on Google Cloud Platform. We will start at the **Create Credential** page, since this is where most users encounter an issue.

| Instructions  | Reference  |
|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0. Create new **Client credential** <br><br> Google Cloud Platform does not accept the Workato callback URL as it is not found in the **Authorized Domains List**. | ![Create OAuth client ID](/assets/images/developing-connectors/registering-new-clients/create-oauth-client-id.png) <br><br> *Create OAuth Client ID* |
|1. Select **authorized domains list**<br><br> You can also access this page from  **Settings** -> **Credentials** -> **OAuth consent screen**|  ![OAuth consent screen](/assets/images/developing-connectors/registering-new-clients/oauth-Credentials.png) *OAuth consent screen* |
|2. Select **Add scope** and copy the required scopes. <br><br>Scopes for Google APIs https://www.googleapis.com/auth/admin.directory.group https://www.googleapis.com/auth/admin.directory.user <br><br>To effectively enable Workato to automate your business processes, it is important to define the following scopes for the client.| ![Add scope](/assets/images/developing-connectors/registering-new-clients/add-scope.png) *Add scope*  |
| 3. Add "workato.com" to **Authorized domains**. Then, click **Save** at the bottom of the page. <br><br>Your should be brought back to the **Credentials** page. | ![Authorize workato](/assets/images/developing-connectors/registering-new-clients/authorize-workato.png) <br><br> *Authorize Workato* |
| 4. Select **Create Credentials** and authorize Workato callback with the callback URL `https://workato.com/oauth/callback`. | ![Authorized Redirect URL](/assets/images/developing-connectors/registering-new-clients/valid-authoized-redirect-uri.png) <br><br> *Authorized Redirect URL* |
|5. Once done, you would be able to retrieve the necessary information (**Client ID** and **Client Secret**) for OAuth2 from your newly created custom Workato client. | ![completed Client Credential Page](/assets/images/developing-connectors/registering-new-clients/completed-client-credential.png) <br><br> *Completed Client Credential Page* |

Now your custom client is ready to be used in your HTTP or SDK connector.
___

#### Frequently encountered problems
We have noticed that some of our customers were directed to verify the domain `http://www.workato.com`. It would be impossible to resolve the issue by this method as you do not have ownership of the domain.

If you find yourself at this page, please circle back to the **Credential** page and register your custom client from **Create credentials**.

  ![Request to verify ownership of workato.com](/assets/images/developing-connectors/registering-new-clients/webmaster-central-recommended.png)
*Request to verify ownership of workato.com*
