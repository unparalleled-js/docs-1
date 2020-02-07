---
title: Workato connectors - BigQuery Job completed trigger
date: 2019-12-10 06:00:00 Z
---

# BigQuery - Job completed trigger

## Job completed trigger
This trigger polls regularly for jobs completed in BigQuery. It can be configured to listen on various levels from entire projects to individual tables. This trigger only picks up completed jobs.

![Job completed trigger](~@img/bigquery/job-completed-input.png)
*Job completed trigger*

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
      <td>Dataset</td>
      <td>Optional. Configure to listen on a specific dataset.</td>
    </tr>
    <tr>
      <td>Table</td>
      <td>Optional. Configure to listen on a specific table.</td>
    </tr>
    <tr>
      <td>All users</td>
      <td>Defaults to "No". If "Yes", all jobs will be listened on including those not pegged to the user. The user would be the user who authorised the BigQuery connection.</td>
    </tr>
    <tr>
      <td>When first started, this recipe should pick up events from</td>
      <td>A time to retrospectively pick up jobs from.</td>
    </tr>
    <tr>
      <td>Job Type</td>
      <td>Leave blank to listen on all jobs. When configured, it will only trigger on jobs that match.</td>
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
      <td>ID</td>
      <td>The ID of the job completed.</td>
    </tr>
    <tr>
      <td>Kind</td>
      <td>The type of the BigQuery Job</td>
    </tr>
    <tr>
      <td>Job Reference</td>
      <td>Contain information about the job such as Project ID, Job ID and location.</td>
    </tr>
    <tr>
      <td>State</td>
      <td>State of job. Must be DONE.</td>
    </tr>
    <tr>
      <td>Statistics</td>
      <td>Contains information about the query time and total bytes processed by the job.</td>
    </tr>
    <tr>
      <td>Configuration</td>
      <td>Contains information about the query configuration</td>
    </tr>
    <tr>
      <td>Status</td>
      <td>Contains error results and messages if any.</td>
    </tr>
    <tr>
      <td>User email</td>
      <td>Email of the user who ran the job.</td>
    </tr>
   </tbody>
</table>
