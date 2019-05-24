---
title: Registering a new client
date: 2019-05-22 23:00:00 Z
---
# Registering a New Client

The prebuilt Workato connectors are designed to cater to most of your business needs. However, there will be instances where you have a use-case with requirements that go beyond the scope of Workato's prebuilt connectors.

## Why register a new client

In cases where the scope of the prebuilt connector is insufficient, you need to register a custom client with relevant scopes to satisfy your use-case.

This applies only to connectors that use OAuth2 authentication. These connectors use OAuth2 clients to interact with the API on behalf of your account, and usually have a fixed set of scopes attached to it. This means that the connector may not be able to interact with all the endpoints of an API.

#### Use custom clients with Workato's connected apps

To use a custom client, you will need to create a custom connector. Use your custom client credentials with the [HTTP universal connector](/developing-connectors/http.md) or the [SDK](/developing-connectors/sdk.md). This way, you can make use of the additional scopes from your custom client together with all the other connectors on Workato's platform.

## Callback URL

Many cloud apps use OAuth2 for authentication. Part of the OAuth2 flow involves a callback URL (or **Redirect URL**). Use the Workato callback URL `https://www.workato.com/oauth/callback` to complete the flow with Workato.

Some cloud apps, like Google, require you to register this callback URL at the point of client registration. It may also involve authorizing this URL. This is a security measure to prevent unwanted access to your account. If you do not register the callback URL, you may encounter an error like this.

![400 Error. Redirect URI Mismatch](/assets/images/developing-connectors/registering-new-clients/error-redirect-url-mismatch.png)
*400 Error. Redirect URI Mismatch*

## Registering new client with callback URL

Let's go through an example of registering a new client on Google Cloud Platform.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='10%'>Step</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>
        Select <b>Create credentials</b> -> <b>OAuth client ID</b><br>
        <br>
        <img src="/assets/images/developing-connectors/registering-new-clients/gcp-api-credentials.png"></img>
        <i>Google Cloud Platform API Credentials</i><br>
        </td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        Select <b>Web application</b>, and fill up the form accordingly.<br>
        <br>
        <img src="/assets/images/developing-connectors/registering-new-clients/create-oauth-client-web-app.png"></img>
        <i>Create OAuth client ID</i><br>
        <br>
        <b>Name</b> the client as desired. Next, provide this Workato callback URL <code>https://www.workato.com/oauth/callback</code> under <b>Authorized redirect URIs</b>.
        </td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        Select <b>authorized domains list</b>.<br>
        <br>
        <img src="/assets/images/developing-connectors/registering-new-clients/create-oauth-client-id.png"></img>
        <i>Create OAuth client ID</i><br>
        <br>
        Google Cloud Platform does not accept <code>workato.com</code> as it is not found in the <b>Authorized Domains List</b>.
        </td>
    </tr>
    <tr>
      <td>4</td>
      <td>
        You will be brought to the <b>OAuth consent screen</b> tab.<br>
        <br>
        <img src="/assets/images/developing-connectors/registering-new-clients/oauth-Credentials.png"> </img><br>
        <i>OAuth consent screen</i><br>
        <br>
        You can also access this page from  <b>APIs & Services</b> -> <b>Credentials</b> -> <b>OAuth consent screen</b>
      </td>
    </tr>
    <tr>
      <td>5</td>
      <td>
        Select <b>Add scope</b> and copy the required scopes.<br>
        <br>
        <img src="/assets/images/developing-connectors/registering-new-clients/add-scope.png"></img><br>
        <i>Add scope</i><br>
        <br>
        <u>Scopes for Google APIs</u><br>
        - <code><i>https://www.googleapis.com/auth/admin.directory.group</i></code><br>
        - <code><i>https://www.googleapis.com/auth/admin.directory.user</i></code><br>
        <br>
        To effectively enable Workato to automate your business processes, it is important to define the following scopes for the client.
      </td>
    </tr>
    <tr>
      <td>6</td>
      <td>
        Copy the domain name <code>workato.com</code> and <b>Save</b>.<br>
        <br>
        <img src="/assets/images/developing-connectors/registering-new-clients/authorize-workato.png"></img><br>
        <i>Authorize Workato</i><br>
        <br>
        This register Workato as an authorized domain in your Google Cloud Platform account.<br>
        <br>
        Your will be brought back to the <b>Credentials</b> page.
      </td>
    </tr>
        <tr>
      <td>7</td>
      <td>
        You will be brought to the <b>Credentials</b> tab.<br>
        <br>
        <img src="/assets/images/developing-connectors/registering-new-clients/gcp-api-credentials-0.png"></img>
        <i>Google Cloud Platform API Credentials</i><br>
        </td>
    </tr>
    <tr>
      <td>8</td>
      <td>
        Repeat Step 1 and 2.<br>
        <br>
        Select <b>Create credentials</b> -> <b>OAuth client ID</b> -> <b>Web application</b><br>
        <br>
        <img src="/assets/images/developing-connectors/registering-new-clients/valid-authoized-redirect-uri.png"></img><br>
        <i>Authorized Redirect URL</i><br>
        <br>
        Now that you have authorized the <code>Workato.com</code> domain, the call back URL <code>https://www.workato.com/oauth/callback</code> will be valid <b>Authorized redirect URIs</b>.
      </td>
    </tr>
    <tr>
      <td>9</td>
      <td>
        You can now retrieve the <b>client credentials</b>.<br>
        <br>
        <img src="/assets/images/developing-connectors/registering-new-clients/completed-client-credential.png"></img><br>
        <i>Completed Client Credential Page</i><br>
        <br>
        Once done, you would be able to retrieve the necessary OAuth2 authentication information (<b>Client ID</b> and <b>Client Secret</b>) for your newly created custom Workato client.
      </td>
    </tr>
  </tbody>
</table>

Now your custom client is ready to be used in your HTTP or SDK connector.
___

#### Frequently encountered problems
We noticed that some of our customers were misdirected to verify the domain `http://www.workato.com` on Google Cloud Platform like in the screenshot below.

![Request to verify domain](/assets/images/developing-connectors/registering-new-clients/webmaster-central-recommended.png)
*Request to verify domain*

**This is not a required step.** If you find yourself at this page, please circle back to <b>APIs & Services</b> -> <b>Credentials</b> ([Step 1](#registering-new-client-with-callback-url)).
