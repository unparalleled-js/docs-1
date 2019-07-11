---
title: Variables by Workato
date: 2019-07-08 18:00:00 Z
---

# Variables by Workato
Variables by Workato is a native application that allows you to create, edit, and store datapills (of any data type) for the duration of the job. After you have created a variable and assigned its value, this datapill can be used throughout your recipe.

Variables enable you to sync key information across platforms. Suppose your recipe does not have a datapill type that is accepted by your target system. You can generate a new variable and use it as the input datapill.  

## Why is it useful
Even after assigning its initial value, you can update the variable's value as needed. You can use recipe actions to update your custom variables. This gives you more flexibility over hcontrolling the flow of data from one system to the next.

For instance, if you want to find a particular entry within a report - the entry with the *largest ARR*. Create a variable called `ARR`, run the [for each](recipes/steps.md#repeat-step) action, and update `ARR` whenever it finds a higher value. Subsequently, use the `ARR` value to call up that specific entry.

![Iterate through the report for highest ARR](/assets/images/features/variables/run-through-list-for-highest-arr.png)
*Iterate through the report for highest ARR*

## Connection setup
No connection setup is required. Simply select **App** > **Variables by Workato** to get started.

![Variables by Workato](/assets/images//features/variables/variables-by-workato.png)
*Variables by Workato*

## Actions
Start working with Variables with the create actions. To generate a  `string`, `number`, `date`, or `boolean` variable, use [Create variable](#create-variable). To work with lists, use [Create list](#create-list-in-collection).

Update or edit your variable at any point throughout your recipe with [Update variable](#update-variable) or [Add item to list](#add-item-to-list).

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

> Note: This action does not generate a datapill. To call your custom variable, use the output of the **Create variable** step.

### Example: Creating a name variable from an image file
Suppose you want to read a name from an image file (e.g. PNG). You can generate a `Name` variable and add the values for **First name**, **Middle name**, and **Last Name**.

![Create a name variable from an image file](/assets/images/features/variables/retrieve-name-from-png.png)
*Create a name variable from an image file*

See the full example recipe [here](https://www.workato.com/recipes/867047-new-driver-id-card-in-dropbox-will-read-the-card-with-google-vision-and-save-user-info-to-google-sheets).

### Create list
This action creates an empty list with its item schema. A list can have multiple items and each item can have multiple objects. List your item objects in the **list item schema**.

Since this action creates an empty list, use the [add item to list](#add-item-to-list) action to fill in the first entry.

![Create list](/assets/images/features/variables/create-list-action.png)
*Create list*

| Input field      | Description                                       |
| ---------------- | ------------------------------------------------- |
| List name        | The name of the list.                             |
| List item schema | The details of the objects that are in the list.  |

#### Define list item schema
The list item schema describes the objects that are in every item of the list. You can use **Add field** to define the item objects.

![Add new item object](/assets/images/features/variables/add-new-field.png)
*Add new item object*

| Input field | Description                                |
| ----------- | ------------------------------------------ |
| Name        | The name of the item object.               |
| Data type   | The data type of the item object.          |
| Optional    | Select if this item object is mandatory.   |
| Hint        | A note for the user filling in this field. |

Alternatively, you can configure them with a **Sample JSON**.

### Add item to list
This action appends a new item entry to an existing list. You can only update lists managed by **Variables by Workato**.

Some item objects are mandatory. Check that you have valid inputs for the required fields before using this action.

![Add item to list](/assets/images/features/variables/add-item-to-list-action.png)
*Add item to list*

| Input field     | Description                                 |
| --------------- | ------------------------------------------- |
| List name       | Select the list to add your new entry.      |
| Insert location | Select where to add your new item. You can add it to the **End of the list** or to the **Beginning of the list**. |
| List item       | Define the values for the new item objects. |

> Note: This action does not generate a datapill. To call your list, use the output of the **Create list** step.

#### Using default values for list
Although there are no default values for lists, you can reuse **item object values** when adding new item entries.

![Reusing item object values](/assets/images/features/variables/reusing-item-object-values.png)
*Reusing item object values*

When you append an object datapill to the item object field, you are taking the values from the **first item** of the list. For instance, you would be reusing object values `Typewriter`, `white`, and `126451` from this sample list:
```
Typewriter, white, 126451
Photocopier, grey, 58249X
Paper shredder, black, 575927
```
> Note: Remember that adding new items to the **beginning of the list** would change the first item of the list.


For more information on list management, see [here](/features/list-management.md)
