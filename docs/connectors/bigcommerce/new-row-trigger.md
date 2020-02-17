---
title: Workato connectors - BigCommerce new updated object triggers
date: 2020-02-12 06:00:00 Z
---

# BigCommerce - New object triggers
This trigger picks up on new or updated objects in BigCommerce. Each event is processed as a separate job. It checks for new or updated objects once every poll interval.

## Input fields
Select the BigCommerce object to monitor. In this example, we select `Order`.

![New/updated object trigger](~@img/bigcommerce/new-updated-object-trigger.png)
*New/updated object trigger*

Optionally, you can configure this optional field:

| Field name | Description |
|---|---|
| When first started, this recipe should pick up events from | Trigger will retrieve BigCommerce records created/updated from this date/time. |

In some cases, certain object types will have additional field parameters which you can configure. For example, the `Order` object type trigger has 2 addtional input field which let you filter only for Orders of certain status and to trigger upon deleted or archived orders.

## Output fields

The output datatree is populated based on the object selected. Each job corresponds to a single new or updated order in BigCommerce.
