---
title: Workato connectors - Coupa Object actions
date: 2019-04-29 12:40:00 Z
---

# Coupa - Object triggers
Coupa triggers continuously poll your Coupa instance and trigger recipes based on new/updated objects on Coupa. These can be used with any of the Coupa objects that Workato currently integrates with. [Find out which objects we work with.](/connectors/coupa/introduction.md#objects).

**Object triggers available in Workato**
- `New/updated object`

____________

### Input fields for object triggers
Coupa triggers are easy to set up on Workato.  The only required input field is the object which you want Workato to poll for. When you first start the recipe, you can also set the last time you want Workato to pull Coupa events from. This allows you to pull events retrospectively.

#### Trigger conditions
Trigger conditions are like filters in Workato. Turning on trigger conditions in Workato means that you can selectively choose which events you want to trigger workflows. Conditions can be set on object attributes like approval status.  This allows you to build workflows that are only triggered on things such as approved purchase orders or invoices.

### New/updated object
This action continuously polls for recently created or updated objects since the previous poll. When Workato finds newly created or updated objects, it checks whether it fulfills the trigger conditions and executes a new job run for each object it finds.

### Output fields for object triggers
Each new/updated object triggers a separate run. You can then use the output datapills in subsequent steps in your recipe. This trigger in Workato retrieves all object related information included custom fields. Custom fields are also useful to store the IDs of this same record which exist in other applications. For example, creating a custom field for an invoice in Coupa which stores the same invoice's ID in NetSuite allows you to quickly find and update that invoice in NetSuite based on the ID.

## List of triggers and actions
Workato currently supports the following triggers and actions. Find out more details about each by clicking on the links below. You can also navigate to them through the side bar.

  * [Introduction](/connectors/coupa/introduction.md)
  * [Object actions](/connectors/coupa/object-actions.md)
  * [Purchase order actions](/connectors/coupa/purchase-order-actions.md)
  * [Supplier actions](/connectors/coupa/supplier-actions.md)
  * [Integration actions](/connectors/coupa/integration-action.md)
