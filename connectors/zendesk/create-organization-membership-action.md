---
title: Workato connectors - Zendesk create organization membership action
date: 2019-06-03 18:00:00 Z
---

# Zendesk - Create organization membership action

A membership links a user to an organization - An organization can have many users, and a users can be in many organizations.

This action adds an existing user to an existing organization in Zendesk. Both user and organization to link are identified by their Zendesk ID.

![Create organization membership action](/assets/images/connectors/zendesk/create-organization-membership.png)
*Create organization membership action*

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
      <td>User ID</td>
      <td>
        The Zendesk ID of the user to be connected.
      </td>
    </tr>
    <tr>
      <td>Organization ID</td>
      <td>
        The Zendesk ID of the organization to be connected.
      </td>
    </tr>
  </tbody>
</table>

#### Output fields

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
        The Zendesk ID of the user of this membership.
      </td>
    </tr>
    <tr>
      <td>Organization ID</td>
      <td>
        The Zendesk ID of the organization for this membership.
      </td>
    </tr>
    <tr>
      <td>ID</td>
      <td>
        Unique Zendesk ID. This is automatically assigned when the organization membership is created.
      </td>
    </tr>  
    <tr>
      <td>URL</td>
      <td>
        The API url of this membership.
      </td>
    </tr>
    <tr>
      <td>Default</td>
      <td>
        Denotes whether this is the default organization membership for the user. If <code>False</code>, returns <code>null</code>.
      </td>
    </tr>
    <tr>
      <td>Created at</td>
      <td>
        The time the organization membership was created.
      </td>
    </tr>
    <tr>
      <td>Updated at</td>
      <td>
        The time the organization membership was updated.
      </td>
    </tr>
  </tbody>
</table>
