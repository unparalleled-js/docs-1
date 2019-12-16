---
title: Workato connectors - SAP  Concur
date: 2018-03-18 06:00:00 Z
---

# SAP Concur
SAP Concur is a software that provides travel and expense management services to businesses all over the world.

## How to connect to SAP Concur on Workato
The SAP Concur connector authenticates with OAuth2 protocol. It uses the authorization code grant flow for production instances and password grant for sandbox instances. Refer to the [SAP Concur API documentation](https://developer.concur.com/api-reference/authentication/apidoc.html) on **Authentication** for more details.

![Configured SAP Concur connection](~@img/concur/connection.png)

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Connection name</td>
      <td>Give this connection a unique name that identifies which SAP Concur instance it is connected to.</td>
    </tr>
    <tr>
      <td>Implementation instance</td>
      <td>
        Select <b>Yes</b> to connect to a Concur implementation server.<br>
        For existing connections, this is left blank and defaults to <b>No</b>.
      </td>
    </tr>
    <tr>
      <td>Username</td>
      <td>
        Username or user ID to authenticate the password grant.<br>
        Only required if connecting to an implementation instance.
      </td>
    </tr>
    <tr>
      <td>Password</td>
      <td>
        Password to authenticate the password grant.<br>
        Only required if connecting to an implementation instance.
      </td>
    </tr>
    <tr>
      <td>Location</td>
      <td>
        Select the location of your Concur implementation server.<br>
        Only required if connecting to an implementation instance.
      </td>
    </tr>
    <tr>
      <td>Client ID</td>
      <td>
        Client ID of your implementation application.<br>
        Only required if connecting to an implementation instance.
      </td>
    </tr>
    <tr>
      <td>Client secret</td>
      <td>
        Client secret of your implementation application.<br>
        Only required if connecting to an implementation instance.
      </td>
    </tr>
  </tbody>
</table>
