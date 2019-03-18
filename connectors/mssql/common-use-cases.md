---
title: Workato connectors - Common use cases
date: 2019-03-15 12:37:00 Z
---

# SQL Server - Common use cases

## Contents
Workato works with SQL server databases to offer workflow automations that allow you to accomplish:
* Data migraton
* Data replicaton
* Data pipelines to data lakes and data warehouses
* Data exporting for use in daily operations

## Data migration
Workato allows you to perform data migrations of any scale using recipes that are easy to design, test and push into production. Data migrations are an essential consideration from your company is transitioning from one database provider to another or when upgrading the applications your teams are using. 

<details><summary><b>Data migration example (Salesforce to inhouse CRM software)</b></summary>
  Company ABC is medium sized company that sells commercial insurance. Their sales team uses Salesforce as their CRM tool but their engineering team has built an inhouse CRM software that can better suits the workflow of selling insurance. To accomplish the migration, Workato can be used to pull account information from Salesforce and migrate the data over to ABC's SQL server databases which the new CRM software will pull data from. 
  
  ![Pulling-Salesforce-Records](/assets/images/mssql/Pulling-Salesforce-Records.png)
  *Pulling accounts in batches to increase recipe efficency*
  
We begin by first pulling Saleforce accounts in batches. Leaving the `When first started, this recipe should pick up events from` input field blank allows us to retrieve all records. 

  ![Data-migration-Recipe-Flow](/assets/images/mssql/Data-migration-Recipe-Flow.png)
  *Recipe flow when migrating data with error handling and monitoring*

After configuring the trigger, we begin by first setting up an error monitoring step to allow us to handle any potential errors that come up during the migration. After that, it is always helpful to research for account records at recipe run-time to reduce the chances of migrating over data that is not up to date. We use the repeat action on Workato to cycle through each retrieved account, pull this information again from Salesforce right before storing all this information in a list.

After cycling through all accounts in this batch, upsert this batch of account records into the designated SQL server. Upsert is used instead of insert to guard against making duplicate accounts that might occur. And just like that your data migration of accounts from Salesforce to SQL server is done! Dont forget to test this recipe and you may want to consider building this into a larger workflow that involves the migration of contact information and other crucial information stored in Salesforce.

### [Recipe link](https://www.workato.com/recipes/912863#recipe)

</details>

## Data Replication
Data replication and the backing up of data into separate databases provides companies with a way to plan for disaster recovery, accomodate different geographical regions as well as increase the availability of data to stakeholders without placing all stress on a single server. Workato allows you to create recipes that can migrate large amounts of from one database to another.

<details><summary><b>Data replication example (Oracle to SQL)</b></summary>
  
</details>

