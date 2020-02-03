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
      <td>This is the ID of the top level Google Ads Manager account. Most actions and triggers will then require that you provide the Client Customer ID of the accounts which this account manages. <br>
      If you are looking to build automations for a single Google Ads account, it must have a manager account which can be created <a href='https://ads.google.com/home/tools/manager-accounts/'>here</a> if necessary.  </td>
    </tr>
  </tbody>
</table>
