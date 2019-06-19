---
title: Workato connectors - Zendesk update organization action
date: 2019-06-03 18:00:00 Z
search:
    keywords: ['zendesk', 'organization', 'update']
---

# Zendesk - Update organization action
This action updates a specific organization your Zendesk instance. The organization is identified by its Zendesk ID. You can update standard and custom fields, and add new notes.

![Update organization action](/assets/images/connectors/zendesk/update-organization-action.png)
*Update organization action*

### Input fields
Here are some of the commonly used inputs.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th width='25%'>Input field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> Organization ID</td>
      <td>
        The unique Zendesk organization ID.
      </td>
    </tr>
    <tr>
      <td>Name</td>
      <td>
        The name of the organization.
      </td>
    </tr>
    <tr>
      <td>External ID</td>
      <td>
        A unique identifier from another system.
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

Click here for a full list of [organization inputs](/connectors/zendesk/organization-fields.md#organization-input-fields).

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
        Unique Zendesk organization ID. This is automatically assigned when the organization is created.
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
  </tbody>
</table>

Click here for a full list of [organization outputs](/connectors/zendesk/organization-fields.md#organization-output-fields).
