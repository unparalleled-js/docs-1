---
title: Workato connectors - Oracle Delete actions
date: 2018-03-19 06:00:00 Z
---

# Oracle - Delete actions

## Delete rows

This action lets you delete rows based on certain criteria defined by a ` WHERE` condition.

> **Warning: This action should be tested and used with care as is it will PERMANENTLY delete rows in your table.**

![Delete action](~@img/oracle/delete-rows-action.png)
<center><i>Delete rows action</i></center>

### Table
First, select a table to delete rows from. This can be done either by selecting a table from the pick list, or toggling the input to text mode and typing the full table name.

### WHERE condition
Next, provide a `WHERE` condition to select rows to be deleted. This condition can be as simple as filtering a single record to delete based on `ID`.

```sql
CUSTOMER_ID = 123
```

Alternatively, it can be used to delete multiple rows.

```sql
STATUS = 'closed'
```

Complex `WHERE` conditions with subqueries can also be used. Refer to the Oracle [WHERE condition](/connectors/oracle/introduction.md#using-where-conditions) guide for more information.

## Next steps
Learn more about the other triggers and actions Workato has to offer for SQL server
  * [New row trigger](/connectors/oracle/new-row-trigger.md)
  * [New/updated row trigger](/connectors/oracle/updated-row-trigger.md)
  * [Select actions](/connectors/oracle/select.md)
  * [Insert actions](/connectors/oracle/insert.md)
  * [Update actions](/connectors/oracle/update.md)
  * [Upsert actions](/connectors/oracle/upsert.md)
  * [Run custom SQL action](/connectors/oracle/run_sql.md)
  * [Execute stored procedure](/connectors/oracle/stored-procedure.md)

Or get busy building your recipes now! Check out our
  * [Best practices](/connectors/oracle/best-practices.md)
  * [Use cases](/connectors/database-common-use-cases.md)
