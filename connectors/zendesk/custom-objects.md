---
title: Workato connectors - Zendesk custom objects
date: 2019-06-04 18:00:00 Z
search:
    keywords: ['zendesk', 'sunshine', 'custom objects']
---

# Zendesk - Custom objects
Zendesk allows you to create custom objects to model, store, and retrieve objects that are not native to Zendesk (e.g. Tickets, Users, Organization). Custom objects can be configured to suit your various use-cases.

Workato allows you to interact with custom objects in the same way you interact with native Zendesk objects. You can create, read, update, and delete custom objects through recipe actions.

To access custom objects control, login to your Zendesk instance and find **Sunshine Platform**.

![Zendesk admin center](/assets/images/connectors/zendesk/zendesk-admin-center.png)
*Zendesk admin center*

### Custom objects
You can view your custom object types in the **Object types** tab.

![Zendesk custom object types](/assets/images/connectors/zendesk/zendeks-custom-object-types.png)
*Zendesk custom object types*

After configuring your custom object type, you can proceed to [create records](/connectors/zendesk/create-custom-object-record-action.md), [get records](/connectors/zendesk/get-custom-object-record-by-id-action.md), [update records](/connectors/zendesk/update-custom-object-record-action.md), and [delete records](/connectors/zendesk/delete-custom-object-record-action.md) through recipe actions.

### Custom relationships
You can also configure custom relationships between two custom objects or between a custom object and Zendesk object (e.g. Zendesk:user). This gives you more control over how objects interact and allow you to use your data in more meaningful ways.

You can view your custom relationship types in the **Relationship types** tab.

![Zendesk custom relationship types](/assets/images/connectors/zendesk/zendesk-custom-relationship-types.png)
*Zendesk custom relationship types*

After configuring your custom relationship type, you can proceed to [create relationship records](/connectors/zendesk/create-relationship-record-action.md), [get relationship records](/connectors/zendesk/get-relationship-records-action.md), and [delete relationship records](/connectors/zendesk/delete-relationship-record-by-id-action.md) through recipe actions.

For more information on Zendesk custom objects, please visit their documentation on this topic [here](https://develop.zendesk.com/hc/en-us/articles/360002124307-What-is-the-Sunshine-platform).
