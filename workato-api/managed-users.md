---
title: Workato API - Managed Users
date: 2019-03-21 11:20:00 Z
---

# Managed Users
Use the following endpoints to manage OEM users.

### Supported Formats
* Json

## Create new OEM users

> POST /api/managed_users

### Description
Creates a new OEM user. Requires 'oem_vendor' privilege.

- The new account is assigned the plan specified in the master account's OEM configuration.
- Configures preferred authentication mode for the child account based on the value specified in the master account's OEM configuration.
- Sets the plan of the new account based on the OEM configuration.


<details> <summary> <b>Details</b></summary>

### Parameters
<table class="unchanged rich-diff-level-one" text-align ="center">
  <thead>
    <tr>
        <th width='20%'>Parameter name</th>
        <th width='80%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =200 > <b>name</b> <br>required</td>
    <td>
    Full name of the user
    <br>
    <b>Validations:</b> <br>
    <ul>
    <li>Must be string</li>
    </ul>
    </td>
  </tr>
  <tr>
    <td width =200 > <b>oauth_id</b> <br>required</td>
    <td>
    Identifier used for OAuth
    <br>
    <b>Validations:</b> <br>
    <ul>
    <li>Must be string</li>
    </ul>
    </td>
   </tr>
   <tr>
    <td width =200 > <b>notification_email</b> <br>required</td>
    <td>
    Email for error notifications
    <br>
    <b>Validations:</b> <br>
    <ul>
    <li>Must be string</li>
    </ul>
    </td>
   </tr>
   <tr>
    <td width =200 > <b>external_id </b> <br>optional</td>
    <td>
    External identifier for the user
    <br>
    <b>Validations:</b> <br>
    <ul>
    <li>Must be string</li>
    </ul>
    </td>
   </tr>
  </tbody>
</table>

### Example
```json
{
  "name": "Kevin O'Leary",
  "oauth_id": "AAA0932808240:UU0239093498",
  "notification_email": "kevinl@acme.com",
  "external_id": "UU0239093498"
}
```

### Responses
<table class="unchanged rich-diff-level-one" text-align ="center">
  <thead>
    <tr>
        <th width='20%'>Code</th>
        <th width='80%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =200 > <kbd>200</kbd> </td>
    <td> Success </td>
  </tr>
  <tr>
    <td width =200 > <kbd>400</kbd> </td>
    <td> Bad request </td>
  </tr>
  <tr>
    <td width =200 > <kbd>401</kbd> </td>
    <td> Unauthorized </td>
  </tr>
  <tr>
    <td width =200 > <kbd>500</kbd> </td>
    <td> Server error </td>
  </tr>
  </tbody>
</table>

### Examples

#### Success: 200
```json
POST /api/managed_users
{
  "id": 3498583,
  "plan_id": "oem_plan",
  "trial": false
}
```
#### Server error: 500
```json
{
  "message":"Server error",
  "id": "32y2298sjbjdwejweg"
}
```
</details>

## Add member to OEM account

> POST /api/managed_users/:id/member  

### Description
Adds a member to the OEM account. Requires 'oem_vendor' privilege.
- Creates a new Workato member account and makes the user member of the given team.
- Configures preferred authentication mode for the member based on the value specified in the master account's OEM configuration.


<details> <summary> <b>Details</b></summary>

### Parameters
<table class="unchanged rich-diff-level-one" text-align ="center">
  <thead>
    <tr>
        <th width='20%'>Parameter name</th>
        <th width='80%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =200 > <b>name</b> <br>required</td>
    <td>
    Full name of the user
    <br>
    <b>Validations:</b> <br>
    <ul>
    <li>Must be string</li>
    </ul>
    </td>
  </tr>
  <tr>
    <td width =200 > <b>oauth_id</b> <br>required</td>
    <td>
    Identifier used for OAuth
    <br>
    <b>Validations:</b> <br>
    <ul>
    <li>Must be string</li>
    </ul>
    </td>
   </tr>
   <tr>
    <td width =200 > <b>role_name</b> <br>optional</td>
    <td>
    Membership role name
    <br>
    <b>Validations:</b> <br>
    <ul>
    <li>Must be string</li>
    </ul>
    </td>
   </tr>
   <tr>
    <td width =200 > <b>external_id </b> <br>optional</td>
    <td>
    External identifier for the user
    <br>
    <b>Validations:</b> <br>
    <ul>
    <li>Must be string</li>
    </ul>
    </td>
   </tr>
  </tbody>
</table>

### Example
```json
{
  "name": "Jack Smith",
  "oauth_id": "AAA0932808240:UU0239093499",
  "role_name": "Admin",
  "external_id": "UU0239093499"
}
```

### Responses
<table class="unchanged rich-diff-level-one" text-align ="center">
  <thead>
    <tr>
        <th width='20%'>Code</th>
        <th width='80%'>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td width =200 > <kbd>200</kbd> </td>
    <td> Success </td>
  </tr>
  <tr>
    <td width =200 > <kbd>400</kbd> </td>
    <td> Bad request </td>
  </tr>
  <tr>
    <td width =200 > <kbd>401</kbd> </td>
    <td> Unauthorized </td>
  </tr>
  <tr>
    <td width =200 > <kbd>404</kbd> </td>
    <td> Not found </td>
  </tr>
  <tr>
    <td width =200 > <kbd>500</kbd> </td>
    <td> Server error </td>
  </tr>
  </tbody>
</table>

### Examples

#### Success: 200
```json
POST /api/managed_users/12/member
{
  "id": 3498583,
  "plan_id": "oem_plan",
  "trial": false
}
```
#### Server error: 500
```json
{
  "message":"Server error",
  "id": "32y2298sjbjdwejweg"
}
```

</details>
