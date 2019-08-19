---
title: Admin Dashboard
date: 2018-03-22 16:00:00 Z
---

# Workato Dashboard

The Workato Dashboard allows users to visualize real-time data pertaining to the recipes and connections in their Workato account at a glance.

Recipe jobs can directly correlate to business metrics: For example, the number of new customers that are added to your CRM daily or the number of invoices that were processed that month. The Workato Dashboard allows users to see trends across time and find outliers that directly impact your businesses.

Additionally, it enables users to obtain a snapshot of the account's recipe issues and tackle them more efficiently. Alongside error notification emails, the dashboard goes a step further and helps target the issues that matter— Obtain a big picture view of recipe health, then drill down to the details of particular issues that stand out without going through individual recipes.

This guide will enable users to use the Workato Dashboard to the fullest and obtain the most accurate insights possible.

## Usage dashboard

![Workato Dashboard](/assets/images/features/admin-dashboard/dashboard-default.png)
*Workato Dashboard*

The main preview consists of:
- A **Jobs graph** for a big picture view of recipe health
- A **Recipe details table** for a detailed breakdown by recipe

Aside from the main preview of your recipes and jobs (left), there is a small snippet (right) containing information about your active connections.

### Jobs graph
This gives users an overview of their recipes' health in a given timeframe. This snapshot is dynamic and will morph according to the filter parameters that you define. Use the filter tools to modify the **Jobs graph** to show information about key folders/recipes.

For example, we can filter for **all active recipes** in the **Admin** folder that transpired in the **first half of 2019**

![Jobs Graph](/assets/images/features/admin-dashboard/jobs-graph.png)
*Jobs Graph*

#### Date, status, & folder filters
Workato Dashboard allows you to customize your filters by Date, Recipe status, and Folders. By default, the filters are set to `Last 7 days`, `All recipes` and `All folders`.

| Date filter | Recipe Status filter | Folder filter |
| -- | -- | -- |
| Select the timeframe that you want to observe.  | Filter your jobs by recipe status. | Get more insights by diving into folders and sub-folders.  |
| Use one of the dropdown selections or define a custom range. The default is set at `7 days`. | Select from `All recipes` (default), `Recipe with errors` and `Active recipes`. | Select the folder you want to examine or default to the `Home` folder. |

To define a custom date range, select **Pick a date range** from the date filter. Fill in the start date and end date in the `mm/dd/yy` format. You can use the calendar picker for convenience. There is no limit on the number of days that can be selected.

### Recipe details table
This section further dissects the jobs graph by individual recipes. It displays key information like **successful jobs**, **failed jobs**, and a description of the **latest job**.

![Recipe details table](/assets/images/features/admin-dashboard/recipe-details-table.png)
*Recipe details table*

Click on the relevant cells to find out more. For example, find out more about the **Failed jobs** by click on `13 Failed`. This will bring you to the corresponding [recipe page](/recipes/jobs.md).

The filter feature allows you to rearrange the list by different priorities.
- Choose `Recipe status` to see easily view inactive recipes.
- Choose `Successful job count` to view the recipes with the highest traffic.
- Choose `Recent job` to view the most recent job.
- Choose `Failed job count` to identify the recipes that require troubleshooting. This is the default selection.

### Connection overview

This section provides a quick peak at the connections currently available on this Workato account.

| Feature | Description |
| -- | -- |
| App connections | The total number of active connections. This refers to connections that are currently used in a recipe. |
| OPA | The total number of On-Prem Agents on this account. |
| Accounts connected | A list of accounts that were recently connected. |
| Accounts disconnected | A list of accounts that were recently disconnected. |
