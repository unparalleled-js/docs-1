---
title: Zendesk - Organization trigger output
date: 2019-05-29 18:00:00 Z
---

https://developer.zendesk.com/rest_api/docs/support/organizations

# Zendesk - Organization trigger output

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
      <td>Details</td>
      <td>
        Any details about the organization. It is stored as a <code>string</code>.
      </td>
    </tr>
    <tr>
      <td>Notes</td>
      <td>
        Any notes about the organization. It is stored as a <code>string</code>.
      </td>
    </tr>
    <tr>
      <td>External ID</td>
      <td>
        A unique external ID to associate organizations to an external record.
      </td>
    </tr>
    <tr>
      <td>Group ID</td>
      <td>
        The group that this organization is part of.
      </td>
    </tr>
    <tr>
      <td>Shared tickets</td>
      <td>
        Is <code>True</code> if the end user in this organization are able to see each other's tickets, otherwise it will display <code>False</code>.
      </td>
    </tr>
    <tr>
      <td>Shared comments</td>
      <td>
        Is <code>True</code> if the end user in this organization are able to see each other's comments on tickets, otherwise it will display <code>False</code>.
      </td>
    </tr>
    <tr>
      <td>Tags</td>
      <td>
        The array of tags applied to this organization.
      </td>
    </tr>
    <tr>
      <td>Tags list</td>
      <td>
        List the most popular tags in the last 60 days.
      </td>
    </tr>
    <tr>
      <td>Name</td>
      <td>
        The name of the organization.
      </td>
    </tr>
    <tr>
      <td>ID</td>
      <td>
        Unique Zendesk organization ID. This is automatically assigned when the organization is created.
      </td>
    </tr>
    <tr>
      <td>URL</td>
      <td>
        The organization's API URL.
      </td>
    </tr>
    <tr>
      <td>Date created</td>
      <td>
        The time the organization was created.
      </td>
    </tr>
    <tr>
      <td>Date updated</td>
      <td>
        The time the organization was last updated.
      </td>
    </tr>
    <tr>
      <td>Date deleted</td>
      <td>
        The time the organization was deleted.
      </td>
    </tr>
    <tr>
      <td>Organization custom fields</td>
      <td>
        Includes data of custom organisation fields. They are displayed as arrays of <code>"id":"value"</code> pairs. Allowed data types are <code>string</code>, <code>int</code>, or tags.
      </td>
    </tr>
  </tbody>
</table>
