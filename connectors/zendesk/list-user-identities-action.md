---
title: Workato connectors - Zendesk list user identities action
date: 2019-05-30 18:00:00 Z
search:
    keywords: ['zendesk', 'user', 'identity','details', 'get', 'find']
---

# Zendesk - List user identities action
A user identity is something that can be used to identify an individual. For example, an email address or a phone number.

This action selects a specific user and returns a list of user identities. It retrieves the user through a search by user ID. Only records in your Zendesk instance that matches the criteria will be returned.

![List user identities action](/assets/images/connectors/zendesk/list-user-identities-action.png)
*List user identities action*

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
        The unique Zendesk user ID.
      </td>
    </tr>
  </tbody>
</table>

### Output fields
The output of this action contains the full set of user identities from the selected user.

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
        Unique Zendesk user identity ID. This is automatically assigned when the user identity is created.
      </td>
    </tr>
    <tr>
      <td>User ID</td>
      <td>
        Unique Zendesk User ID. This is automatically assigned when the user is created.
      </td>
    </tr>
    <tr>
      <td>Type</td>
      <td>
        The type of the user identity. Possible values are <code>email</code>, <code>phone_number</code>, <code>twitter</code>, or <code>sdk</code>.
      </td>
    </tr>
    <tr>
      <td>Value</td>
      <td>
        The actual data of the user identity. It is stored as a <code>string</code>.
      </td>
    </tr>
    <tr>
      <td>Verified</td>
      <td>
        Is <code>True</code> if the identity has been verified, otherwise it will display <code>False</code>.
      </td>
    </tr>
    <tr>
      <td>Primary</td>
      <td>
        Is <code>True</code> if the identity if the identity is marked as the primary identity, otherwise it will display <code>False</code>. For more information on primary user identity, please see the Zendesk documentation on this <a href="https://developer.zendesk.com/rest_api/docs/support/user_identities#make-identity-primary">topic</a>.
      </td>
    </tr>
    <tr>
      <td>Created at</td>
      <td>
        The time the identity was created.
      </td>
    </tr>
    <tr>
      <td>Updated at</td>
      <td>
        The time the identity was last updated.
      </td>
    </tr>
    <tr>
      <td>List size</td>
      <td>
        This is the size of the list, corresponding to the number of user identities retrieved.
      </td>
    </tr>
  </tbody>
</table>
