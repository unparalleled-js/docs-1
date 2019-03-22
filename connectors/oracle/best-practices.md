---
title: Workato connectors - Best practices
date: 2019-03-20 14:20:00 Z
---

# Best practices when using Oracle
We compiled a few of our best practices that make your life easier when developing workflows with Workato by causing less bugs and time wasted. We've split up these into 2 overarching patterns:
* Recipe design patterns
* Database design patterns

## Recipe design patterns
Workato contains numerous functions that makes life easier for you when you're designing recipes. Using tools such as [callable recipes](/features/callable-recipes.md) and single row/batch actions, you'll be able to break down complex workflow processes to create recipes that mimic your current dataflows without decreasing performance and troubleshoot them easily. Here are some [general recipe building best practices](/recipes/best-practices-building.md), but read on more to find out some of the rules specific to Oracle databases that you should keep in mind when building recipes in Workato.

### Keep conscious and minimise database actions whenever possible
When designing your recipes, it helps to keep in mind that each database action induces additional load on your servers. To minimise strain on your databases, remove unnecessary steps and use batch actions whenever possible to make your recipes more sustainable and cost effective. 

#### Common ways to reduce database actions
* Replace search and update/create actions using `Select`, `Update` and `Insert` actions with `Upsert` whenever possible. 
* Using Workato's `Lists` by Workato to aggregate data and using batch actions to send it over to SQL server.
* Using stored procedures or custom SQL functions to transform data on SQL server. (More on that below)

### Handling errors
Error handling is an important part in the design process of a recipe. Here are some of the [best practices for error handling](/recipes/best-practices-error-handling.md) when designing recipes. 

### Splitting up complex workflows into separate recipes
Databases are often used for a wide range of tasks and it may be tempting to create huge recipes that accomplish all tasks but this also makes these recipes incredibly hard to maintain. Complex workflows should always be split up into separate recipes compartmentalising them based on their purpose. This makes recipe maintenance and troubleshooting easier as errors can be traced quickly to specific recipes that handle well defined purpose. Breaking down workflows into multiple recipes also reduces the amount of redundancy as the same recipe can be called by a variety of different recipes. To achieve this, Workato has [callable recipes](/features/callable-recipes.md), allowing recipes to trigger other recipes. Callable recipes can also be triggered by 3rd party applications through a REST API. 

For example, if we were hoping to use Workato to build a workflow that accomplished the following 

1. reads new contact information from a Oracle server data base
2. performs basic transformations 
3. creates new accounts in Salesforce
4. adds these contacts into a mailchimp campaign
5. backs this data up in an redshift database

One should consider splitting this workflow up into 4 separate recipes.
<table>
  <thead>
    <tr>
        <th width='30%'>Recipe</th>
        <th width='70%'>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
   <td>Callable Recipe <b>1</b>  <br> <b>Create Salesforce accounts</b></td>
<td>
  1. Triggered after being called by another recipe and receive request data  <br>
  2. Performs validation on data received <br>
  3. Checks for existing Salesforce accounts <br>
  4. Updates or inserts new Salesforce accounts <br>
 </td>
      </tr>
<tr>
<td>Callable Recipe <b>2</b>  <br> <b>Adds contacts to email campaign</b></td>
<td>
  1. Triggered after being called by another recipe and receive request data  <br>
  2. Performs validation on data received <br>
  3. Checks for existing duplicate contact  <br>
  4. Adds or updates contact to email campaign <br>
  </td>
  </tr>
<tr>
<td>Callable Recipe <b>3</b>  <br> <b>Back contact data up in Redshift</b></td>
<td>
  1. Triggered after being called by another recipe and receive request data <br>
  2. Performs validation on data received <br>
  3. Perform data transformation to prepare for Redshift <br>
  4. Checks for existing records in Redshift <br>
  5. Updates or inserts contact records <br>
  </td>
  </tr>
<tr>
<td>Parent Recipe <b>4</b>  <br> <b>Kickstart workflow from database (Oracle)</b></td>
<td>
  1. Scheduled trigger to retrieve data from Oracle<br>
  2. Perform basic data transformation and validation <br>
  3. Call Recipe <b>1</b> <br>
  4. Call Recipe <b>2</b> <br>
  5. Call Recipe <b>3</b> <br>
  </td>
  </tr>
</body>
</table>

By splitting this workflow up into multiple recipes, this allows other recipes and 3rd party apps to also call upon recipe 1, 2 and 3 reducing the amount of redundant steps if, for example, another recipe needed to back data up in a redshift database. Changes to any step or improvements to any part of the workflow, such as a change in email provider from mailchimp to SendGrid would be handled much easier due to this design pattern.

