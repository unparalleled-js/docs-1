---
title: Workato connectors - Zendesk
date: 2019-05-28 18:00:00 Z
search:
    keywords: ['zendesk', 'connection']
---

# Zendesk
[Zendesk](https://www.zendesk.com/) is a cloud ticketing solution that empowers customer engagement.

## API version
The Zendesk connector uses [Zendesk REST API](https://developer.zendesk.com/rest_api/docs/zendesk-apis/resources).

## How to connect to Zendesk on Workato
The Zendesk connector uses OAuth2 authentication.

Authorize Workato to access your Zendesk via the OAuth2 standard. This will require you to login to Slack and authorize the permissions that Workato requests.

The Zendesk connector uses the OAuth2 flow to authenticate with Zendesk and authorize Workato. This allows Workato to access This will allow Workato to access your Zendesk instance.

### Specify subdomain
Input your Zendesk **subdomain** and click **link your account**.

![Domain setup](/assets/images/connectors/zendesk/domain-setup.png)
*Domain setup*

| Field     | Description |
|-----------|-------------|
| Subdomain | The Zendesk subdomain to connect. If your Zendesk url is `https://acme.zendesk.com`, then the subdomain is `acme`. |

### Authentication flow for Zendesk
You will be redirected to Zendesk to complete the authorization request. Authenticate yourself with Zendesk to complete the flow.

![Authentication on Zendesk](/assets/images/connectors/zendesk/basic-authentication.png)
*Authentication on Zendesk*

| Field    | Description |
|----------|-------------|
| Email    | The email of the Zendesk account to connect. |
| Password | The password of the Zendesk account to connect. |
