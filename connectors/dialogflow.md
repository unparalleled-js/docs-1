---
title: Google Dialogflow
date: 2019-08-05 00:00:00 Z
---

# Google Dialogflow
Dialogflow is a natural language understanding platform that makes it easy to design and integrate a conversational user interface into your mobile app, web application, device, bot, interactive voice response system, and so on. Using Dialogflow, you can provide new and engaging ways for users to interact with Workbot.

When Workbot is connected with Dialogflow, all Slack messages or sent to Workbot will be processed by your connected Dialogflow bot's NLP (instead of Workbot's default NLP).

## API version
The Dialogflow connector uses [Dialogflow API v2](https://cloud.google.com/dialogflow/docs/reference/rest/v2-overview).

## Workbot support for Dialogflow
Currently, Workbot for Teams supports the use of Dialogflow on Workato.

## How to connect Dialogflow on Workato

### Setting up authentication
Dialogflow API v2 relies on a Google Cloud Platform Service Account for authentication, instead of the previously used client and developer access tokens (in V1).

> **This document assumes that you already have a project and Dialogflow agent. To create a new one, check out [Dialogflow's guide on creating a new project and Dialogflow agent](https://developers.google.com/actions/dialogflow/project-agent).**

### Getting the Service Account key
In order to use the V2 API, you will need to create a new Service Account and obtain a private key associated with the Service Account. The key is downloaded as a JSON file upon creation of the Service Account.

> **Caution: Your project will have an existing service account, but this should not be altered. For additional client and developer API access, you should create a new service account.**

1. From your Dialogflow console, click on the gear icon of your agent, to the right of the agent name.
![Dialogflow agent settings](/assets/images/connectors/dialogflow/dialogflow-agent-settings.png)
*Dialogflow agent settings*

2. Under the **GOOGLE PROJECT** section, click on the name of the **Service Account**.
![Google Service Account](/assets/images/connectors/dialogflow/google-service-account.png)
This will take you to the Google Cloud Platform Service Accounts page, but you first need to update the Service Account's role.

3. Click on the menu button in the upper left hand corner and click on IAM & admin.

4. Click on **Service Accounts** in the left hand menu.

5. Click on the **Create Service Account** button at the top of the page.

6. In the pop up, enter a name for the service account.

7. Click on **Role**. Under the Dialogflow category, select the desired role.

| Role name             | Access Description       |
|-----------------------|--------------------------|
| Dialogflow API Admin  | Full API access          |
| Dialogflow API Client | Session-level API access |
| Dialogflow API Reader | Read-only API access     |
![Service account role](/assets/images/connectors/dialogflow/service-account-roles.png)
*Service account roles*
8. Check the **Furnish a new private key** option and make sure **JSON** is selected for **Key** type.

9. Click the **Create** button.
![Create service account](/assets/images/connectors/dialogflow/create-service-account.png)

10. Download of the JSON file will start. Choose a location to save it and confirm.
> **Caution: You can only download this JSON file once, so make sure to save the file and keep it somewhere safe. If you lose this key or it becomes compromised, you can use the same process to create another.**

11. Once complete, you'll see a pop up with a confirmation message. Click **Close**.

## Creating a connection using the Service account Key
