---
title: Variables by Workato
date: 2019-07-08 18:00:00 Z
search:
  keywords: ['variables', 'data type', 'add']
---

# Variables by Workato
Variables by Workato is native application that allows you record, edit, and use a datapill (of any data type) for the duration of the job.

<!-- The list connector is a Workato utility built for users to create custom lists and store data in the list for the duration of a job, to be used in the same job. It is usually used for users to prepare a list to write to an action with a list input.
-->

## Why use Variables
Variables enable you to sync your data across platforms. It also allows you to perform operations on the data and use it as an input for subsequent actions.

### Transformation
Suppose that you want read a name (string) from a binary file (e.g. PNG) and. You can generate a `name` variable and add the values for **First name**, **Middle name**, and **Last Name**.

![Create name variable from PNG](/assets/images/features/variables/retrieve-name-from-png.png)
*Create name variable from PNG*

### Sifting through data
Update your variable at multiple points throughout your recipe and call it when required. For instance, if you want to find the entry with the *largest ARR*. Create a variable called `ARR`, run through your report with the [for each](recipes/steps.md#repeat-step) action, and update `ARR` when it finds a higher value.

![Iterate through report for highest ARR](/assets/images/features/variables/run-through-list-for-highest-arr.png)
*Iterate through report for highest ARR*

Subsequently, use the `ARR` value to call up that specific entry.

## Connection setup
No connection setup is required. Simply select **App** > **Variables by Workato** to get started.

![Variables by Workato](/assets/images//features/variables/variables-by-workato.png)
*Variables by Workato*

## Actions
Start working with Variables with [Create variable](#create-variable) and [Update variable](#create-list-in-collection-from-csv). To work with list or arrays, use [Create list](#create-list-in-collection) and [Add item to list](#create-list-in-collection-from-csv) actions.

### Create variable
This action creates a variable in the specified data type. You should configure this variable to match the data type that it will be used for.

![Create variable](/assets/images/features/variables/create-variable-action.png)
*Create variable*

| Input field   | Description                    |
| ------------- | ------------------------------ |
| Variable name | The name of the variable.      |
| Variable type | The data type of the variable. |
| Default value | The default value of the variable. Leave this blank to set the default value as `null`. |

### Update variable
This action updates a variable that was previously created.

![Update variable](/assets/images/features/variables/update-variable-action.png)
*Update variable*

| Input field   | Description                    |
| ------------- | ------------------------------ |
| Variable name | Select the variable to update. |
| Value         | The new value of the variable. |

> Note: this action does not generate a datapill. To use your variable, you would use the output of the **Create variable** step.

### Create list
This action creates a list data type. A list can contain multiple values and can hold multiple entries.

![Create list](/assets/images/features/variables/create-list-action.png)
*Create list*

| Input field      | Description           |
| ---------------- | --------------------- |
| List name        | The name of the list. |
| List item schema | The schema of the list. You can use **Add field** define the items or configure the fields with a **Sample JSON**. |

### Add item to list
This action adds a new item to an existing list.  

Some list categories are mandatory. Check that you have valid inputs for the required fields before using this action.

![Add item to list](/assets/images/features/variables/add-item-to-list-action.png)
*Add item to list*

| Input field     | Description                            |
| --------------- | -------------------------------------- |
| List name       | Select the list to add your new entry. |
| Insert location | Select where to add your new item. You can add it to the **End of the list** or to the **Beginning of the list**          |
| List item       | Define the values for the new item.    |


> Note: this action does not generate a datapill. To use your list, you would use the output of the **Create list** step.
