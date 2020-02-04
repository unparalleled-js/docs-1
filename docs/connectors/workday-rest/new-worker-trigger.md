---
title: Workato connectors - Workday REST new row triggers
date: 2019-08-01 00:00:00 Z
---

# Workday REST - New worker trigger
This trigger picks up workers that are created in your Workday instance. Each row is processed as a separate job. When first started, all existing workers will be processed as individual jobs. Subsequently, it triggers when a worker is created. It checks for new rows once every poll interval.

![New worker trigger](~@img/workday-rest/new-worker-trigger.png)
*New worker trigger*

## Input fields

| Input field | Description |
| ----------- | ----------- |
| Name filter | **Optional**. Use this to filter workers by name. Only workers with names that start with the provided text will be processed. |

## Output fields

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
