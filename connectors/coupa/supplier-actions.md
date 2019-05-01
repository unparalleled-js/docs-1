---
title: Workato connectors - Coupa supplier actions
date: 2019-04-29 12:40:00 Z
---

# Coupa - Supplier actions
Workato supports the ability for you to get supplier sites by supplier in Coupa. More supplier actions are available via our generic object actions. To create, update or query suppliers on Coupa, [use generic actions instead](/connectors/coupa/object-actions.md) and select suppliers when prompted for an object.

**Supplier specific actions**
- `Get supplier sites by supplier`

____________

### Input fields for supplier actions
This action only requires you to define which supplier you want to retrieve the supplier site data from. Select from a drop down list of suppliers which Workato pulls from your Coupa account or generate it dynamically by toggling the settings such that you can add datapills from earlier on in your recipe. For the second option, this field only accepts the Coupa internal supplier ID so be sure to use that instead of the name of the supplier.

![Selecting an object](/assets/images/coupa/list-toggle-supplier-actions.png)
<center><i>Selecting an object in the Coupa connector</i></center>

### Get supplier sites by supplier
When this action is executed, it searches for this particular supplier in Coupa and returns all supplier sites associated with the supplier.

### Output fields
This action returns a list of supplier sites associated with the supplier.

## List of triggers and actions
Workato currently supports the following triggers and actions. Find out more details about each by clicking on the links below. You can also navigate to them through the side bar.

  * [Introduction](/connectors/coupa/introduction.md)
  * [Object actions](/connectors/coupa/object-actions.md)
  * [Object triggers](/connectors/coupa/object-triggers.md)
  * [Purchase order actions](/connectors/coupa/purchase-order-actions.md)
  * [Integration actions](/connectors/coupa/integration-action.md)
