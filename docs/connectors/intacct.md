---
title: Workato connectors - Intacct integration
date: 2017-04-28 06:15:00 Z
---

# Intacct
[Sage Intacct](https:sageintacct.com) is an accounting and financial management software that offers consolidation of information across business units, real-time analysis of financial operations, and compliance and auditing services.

## How to connect to Intacct on Workato
To establish the Intacct integration workflow on Workato, you have to establish a connection between Workato and your Intacct instance.

This is a 2-step process.
1. Configure the [Intacct Web Services](#intacct-web-services) to accept Workato requests.
2. Complete the [Connection setup](#connection-setup) on Workato.

## Intacct Web Services
Configuring Intacct Web Services requires the following steps:

- Ensure that your Intacct account is subscribed to **Web Services**. To add this to your list of subscription products, please contact your manager at Intacct. You should be provided the associated credentials for a XML Gateway/ API Access User.
- Next, set up a **Web Services User** in your Intacct instance for the integration access. Find out more [here](#setup-web-services-user-on-intacct).
- Lastly, authorize Workato to access Intacct **Web Services**. Find out more [here](#authorize-workato-on-intacct-web-services).

### Set up Integration System User for Workato
Workato recommends that you set up an Integration System User (ISU) on Intacct. This allows you to log all Workato integration and workflow processes on one dedicated ISU account. Furthermore, this allows you to exercise control over security policies for this integration system.

The ISU should have all the permissions needed to perform the required actions for your integration scenario. Otherwise, you may encounter `Error: 403` during recipe building.

For security reasons, each ISU should be restricted to a single integration system (like Workato).

## Setup Web Services User on Intacct

### 1. Add Web Services User
Go to **Company** > **Admin** tab > **Web Services Users**.

![Find Web Services Users page](~@img/connectors/intacct/find-web-service-user.png)
*Find Web Services Users page*

Select **Add** Web Services user.

![Add Web Services User](~@img/connectors/intacct/add-web-service-user.png)
*Add Web Services User*

### 2. Configure Web Services User information
You will be required to complete the Web Services User Information form.

![Add Web Services User information](~@img/connectors/intacct/web-service-user-information.png)
*Add Web Services User information*

| User field  | Recommended input | Description |
| --- | --- | --- |
| User ID     | `workato_isu` | The login username. This will be used to setup Workato's Intacct connector. |
| Last name   | - | This will be used to generate the **User name** field. |
| First name  | - | This will be used to generate the **User name** field. |
| Email address | - | Assign a valid email to receive notifications. |
| Contact name | - | Retrieve contact details from an existing Intacct user. If you are creating a new WSU, leave this field blank. |
| User name | - | This is an auto-generated name field.
| User type | `Business` | Define access and permissions for this ISU. |
| Admin Privileges | `Full` | Define the admin privileges to this account. **Full privileges** is required to subscribe to applications and modules. |

### 3. Include necessary applications and modules
Next, find **Subscriptions**.

![View subscriptions](~@img/connectors/intacct/view-subscriptions.png)
*View subscriptions*

Select all the applications and modules that will be required for your integration scenarios.

![Select application/modules](~@img/connectors/intacct/select-applications.png)
*Select applications/modules*

## Authorize Workato on Intacct Web Services
According to the Intacct workflow, creating a WSU does not grant Workato access to the web service itself. It requires an additional **sender ID** credential which is required to send requests to the web service endpoint.

> You can obtain a sender ID by contacting your Sage Intacct account representative.

Find **Company** > **Setup** tab > **Company**

![Locate Company Information](~@img/connectors/intacct/view-company-information.png)
*Locate Company Information*

Select **Edit**, look under the **Setup** tab for **Web Services authorizations**.

![Locate Web Services authorizations](~@img/connectors/intacct/view-web-services-authorizations.png)
*Locate Web Services authorizations*

Click **Add** and configure the Web Services authorization according to the example below:

![Adding Web Services authorization](~@img/connectors/intacct/add-web-services-authorization.png)
*Adding Web Services authorization*

| User field  | Recommended input | Description |
| --- | --- | --- |
| Sender ID | `Workato` | Sender IDs are case sensitive. |
| Description | - | Describe the purpose of the authorization.
| Status | `Active` | Ensure that the status is set to `Active`, inactive sender ID's are not able to make Web Services requests. |

## Connection Setup
To complete your Intacct integration workflow, you have to connect Workato recipes to your Intacct instance. You can access this connection page from the Recipe's **connection** tab, or from the main [App connections](https://www.workato.com/connections) page on Workato.

![Workato connection setup](~@img/connectors/intacct/workato-connector-setup.png)
*Workato connection setup*

| Input Field | Description |
| --- | --- |
| Connection name   | Give this connection a unique name that identifies which Intacct WSU it is connected to. |
| Login username | Provide the [User ID](#_2-configure-web-services-user-information) of the WSU. |
| Login password | The login secret for your Intacct instance. |
| Company ID | The company ID for your Intacct instance. |
| Location ID | Location ID for an entity. If left blank, Workato will retrieve all entities. |
