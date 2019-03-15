---
title: Workato connectors - Common use cases
date: 2019-03-15 12:37:00 Z
---

# SQL Server - Common use cases

## Contents
Here are some common use cases for SQL server on Workato. We go through the scenarios step by step and also provide links to the recipe. Free free to copy them and repurpose them for your own use!
* New leads in create a new/update a row in SQL server
* New orders in Salesforce create a new/updated row in SQL server (Using `Select rows using custom SQL` action)

> <details><summary><b>New cases in Salesforce create a new/updated row in SQL server</b></summary>
> Company ABC uses Salesforce as their CRM tool. They also have a SQL server which stores records of company account.
> To ensure that their records of customers are up to date in their SQL servers, a recipe is needed to insert or update Salesforce account details into their <code>Accounts</code> table in SQL server
> There cannot be no duplicate records in their `Accounts` table in SQL server so checks must be done to either update an existing account or create a new one.
>
> SQL Server Actions used
> * `Select rows`
> * `Insert rows`
> * `Update rows`
>
> 1. A Salesforce trigger is used that triggers everytime a `New Account` is made in Salesforce. This information is passed into a select query that checks if the account already exists in your SQL based on the `accountID` and `accountType`.
> 
> ![select-action-search-2-columns](/assets/images/mssql/select-action-search-2-columns.png) 
> 
> 2. Using this action, we can check if there are duplicate entries in our SQL server before choosing to
> </details>

> <details><summary><b>New order change event in Salesforce creates a new/updated row in SQL server</b></summary>
> Company ABC uses Salesforce as their CRM tool. They also have a SQL server which stores records of customer_orders in their `SHIPPER_ORDERS` table.
> To ensure that their records of customer_orders are up to date in their SQL servers, a recipe is needed to insert or update Salesforce account details into their <code>Accounts</code> table in SQL server
> There cannot be no duplicate records in their `SHIPPER_ORDERS` table in SQL server so checks must be done to either update an existing order or create a new one.
>
> SQL Server Actions used
> * `Select rows`
> * `Upsert row`
>
> 1. A Salesforce trigger is used that triggers everytime a `Order change event` is made in Salesforce. This information is passed into a select query that checks if the account already exists in the `SHIPPER_ORDERS` table based on the `accountID` and that the last updated time was earlier than the time the order was changed.
> 
> ![select-action-search-2-columns](/assets/images/mssql/select-action-search-2-columns.png) 
> 
> 2. Using this action, we can search for that specific Order as well as check that we are updating it with the latest information possible
> 3. If no record is found, we know that the Order change event that we just received contains the most up-to-date details. 
> 
> ![conditional-steps-upsert](/assets/images/mssql/use-case-select-upsert.png)
>
> 4. Retrieve contact details using Workato's Salesforce connector. We need all details to make a new Order if one has to be made
> 5. Use an upsert action to insert this records in the `SHIPPER_ORDERS` table.
> </details>

