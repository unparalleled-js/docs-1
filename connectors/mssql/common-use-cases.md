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
  Company ABC has offices all over the world and seeks replicate its databases centralised in its US office with servers in South East Asia. This reduces strain on the company's central database system as ad hoc query reports and data analysis from teams around the world can be split amongst these two databases. Workato can be used to replicate large datasets over different database servers and types, performing transformations along the way. Company ABC can set up a recipe on Workato that is able to transfer a large table in its Oracle database to its SQL server database in batches at certain intervals a day. In this case, it has been set to once a day at a timing where network traffic is lowest.
  
  ![Parent Recipe view](/assets/images/mssql/Parent-recipe-data-replicatin.png)
  *Parent recipe that helps control the dispatching of batches for transfer*
  
  To begin, a parent recipe is set up that controls the controlling of batches being upserted into the SQL server database. After finding out how many batchs there should be, the recipe proceeds to call another recipe that is in charge of the retreival of a particular batch and its upserting into the SQL server. Indexing your SQL server's unique key would greatly reduce the time taken for these actions to complete and might be essential to prevent the job from timing out. Input parameters `Limit`, `Offset` and `Orderby` are passed into this called recipe to help specify the batch. 

 ![Recipe to handle retrieval and upserting of rows](/assets/images/mssql/Recipe-to-handle-retrieval-and-upserting-of-rows.png)
 *Called recipe that handles retrieval and upserting of rows in SQL server*
 
  To increase throughput, the called recipe can be toggled to increase the number of concurrent jobs that can be run. This can be done in the settings tabs of the recipe

  ![Setting concurrency number](/assets/images/mssql/replication-use-case-concurrent-setting.png)
  *Increase job concurrency to increase throughput*

  By sending over the records in batches and using concurrent job runs, Workato is able to replicate large databases through systematic batch processing. Consider extending these recipes if you need to replicate multiple tables in a database for your business requirements.
 
</details>

