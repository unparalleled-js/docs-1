---
title: Workato connectors - Zendesk
date: 2019-05-28 18:00:00 Z
---

# Zendesk
[Zendesk](https://www.zendesk.com/) is a cloud ticketing solution that empowers customer engagement.

## API version
The Zendesk connector uses [Zendesk REST API](https://developer.zendesk.com/rest_api/docs/zendesk-apis/resources).

## How to connect to Zendesk on Workato

The Zendesk connector uses OAuth2 authentication. Providing these credentials assure Zendesk that the user is giving permission for Workato to access their account data.

Input your Zendesk **subdomain** and click **link your account** as seen in the example below.

![Domain setup](/assets/images/connectors/zendesk/domain-setup.png)
*Domain setup*

A popup will appear that requests for your Zendesk login credentials. Input your **Username / Password** into the fields provided.

![Username/password connection](/assets/images/connectors/zendesk/basic-authentication.png)
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
      <td>Subdomain</td>
      <td>The Zendesk company instance to connect. If your Zendesk url is <code>https://acme.zendesk.com</code>, then the instance name is <code>acme</code>.</td>
    </tr>
    <tr>
      <td>Email</td>
      <td>The email of the Zendesk account to connect.</td>
    </tr>
    <tr>
      <td>Password</td>
      <td>The password of this Zendesk account.</td>
    </tr>
  </tbody>
</table>
