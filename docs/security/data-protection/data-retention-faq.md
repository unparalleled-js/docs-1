---
title: Data Retention FAQ
date: 2020-02-21 09:48:00 Z
---

# Data retention FAQ

Businesses want strong data security and protection from their cloud applications. Workato is no exception. From time to time, Workato reviews policies and implements features to address customer feedback, technology advances, security landscape, governmental regulations and compliance requirements. We are constantly enhancing the Workato platform to deliver robust data protection regime to our customers and be the most secure iPaaS in the market.

## Overview
Workato objective is to provide you with -
* better compliance with stringent data protection policies
* increased data protection as data is stored only for 30 or 90 days maximum depending on whether you have the add-on
* control over the data retention period
* job history streaming to export data to your choice of data warehouse

Maximum data retention period and ability to customize the data retention period depends on the plan and add-ons you have selected. Reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

## Customizing data retention period
Customer administrator or account owner can navigate to `Account Settings` > `Data retention` to configure the data retention period.

* Select data retention period unit, one of `Hours` or `Days`
* Specify number of hours or days depending on the data retention period unit selected

![Data retention period setting](~@img/security/data-protection/settings-data-retention-90.png)

## FAQ
**_What is the Workato data retention policy?_**

Data retention period configuration is available with the **Advanced Security and Compliance** (ASC) add-on. Table below shows the data retention policy supported by the Workato platform.

| Purchased Advanced Security and Compliance Add-on? | Maximum retention (days) | Configurable? |
| ----- | -------- | ------- |
|Yes|90|Yes (min 1 hour)|
|No|30|No|

**_What if we have configured data retention period?_**

If your custom retention value is greater than the maximum retention policy, then it will be reset to the maximum retention policy of 30 or 90 days depending on whether you have the Advanced Security and Compliance add-on.

If your custom retention value is less than 30 days, then it will not be affected.

**_When does the data get deleted?_**

All of the data that is older than the past 30 or 90 days, whichever applies to your account, will be deleted permanently.

**_How can we store data for longer than 30 or 90 days?_**

You can take advantage of on going-forward basis [job history streaming](../../job-history-replication.md) to store data for a longer term in your data warehouse of choice. Workato supports S3 and any data warehouse that can be accessed over HTTP out of the box.

**_What's included in the Advanced Security and Compliance add-on?_**

Amongst other things, the add-on provides maximum of 90 days of data retention period and allows you to configure custom data retention period to a value less than 90 days. Reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

**_What happens if Advanced Security and Compliance add-on is turned off in case we decide to not purchase it?_**

If you do not purchase Advanced Security and Compliance add-on then your account will be set to 30 days maximum data retention period and no option to configure custom retention period. All of the data that is older than the past 30 days will be deleted permanently.
