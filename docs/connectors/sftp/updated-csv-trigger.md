---
title: Workato connectors - SFTP new/updated CSV file in directory trigger
date: 2019-10-15 09:00:00 Z
---

# New/updated CSV file in directory trigger

This triggers picks up new or updated CSV files in a specified folder. New and updated CSV files in subfolders will also be picked up.

Workato collates CSV lines and processes them in batches. The default batch size is `100` and max batch size is `1000`.

![New/updated CSV in directory trigger](~@img/connectors/sftp/updated-csv-trigger.png)
*New/updated CSV in directory trigger*

## Input

| Input field         | Description                                                                   |
| ------------------- | ----------------------------------------------------------------------------- |
| Directory           | Select the folder that you want to track. You can choose from the dropdown menu or enter the folder path directly. |
| Column names        | Enter CSV headers. You can enter them manually or provide a sample CSV file.  |
| Column delimiter    | Select the character that separates columns in the CSV file.                  |
| Contains header row | Indicate if there is a header line.                                           |
| Batch size          | Number of CSV rows to process per batch. The max batch size is `1000`.        |
| Expected encoding   | Expected encoding of the CSV files.                                           |
| Keep track of columns by | Configure this if your CSV content does not have a fixed column order.   |
| Quote character     | The character used to quote CSV cell values.                                  |

## Output

The output of this action is a **list of records**, with each record containing the schema as defined in the **CSV column names**. As this is list datapill, you would have to use a [repeat action](/recipes/steps.md#repeat-step) to iterate through the each record.

| Output field  | Description                                  |
| ------------- | -------------------------------------------- |
| File name     | The filename of the CSV.                     |
| First batch   | Whether this is the first batch of CSV rows. |
| Last batch    | Whether this is the last batch of CSV rows.  |
| Lines         | This is a [List datapill](/features/list-management.md), representing the list of records. |
| _List schema_ | Datapills defined by your CSV column names.  |
| List size     | Total number of rows.                        |
