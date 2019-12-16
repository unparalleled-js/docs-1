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
The Zendesk connector uses OAuth2. This will require you to authorize Workato on Zendesk to give Workato access to your Zendesk instance.

### Specify subdomain
Input your Zendesk **subdomain** and click **link your account**.

![Subdomain setup](~@img/connectors/zendesk/domain-setup.png)
*Subdomain setup*

| Field     | Description |
|-----------|-------------|
| Subdomain | The Zendesk subdomain to connect. If your Zendesk url is `https://acme.zendesk.com`, then the subdomain is `acme`. |

### Authentication flow for Zendesk
You will be redirected to Zendesk. Login to Zendesk and complete a one-time authorization of Workato in your Zendesk instance.

![Authentication on Zendesk](~@img/connectors/zendesk/basic-authentication.png)
*Authentication on Zendesk*

| Field    | Description |
|----------|-------------|
| Email    | The email of the Zendesk account to connect. |
| Password | The password of the Zendesk account to connect. |
