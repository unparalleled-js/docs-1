---
title: Workato connectors - Zendesk list user identities action
date: 2019-05-30 18:00:00 Z
---

# Zendesk - List user identities action

This action retrieves a specific user and returns a list of user identities. It retrieves searches your Zendesk instance by user ID. Only results that matches the criteria will be returned.

A user identity is something that can be used to identify an individual. For example, an email address, a Twitter handle, or a phone number. Zendesk Support supports a series of different such identities.

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

#### Output fields

The output of this action contains a set of column details of the user. Only user identities are return.

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
        Unique Zendesk object ID. This is automatically assigned.
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
        The type of the user identity. For example, <code>email</code>, <code>phone_number</code>, <code>twitter</code>, or <code>sdk</code>.
      </td>
    </tr>
    <tr>
      <td>Value</td>
      <td>
        The data of the user identity, it is stored as a <code>string</code>.
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
        Is <code>True</code> if the identity if the identity is marked as the primary identity, otherwise it will display <code>False</code>. For more information on primary user identity, please see the <a href="https://developer.zendesk.com/rest_api/docs/support/user_identities#make-identity-primary">Zendesk API</a> on this topic.
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
        This is the size of the list, corresponding to the number of user identities retireved.
      </td>
    </tr>
  </tbody>
</table>
