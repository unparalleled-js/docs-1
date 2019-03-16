---
title: Workato connectors - Common use cases
date: 2019-03-15 12:37:00 Z
---

# SQL Server - Common use cases

## Contents
Here are some common use cases for SQL server on Workato. We go through the scenarios step by step and also provide links to the recipe. Free free to copy them and repurpose them for your own use!
* New order change event in Salesforce creates a new/updated row in SQL server
* New Workbot command on Slack creates a new record in SQL server and


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
> *Searching for order record that matches the Order ID and was last updated earlier than the recent order change event*
> 
> 2. Using this action, we can search for that specific Order as well as check that we are updating it with the latest information possible
> 3. If no record is found, we know that the Order change event that we just received contains the most up-to-date details. 
> 
> ![conditional-steps-upsert](/assets/images/mssql/use-case-select-upsert.png)
> *Recipe overview - Search for table to see if record needs to be updated. If yes, then upsert record*
>
> 4. Retrieve contact details using Workato's Salesforce connector. We need all order details just in case a new order has to be made
> 5. Use an upsert action to insert this records in the `SHIPPER_ORDERS` table.
>  
>  [Recipe link](https://www.workato.com/recipes/912228-sql-server-new-case-in-salesforce-triggers-a-new-row-in-sql-server#recipe)
> </details>

> <details><summary><b>New Workbot command on Slack creates a new record in SQL server</b></summary>
> Company Foo uses their SQL server database to keep track of bug tickets found in their company website. Their team uses slack to communicate and leverages on Workato's bot - Workbot - to make inserting tickets into their database easier. At its most basic, each ticket is required to have ticket names and descriptions.
>
> SQL Server Actions used
> * `Insert rows`
>
> 1. A [Workbot trigger](/workbot/workbot.md) is used that triggers everytime the `/createTicket` command is sent in slack to Workbot. The user also provides input such as the ticket name and ticket description. 
> 
> ![use-case-workbot-cmd](/assets/images/mssql/use-case-workbot-cmd.png)   
> *Command in slack using workbot*
> 
> 
> 2. The following insert row action in Workato inserts the ticket name and description into SQL server.
> 
> ![use-case-workbot-insert-row](/assets/images/mssql/use-case-workbot-insert-row.png) 
> *Inserting row in tickets table in SQL server*
> 
> 3. A command is returned to confirm that ticket has been added
>
> [Recipe link](https://www.workato.com/recipes/912741-new-command-to-slack-workbot-will-insert-row-in-a-table-in-sql-server?st=5ab789#recipe)
>
> </details>
