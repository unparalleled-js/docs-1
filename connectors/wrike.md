---
title: Workato connectors - Wrike
date: 2019-05-28 18:00:00 Z
---

# Wrike

[Wrike](https://www.Wrike.com/) is an online project management software that provides user tracking and file sharing to enable collaboration between co-located and distributed teams.

## API version

The Wrike connector uses [Wrike REST API v4](https://developers.wrike.com/documentation/api/overview).

## How to connect to Wrike on Workato

To enable Workato to interact with Wrike data, you have to use the Wrike connector. The Wrike connector uses OAuth2 authentication. Providing these credentials assure Wrike that the user is giving permission for Workato to access their account data. 

![Wrike connector](/assets/images/connectors/wrike/wrike-connector.png)
*Wrike connector*

Entailed in the permissions are scopes that define how the connectors is allowed to interact with Wrike data. For example, the [create invitation action] requires the following scopes: *Default*, *amReadWriteInvitation*.

You can edit the scope of the connectors by opening the **Advanced settings** dropdown. Select permissions to request for this connection. Defaults to **Default** if left blank. To enable the full suite of Workato triggers and action, you can use **select all** to request for all scopes. 

![Wrike connector API scope](/assets/images/connectors/wrike/wrike-connector-permissions.png)
*Wrike connector API scope*

To set up your Wrike connector, click on **Link your account**.

A popup will appear that requests for your Wrike login credentials. Input your **Username / Password** into the fields provided.

![Username/password connection](/assets/images/connectors/Wrike/wrike-connector-login.png)
*Username/Password connection*

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Email</td>
      <td>The email of the Wrike account to connect.</td>
    </tr>
    <tr>
      <td>Password</td>
      <td>The password of this Wrike account.</td>
    </tr>
  </tbody>
</table>

