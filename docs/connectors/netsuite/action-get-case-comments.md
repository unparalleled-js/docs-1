---
title: Workato connectors - NetSuite - Upsert records in bulk
date: 2019-02-15 06:00:00 Z
---

# NetSuite Action - Get case comments

The action `Get case comments` allows you to retrieve the case comments of a specific case in NetSuite by its case ID.

![Get case comments](~@img/connectors/netsuite/case-comments.png)

## Input fields

| Field name | Description |
|---|---|
| Case ID | The Netsuite case's ID |
| Results list page size | The number of records to return. Maximum 200 and default is 25 |
| Search ID | Returned from a previous "Get case comments" action |
| Page number| Used in conjunction with Search ID to page through results |

## Output fields

| Field name | Description |
|---|---|
| Search ID | Used in a downstream "Get case comments" action to page through results |
| Page number | Used in a downstream "Get case comments" action to page through results |
| Total pages | Total pages of results in the search |
| Messages | An array of cases |

## How to page through results to retrieve all case comments.
Using the foreach loop in Workato, you can easily page through all case comments and back them up into a database for storage. Check out [this sample recipe](https://www.workato.com/recipes/1084569?st=517170) for more details.
