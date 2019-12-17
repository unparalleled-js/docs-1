---
title: Workato connectors - Zuora Search record actions
date: 2019-12-16 06:10:00 Z
---

# Zuora - Search record action

## Search record action
This action searches for records in Zuora. First, select the object type in Zuora after which Workato will generate the possible search parameters. Ensure that the Zuora connector is configured to the latest WSDL SOAP API version. Earlier WSDL versions may not be compatible.

![Search record action](~@img/zuora/search_record_action.png)
*Search parameters are dynamically generated based on the object selected.*

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
      <td>Object-level Search parameters fields</td>
      <td>All relevant object input fields. Required input fields will be highlighted. Take note that the ID in the response from the <a href='/connectors/zuora/create_record.html'>create record action</a> or the <a href='/connectors/zuora/update_record.html'>update record action</a> should be matched to the ID search parameter.</td>
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
      <td>Array of records</td>
      <td>An array of records where the attributes returned for each record change dynamically based on the object you have selected.</td>
    </tr>
   </tbody>
</table>
