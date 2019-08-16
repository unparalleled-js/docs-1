---
title: Google Dialogflow
date: 2019-08-05 00:00:00 Z
---

# Google Dialogflow
Dialogflow is a natural language understanding platform that makes it easy to design and integrate a conversational user interface into your mobile app, web application, device, bot, interactive voice response system, and so on. Using Dialogflow, you can provide new and engaging ways for users to interact with Workbot.

When Workbot is connected with Dialogflow, all commands sent to Workbot will be processed by your connected Dialogflow bot's NLP (instead of Workbot's default NLP).

## API version
The Dialogflow connector uses [Dialogflow API v2](https://cloud.google.com/dialogflow/docs/reference/rest/v2-overview).

## Workbot support for Dialogflow
Currently, Workbot for Teams supports the use of Dialogflow on Workato.

## How to connect Dialogflow on Workato
The Dialogflow connector makes use of the `client email` and `private_key` of the [Google Cloud Platform Service Account](https://cloud.google.com/iam/docs/understanding-service-accounts) that your Dialogflow agent is associated with.

![Dialogflow connector](/assets/images/connectors/dialogflow/dialogflow-connector.png)

In order to use the V2 API, you will need to create a new Service Account for your agent, and obtain its key. The key can be downloaded as a JSON file once you create the new Service Account. This JSON file contains both the `client email` and `private_key`, which are needed to connect to Dialogflow.

Workato uses the provided `client email` and `private_key` to exchange a client access token for use by the Dialogflow connector.

> **This document assumes that you already have a project and Dialogflow agent. To create a new one, check out [Dialogflow's guide on creating a new project and Dialogflow agent](https://developers.google.com/actions/dialogflow/project-agent).**

### Creating a Service Account and getting the client email and private key
In order to use the V2 API, you will need to create a new Service Account and obtain a private key associated with that Service Account. The key can be downloaded as a JSON file once you create the new Service Account.

> **Caution: Your project will have an existing service account, but this should not be altered. For additional client and developer API access, you should create a new service account.**

1. From your Dialogflow console, head to your agent's settings by clicking on the gear icon of your agent, to the right of the agent name.
![Dialogflow agent settings](/assets/images/connectors/dialogflow/dialogflow-agent-settings.png)
*Dialogflow agent settings*

If you wish to use another project, you’d need to create a new agent. You can easily do so from any existing project by going to the ‘Export and Import’ tab and clicking the ‘EXPORT AS ZIP’ button.

2. Under the **GOOGLE PROJECT** section, click on the name of the **Service Account**.
![Google Service Account](/assets/images/connectors/dialogflow/google-service-account.png)
*Getting to the Google Cloud Platform Service Accounts page*
This will take you to the Google Cloud Platform Service Accounts page.

3. Click on the **Create Service Account** button at the top of the page.
![Create new service account](/assets/images/connectors/dialogflow/create-new-service-account.png)

4. In the pop up, enter your preferred details for this service account, then click **Create**.
![Create new service account](/assets/images/connectors/dialogflow/service-account-details.png)
*Creating a service account for your agent*

5. Next, you'll need to grant this service account access to your agent so it has permissions to operate optimally. Under the Dialogflow category, filter by 'dialogflow' and select from any of the following roles.

  | Role name             | Access Description       |
  |-----------------------|--------------------------|
  | Dialogflow API Admin  | Full API access          |
  | Dialogflow API Client | Session-level API access |
  | Dialogflow API Reader | Read-only API access     |
  ![Service account role](/assets/images/connectors/dialogflow/service-account-roles.png)
  *Service account roles*

  Once done, click on **Continue**.

8. Create a key for this service account by clicking on the **Create key** button.
![Create service account 1](/assets/images/connectors/dialogflow/create-key-1.png)
*Begin creating a key*

9. Choose **JSON** as the **Key** type, then click the **Create** button.
![Create service account 2](/assets/images/connectors/dialogflow/create-key-2.png)
*Choose JSON key type*

10. When the key is created, a download of the JSON file will start. Choose a location to save it and confirm.
> **Caution: You can only download this JSON file once, so make sure to save the file and keep it somewhere safe. If you lose this key or it becomes compromised, you can use the same process to create another.**

11. Once complete, you'll see a pop up with a confirmation message. Click **Close**.
![Create service account 3](/assets/images/connectors/dialogflow/create-key-3.png)

12. Open the JSON file that was downloaded (in step 10 above, when creating your service account and key) using a text editor (e.g. TextEdit, Notepad, Atom, SublimeText).

13. Obtain the `client email` and `private_key`.
![Client email and private key](/assets/images/connectors/dialogflow/client-email-private-key.png)
