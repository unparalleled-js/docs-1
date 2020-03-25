---
title: Variables by Workato
date: 2019-07-08 18:00:00 Z
---

# Variables by Workato
Workato variable is a user-declared [datapill](/recipes/data-pills-and-mapping.md) that contains a data value. These user-declared variables are different from a standard datapill in that your declared variables are mutable - the value of the variable can be changed within a recipe.

The lifetime of a variable is for the duration of a single job (job scope) - there is no persistence, and no mechanism can access this across different jobs.

Workato variables are typed. In order to use variables, you will first have to declare it using the [create variable](#create-variable-action) action. To update the variable, use [update variable](#update-variable) action.

### Examples
If you want to find a particular entry within a report - the entry with the *largest ARR*.
1. Create a variable called `ARR`.
2. Run the [for each](/recipes/steps.md#repeat-step) action, and update `ARR` whenever it finds a higher value.
3. Subsequently, use the `ARR` value to call up that specific entry.

![Iterate through the report for highest ARR](~@img/features/variables/run-through-list-for-highest-arr.png)
*Iterate through the report for highest ARR*

### Connection setup
No connection setup is required. Simply select **App** > **Variables by Workato** to get started.

![Variables by Workato](~@img//features/variables/variables-by-workato.png)
*Variables by Workato*

## Create variable action
This action creates a variable in the specified data type. You should configure this variable to match the data type that it will be used for (e.g. `integer`, `string`).

![Create variable](~@img/features/variables/create-variable-action.png)
*Create variable*

| Input field   | Description               |
| ------------- | ------------------------- |
| Variable name | The name of the variable. |
| Variable type | The [data type](/recipes/data-pills-and-mapping.md#data-types) of the variable. |
| Default value | The default value of the variable. Leave this blank to set the default value as `null`. |

## Update variable
This action updates an existing variable. You can only update variables previously created with the 'Create variable' action. Otherwise, this action cannot be used.

![Update variable](~@img/features/variables/update-variable-action.png)
*Update variable*

| Input field   | Description                    |
| ------------- | ------------------------------ |
| Variable name | Select the variable to update. |
| Value         | The new value of the variable. |

::: tip Note
This action does not generate a datapill. To call your custom variable, use the output of the **Create variable** step.
:::

### Reset the value of a variable
You can set a `nil` value to variables in Update variable action to remove an existing value of a variable. This has to be done in the formula mode.


### Example: Creating a name variable from an image file
Suppose you want to read a name from an image file (e.g. PNG). You can generate a `Name` variable and add the values for **First name**, **Middle name**, and **Last Name**.

![Create a name variable from an image file](~@img/features/variables/retrieve-name-from-png.png)
*Create a name variable from an image file*

See the full example recipe [here](https://www.workato.com/recipes/867047-new-driver-id-card-in-dropbox-will-read-the-card-with-google-vision-and-save-user-info-to-google-sheets).

## Create list action
This action creates an empty list with its item schema. The list item schema will apply to every item in the list.

![Create list](~@img/features/variables/create-list-action.png)
*Create list*

| Input field      | Description                                      |
| ---------------- | ------------------------------------------------ |
| List name        | The name of the list.                            |
| List item schema | Define the properties of each item on this list. |

#### Define list item schema
The list item schema will show up as a list of usable variables in the output datatree. These variables can be mapped unto subsequent recipe steps. Use **Add field** to define a new field.

![Add new field](~@img/features/variables/add-new-field.png)
*Add new field*

| Input field | Description                              |
| ----------- | ---------------------------------------- |
| Name        | The name of the new field.               |
| Data type   | The data type of the new field.          |
| Optional    | Select if this new field is mandatory.   |
| Hint        | A description of this new field.         |

## Add item to list
This action appends a new item entry to an existing list. You can only update lists created with **Variables by Workato**.

Some item fields are mandatory. Check that you have valid inputs for the required fields before using this action.

![Add item to list](~@img/features/variables/add-item-to-list-action.png)
*Add item to list*

| Input field     | Description                            |
| --------------- | -------------------------------------- |
| List name       | Select the list to add your new entry. |
| Insert location | Select the location of the new entry.  |
| List item       | Define the values of the new entry.    |

> Note: This action does not generate a datapill. To call your list, use the output of the **Create list** step.

For more information on list management, see [here](/features/list-management.md).

## Clear all items from list
This action removes all entries in an existing list. This action should be used after a the 'Create list' and 'Add items to list' action. You can only clear lists created with **Variables by Workato**.

| Input field     | Description                            |
| --------------- | -------------------------------------- |
| List name       | Select the list to clear all entries from. |
