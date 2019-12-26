---
title: Workato connectors - Oracle Execute stored procedure actions
date: 2018-03-19 06:00:00 Z
---

# Oracle - Execute stored procedure action

## Execute stored procedure
This action lets you execute any stored procedure or functions saved in your database instance. To use this action, your Oracle connection must be established using an [On-premise agent](/on-prem.md). Stored procedures from packages are not supported in this action. They can be written to accept input parameters and perform actions on these input parameters. Workato's `Execute stored procedure` action is able to pick up on parameter inputs and allows you to dynamically input these parameters directly from your workflow.

Using stored procedures are a great way to improve recipe efficiency and balance load between Workato and your database. [Find out more in our best practices section how to use stored procedures to make your recipes more efficient.](/connectors/oracle/best-practices.md#when-to-use-custom-sql-and-stored-procedures-in-workato)

![Execute stored procedure rows action](~@img/oracle/stored-procedure.png)
*Execute stored procedure rows action*

### Stored procedure
First, select a stored procedure to execute. This can be done either by selecting from the pick list, or toggling the input to text mode and providing the full stored procedure name.

### Input parameters
Next, provide any input parameters required for the selected stored procedure.

### Output
Datasets returned from stored procedures in Oracle are not returned in this action.

## List of Workato triggers and actions
Workato currently supports the following triggers and actions. Find out more details about each by clicking on the links below. You can also navigate to them through the side bar.

  * [New row trigger](/connectors/oracle/new-row-trigger.md)
  * [New/updated row trigger](/connectors/oracle/updated-row-trigger.md)
  * [Select actions](/connectors/oracle/select.md)
  * [Insert actions](/connectors/oracle/insert.md)
  * [Update actions](/connectors/oracle/update.md)
  * [Upsert actions](/connectors/oracle/upsert.md)
  * [Delete actions](/connectors/oracle/delete.md)
  * [Run custom SQL action](/connectors/oracle/run_sql.md)

  Or get busy building your recipes now! Check out our
  * [Best practices](/connectors/oracle/best-practices.md)
  * [Use cases](/connectors/database-common-use-cases.md)
