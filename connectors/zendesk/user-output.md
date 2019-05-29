---
title: Zendesk - User trigger output
date: 2019-05-29 18:00:00 Z
---

https://developer.zendesk.com/rest_api/docs/support/users

# Zendesk - User trigger output

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Output field</th>
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
      <td>Tags list</td>
      <td>
        List the most popular tags in the last 60 days.
      </td>
    </tr>
    <tr>
      <td>ID</td>
      <td>
        Unique Zendesk user ID. This is automatically assigned when the user is created.
      </td>
    </tr>
    <tr>
      <td>URL</td>
      <td>
        The user's API URL.
      </td>
    </tr>
    <tr>
      <td>Date created</td>
      <td>
        The time the user was created.
      </td>
    </tr>
    <tr>
      <td>Date updated</td>
      <td>
        The time the usr was last updated.
      </td>
    </tr>
    <tr>
      <td>Alias</td>
      <td>
        TAn alias displayed to end users.
      </td>
    </tr>
    <tr>
      <td>Custom role ID</td>
      <td>
        A custom role ID for <code>agent</code> users on the Enterprise plan.
      </td>
    </tr>
    <tr>
      <td>Restricted Agent</td>
      <td>
        Only for <code>agent</code> users. Is <code>True</code> if the user has any restrictions, otherwise it will display <code>False</code>. Will display <code>False</code> for all <code>admin</code> users.
      </td>
    </tr>
    <tr>
      <td>Suspended</td>
      <td>
        Only for <code>agent</code> users. Is <code>True</code> if the user is suspended, otherwise it will display <code>False</code>.
      </td>
    </tr>
    <tr>
      <td>Shared agent</td>
      <td>
        For ticket sharing accounts only. Is <code>True</code> if the user is a shared agent from a different Zendesk support instance, otherwise it will display <code>False</code>.
      </td>
    </tr>
    <tr>
      <td>User custom fields</td>
      <td>
        Includes data of custom user fields created. They are displayed as arrays of <code>"id":"value"</code> pairs. Allowed data types are <code>string</code>, <code>int</code>, or tags.
      </td>
    </tr>
  </tbody>
</table>
