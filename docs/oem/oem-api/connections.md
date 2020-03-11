---
title: Workato API - Connections
date: 2019-03-21 11:20:00 Z
---

# Connections

Use the following endpoints to retrieve and create the connections that belong to an OEM customer account. All API endpoints listed here requires `oem_vendor` privilege. Talk to your Workato representative to enable this privilege in your account.

### Quick reference

| Type |Resource | Description |
|------|---------|-------------|
| GET  | [/api/managed_users/:managed_user_id/connections](#list-connections) | Returns a list of connections in OEM user's account. |
| POST | [/api/managed_users/:id/connections](#create-connections) | Allows the OEM vendor to add a shell connection in a customer's account. |
{: .api-quick-reference :}

## List Connections

Returns all connections and associated data for the OEM customer account.

```
GET /api/managed_users/:managed_user_id/connections
```
### URL parameters

| Name | Type | Description |
|------|------|-------------|
| managed_user_id | **string**<br>_required_ | OEM customer Account ID/External ID. <br>External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |
{: .api-input :}

#### Sample request

```shell
curl  -X GET https://www.workato.com/api/managed_users/98178/connections \
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>'
```

### Response

```json
{
 "result": [
   {
     "id": 36,
     "name": "ACME Production Salesforce connection",
     "provider": "salesforce",
     "authorized_at": "2015-05-26T22:53:52.528Z",
     "authorization_status": "success",
     "authorization_error": null,
     "created_at": "2015-05-26T22:53:52.532Z",
     "updated_at": "2015-05-26T22:53:52.532Z"
   },
   {
       "id": 37,
       "name": "ACME google sheet account",
       "provider": "google_sheets",
       "authorized_at": "2015-05-26T22:53:52.528Z",
       "authorization_status": "success",
       "authorization_error": null,
       "created_at": "2015-05-26T22:53:52.532Z",
       "updated_at": "2015-05-26T22:53:52.532Z"
   }
 ]
}
```

## Create Connections
Allows the OEM vendor to:
- Add a shell connection in a customer's account OR
- Add and authenticate a connection in a customer's account

```
POST /api/managed_users/:managed_user_id/connections
```


### URL parameters

| Name | Type | Description |
|------|------|-------------|
| managed_user_id | **string**<br>_required_ | OEM customer Account ID/External ID. <br>External id should be prefixed with a E(eg: EA2300) and the resulting id should be URL encoded. |
{: .api-input :}

### Post parameters
| Name | Type | Description |
|------|------|-------------|
| name | **string**<br>_optional_ | Name of the connection. Eg: 'Prod Salesforce connection'
| provider | **string**<br>_required_ | Connector identifier. Eg: 'salesforce' |
| input | **Hash**<br>_optional_ | Connection parameters. |
{: .api-input :}

For a list of providers and connection parameters, please view this [document](/oem/oem-api/connections-parameters.md).

#### Sample request

##### Shell connection request
This creates the connection in a 'Disconnected' state.

```shell
curl  -X GET https://www.workato.com/api/managed_users/98178/connection \
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>' \
      -H 'Content-Type: application/json' \
      -d  '{
            "name": "jira_connection",
            "provider": "jira"
          }'
```

##### Connection request with credentials
Authenticates the connection (API token authentication).

```shell
curl  -X GET https://www.workato.com/api/managed_users/98178/connection \
      -H 'x-user-email: <email>' \
      -H 'x-user-token: <token>' \
      -H 'Content-Type: application/json' \
      -d  '{
            "name": "jira_connection",
            "provider": "jira",
            "input": {
              "host_name": "acme.atlassian.net",
              "api_token_auth": "true",
              "email": "smith@acme.com",
              "apitoken": "XXXXXXXX"
            }
          }'
```


### Response

```json
{
 "id": 36,
 "name": "jira_connection",
 "provider": "jira",
 "authorized_at": "2015-05-26T22:53:52.528Z",
 "authorization_status": "success",
 "authorization_error": null,
 "created_at": "2015-05-26T22:53:52.532Z",
 "updated_at": "2015-05-26T22:53:52.532Z"
}
```
