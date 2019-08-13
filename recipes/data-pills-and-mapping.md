---
title: Datapills and fields mapping
date: 2017-03-16 10:00:00 Z
---

# Datapills
Datapills are output data from a trigger or an action step. They are variables that you can use to map business logic into recipe steps. For example, to create a Zendesk organization from a Salesforce account, you will assign datapills from the Salesforce account to the Zendesk organization in the recipe actions.

Datapills are contained within the datatree, within the **App Data** section. At any particular recipe step, the **App Data** section contains the output from the trigger and every action preceding this step.

![Datatree within a recipe step](/assets/images/recipes/data-pills/datatree-example.png)
*Datatree within a recipe step*

## Data types
Datapills can be of the following data types:
- String
- Integer or number
- Date or datetime
- Array/hash (list)
- Boolean

When mapping datapills, it is important that they are 'type' compatible. Workato will do default type conversions where it can be done with no ambiguity or loss of information.

In addition to mapping datapill as is, you can open the recipe steps in [formula mode](/formulas.md) to transform data on Workato.

### Type conversions
Certain data types can be converted from one to the other using [formulas](/formulas.md). For example, you may wish to convert a text string of numbers into integer type to perform arithmetic operations, or if an app expresses a datetime as a string, but you wish to convert it into a proper datetime type.

Here is a list of the commonly used type conversion formulas:
- to_currency
- to_date
- to_f
- to_i
- to_s
- to_time

Check out the formula editor to explore the other type conversions.

![Finding type conversions in formula mode](/assets/images/recipes/data-pills/type-conversions-in-formula.png)
*Finding type conversions in formula mode*

## Preview data
Workato will display sample data (fetched from your account) alongside datapills to help better understand the data in your app.

In the example below, you can see sample data in *italics* next to the datapills.

![Output datatree](/assets/images/workato-concepts/output-datatree.png)
*Output datatree for New Salesforce account trigger*

## Fields mapping
Fields mapping is defined as the assignment of datapills (variables) or absolute values (constants) into action or trigger input fields. This controls the flow of data between apps.

By mapping fields from a Salesforce account (from a trigger) to a Zendesk create organization action, you can ensure that the Zendesk organization and Salesforce account have the same data.

In every recipe step, you have access to datapills from all the previous steps. They can be used to configure the input fields of the current step.

### Example
In the following example, we map the **Account Name** data pill from the Salesforce **New account** trigger into the **Message** input field in the **Send email** action.

![mapping_gif](/assets/images/actions-docs/mapping_gif.gif)
*Mapping the account name data pill into the message input field*

## Mapping constants vs mapping variables
Workato input fields can be assigned variables (datapills) or constants (absolute values).

### Mapping variables
The variable `Account name` has been mapped to the **Name** input field. This means that for every new Salesforce account that is created, the account name of this Salesforce account will be used as the organization name of the Zendesk organization that will be created. For example, a new Salesforce account named **Sattei Winery** will create a Zendesk organization named **Sattei Winery**.

![Input field with variable mapping](/assets/images/workato-concepts/input-field-with-variable.png)
*Input field with variable mapping*

### Mapping constants
On the other hand, the input field **Notes** has a constant mapped to it - the text ``"Synced over from Salesforce"``. This means that all newly created Zendesk organizations created via Workato will have the words "Synced over from Salesforce" in its **Notes** field.

![Input field with constant mapping](/assets/images/workato-concepts/input-field-with-constant.png)
*Input field with constant mapping*

Here is an example of a new Zendesk organization with variable mapping and constant mapping.

![Newly created Zendesk organization](/assets/images/workato-concepts/zendesk-organization.png)
*Newly created Zendesk organization Sattei Winery*

### Mapping both constants and variables
You can also combine constants and variables in the input fields for the data you wish to have.

## Example
In this recipe, we will send a welcome email for every Salesforce lead who has signed up.

![Recipe will send a welcome email to each new Salesforce lead](/assets/images/recipes/data-pills/salesforce-lead-welcome-email-recipe.png)
*Recipe that sends a welcome email to new Salesforce leads. [Example recipe](https://www.workato.com/recipes/504766)*

In the **Send email** action, datapills from the **New Salesforce lead** datatree have been mapped into the input fields.

![Datapill mapping](/assets/images/recipes/data-pills/datapills-example.png)
*Example of datapills being mapped into an action step*

Since datapills are variables, their value will depend on a specific trigger event or action. In this example, the value assigned in the **To** input field will depend on the value of [`email`] in each new lead.

The recipe will read the [`name`] (e.g. Madison Diaz) and [`email`] (e.g. madisondiaz82@gmail.com) from the new lead and send the following email.

```
To: madisondiaz82@gmail.com

Hi Madison,

Thanks for joining our mailing list! We're excited to have you!
```

## Data transformation
Data fields from one app may not directly map into a data field for a different app. For example:
- Your sales app stores names in a single field *full name*, but your marketing app uses two fields *first name* and *last name*
- Your e-commerce app stores addresses as individual fields, e.g. *address line 1*, *address line 2*, *city*, *state*, but your accounting app only accepts a single *billing address* field
- The priority levels in your ticketing app are stored as *low*, *medium*, *high*, but in your sales system they are *low*, *normal*, *urgent*

In such cases, you can take advantage of Workato's data transformation capabilities by using [formulas](/formulas.md).

## Common issues when mapping fields
Here are some of the common errors experienced during fields mapping.

- Required fields that have no values at run-time

At design-time (when we're building the recipe), all required fields are supposed to be mapped. The recipe will refuse to start and throw an error if a required field is left empty.

However, even if an input field has been mapped at design-time, it might not actually have a value at run-time (when a trigger event comes in and a job is being processed). In such a case, that specific job will throw an error and fail.

You would need to decide how to handle such cases whereby a required field did not receive a value at run-time. If that is rightly a business logic error which needs to be resolved, you might let the job fail and flag the employee who had created the lead record. For example, the recipe tries to move a new lead from a sales app but finds that the **email address** is empty.

- Datapills from the wrong datatree

When mapping input fields with datapills, it is common to find datapills with the same names in the datatree ( `Email` in Salesforce and `Email` in Zendesk). Thus, it is crucial to ensure that you are mapping the appropriate datapills from the relevant steps.

- Datapills from the wrong part of the recipe

If your recipe has conditional steps (`If .. Else`), each job will have unprocessed steps. In such cases, the values in the datatree for these steps will most likely be blank.

If you're using datapills from these steps, you need to recognize the potential of these pills being null.
