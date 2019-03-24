---
title: Workato connectors - Common use cases
date: 2019-03-15 12:37:00 Z
---

# Database - Common use cases
Here are some common use cases of how Workato can connect and integrate with your databases to automate workflows. Most of these use-cases are built with SQL server but they can be easily extended to all databases supported by Workato.

## Contents
Workato works with databases to offer workflow automations that allow you to accomplish:
* Data exporting for use in daily operations
* Data migration
* Data replication
* Data pipelines to data lakes and data warehouses

## Data exporting
Data coming into your database can be used in various ways. Often we need this data coming into our servers from our websites to be available as soon as possible in a variety of applications. Workato makes setting up these workflows simple, maintainable and extensible through our ability to modularly build workflows. Check out the example below to see how we used callable recipes to simplify the process of sending new/updated contact data from database to Salesforce, Mailchimp and Redshift.

<details><summary><b>Data export example </b></summary>
  <br>
  Company ABC is a industry leader in the beverage business. They manufacture and sell drinks to large retailers and events all over the world. They also have a website that takes down contact information of buyers from companies when they fill up a form and place it into their SQL server databases. Company ABC wants to set up a recipe that can automate the process of moving this contact data over to Salesforce for its sales team to work on their leads, adding these contacts to an email campaign as well as backing these contacts up in their secondary redshift database. Workato can accomplish this by splitting up the workflow into 4 recipes, where each recipe's function is well defined
  <br>
    ![Callable-recipe-Salesforce](/assets/images/mssql/use-case-data-export-2.png)
    <center><i>Recipe that handles taking contact data and upserting it into Salesforce</i></center>
    <br>
    We start by first creating 3 recipes such as the one above. These recipes are callable recipes where they are triggered by other recipes. They can also receive inputs which we have set in this case to be arrays of contact objects with various properties. Click on the recipe link below to find out more details. Callable recipes act like functions which require certain inputs and can be used to accomplish things such as data transformations as well as transactions to other apps. This reduces redundancy in recipes as any other recipe can call this same recipe to create a new contact in Salesforce by giving the proper inputs
<br>
    Callable recipes are also great for eliminating the need to constantly use the same steps to transform your data. For example, Company ABC's callable recipe to back data up to Redshift could include actions to transform and aggregate data and be used to send both raw contact data into one table and aggregated data into another for data analysis.
  <br>
    ![parent-recipe](/assets/images/mssql/use-case-data-export-1.png)
    <center><i>Parent recipe that controls the workflow and calls the other recipes</i></center>
    <br>
    After setting up these recipes, we can now build the parent recipe that calls each callable recipe we have set up. Callable recipes can be called synchronously or asynchronously (either waiting for the called recipe to finish running or go on without waiting for that recipe to run). Take note that dependencies further down that require the outputs from recipes should be call synchronously.

  <br><br>

  ![Data-migration-Recipe-Flow](/assets/images/mssql/Data-migration-Recipe-Flow.png)
  <center><i>Recipe flow when migrating data with error handling and monitoring</i></center>

  <br><br>

  After configuring the trigger, we begin by first setting up an error monitoring step to allow us to handle any potential errors that come up during the migration. After that, it is always helpful to research for account records at recipe run-time to reduce the chances of migrating over data that is not up to date. We use the repeat action on Workato to cycle through each retrieved account, pull this information again from Salesforce right before storing all this information in a list. <br>

  After cycling through all accounts in this batch, upsert this batch of account records into the designated SQL server. Upsert is used instead of insert to guard against making duplicate accounts that might occur. And just like that your data migration of accounts from Salesforce to SQL server is done! Dont forget to test this recipe and you may want to consider building this into a larger workflow that involves the migration of contact information and other crucial information stored in Salesforce. <br>
  <h3> <a href="https://www.workato.com/recipes/915591#settings">Recipe link</a> </h3>

</details>

## Data migration
Workato allows you to perform data migrations of any scale using recipes that are easy to design, test and push into production. Data migrations are an essential consideration from your company is transitioning from one database provider to another or when upgrading the applications your teams are using.

