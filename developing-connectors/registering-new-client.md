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

Many cloud apps use OAuth2 for authentication. Part of the OAuth2 flow involves a callback URL (or **Redirect URL**). Use the callback URL `https://www.workato.com/oauth/callback` to complete the flow with Workato.

Some cloud apps, like Google, require you to register this callback URL at the point of client registration. It may also involve authorizing this URL. This is a security measure to prevent unwanted access to your account. If you do not register the callback URL, you may encounter an error like this.

![400 Error. Redirect URI mismatch](/assets/images/developing-connectors/registering-new-clients/error-redirect-url-mismatch.png)
*400 Error. Redirect URI mismatch*

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
        <img src="/assets/images/developing-connectors/registering-new-clients/gcp-api-credentials.png"></img><br>
        <i>Google Cloud Platform API Credentials</i><br>
        </td>
    </tr>
    <tr>
      <td>2</td>
      <td>
        Select <b>Web application</b> and fill in the following fields:
        <ul>
          <li>Name</li>
          <li>Authorized redirect URIs</li>
          Use <code>https://www.workato.com/oauth/callback</code>
        </ul>
        <br>
        <img src="/assets/images/developing-connectors/registering-new-clients/create-oauth-client-web-app.png"></img><br>
        <i>Create OAuth client ID</i><br>
        </td>
    </tr>
    <tr>
      <td>3</td>
      <td>
        This is where most people encounter an <code>Invalid Redirect</code> message. To resolve this, select <b>authorized domains list</b>.<br>
        <br>
        <img src="/assets/images/developing-connectors/registering-new-clients/create-oauth-client-id.png"></img><br>
        <i>Invalid redirect URL</i><br>
        <br>
        <blockquote><i>Google Cloud Platform does not accept the callback URL because <code>workato.com</code> has not been added to the <b>Authorized Domains List</b></i>.</blockquote>
        <br>
        If the callback URL is valid, click <b>Create</b> and
        skip to <a href="#retrieve-client-credentials">Client credentials</a>.
      </td>
    </tr>
    <tr>
      <td>4</td>
      <td>
        You will be brought to the <b>OAuth consent screen</b> tab.<br>
        <br>
        Fill in the following fields (steps 5-7):<br>
        <ul>
          <li>Application name</li>
          <li>Add scope</li>
          <li>Authorized domain</li><br>
        </ul>
        <img src="/assets/images/developing-connectors/registering-new-clients/oauth-credentials-form.png"> </img><br>
        <i>OAuth consent screen</i><br>
        <br>
        Alternatively, you can access this page from  <b>APIs & Services</b> -> <b>Credentials</b> -> <b>OAuth consent screen</b>.<br>
      </td>
    </tr><tr>
      <td>5</td>
      <td>
        Copy <code>Workato</code> into <b>Application name</b><br>
        <br>
        <img src="/assets/images/developing-connectors/registering-new-clients/oauth-credentials.png"> </img><br>
        <i>Application name</i><br>
        </td>
    </tr>
    <tr>
      <td>6</td>
      <td>
        Select <b>Add scope</b> and copy the following scopes:<br>
        - <code>https://www.googleapis.com/auth/admin.directory.group</code><br>
        - <code>https://www.googleapis.com/auth/admin.directory.user</code><br>
        <br>
        <img src="/assets/images/developing-connectors/registering-new-clients/add-scope.png"></img><br>
        <i>Add scope</i><br>
        <br>
        <blockquote>To effectively enable Workato to automate your business processes, it is important to define the listed <i>scopes</i> for your client.</blockquote>
      </td>
    </tr>
    <tr>
      <td>7</td>
      <td>
        Copy <code>workato.com</code> into <b>Authorized domains</b> and click <b>Save</b>.<br>
        <br>
        <img src="/assets/images/developing-connectors/registering-new-clients/authorize-workato.png"></img><br>
        <i>Authorize Workato.com</i><br>
      </td>
    </tr>
    <tr>
      <td>8</td>
      <td>
        You will be brought to the <b>Credentials</b> tab.<br>
        <br>
        Once again, select <b>Create credentials</b> -> <b>OAuth client ID</b><br>
        <br>
        <img src="/assets/images/developing-connectors/registering-new-clients/gcp-api-credentials.png"></img><br>
        <i>Google Cloud Platform API Credentials</i><br>
        </td>
    </tr>
    <tr>
      <td>9</td>
      <td>
        Select <b>Web application</b> and fill in the following fields:
        <ul>
          <li>Name</li>
          <li>Authorized redirect URIs</li>
          Use <code>https://www.workato.com/oauth/callback</code>
        </ul>
        Click <b>Create</b>.<br>
        <br>
        <img src="/assets/images/developing-connectors/registering-new-clients/valid-authoized-redirect-uri.png"></img><br>
        <i>Valid redirect URL</i><br>
      </td>
    </tr>
    <tr>
      <td>10</td>
      <td>
        Done! You have created a custom client on Google Cloud Platform.<br>
        <br>
        <img src="/assets/images/developing-connectors/registering-new-clients/new-workato-client.png"></img><br>
        <i>New custom client</i><br>
      </td>
    </tr>
  </tbody>
</table>

## Retrieve client credentials

Now your custom client is ready to be used in your HTTP or SDK connector.

Open your custom client (e.g. `Workato`) to view the client credentials. You will these credentials for OAuth2 authentication with a [custom connector](/developing-connectors.md).

![Client credentials](/assets/images/developing-connectors/registering-new-clients/completed-client-credential.png)
*Client credentials*

___

#### Frequently encountered problems
We noticed that some of our customers were misdirected to verify the domain `http://www.workato.com` on Google Cloud Platform like in the screenshot below.

![Request to verify domain](/assets/images/developing-connectors/registering-new-clients/webmaster-central-recommended.png)
*Request to verify domain*

**This is not a required step.** If you find yourself at this page, please circle back to <b>APIs & Services</b> -> <b>Credentials</b> ([Step 1](#registering-new-client-with-callback-url)).
