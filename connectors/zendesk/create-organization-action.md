---
title: Workato connectors - Zendesk create organization action
date: 2019-06-03 18:00:00 Z
---

# Zendesk - Create organization action

This action creates a single organization into your Zendesk instance.

![Create organization action](/assets/images/connectors/zendesk/create-organization-action.png)
*Create organization action*

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
      <td>Domain name</td>
      <td>
        The domain name associated with this organization.
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
      <td>Group ID</td>
      <td>
        The group that this organization is part of.
      </td>
    </tr>
    <tr>
      <td>Shared tickets</td>
      <td>
        Select <code>Yes</code> if the end-users in this organization are able to see each other's tickets, otherwise select <code>No</code>.
      </td>
    </tr>
    <tr>
      <td>Shared comments</td>
      <td>
        Select <code>Yes</code> if the end-users in this organization are able to see each other's comments on tickets, otherwise select <code>No</code>.
      </td>
    </tr>
    <tr>
      <td>Tags</td>
      <td>
        The tags applied to this organization. You can add multiple tags with the <code>,</code> separator.
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
