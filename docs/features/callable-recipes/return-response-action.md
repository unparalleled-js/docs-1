---
title: Return response from recipe action
date: 2017-04-05 14:00:00 Z
search:
  keywords: ['callable', 'return response']
---

# Callable Recipes - Return response from recipe action

This action responds to the recipe call with a status confirmation together with any data. This action will respond with a data format defined in the [New call for recipe](new-call-trigger.md) trigger.

![Return response from recipe action](~@img/features/callable-recipes/return-response-action.png)
*Return response from recipe action*

### Input fields

| Input field    | Description                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| Response type  | Select a response (**Success** or **Error**) according to the recipe logic.           |
| Reply/Response | Depending on the response type, a relevant input field will be displayed for mapping. |
| Content type   | If you select **Raw response** in the trigger, define the response data type here.    |
| Error message  | If you chose an **Error** response type, provide an appropriate error message here.   |

If you are using a REST-enabled recipe, these input fields will also be relevant.

| Input field            | Description                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------- |
| Error code             | If you chose an **Error** response type, choose a HTTP error code to respond with. |
| Custom error response? | Select **Yes** to send content of **Error message** input as the response body.    |
