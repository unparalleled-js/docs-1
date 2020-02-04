---
title: Workato connectors - BigQuery Scheduled Query trigger
date: 2019-12-10 06:00:00 Z
---

# BigQuery - Scheduled Query trigger

## Scheduled Query Trigger
This trigger executes a query on a regular basis. The result of the query is batched into jobs of a user defined batch size.

![Scheduled query trigger](~@img/bigquery/scheduled-query-input.png)
*Scheduled query trigger*

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
      <td>Query</td>
      <td>The query to execute. If a limit clause is used, automatic schema introspection is not allowed.</td>
    </tr>
    <tr>
      <td>Batch size</td>
      <td>The number of rows in each job. Jobs may be processed faster when batch sizes are smaller.</td>
    </tr>
    <tr>
      <td>Schedule settings</td>
      <td>Set how often you want this query to run. The minimum period is 1 hour to give previous triggers sufficient time to batch and complete.</td>
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
      <td>Unique key</td>
      <td>A unique key to deduplicate rows with. When we execute the scheduled query, we immediately order by this key.</td>
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
   </tbody>
</table>
