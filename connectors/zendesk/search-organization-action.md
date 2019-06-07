---
title: Workato connectors - Zendesk search organization action
date: 2019-06-03 18:00:00 Z
---

# Zendesk - Search organization action

This action retrieves a list of all organizations that matches your search criteria. Only records in your Zendesk instance that matches all the criteria will be returned.

![Search organization action](/assets/images/connectors/zendesk/search-organization-action.png)
*Search organization action*

### Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tbody>
    <tr>
      <td>Name</td>
      <td>
        The name of the organization.
      </td>
    </tr>
    <tr>
      <td>Tags</td>
      <td>
        The tags applied to this organization. You can combine multiple tags with the <code>,</code> separator.
      </td>
    </tr>
    <tr>
      <td>Details</td>
      <td>
        Details about the organization. It is stored as a <code>string</code>.
      </td>
    </tr>
    <tr>
      <td>Notes</td>
      <td>
        Notes about the organization. It is stored as a <code>string</code>.
      </td>
    </tr>
    <tr>
      <td>Organization custom fields</td>
      <td>
        Provide data for the organization custom field(s).
      </td>
    </tr>
  </tbody>
</table>

#### Output fields

The output of this trigger contains the full set of columns from the selected organization. Here are some of the commonly used outputs.

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
        The group(s) that this organization is part of.
      </td>
    </tr>
    <tr>
      <td>Organization custom fields</td>
      <td>
        Includes data of organization custom fields.
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [organization output](/connectors/zendesk/organization-fields.md#organization-output-fields).
