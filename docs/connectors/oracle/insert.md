---
title: Workato connectors - Oracle Insert actions
date: 2018-03-19 06:00:00 Z
---

# Oracle - Insert actions
Workato offers both batch and single insert row actions. This allows you the flexibility to choose the action that you require for your recipe and to fulfill your business needs. Check out our [best practices on whether to use batch or single insert actions](/connectors/oracle/best-practices.md#deciding-when-to-use-batch-of-rows-triggersactions-vs-single-row-triggersactions) and [when to use insert, update or update](/connectors/oracle/best-practices.md#when-to-use-update-insert-and-upsert-actions).

> Errors raised in a step after an `insert row` action has been executed during a job run will result in another insert if the job is repeated. Consider using upserts that prevent inserting multiple rows into your database tables by deduping them on a key

## Insert row
This action inserts a single row into the selected table.

![Insert row action](~@img/oracle/insert_row_action.png)
<center><i>Insert row action</i></center>

### Table/view
First, select a table to insert a row into. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.

### Columns
Next, map the datapills from your previous triggers or actions into their respective columns. The columns in the selected table are presented as input fields here for you to insert datapills.

## Insert batch of rows
This action allows you to insert multiple rows in a single action instead of one row at a time. This provides higher throughput when you are moving a large number of records from one app to Oracle. Depending on the structure of your recipe and volume of data, this action can reduce integration time by a factor of 100.

![Insert batch of rows action](~@img/oracle/insert_rows_batch_action.png)
<center><i>Insert batch of rows action</i></center>

### Table
Just like with the single row insert action, you need to select the target table first.

### Rows source list
Unlike the **Insert row** action (where we deal with a single row), we are now dealing with a batch of rows. Hence, the next datapill to input is the *source* of the batch of rows to insert to the table. This can come from any trigger or action that outputs a list datapill.

![A list datapill from the datatree](~@img/oracle/list_datapill_in_output_tree.png)
<center><i>A list datapill from the datatree</i></center>

If you do not map a list datapill to this field, this action will insert only 1 row and will behave like the **Insert row** action.

### Columns
Finally, you will need to map the required fields from the output datatree here to insert rows with data from preceding trigger or actions. Take note that datapills mapped to each column here should be from the source list datapill you used earlier. Datapills that are mapped outside the source list datapill will not be iterated.

Refer to the [List management](/features/list-management.html) guide for more information about working with batches.

## Next steps
Learn more about the other triggers and actions Workato has to offer for SQL server
  * [New row trigger](/connectors/oracle/new-row-trigger.md)
  * [New/updated row trigger](/connectors/mssql/updated-row-trigger.md)
  * [Select actions](/connectors/oracle/select.md)
  * [Update actions](/connectors/oracle/update.md)
  * [Upsert actions](/connectors/oracle/upsert.md)
  * [Delete actions](/connectors/oracle/delete.md)
  * [Run custom SQL action](/connectors/oracle/run_sql.md)
  * [Execute stored procedure](/connectors/oracle/stored-procedure.md)

Or get busy building your recipes now! Check out our
  * [Best practices](/connectors/oracle/best-practices.md)
  * [Use cases](/connectors/database-common-use-cases.md)
