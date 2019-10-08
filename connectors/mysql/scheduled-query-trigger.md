---
title: Workato connectors - MySQL Scheduled query trigger
date: 2018-05-08 06:00:00 Z
---

# MySQL - Scheduled query trigger

## Run a query at defined intervals and return the result in batches
This trigger picks up rows that are returned from a user defined query which is run at an interval which is user defined. It is a batch action trigger and handles these returned rows in batches.

![Scheduled query trigger](/assets/images/mysql/scheduled-query-trigger.png)
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
      <td><a href="#schedule">Schedule</a></td>
      <td>Choose how often you want the SQL to be run.</td>
    </tr>
    <tr>
      <td><a href="#timezone">Timezone</a></td>
      <td>Choose the timezone for the schedule to be set in.</td>
    </tr>
    </tr>
    <tr>
      <td><a href="#hour">Hour</a></td>
      <td>Configure the hour of the day you wish to execute the SQL query.</td>
    </tr>
    </tr>
    <tr>
      <td><a href="#minute">Minute</a></td>
      <td>Configure the minute in the hour you wish to execute the SQL query.</td>
    </tr>
    </tr>
    <tr>
      <td><a href="#day-of-month">Day of month</a></td>
      <td>Configure the day of the month you wish to execute the SQL query.</td>
    </tr>
    <tr>
      <td><a href="#days-of-week">Days of week</a></td>
      <td>Select the days of the week you wish to execute the SQL query.</td>
    </tr>
    <tr>
      <td><a href="#batch-size">Batch size</a></td>
      <td>
        Configure the batch size to process in each individual job for this recipe. This defaults to 100.
      </td>
    </tr>
    <tr>
      <td><a href="#output-fields">Output fields</a></td>
      <td>
        Manually define the columns in the result set of the query. Workato tries to retrieve the expected columns automatically but this is subjected to timeouts. In cases of timeouts, use this to manually define your output columns. Read more on how to use this input below.
      </td>
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

### Schedule
Select the type of schedule you want for your integration use case. This input fields is a pick list with the following available choices:
- hourly
- daily
- monthly

### Timezone
Select the timezone for the scheduler to be set in. This is a required field.

### Hour
Configure the hour of the day you wish to execute the scheduled SQL query. This is required only if you selected **daily** or **monthly** as the [Schedule](#schedule).

### Minute
Configure the minute in the hour you wish to execute the scheduled SQL query. This is always required.

### Day of month
Provide a value between **1** to **31** for the day of the month. In shorter months, the values may be rounded down to the last day of the month. For example: if you use the value **31** and the month ends before the 31st, the trigger will run the SQL query on the last day of the month (e.g. 28th Feb, 31st Mar, 30th Apr, and so on)

Needed only if you selected **monthly** as the [Schedule](#schedule). This is an optional field that defaults to first day of the month if left empty.

### Days of week
Choose the days of the week you wish to execute the scheduled SQL query. This is required only if you selected **hourly** and **daily** as the [Schedule](#schedule). If you selected **hourly**, the trigger will execute the SQL hourly on days that are selected here.

### Batch size
Batch size of rows to return in each job. This can be any number between **1** and the maximum batch size. Maximum batch size is **100** and default is **100**.

In any given poll, if there are less rows than the configured batch size, this trigger will deliver all rows as a smaller batch.

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
