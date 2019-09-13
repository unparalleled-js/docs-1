---
title: Workato connectors - Workday update custom objects
date: 2017-06-06 06:38:00 Z
---

# Workday - Create/Update custom objects
You can extend Workday business objects by configuring custom objects. These custom objects are based on default Workday and can store additional custom fields. Custom objects enable you to record additional data which is not captured by the default Workday objects.

## Create/update custom objects actions
This action allows you to assign a custom object to a specific Workday object. If the parent object was not assigned the custom object, it will assign it. Otherwise, it will update the custom object with a new value.

#### Example
For example, we are setting a new onboarding process for our employee. Every employee has to undergo a drug test. On Workday, we set up a custom object called **drugTested** under the parent object **Workers**.

We can use this action to assign a status to a worker. If a worker does not previously have a **drugTested** status, this action will create the custom object for this worker.

Otherwise, if this worker already has a **drugTested** object (e.g. `True`/`False`), this action will update the custom object with a new value.

### Inputs
![Create custom object action](/assets/images/connectors/workday/create-custom-object-action.png)
*Create/update custom object action*

| Input field          | Description |
| -------------------- | ----------- |
| Parent object name   | The name of the parent object. See here. |
| Custom object fields | Define the fields in this custom object. If left blank, it will retrieve all fields with their default names.   |
| Custom object        | Select the custom object that you want to retrieve. This is the Web service alias of the custom object. |
| Parent object ID     | The Workday ID of the parent object that you are selecting. |

#### Example
For example, for worker `6b367` who has passed his drug test, we will use the **Create/update custom object** action and define it like so:
- Parent object name: `workerCustomDataSnapshot`
- Custom object: `drugTested`
- Custom object field (Drug tested): `True`
- Parent object ID: `6b36787a2e6301e185df0a95ff272a04`

### Outputs
There are no output for this action.

You can check the custom object status of your worker with a [Get custom object action](/connectors/workday/get-custom-objects.md).
