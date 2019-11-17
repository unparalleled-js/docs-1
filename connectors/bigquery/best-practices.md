---
title: Workato connectors - BigQuery Best practices
date: 2019-11-14 06:10:00 Z
---

# BigQuery - Integration best practices

BigQuery is a great tool to power data analytics for teams. Workato can supplement these efforts by allowing teams to set up data pipelines into BigQuery. Below, we go through an example of how you can use BigQuery in Workato to power your lead scoring and attribution efforts.

## Use case: Lead scoring in BigQuery creates leads in Salesforce
With various marketing channels available, marketing and sales teams need to ensure that their efforts are aligned by ensuring the most appropriate leads are surfaced to sales to drive conversion.

### Integration flow
![Lead scoring flow](/assets/images/bigquery/integration-use-case.png)
*Lead data from Marketing channels into databases and warehouses before entering CRM apps*

### Step 1: Extracting lead data from Marketing applications
Workato makes it easy for marketers of any technical level to extract lead data and pump them directly into databases. This practice is great for backing up your marketing data in real time and also performing any potential data enrichment such as running your lead data through Clearbit.

![Back up data from EventBrite to SQL server](/assets/images/bigquery/recipe-1.png)

In the recipe above, new event attendees in EventBrite are sent over to SQL server to be backed up. In cases where data is incomplete from EventBrite, contact data can be enriched by ClearBit before being sent over.

### Step 2: Extracting data from database into BigQuery
After backing up lead data in SQL server, this data can then be sent over to BigQuery.

> BigQuery currently has "write" limitations of 1000 operations per table per day. Inserting lead data individually is not advised as this cause rate limits to be exceeded.

![Back up data from EventBrite to SQL server](/assets/images/bigquery/recipe-2.png)

New rows in the EventBrite table in SQL server can be sent in large batches over to Google BigQuery. In our case, we've created a BigQuery table specifically for EventBrite leads.

### Step 3: Performing analytics on lead data
As data from leads from various marketing channels into BigQuery, a recipe can be set up to perform periodic queries on this data. These queries can often be used to cross reference lead touchpoints across various platforms and channels. As data scientists find trends in correlation between conversion and touchpoints across various channels, this can be used to create queries that power your lead scoring capabilities directly in BigQuery.

We always suggest writing this data into another table in BigQuery. This table would have all the data needed for downstream CRM tools that can ingest this data.

For example, lead data from Marketo can be joined with data from EventBrite to understand how many events this particular lead has attended. If a positive correlation can be made between conversion rates of leads from Marketo and the number of events they attended on EventBrite, this could be an important factor that influences contact scoring.

![Query is run every interval](/assets/images/bigquery/recipe-3.png)

In the recipe above, it has been set up to query data in existing tables in BigQuery every 30 minutes. This processed lead data would then be written into a new BigQuery table.

### Step 4: Sending processed lead data into Salesforce
After this data is written into a table in BigQuery, our `New Rows` batch trigger in Workato can pick these new records up and send them into a downstream CRM tool like Salesforce.

> When setting up your table with processed leads, creating a composite key that is distinct in the table is required to make sure the `New Rows` batch trigger works properly. In the context of leads, a distinct composite key could be created from a lead's email as well as the latest updated_at timestamp.

![New rows in BigQuery send leads in batches to Salesforce](/assets/images/bigquery/recipe-4.png)

In the recipe above, new processed leads in BigQuery can be sent over to Salesforce in batches. The `New Rows` batch trigger in BigQuery polls for new rows every 5 minutes and ensures that a steady stream of leads is supplied to Salesforce.
