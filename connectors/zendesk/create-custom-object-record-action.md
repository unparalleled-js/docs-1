---
title: Workato connectors - Zendesk create custom object record action
date: 2019-06-04 18:00:00 Z
---

# Zendesk - Create custom object record action

Zendesk allows you to create custom objects to model, store, and retrieve objects that are not native to Zendesk (e.g. Tickets, Users, Organization). Custom objects can be configured to suit your various use-cases. It could be "product", "orders", "devices" etc. Find out more about Zendesk custom objects [here](/connectors/zendesk/sunshine-platform.md)

For more information on Zendesk custom objects, please visit their documentation on this topic [here](https://develop.zendesk.com/hc/en-us/articles/360002124307-What-is-the-Sunshine-platform-).

After creating your custom object type, you can proceed to add new records, update existing records, and delete existing record.

This action creates a single record of a custom object into your Zendesk instance.

![Create custom object record action](/assets/images/connectors/zendesk/create-custom-object-record-action.png)
*Create custom object record action*

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
        Select a custom object type for your new record.
      </td>
    </tr>
    <tr>
      <td>New record values</td>
      <td>
        Provide data for each column of the record to be created.<br>
        <br>
        The <b>required</b> and <b>optional</b> fields will be displayed according to how you setup your custom object type. Find out more about Zendesk custom objects <a href="/connectors/zendesk/sunshine-platform.md">here</a>.
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
