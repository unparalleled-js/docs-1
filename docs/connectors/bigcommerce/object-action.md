---
title: Workato connectors - BigCommerce Generic actions
date: 2020-02-12 06:00:00 Z
---

# BigCommerce - Object action
The BigCommerce connector use generic object actions. First select an action and you'll be prompted to select an object after. For example, to create an order in BigCommerce, first select the `Create object` action before selecting `Order` in the `Object type` input field. We currently support a limited number of objects in BigCommerce with plans to support more.

## Create object actions
When executed, this action creates an object of your choosing in BigCommerce.

### Input fields
Select the BigCommerce object to create. In this example, we select `Order`.

![Create object action](~@img/bigcommerce/create-object-action.png)
*Create object action*

After selecting the object, input fields related to the selected objects will be populated. Map datapills from upstream actions or static values to these input fields to create matching objects in BigCommerce.

### Output fields
The output datatree is populated based on the object created and returns the attributes of the created object in BigCommerce.

______________________

## Update object actions
When executed, this action updates an object of your choosing in BigCommerce.

### Input fields
Select the BigCommerce object to update. After selecting the object, input fields related to the selected objects will be populated. Map datapills from upstream actions or static values to these input fields to create matching objects in BigCommerce.

One required field common to all `Update object` actions is the internal BigCommerce ID of the object to update. Use `Search Object` actions to find this ID if needed.

### Output fields
The output datatree is populated based on the object updated and returns the attributes of the updated object in BigCommerce.

______________________

## Search object action
When executed, this action searches for an object of your choosing in BigCommerce.

### Input fields
Select the BigCommerce object to search for. After selecting the object, possible search parameters will be populated. Use these search parameters individually or together to search for your desired objects in BigCommerce.

### Output fields
This action returns an array of objects which match your search results. In some cases, when you are expecting only a single result, you may simply map the output datapills directly to downstream actions.

In other cases where you expect multiple results from the search, make use of the [list datapill](/features/list-management.md) to iterate through the results from BigCommerce.

______________________

## Get object by ID action
When executed, this action retrieves a single object of your choosing in BigCommerce.

### Input fields
Select the BigCommerce object to search for. After selecting the object, you'll be prompted to provide the BigCommerce object ID.

### Output fields
The pills in output datatree are populated based on the object retrieved and returns the attributes of the object in BigCommerce.
