---
title: Workato connectors - PubSub by Workato
date: 2017-09-07 14:00:00 Z
search:
    keywords: ['message', 'publish', 'subscribe', 'reuse', 'time to live', 'time-to-live', 'ttl']
---

# PubSub by Workato
The PubSub connector enables you to implement integration solutions that require an event-driven, message-oriented architecture that decouples publishers and consumers. The connector implements a messaging system with support for guaranteed and persistent delivery. This allows us to chain recipes sequentially, as a recipe can publish a message that multiple other recipes consume as a trigger to kickstart their workflow.

This connector allows us to add or modify recipes which are consumers without affecting recipes which are publishers. This enables zero downtime for the publisher recipe as we can add new consumers without impacting or requiring changes in the publisher recipe. This decoupling results in simpler recipes and reduces the time required to create, test, and maintain recipes.

## How to connect to the PubSub connector on Workato
There is no connection required to use the PubSub connector, as schemas are stored in the Workato account for recipes to interact with.

In order to work with the PubSub connector, users require access to the PubSub topics feature, which is enabled only for certain plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

## How to setup topics in PubSub
You can go to the PubSub main feature page by clicking **Tools** > **View all Tools** > **Pub/Sub**.

![Manage topics in PubSub](/assets/images/connectors/pubsub/manage-topics-empty.png)
*Manage topics in PubSub*

Here, you can view all the topics that you have created. You can use the **search topics** function to quickly locate topics by keyword.

### Creating and managing topics
In order to work with PubSub messages, you have to first create and define a topic. So publishers and consumers alike know what to expect when sending or receiving messages.

Click on **New topic** to get started.

![New topic](/assets/images/connectors/pubsub/new-topic.png)
*New topic*

When creating topics, you will need to define what the messages will look like.

| Field        | Description                                                        |
|--------------|--------------------------------------------------------------------|
| Name         | The name of your new topic. |
| Time-to-live | The number of days until the message expires. See more [here](#time-to-live-configuration). |
| Schema       | The message fields for this topic. See more [here](#topic-schema-configuration). |

#### Topic schema configuration
When creating topics, you will need to define what the message will look like. This structure can be subsequently edited.

![Defining message field](/assets/images/connectors/pubsub/add-new-field.png)
*Defining message field*

| Field     | Description                                              |
|-----------|----------------------------------------------------------|
| Name      | The name of a new message field.                         |
| Data type | Select the data type from a dropdown.                    |
| Optional  | Choose if this message field is optional. Default is No. |
| Hint      | Provide a hint for this message field.                   |

#### Time-to-live configuration
Time-to-live (TTL) is a mechanism that limits the lifespan of data on a network. All PubSub messages are configured with a lifespan (*max 90 days*). Once a message expires, it is discarded and can no longer be received by recipes.

By constraining the lifespan of your data, you ensure that your sensitive data does not circulate endlessly. This systematically phases out old messages and prevents your recipe from processing obsolete data.

> To work with static and immutable data, see [Lookup tables by Workato](/features/lookup-tables.md).

Your messages TTL are configured on a per-topic basis. This allows you to customize the message TTL of each topic according to your use-case requirements.

* **Minimum**
  * All messages will stay on the topic for at least **1 day**.
* **Maximum**
  * For all PubSub messages, the longest your message can remain on the topic is **90 days**.
  * The maximum message TTL is also limited by your data retention policy. Workato can only store messages up to the configured limit in your data retention setting.
    * If it is not configured explicitly, Workato will use the maximal plan-based value. For more information on data retention policies, click [here](/data-retention.md).
  * Each message has a 10KB size limit.

![Message ttl exceed supported time range](/assets/images/connectors/pubsub/ttl-exceed-range.png)
  *Message ttl exceed supported time range*

> Note: The maximum lifespan of a message TTL is 90 days or the user data retention limit (*whichever is lower*). Users on the *base* plan will have a maximum TTL of 30 days, while users on the *enterprise* plan will have a maximum TTL of 90 days.

## Working with the PubSub connector
After configuring your topics schema, you can now subscribe to messages using the [New message trigger](#using-the-new-message-trigger) or publish messages using the [Publish message action](#using-the-publish-message-action)

### Using the new message trigger
The new message trigger allows us to subscribe to a specific topic in Workato. Any messages published to that topic will be picked up by the trigger as a single trigger event.

![New message trigger configuration](/assets/images/connectors/pubsub/new-message-trigger.png)
*Select the topic to configure the new message trigger*

### Using the publish message action
The publish action allows us to publish messages to a specific topic in Workato. Any messages published to that topic will be picked up by the new message trigger as a single trigger event.

![Publish message action configuration](/assets/images/connectors/pubsub/publish-message-action.gif)
*Select the topic and fill in the input fields to configure the publish message action*

### Example scenario using the PubSub connector
For example, we have a recipe that creates leads in Salesforce upon receiving a WebToLead HTTP request, built to retrieve contact data from leads who filled in a form online. After creating the lead, the recipe updates an analytics database in Postgres.

![Original recipe](/assets/images/connectors/pubsub/original-pubsub-recipe.png)
*Recipe moving leads from an online form to Salesforce and PostgreSQL*

If our organization was to change databases from PostgreSQL to RedShift, and start using MailChimp as a mailing list application, we have 2 approaches we can take.

1) Modify the original recipe without using the PubSub connector

We would need to update our recipe as follows.

![Modified recipe](/assets/images/connectors/pubsub/modified-original-recipe.png)
*Modified recipe to add rows to Redshift instead of PostgreSQL and add subscribers to MailChimp*

The change to the original recipe would require additional iterations of the recipe development lifecycle, as the recipe would need to be modified, tested for backward compatibility, and pushed to production. Any bugs slipping through QA would result in downtime for the production recipe.

2) Use the PubSub connector

If we were utilizing the PubSub connector and queues, we could have built the original recipe in this way, to create a Salesforce lead before publishing the lead data to a topic. This recipe will not need to care about its consumers, and therefore it does not need to know that downstream recipes are changing from PostgreSQL to Redshift, or that there is an additional consumer writing to MailChimp.

![Publisher recipe](/assets/images/connectors/pubsub/recipe-with-publish-step.png)
*Publisher recipe that creates a lead in Salesforce and publishes lead data to a topic*

The corresponding consumer recipe that creates a Redshift row with the lead data will look as follows.

![Consumer recipe creating Redshift row](/assets/images/connectors/pubsub/consumer-recipe-creating-redshift-row.png)
*Consumer recipe that consumes the lead data from the topic and creates a Redshift row with the lead data*

The corresponding consumer recipe that creates a MailChimp lead with the lead data will look as follows.

![Consumer recipe creating MailChimp lead](/assets/images/connectors/pubsub/consumer-recipe-creating-mailchimp-lead.png)
*Consumer recipe that consumes the lead data from the topic and creates a MailChimp lead with the lead data*
