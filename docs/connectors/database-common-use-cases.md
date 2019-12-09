---
title: Workato connectors - Common use cases
date: 2019-03-15 12:37:00 Z
---

# Database - Common use cases
Here are some common use cases of how Workato can connect and integrate with your databases to automate workflows. Most of these use-cases are built with SQL server but they can be easily extended to all databases supported by Workato.

## Contents
Workato works with databases to offer workflow automations that allow you to accomplish:
* Data exporting from databases for daily operations
* Data replication from cloud based applications
* Database reports/ information as an API end point
* Data pipelines to data lakes and data warehouses

## Data exporting from databases for daily operations
Data coming into your database can be used in various ways. Often we need this data coming into our servers from our websites to be available as soon as possible in a variety of applications. Workato makes setting up these workflows simple by automating them. Check out the example below to see how changes in user attribute that come in through your database from your website can be quickly integrated with Salesforce and Mailchimp for greater selling efficiency. This could happen when users on your app indicate their interest in purchasing an item or perform a certain action that you believe indicates an upsell opportunity.

This recipe can be extended to easily to include more actions if your workflows becomes more complex. Remember to keep in mind the use of batch actions whenever possible to reduce the number of tasks each recipes uses! Benefits of using Workato include the ability for these workflows to be changed so easily! Changes from one email campaign software such as Mailchimp to Sendgrid are easily handled with minimal coding.

<details><summary><b>SQL server to Salesforce and Mailchimp </b></summary>
    <a href="https://www.workato.com/recipes/917205-data-export-sql-server-to-salesforce-and-mailchimp#recipe">Recipe link</a>
  <br>
  <br>
    Company ABC is fast growing software company that sells scheduling software for restaurants and other labour intensive companies. They currently use a mobile application as well as browser application as a platform to allow their clients to do scheduling. As they push out a new system that handles leave tracking and payroll, they want to upsell these features to existing customers who currently have a certain number of employees as well as any customers that grow above this size.
  <br> <br>
    Workato provides them with an easy to use and scalable way to build workflows  that help export applicable customer data from SQL server where their data is stored to Salesforce and mailchimp.
  <br> <br>

  ![Recipe workflow](~@img/mssql/use-case-data-export-1.png)

  <center><i>Recipe overall workflow</i></center>
  <br>
    We start by first creating a trigger based on the table in their SQL server database where customer data is created or updated regularly based the application. After configuring the trigger, we add error handling through steps 1 and 5 which watch for errors and send an email if any error is raised. Steps 2, 3 and 4 come next where we can create contacts Salesforce based on return data from the records received in our trigger.
  <br>

  ![Configuring contacts in Salesforce connector](~@img/mssql/use-case-data-export-2.png)

  <center><i>Salesforce configuration and using datapills from trigger output</i></center>
  <br>
    By clicking on the Saleforce step and selecting create new records in batches, we not only speed up the time taken for the recipe to run by inserting new contacts into Salesforce by batch but we can also map the output from the SQL server trigger to contact information created in Salesforce. Above, you can see how we are mapping Account ID in Salesforce contacts to the Account_ID in our SQL server databases.
  <br>

  ![Configuring subscribers in Mailchimp connector](~@img/mssql/use-case-data-export-3.png)

  <center><i>Mailchimp configuration and using datapills from trigger output</i></center>
  <br>
    Since the Mailchimp connector does not have batch actions, this can be overcome through Workato's repeat action. Workato's repeat action allows us to cycle through the list of contacts from the SQL server trigger earlier. We then just need to add each contact in the list as a subscriber to a Mailchimp campaign.

</details>

## Data replication from cloud based applications
Workato allows you to perform data migrations of any scale using recipes that are easy to design, test and push into production. Data migrations are an essential considerations for a company that is transitioning from one application to another as well as an essential step when backing up your data onto your local database servers. For example, Workato can be used to automate the process of backing up your Salesforce data onto your SQL servers. Check out the example to find out how.

This recipe can be used to also perform transformations before storing the final values in SQL server and removes the need for any complex scripts to be run and maintained. Using Workato, any further changes can be handled without any code at all.

