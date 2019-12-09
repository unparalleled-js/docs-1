---
title: Workato connectors - Wrike
date: 2019-06-17 18:00:00 Z
search:
    keywords: ['wrike', 'connection', 'new', 'updated']
---

# Wrike

[Wrike](https://www.Wrike.com/) is an online project management software that enables collaboration between co-located and distributed teams.

## API version

The Wrike connector uses [Wrike REST API v4](https://developers.wrike.com/documentation/api/overview).

## How to connect to Wrike on Workato

The Wrike connectors uses OAuth2 authentication. This allows you to:
  * Define the scopes for the connector
  * Authenticate with Wrike

![Wrike connection](~@img/connectors/wrike/wrike-connector.png)
*Wrike connection*

### Scopes for Wrike connector

Entailed in the permissions are scopes that define how the connectors is allowed to interact with Wrike data. For example, the [create task action](/connectors/wrike/create-task-action) requires the following scopes: *Default*, *wsReadWrite*.

You can edit the scope of the connectors by selecting **Advanced settings** > **Api scope**.

![Wrike connector API scope](~@img/connectors/wrike/wrike-connector-permissions.png)
*Wrike connector API scope*

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th width='25%'>Field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Api scope</td>
      <td>
        Select permissions to request for this connection. To enable the full suite of Workato triggers and action, you can <b>select all</b> to request for all scopes. If left blank, the connector will only request: <i>Default</i>.
      </td>
    </tr>
  </tbody>
</table>
### Authenticate with Wrike

To log in with your user credentials, click on **Link your account**.

A popup will appear that requests for your Wrike login credentials. Input your **Username / Password** into the fields provided.

![Username/password connection](~@img/connectors/Wrike/wrike-connector-login.png)
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
      <td>The password of the Wrike account to connect.</td>
    </tr>
  </tbody>
</table>
