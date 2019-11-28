---
title: Lookup tables
date: 2017-02-23 15:15:00 Z
---

# Lookup tables

Lookup tables (similar to cross-reference tables) let you lookup frequently used data easily in a recipe.

Data in lookup tables are typically organized like a database table, with columns and rows of data. You can lookup an entry within the specified lookup table by matching against data in one or more columns.

For example, if you want to move account entries from your sales app (Salesforce) into the organization's accounting app (Intacct), you will find that both apps use different IDs internally.

In account to ensure data is synced accurately from Salesforce into Intacct, you will need to take match the account IDs from Salesforce to the corresponding IDs in Intacct. In the example table, any Salesforce entries coming in with the ID **34267** will be written into Intacct under the ID **6754**.

![Lookup table with the account IDs in Salesforce and Intacct, and the account names](/assets/images/features/lookup-tables/example-lookup-table.png)
*Lookup table with the account IDs in Salesforce and Intacct, and the account names*

Here are other common use cases for lookup tables:
* Given a city name, you want to get the zip code
* Given data in metric units, you want to convert to imperial units for the downstream app
* Given a department and rank, you want to retrieve vacation accrual rates

> **Lookup tables are enabled only for certain plans. Check the [Pricing and Plans page](https://www.workato.com/pricing) to find out more.**

## Setting up your lookup tables
There are three ways to upload data into your lookup tables:
- [Import an existing CSV file](#importing-an-existing-csv-file)
- [Add new entries manually](#adding-new-entries-manually)
- [Add new entries via a recipe](#adding-new-entries-via-a-recipe)

### Limits
Each lookup table supports up to 10 columns of data and a maximum of 10,000 entries per lookup table.

![Maximum of 10 data columns available](/assets/images/features/lookup-tables/lookup-tables-4.png)
*Maximum of 10 data columns available*

### Importing an existing CSV file
The GIF below walks you through the process of creating a lookup table and loading it with data imported from a CSV file.

![Creating a new lookup table and importing a CSV file](/assets/images/features/lookup-tables/lookup-tables-1.gif)
*Creating a new lookup table and importing a CSV file*

### Adding new entries manually
You can manually enter additional lookup table entries.

![Click on the Add new entry button](/assets/images/features/lookup-tables/lookup-tables-2.png)
*Click on the Add new entry button*

![A new blank row will be generated for values to be entered](/assets/images/features/lookup-tables/lookup-tables-3.png)
*A new blank row will be generated for values to be entered*

### Adding new entries via a recipe
There is a **Lookup table** connector that allows you to automate your work with lookup tables. This connector supports [adding of new entries](#add-entry-action) via a recipe.

### Using the lookup table connector
The **Lookup table** utility connector allows you to work with your tables via recipes. This connector supports the following actions:

* [Add entry](#add-entry-action)
* [Lookup entry](#lookup-entry-action)
* [Search entries](#search-entries-action)
* [Update entry](#update-entry-action)
* [Delete entry](#delete-entry-action)
* [Truncate table](#truncate-table-action)

### Add entry action
Add a new entry to an existing lookup table. You can use this action to keep your lookup tables updated, e.g. read newly created job titles from your human resources application and create a new entry for that job title in your lookup table.

![Select the lookup table to write to and then input the values to provide for each cell of the row](/assets/images/features/lookup-tables/lookup-tables-7.gif)
*Select the lookup table to write to and then input the values to provide for each cell of the row*

### Lookup entry action
The lookup entry action allows you to search for an entry (a row in the lookup table) by any of its values. The lookup entry action behaves like a search and retrieves a single entry. The first matching entry depends on the values passed in. If you have duplicate entries (i.e. your lookup will return more than one entry), only one entry will be retrieved.

In the example below, we have a table called **Vacation Rules** with 4 columns - vacation type, department ID, job code and job title.

![Using the lookup entry action in the recipe](/assets/images/features/lookup-tables/lookup-tables-5.png)
*Using the lookup entry action in the recipe*

In the following gif, we configure the lookup entry table to search for a specific row that matches the values we have (in that job) for department ID and job code. In the subsequent step, we can see what's returned - a single entry with all 4 available values. If we were looking for the corresponding vacation type and job title, we can use those datapills from the datatree.

The following gif walks you through the flow of configuring the lookup entry action to retrieve a matching entry.

![Configuring the action to lookup entries with the matching job title and job code](/assets/images/features/lookup-tables/lookup-tables-6.gif)
*Configuring the action to lookup entries with the matching job title and job code*

### Search entries action
The search entries action works similarly to the lookup action. The main difference between them is that lookup action returns a single entry whereas the search entries action returns a list of entries.

Use this if you expect a list of matching entries to be returned, and wish to process the list accordingly.

### Update entry action
Updates an entry to an existing lookup table. This action requires the Entry ID to be mapped. You can retrieve the Entry ID from actions such as "Search Entries", "Add entry" and "Lookup Entry" action.

![Using the Update entry action to update Jean's account status to closed](/assets/images/features/lookup-tables/lookup-tables-8.gif)
*Using the Update entry action to update Jean's account status to closed*

### Delete entry action
Deletes an entry in the specified lookup table by using the Entry ID.

For this example, the Entry ID is being retrieved from the Search action.

![Using the delete entry action to delete Jeans data in the table Account](/assets/images/features/lookup-tables/lookup-tables-9.gif)
*Using the delete entry action to delete Jeans data in the table Account*


### Truncate table action
Instead of deleting all entries one by one in the lookup table, the truncate table action deletes all entries from the specified lookup table. Using this action cannot be undone.

In the example below, we are deleting all entries in the table **Weekday**

![Using truncate table action to delete all 7 entries in the table Weekday](/assets/images/features/lookup-tables/truncate-table.gif)
*Using truncate table action to delete all 7 entries in the table Weekday*

## Lookup table formulas
Besides using an action step to work with a lookup table, you can also use a formula to lookup entries in your lookup table. This equivalent to the lookup action and can be done inside an input field.

To use the formula, set the input field to formula mode, and enter the formula in this format:

```ruby
lookup("Account IDs", "Salesforce account ID": datapill)["Intacct account ID"]
```

This formula will lookup the **Intacct account ID** of the first entry in the **Account IDs** table that matches any given **Salesforce account ID**.

### Performing lookup on in-memory table

The output of a **search entries action** can be used as in-memory lookup table. This is useful when a recipe invokes the `lookup` function on the same lookup table 1000s of times by reducing the time taken to perform the lookup.

To use the lookup formula on an in-memory table, you need to first create a **Search entries action**. This action should return a list of entries that you will need for your use case. Next, set the input field to formula mode, and enter the formula in this format:

```ruby
lookup(Entries, "Salesforce account ID": datapill)["Intacct account ID"]
```

![Lookup an in-memory table](/assets/images/features/lookup-tables/lookup-in-memory-tables.png)
*Lookup an in-memory table*

Like the example before this, the formula will lookup the **Intacct account ID** of the first entry in the **Account IDs** table that matches any given **Salesforce account ID**. This time, however, it will lookup entries much quicker and only from the reduced list of entries from the initial search.
