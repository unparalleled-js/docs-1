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
        A unique identifier from another system. The API treats the ID as case insensitive. For example, "ian1" is treated the same as "Ian1".
      </td>
    </tr>
    <tr>
      <td>Email</td>
      <td>
        Mandatory of the user's role is designated as <code>Agent</code>.<br>
        <br>
        The user's primary email.
      </td>
    </tr>
    <tr>
      <td>Domain name</td>
      <td>
        An array of domain names associated with this organization.
      </td>
    </tr>
    <tr>
      <td>Details</td>
      <td>
        Any details about the organization, it is stored as a <code>string</code>.
      </td>
    </tr>
    <tr>
      <td>Notes</td>
      <td>
        Any notes about the organization, it is stored as a <code>string</code>.
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
        Is <code>True</code> if the end user in this organization are able to see each other's tickets, otherwise it will display <code>False</code>.
      </td>
    </tr>
    <tr>
      <td>Shared comments</td>
      <td>
        Is <code>True</code> if the end user in this organization are able to see each other's comments on tickets, otherwise it will display <code>False</code>.
      </td>
    </tr>
    <tr>
      <td>Tags</td>
      <td>
        An array of tags applied to this organization.
      </td>
    </tr>
    <tr>
      <td>Custom organization field</td>
      <td>
        Data of a custom field, it is stored as a <code>string</code>.
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [organization input](/connectors/zendesk/organization-output.md#organization-input).

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
