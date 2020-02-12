---
title: Workato connectors - Iterable
date: 2020-02-12 06:00:00 Z
---

# Iterable
[Iterable](https://iterable.com/) is the growth marketing platform that enables brands to create, execute and optimize campaigns to power world-class customer engagement across email, push, SMS, in-app and more with unparalleled data flexibility.

## How to connect to Iterable on Workato
The connector uses API key authentication to connect Workato to Iterable.

![Configuring Iterable connection](~@img/iterable/connection.png)

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
      <td>Give this connection a recognizable name. On Workato, you can create multiple connections to the same App which can be dedicated to different teammates.</td>
    </tr>
    <tr>
      <td>API key</td>
      <td>Generate an API key for this account <a href='https://app.iterable.com/settings/apiKeys'>here</a></td>
    </tr>
  </tbody>
</table>

### Generating an API key
1. After logging into Iterable, head over to the “Integrations” tab in the top navigation bar and click on the API key option in the dropdown.

![Navigating to API key settings](~@img/iterable/apiKeyNav1.png)

2. You’ll be brought to the view where you can generate a new API key for your Workato connector.

![Navigating to API key settings](~@img/iterable/apiKeyNav2.png)

3. Generate a Standard API key and give it a meaningful name. Here, we gave it the name, 'Workato-demo'. After this is done, simply provide the same key to the connector and you should be able to make a successful connection.

### Generating System webhooks
1. Head over to the Iterable connector in Workato. Under the top navigation bar, select “tools” and select “connector SDK” from the dropdown.

![Navigating to Workato connector for webhook URI](~@img/iterable/webhookNav1.png)

2. Find the Iterable connector in the list of custom connectors you have installed in your Workato workspace.

![Navigating to Workato connector for webhook URI](~@img/iterable/webhookNav2.png)

3. On the “Source code” tab, scroll to the bottom of the page to find the debugger console. There, you’ll find the static webhook URI specific to your connector. Copy the static webhook URI link.

![Navigating to Workato connector for webhook URI](~@img/iterable/webhookNav3.png)

4. Workato supports system webhooks as well as custom and basic webhooks in Iterable. Head over to Iterable to configure your system and workflow webhooks.

* [Follow this documentation to configure system webhooks in Iterable](https://support.iterable.com/hc/en-us/articles/208013936-System-Webhooks)
* [Follow this documentation to configure BASIC or CUSTOM workflow webhooks in Iterable](https://support.iterable.com/hc/en-us/articles/205480275-Workflow-Webhooks-)

5. When prompted for endpoints, provide the static webhook URI link copied from your Iterable connector. No authentication is needed. Next time these events are triggered in Iterable, your Iterable triggers can pick up these webhook events.

## Triggers & Actions
The Iterable connector supports the following triggers and actions.
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='50%'>Triggers</th>
        <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>New Object</td>
      <td>Add subscribers to list</td>
    </tr>
    <tr>
      <td>New workflow</td>
      <td>Bulk upsert users</td>
    </tr>
    <tr>
      <td></td>
      <td>Create list</td>
    </tr>
    <tr>
      <td></td>
      <td>Get user by email</td>
    </tr>
    <tr>
      <td></td>
      <td>List channels</td>
    </tr>
    <tr>
      <td></td>
      <td>List project lists</td>
    </tr>
    <tr>
      <td></td>
      <td>Send sms</td>
    </tr>
    <tr>
      <td></td>
      <td>Track event</td>
    </tr>
    <tr>
      <td></td>
      <td>Update user subscription</td>
    </tr>
    <tr>
      <td></td>
      <td>Upsert user</td>
    </tr>
  </tbody>
</table>

## Triggers
After configuring the webhook URIs, you’ll now be able to configure your webhook triggers for both system webhooks and workflow webhooks.

### New Object
![Trigger config](~@img/iterable/triggers1.png)

When configuring a new object trigger, first select the event you want to listen on. The system webhook registered should have the corresponding event enabled on the Iterable UI.

### New Workflow
![Trigger config](~@img/iterable/triggers2.png)

When configuring a new workflow trigger, provide us with the workflow ID which calls the webhook you have just made. This can be found in the URL of the workflow editor. I.e. if the url is https://app.iterable.com/workflows/1234/edit then the workflow ID is 1234.

### Configuring expected webhook payloads
All triggers have a schema designer for you to define the expected webhook payload. Defining these fields allow you to use attributes in the payload in downstream actions. There are 2 ways to define the output field.

![Trigger config](~@img/iterable/triggers3.png)

* _Option 1_

Start the recipe without configuring the output schema and send a test event to the trigger. You can then use the payload in the job history to observe the structure of the expected payload.

![Trigger config](~@img/iterable/triggers4.png)

Copy this payload and paste that into the schema builder using the json wizard and all fields will be populated automatically.

* _Option 2_

Manually define the fields. The names in the fields must match the keys in the json payload _exactly._

## Actions
Actions in Workato allow you to create, update and retrieve information about objects in Iterable. Use these actions to add or update user attributes, add people to lists or even send smses. Most inputs in the Iterable connector are self-explanatory and request inputs for standard fields in Iterable.

### Working with the data fields input
Some actions in the Iterable connector will have an input field called “Data fields”. This is where users can configure and create or update objects in Iterable whilst also interacting with their custom fields.

![Action config](~@img/iterable/action1.png)

Users in Iterable are able to have custom attributes that can be created/updated during the creation or updating of the user. For example, we have this user below with fields “new_field” and “test_field”.

![Action config](~@img/iterable/action2.png)

We can use the input field called “Data fields” to change the values in existing field or even add new field by first defining the names of the fields we want to update and then populating the input fields that appear below. *The names defined must match exactly when defining the request body parameters.*

![Action config](~@img/iterable/action3.png)

This results in the following object:

![Action config](~@img/iterable/action4.png)
