---
title: Workato connectors - Zendesk create/update record action
date: 2019-06-03 18:00:00 Z
isTocVisible: true
---

# Zendesk - Create/update record action

This action identifies specific records in your Zendesk instance and updates them. Each record is identified by its Zendesk ID.

For existing records identified by the Zendesk ID, this action will update the record with the data provided. If no records are found, it will create a new record.

This action accepts a list of maximum of 100 records.

![Create/update record action](/assets/images/connectors/zendesk/upsert-record-action.png)
*Create/update record action*

## Input field

| Input field    | Description |
| -------------- | ----------- |
| Object         | Select the object to be monitored - **User**, **Ticket**, or **Organization**. |
| `Object input` | The input fields for the object you have selected. _See below._|
| Wait for Zendesk to process all records | Select **Yes** to wait for the action to complete before moving to the next action. You can use the status messages in subsequent steps. [_See here_](#output-field). <br>Otherwise, select **No**. The recipe will move to the next step once Zendesk starts processing. |

Click here for a full list of [user inputs](/connectors/zendesk/user-fields.md#user-input-fields), [ticket inputs](/connectors/zendesk/ticket-fields.md#ticket-input-fields), or [organization inputs](/connectors/zendesk/organization-fields.md#organization-input-fields).

## Output field

If you selected to **wait for the action to complete** before moving to the next step, you will be able to use the following datapills from the output.

| Output field              | Description |
| ------------------------- | ----------- |
| All records successfully upserted? | This returns `True` if all records have been successfully processed. |
| Number of records created | The number of records created. |
| Number of records updated | The number of records updated. |
| Number of records failed  | The number of records that failed to be processed successfully. |
| Create job results        | An array of records created with this action. The full list of **object attributes** will be returned for each record. |
| Update job results        | An array of records updated with this action. The full list of **object attributes** will be returned for each record. |
| Failed job results        | An array of records that failed to be processed successfully. The full list of **object attributes** will be returned for each record. |

Click here for a full list of [user outputs](/connectors/zendesk/user-fields.md#user-output-fields), [ticket outputs](/connectors/zendesk/ticket-fields.md#ticket-output-fields), or [organization outputs](/connectors/zendesk/organization-fields.md#organization-output-fields).

> If you selected **not to wait for the action to complete**, Workato will generate an array of Zendesk IDs of all the records. You can view the output array for this action in the **Job** tab.
