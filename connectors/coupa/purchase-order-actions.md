---
title: Workato connectors - Coupa purchase order actions
date: 2019-04-29 12:40:00 Z
---

# Coupa - Purchase order actions
Workato allows you to close or cancel purchase orders on Coupa. To create, update or query purchase orders on Coupa, [use our object actions instead](/connectors/coupa/object-actions.md) and select purchase orders when prompted for an object.

This action is traditionally used in response to recipes triggered when a purchase order is closed in NetSuite. This could happen after payment is made. By closing both purchases orders in NetSuite and Coupa, data integrity is maintained.

**Purchase order specific actions**
- `Close purchase order`
- `Cancel purchase order`

____________
### Input fields for purchase order actions
These actions require a single input which is the purchase order's internal Coupa ID. When run, it will find that specific purchase order on Coupa and close/cancel it. If you currently do not have the specific internal Coupa ID, you can use our `search objects` to search purchase orders based on other attributes and use the resultant output which contains the internal Coupa ID.

### Close purchase order
When this action is executed in a recipe, it finds and closes the purchase order denoted in the step input.

### Cancel purchase order
When this action is executed in a recipe, it finds and cancels the purchase order denoted in the step input.

### Output fields for purchase order actions
When cancelled or closed, Workato also returns the purchase order object so you can use its datapills in subsequent steps.

## List of triggers and actions
Workato currently supports the following triggers and actions. Find out more details about each by clicking on the links below. You can also navigate to them through the sidebar.

  * [Introduction](/connectors/coupa/introduction.md)
  * [Object actions](/connectors/coupa/object-actions.md)
  * [Object triggers](/connectors/coupa/object-triggers.md)
  * [Supplier actions](/connectors/coupa/supplier-actions.md)
  * [Integration actions](/connectors/coupa/integration-action.md)
