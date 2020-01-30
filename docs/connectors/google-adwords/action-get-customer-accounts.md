---
title: Workato connectors - Google AdWords Action - Get customer accounts
date: 2020-01-29 06:00:00 Z
---

# Google Ads action - Get customer accounts
This action retrieves all customer accounts managed by the Manager account defined in the Google Ads connection.

## Input fields

| Field name | Description |
|---|---|
| User agent | The name of the application to log this request. This defaults to Workato if nothing is specified. |
| Fields | Attributes of the customer accounts to retrieve |
| Validate only | To validate user-provided data. Often not configured. |
| Partial failure | All operations that are free of errors are performed and failing operations have their errors returned. This header is ignored for non-mutate operations. Often not configured. |


## Output fields

| Field name | Description |
|---|---|
| Accounts | A list of customer accounts managed by the AdWords connection. |
