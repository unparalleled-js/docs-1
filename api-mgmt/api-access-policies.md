---
title: API Access Policies
date: 2018-02-02 18:26:00 Z
---
# API Access Policies

Access policies enable control over the client's usage of APIs. Note that
creating an access policy is optional. If no policy is associated with a client, then no API usage limits apply. However, Workato may impose some limits in the future.

The API platform is accessible from the Tools menu. Once in the main API platform screen, select the **Policies** tab to create and manage API access policies. A typical screen would look like this:

![Create API Policy](/assets/images/api-mgmt/api-policy-create.png)
*Create API Policy*

This screen allows setting two different types of policies. Both are required.

| Policy type | Description |
| --- | --- |
| Rate limit policy | Restricts the number of API calls that can be made within a specified short time period, such as a minute.|
| Request limit policy | Restricts the number of API calls that can be made within a longer time period, such as 30 days. |

These limits can help prevent overuse of an API by a single client, which could result in degraded performance for the community of API users.