### When to use batch of rows triggers/actions vs single row triggers/actions
Keeping in mind the ability to break down complex workflows through callable recipes, the decision to use batch or single row actions are often a matter of business requirements and design considerations. While batch triggers/actions reduce the load on your servers by batching up to a 100 records into a single call offering the ability to improve time efficiency of recipe, reduce the number of operations required per run and load on servers, there exists a trade-off between the flexibility since batch actions that do fail, fail on a batch level. 

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
      <td>Using this method is the most efficient across all metrics. Since Workato employs a step-by-step (synchronous) process within each job run so any error that causes the run to stop also prevents the following steps from being executed for the entire batch. In cases where it only makes sense for the following actions to be executed contingent on the success of the initial steps, this could be useful behaviour. Since even a single record causes the whole batch to stop, some thought should go into striking a balance between efficiency and stopping too many records from being processed during a failed job run. One solution would be to toggle batch size. <br><br>      
        <details><summary><u>Business use case example</u></summary>
        If we were to pull batches of new leads from a Oracle server for batch inserts into Salesforce, we could follow this up with emails to individuals on the sales team with links to the leads newly created on Salesforce directly. In cases where our information flowing in from Salesforce raised an error during the batch insert action, no email would be sent out to our sales team with links that didn’t work or were empty! We can now safely make adjustments to our recipe to accommodate this error before repeating the job.
        </details>
     </td>
    </tr>
       <td>The use of a single row trigger, followed by a single row actions</td>
      <td>Using this method is the least efficient across all metrics, especially for triggers/actions that work with large numbers of records. Workato employs a step-by-step (synchronous) process within job runs so any error that causes the run to stop also prevents the following steps from being executed. Some cases call for this behaviour where we would want to fix our recipe before letting the recipe run on to further steps. This is different from the batch trigger version as it only stops the job runs for those that raise errors compared to an entire batch. In time sensitive business use cases where all new rows should be processed as soon as possible, this might be the best design choice.<br><br>
        <details><summary><u>Business use case example</u></summary>
        Time sensitive job runs such as new orders populating a Oracle server table as new rows, the following actions may be crucial in ensuring the timely delivery of your product to your customer. Having entire batches of orders being stopped due to a single failed record may result in lost revenue for you. In this scenario, single row triggers/actions may be the best way to minimise disruptions to your company's operations. <b>Another alternative to consider would be to reduce the batch size of your batch actions.</b>
        </details>
     </td>
    </tr>
    </tr>
       <td>The use of a batch trigger, followed by all required batch actions. A separate recipes can be used with a single row action and single row actions.</td>
      <td>Using this method is allows records to be processed concurrently. This allows errors to be contained at a recipe level and only affect the steps that follow after it. In cases where steps are independent of each other and one need not be completed before the other can begin, this might be the best solution. This fits in the best with more complex workflows where separating recipes based on their data types and business needs makes recipes easier to maintain and efficient as mentioned earlier.<br><br>
        <details><summary><u>Business use case example</u></summary>
        New records in a table could signify new customer sign-ups for a free trial for your product. You hope to add them in batches to a drip campaign as well as send their details individually over to your sales team for follow-ups. Given both cases are not dependent on each other and both can be accomplished without diminishing the other's effectiveness, this workflow could and should be accomplished as separate recipes to minimise the impact if failed job runs on business.
        </details>
     </td>
    </tr>
  </tbody>
</table>

### When to use update, insert and upsert actions
Choosing between [update](/connectors/oracle/update.md), [insert](/connectors/oracle/insert.md) and [upsert](/connectors/oracle/upsert.md) actions can have numerous implications for your recipes and Oracle server tables. While upserts can be used to accomplish most actions where update or insert are used, here are some of the key considerations to keep in mind when choosing one over the other.

**Key considerations**
1. Upsert performs better in certain cases where records should be unique based on multiple field. This reduces the number of steps required in a recipe where a search would have had to been performed to decide whether to update a record or insert a new record.
2. Upserts are useful in failed job runs where repeating a failed job where it previously inserted a row would not result in another row being created. Inserts would insert yet another row if the job were to be run again.
3. Upserts need to be documented properly to ensure maintainability. Since it becomes unclear without documentation whether steps that use upsert are always inserts or always updates, it becomes challenging for others in your organisation to maintain these recipes.
4. Updates allow you to update rows that might not all be identified using a unique key. Rows to update identified using a range of parameters, i.e. updating all records whose `Title` column = `consultant`
5. Upserts can end up being overly flexible where inserting a new row when one cannot be found may not be the best behaviour. For example, a recipe triggering when an order is changed in Salesforce to update the record of the order in your database might not be suitable for the upsert action. Since a record of the order should have already been in the system, the lack of one to update should be noted and the job stopped with a report error instead.

