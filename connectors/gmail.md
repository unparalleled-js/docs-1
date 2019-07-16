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

Based on Google's updated security policies, Gmail triggers or download attachment actions can only be used by paid G Suite accounts. These accounts must whitelist Workato's Gmail connector app and grant it read permission before it can successfully use these triggers and actions. The following section will guide you through the required steps.

## Whitelist Workato Gmail connector
[Check out](https://support.google.com/a/answer/7281227) Google’s detailed instructions for managing OAuth based access to connected apps. Below is a step-by-step guide to Whitelist Workato Gmail Connector app for your GSuite account.

### Step 1. Login to the Google Admin Console
You must be signed in as a [super administrator](https://support.google.com/a/answer/2405986#super_admin) to complete the actions listed below.

![Login to Google admin console](/assets/images/gmail/admin-console.png)
*Login to Google Admin Console*

### Step 2. Navigate to the API permissions in Security Settings
From the Admin console home, go to **Security > API Permissions**.

![API permissions](/assets/images/gmail/api-permissions.png)
*API permissions*

### Step 3. Add Workato Gmail Connector to Trusted Apps  
At the bottom of the list of apps, click the **Trusted Apps** link.

![Click on Trusted Apps](/assets/images/gmail/trusted-apps.png)
*Click on Trusted Apps*

Click Whitelist an App **+** (Add icon) in the bottom right corner. The **Add App To Trusted List** window opens.

![Trusted Apps](/assets/images/gmail/add-trusted-app.png)
*Trusted Apps*

In the Select App Type list, select **Web applications**.

![Select App Type](/assets/images/gmail/select-app-type.png)
*Select App Type*

Fill in the OAuth2 Client ID for the Workato Gmail Connector.
```
763335457294-gp4359qrjgu7vl96eit0p2n725197oki.apps.googleusercontent.com
```

![Fill in the OAuth2 Client ID](/assets/images/gmail/add-client-id.png)
*Fill in the OAuth2 Client ID*

Click **Add** to save the changes.

![Add to save changes](/assets/images/gmail/add-app.png)
*Add to save changes*

Lastly, set **Read Email Permission** to **Yes** when [setting up the connection](#how-to-connect-to-gmail-on-workato) for Gmail.

![Select Yes for read email permission](/assets/images/gmail/select-read-email-permission.png)
*Select Yes for read email permission*
