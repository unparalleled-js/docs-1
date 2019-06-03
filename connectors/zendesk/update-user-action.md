---
title: Workato connectors - Zendesk update user action
date: 2019-06-03 18:00:00 Z
---

# Zendesk - Update user action

This action updates a specific user your Zendesk instance. The user to edit is identified by its Zendesk ID. You can update user standard or custom field, or add new comments to a user. The action will fail if the user cannot be found.

It is possible to change the role of an user between `end-user`, `agent` and `admin`, but this will affect your Zendesk user licenses.

![Update user action](/assets/images/connectors/zendesk/update-user-action.png)
*Update user action*

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
      <td>User ID</a></td>
      <td>
        The unique Zendesk user ID. This is used to identify the user to update.
      </td>
    </tr>
    <tr>
      <td>Name</td>
      <td>
        The name of the user.
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
        The user's primary email
      </td>
    </tr>
    <tr>
      <td>Organization ID</td>
      <td>
        The ID of the user's organization.
      </td>
    </tr>
    <tr>
      <td>External ID</td>
      <td>
        A unique identifier from another system. The API treats the ID as case insensitive. For example, "ian1" is treated the same as "Ian1".
      </td>
    </tr>
    <tr>
      <td>Signature</td>
      <td>
        Only <code>agents</code> and <code>admins</code> can have signatures. It will display the signature of the user.
      </td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>
        The user's primary phone number.
      </td>
    </tr>
    <tr>
      <td>Details</td>
      <td>
        Any details about the user, it is stored as a <code>string</code>.
      </td>
    </tr>
    <tr>
      <td>Notes</td>
      <td>
        Any notes about the user, it is stored as a <code>string</code>.
      </td>
    </tr>
    <tr>
      <td>Active</td>
      <td>
        Set to <code>True</code> by default. It will display <code>False</code> if the user has been deleted.
      </td>
    </tr>
    <tr>
      <td>Verified</td>
      <td>
        Is <code>True</code> if the user's primary identity is verified, otherwise it will display <code>False</code>.
      </td>
    </tr>
    <tr>
      <td>Shared</td>
      <td>
        For ticket sharing accounts only. Is <code>True</code> if the user is shared from a different Zendesk support instance, otherwise it will display <code>False</code>.
      </td>
    </tr>
    <tr>
      <td>Locale</td>
      <td>
        The user's locale. A BCP-47 compliant tag for the locale.
      </td>
    </tr>
    <tr>
      <td>Language</td>
      <td>
        The user's language identifier. It is displayed as an <code>int</code>.
      </td>
    </tr>
    <tr>
      <td>Timezone</td>
      <td>
        The user's timezone.
      </td>
    </tr>
    <tr>
      <td>Ticket restrictions</td>
      <td>
        Specifies which tickts the user has access to. Possible values are: "organization", "groups", "assigned", <code>null</code>.
      </td>
    </tr>
    <tr>
      <td>Moderator</td>
      <td>
        Designates whether the use has forum moderation capability. Is <code>True</code> if the user's does, otherwise it will display <code>False</code>.
      </td>
    </tr>
    <tr>
      <td>Only private comments</td>
      <td>
        Is <code>True</code> if the user can only create private comments, otherwise it will display <code>False</code>.
      </td>
    </tr>
    <tr>
      <td>Tags</td>
      <td>
        The array of tags applied to this user.
      </td>
    </tr>
    <tr>
      <td>User custom fields</td>
      <td>
        Custom fields can be any user field type. For more information on Zendesk's user field types, <a href="/connectors/zendesk/user-output.md#user-input">click here</a>.
      </td>
    </tr>
  </tbody>
</table>

#### Output fields

The output of this action contains the full set of columns from the user. Custom outputs are generated for custom user forms.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>User ID</td>
      <td>
        Unique Zendesk user ID. This is automatically assigned when the user is created.
      </td>
    </tr>
    <tr>
      <td>Subject</td>
      <td>
        The subject of the user.
      </td>
    </tr>
    <tr>
      <td>Type</td>
      <td>
        The type of the user. Allowed values are <code>problem</code>, <code>incident</code>, <code>question</code>, or <code>task</code>.
      </td>
    </tr>
    <tr>
      <td>Priority</td>
      <td>
        The priority of the user. Allowed values are <code>urgent</code>, <code>high</code>, <code>normal</code>, or <code>low</code>.
      </td>
    </tr>
    <tr>
      <td>User custom fields</td>
      <td>
        Includes data of custom user fields created.
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [user output](/connectors/zendesk/user-output.md#user-output).
