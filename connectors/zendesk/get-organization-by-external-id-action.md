---
title: Workato connectors - Zendesk get organization by external ID action
date: 2019-06-03 18:00:00 Z
---

# Zendesk - Get list of tickets by external ID action

This action retrieves a list of organizations that matches a search by external ID. Only records in your Zendesk instance that matches the criteria will be returned.

![Get organization by external ID action](/assets/images/connectors/zendesk/get-organization-external-id.png)
*Get organization by external ID action*

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
      <td>External ID</a></td>
      <td>
        The external ID of the organization(s). You can query multiple external IDs with the <code>,</code> separator.
      </td>
    </tr>
  </tbody>
</table>

### Output fields

The output of this action contains the full set of columns from the selected organization. Here are some of the commonly used outputs.

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
    </tr>  
    <tr>
      <td>Group ID</td>
      <td>
        The group that this organization is part of.
      </td>
    </tr>
    <tr>
      <td>Organization custom fields</td>
      <td>
        Includes data of organization custom field(s).
      </td>
    </tr>
    <tr>
      <td>List size</td>
      <td>
        This is the size of the list, corresponding to the number of organizations retrieved.
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [organization output](/connectors/zendesk/organization-fields.md#organization-output-fields).
