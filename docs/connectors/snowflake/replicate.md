---
title: Workato connectors - Snowflake Replicate action
date: 2018-02-02 06:10:00 Z
---

# Snowflake - Replicate action

This action updates a selected table in your Snowflake instance. It takes a list datapill as input and inserts or updates them as rows.

Workato will first [detect and compare the schema](#workato-schema-mapper) of the input data and Snowflake table. If they do not match, this action will create new columns in the Snowflake table. This ensures that all the data from your input will be automatically synced in Snowflake, even if there are updates to the input schema.

![Replicate action](~@img/snowflake/replicate-action.png)
*Replicate action*

## Input

| Input      | Description |
| ---------- | --- |
| Table name | Select the table to insert your rows by typing the full table name. Snowflake is case insensitive. |
| Unique key | Rows with unique key values found will be updated with the data provided. Rows without existing unique key values will be created with data provided. |
| Rows       | Use a list datapill as input. |
| Flatten columns | If your input data is formatted as an object, use this toggle to flatten the object into individual key-value pairs. See the example [below](#when-to-use-flatten). |

::: warning Rows limit
Snowflake has a limit of 16,384 rows for insert/update statements. Input lists with more than 16,384 rows will cause this job to fail.
:::

### When to use flatten

If you have data formatted as an object, you may not be able to access nested data directly (e.g. nested within a JSON object).

Use this toggle to flatten the object and treat individual key-value pairs as unique columns. This action will only flatten 1 layer of nested data.

Here is an example from a data source.

```json
{
  "id": 1,
  "name": "John Doe",
  "handles": {
    "github": "johndoe",
    "slack": "john"
  }
}
```

An unflattened row would look like this:

| ID | NAME     | HANDLES                                  |
| -- | -------- | ---------------------------------------- |
| 1  | John Doe | `{"github": "johndoe", "slack": "john"}` |

A flattened row will look like this:

| ID | NAME     | HANDLES_GITHUB | HANDLES_SLACK |
| -- | -------- | -------------- | ------------- |
| 1  | John Doe | johndoe        | john          |

## Output

The output of this action is a count of the number of rows upserted.

## Workato schema mapper

Since datatypes are maintained differently between Workato and Snowflake, Workato will perform data conversion when inserting or updating data into your Snowflake table.

Input data will be converted to Snowflake datatypes, based on the mappings defined below.

| Workato type  | Snowflake type |
| :------------ | :------------- |
| string        | [text / string / varchar](https://docs.snowflake.net/manuals/sql-reference/data-types-text.html#data-types-for-text-strings)<br>Defaults to maximum length. |
| string(binary) | [binary](https://docs.snowflake.net/manuals/sql-reference/data-types-text.html#data-types-for-binary-strings) |
| date          | [date](https://docs.snowflake.net/manuals/sql-reference/data-types-datetime.html#date) |
| date_time timestamp | [timestamp](https://docs.snowflake.net/manuals/sql-reference/data-types-datetime.html#timestamp)<br>Workato will use the timezone defined in the [connection setup](/connectors/snowflake.md#database-timezone), or use the default Snowflake user account timezone. |
| integer       | [number](https://docs.snowflake.net/manuals/sql-reference/data-types-numeric.html#data-types-for-fixed-point-numbers)<br>Precision and scale defaults to (38, 0). |
| number        | [double](https://docs.snowflake.net/manuals/sql-reference/data-types-numeric.html#data-types-for-floating-point-numbers) |
| boolean       | [boolean](https://docs.snowflake.net/manuals/sql-reference/data-types-logical.html#boolean) |
| hash / array  | [variant](https://docs.snowflake.net/manuals/sql-reference/data-types-semistructured.html#variant) |
