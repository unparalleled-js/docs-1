---
title: Gmail
date: 2019-12-19 23:00:00 Z
---

# Gmail
[Gmail](https://www.google.com/gmail) is a popular e-mail service used by both consumers and businesses alike.

The Gmail connector enables you to build powerful automation around Gmail and connect with other applications.

## API version
This connector uses Gmail [API v1](https://developers.google.com/gmail/api/v1/reference/).

## How to connect to Gmail on Workato
The Gmail connector uses OAuth 2.0 for authentication. When prompted, follow the on-screen [connection instructions](https://docs.workato.com/connections.html) and login to your Google account to connect.

Based on Google's updated security policies, Gmail triggers or download attachment actions can only be used by paid Gmail accounts. These accounts must whitelist Workato's Gmail connector app and grant it read permission before it can successfully use these triggers and actions. The following section will guide you through the required steps.

## Whitelist Workato Gmail connector
G Suite administrator must whitelist the Workato Gmail Connector app before connections can be made. The steps to whitelist an app are available in [Google FAQ](https://support.google.com/a/answer/7281227). Specifically in **Step 2. Add an app to the whitelist of trusted apps**, you will need to add the Workato Gmail connector.

1. As a G Suite super-admin, go to **Security → API Permissions → Trusted Apps** (towards the bottom of page).

2. Click on **+** icon at the bottom of the page. A popup titled **Add App To Trusted List** should appear.

3. In this popup, select **Web Application** and add the Workato Gmail Connector’s client ID:
   ```
   763335457294-gp4359qrjgu7vl96eit0p2n725197oki.apps.googleusercontent.com
   ```

4. Finally, click **Add**.
