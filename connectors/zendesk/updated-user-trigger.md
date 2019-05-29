---
title: Zendesk - New/updated user trigger
data: 2019-05-28 18:00:00 Z
---

# Zendesk - New/updated user triggers

This trigger picks up users that are created or updated. Each user is processed as a separate job. It checks for new jobs once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) to find out more.

![New/updated user trigger](/assets/images/connectors/zendesk/updated-user-trigger.png)
*New/updated user trigger*

#### Input fields

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

#### Output fields

The output of this trigger contains the full set of columns from the selected user. All default and custom columns are supported. Here are some of the commonly used trigger outputs.

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
  </tbody>
</table>

Click here for a full list of [user trigger output](/connectors/zendesk/user-output.md).
