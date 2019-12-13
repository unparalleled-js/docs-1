---
title: Workato connectors - Oracle
date: 2019-03-20 06:00:00 Z
---

# Oracle
[Oracle database](https://www.oracle.com/database/index.html) is a multi-model database management system by Oracle Corporation. It can be hosted on-premise or in a private cloud.

## Supported editions
All releases of Oracle database are supported.

## How to connect to Oracle on Workato
The Oracle connector uses basic authentication to authenticate with Oracle.
![Configured Oracle connection](~@img/oracle/connection.png)

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
      <td>Give this Oracle connection a unique name that identifies which Oracle instance it is connected to.</td>
    </tr>
    <tr>
      <td>On-prem secure agent</td>
      <td>Choose an on-premise agent if your database is running in a network that does not allow direct connection. Before attempting to connect, make sure you have an active on-premise agent. Refer to the <a href="/on-prem.md">On-premise agent</a> guide for more information.</td>
    </tr>
    <tr>
      <td>Username</td>
      <td>Username to connect to Oracle.</td>
    </tr>
    <tr>
      <td>Password</td>
      <td>Password to connect to Oracle.</td>
    </tr>
    <tr>
      <td>Host</td>
      <td>URL of your hosted server.</td>
    </tr>
    <tr>
      <td>Port</td>
      <td>Port number that your server is running on, typically <b>1521</b>.</td>
    </tr>
    <tr>
      <td>SID/Service name</td>
      <td>SID or Service name of your Oracle database instance you wish to connect to.</td>
    </tr>
  </tbody>
</table>

### Permissions required to connect

At minimum, the database user account must be granted `SELECT` permission to the database specified in the [connection](#how-to-connect-to-oracle-on-workato). Check out the example below to find out more about how to set permissions if you are the one setting up the Oracle server connection for your business
> <details><summary><b>Click here to find out how to set up permissions</b></summary>
>
> If we are trying to connect to a named schema (<code>HR_PROD</code>) in an Oracle instance, using a new database user <code>WORKATO</code>, the following example queries can be used.
>
> First, create a new user dedicated to integration use cases with Workato.
> <pre><code style="display: block; white-space: pre-wrap;">CREATE USER WORKATO IDENTIFIED BY password</code></pre>
>
> Next, grant <code>CONNECT</code> to this user.
>
> <pre><code style="display: block; white-space: pre-wrap;">GRANT CONNECT TO WORKATO;</code></pre>
>
> This allows the user to have login access to the Oracle instance. However, this user will not have access to any tables.
>
> The next step is to grant access to <code>SUPPLIER</code> table in the <code>HR_PROD</code> schema. In this example, we only wish to grant <code>SELECT</code> and <code>INSERT</code> permissions.
>
> <pre><code style="display: block; white-space: pre-wrap;">GRANT SELECT,INSERT ON HR_PROD.SUPPLIER TO WORKATO;
> </code></pre>
>
> Finally, check that this user has the necessary permissions. Run a query to see all grants.
>
> <pre><code style="display: block; white-space: pre-wrap;">SELECT * FROM DBA_ROLE_PRIVS WHERE GRANTEE = 'WORKATO';
> SELECT * FROM DBA_TAB_PRIVS WHERE GRANTEE = 'WORKATO';
> </code></pre>
>
> This should return the following minimum permission to create a Oracle connection on Workato.
>
> <pre><code style="display: block; white-space: pre-wrap;">+---------+--------------+--------------+--------------+
> | GRANTEE | GRANTED_ROLE | ADMIN_OPTION | DEFAULT_ROLE |
> +---------+--------------+--------------+--------------+
> | WORKATO | CONNECT      | NO           | YES          |
> +---------+--------------+--------------+--------------+>
>
> +---------+---------+------------+---------+-----------+-----------+-----------+
> | GRANTEE | OWNER   | TABLE_NAME | GRANTOR | PRIVILEGE | GRANTABLE | HIERARCHY |
> +---------+---------+------------+---------+-----------+-----------+-----------+
> | WORKATO | HR_PROD | SUPPLIER   | ROOT    | SELECT    | NO        | NO        |
> | WORKATO | HR_PROD | SUPPLIER   | ROOT    | INSERT    | NO        | NO        |
> +---------+---------+------------+---------+-----------+-----------+-----------+
> 3 rows in set (0.61 sec)
> </code></pre>
></details>

## Working with the Oracle connector

### Table, view and stored procedure
After successfully connecting to your Oracle database and selecting an action/trigger in your recipe, you will often be prompted to select either a table, view or stored procedure. This tells Workato where to pull or send data to.

### Tables and Views
The Oracle connector works with all tables and views. These are available in pick lists in each trigger/action or you can provide the exact name. Views can be called using this as well and be used in the same way as a table.

![Table selection from pick list](~@img/oracle/table_pick_list.png)
<center><i>Select a table/view from pick list</i></center>

<br>

![Exact table name provided](~@img/oracle/table_name_text.png)
<center><i>Provide exact table/view name in a text field</i></center>

### Stored Procedures
Stored procedures are custom written workflows that have to be written and saved within your Oracle database. They are able to do a range of functionalities including creating, reading, updating and deleting rows. They can also accept parameters. [Click here if you want to know more about how Workato works with stored procedures.](/connectors/oracle/stored-procedure.md)

### Using `WHERE` conditions
This input field is used to filter and identify rows to perform an action on. It is used in multiple triggers and actions in the following ways:
- filter rows to be picked up in triggers
- filter rows in **Select rows** action
- filter rows to be deleted in **Delete rows** action

This clause will be used as a `WHERE` statement in each request. This should follow basic SQL syntax. Refer to this [Oracle documentation](http://www.oracle.com/technetwork/issue-archive/2012/12-mar/o22sql-1494267.html) for a full list of rules for writing Oracle statements.

#### Operators
At the foundation of any `WHERE` statement, we have operators that help us filter and identify what rows we want returned in Workato. By chaining operators in the same way one would do it in SQL, you'll be able to use them to create robust and complex filters on your data directly from Workato.

><details><summary><b>Click here for a list of operators</b></summary>
><table class="unchanged rich-diff-level-one">
>  <thead>
>    <tr>
>        <th>Operator</th>
>        <th width='40%'>Description</th>
>        <th width='40%'>Example</th>
>    </tr>
>  </thead>
>  <tbody>
>    <tr>
>      <td>=</td>
>      <td>Equal</td>
>      <td><code>WHERE ID = 445</code></td>
>    </tr>
>    <tr>
>      <td>
>        !=<br>
>        <>
>      </td>
>      <td>Not equal</td>
>      <td><code>WHERE ID <> 445</code></td>
>    </tr>
>    <tr>
>      <td>
>        &gt<br>
>        &gt=
>      </td>
>      <td>
>        Greater than<br>
>        Greater than or equal to
>      </td>
>      <td><code>WHERE PRICE > 10000</code></td>
>    </tr>
>    <tr>
>      <td>
>        &lt<br>
>        &lt=
>      </td>
>      <td>
>        Less than<br>
>        Less than or equal to
>      </td>
>      <td><code>WHERE PRICE > 10000</code></td>
>    </tr>
>    <tr>
>      <td>IN(...)</td>
>      <td>List of values</td>
>      <td><code>WHERE ID IN(445, 600, 783)</code></td>
>    </tr>
>    <tr>
>      <td>LIKE</td>
>      <td>Pattern matching with wildcard characters (<code>%</code> and <code>&#95</code>)</td>
>      <td><code>WHERE EMAIL LIKE '%@workato.com'</code></td>
>    </tr>
>    <tr>
>      <td>BETWEEN</td>
>      <td>Retrieve values with a range</td>
>      <td><code>WHERE ID BETWEEN 445 AND 783</code></td>
>    </tr>
>    <tr>
>      <td>
>        IS NULL<br>
>        IS NOT NULL
>      </td>
>      <td>
>        NULL values check<br>
>        Non-NULL values check
>      </td>
>      <td><code>WHERE NAME IS NOT NULL</code></td>
>    </tr>
>  </tbody>
></table>
></details>

### Data types

The other component of a `WHERE` condition would be to use these operators in conjunction with the proper datatypes. When writing `WHERE` statements, make sure you compare a variable of `data type = integer` in your table with a  variable of `data type = integer` instead of `data type = string`.

Workato also helps reveal the data types expected for each input field when you select
- **Update rows** actions
- **Upsert rows** actions

They appear directly below the output field, allowing you to know the expected data type to be sent while building the recipe. Use these hints to send the proper data types over to your Oracle database as failing to do so might lead to unexpected behaviour or failed jobs.

![input field hints](~@img/oracle/oracle-input-field-data-type.png)
<center><i>Hints below each input field inform you about the data type expected</i></center>

Here are some of the common data types you can expect to see. A more comprehensive list can be found [here](https://www.w3schools.com/sql/sql_datatypes.asp)

><details><summary><b>Click here for a list of common data types</b></summary>
><table class="unchanged rich-diff-level-one">
>  <thead>
>    <tr>
>        <th>Data type</th>
>        <th width='40%'>Description</th>
>        <th width='40%'>Example</th>
>    </tr>
>  </thead>
>  <tbody>
>    <tr>
>      <td>number</td>
>      <td>The NUMBER data type stores zero, positive and negative fixed numbers.</td>
>      <td><code>-100</code>,<code>1</code>,<code>30,000</code></td>
>    </tr>
>    <tr>
>      <td>FLOAT</td>
>      <td>The FLOAT data type is a subtype of NUMBER. You can can specify it with or without precision. Scale cannot be specified, but is interpreted from the data. Each FLOAT value requires from 1 to 22 bytes.</td>
>      <td><code>1.11</code>,<code>2.0761</code>,<code>1.61803398875</code></td>
>    </tr>
>    <tr>
>      <td>YEAR</td>
>      <td>valid values are -4712 to 9999 excluding year 0</td>
>      <td><code>1</code>,<code>245</code>,<code>100</code></td>
>    </tr>
>    <tr>
>      <td>MONTH</td>
>      <td>01-12</td>
>      <td><code>1</code></td>
>    </tr>
>    <tr>
>      <td>DAY</td>
>      <td>01-31</td>
>      <td><code>1</code>,<code>0</code>,<code>15</code></td>
>    </tr>
>    <tr>
>      <td>VARCHAR2(n)</td>
>      <td><b>Variable</b> width character string of length <code>n</code></td>
>      <td><code>Foo_bar</code></td>
>    </tr>
>    <tr>
>      <td>nchar(n)</td>
>      <td><b>Fixed</b> width character string of length <code>n</code></td>
>      <td><code>Foo</code> where n = 3</td>
>    </tr>
>    <tr>
>      <td>TIMESTAMP</td>
>      <td>From January 1, 1753 to December 31, 9999 with an accuracy of 3.33 milliseconds</td>
>      <td><code>2011-09-16 13:23:18.767</code></td>
>    </tr>
>  </tbody>
></table>
></details>

### Writing `WHERE` conditions

Now that we've gone through operators and data types, we are ready to write our `WHERE` conditions. String values must be enclosed in single quotes (`''`) and columns used must exist in the table/view.

A simple `WHERE` condition to filter rows based on values in a single column looks like this.

```sql
currency = 'USD'
```
If used in a **Select rows** action, this `WHERE` condition will return all rows that have the value 'USD' in the `currency` column. Just remember to wrap datapills with single quotes in your inputs.

![Using datapills in WHERE condition](~@img/oracle/use_datapill_in_where.png)
<center><i>Using datapills in `WHERE` condition</i></center>

Column names that do not conform to standard rules (includes spaces, lower-case letters or special characters) must be enclosed in double quotes (`""`). For example, **PUBLISHER NAME** must be enclosed in backquotes to be used as a valid identifier.

```sql
"PUBLISHER NAME" = 'USD'
```

![WHERE condition with enclosed identifier](~@img/oracle/where_condition_with_enclosed_identifier.png)
<center><i>`WHERE` condition with enclosed identifier</i></center>

Click the tabs below for more details into the functionality you can explore with your `WHERE` conditions.
><details><summary>Using <code>AND</code> and <code>OR</code> in your <code>WHERE</code> conditions</summary>
><code>WHERE</code> conditions can also be used in conjunction with basic SQL logical operators like <code>AND</code> and <code>OR</code> to add more filters on the rows you return.
>
><pre><code style="display: block; white-space: pre-wrap;">("currency code" = 'USD' AND totalAmt >1000) OR totalAmt>2000
></code></pre>
>
>When used together,  this <code>WHERE</code> condition will return all rows that either have the value 'USD' in the <code>currency code</code> column <code>AND</code> more than 1000 in the <code>totalAmt</code> column <code>OR</code> more than 2000 in the <code>totalAmt</code> column
>
></details>

><details><summary>Using sub-queries in your <code>WHERE</code> conditions</summary>
>
>Your <code>WHERE</code> condition can also contain subqueries. The following query can be used on the <code>users</code> table.
>
><pre><code style="display: block; white-space: pre-wrap;">ID IN (SELECT "USER ID" FROM TICKETS WHERE PRIORITY >= 2)
></code></pre>
>
>When used in a <b>Delete rows</b> action, this will delete all rows in the <code>users</code> table where at least one associated row in the <code>tickets</code> table has a value of 2 in the <code>priority</code> column.
>
> <img src="~@img/oracle/use_datapill_in_where_complex.png" alt="Using datapills in WHERE condition with subquery">
><center><i>Using datapills in <code>WHERE</code> condition with subquery</i></center>
>
></details>

## Configuring triggers

Oracle connector has triggers for both new and updated rows. For the triggers to work, both **Unique keys** must be configured. **Sort columns** need to be configured for triggers that find recently updated rows.

A table must satisfy some constraints to be used in a trigger. The following sections contain more information about specific constraints. [Read our best practices to find out how you can prepare your table for use with Workato](connectors/oracle/best-practices.md#designing-tables-for-use-in-Workato)

### Unique keys
In all triggers and some actions, this is a required input. Values from this selected column are used to uniquely identify rows in the selected table. As such, the values in the selected column must be unique. Typically, this column is the **primary key** of the table (e.g. `ID`).

When used in a trigger, this column must be incremental. This constraint is required because the trigger uses values from this column to look for new rows. In each poll, the trigger queries for rows with a unique key value greater than the previous greatest value.

> <details><summary><b>Click here for a detailed example</b></summary>
> Let's use a simple example to illustrate this behavior. We have a <b>New row trigger</b> that processed rows from a table. The <b>unique key</b> configured for this trigger is <code>ID</code>. The last row processed has <code>100</code> as it's <code>ID</code> value. In the next poll, the trigger will use <code>>= 101</code> as the condition to look for new rows.
> Performance of a trigger can be improved if the column selected to be used as the <b>unique key</b> is indexed.
> </details>

### Sort column
This is required for **New/updated row triggers**. Values in this selected column are used to identify updated rows.

When a row is updated, the **Unique key** value remains the same. However, it should have it's **Sort column** updated to reflect the last updated time. Following this logic, Workato keeps track of values in this column together with values in the selected **Unique key** column. When a change in the **Sort column** value is observed, an updated row event will be recorded and processed by the trigger.

For Oracle database, only **date**, **timestamp**, **timestamp with time zone** and **timestamp with local time zone** column types can be used.

> <details><summary><b>Click here for a detailed example</b></summary>
> Let's use a simple example to illustrate this behavior. We have a <b>new/updated row trigger</b> that processed rows from a table. The <b>Unique key</b> and <b>Sort column</b> configured for this trigger is <code>ID</code> and <code>UPDATED_AT</code> respectively. The last row processed by the trigger has <code>ID</code> value of <code>100</code> and <code>UPDATED_AT</code> value of <code>2018-05-09 16:00:00.000000</code>. In the next poll, the trigger will query for new rows that satisfy either of the 2 conditions: <br>
> 1. <code>UPDATED_AT'2018-05-09 16:00:00.000000'</code> <br>
> 2. <code>ID</code> > 100 AND <code>UPDATED_AT = '2018-05-09 16:00:00.000000'</code>
> </details>

## Using single row actions/triggers vs using batch of rows actions/triggers
Oracle connector can read or write to your database either as a single row or in batches. When using batch triggers/actions, you have to provide a batch size you wish to work with. The batch size can be any number between 1 and 100, with 100 being the maximum size limit. Batch triggers and actions are great for jobs when you expect to read, create or update a large number of rows. Choosing to batch your job runs rather than having them split into separate jobs runs not only saves operations but [reduces recipe runtimes and decreases load on your servers](/features/batch-processing.md).


![Batch trigger inputs](~@img/oracle/batch_trigger_input.png)
<center><i>Batch trigger inputs</i></center>

Besides the difference in input fields, there is also a difference between the outputs of these 2 types of operations. A trigger that processes rows one at a time will have an output datatree that allows you to map data from that single row.

![Single row output](~@img/oracle/single_row_trigger_output.png)
<center><i>Single row output</i></center>

However, a trigger that processes rows in batches will output them as an array of rows. The <kbd>Rows</kbd> datapill indicates that the output is a list containing data for each row in that batch.

![Batch trigger output](~@img/oracle/batch_trigger_output.png)
<center><i>Batch trigger output</i></center>

As a result, the output of batch triggers/actions needs to be handled differently. This [recipe](https://www.workato.com/recipes/666497) uses a batch trigger for new rows in the `users` table. The output of the trigger is used in a Salesforce bulk upsert action that requires mapping the <kbd>Rows</kbd> datapill into the source list.

![Using batch trigger output](~@img/oracle/using_batch_output.png)
<center><i>Using batch trigger output</i></center>

Outputs from batch triggers/actions can also be used outside of actions that work specifically with lists. By using Workato's repeat step, you'll be able to control batch outputs and [use them with any action built for single rows.](/features/list-management.md#using-datapills-in-an-action-with-a-repeat-step-action-does-not-handle-list-processing-list-processing-needs-to-be-done-explicitly-at-the-recipe-logic-level).

> Unsure when to use batch actions and single row actions? [Check out our best practices section for recipe design tips!](/connectors/oracle/best-practices.md#when-to-use-batch-of-rows-triggersactions-vs-single-row-triggersactions)

### Smart boolean conversion

Oracle does not have a built-in boolean column type. A popular workaround is to use a `NUMBER(1,0)` column with a `CHECK (COLUMN_NAME IN(1,0))` constraint. Because of this, standard values from other applications will not map well to this column and may cause unexpected values or errors.

This checkbox allows you to enable automatic smart conversion. If this is set to **Yes**, the conversion will be applied to all columns with `NUMBER` type and precision of `1`. This reduces the amount of configuration needed to transform datapills in a recipe. The following table describes the logic for the boolean conversion.

|Input value|Converted value|
|-|-|
|`true`|`1`|
|`false`|`0`|
|`"true"`|`1`|
|`"false"`|`0`|

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
  * [Execute stored procedure](/connectors/oracle/stored-procedure.md)

  Or get busy building your recipes now! Check out our
  * [Best practices](/connectors/oracle/best-practices.md)
  * [Use cases](/connectors/database-common-use-cases.md)
