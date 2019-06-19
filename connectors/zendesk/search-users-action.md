---
title: Workato connectors - Zendesk search users action
date: 2019-06-03 18:00:00 Z
search:
    keywords: ['zendesk', 'users', 'search', 'find']
---

# Zendesk - Search users action
This action retrieves a list of all users that matches your search criteria. Only records in your Zendesk instance that matches all the criteria will be returned.

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
      <td>Name</td>
      <td>
        The name of the user.
      </td>
    </tr>
    <tr>
      <td>Email</td>
      <td>
        The email of the user.
      </td>
    </tr>
    <tr>
      <td>Organization</a></td>
      <td>
        The name of the user's organization.
      </td>
    </tr>
    <tr>
      <td>External ID</td>
      <td>
        A unique identifier from another system.
      </td>
    </tr>
    <tr>
      <td>Tags</td>
      <td>
        The tags applied to this user. You can query multiple tags with the <code>,</code> separator.
      </td>
    </tr>
    <tr>
      <td>Notes</td>
      <td>
        Notes about the user.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
The output of this action contains the full set of columns from the list of users. Here are some of the commonly used outputs.

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
        Unique Zendesk user ID. This is automatically assigned when the user is created.
      </td>
    </tr>
    <tr>
      <td>Role</td>
      <td>
        The role of the user. Permitted values are <code>End-user</code>, <code>Agent</code>, or <code>Administrator</code>.
      </td>
    </tr>
    <tr>
      <td>Email</td>
      <td>
        The primary email of the user.
      </td>
    </tr>
    <tr>
      <td>Organization ID</td>
      <td>
        The ID of the user's organization. If the user has more than one organization membership, it will display the user's default organization.
      </td>
    </tr>
    <tr>
      <td>User custom fields</td>
      <td>
        Includes data of user custom field(s).
      </td>
    </tr>
    <tr>
      <td>List size</td>
      <td>
        This is the size of the list, corresponding to the number of user retrieved.
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [user outputs](/connectors/zendesk/user-fields.md#user-output-fields).
