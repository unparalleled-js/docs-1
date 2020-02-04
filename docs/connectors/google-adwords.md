---
title: Google AdWords
date: 2020-01-29 23:00:00 Z
---

# Google AdWords
[Google Ads](https://ads.google.com/) is an advertising service by Google for businesses wanting to display ads on Google and its advertising network. The AdWords program enables businesses to set a budget for advertising and only pay when people click the ads. The ad service is largely focused on keywords.

The Google AdWords connector enables you to build powerful automations around Google AdWords by triggering jobs based off new ads, new ad groups and new campaigns in Google Ad accounts that you manage. Use this to send data to downstream applications automatically and easily.

Furthermore, you'll be able to use the Google AdWords connector to download advertising reports, perform operations on campaigns and retrieve information about the customer accounts you manage as well.

## API version
Workato's Google AdWords connector uses the [AdWords API](https://developers.google.com/adwords/api/docs/guides/start).

## How to connect to Google AdWords on Workato
The Google AdWords connector uses OAuth 2 to authenticate with the Google AdWords API.

![Configure AdWords connection view](~@img/adwords/connection.png)

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
      <td>Give this Google AdWords connection a unique name that identifies which Google AdWords Manager account it is connected to.</td>
    </tr>
    <tr>
      <td>Manager account customer ID</td>
      <td>This is the ID of the top level Google Ads Manager account if it exists. If no Google Ads Manager account exists, supply the customer ID of the root Google Ads account.
      </td>
    </tr>
  </tbody>
</table>

### Finding your Manager account customer ID
A Google Ads manager account is a special type of Google Ads account that can manage normal accounts. You can create a Google Ads manager account [here](https://ads.google.com/home/tools/manager-accounts/) if you do not already have one.

When entering your Google Ads manager account, you can find your customer ID in the top navigation bar next to the name of your account.

![Top nav bar google ads manager](~@img/adwords/manager-acc-id.png)

### Linking your Google Ads account to a manager account
Navigate to the accounts section in the side bar of your Manager account. On the main screen, you should see an option to add accounts to your manager account.

![Add account to your manager](~@img/adwords/link-accounts.png)

You will then need to accept the manager request in the chosen Google Ads account.
