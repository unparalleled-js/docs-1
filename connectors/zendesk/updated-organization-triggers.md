---
title: Zendesk - New/updated organization trigger
data: 2019-05-29 18:00:00 Z
---

# Zendesk - New/updated organization triggers

This trigger picks up organization that are created or updated. Each organization is processed as a separate job. It checks for new jobs once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) to find out more.

![New/updated trigger](/assets/images/connectors/zendesk/updated-organization-trigger.png)
*New/updated trigger*

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
        Organizations created after this time will be processed by the recipe. If left blank, the default date will be set to <b>one day</b> before the recipe is first started.
      </td>
    </tr>
    </tbody>
</table>

#### Output fields

The output of this trigger contains the full set of columns from the selected organization. All default and custom columns are supported. Here are some of the commonly used trigger outputs.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Domain names</td>
      <td>
        An array of domain names associated with this organization.
      </td>
    </tr>
    <tr>
      <td>Group ID</td>
      <td>
        The group that this organization is part of.
      </td>
    </tr>
    <tr>
      <td>Tags</td>
      <td>
        The array of tags applied to this organization.
      </td>
    </tr>
    <tr>
      <td>ID</td>
      <td>
        Unique Zendesk organization ID. This is automatically assigned when the organization is created.
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [organization trigger output](/connectors/zendesk/organization-output.md).
