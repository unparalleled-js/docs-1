---
title: Workato connectors - BigQuery Insert actions
date: 2018-02-02 06:10:00 Z
---

# BigQuery - Insert rows action

## Insert rows
This action inserts a batch of rows into the selected table.

![Insert row action](/assets/images/bigquery/insert-row-action.png)
*Insert row action*

### Input fields
#### Project, Dataset and Table
To insert rows into a BigQuery table, we will first need you to select the project and dataset that contain this table. The table dropdown will then appear preloaded with the available tables in the chosen dataset.

#### Location
The geographical location of where the job should be run.

#### Columns
After a table is chosen, Workato introspects the table to retrieve the available columns. Each column will be represented by a single input field.

## Inserting a single row
To insert a single row into the BigQuery table, simply ignore the `Rows source list` input field. In cases where you are mapping datapills from an array, this would only insert a row with data from the first index of the array.

## Inserting multiple rows
When inserting multiple rows into BigQuery, use the `Rows source list` input field to let Workato know to insert all rows of that list datapill into BigQuery. This is done in a single `Insert` statement.

## Rate limits on BigQuery
We highly recommend using batch actions to insert multiple rows as a time. [BigQuery's rate limits](https://cloud.google.com/bigquery/quotas#standard_tables) on Standard tables indicates that operations on tables that append, overwrite or insert data in tables can only be performed 1000 times a day. This may be easily exceeded if rows are added one by one.
