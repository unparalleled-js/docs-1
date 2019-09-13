---
title: Workato connectors - Workday get custom objects
date: 2017-06-06 06:38:00 Z
---

# Workday - Get custom objects
You can extend Workday business objects by configuring custom objects. These custom objects are based on default Workday and can store additional custom fields. Custom objects enable you to record additional data which is not captured by the default Workday objects.

## Get custom objects actions
This action allows you to retrieve a custom object value of a specific Workday object.

#### Example
For example, we are setting a new onboarding process for our employee. Every employee has to undergo a drug test. On Workday, we set up a custom object called **drugTested** under the parent object **Workers**.

We can use this action to retrieve the status of a worker, to see if he/she has undergone the drug test.

### Inputs
![screen](/assets/images/connectors/workday/get-custom-object.png)
*Inputs for get custom object action*

| Input field          | Description |
| -------------------- | ----------- |
| Alias                | Select the custom object that you want to retrieve. This is the Web service alias. |
| Parent object ID     | The Workday ID of the parent object that you are selecting. |
| Custom object fields | Define the fields in this custom object. If left blank, it will retrieve all fields with their default names. |

#### Example
To retrieve the drug test status of Worker `13265`, we will use the **Get custom object** action and define it like so:
- Alias: `drugTested`
- Parent object ID: `13265763d7d3015f14cf7455b318a809`

### Outputs

![Custom object output](/assets/images/connectors/workday/get-custom-object-output.png)
*Custom object output*

The outputs of this action are:

| Output field        | Description                                                                 |
| ------------------- | --------------------------------------------------------------------------- |
| ID                  | A unique Workday ID for this custom object.                                 |
| Custom field values | The values for the custom fields belonging to this specific Workday object. |

Each field is retrieved and converted into a datapill. These can be used in subsequent recipe actions.

> If the parent object does not contain the custom object, this action will return `Error 404: Not found`.
