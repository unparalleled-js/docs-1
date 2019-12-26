---
title: Workato connectors - Zuora Create record actions
date: 2019-12-16 06:10:00 Z
---

# Zuora - Create record action

## Create record action
This action creates a single record in Zuora. First, select the object type in Zuora after which Workato will generate the appropriate input fields related to the object in Zuora.

![Create record action](~@img/zuora/create_record_action.gif)
*Input fields are dynamically generated based on the object selected.*

### Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Object</td>
      <td>Select the object type in Zuora you hope to create.</td>
    </tr>
    <tr>
      <td>Object-level input fields</td>
      <td>All relevant object input fields. Required input fields will be highlighted.</td>
    </tr>
  </tbody>
</table>

### Output fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Success</td>
      <td>Evaluates to "true" if the action was successful.</td>
    </tr>
    <tr>
      <td>ID</td>
      <td>The internal ID of the object created if successful.</td>
    </tr>
    <tr>
      <td>Errors</td>
      <td>Array of errors in the case that the action was unsuccessful.</td>
    </tr>
   </tbody>
</table>

## Downstream actions
When creating a record in Zuora, the attributes of this object are not returned immediately. To work with the attributes of this newly created record, use the "search records" action and search using the ID returned in this step.