### When to use custom SQL and stored procedures in Workato 
Workato allows you to write your own custom SQL queries in 2 ways:
1. [Using our `Select rows using custom SQL` action](/connectors/oracle/select.md#select-rows-using-custom-sql)
2. [Using our `Run custom SQL` action](/connectors/oracle/run_sql.md)

With these custom SQL queries, you can do a wide range of create, read, update and delete actions on your Oracle server. Since writing your own queries might get messy in terms of the columns returned, remember manage your step output by giving your returned columns **meaningful aliases** and **only returning the columns that you need**. This makes maintaining your recipe easier and more readable for others as well.

Custom SQL allows you to reduce the number of actions calling your database within a recipe. Having less actions means less load on your servers and greater time efficiency as data can be join and transformed directly on your servers before sending Workato the final result. If you're comfortable with SQL, consider using custom SQL to perform basic data transformations rather than doing so on Workato. Custom SQL also allows you to do a far larger range of operations such as creating, dropping and altering tables (if your connection has the correct permissions).

Besides custom SQL, Workato also supports the execution of [stored procedures](/connectors/oracle/stored-procedure.md) that are defined in your database. Stored procedures - similar to custom SQL - are great ways for you to do some of the processing inside your databases using them to perform complex queries before sending the result back to your recipe on Workato. Another great feature of stored procedures is the versatility available through input parameters while still retaining control over the scope of what your recipes can do in your database. 

### Using collections in Workato for basic data cleansing, enrichment and transformation
In cases where custom SQL and stored procedures might not be suitable such as the transformation and aggregating of data from different sources, Workato offers the use of collections for basic transformations. Collections can be used for data cleaning, data enrichment and aggregation through easy to use commands in SQL. Collections are versatile tools that can be used as last steps before placing data inside data warehouses, data lakes or exporting to other applications. 

## Database design patterns

### Designing tables for use in Workato
When looking to make triggers using our `New row` and `New/updated row` triggers, trigger configurations require either the use of a unique key or unique key and sorted column to enable Workato to ensure your trigger doesn't miss out on any records. Not all tables that you encounter may be ready to be used as a trigger so here are some best practices to prepare your table for use in Workato.

**Unique keys**
1. An auto incrementing unique integer key should be present in the table that can act as your unique key. In most cases where your table's `primary` key is set to be auto incrementing, this is usable. 
2. When this is not the case, one of two solutions can be implemented 
  * Finding an existing key that can act as a proxy which is an integer, unique and auto incrementing
  * Creating a new auto incrementing unique integer key

> <details><summary><b>How to create a new auto incrementing key</b></summary>
> Oracle does not support auto incrementing columns in versions 11g and versions before.
> <br> <br>
> <b> Here is how you can implement an auto_incrementing key for versions 11g and before</b>
> 1. A sequence needs to be first created, which is a data object that multiple users can access to automatically generate incremented values.
> 2. Enter the following commands to create an new sequence as well as create a new column, where [your_table_name] and [column_name] are placeholders for your table name and new column name respectively
>
> ```sql
> CREATE SEQUENCE seq_auto_increment START WITH 1;
> ALTER TABLE [your_table_name]
>   ADD ([column_name] int ,
>       CONSTRAINT unique_key_constraint UNIQUE([column_name])
>     )
> ```
>
> 3. After this is done, create a new trigger that finds the next value in the sequence `seq_auto_increment` and use that as the new key
>
> ```sql
> CREATE OR REPLACE TRIGGER id_on_insert
>   BEFORE INSERT ON [your_table_name]
>   FOR EACH ROW
> BEGIN
>   SELECT seq_auto_increment.nextval
>   INTO :new.[column_name]
>   FROM dual;
> END
> ```
>
> 4. You can now use this column as your unique key!
> <br>
> <b>Here is how you can implement an auto incrementing key for versions after 11g</b>
> <br> <br>
> 
> 1. We can use <code>IDENTITIES</code> to do so. Type in the following commands, where [your_table_name] and [column_name] are placeholders for your table name and new column name respectively
>
> ```sql
> ALTER TABLE [your_table_name]
>    ADD [column_name] int GENERATED ALWAYS AS IDENTITY;
> ```
>
>  2. Take note that this new column will backfill your table's existing records. This column cannot be inserted into and will throw an error if you try to do so. It will always be generated as an auto incrementing key.
>
> </details>

**Sort column**
1. Tables that have `updated_at` columns within them should be suitable as the sort column. 
2. Failing that, any column that can be sorted based on the time the record was updated can be used.
3. If no column is suitable, an `updated_at` column can be created to fulfil this purpose.
4. This new `updated_at` column in SQL server can now be used as an sort column

> <details><summary><b>How to create an updated_at column to sort by</b></summary>
> 
> 1. Enter the following commands to create an `updated_at` column, where [your_table_name] is a placeholder for your table name
>       
> ```sql
> ALTER TABLE [your_table_name]
>   ADD UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
> ```
> 
> 2. After this, now we need to add this column to trigger and update whenever a record is changes
>       
> ```sql
> create trigger trg_[your_table_name]_update on [your_table_name] for update as
> begin
>   update [your_table_name]
> 	set updatedAt = getDate()
> 	from yourTable inner join deleted d
> 	on yourTable.id=d.id
> end
> ```
> 
> </details>

### Data validation
Data validation is an important step in database design that makes your data cleaner and also reduces the chances of job errors on Workato. Most databases allow you to create and alter tables to include constraints on data flowing into them. Read up over [here how to add constraints to ensure data cleanliness in your database](https://docs.microsoft.com/en-us/sql/relational-databases/tables/create-check-constraints?view=sql-server-2017)

Data validation can also be done at a recipe if you aren’t familiar or do not have `ALTER` permissions in your database. Use Workato's formula recipes to catch values that might throw errors in your recipe. [Found out more about formulas over here](/formulas.md)









