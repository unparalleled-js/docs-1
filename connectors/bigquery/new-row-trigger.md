---
title: Workato connectors - BigQuery new row triggers
date: 2018-03-23 06:00:00 Z
---

# BigQuery - New row triggers

## New row
This trigger picks up rows that are inserted in the selected table. Each row is processed as a separate job. It checks for new rows once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) to find out more.

![New row trigger](/assets/images/bigquery/new-row-trigger.png)
*New row trigger*

### Input fields
#### Project, Dataset and Table
To insert rows into a BigQuery table, we will first need you to select the project and dataset that contain this table. The table dropdown will then appear preloaded with the available tables in the chosen dataset.

#### Location
The geographical location of where the job should be run.

#### Unique key
Values from this selected column is used to deduplicate rows in the selected table, making sure that the same row is not processed twice in the same recipe.

As such, the values in the selected column should not be repeated in your table. Typically, this column is the primary key of the table (e.g. `ID`). It should be incremental and sortable. This column can also be indexed for better performance.

#### Output columns
After selecting your table, you'll also be able to select which columns you want returned. Selecting only what you need for your recipe increases job throughput and overall efficiency of the recipe.

#### WHERE condition
This condition is used to filter rows based on one or more column values.

```sql
status = 'closed' and priority > 3
```

Leave blank to process all rows from the selected table.

Complex `WHERE` conditions with subqueries can also be used. Refer to the [WHERE condition](/connectors/bigquery.md#where-condition) guide for more information.

### Output fields
The output of this trigger is a single row whose data corresponds to the datapill which bears the column name. Use it in downstream actions to pass this data on to other applications.

## New batch of rows
This trigger picks up rows that are inserted in the selected table or view. These rows are processed as a batch of rows for each job. This batch size can be configured in the trigger input. It checks for new rows once every poll interval. The poll interval can be 10 mins or 5 mins, depending on your plan. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) to find out more.

![New batch of rows trigger](/assets/images/bigquery/new-batch-of-rows-trigger.png)
*New batch of rows trigger*

### Input fields
#### Project, Dataset and Table
To insert rows into a BigQuery table, we will first need you to select the project and dataset that contain this table. The table dropdown will then appear preloaded with the available tables in the chosen dataset.

#### Location
The geographical location of where the job should be run.

#### Unique key
Values from this selected column is used to deduplicate rows in the selected table, making sure that the same row is not processed twice in the same recipe.

As such, the values in the selected column should not be repeated in your table. Typically, this column is the primary key of the table (e.g. `ID`). It should be incremental and sortable. This column can also be indexed for better performance.

#### Output columns 
After selecting your table, you'll also be able to select which columns you want returned. Selecting only what you need for your recipe increases job throughput and overall efficiency of the recipe.

#### WHERE condition
This condition is used to filter rows based on one or more column values.

```sql
status = 'closed' and priority > 3
```

Leave blank to process all rows from the selected table.

Complex `WHERE` conditions with subqueries can also be used. Refer to the [WHERE condition](/connectors/bigquery.md#where-condition) guide for more information.

#### Batch size
The batch size of the rows to be returned in each job. This can be anywhere from 1 to 50,000 with 50,000 being the default. Larger batch sizes will increase data throughput. If more new rows are found than the batch size, multiple jobs will be created until all new rows are processed.

### Output fields
The output of this trigger is an array of rows whose data corresponds to the datapill which bears the column name. Use it in downstream actions to pass this data on to other applications.
