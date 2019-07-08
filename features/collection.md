---
title: Collection by Workato
date: 2019-06-26 18:00:00 Z
search:
  keywords: ['collection', 'query', 'list', 'table']
---

# Collection by Workato
Collection by Workato is robust native application that provides you with the tools to manipulate datasets. You can use Collection to synchronize related data across multiple systems (databases, web services).

## Why use Collection
Collection allows you manipulate data with smartlists. smartlist can reformat CSV files to match the format in your target system. You can create smartlists using flattened arrays with no nesting or import CSV files. Customize the column headers according to your use case requirements.

Workato smartlists are temporary meaning it exists only for the duration of the job and it will not persist across multiple jobs. Once you are done processing the data, load them directly to your target system.

### Transformation
Collection is built on SQL lite and functions like any database. You can create list and query them using standard SQL operators. Filter the data with `JOIN`, `WHERE`, `DELETE` statements to shiv through the smartlist for the important information.

Subsequently, load them directly into your target system with the Collection output or export the data as a CSV file.

### Collection works with large datasets
Collection excels at moving large datasets. Batch your tables and run them in parallel for optimal speed. Run a recipes with 1,000 or 1,000,000 records with the same ease.

You will not have to worry about storage capacity with Collection. Extract them to Workato directly for processing without needing to recruit a third-party application.

## Connection setup
No connection setup is required. Simply select **App** > **Collection by Workato** to get started.

![Collection by Workato](/assets/images//features/collection/collection-by-workato.png)
*Collection by Workato*

## Actions
Start working with smartlists with the [Create list in Collection](#create-list-in-collection) and [Create list in Collection from CSV file](#create-list-in-collection-from-csv) actions. Perform data transformations with flexible SQL queries using the [Query list in Collection](#query-list-in-collection) action.

### Create list in collection action
This action creates a smartlist in the recipe from a list input. The smartlist will contain the column headers according to the schema of the list. Collections support a maximum of 50,000 list entries.

For example, you can take a list of all workers from **Workday**.

![Create list in Collection](/assets/images/features/collection/create-list-in-collection.png)
*Create list in Collection*

| Input field     | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| List source     | Select a list [`pill`].                                       |
| List name       | The name of the smartlist.                                   |
| Index primary   | Select a column(s) as the primary index of your smartlist.   |
| Index secondary | Select a column(s) as the secondary index of your smartlist. |

### Create list in Collection from CSV
This action creates a smartlist in the recipe from a CSV input. The smartlist will contain the column headers according to the schema of the CSV string. Collections support a maximum of 50,000 rows in the smartlist.

For example, if you are retrieving files from your **on-prem** systems, you can download a CSV file and use it directly with Collection.

![Create list in Collection from CSV](/assets/images/features/collection/create-list-in-collection-from-csv.png)
*Create list in Collection from CSV*

| Input field       | Description                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| CSV source        | Select a CSV string as source input.                                        |
| List name         | The name of the smartlist.                                                  |
| File encoded type | Select the file encoded type. Default value is UTF08.                       |
| Column names      | The column headers in your CSV source input. Select **use a sample CSV file** to define your schema with a CSV file. |
| Ignore CSV header row | Select `Yes` if the CSV source has a header row, otherwise select `No`. |
| Column delimiter  | Select the character used to separate value in each line of the CSV.        |
| Index primary     | Select a column(s) as the primary index of your smartlist.                  |
| Index secondary   | Select a column(s) as the secondary index of your smartlist.                |

### Query list in Collection
This action allows you to perform standard SQL queries on your smartlists.

For example, you can tailor your workers list from **Workday** to exclude certain groups of people.

![Delete rows with Query list in Collection](/assets/images/features/collection/query-list-in-collection-delete.png)
*Delete rows with Query list in Collection*

| Input field        | Description                                                            |
| ------------------ | ---------------------------------------------------------------------- |
| SQL query          | Write your SQL query. Normal SQL syntax applies.                       |
| Output list schema | The column headers in your smartlist. Select **use sample JSON** to define your schema with JSON. |
| Write to CSV       | Select `Yes` to convert the query results to a CSV string, this will open the input fields below. To use this query output in further SQL queries, select `No`. |
| Add CSV header     | Select `Yes` query result contain a header row, otherwise select `No`. |
| Column delimiter   | Select the character used to separate value in each line of the CSV.   |

<!--- ![Query list in Collection](/assets/images/features/collection/query-list-in-collection.png)
*Query list in Collection* --->

Here are some of the commonly used SQL operators that can be applied to the **Query list** action.

| Input field | Description                                                                          |
| ----------- | ------------------------------------------------------------------------------------ |
| SELECT      | Use the SQL wildcard `*` to call the entire smartlist with full rows and columns.    |
| WHERE       | Define conditions that specifies what data you want to retrieve from the smartlist.  |
| JOIN        | Use `LEFT JOIN`, `INNER JOIN`, `RIGHT JOIN` to combine smartlists.                   |
| INSERT INTO | Define new entries for your smartlist.                                               |
| DELETE      | Define rows to remove from your smartlist.                                           |

Remember to query the full smartlist before exporting or loading unto your target systems. Some SQL queries (e.g. `INSERT INTO`, `DELETE`) do not return the full smartlist, datapills from these actions will not contain all the rows in your smartlist.

Run a `SELECT` query and use the datapill from that step.
```
SELECT * FROM <smart_list_name>
```
