---
title: Workato connectors - MySQL Scheduled query trigger
date: 2018-05-08 06:00:00 Z
---

# SQL Server - Scheduled query trigger

## Run a query at defined intervals and return the result in batches
This trigger picks up rows that are returned from a user defined query which is run at an interval which is user defined. It is a batch action trigger and handles these returned rows in batches.

![Scheduled query trigger](/assets/images/mssql/scheduled-query-trigger.png)
*Scheduled query trigger*

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#sql">SQL</a></td>
      <td>Custom SQL query to be executed at each poll interval to pick up new rows.</td>
    </tr>
    <tr>
      <td><a href="#indexed-unique-key">Indexed unique key</a></td>
      <td>Provide an indexed unique key to optimise performance. In cases where no indexed unique key is available, an <code>ORDER BY</code> clause must be provided in the SQL for batching of results.</td>
    </tr>
    <tr>
      <td><a href="#batch-size">Batch size</a></td>
      <td>
        Configure the batch size to process in each individual job for this recipe. This defaults to 100.
      </td>
    </tr>
    <tr>
      <td><a href="#batch-size">Trigger on</a></td>
      <td>
        Choose to run this SQL query either at <br>
        1. Every specific time interval<br>
        2. Every day at a specific time (you can also select which days of the week)
      </td>
    </tr>
    <tr>
      <td><a href="#output-fields">Output fields</a></td>
      <td>
        Manually define the columns in the result set of the query. Workato tries to retrieve the expected columns automatically but this is subjected to timeouts. In cases of timeouts, use this to manually define your output columns. Read more on how to use this input below.
      </td>
    </tr>
    <tr>
      <td><a href="#every">Every</a></td>
      <td><b>Only applies when a specific time interval is selected</b> Choose to execute this query every 5 minutes to every 30 days.</td>
    </tr>
    <tr>
      <td><a href="#start-at">Start at</a></td>
      <td><b>Only applies when a specific time interval is selected</b> Choose when this trigger will execute for the first time.</td>
    </tr>
    <tr>
      <td><a href="#timezone">Timezone</a></td>
      <td><b>Only applies when a specific date/time is selected</b> Choose the timezone for this schedule to be set in </td>
    </tr>
    <tr>
      <td><a href="#hour">Hour</a></td>
      <td><b>Only applies when a specific date/time is selected</b> Configure the hour of the day you wish to execute the SQL query. </td>
    </tr>
    <tr>
      <td><a href="#minute">Minute</a></td>
      <td><b>Only applies when a specific date/time is selected</b> Configure the minute in the hour you wish to execute the SQL query.</td>
    </tr>
    <tr>
      <td><a href="#days-of-week">Days of week</a></td>
      <td><b>Only applies when a specific date/time is selected</b> Select the days of the week you wish to execute the SQL query.</td>
    </tr>
  </tbody>
</table>

## Input field details

### SQL
Provide the SQL to be executed to select rows. The SQL here will be used to generate the output datatree. To do this, the SQL will be executed once when you provide it. You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes (`''`). Be sure to include some `WHERE` clauses which can help prevent retrieving rows you have already processed in an earlier job run if that is your intention. This can be done by qualifying rows based on their `updated_at` or `created_at` timestamp columns in your table.

```sql
select *
from contacts
where contacts.created_at between now() and now() + INTERVAL 1 DAY;
```

Avoid using limit clauses like `TOP` in your SQL. This is because the limit to the number of rows returned in the query is based on the value defined in the [**Batch size** input field](#batch-size). Adding your own limit clause will cause the action to fail.

> If no indexed unique key is defined in the next input field, you will need to add your own `ORDER BY` clause.

### Indexed unique key
After defining your query, a dropdown of all the columns in your queries result set will be available. When possible, select the key in your query that represents an indexed unique key. This vastly improves performance of your query.

> If no indexed unique key is defined, you will need to add your own `ORDER BY` clause in the SQL statement.

### Batch size
Batch size of rows to return in each job. This can be any number between **1** and the maximum batch size. Maximum batch size is **100** and default is **100**.

In any given poll, if there are less rows than the configured batch size, this trigger will deliver all rows as a smaller batch.

### Trigger on
Select the type of schedule you want for your integration use case. This input fields is a pick list with the following available choices:
- Every specific time interval
- Every day at a specific time

### Output fields
When you write a query, Workato immediately runs that query in the backend to inspect what columns to expect. These columns are then generated in the output of this step for you to map datapills later on in your recipe. As a safeguard against complex queries, we have an inbuilt timeout that occurs after 25 seconds. In cases like these, you may use this input field to manually define your output columns. The actual scheduled query trigger has a much higher timeout of 5 minutes.

When using this input field, we suggest naming all columns in your query as such:
```sql
select
name as 'Name',
phoneNumber as 'phoneNumber'
from contacts
where contacts.created_at between now() and now() + INTERVAL 1 DAY;
```
This allows your result set to be safely matched to the output fields defined below:
![Output Fields](/assets/images/mysql/output-fields.png)
*Names of output fields should match the named columns exactly*

If these names are not defined strictly in your query, names may sometimes be malformed when being retrieved, resulting in your trigger not mapping the results to the datapills properly. Remember to name your columns without spaces or special characters as output fields do not accept spaces or special characters.

### Every
Only shown when specific time interval is selected. Choose from the following intervals
- 5 minutes
- 15 minutes
- 30 minutes
- 45 minutes
- 1 hour
- 1 day
- 1 week
- 30 days

### Start at
Only shown when specific time interval is selected. Choose the date and time when this trigger will execute its first job.

### Timezone
Only shown when specific date/time is selected. Select the timezone for the scheduler to be set in. This is a required field.

### Hour
Only shown when specific date/time is selected. Configure the hour of the day you wish to execute the scheduled SQL query.

### Minute
Only shown when specific date/time is selected. Configure the minute in the hour you wish to execute the scheduled SQL query. This is always required.

### Days of week
Only shown when specific date/time is selected. Choose the days of the week you wish to execute the scheduled SQL query.
