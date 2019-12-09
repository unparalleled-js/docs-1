---
title: Workato connectors - BigQuery
date: 2019-11-11 06:00:00 Z
---

# Google BigQuery
[Google BigQuery](https://cloud.google.com/bigquery/) is a serverless, highly-scalable, and cost-effective cloud data warehouse with an in-memory BI Engine and machine learning built in. The Workato connector to Google BigQuery allows you to automate various actions on datasets in your BigQuery instance such as inserting rows or performing queries on existing datasets. You are also able to trigger recipes off new rows in datasets.

## How to connect to BigQuery on Workato
The BigQuery connector uses OAuth2 to authenticate with BigQuery.

![Configuring BigQuery connection](/assets/images/bigquery/connection.png)

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Connection name</td>
      <td>Give this BigQuery connection a unique name that identifies which BigQuery instance it is connected to.</td>
    </tr>
  </tbody>
</table>

## Rate limits on BigQuery
We highly recommend using batch actions to insert multiple rows as a time. [BigQuery's rate limits](https://cloud.google.com/bigquery/quotas#standard_tables) on Standard tables indicates that operations on tables that append, overwrite or insert data in tables can only be performed 1000 times a day. This may be easily exceeded if rows are added one by one.

## Working with the BigQuery connector
After establishing a connection with the BigQuery connector, most actions will require some additional parameter inputs.

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
      <td>Location</td>
      <td>The geographical location of where the job should be run.</td>
    </tr>
  </tbody>
</table>

### Single row vs batch of rows
The BigQuery connector can read or write to your database either as a single row or in batches. When using batch read actions/triggers, you have to provide the batch size you wish to work with. The batch size can be any number between 1 and 50000, with 50000 being the maximum batch size.

![Batch trigger inputs](/assets/images/bigquery/batch_trigger_input.png)
*Batch trigger inputs*

Besides the difference in input fields, there is also a difference between the outputs of these 2 types of operations. A trigger that processes rows one at a time will have an output datatree that allows you to map data from that single row.

![Single row output](/assets/images/bigquery/single_row_trigger_output.png)
*Single row output*

However, a trigger that processes rows in batches will output them as an array of rows. The <kbd>Rows</kbd> datapill indicates that the output is a list containing data for each row in that batch.

![Batch trigger output](/assets/images/bigquery/batch_trigger_output.png)
*Batch trigger output*

As a result, the output of batch triggers/actions needs to be handled differently. In cases where there are downstream batch actions which accept *Rows source list* input fields, you'll be able to map the rows array pill to it to tell Workato you want to map the entire array.

![Using batch trigger output](/assets/images/bigquery/using_batch_output.png)
*Using batch trigger output*

### WHERE condition
This input field is used to filter and identify rows to perform an action on. It is used in multiple triggers and actions in the following ways:
- filter rows to be picked up in triggers
- filter rows in **Select rows** action
- filter rows to be deleted in **Delete rows** action

This clause will be used as a `WHERE` statement in each request. This should follow basic SQL syntax. Refer to this [BigQuery documentation](https://cloud.google.com/bigquery/docs/reference/standard-sql/query-syntax) for a full list of rules for writing SQL statements compatible with BigQuery.

#### Simple statements

Knowing the data types of the column in BigQuery are important to build working queries. When comparing string values, values must be enclosed in single quotes (`''`) and columns used must exist in the table. When comparing integer values, the supplied value should not be enclosed in single quotes.

A simple `WHERE` condition to filter rows based on values in a single column looks like this.

```sql
string_column = 'USD' and integer_column = 1111
```

If used in a **Select rows** action, this `WHERE` condition will return all rows that have the value 'USD' in the `currency` column. Just remember to wrap datapills with single quotes in your inputs.

![Using datapills in WHERE condition](/assets/images/bigquery/use_datapill_in_where.png)
*Using datapills in `WHERE` condition*

#### Complex statements

Your `WHERE` condition can also contain subqueries. The following query can be used on the `users` table.

```sql
id in (select user_id from tickets where priority = 2)
```

When used in a **Delete rows** action, this will delete all rows in the `users` table where at least one associated row in the `tickets` table has a value of 2 in the `priority` column.

![Using datapills in WHERE condition with subquery](/assets/images/postgresql/use_datapill_in_where_complex.png)
*Using datapills in `WHERE` condition with subquery*
