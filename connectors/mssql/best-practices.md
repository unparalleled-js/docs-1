---
title: Workato connectors - Introduction
date: 2019-03-13 12:40:00 Z
---

# Best practices when using SQL server
We compiled a few of our best practices that make your life easier when developing workflows with Workato. Read more to learn some crucial tips that result in less bugs and time wasted. We've split up these into 2 overarching patterns:
* Recipe Design patterns
* Database Design patterns

## Recipe Design patterns
Workato contains numerous functionality that makes life easier for you when designing your recipes. Through the use of tools such as callable recipes as well as actions such as single row actions as well batch actions, you'll be able to break down  complex processes, create recipes that mimic your current dataflows without decreasing performance and troubleshoot them easily. While we do have [general recipe building best practices](/recipes/best-practices-building.md), read on more to find out some of the rules specific to databases that you should keep in mind when building recipes in Workato.

### Keep conscious and minimise database actions whenever possible
When designing your recipes, it helps to keep in mind that each database action induces additional load on your servers. To minimise strain on your databases, removing unnecessary steps and thoughtful use of batch actions mean your recipes are more sustainable and cost effective.  

### Handling errors
Error handling is an important part in the design process of a recipe. Here are some of the [best practices for error handling](/recipes/best-practices-error-handling.md) when designing recipes. 

### Splitting up and compartmentalizing recipes
Databases are often used for a wide range of tasks and it may be tempting to create huge recipes that accomplish all tasks that involve the use of this particular database, this also makes these recipes incredibly hard to maintain. Complex workflows should always be split up into separate recipes, seperating recipes and compartmentalising them based on their purpose. This makes recipe maintainence and troubleshooting easier and also reduces the number of redundant actions across recipes. To acheive this, Workato has [callable recipes](/features/callable-recipes.md), allowing recipes to trigger other recipes. Callable recipes can also be triggered by 3rd party applications through a REST API. 

For example, given that we hope to design a recipe that reads new contact information from a SQL server data base, performs basic transformations then creates new accounts in Salesforce, adds these contacts into a mailchimp campaign and backs this data up in an redshift database, one should consider splitting this workflow up into 3 separate recipes. This allows other recipes and 3rd party apps to call them, reducing the amount of redundant steps if, for example, another recipe needed to back data up in a redshift database. Changes to any step, such as a change in email provider from mailchimp to sendgrid would be handled much easier due to this design pattern.

### Deciding when to use batch of rows triggers/actions vs single row triggers/actions
While single row triggers/actions can almost always accomplish the same functionality as batch triggers/actions and vice versa, ultimately the decision to use one or the other becomes a matter of business requirements and design considerations. Batch triggers/actions reduce the load on your servers by batching up to a 100 records into a single call offering the ability to improve time efficiency of recipe, reduce the number of operations required per run and load on servers, there exists a trade-off between the flexibility since batch actions that do fail, fail on a batch level. Building upon the previous section, the choice to use batch rows and triggers should also be a consideration when compartmentalising your recipes.

