---
title: Workato connectors - Zendesk search user action
date: 2019-06-03 18:00:00 Z
---

# Zendesk - Search user action

This action retrieves a list of all user in your Zendesk instance that matches your search criteria. Only results that matches all the criteria will be returned

![Search user action](/assets/images/connectors/zendesk/search-user-action.png)
*Search user action*

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
      <td>Name</a></td>
      <td>
        The name of the user.
      </td>
    </tr>
    <tr>
      <td>Email</a></td>
      <td>
        The user's primary email.
      </td>
    </tr>
    <tr>
      <td>Organization</a></td>
      <td>
        The name of the organization
      </td>
    </tr>
    <tr>
      <td>External ID</td>
      <td>
        A unique identifier from another system. The API treats the ID as case insensitive. For example, "ian1" is treated the same as "Ian1".
      </td>
    </tr>
    <tr>
      <td>Tags</td>
      <td>
        The array of tags applied to this user.
      </td>
    </tr>
    <tr>
      <td>Notes</td>
      <td>
        Any notes about the user, it is stored as a <code>string</code>.
      </td>
    </tr>
  </tbody>
</table>

#### Output fields

The output of this action contains the full set of columns from the list of user. Custom outputs are generated for custom user forms.

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
        Unique Zendesk user ID. This is automatically assigned when the ticket is created.
      </td>
    </tr>
    <tr>
      <td>Role</td>
      <td>
        The user's role. Allowed values are <code>end-user</code>, <code>agent</code>, or <code>admin</code>.
      </td>
    </tr>
    <tr>
      <td>Email</td>
      <td>
        The user's primary email.
      </td>
    </tr>
    <tr>
      <td>Organization ID</td>
      <td>
        The ID of the user's organization. If the user has more than one organization membership, it will display the ID fo the user's default organization.
      </td>
    </tr>
    <tr>
      <td>User custom fields</td>
      <td>
        Includes data of custom user fields.
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [user output](/connectors/zendesk/user-output.md#user-output).
