---
title: Workato OEM API - Picklists
date: 2019-03-21 11:20:00 Z
---

# Picklists

Use the following endpoint to get picklist values from a picklist of OEM customer account. View this [document](https://docs.google.com/spreadsheets/d/1XnzSkUo72Bp6THWhFim0444FXNfziMJo7ouzP5eO9T0/edit?usp=sharing) to obtain picklist names and parameters for each connector.

## Get picklist values

Obtains a list of picklist values for a specified connection in an OEM customer account.

```
POST /managed_users/:id/connections/:connection_id/pick_list
```
### URL Parameters

| Name | Type | Description |
|------|------|-------------|
| managed_user_id | **string**<br>_required_ | OEM customer Account ID/External ID. <br>External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |
| connection_id | **string**<br>_required_ | ID of the connection. This can be found in the URL of the app connection or is the result of the [List connections](/oem/oem-api/connections.md#list-connections) endpoint.  |
{: .api-input :}

### Body
| Name | Type | Description |
|------|------|-------------|
| pick_list_name | **string**<br>_required_ | Name of the pick list. Obtain from this [document](/oem/oem-api/picklist-parameters.md). |
| pick_list_params | **Hash**<br>_optional_ | Picklist parameters, required in some picklists. For more information view this [document](/oem/oem-api/picklist-parameters.md). |

#### Sample request

This example curl request obtains a list of Salesforce picklist values from the picklist `sobject_fields` from the `Invoice__c` custom object in Salesforce.

```shell
curl  -X POST https://www.workato.com/api/managed_users/135703/connections/318457/pick_list \
      -H 'x-user-email: email@workato.com' \
      -H 'x-user-token: 61j2ia9-ae0c-453f-9b5e-1hsj129304' \
      -H 'Content-Type: application/json' \
      -d '{ "pick_list_name": "sobject_fields", "pick_list_params": {"sobject_name": "Invoice__c"}}'

```

### Response

```json
{
    "result": [
        [
            "Record ID",
            "Id"
        ],
        [
            "Owner ID",
            "OwnerId"
        ],
        [
            "Deleted",
            "IsDeleted"
        ],
        [
            "Invoice Name",
            "Name"
        ],
        [
            "Created Date",
            "CreatedDate"
        ],
        [
            "Created By ID",
            "CreatedById"
        ],
        [
            "Last Modified Date",
            "LastModifiedDate"
        ],
        [
            "Last Modified By ID",
            "LastModifiedById"
        ],
        [
            "System Modstamp",
            "SystemModstamp"
        ],
        [
            "Last Viewed Date",
            "LastViewedDate"
        ],
        [
            "Last Referenced Date",
            "LastReferencedDate"
        ],
        [
            "External ID",
            "External_ID__c"
        ],
        [
            "Status",
            "Status__c"
        ],
        [
            "Contact",
            "Contact__c"
        ],
        [
            "Intacct Invoice ID",
            "Intacct_Invoice_ID__c"
        ],
        [
            "Multi-select",
            "Multi_select__c"
        ],
        [
            "Invoiced",
            "Invoiced__c"
        ],
        [
            "Number field",
            "Number_field__c"
        ]
    ]
}
```
