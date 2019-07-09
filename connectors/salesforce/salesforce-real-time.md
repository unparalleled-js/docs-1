---
title: Salesforce real-time triggers
date: 2018-01-04 06:15:00 Z
---

# Salesforce real-time triggers
Workato offers real-time capabilities for 2 Salesforce triggers: **New Object** and **New/Updated Object**. This allows Workato to detect records created/updated in Salesforce immediately. Salesforce real-time triggers is enabled only for certain plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

These real-time triggers are powered by [Salesforce workflow rules](https://help.salesforce.com/articleView?id=workflow_rules_new.htm&type=5). Via these workflow rules, Salesforce monitors records for certain changes and notifies Workato immediately via an outbound message when these changes occur. These outbound messages will be received and processed by a Workato recipe as trigger events.

To set up these triggers, we need to:
1. Create a Workato recipe with a Salesforce real-time trigger, and copy the generated endpoint URL from the trigger.
2. Create a Salesforce workflow rule to monitor events we're interested in and send outbound messages to that endpoint URL when these events occur.
3. Activate the workflow rule.
4. Add trigger conditions in the recipe, if desired.
5. Start the recipe.

In the following sections, we provide a detailed walkthrough to setup the real-time triggers:
- [New object trigger](#real-time-trigger-setup-new-object)
- [New/updated object trigger](#real-time-trigger-setup-new-and-updated-object)

## Real-time trigger permissions
To use real-time triggers in Salesforce, workflow rules have to be set up in your Salesforce organization. These workflow rules require the `Customize application` permission under the Administrative Permissions tab to be setup, although the connected user does not need to be the user who sets these rules up.

![Customize application permission - profile setup](/assets/images/salesforce-docs/customize-application-permission.png)
*Customize application permission - profile setup*

## Real-time trigger setup - new object
We go through the setup for the **New object** real-time trigger below. We will be setting up a real-time trigger for new contacts in Salesforce.

1) Select the trigger in Workato. You will be prompted to connect to your Salesforce account.

![Select new object real-time trigger in Salesforce](/assets/images/salesforce-docs/select-object-for-new-trigger.png)
*Select new object real-time trigger in Salesforce*

2) Connect to Salesforce.

3) Select the specific object you wish to monitor in Salesforce. In this case, we'll select Contact.

![Select specific object to monitor in Salesforce](/assets/images/salesforce-docs/select-object-for-new-trigger.png)
*Select specific object to monitor in Salesforce*

The trigger will provide you with an endpoint URL to setup a Salesforce workflow rule with. This URL will tell Salesforce to send real-time events about newly created contacts to this Workato recipe. Copy this URL to the clipboard for use in creating the Salesforce workflow rule.

![Workato generates endpoint URL for Salesforce workflow rule](/assets/images/salesforce-docs/workato-generates-workflow-url.gif)
*Workato generates endpoint URL for Salesforce workflow rule*

This endpoint URL is unique to the Salesforce organization connected to the trigger, the Salesforce object you've selected, and the Workato recipe. You will need to regenerate this endpoint URL again if you decide to change Salesforce connection, the Salesforce object monitored, or the Workato recipe.

4) Go to your Salesforce organization and click on **Setup**. Go to *Create > Workflow & Approvals > Workflow rules* and click on **New rule** to create a new workflow rule. This will bring you into the Salesforce workflow rule setup wizard.

![In your Salesforce organization, go to Setup>Create>Workflow & Approvals>Workflow rules and click on New rule](/assets/images/salesforce-docs/navigate-to-create-new-rule.gif)
*In your Salesforce organization, go to Setup>Create>Workflow & Approvals>Workflow rules and click on New rule*

5) In step 1 of the setup wizard, select the same Salesforce object you have selected in the recipe.

![Select specific object to monitor in Salesforce](/assets/images/salesforce-docs/select-workflow-rule-object.png)
*Select specific object to monitor in Salesforce*

6) In step 2 of the setup wizard, set the workflow rule to be evaluated every time a record is created. We set the rule criteria to be `Created Date not equal to null`. Because no record will ever have a null date for the field Created Date, this ensures that the workflow rule will always be triggered when a record is created.

![Setup the Salesforce workflow rule to be evaluated when record is created](/assets/images/salesforce-docs/workflow-rule-setup-for-new-object-trigger.png)
*Setup the Salesforce workflow rule to be evaluated when record is created*

7) In step 3 of the setup wizard, add a workflow action "New outbound message". This ensures that Salesforce will always notify our Workato recipe whenever a record is created, via sending an outbound message to that recipe's endpoint URL.

![Add outbound message as the workflow action. Newly created contacts that meet the evaluation criteria will send an outbound message](/assets/images/salesforce-docs/add-outbound-message-for-new-object-trigger.png)
*Add outbound message as the workflow action. Newly created contacts that meet the evaluation criteria will send an outbound message*

8) Set up the outbound message using the endpoint URL we copied in Step 3, and save it.

![Setup outbound message using endpoint URL generated by recipe](/assets/images/salesforce-docs/setup-new-outbound-message-using-endpoint-url.png)
*Setup outbound message using endpoint URL generated by recipe*

