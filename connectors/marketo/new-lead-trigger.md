---
title: Workato connectors - Market new lead trigger
date: 2019-05-28 18:00:00 Z
isTocVisible: true
---

# Marketo - New lead trigger
This trigger picks up new leads in a specified list. Each lead is processed as a separate job. It checks for new jobs once every poll interval.

![New lead trigger](/assets/images/connectors/marketo/new-lead-trigger.png)
*New lead trigger*

## Input

| Input field   | Description |
| ------------- | ----------- |
| List          | Select the list to monitor. New leads in this list will act as trigger evnts. |
| Output fields | Select the fields you wish to use in your recipe. All fields will be returned if left blank. This is not recommended as it may result in timeout errors. |

## Output
The output of this action contains the full set of fields that you defined in **output fields** in the trigger configuration. By default, Workato will retrieve the **ID** and **updated time**.

| Output field | Description                             |
| ------------ | --------------------------------------- |
| ID           | The unique integer id of a lead record. |
| Updated at   | The last time this lead was updated.    |

For a full list of `Lead` fields, see [here](https://developers.marketo.com/rest-api/endpoint-reference/lead-database-endpoint-reference/#/Leads).
