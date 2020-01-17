---
title: Salesforce Related Objects
date: 2020-01-04 06:15:00 Z
---

# Salesforce Object Relationships

An object relationship in Salesforce is a two-way association between two objects. Relationships are created by creating custom relationship fields on an object. This is done so that when users view records, they can also see and access related data.

An example of a relationship between standard objects in Salesforce is the relationship between `Account` and `Contacts`. In most Salesforce instances this is a one-to-many lookup relationship where `Account ID` is a field on a Contact, representing the relationship between the Contact and its associated Account. An Account usually has many associated Contacts.

There are several different types of relationships in Salesforce. Commonly used ones include:
- Master-detail
- Lookup
- Hierarchical

View a detailed explanation of the different types of relationships in Salesforce [here](https://help.salesforce.com/articleView?id=overview_of_custom_object_relationships.htm&type=5).

## Related objects field

In order to quickly access related objects' fields in Salesforce objects with **lookup relationships**, all [Salesforce triggers and SOQL search actions](https://www.workato.com/integrations/salesforce) on Workato contain the 'Related objects' field and 'Fields' field. If you cannot locate these fields, it can be found in the 'Remove optional fields' dropdown below the required fields.

![Related objects field](~@img/salesforce-docs/related-objs-fields.png)
*'Related Objects' and 'Fields' on triggers and actions*

### Accessing fields in Parent Objects

Here's an example of using this field in a New/Updated Record trigger. In this example:

1. The recipe will trigger when a New or Updated **Opportunity** is detected
2. Information in the **Primary contact** Parent Object such as Address and Phone number is required so it can be entered in an Order fulfillment app (eg. Netsuite)

Once the Salesforce trigger `New/Updated Record` is selected, the `Opportunity` object is selected in the **Object** dropdown. This fulfills part 1 of the requirements.

Then, click on the 'Related Objects' field dropdown to pull up a list of Parent Objects. Note that only Parent Objects will be listed here. Select **Primary contact** here.

![Select related object](~@img/salesforce-docs/parent-field-dropdown.png)
*Parent objects are displayed in the dropdown*

Next, move on to the next field, 'Fields' to select the fields in **Primary contact** required in this recipe. Since Salesforce objects usually contain many fields, using the search function in this dropdown will speed up this process. If you do not select specified fields here, all fields will be returned.

In this dropdown, fields belonging to the Opportunity, eg. Main competitor(s), Primary contact and Secondary contact belong to the Opportunity. Fields belonging to the selected Parent will have a dot notation separating the Parent and field name. The example below shows Primary contact.Contact ID and Primary contact.Deleted.

![Fields field](~@img/salesforce-docs/fields-field-1.png)
*Fields dropdown*

To fulfill part 2 of the requirements, select the Mailing Address and Business Phone fields. These fields will now be available in the data tree on the right for use in subsequent recipe steps.

### Grandparent relationships

> This is an advanced feature that requires users to know the relationship names between their Salesforce objects

![Granparent heirarchy](~@img/salesforce-docs/grandparent hierarchy.png)
*Relationship hierarchy*

The image above shows a typical Grandparent - Parent - Child lookup object relationship. Contacts or Accounts usually have multiple Opportunities: A simple example would be multiple sales offers (Opportunities) made to the same company or person within a company (Accounts/Contacts). Accounts and Contacts belong to Users in Salesforce. This User could be an account executive within your sales organization.  

To access fields in a Grandparent Object, in this case, toggle the related objects list to accept text input. This will allow you to enter multiple object relationships. Enter the following comma-separated list of relationships:

```
Primary_Contact__r,Primary_Contact__r.User__r
```

Note that each object has the suffix `__r`, which denotes the relationship. If using custom objects, which have the suffix `__c`, the `__c` suffix is replaced.

Now, select the required fields in the 'Fields' field, as below:
![Fields field 2](~@img/salesforce-docs/grandparent-relationship-selected.png)
*Fields from parent and grandparent object selected*
