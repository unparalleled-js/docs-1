---
title: Workato connectors - Market new lead activity batch trigger
date: 2019-05-28 18:00:00 Z
isTocVisible: true
---

# Marketo - New lead activity batch trigger
This trigger monitors a specified list for any leads that perform a certain activity. Activities will be collated and processed in batches of `100`.

When you first run this trigger, the selected activity of all leads present in the selected list will be returned.

![New lead activity batch trigger](/assets/images/connectors/marketo/new-lead-activity-batch-trigger.png)
*New lead activity batch trigger*

## Input

| Input field | Description |
| ----------- | ----------- |
| From        | Leads created or updated after this time will be processed by the recipe. If left blank, the default date will be set to **one hour** before the recipe is first started. |
| Activity    | Select the activity to monitor. |
| List        | Select the list to monitor. New leads in this list will act as trigger evnts. |

## Output
This trigger returns metadata about the list datapill `Activities`.

| Output field  | Description                             |
| ------------- | --------------------------------------- |
| First lead ID | The ID of the first lead in the `Activities` list. |
| Last lead ID  | The id of the last lead in the `Activities` list.  |

This `Activities` list contains details about each activity event.

| Activities field | Description |
| ---------------- | ------_---- |
| Activity id      | The unique integer ID of the activity. |
| Lead id          | The unique integer ID of the lead associated to this activity. |
| Activity date    | The datatime of the activity. |
| Activity type id | The ID of the activity type. |
| Lead             | This data object contains a full set of `Lead` fields for the lead associated to this activity. |


For a full list of `Activities` fields, see [here](https://developers.marketo.com/rest-api/endpoint-reference/lead-database-endpoint-reference/#/Activities).
