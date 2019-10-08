---
title: Job debug tracing
date: 2019-09-17 21:33:00 Z
isTocVisible: true
---

# Job debug tracing

Integration projects by its very nature are moderate to very complex involving multiple business systems. Connecting to and updating of records in cloud applications like Salesforce, Workday, Netsuite, Marketo is easy to do with an integration platform like Workato. With varied use cases like employee onboarding (HR) or quote to cash (sales ops), many business systems and cloud applications like Workday, Netsuite, ServiceNow, Salesforce and others will typically be part of the automation. This poses a challenge to developers and analysts who are building recipes but run in to errors like HTTP `404 Not Found`. Having no further information makes it difficult to debug and troubleshoot.

## Overview

The job debug tracing makes it easy to see detailed HTTP requests and responses for each action line. With details like HTTP URL, request and response headers, request payload and the response, there's a lot of detailed information for the developer and analyst to uncover the root cause of the problem.

For each action line in the recipe, job debug tracing provides
* HTTP URL to which the request was made
* HTTP request headers
* HTTP response headers
* HTTP request payload
* HTTP response

Job debug tracing is available with select plans. Please check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

## Enabling and disabling job debug tracing

To enable job debug tracing, go to `Account Settings` > `Job Settings`. Check `Enable network trace` and click `Save`.
![Enable job debug tracing](/assets/images/recipes/job-tracing/settings-job-tracing.png "Enable job debug tracing")

To disable job debug tracing, go to `Account Settings` > `Job Settings`. Uncheck `Enable network trace` and click `Save`.
![Enable job debug tracing](/assets/images/recipes/job-tracing/disable-job-tracing.png "Enable job debug tracing")


## Debug tracing privilege

By default, the debug tracing privilege is available to users with `Admin` role or users who are owner of the Workato account.

You may also assign `Debug Trace` privilege by creating a custom role. Once custom role is created, you can assign the custom role to any developer or analyst in the team. Make sure to `Save` the assignment of the privilege to the custom role.

![Assign debug tracing privilege](/assets/images/recipes/job-tracing/jobs-debug-trace-privilege.png "Assign debug tracing privilege")

![Assign custom role to user](/assets/images/recipes/job-tracing/jobs-debug-tracing-assign-custom-role.png "Assign custom role to user")

## Sensitive data

We know data security is very important to our customers. We also understand you need controls so that sensitive data is only visible to authorized users. That's why we have created two layers of control to give you maximum flexibility. 
- First, you can completely turn off debug tracing at the account level so no user can view debug trace. See the section [Enabling and disabling job debug tracing](#enabling-and-disabling-job-debug-tracing) for more details.
- Second, you can control which user has the privilege to see the debug trace data. See the section [Debug tracing privilege](#debug-tracing-privilege) for more details.

## Running job debug tracing

Typically a job in error requires further debugging. Follow the steps below to generate and view the debug trace for a recipe whose job is in error.

> **To view the debug trace, you must repeat the job.**

#### Jobs in error

In this example, the `Update incident in ServiceNow` has jobs in error.

![Jobs in error](/assets/images/recipes/job-tracing/jobs-list.png "Jobs in error")

#### Repeat job

To generate debug trace, you need to repeat the job. 

> **In the job details page for a job, click `Repeat job`.**

![Jobs detail](/assets/images/recipes/job-tracing/jobs-detail.png "Jobs detail")

## Job debug tracing example

If you have seen HTTP `404 Not Found` and wanted more details about the error, now you can with the job debug tracing. Here's an example scenario, where update to incident table in `ServiceNow` fails with the `404 Not Found` error. And how job debug tracing enables you to quickly and efficiently understand the root cause of the error by providing you more details.

#### Viewing debug trace

Once the job is repeated, the latest repeat of the job shows the debug trace in the `Debug` tab of the action line. 

![Debug trace](/assets/images/recipes/job-tracing/jobs-debug-collapsed.png "Debug trace")

![Debug trace](/assets/images/recipes/job-tracing/jobs-debug-collapsed2.png "Debug trace")

Click on the HTTP request line to expand and get more information on the request.

#### HTTP Headers, Request and Response

To view headers sent as part of the request, click on the `Headers` tab.

![Request headers](/assets/images/recipes/job-tracing/jobs-debug-headers.png "Request headers")

![Request headers](/assets/images/recipes/job-tracing/jobs-debug-headers2.png "Request headers")

The `Payload` tab shows the request payload sent with the request.

![Request payload](/assets/images/recipes/job-tracing/jobs-debug-trace-request.png "Request payload")

To see the response returned by the HTTP request, click on `Response` tab.

![Response](/assets/images/recipes/job-tracing/jobs-debug-trace-response.png "Response")

## FAQ

**_How long is the tracing data available for?_**

Tracing data is available for 1 day from the time it was generated by repeating a job. If you want to access the data after 1 day, you can repeat the job to generate the debug tracing.

_**List of connectors not supported**_
- Active Directory
- ADP
- Ariba
- AWS Cognito
- AWS SNS
- Email
- Etapestry
- Expensify
- FTP
- Google Drive
- JDBC
- JMS
- Kafka
- MSSQL
- MYSQL
- Netsuite
- On-prem Files
- Oracle
- Oracle Fusion
- Redshift
- Salesforce Marketing Cloud
- SFTP
- SMS
- Snowflake
- SOAP
