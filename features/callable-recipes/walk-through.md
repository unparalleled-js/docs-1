---
title: Walk-through
date: 2017-04-05 14:00:00 Z
---
# Callable recipes - Walk-through

## Using callable recipes

Let’s take a look at an example to see how this works. Say you want to automate the process of creating an invoice in Quickbooks Online (QBO) when an opportunity is closed-won in Salesforce. The recipe logic would be **Create a new customer if the customer does not exist**.

In order to create a QBO invoice, you’ll need to create a new customer if the customer does not already exist in QBO. Now, this snippet of logic: “creating a customer in QBO when they don’t already exist,” is a process that is necessary not only with your Salesforce to QBO integrations, but also when you have Point Of Sale (POS) transactions flowing into QBO, invoices you receive from your vendors and more. Instead of recreating the logic for “creating a customer in QBO when they don’t already exist,” you can make this snippet of logic into a Callable Recipe.

### Create a new recipe

Create a recipe as you normally would, and for the trigger, select **Callable Recipe** under the application picklist.

![Select callable recipe trigger](/assets/images/features/callable-recipes/callable-recipe-trigger.png)
*Select callable recipe connector and call recipe action*

Fill in a Name for the recipe, and fill up the Input Schema and the Response Schema in the JSON Format. You can find out more about JSON [here](https://support.workato.com/support/solutions/articles/1000234879-schema-definition).

![Callable recipe trigger input](/assets/images/features/callable-recipes/callable-recipe-trigger-inputs.png)
*Configure callable recipe trigger*

In simple terms, the input schema determines what fields will be shown and need to be filled in when a callable recipe action is created in the calling recipe. The Response schema determines what pills will be available for use in the calling recipes Output data.

Learn more about **New call for recipe trigger** [here](/callable-recipes/new-call-trigger.md).

### Add steps to the recipe

Next, create your set of actions for the recipe. For this example, you would create a set of standard de-duplication steps, run a search, and if the search gives no results, create a customer. If an existing customer is found, update the customer.

### Call recipe

Create a recipe that requires the logic from the callable recipe we created earlier. Set up the trigger as required, and when created the actions you need. When you need to call the callable recipe, simply click on Add a new step, select **call recipe**, choose the recipe you created earlier, and you will see the fields from your **input schema** appear. Simply drag and drop the required pills and you'll be good to go!

![Callable recipe action](/assets/images/features/callable-recipes/callable-recipe-action.png)
*Call a recipe as an action*

Learn more about **Call recipe actions** [here](/callable-recipes/call-recipe-trigger.md).
