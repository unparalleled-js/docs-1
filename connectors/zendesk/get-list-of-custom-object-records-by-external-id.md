---
title: Workato connectors - Zendesk get list of custom object records by external id action
date: 2019-06-06 18:00:00 Z
---

# Zendesk - Get list of custom object records by external id action

Zendesk allows you to create custom objects to model, store, and retrieve objects that are not native to Zendesk (e.g. Tickets, Users, Organization). Custom objects can be configured to suit your various use-cases. It could be "product", "orders", "devices" etc. Find out more about Zendesk custom objects [here](/connectors/zendesk/sunshine-platform.md).

This action  retrieves a list of custom object records in your Zendesk instance that matches a search by external ID. Only results that matches all the criteria will be returned.

![Get organization by external ID action](/assets/images/connectors/zendesk/get-custom-object-records-by-external-id.png)
*Get custom object records by external ID action*

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
      <td>Custom object</td>
      <td>
        Select a custom object type for your search.
      </td>
    </tr>
    <tr>
      <td>External ID</a></td>
      <td>
        The organization's external ID. You can combine multiple external IDs into a single query with a <code>,</code> separator.
      </td>
    </tr>
  </tbody>
</table>

#### Output fields

The output of this trigger contains the full set of columns from the selected custom object type. All default and custom columns are supported.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Type</td>
      <td>
        The name of the custom object type.
      </td>
    </tr>  
    <tr>
      <td>ID</td>
      <td>
        Unique Zendesk ID. This is automatically assigned when the custom object record is created.
    </tr>  
    <tr>
      <td>External ID</td>
      <td>
        A unique identifier from another system. The API treats the ID as case insensitive. For example, "ian1" is treated the same as "Ian1".
      </td>
    </tr>
    <tr>
      <td>Date created</td>
      <td>
        The time the custom object record was created.
      </td>
    </tr>
    <tr>
      <td>Date updated</td>
      <td>
        The time the custom object record was last updated.
      </td>
    </tr>
    <tr>
      <td>Custom object custom fields</td>
      <td>
        Includes data of custom object custom fields.
      </td>
    </tr>
  </tbody>
</table>
