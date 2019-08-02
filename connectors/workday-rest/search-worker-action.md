---
title: Workato connectors - Search workers action
date: 2019-08-01 00:00:00 Z
---

# Workday REST - Search workers action

Use this action to get details of workers matching names.

![Search workers by name action](/assets/images/workday-rest/search-worker.png)
*Search workers action*

### Input fields
| Input field | Description |
| ----------- | ----------- |
| Name filter | This must be at least 3 characters long and is not case sensitive. Workers with names that start with the provided value will be returned. |

### Output fields
Output is a list of workers. Each worker object has an output defined in the following table.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td
      <td>Descriptor</td>
      <td>Worker full name</td>
    </tr>
    <tr>
      <td>ID</td>
      <td>Workday ID or the worker record.</td>
    </tr>
    <tr>
      <td>HREF</td>
      <td>API resource URL of the worker record.</td>
    </tr>
    <tr>
      <td>Primary supervisory organization</a></td>
      <td>Primary supervisory organization object of this worker record. Contains descriptor (full name), Workday ID and HREF.</td>
    </tr>
    <tr>
      <td>Business title</td>
      <td>Full business title of the worker record.</td>
    </tr>
    <tr>
      <td>Primary work email</td>
      <td>Primary work email of the worker record.</td>
    </tr>
    <tr>
      <td>Is manager</td>
      <td>Boolean data. <code>True</code> if the worker record is a manager.</td>
    </tr>
    <tr>
      <td>Primary work phone</td>
      <td>Primary phone number of the worker record.</td>
    </tr>
    <tr>
      <td>Location</td>
      <td>Location object of this worker record. Contains descriptor (full name) and Workday ID.</td>
    </tr>
    <tr>
      <td>Primary work address text</td>
      <td>Full primary address of the worker record.</td>
    </tr>
    <tr>
      <td>Supervisory organizations managed</td>
      <td>Supervisory organizations managed by the worker record.</td>
    </tr>
    <tr>
      <td>Years of service</td>
      <td>Years of service, as an integer, by the worker.</td>
    </tr>
    <tr>
      <td
      <td>Date of birth</td>
      <td>Date of birth of the worker record. Format: YYYY-MM-DD</td>
    </tr>
  </tbody>
</table>
