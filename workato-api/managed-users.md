---
title: Workato API - Managed Users
date: 2019-03-21 11:20:00 Z
---

# Managed Users
Use the following endpoints to manage OEM users

### Supported Formats
* Json

## Create new OEM users

> POST /api/managed_users 

### Description
Create a new OEM user. Requires 'oem_vendor' privilege.

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

## Add member to OEM account

> POST /api/managed_users/:id/member  

### Description
Adds a member to the OEM account. Requires 'oem_vendor' privilege.

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

