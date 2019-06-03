---
title: Workato connectors - Zendesk search organization member action
date: 2019-06-03 18:00:00 Z
---

# Zendesk - Search organization member action

A membership links a user to an organization - An organization can have many users, and a users can be in many organizations.

This action retrieves a list of all members in a specified organization. It will retrieve all users that matches your search criterias. Only results that matches all the criteria will be returned

![Search organization member action](/assets/images/connectors/zendesk/search-organization-member-action.png)
*Search organization member action*

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
      <td>Organization ID</td>
      <td>
        The ID of the organization.
      </td>
    </tr>
    <tr>
      <td>Name</a></td>
      <td>
        The name of the member.
      </td>
    </tr>
    <tr>
      <td>Email</td>
      <td>
        The email of the member.
      </td>
    </tr>
  </tbody>
</table>

#### Output fields

The output of this trigger contains the full set of columns from the list of members. All default and custom columns are supported. Here are some of the commonly used outputs.

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
  </tbody>
</table>

Click here for a full list of [user output](/connectors/zendesk/user-output.md#user-output).