When examined, most workflows with applicable batch triggers/actions can be accomplished in 3 ways:
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='30%'>Method</th>
        <th width='70%'>Benefits/Drawbacks</th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>The use of a batch trigger, followed by a batch action and using Workato's repeat step for any single row actions.</td>
      <td>Using this method is the most efficient across all metrics. Since Workato employs a step-by-step (synchronous) process within each job run so any error that causes the run to stop also prevents the following steps from being executed for the entire batch. In some cases, this could be useful behaviour where we would want to fix our recipe before letting it run on to further steps. To strike a balance between efficiency and stopping too many records from being process during a failed job run, toggle the batch size setting.
        <br>
        <details><summary><u>Business use case example</u></summary>
        If we were to pull batchs of new leads from a SQL server for batch inserts into Salesforce, we could follow this up with emails to individuals on the sales team with links to the leads newly created on Saleforce directly. In cases where our information flowing in raised an error during the batch insert action, no email would be sent out to our sales team with links that didnt work! We can now safely make adjustments to our recipe to accomodate this error before repeating the job.
        </details>
     </td>
    </tr>
       <td>The use of a single row trigger, followed by a single row actions</td>
      <td>Using this method is the least efficient across all metrics, especially for triggers/actions that work with large numbers of records. Workato employs a step-by-step (synchronous) process within each job run so any error that causes the run to stop also prevents the following steps from being executed. In some cases, this could be useful behaviour where we would want to fix our recipe before letting it run on to further steps and yet remains different from the batch trigger version as it only stops the job runs for those that raise errors. In time sensitive business use cases where all new rows should be processed as soon as possible, this might be the best design choice.
        <br>
        <details><summary><u>Business use case example</u></summary>
        For time sensitive job runs such as new rows in a SQL server table indicating new orders, the following actions may be crucial in ensuring the timely delivery of your product to your customer. Having entire batches of orders be stopped due to a single failed record may result in lost revenue for you. In this scenario, single row triggers/actions may be the best way to minimise disruptions to your company's operations.
        </details>
     </td>
    </tr>
    </tr>
       <td>The use of a batch trigger, followed by all required batch actions. A separate recipes can be used with a single row action and single row actions.</td>
      <td>Using this method is allows records to be processed concurrently. This allows errors to be contained at a recipe level and only affect the steps that follow after it. In cases where steps are independent of each other and one need not be completed before the other can begin, this might be the best solution. This fits in the best with more complex workflows where seperating recipes based on their data types and business needs makes recipes easier to maintain and efficient.
  <br>
        <details><summary><u>Business use case example</u></summary>
        New records in a table could signify new customer sign ups for a free trial for your product. You hope to add them in batches to a drip campaign as well as send their details individually over to your sales team for followups. Given both cases are not dependent on each other and both can be accomplished without diminishing the other's effectiveness, this workflow could and should be accomplished as separate recipes to minimise the impact if failed job runs on business.
        </details>
     </td>
    </tr>
  </tbody>
</table>

### When to use update, insert and upsert actions
Choosing between [update](/connectors/mssql/update.md), [insert](/connectors/mssql/insert.md) and [upsert](/connectors/mssql/upsert.md) actions can have numerous implications for your recipes and SQL server tables. While upserts can be used to accomplish most actions where update or insert are used, here are some of the key considerations to keep in mind when choosing one over the other.

**Key considerations**
1. Upsert performs better in certain cases where records should be unique based on a **single** column. This reduces the number of steps required in the recipe when a search would have had to been performed to decide whether to update a record or insert a new record.
2. Updates and inserts perform better when records should be unique based on multiple columns as upserts only takes one unique key into consideration. In cases such as these, a search would have to be performed first and update or insert actions performed based on the return of the search.
3. Upserts are useful in failed job runs where repeating a failed job where it previously inserted a row would not result in another row being created. Inserts would insert yet another row if the job were to be run again.
4. Upserts need to be documented properly to ensure maintainability. Since it becomes unclear without documentation whether steps that use upsert are always inserts or always updates, it becomes challenging for others in your organisation to maintain these recipes.
5. Updates allow you to update rows that might not all be identified using a unique key. Rows to update identified using a range of parameters, i.e. updating all records whose `Title` column = `consultant`
6. Upserts can end up being overly flexbile where inserting a new row when one cannot be found may not be the best behaviour. For example, a recipe triggering when an order is changed in Salesforce to update the record of the order in your database might not be suitable for the upsert action. Since a record of the order should have already been in the system, the lack of one to update should be noted and the job stopped with a report error instead.

