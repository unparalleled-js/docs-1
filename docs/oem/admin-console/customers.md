---
title: OEM admin console customers tab
date: 2019-10-24 11:00:00 Z
---

# Customers
The Customers tab is an important tab within the OEM Admin Console that give OEM partners a detailed look into usage and stats within customer accounts. Here, partners can view more details of each customer account, add/remove and manage customer accounts as well as access them.

The following sections cover how the information provided in the customer tab can be used to your best advantage.

## Customer table

![OEM dashboard](~@img/oem/admin-console/customer-table.png)
*Customer table*

The customer table shows the full list of customers and the following information for each customer:

| Header | Description |
|--------|-------------|
| Customer | Customer name, external ID (in brackets if present) and plan. All these parameters can be edited.  |
| Joined | The date the customer account was created on. |
| Tasks | The number of tasks available to the customer per month. This task limit is informed by the plan. |
| Connections | The number of authenticated connections. This connection limit is informed by the plan. |
| Connected apps | The top 5 apps connected by count |

## Sorting, Searching & Filtering

### Sorting

All the parameters listed above with the exception of `Connected apps` can be sorted. Sorting is enabled by clicking on the table headers. Clicking twice will reverse the sorting order.

| Header | Sort order |
|--------|-------------|
| Customer | Customer name by alphabet. In order to filter by plan, use the filters above the table.  |
| Joined | By date. |
| Tasks | By the number of tasks consumed. |
| Connections | By the number of authenticated connections. |

### Search/Filter

Above the customer table, you may search and filter by the following:

| Filter type | Description |
|--------|-------------|
| Search | Search by customer name and/or external ID. Searched terms will be highlighted.  |
| Plan | Filter by plans available. This list of plans correspond to your list of custom plans. To add or remove plans, please contact your customer success manager. |
| Status | The status of a customer can be: <ul><li>Active</li><li>Expired subscription</li><li>In trial</li></ul> Customers with an 'Expired subscription' will be on a Workato Community (free) plan. This plan has a limit of 100 tasks/month and reflects the expiry of a trial or downgrade of plan.</br></br> If customers are no longer subscribed, we recommend removing the customer. |
| App | Use this filter to view specific customers that are using a selected app. |
| Date joined | Filter customers by date joined. Select an available date range or provide a custom one. |

## Adding a customer

Customers can be added in 2 ways:
- Directly on the UI
- With an [OEM platform API](/oem/oem-api/managed-users.md#create-customer-account)

To add a customer on the UI, simply click on the '+ Add Customer' button just above the customer table. The parameters required are:

- Customer name
- Notification email (Recipe errors are sent to this email)
- Plan
- External ID (optional)

![OEM dashboard](~@img/oem/admin-console/add-customer.gif)
*Adding a customer via UI*

# Customer information
Individual customer information pages are available when you click on a customer in the table. This page allows admins to view the customer's dashboard, members in the customer team and change settings on the account.

### Customer dashboard
The dashboard shows the number of active recipes currently running and the success/error rates across the recipes. It can be filtered by **time**.

![OEM dashboard](~@img/oem/admin-console/customer-info.png)
*Customer information page*

## Collaborators
The Collaborators tab shows the team members in the account: their name, email and role is displayed. [Customer managers](/oem/admin-console/customer-managers.md) are displayed with a tag.

![OEM dashboard](~@img/oem/admin-console/customer-team.png)
*Customer team collaborators*

### Switch to customer account
To access the customer account, [Customer managers](/oem/admin-console/customer-managers.md) may click on the 'Switch to this account' button on the top right of the page to access to the customer account. If other team members require access to the account, you should manually add them to the team while in the customer account.

## Settings

The settings page allows changing the configuration on the customer account. This includes:
- Subscription
- External ID
- Deleting the customer account

### Subscription
To change the plan or trial status of a customer account, use the 'Subscription' option in customer settings. You may change the plan to one of the existing custom plans available to your account. To add or remove plans, please contact your customer success manager.

![OEM dashboard](~@img/oem/admin-console/customer-settings.png)
*Customer settings*

You may also choose to put the customer on `Trial` status. This gives the user the opportunity to try the Workato platform in a 30-day trial. Users in trial have **100 tasks/month** and the trial lasts for **30 days**. The user is automatically downgraded to the 'Free' plan after 30 days. As an OEM partner, you may extend the trial by simply re-enabling it and changing the plan.

Once the customer has subscribed, simply disable the `Trial` and the user will be in an `Active` subscription.

### External ID
The external ID is a customer ID assigned to the customer by the OEM partner. This ID usually corresponds to a customer ID within your CRM. You may change the value at any time, but do note that any [APIs](/oem/oem-api/managed-users.md) using the external ID as an input will be affected if you change this ID.

Workato assigns each customer a unique `User ID` as well. This ID can be obtained in the URL of the customer information page.

### IFrame origin URL
This setting is available for customers using [Workato embedded](/oem/workato-embedded.md). When a URL is entered here, it overrides the IFrame origin URL set on the OEM admin account.

For example, if the OEM account has origin URL: `https://company.com`, if no value is set in the customer account, the customer account will inherit the same origin. If the customer has a unique domain they login with eg. `https://1.company.com`, you can change that in this setting and it will only apply to the selected customer.

This enables the use of multiple custom domains/workspace domains that your application supports.

### Delete account
The OEM partner may delete a customer account at any time. Please note that this removes the customer account for good — all data, recipes etc. will be removed and cannot be recovered.

## Customer management APIs

Customer management APIs are available that can perform a variety of functions on a customer account. View the list of Customer management APIs [here](/oem/oem-api/managed-users.md).
