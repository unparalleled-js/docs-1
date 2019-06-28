---
title: Call recipe actions
date: 2017-04-05 14:00:00 Z
search:
  keywords: ['callable', 'call recipe']
---

# Callable Recipes - Call recipe actions

## Call recipe (synchronous)

This action calls a recipe and waits for the response before proceeding to the next step in the parent recipe.

![Call recipe synchronously](/assets/images/features/callable-recipes/callable-recipe-action.png)
*Call recipe synchronously*

### Input fields

| Input fields   | Description                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------- |
| Recipe to call | Select from a list of all your callable recipes.                                                  |
| Recipe input   | The callable recipe input fields will be displayed according to the request schema configuration. |

### Output fields

| Output fields | Description                                                                   |
| ------------- | ----------------------------------------------------------------------------- |
| Job ID        | ID of the created job in the recipe that was called.                          |
| Job URL       | URL of the created job in the recipe that was called.                         |
| Reply         | The callable recipe **Response schema** configuration will be displayed here. |

## Call recipe (asynchronous)

This action calls a recipe and does not wait for the response. It will proceed to the next step in the parent recipe immediately. Asynchronous calls are useful for use cases where the successive steps do not depend on the outcome of the callable recipe workflow.

![Call recipe asynchronously](/assets/images/features/callable-recipes/callable-recipe-async-action.png)
*Call recipe asynchronously*

### Input fields

| Input fields   | Description                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------- |
| Recipe to call | Select from a list of all your callable recipes.                                                  |
| Recipe input   | The callable recipe input fields will be displayed according to the request schema configuration. |

### Output fields

Since this action does not wait for a response, there will not be any **Reply** outputs fields.

| Output fields | Description                                           |
| ------------- | ----------------------------------------------------- |
| Job ID        | ID of the created job in the recipe that was called.  |
| Job URL       | URL of the created job in the recipe that was called. |