### Using custom SQL and stored procedures in Workato
Workato allows you to write your own custom SQL queries in 2 ways:
1. [Using our `Select rows using custom SQL` action](/connectors/mssql/select.md#select-rows-using-custom-sql) (Recommended for **only** select queries)
2. [Using our `Run custom SQL` action](/connectors/mssql/run_sql.md)

With these custom SQL queries, you can do a wide range of create, read, update and delete actions on your SQL server. Since writing your own queries might get messy, remember manage your step output by giving your returned columns **meaningful aliases** and **only returning the columns that you need**. This makes maintaining your recipe easier and more readable for others as well.

Besides custom SQL, Workato also supports the execution of [stored procedures](/connectors/mssql/stored-procedure.md) that are defined in your database. When designing recipes that involve transferring large amounts of data between your database servers and Workato, balancing the workload between operations done on Workato's platform and your databases could mean much higher operational efficiency and scalability. Stored procedures and custom SQL are great ways for you to do some of the processing inside your databases before getting your recipe to retrieve the transformed data. 

### Using collections in Workato for basic data cleansing, enrichment and transformation
In cases where custom SQL and stored procedures might not be suitable such as the transformation and aggregating of data from different sources, Workato offers the use of collections for basic transformations. Collections can be used for data cleaning, data enrichment and aggregation through easy to use commands in SQL. Collections are versatile tools that can be used as last steps before placing data inside data warehouses, datalakes or exporting to other applications. 

## Database design patterns

### Designing tables for use in Workato
When looking to make triggers using our `New row` and `New/updated row` triggers, trigger configurations require either the use of a unique key or unique key and sorted column to enable Workato to ensure your trigger doesn't miss out on any records. Not all tables that you encounter may be ready to be used as a trigger so here are some best practices to prepare your table for use in Workato.

**Unique keys**
1. An auto incrementing unique integer key should be present in the table that can act as your unique key. In most cases where your table's `primary` key is set to be auto incrementing, this is usable. 
2. When this is not the case, one of two solutions can be implemented 
  * Finding a existing key that can act as a proxy which is an integer, unique and auto incrementing
  * Creating a new auto incrementing unique integer key

> <details><summary><b>How to create a new auto incrementing key</b></summary>
> 
> 1. Make sure no other column has been declared as an `IDENTITY` column in your table. (if this has been done so, you may use that directly as your unique interger key
> 2. Enter the following commands to create an new `IDENTITY` column
> ```sql
> ALTER TABLE yourTable
> ADD yourAutoIncrementUniqueKey INT UNIQUE NOT NULL IDENTITY ;
> ```
> 3. After this, you should be able to use your new key as a unique column!
> 4. Creating a new `IDENTITY` column in SQL server backfills all your previous records. Take note of the initial recipe run!
> 
> </details>

**Sort column**
1. Tables that have `updated_at` columns within them should be suitable as the sort column. 
2. Failing that, any column that can be sorted based on the time the record was updated can be used.
3. If no column is suitable, an `updated_at` column can be created to fulfill this purpose.
4. This new `updated_at` column in SQL server can now be used as an sort column

> <details><summary><b>Example on how to create an updated_at column to sort by</b></summary>
> 
> 1. Enter the following commands to create an `updated_at` column
>       
> ```sql
> ALTER TABLE yourTable
> add updatedAt datetime2
> CONSTRAINT DF_myTable_updatedAt DEFAULT GETDATE()
> ```
> 
> 2. After this, now we need to add this column to trigger and update whenever a record is changes
>       
> ```sql
> create trigger trg_myTable_update on yourTable for update as
> begin
>   update yourTable
> 	set updatedAt = getDate()
> 	from yourTable inner join deleted d
> 	on yourTable.id=d.id
> end
> ```
> 
> </details>

### Data validation
Data validation is an important step in database design that makes your data cleaner and also reduces the chances of job errors on Workato. Most databases allow you to create and alter tables to include constraints on data flowing into them. Read up over [here how to add constraints to ensure data cleanliness in your database](https://docs.microsoft.com/en-us/sql/relational-databases/tables/create-check-constraints?view=sql-server-2017)

Data validation can also be done at a recipe if you arent familiar or do not have `ALTER` permissions in your database. Use Workato's formula recipes to catch values that might throw errors in your recipe. [Found out more about formulas over here](/formulas.md)









