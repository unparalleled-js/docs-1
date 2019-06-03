---
title: Workato connectors - Zendesk get organization details by ID action
date: 2019-06-03 18:00:00 Z
---

# Zendesk - Get organization details by ID action

This action retrieves details about a specific organization your Zendesk instance that matches a search by user ID. Only results that matches the criteria will be returned.

![Get organization details by ID](/assets/images/connectors/zendesk/get-organization-details-by-id.png)
*Get organization details by ID*

### Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Organization ID</a></td>
      <td>
        The unique Zendesk organization ID.
      </td>
    </tr>
  </tbody>
</table>

#### Output fields

The output of this trigger contains the full set of columns from the selected organization. All default and custom columns are supported. Here are some of the commonly used outputs.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ID</td>
      <td>
        Unique Zendesk organization ID. This is automatically assigned when the ticket is created.
      </td>
    </tr>  <tr>
      <td>Group ID</td>
      <td>
        The group(s) that this organization is part of.
      </td>
    </tr>
    <tr>
      <td>Organization custom fields</td>
      <td>
        Includes data of custom organization fields.
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [organization output](/connectors/zendesk/organization-output.md#organization-output).