<details><summary><b>Data migration example (Salesforce to in-house CRM software)</b></summary>
  <br>
  Company ABC is medium sized company that sells commercial insurance. Their sales team uses Salesforce as their CRM tool but their engineering team has built an inhouse CRM software that can better suits the workflow of selling insurance. To accomplish the migration, Workato can be used to pull account information from Salesforce and migrate the data over to ABC's SQL server databases which the new CRM software will pull data from.
  <br><br>

  ![Pulling-Salesforce-Records](/assets/images/mssql/Pulling-Salesforce-Records.png)
  <center><i>Pulling accounts in batches to increase recipe efficency</i></center>

  <br><br>

  We begin by first pulling Saleforce accounts in batches. Leaving the `When first started, this recipe should pick up events from` input field blank allows us to retrieve all records.

  <br><br>

  ![Data-migration-Recipe-Flow](/assets/images/mssql/Data-migration-Recipe-Flow.png)
  <center><i>Recipe flow when migrating data with error handling and monitoring</i></center>

  <br><br>

  After configuring the trigger, we begin by first setting up an error monitoring step to allow us to handle any potential errors that come up during the migration. After that, it is always helpful to research for account records at recipe run-time to reduce the chances of migrating over data that is not up to date. We use the repeat action on Workato to cycle through each retrieved account, pull this information again from Salesforce right before storing all this information in a list. <br>

  After cycling through all accounts in this batch, upsert this batch of account records into the designated SQL server. Upsert is used instead of insert to guard against making duplicate accounts that might occur. And just like that your data migration of accounts from Salesforce to SQL server is done! Dont forget to test this recipe and you may want to consider building this into a larger workflow that involves the migration of contact information and other crucial information stored in Salesforce. <br>
  <h3> <a href="https://www.workato.com/recipes/912863#recipe">Recipe link</a> </h3>

</details>

## Data Replication
  Data replication and the backing up of data into separate databases provides companies with a way to plan for disaster recovery, accomodate different geographical regions as well as increase the availability of data to stakeholders without placing all stress on a single server. Workato allows you to create recipes that can migrate large amounts of from one database to another.

<details><summary><b>Streaming data replication example (Oracle to SQL)</b></summary>
  Company ABC has offices all over the world and seeks replicate its databases centralised in its US office with servers in South East Asia. This reduces strain on the company's central database system as ad hoc query reports and data analysis from teams around the world can be split amongst these two databases. Workato can be used to replicate large datasets over different database servers and types, performing transformations along the way. Company ABC can set up a recipe on Workato that is able to transfer a large table in its Oracle database to its SQL server database in batches at certain intervals a day. In Workato, this can be done pretty easily in a two step recipe.
<br>
  ![Oracle polling trigger to SQL server](/assets/images/mssql/use-case-data-migration-1.png)
  <center><i>Recipe checks Oracle database for new/updated triggers and sends it over to SQL server</i></center>
  <br>
  In this recipe, Workato checks your Oracle database every few minutes and retrieves any new/updated rows. Batching is done automatically for you through our batch triggers and we can use batch actions in SQL server to send the data over quickly.
  <br>
  ![Error-handling](/assets/images/mssql/use-case-data-migration-2.png)
  <center><i>Error handling is a great way to verify that all batches have gone through. Emails sent for success and errors can help with intervention monitoring as well</i></center>  
  It is always a good practice to set up error handling in your recipes. In production, you would want to notify and send emails to relevant stakeholders to let them know that something has gone wrong so they can work on rectifying it immediately. Over here, we set up error handling through emails sent that provide feedback on whether the job succeeded or failed.
  <br>
  <h3> <a href="https://www.workato.com/recipes/915576l#recipe">Recipe link</a> </h3>
