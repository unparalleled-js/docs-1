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

## Data Warehousing/ Data lakes
  With many 3rd party applications handling different aspects of their business, Centralising HR data into a cenral data warehouse can make reporting easier and support decision makers. Workato can be used to automate the process of sending data over to a central SQL server from multiple sources each day as well as executing stored procedures that help maintain your data warehouse such as purging old data, rebuilding indexes, reviewing database size and statistics to send to database management stakeholders. 
  
 <details><summary><b>Data Warehouse example (Multiple sources to SQL server)</b></summary>
  Company ABC has offices all over the world and thousands of employees. Offices across countries use different HR tools as well as different numbers of tools to keep track of staff performance. Upper management has decided to create a central HR data warehouse where data from each office can flow into. This would set the foundation for analysis of staff performance given policy changes and improvements put into effect. Company ABC can set up a recipes on Workato that can automate this process and have chosen to centralise their data from Workday, Wrike and Salesforce for this exercise.
  
  ![Data-warehouse-trigger-workday](/assets/images/mssql/Data-warehouse-trigger-workday.png)
  *Triggered daily, this recipe begins by first generating a report on Workday to load into the database
  
  Upon triggering, this recipe gets Workday to generate a report of Workers in the company and batches these employees before upserting them in the SQL server database. Batching was done primarily due to the batch size limit of the upsert batch present in SQL server of 400. 

 ![Get-data-from-SFDC-Wrike-Email](/assets/images/mssql/Get-data-from-SFDC-Wrike-Email.png)
 *Upserts data from Wrike and Salesforce before executing Stored procedure for maintenance and sending out emails*
 
  Next up, data is transfered in a simpler way for SFDC and Wrike due to the low amount of records for either. The batching method used for Workday can be implemented easily for SFDC and Wrike if needed. Another good practice would be to separate this recipe for readability and maintainability. 
  
  The last step is to execute a Stored procedure on SQL server that does basic data maintenance such as data purging, rebuilding of indexes amongst others. This makes sure your data base is ready for end users. Emails to report job errors as well as success should be put in place to ensure nothing is amiss. These recipes can also be shared with stakeholders in each of Company ABC's office to maintain their own data pipelines into the the central HR database. Check out our [recipe development lifecycle documents](/recipe-development-lifecycle.md) to find out more!
  
</details>
  
 
  
  
  
  
