---
title: Workato connectors - BigQuery Select actions
date: 2019-12-10 06:10:00 Z
isTocVisible: true
---

# BigQuery - Select actions

## Select rows
This action lets you select rows based on certain criteria defined by a ` WHERE` condition. Rows from the selected table that match the `WHERE` condition will be returned as the output of this action. This action is a long action, enabling you to pull data from larger tables. If no data is returned in the first few seconds of the job execution in BigQuery, Workato will wait a periodic amount of time before checking if the data is ready to be retrieved from BigQuery.

![Select rows action](/assets/images/bigquery/select-rows-action.png)
*Select rows action*

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
      <td>Output columns</td>
      <td>After selecting your table, you'll also be able to select which columns you want returned. Selecting only what you need for your recipe increases job throughput and overall efficiency of the recipe.</td>
    </tr>
    <tr>
      <td>WHERE condition</td>
      <td>Refer to the <a href='/connectors/bigquery.md#where-condition'>WHERE condition</a> guide for more information.</td>
    </tr>
    <tr>
      <td>Order by</td>
      <td>Rows returned from this action can be ordered based on the <b>Order by</b> input field. This field is used to change the default ordering of rows from your BigQuery database.
      You can also define the direction of order for each column you wish to order by. The following order by statement will order rows by `priority` in ascending order followed by `created_date` in descending order (latest first).<br>
      <code>priority asc, created_date desc</code></td>
    </tr>
    <tr>
      <td>Limit</td>
      <td>This input field determines the maximum number of rows to return. The default limit is 50000 and capped at a maximum of 50000 rows for a single <b>Select rows</b> action.</td>
    </tr>
    <tr>
      <td>Offset</td>
      <td>This input field gives you the option to fetch only a page of results from the entire results set. For example, to skip the first 100 rows of the selected results set, input <code>100</code> to this field. The default is <code>0</code>.</td>
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
      <td>Rows</td>
      <td>An array of the rows. Each datapill in the row object corresponds to a single column.</td>
    </tr>
</table>

## Select rows using custom SQL
This action lets you select rows based on a custom SQL query. Rows that are returned from the query will be returned as the output of this action. This action is a long action, enabling you to pull data from larger tables or perform complex queries including `JOINS`, `GROUP BY` or any other SQL functions available in BigQuery. If no data is returned in the first few seconds of the job execution in BigQuery, Workato will wait a periodic amount of time before checking if the data is ready to be retrieved from BigQuery.

![Select rows using custom SQL action](/assets/images/bigquery/custom-sql-action.png)
*Select rows using custom SQL action*

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
      <td>SQL</td>
      <td>Provide the SQL query to be executed to select rows. The query here will be used to generate the output datatree. To do this, the SQL will be executed once when you provide it. You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes (`''`) if they are used to compared against string datatypes. When using datapills, you will need to use the output columns schema designer to let us know what columns will be returned. <br>
      Do not use the `LIMIT` clause in your SQL but use the limit input field instead.
      </td>
    </tr>
    <tr>
      <td>Automatic schema introspection</td>
      <td>Workato automatically tries to introspect the output of your query. In cases where the query takes too long or if datapills are used, toggle this to false and define the output fields of your query manually.</td>
    </tr>
    <tr>
      <td>Output fields</td>
      <td>This input field appears when "Automatic schema introspection" is false. Use this to manually define the output fields of your query. The names given to the output should be identical to the column names expected.</td>
    </tr>
    <tr>
      <td>Limit</td>
      <td>This input field determines the maximum number of rows to return. The default limit is 50000 and capped at a maximum of 50000 rows</td>
    </tr>
    <tr>
      <td>Offset</td>
      <td>This input field gives you the option to fetch only a page of results from the entire results set. For example, to skip the first 100 rows of the selected results set, input <code>100</code> to this field. The default is <code>0</code>.</td>
    </tr>
    <tr>
      <td>Location</td>
      <td>The geographical location of where the job should be run. This field isn't required in most cases.</td>
    </tr>
    <tr>
      <td>Legacy SQL</td>
      <td>The default is assumed to be standard SQL. Select true to use legacy SQL instead.</td>
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
      <td>Rows</td>
      <td>An array of the rows. Each datapill in the row object corresponds to a single column.</td>
    </tr>
</table>
