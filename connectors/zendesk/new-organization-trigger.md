---
title: Workato connectors - Zendesk new organization trigger
data: 2019-05-29 18:00:00 Z
search:
    keywords: ['zendesk', 'organization', 'trigger', 'create', 'new']
---

# Zendesk - New organization trigger
This trigger picks up new organizations that are created. Each organization is processed as a separate job. It checks for new organizations once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) to find out more.

![New organization trigger](/assets/images/connectors/zendesk/new-organization-trigger.png)
*New organization trigger*

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
        <td>From</td>
        <td>
          Organizations created after this time will be processed by the recipe. If left blank, the default date will be set to <b>one day</b> before the recipe is first started.
        </td>
      </tr>
    </tbody>
</table>

### Output fields
The output of this trigger contains the full set of columns from the selected organization. Here are some of the commonly used outputs.

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
        Unique Zendesk organization ID. This is automatically assigned when the organization is created.
      </td>
    </tr>  
    <tr>
      <td>Group ID</td>
      <td>
        The group(s) that this organization is part of.
      </td>
    </tr>
    <tr>
      <td>Organization custom fields</td>
      <td>
        Includes data of organization custom field(s).
      </td>
    </tr>
  </tbody>
</table>

Click here for a full list of [organization outputs](/connectors/zendesk/organization-fields.md#organization-output-fields).
