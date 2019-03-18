---
title: Workato connectors - Troubleshooting help
date: 2019-03-17 23:00:00 Z
---

# Troubleshooting
During the design stage of recipes, errors are bound to happen. Here are some of the more common ones relating to databases that we've seen so we decided to compile them into a list! [Check out our troubleshooting section as well for more help.](/recipes/recipe-job-errors.md) If it still doesnt work or you cant find your particular error over here, contact our customer support and they would be more than happy to help!

## Recipe design-time errors

### Timeouts

Workao employs [timeouts on jobs and actions](/recipes/recipe-job-errors.md#timeouts) when they take too long to execute. When working with databases, this can be a common occurence when queries and stored procedures take too long to respond. When this happens, consider doing the following:

#### Action timeouts
* Limiting the number of rows returned further
* Introducing indexes in your database
* Optimising custom SQL queries (i.e. eliminating unnecessary joins)

#### Job timeouts
* Separating recipes and using callable recipes to join workflows up
* Use asynchronous calls when calling recipes
* Eliminating unnecessary actions

### Unable to connect to existing database
When your database connection returns an error when you try to connect, here are some possible reasons:

* On-premises agent is inactive (when using an on-premises agent) and needs to be [restarted](/on-prem/run.md)
* Credentials to your database have changed. Contact your database administrator for help

## Logic errors

### Infinite loops
Infinite loops can occur in Workato when actions inside a recipe trigger the recipe yet again. This is not exclusive to databases and [here are some ways you can detect and solve them](/recipes/infinite-loops.md). 
When building recipes that are triggered on new rows in a table as well as inserting recipes into that same table such as when you're using Workato to perform some data enrichment or data transformation, here are some ways to prevent infinite loops from occuring:

* Creating a column in your table that denotes whether that same column as been processed by Workato (detailed further in our general infinite loop documentation)
* Creating separate tables for raw unprocessed data and transformed data

### Multiple copies of the same record
When using insert actions, repeated job runs that complete the insert action result in multiple copies of the record being inserted. Consider using upsert actions that can first search for an existing record before updating one if found or inserting a new record. Find out different usecases and when to use either in our [best practices](/connectors/mssql/best-practices.md#when-to-use-update-insert-and-upsert-actions)

### Missing values
SQL server allows you to validate new data before inserting them into tables to ensure data integrity. During recipe design-time, input fields displayed as optional when working with SQL server actions might not throw errors but instead return errors during recipe run-time as fields in SQL server had `NOT NULL`, `UNIQUE` OR `PRIMARY KEY` constraints which were violated. The following screenshot shows a job error when no input is given for a field that has a `PRIMARY KEY` constraint:

![Common-error-missing-values](/assets/images/mssql/Common-error-missing-values.png)

Here are some possible reasons and fixes for missing values:
* Your primary key column is not auto-incrementing. Alter the column to be an identity column which auto-increments after every insert
* The column has an `unique` constraint and results duplicate values being rejected. Consider using the upsert action to update record instead of inserting a new one.
* The datapill entered during recipe run-time returned a `NULL` value. When this was inserted in a column with `NOT NULL` constraint, an error was thrown. [More info here.](/recipes/recipe-job-errors.md#missing-required-fields-at-run-time) Consider adding logical checks for `NULL` values and passing default values in when need. This can be accomplished with [Workato's formula mode.](/formulas/formula-mode.md)

## Integration errors











