---
title: Workato connectors - Zendesk create/update record action
date: 2019-06-03 18:00:00 Z
isTocVisible: true
---

# Zendesk - Create/update record action
This action updates specific records in the Zendesk instance. The record is identified by its Zendesk ID.

If the record is found, it will update the record with the data provide. Otherwise, it will create a new record.

This action accepts a list of maximum 100 records.

![Create/update record action](/assets/images/connectors/zendesk/upsert-record-action.png)
*Create/update record action*

## Input field

| Input field | Description |
| ----------- | ----------- |
| Object      | Select the object to be monitored - **User**, **Ticket**, or **Organization**. |
| Wait for Zendesk to process all records | Select **Yes** to wait for action to complete before proceeding with the next action. Otherwise, select **No** to run this action assynchrously.
| `Object input`  | The input fields for the object you have selected. |

Click here for a full list of [user inputs](/connectors/zendesk/user-fields.md#user-input-fields), [ticket inputs](/connectors/zendesk/ticket-fields.md#ticket-input-fields), or [organization inputs](/connectors/zendesk/organization-fields.md#organization-input-fields).

## Output field
The output of this action contains an array of create/update jobs. Each job will have the following output. 

| Output field | Description                                        |
| ------------ | -------------------------------------------------- |
| ID           | The ID of this create/update job.                  |
| Index        | The index of this job.                             |
| Status       | The status of this create/update job.              |
| Error        | The error message if the create/update job failed. |
| List size    | The size of the the list.                          |
