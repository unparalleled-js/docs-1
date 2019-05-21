---
title: Workato connectors - Introduction
date: 2019-04-29 12:40:00 Z
---
# Coupa
[Coupa](https://www.coupa.com/) is a business spend management platform. It supports procurement, invoicing, expense and payment functions for enterprises. Coupa enables users to create and approve procurement processes such as requisitions and invoices. It also has an integrated expense module that allows users to submit expense reports and have them approved directly on Coupa. Traditionally, this information is then synced with ERP systems such as [NetSuite](/connectors/netsuite.md), [Oracle EBS](/connectors/oracle-ebs.md) or [SAP](/connectors/sap.md) for other business functions such as accounting or making payments.

Workato's integration with Coupa helps you to sync this data with any of these ERP systems to support your Procure To Pay, Procure To Order and Expense Management processes. Read on to find out how to set up your connection on Workato to your Coupa instance and how you can leverage on Workato to increase the business value you gain from Coupa through integrations with your other business applications.

## How to connect to Coupa on Workato
Coupa uses authentication based off API keys. API keys are keys you generate to let Coupa know this Workato connection is allowed to work with your information. Generate your API key in your Coupa instance by heading to https://[your-instance-name].coupacloud.com/api_keys or logging into your Coupa account.

API keys can be found under the `Setup` => `Integrations` => `API Keys` in the top navigation header in your Coupa instance.

![Configure Coupa connection view](/assets/images/coupa/connection.png)
<center><i>The connection configuration page for Coupa on Workato</i></center>

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Connection name</td>
      <td>Give this Coupa connection a unique name that identifies which API key it is connected to.</td>
    </tr>
    <tr>
      <td>Host</td>
      <td>Enter the Coupa URL for your instance.</td>
    </tr>
    <tr>
      <td>API key</td>
      <td>Enter your API key which you have generated in your Coupa instance.</td>
    </tr>
  </tbody>
</table>

## Working with the Coupa connector

### Objects
In Workato, we grouped Coupa data into objects in our actions and triggers. Objects refer to almost anything Workato currently supports in our Coupa actions or triggers. When selecting an action such as `Create Object`, you'll be prompted later on to clarify whether you want to create a purchase order or an invoice. We currently support the following objects in Coupa.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Object</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Account</td>
      <td>Query, create or update  accounts that match your financial structure. For example, give marketing, IT and sale their own accounts to manage their own budgets.</td>
    </tr>
    <tr>
      <td>Address</td>
      <td>Query, create or update personal or supplier remit-to address information.</td>
    </tr>
    <tr>
      <td>Contract</td>
      <td>Query, create or update a contract.</td>
    </tr>
    <tr>
      <td>Department</td>
      <td>Query, create or update department information. Departments are used to mimic your company's operating structure and to organise groups and users accordingly.</td>
    </tr>
    <tr>
      <td>Exchange rate</td>
      <td>Query, create or update exchange rates.</td>
    </tr>
    <tr>
      <td>Expense line</td>
      <td>Query or create expense report lines used for expense management.<td>
    </tr>
    <tr>
      <td>Expense report</td>
      <td>Query, create or update expense reports used for expense management.<td>
    </tr>
    <tr>
      <td>Integration</td>
      <td>Query or create integrations in Coupa.</td>
    </tr>
    <tr>
      <td>Integration error</td>
      <td>Query or create integrations errors in Coupa.</td>
    </tr>
    <tr>
      <td>Integration run</td>
      <td>Query or create integrations runs in Coupa.</td>
    </tr>
    <tr>
      <td>Integration history record</td>
      <td>Query or create integrations history records in Coupa.</td>
    </tr>
    <tr>
      <td>Invoice</td>
      <td>Query, create or update invoices in Coupa.</td>
    </tr>
    <tr>
      <td>Inventory Transaction</td>
      <td>Query or create inventory transactions. Receipts of goods are the same as inventory transactions in Coupa.</td>
    </tr>
    <tr>
      <td>Item</td>
      <td>Query, create or update items not provided by suppliers. If you are looking to work with items provided by suppliers, use the supplier item object.</td>
    </tr>
    <tr>
      <td>Lookup value</td>
      <td>Query, create or update lookup values in Coupa.</td>
    </tr>
    <tr>
      <td>Purchase order</td>
      <td>Query, create or update purchase order in Coupa.</td>
    </tr>
    <tr>
      <td>Purchase order line</td>
      <td>Query or create purchase order lines in Coupa.</td>
    </tr>
    <tr>
      <td>Remit to address</td>
      <td>Query, create or update supplier remit-to addresses. This address is used to send payment to suppliers.</td>
    </tr>
    <tr>
      <td>Supplier</td>
      <td>Query, create or update suppliers.</td>
    </tr>
    <tr>
      <td>Supplier information</td>
      <td>Query, create or update supplier information.</td>
    </tr>
    <tr>
      <td>Supplier item</td>
      <td>Query, create or update items provided by suppliers that users can select when creating a requisition.</td>
    </tr>
    <tr>
      <td>Supplier site</td>
      <td>Query, create or update supplier sites.</td>
    </tr>
    <tr>
      <td>User</td>
      <td>Query, create or update a user.</td>
    </tr>
  </tbody>
</table>

This is a non-exhaustive list of Coupa objects and there are still more enhancements to come. Check out the rest of the [available Coupa objects on their resource portal](https://success.coupa.com/Integrate/Technical_Documentation/API/Resources). If you see an object that we currently don't support, you can use a custom actions that allow you to send [custom HTTP requests](/developing-connectors/custom-actions.md).

### Using Coupa actions and triggers on Workato
The Coupa connector in Workato first requires you to select your action which is a mixture of generic actions as well as commonly used specific actions.

**Generic triggers**
- [New/updated object](/connectors/coupa/object-triggers.md)

**Generic actions**
- [Create object](/connectors/coupa/object-actions.md)
- [Update object](/connectors/coupa/object-actions.md)
- [Search object](/connectors/coupa/object-actions.md)
- [Get object by ID](/connectors/coupa/object-actions.md)
- [Get remit to addresses by object ID](/connectors/coupa/object-actions.md)

**Specific actions**
- [Close purchase order](/connectors/coupa/purchase-order-actions.md)
- [Cancel purchase order](/connectors/coupa/purchase-order-actions.md)
- [Get supplier sites by supplier](/connectors/coupa/supplier-actions.md)
- [Set integration run status](/connectors/coupa/integration-action.md)

For generic actions and triggers, you'll be able to select the object you want to work with later on when configuring the step. The required input fields for the object you select will then be dynamically generated. This includes any custom fields that you or your team have defined in Coupa

![Selecting an object](/assets/images/coupa/selecting-object.gif)
<center><i>Selecting an object in the Coupa connector</i></center>


### Custom object fields in Coupa
The Coupa connector on Workato automatically pulls all custom fields whenever you request for an object. Search for custom fields you or your team have defined in the `Add/remove optional fields` drop down.


## List of triggers and actions
Workato currently supports the following Coupa triggers and actions. Find out more details about each by clicking on the links below. You can also navigate to them through the sidebar.

  * [Object actions](/connectors/coupa/object-actions.md)
  * [Object triggers](/connectors/coupa/object-triggers.md)
  * [Purchase order actions](/connectors/coupa/purchase-order-actions.md)
  * [Supplier actions](/connectors/coupa/supplier-actions.md)
  * [Integration actions](/connectors/coupa/integration-action.md)
