---
title: Workato connectors - Marketo
date: 2019-11-20 18:00:00 Z
isTocVisible: true
---

# Marketo
[Marketo](https://www.marketo.com/) is a marketing automation solution that empowers customer engagement through digital marketing.

## API version
The Marketo connector uses [Marketo REST API](https://developers.marketo.com/rest-api/).

## Create custom service for Workato
Marketo exposes REST endpoints which allows integration platforms (like Workato) to remotely retrieve and execute core capabilities. It is recommended to create a specific custom service client for Workato.

There are a few reasons for this.

1. All operations will be logged under a custom service dedicated for integration and workflow processes. This improves usage and error tracking by isolating issues specific to each integration platform.
2. This allows you to customize permissions and security profile, without having it tied to a specific employee user.

The custom service should have all the permissions needed to perform the required actions for your integration scenario. When building recipes, you may encounter a 403 error, it means that the ISU does not have sufficient permission for the action.

## How to create custom service on Marketo

| Steps | Description |
| ----- | ----------- |
| 1. Create API role | Navigate to **Admin** > **Users & roles** > select the **Roles** tab > **New user**.<br><br>Select **Access API** under permissions and click **Create**.<br>![Role permissions](/assets/images/connectors/marketo/create-role-in-marketo.png)<br>*Create role in Marketo* |
| 2. Create API user | Navigate to **Admin** > **Users & roles** > select the **Users** tab > **New role**.<br><br>Select the API role that you just created and finish the user setup.<br>![User permissions](/assets/images/connectors/marketo/create-user-in-marketo.png)<br>*Create user in Marketo* |
| 3. Create custom service<br>_for Workato_ | Navigate to **Admin** > **Launchpoint** > **New** > **New service**.<br><br>Select the API-only user that you just created and click **Create**.<br>![New custom service](/assets/images/connectors/marketo/create-custom-service-in-marketo.png)<br>*New custom service* |
| 4. Retrieve client credentials | Select **View details** for the new custom service.<br>![View custom service](/assets/images/connectors/marketo/view-details-marketo.png)<br>*View custom service*<br><br>This will show you the **client ID** and **Client secret** required for authentication on Workato.<br>![Client credentials](/assets/images/connectors/marketo/client-credentials.png)<br>*Client credentials* |

For more information about creating custom services, see the [Marketo documentation](https://developers.marketo.com/rest-api/custom-services/).

## How to connect to Marketo on Workato

![Marketo connection setup](/assets/images/connectors/marketo/connect-to-marketo.png)
*Marketo connection setup*

| Input field 	  | Description |
| --------------- | ----------- |
| Connection name | Give this connection a unique name that identifies which Marketo instance it is connected to. |
| REST Endpoint   | The base URL of your Marketo instance. Find out how to retrieve your base URL [here](https://developers.marketo.com/rest-api/base-url/). |
| Custom service client ID | The ID for this custom service client. |
| Custom service client secret | The password for this custom service client. |

## Marketo triggers and actions
You can browse the other chapters:

* [New lead trigger](/)
*
