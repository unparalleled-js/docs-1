---
title: Workato connectors - Market new/updated lead trigger
date: 2019-05-28 18:00:00 Z
isTocVisible: true
---

# Marketo - New/updated lead trigger
This trigger picks up leads as soon they are created or updated. Each lead is processed as a separate job. It checks for new jobs once every poll interval.

![New/updated lead trigger](/assets/images/connectors/marketo/updated-lead-trigger.png)
*New/updated lead trigger*

## Input

| Input field   | Description |
| ------------- | ----------- |
| From          | Leads created or updated after this time will be processed by the recipe. If left blank, the default date will be set to **one hour** before the recipe is first started. |
| Output fields | Select the fields you wish to use in your recipe. All fields will be returned if left blank. This is not recommended as it may result in timeout errors. |

## Output
The output of this action contains the full set of fields that you defined in **output fields** in the trigger configuration. By default, Workato will retrieve the **ID** and **updated time**.

| Output field | Description                             |
| ------------ | --------------------------------------- |
| ID           | The unique integer id of a lead record. |
| Updated at   | The last time this lead was updated.    |

For a full list of `Lead` fields, see [here](https://developers.marketo.com/rest-api/endpoint-reference/lead-database-endpoint-reference/#/Leads).
