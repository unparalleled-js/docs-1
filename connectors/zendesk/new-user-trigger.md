---
title: Zendesk - New user trigger
data: 2019-05-28 18:00:00 Z
---

# Zendesk - New user triggers

This trigger picks up new users that are created. Each user is processed as a separate job. It checks for new jobs once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) to find out more.

![New user trigger](/assets/images/connectors/zendesk/new-user-trigger.png)
*New user trigger*

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
      <td>From</a></td>
      <td>
        Users created after this time will be processed by the recipe. If left blank, the default date will be set to <b>one day</b> before the recipe is first started.
      </td>
    </tr>
    </tbody>
</table>

### Output fields

The output of this action contains the full set of columns from the selected user. Here are some of the commonly used outputs.

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
  </tbody>
</table>

Click here for a full list of [user outputs](/connectors/zendesk/user-fields.md#user-output-fields).