9) Save the workflow rule and activate it.

![Activate workflow rule to start monitoring new contacts created in Salesforce](/assets/images/salesforce-docs/activating-workflow-rule-new-object-trigger.gif)
*Activate workflow rule to start monitoring new contacts created in Salesforce*

10) Return to Workato and start the recipe. To test that the recipe is working, create a new contact in your Salesforce instance. Check that the recipe picks up the trigger event immediately to verify that the workflow rule is working.

If the trigger event is indeed picked up immediately, this means that your workflow rule and Workato trigger has been set up properly. While the recipe is running, it should monitor newly created records in Salesforce and process them as trigger events immediately. If your workflow requires additional logic to filter out certain records, add trigger conditions.

## Real-time trigger setup - new and updated object
We go through the setup for the **New and updated object** real-time trigger below. We will be setting up a real-time trigger for new and updated leads in Salesforce.

1) Select the trigger in Workato. You will be prompted to connect to your Salesforce account.

![Select new or updated object real-time trigger in Salesforce](/assets/images/salesforce-docs/select-salesforce-new-updated-object-realtime-trigger.png)
*Select new and updated object real-time trigger in Salesforce*

2) Connect to Salesforce.

3) Select the specific object you wish to monitor in Salesforce. In this case, we select Lead.

![Select specific object to monitor in Salesforce](/assets/images/salesforce-docs/select-object-for-new-or-updated-trigger.png)
*Select specific object to monitor in Salesforce*

The trigger will provide you with an endpoint URL to setup a Salesforce workflow rule with. This URL will tell Salesforce to send real-time events about newly created or updated contacts to this Workato recipe. Copy this URL to the clipboard for use in creating the Salesforce workflow rule.

![Workato generates endpoint URL for Salesforce workflow rule](/assets/images/salesforce-docs/workato-generates-new-updated-workflow-url.gif)
*Workato generates endpoint URL for Salesforce workflow rule*

This endpoint URL is unique to the Salesforce organization connected to the trigger, the Salesforce object you've selected, and the Workato recipe. You will need to regenerate this endpoint URL again if you decide to change Salesforce connection, the Salesforce object monitored, or the Workato recipe.

4) Go to your Salesforce organization and click on **Setup**. Go to *Create > Workflow & Approvals > Workflow rules* and click on **New rule** to create a new workflow rule. This will bring you into the Salesforce workflow rule setup wizard.

![In your Salesforce organization, go to Setup>Create>Workflow & Approvals>Workflow rules and click on New rule](/assets/images/salesforce-docs/navigate-to-create-new-rule.gif)
*In your Salesforce organization, go to Setup>Create>Workflow & Approvals>Workflow rules and click on New rule*

5) In step 1 of the setup wizard, select the same Salesforce object you have selected in the recipe.

![Select specific object to monitor in Salesforce](/assets/images/salesforce-docs/select-workflow-rule-object-lead.png)
*Select specific object to monitor in Salesforce*

6) In step 2 of the setup wizard, set the workflow rule to be evaluated every time a record is created, and every time it's edited. We set the rule criteria to be `Created Date not equal to null`. Because no record will ever have a null date for the field Created Date, this ensures that the workflow rule will always be triggered when a record is created or updated.

![Setup the Salesforce workflow rule to be evaluated when record is created or updated](/assets/images/salesforce-docs/workflow-rule-setup-for-new-updated-object-trigger.png)
*Setup the Salesforce workflow rule to be evaluated when record is created or updated*

7) In step 3 of the setup wizard, add a workflow action "New outbound message". This ensures that Salesforce will always notify our Workato recipe whenever a record is created or updated, via sending an outbound message to that recipe's endpoint URL.

![Add outbound message as the workflow action. Newly created or updated contacts that meet the evaluation criteria will send an outbound message](/assets/images/salesforce-docs/add-outbound-message-for-new-updated-object-trigger.png)
*Add outbound message as the workflow action. Newly created or updated contacts that meet the evaluation criteria will send an outbound message*

8) Set up the outbound message using the endpoint URL we copied in Step 3, and save it.

![Setup outbound message using endpoint URL generated by recipe](/assets/images/salesforce-docs/setup-new-updated-outbound-message-using-endpoint-url.png)
*Setup outbound message using endpoint URL generated by recipe*

9) Save the workflow rule and activate it.

![Activate workflow rule to start monitoring new leads created in Salesforce](/assets/images/salesforce-docs/activating-workflow-rule-new-updated-object-trigger.gif)
*Activate workflow rule to start monitoring new leads created in Salesforce*

10) Return to Workato and start the recipe. To test that the recipe is working, update a new object record. In this case, you should update an existing lead. Check that the recipe picks up the trigger event immediately to verify that the workflow rule is working.

If the trigger event is indeed picked up immediately, this means that your workflow rule and Workato trigger has been set up properly. While the recipe is running, it should monitor newly created or updated records in Salesforce and process them as trigger events immediately. If your workflow requires additional logic to filter out certain records, add trigger conditions.
