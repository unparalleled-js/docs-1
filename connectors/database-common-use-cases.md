---
title: Workato connectors - Common use cases
date: 2019-03-15 12:37:00 Z
---

# Database - Common use cases
Here are some common use cases of how Workato can connect and integrate with your databases to automate workflows. Most of these use-cases are built with SQL server but they can be easily extended to all databases supported by Workato.

## Contents
Workato works with databases to offer workflow automations that allow you to accomplish:
* Data exporting for use in daily operations
* Data replication from cloud based applications
* Database access as an API end point
* Data pipelines to data lakes and data warehouses

## Data exporting
Data coming into your database can be used in various ways. Often we need this data coming into our servers from our websites to be available as soon as possible in a variety of applications. Workato makes setting up these workflows simple by automating these dataflows. Check out the example below to see leads that come in through your database from your website can be quickly integrated with Salesforce and Mailchimp for greater selling efficiency.

<details><summary><b>SQL server to Salesforce and Mailchimp </b></summary>
  <br>
    Company ABC is fast growing software company that sells scheduling software for restaurants and other labour intensive companies. They have a website that attracts business owners and managers which fill in their particulars when they sign up for a trial. Company ABC has recently started using Salesforce to improve the capabilities of it's sales team as well as mailchimp to increase the number of customer touchpoints. Lead data comes in from their website into their SQL server database and they hope to automate the process of transferring this data from SQL server to Salesforce as well as adding them as subscribers to their mailchimp campaigns. Workato provides them with an easy to use and scalable way to build workflows that help export data from SQL server to Salesforce and mailchimp.
  <br>
  ![Recipe workflow](assets/images/mssql/use-case-data-export-1.png)
  <center><i>Recipe overall workflow</i></center>
  <br>
    We start by first creating a trigger based on the table in their SQL server database where new contact records are inserted when a user fills up their form on their website. After configuring the trigger, we add error handling through steps 1 and 4 which watch for errors and send an email if any error is raised. Steps 2 and 3 come next where we can create contacts Salesforce based on return data from the records received in our trigger.
  <br>
  ![Configuring contacts in Salesforce connector](/assets/images/mssql/use-case-data-export-2.png)
  <center><i>Saleforce configuration and using datapills from trigger output</i></center>
  <br>
    By clicking on the Saleforce step and selecting create new
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
  Data replication and the backing up of data into separate databases provides companies with a way to plan for disaster recovery, increasing availability of data for analytics and reducing strain on a single server. Workato allows you to create recipes that can migrate large amounts of from one database to another at regular intervals. Because of the simple interface, Workato also makes it easy for troubleshooting and reproducing these replication processes if you happen to change your database provider as you simply need to change your connection on the recipe - no coding required! For examples on how you can do a daily database replication instead, check out our example on Data Warehousing below which can be used.

<details><summary><b>Streaming data replication example (Oracle to SQL)</b></summary>
  Company ABC has been experiencing significant growth and its databases are struggling to keep up with the read heavy queries that its analytics department uses. In order to be able to scale sustainably, Company ABC hopes to automate the task of replicating its database periodically to a secondary server that can help balance the load. Workato can be used to replicate large datasets over different database servers and types, performing transformations along the way. Company ABC can set up an easy 2 step recipe on Workato that is able to transfer a large table in its Oracle database to its SQL server database in batches at certain intervals a day.

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

  > This process is quite advanced and not recommended for
  >

  <h3> <a href="https://www.workato.com/recipes/913037">Recipe link</a> </h3>
</details>

## Data Warehousing/ Data lakes
  Data warehouses and data lakes are useful tools to empower analytics and business intelligence in business. They are be used in various different capacities such as department specific warehouses for operations centric or HR centric data. Workato can be used to automate the process of sending data over to a data warehouse from multiple sources each day. This makes maintaining your data pipelines much easier by automating the process and minimising the troubleshooting involved when changes such as table schemas are made.

 <details><summary><b>SQL server Daily sync to Snowflake warehouse via Amazon S3</b></summary>
  Company ABC wants to sync contact information of all its customers into Snowflake to allow for better real time reporting. Due to the large volume of contact information received each day, Company ABC needs a fast and efficient way of transferring data from SQL server to Snowflake. A recipe on Workato can be made that leverages on the use of stored procedures, on-prem files and Amazon s3 to transfer large amounts of data quickly.
<br>
  ![Data-warehouse-recipe](/assets/images/mssql/Data-warehouse-recipe.png)
  <center><i>Triggered daily, this recipe moves large amounts of data from SQL server to Snowflake</i></center>
<br>
  Upon triggering, this recipe executes a stored procedure on SQL server that transforms data exports it into a specified folder as a CSV. This folder is configured such that Workato's on-prem agent is connected to it. Using Workato's on-prem file connector, new folders like this can be downloaded and quickly uploaded to Amazon S3. Lastly, Workato's native Snowflake to S3 bucket integration can be used quickly load all this data in.
<br> <br>
  This recipe not only automates the process of transferring data but allows for the easy maintenance of such pipelines. Workato's easy to use interface means that schema changes or changes to which data warehouse you are using can be easily switch out. Authentication would also be done via our platform so you needn't have to deal with that complexity.

  <h3> <a href="https://www.workato.com/recipes/917080#recipe">Recipe link</a> </h3>
</details>