</details>
<br>
<details><summary><b>Daily database replication example (Oracle to SQL)</b></summary>
  In another case, Company ABC wants to limit its database replication efforts to a daily scheduled sync of data between its Oracle and SQL server databases. This is often done as scheduled syncs can be done at times where database traffic is lowest and reduces strain on the server as compared to our continuous replication example previously. Workato allows for this as well through manual batching.

  ![Parent Recipe view](/assets/images/mssql/Parent-recipe-data-replicatin.png)
  <center><i>Parent recipe that helps control the dispatching of batches for transfer</i></center>
  <br>
  To begin, a parent recipe is set up that controls the controlling of batches being upserted into the SQL server database. After finding out how many batchs there should be, the recipe proceeds to call another recipe that is in charge of the retreival of a particular batch and its upserting into the SQL server. Indexing your SQL server's unique key would greatly reduce the time taken for these actions to complete and might be essential to prevent the job from timing out. Input parameters `Limit`, `Offset` and `Orderby` are passed into this called recipe to help specify the batch.
  <br>
 ![Recipe to handle retrieval and upserting of rows](/assets/images/mssql/Recipe-to-handle-retrieval-and-upserting-of-rows.png)
 <center><i>Called recipe that handles retrieval and upserting of rows in SQL server</i></center>
 <br>
  To increase throughput, the called recipe can be toggled to increase the number of concurrent jobs that can be run. This can be done in the settings tabs of the recipe
<br>
  ![Setting concurrency number](/assets/images/mssql/replication-use-case-concurrent-setting.png)
  <center><i>Increase job concurrency to increase throughput</i></center>

  By sending over the records in batches and using concurrent job runs, Workato is able to replicate large databases through systematic batch processing.
  <h3> <a href="https://www.workato.com/recipes/913037">Recipe link</a> </h3>
</details>

## Data Warehousing/ Data lakes
  With many 3rd party applications handling different aspects of their business, Centralising HR data into a cenral data warehouse can make reporting easier and support decision makers. Workato can be used to automate the process of sending data over to a central SQL server from multiple sources each day as well as executing stored procedures that help maintain your data warehouse such as purging old data, rebuilding indexes, reviewing database size and statistics to send to database management stakeholders.

 <details><summary><b>Data Warehouse example (Multiple sources to SQL server)</b></summary>
  Company ABC has offices all over the world and thousands of employees. Offices across countries use different HR tools as well as different numbers of tools to keep track of staff performance. Upper management has decided to create a central HR data warehouse where data from each office can flow into. This would set the foundation for analysis of staff performance given policy changes and improvements put into effect. Company ABC can set up a recipes on Workato that can automate this process and have chosen to centralise their data from Workday, Wrike and Salesforce for this exercise.
<br>
  ![Data-warehouse-trigger-workday](/assets/images/mssql/Data-warehouse-trigger-workday.png)
  <center><i>Triggered daily, this recipe begins by first generating a report on Workday to load into the database</i></center>
<br>
  Upon triggering, this recipe gets Workday to generate a report of Workers in the company and batches these employees before upserting them in the SQL server database. Batching was done as the batch size limit of the upsert action present in SQL server is 400.
<br>
 ![Get-data-from-SFDC-Wrike-Email](/assets/images/mssql/Get-data-from-SFDC-Wrike-Email.png)
 <center><i>Upserts data from Wrike and Salesforce before executing Stored procedure for maintenance and sending out emails</i></center>
<br>
  Next up, data is transfered in a simpler way for SFDC and Wrike due to the low amount of records for either. The batching method used for Workday can be implemented easily for SFDC and Wrike if needed. Another good practice would be to separate this recipe for readability and maintainability.

  The last step is to execute a Stored procedure on SQL server that does basic data maintenance such as data purging, rebuilding of indexes amongst others. This makes sure your data base is ready for end users. Emails to report job errors as well as success should be put in place to ensure nothing is amiss. These recipes can also be shared with stakeholders in each of Company ABC's office to maintain their own data pipelines into the the central HR database. Check out our [recipe development lifecycle documents](/recipe-development-lifecycle.md) to find out more!

</details>
