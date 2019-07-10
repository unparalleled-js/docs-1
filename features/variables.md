---
title: Variables by Workato
date: 2019-07-08 18:00:00 Z
---

# Variables by Workato
Variables by Workato is native application that allows you create, edit, and store a datapill (of any data type) for the duration of the job.

Suppose your recipe does not have a datapill type that is accepted by your target system. You can generate a new variable and use it as the input datapill.  

## Why use Variables
Variables enable you to sync key information across platforms. You can perform operations on a variable and use it as an input for subsequent actions.

For instance, if you want to find the entry with the *largest ARR*. Create a variable called `ARR`, run through your report with the [for each](recipes/steps.md#repeat-step) action, and update `ARR` whenever it finds a higher value.

Subsequently, use the `ARR` value to call up that specific entry.

![Iterate through report for highest ARR](/assets/images/features/variables/run-through-list-for-highest-arr.png)
*Iterate through report for highest ARR*

## Connection setup
No connection setup is required. Simply select **App** > **Variables by Workato** to get started.

![Variables by Workato](/assets/images//features/variables/variables-by-workato.png)
*Variables by Workato*

## Actions
Start working with Variables with the create actions. To generate a  `string`, `number`, `date`, and `boolean` variable, use [Create variable](#create-variable). To work with lists, use [Create list](#create-list-in-collection).

Update or edit your variable at any point throughout your recipe with the [Update variable](#update-variable) or [Add item to list](#add-item-to-list).

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
This action updates an existing variable. You can only update variables managed by **Variables by Workato**.

![Update variable](/assets/images/features/variables/update-variable-action.png)
*Update variable*

| Input field   | Description                    |
| ------------- | ------------------------------ |
| Variable name | Select the variable to update. |
| Value         | The new value of the variable. |

> Note: this action does not generate a datapill. To use your variable, you would use the output of the **Create variable** step.

### Example: Creating a string variable from an image
Suppose that you want read a name from an image file (e.g. PNG) and. You can generate a `Name` variable and add the values for **First name**, **Middle name**, and **Last Name**.

![Create name variable from PNG](/assets/images/features/variables/retrieve-name-from-png.png)
*Create name variable from PNG*

### Create list
This action creates an empty list with its item schema.

![Create list](/assets/images/features/variables/create-list-action.png)
*Create list*

| Input field      | Description           |
| ---------------- | --------------------- |
| List name        | The name of the list. |
| List item schema | The schema of the list. You can use **Add field** define the items or configure the fields with a **Sample JSON**. |

### Add item to list
This action adds a new item to an existing list.  

Some list fields are mandatory. Check that you have valid inputs for the required fields before using this action.

![Add item to list](/assets/images/features/variables/add-item-to-list-action.png)
*Add item to list*

| Input field     | Description                            |
| --------------- | -------------------------------------- |
| List name       | Select the list to add your new entry. |
| Insert location | Select where to add your new item. You can add it to the **End of the list** or to the **Beginning of the list**          |
| List item       | Define the values for the new item.    |

If you append list items from the same list, it will take the value of the **First item** of the list. For instance, the `product` list as one line:
```
Typewriter, white, 126451
```




> Note: this action does not generate a datapill. To use your list, you would use the output of the **Create list** step.

### Example: Creating a string variable from an image
Suppose that you want read a name from an image file (e.g. PNG) and. You can generate a `Name` variable and add the values for **First name**, **Middle name**, and **Last Name**.

![Create name variable from PNG](/assets/images/features/variables/retrieve-name-from-png.png)
*Create name variable from PNG*

For more information on list management, see [here](/features/list-management.md)
