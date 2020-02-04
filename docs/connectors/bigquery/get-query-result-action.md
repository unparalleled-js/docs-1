---
title: Workato connectors - BigQuery Get query job output action
date: 2019-12-10 06:00:00 Z
---

# BigQuery - Get query job output action

## Get query job output action
This action takes in a specific Job ID and returns the query results of this job. This is often used with a Query Job and can be used in the context of a recipe to page through large result sets.

![Get Query Job output](~@img/bigquery/get-query-job-output.png)
*Get Query Job output action*

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
      <td>Configure to listen on a project.</td>
    </tr>
    <tr>
      <td>Job ID</td>
      <td>The ID of the Job. Can be found in the "Job completed" trigger</td>
    </tr>
    <tr>
      <td>Page size</td>
      <td>The size of each page. Default and maximum is 50,000 rows.</td>
    </tr>
    <tr>
      <td>Page token</td>
      <td>This is also the output of this action. Can be used in a "For Each" loop to page through a result set larger than the page size.</td>
    </tr>
    <tr>
      <td>Start index/td>
      <td>The index of the starting row. Cannot be used with Page token.</td>
    </tr>
    <tr>
      <td>Output fields</td>
      <td>This input field appears when "Automatic schema introspection" is false. Use this to manually define the output fields of your query. The names given to the output should be identical to the column names expected.</td>
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
      <td>Page token</td>
      <td>Can be passed to the next "Get query result" action to get the next page</td>
    </tr>
    <tr>
      <td>Total row<s/td>
      <td>Total number of rows returned.</td>
    </tr>
    <tr>
      <td>Array of rows/td>
      <td>Rows containing the data defined in the output fields.</td>
    </tr>
   </tbody>
</table>
