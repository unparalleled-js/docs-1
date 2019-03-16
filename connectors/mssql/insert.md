---
title: Workato connectors - SQL Server Insert actions
date: 2018-02-02 06:10:00 Z
---

# SQL Server - Insert actions
Workato offers both batch and single insert row actions. This allows you the flexibility to choose the action that you require for your recipe and to fulfill your business needs. Check out our [best practices on whether to use batch or single insert actions](/connectors/mssql/introduction.md#deciding-when-to-use-batch-of-rows-triggersactions-vs-single-row-triggersactions) and [when to use insert, update or update](/connectors/mssql/introduction.md#when-to-use-update-insert-and-upsert-actions). 

> Stopped jobs due to errors after an `insert row` action has finished would result in multiple inserts if the job is repeated. Consider using upserts that prevent inserting multiple rows into your database tables by deduping them on a key

## Insert row
This action inserts a single row into the selected table.

![Insert row action](/assets/images/mssql/insert-row-action.png)
*Insert row action*

### Table
First, select a table to insert a row into. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.

### Columns
Next, enter data manually into the input fields or map the datapills from your previous triggers or actions into their respective columns. The input fields generated here are based off columns in your table.

## Insert batch of rows
This action allows you to insert multiple rows in a single action instead of one row at a time. This provides higher throughput when you are moving a large number of records from one app to SQL Server. Depending on the structure of your recipe and volume of data, this action can reduce integration time by a factor of 100.

![Insert batch of rows action](/assets/images/mssql/insert-rows-batch-action.png)
*Insert batch of rows action*

### Table
Just like with the single row insert action, you need to select the target table first.

### Rows source list
Unlike the **Insert row** action (where we deal with a single row), we are now dealing with a batch of rows. Hence, the next datapill to input is the *source* of the batch of rows to insert to the table. This can come from any trigger or action that outputs a list datapill.

![A list datapill from the datatree](/assets/images/mssql/list_datapill_in_output_tree.png)
*A list datapill from the datatree*

If you do not map a list datapill to this field, this action will insert only 1 row and will behave like the **Insert row** action.

### Columns
Finally, you will need to map the required fields from the output datatree here to insert rows with data from preceding trigger or actions. Take note that datapills mapped to each column here should be from the source list datapill you used earlier. Datapills that are mapped outside the source list datapill will not be iterated.

Refer to the [List management](/features/list-management.md) guide for more information about working with batches.

## Use cases

### Inserting a row
Row insertion can be used in various ways and settings depending on your business needs. A versatile action that can take in datapills from previous steps, check out how it can be used in conjunction with Workbot via slack to make bug ticket submission process easier.

![use-case-workbot-cmd](/assets/images/mssql/use-case-workbot-cmd.png)   
*Command in slack using workbot*

Check out how we use it in a [recipe with our Workbot integrations.](/connectors/mssql/common-use-cases.md)
