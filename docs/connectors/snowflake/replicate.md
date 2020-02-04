---
title: Workato connectors - Snowflake Replicate actions
date: 2018-02-02 06:10:00 Z
---

# Snowflake - Replicate action

This action updates a selected table in your Snowflake instance. It takes a list datapill as input and upserts as rows into the table.

Workato will first detect and compare the schema of the input data and Snowflake table. If they do not match, this action will create new columns for the new columns. This ensures that all the data from your input will be automatically synced in Snowflake, even if there are updates to the input schema.


![Replicate action](assets/images/snowflake/replicate-action.png)
*Replicate action*

## Input

| Input | Description |
| ----- | --- |
| Table name | Select table to insert your rows into by typing the full table name. Snowflake is case insensitive. |
| Unique key | Rows with unique key values found will be updated with the data provided. Rows without existing unique key values will be created with data provided. |
| Rows       | Provide the list datapill as input. |
| Flatten columns | If you input data is formatted as an object, use this toggle to flatten the object into individual key-value pairs. |

## Output

The output of this action is a count of the number of rows upserted.
