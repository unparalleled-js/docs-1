---
title: Workato OEM API - Picklists
date: 2019-03-21 11:20:00 Z
---

# Picklists

Use the following endpoint to get picklist values from a picklist of OEM customer account. View this [document](https://docs.google.com/spreadsheets/d/1XnzSkUo72Bp6THWhFim0444FXNfziMJo7ouzP5eO9T0/edit?usp=sharing) to obtain picklist names and parameters for each adapter.

## Get picklist values

Obtains a list of picklist values for a specified connection in an OEM customer account.

```
GET /managed_users/:id/connections/:connection_id/pick_list_name
```
### URL Parameters

<div class='api_input'></div>

| Name | Type | Description |
|------|------|-------------|
| managed_user_id | **string**<br>_required_ | OEM customer Account ID/External ID. <br>External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |
| connection_id | **string**<br>_required_ | ID of the connection. This can be found in the URL of the app connection or is the result of the [List connections](/oem/oem-api/connections.md#list-connections) endpoint.  |
| pick_list_name | **string**<br>_required_ | Name of the pick list. Obtain from this [document](https://docs.google.com/spreadsheets/d/1XnzSkUo72Bp6THWhFim0444FXNfziMJo7ouzP5eO9T0/edit?usp=sharing). |
| pick_list_params | **Hash**<br>_optional_ | Picklist parameters, required in some picklists. For more information view this [document](https://docs.google.com/spreadsheets/d/1XnzSkUo72Bp6THWhFim0444FXNfziMJo7ouzP5eO9T0/edit?usp=sharing). |

#### Sample request

This example request obtains a list of Gmail picklist values from the picklist `mailbox_labels`.

```shell
curl  -X GET https://www.workato.com/api/connections/4860/pick_lists/mailbox_labels \
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>'
```

### Response

```json
{
   "reply": [
       [
           "CHAT",
           "CHAT"
       ],
       [
           "SENT",
           "SENT"
       ],
       [
           "INBOX",
           "INBOX"
       ],
       [
           "IMPORTANT",
           "IMPORTANT"
       ],
       [
           "TRASH",
           "TRASH"
       ],
       [
           "DRAFT",
           "DRAFT"
       ],
       [
           "SPAM",
           "SPAM"
       ],
       [
           "CATEGORY_FORUMS",
           "CATEGORY_FORUMS"
       ],
       [
           "CATEGORY_UPDATES",
           "CATEGORY_UPDATES"
       ],
       [
           "CATEGORY_PERSONAL",
           "CATEGORY_PERSONAL"
       ],
       [
           "CATEGORY_PROMOTIONS",
           "CATEGORY_PROMOTIONS"
       ],
       [
           "CATEGORY_SOCIAL",
           "CATEGORY_SOCIAL"
       ],
       [
           "STARRED",
           "STARRED"
       ],
       [
           "UNREAD",
           "UNREAD"
       ],
       [
           "Notes",
           "Label_5"
       ],
       [
           "[Imap]/Drafts",
           "Label_6"
       ]
   ]
}
```
