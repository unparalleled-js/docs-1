---
title: Workato connectors - Zendesk new/updated record trigger
date: 2019-05-28 18:00:00 Z
isTocVisivle: true
---

# Zendesk - New/updated record trigger

Use this trigger to pick up recent activity in your Zendesk [users](/connectors/zendesk/user-fields.md), [tickets](/connectors/zendesk/ticket-fields.md), or [organizations](/connectors/zendesk/organization-fields.md).

This trigger monitors and picks up new or updated records in your Zendesk instance. Records are batched and processed at regular poll intervals.

![New/updated record trigger](/assets/images/connectors/zendesk/updated-record-trigger.png)
*New/updated record trigger*

### Input field

| Input field | Description |
| ----------- | ----------- |
| From        | Records created or updated after this time will be processed by the recipe. If left blank, the default date will be set to **one hour** before the recipe is first started. |
| Object      | Select the object to be monitored - **User**, **Ticket**, or **Organization**. |
| Batch size  | The number of records to retrieve for each job. The max batch size is 1000. |

### Output field

| Output field | Description                                |
| ------------ | ------------------------------------------ |
| First ID     | The unique Zendesk ID of the first record. |
| Last ID      | The unique Zendesk ID of the last record.  |
| `Records`    | An array of records. The full list of **object attributes** will be returned for each record. |

Click here for a full list of [user outputs](/connectors/zendesk/user-fields.md#user-output-fields), [ticket outputs](/connectors/zendesk/ticket-fields.md#ticket-output-fields), or [organization outputs](/connectors/zendesk/organization-fields.md#organization-output-fields).