<details><summary><b>Salesforce to SQL server </b></summary>
<a href="https://www.workato.com/recipes/912863#recipe">Recipe link</a>
<br>
<br>
  Company ABC is a company that sells commercial insurance. Their sales team uses Salesforce as a CRM tool. Company ABC is beginning to practice the act backing up important their sales data stored in Salesforce in their own personal SQL servers as a way of disaster recovery plans. Workato can be used to automate this process and remove the need for any code to be written to set up this workflow.

  <br><br>

  ![Recipe Workflow](~@img/mssql/use-case-data-replication-1.png)
  <center><i>Pulling accounts in batches to increase recipe efficency</i></center>

  <br>

  We begin by first pulling Saleforce accounts in batches. Leaving the `When first started, this recipe should pick up events from` input field blank allows us to retrieve all records when the recipe is first run.

  <br><br>

  ![Salesforce to SQL server](~@img/mssql/use-case-data-replication-2.png)
  <center><i>Mapping Salesforce datapills to columns in SQL server</i></center>

  <br>

  Use the batch upsert action in SQL server to update existing Salesforce records that have been updated whilst creating any potentially new Salesforce contacts.

</details>

## Database reports/ information as an API end point
  Companies that want to grant access to internal teams or clients without exposing their database can do so in the form of an API managed directly through Workato. Workato allows you to [build APIs](/api-management.md) that can call recipes that trigger workflows involving your database such as returning how much inventory you have left of a certain product or the status of a delivery. Check out the recipe below on how to build a callable recipe in Workato that can be exposed securely via a REST API to your company's business partners.

  This recipe can also be extended to be done from an on-premises database, abstracting away the complexity of managing this connection. Any further changes to the business needs of your business or your partners can also be done directly on Workato with a basic understanding of SQL and no coding as well!

<details><summary><b>Callable recipe to return inventory status</b></summary>
 <a href="https://www.workato.com/recipes/917299#recipe">Recipe link</a>
 <br>
 <br>
  Company ABC is a growing toy company that retails through various online partners. Instead of having to always update each partner of its inventory status of each of it's toys, it can now give each partner access to its API which queries its Oracle database to find out the inventory status of each of its toys. This reduces workload on both ends and also allows for real time updates for it's business partners.

  <br><br>

  ![Recipe workflow](~@img/mssql/use-case-API-1.png)
  <center><i>Recipe is triggered whenever an authenticated user calls this end point</i></center>

  <br>

  This recipe can be triggered by other recipes in Workato as well as external sources that have a valid authentication key. Setting up an API on Workato can be found [here](/api-management.md)

  <br><br>

  ![Custom SQL query](~@img/mssql/use-case-API-2.png)
  <center><i>Custom SQL is used to access the `group by` functionality of SQL</i></center>  

  <br>

  The request body of the API call could contain information such as which toys that the partner wants to know inventory of. A SQL query is used to group and count the inventory of that specific toy in the database and the result is sent to the caller as a API response.

</details>

## Data Warehousing/ Database syncs
  Data warehouses and data lakes are useful tools to empower analytics and business intelligence in business. They are be used in various different capacities such as department specific warehouses for operations centric or HR centric data. Workato can be used to automate the process of sending data over to a data warehouse from multiple sources each day. This makes maintaining your data pipelines much easier by automating the process and minimising the troubleshooting involved when changes such as table schemas are made.

  This recipe not only automates the process of transferring data but allows for the easy maintenance of such pipelines. Workato's easy to use interface means that schema changes or changes to which data warehouse you are using can be easily switch out. Authentication would also be done via our platform so you needn't have to deal with that complexity.

 <details><summary><b>SQL server Daily sync to Snowflake warehouse via Amazon S3</b></summary>
 <a href="https://www.workato.com/recipes/917080#recipe">Recipe link</a>
 <br>
 <br>
  Company ABC wants to sync contact information of all its customers into Snowflake to allow for better real time reporting. Due to the large volume of contact information received each day, Company ABC needs a fast and efficient way of transferring data from SQL server to Snowflake. A recipe on Workato can be made that leverages on the use of stored procedures, on-prem files and Amazon s3 to transfer large amounts of data quickly.

  <br><br>

  ![Data-warehouse-recipe](~@img/mssql/Data-warehouse-recipe.png)
  <center><i>Triggered daily, this recipe moves large amounts of data from SQL server to Snowflake</i></center>

  <br>

  Upon triggering, this recipe executes a stored procedure on SQL server that transforms data exports it into a specified folder as a CSV. This folder is configured such that Workato's on-prem agent is connected to it. Using Workato's on-prem file connector, new folders like this can be downloaded and quickly uploaded to Amazon S3. Lastly, Workato's native Snowflake to S3 bucket integration can be used quickly load all this data in.

</details>
