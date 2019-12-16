---
title: Workato connectors - BigQuery Insert actions
date: 2019-12-10 06:10:00 Z
---

# BigQuery - Insert rows action

## Insert rows
This action inserts a batch of rows into the selected table.

![Insert row action](~@img/bigquery/insert-row-action.png)
*Insert row action*

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
      <td>Project</td>
      <td>The project available in the connection to be billed for the query.</td>
    </tr>
    <tr>
      <td>Dataset</td>
      <td>The dataset which the action or trigger will pull the possible tables from.</td>
    </tr>
    <tr>
      <td>Table</td>
      <td>The table inside the dataset.</td>
    </tr>
    <tr>
      <td>Columns</td>
      <td>After a table is chosen, Workato introspects the table to retrieve the available columns. Each column will be represented by a single input field. <br> <br>
      To insert a single row into the BigQuery table, simply ignore the `Rows source list` input field. In cases where you are mapping datapills from an array, this would only insert a row with data from the first index of the array. <br> <br>
      When inserting multiple rows into BigQuery, use the `Rows source list` input field to let Workato know to insert all rows of that list datapill into BigQuery. This is done in a single `Insert` statement.</td>
    </tr>
    <tr>
      <td>Location</td>
      <td>The geographical location of where the job should be run. This field isn't required in most cases.</td>
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
      <td>Project ID</td>
      <td>The ID of the project which contains the table with the inserted rows.</td>
    </tr>
    <tr>
      <td>Job ID</td>
      <td>The ID of the Job which inserted the rows in BigQuery.</td>
    </tr>
    <tr>
      <td>Location</td>
      <td>The location of the Job which inserted the rows in BigQuery.</td>
    </tr>
    <tr>
      <td>Job complete</td>
      <td>Boolean value as to whether the job was completed.</td>
    </tr>
    <tr>
      <td>Number of affected rows</td>
      <td>Integer value of however many rows were inserted.</td>
    </tr>
    <tr>
      <td>Errors</td>
      <td>If Job complete is false, this errors object will contain the reason returned from BigQuery</td>
    </tr>
   </tbody>
</table>

## Rate limits on BigQuery
We highly recommend using batch actions to insert multiple rows as a time. [BigQuery's rate limits](https://cloud.google.com/bigquery/quotas#standard_tables) on Standard tables indicates that operations on tables that append, overwrite or insert data in tables can only be performed 1000 times a day. This may be easily exceeded if rows are added one by one.
