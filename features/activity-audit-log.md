---
title: Activity audit log
date: 2019-09-16 19:00:00 Z
---

# Activity audit log

Integration projects, big or small, need administration, management and lifecycle capabilities from the integration platform. Your [team](/user-accounts-and-teams/team-collaboration.md) is likely to have multiple team members collaborating on the integration project. Your team may also include employees, short-term contractors and consultants. This makes it necessary for you to provide access to the Workato account to build, change and operate the recipes.

As team size and complexity grows around the project, it becomes increasingly important to have control and visibility on the activities within your Workato workspace.

## Overview

Activity audit provides a simple and powerful interface for Workato administrators to comprehensively track changes to  the account, connections, recipes, folders and packages. Throughout the lifecycle of your project, it gives you the visibility to quickly identify the changes and opportunity to analyze the impact of those changes.
* Comprehensive log of changes made to account, connection, folder, recipe and package
* Track nature of change (for example, recipe stopped), author, and timeline
* Quickly navigate to specific change activity using filters

Activity audit is available with select plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

## Viewing activity audit

The activity audit log is available in the `Dashboard` > `Audit` tab. With the activity audit log, you will be able to find out which user in the team stopped a business-critical recipe or disconnected a connection. You'll also be able to find out when the recipe was stopped or connection was disconnected.

Activity audit log is visible to owner of the account and the users with `Admin` role.

## Types of activity audit

| Asset | Activity | Example |
| ----- | -------- | ------- |
| **Account** | | |
| | User login | User login |
| | User logout | User logout |
| | Password changed | User Nick Santer updated password. |
| | Delegated admin removed | User Nick Santer removed a delegated admin Markus. |
| | Delegated admin added | User Barry added a delegated admin Clark. |
| | Invite created | User Bryan Yap invited Markus to join team as an Analyst. |
| | Invite accepted | User Samuel Seetoh joined team as an Admin. |
| | Invite modified | User David Lester modified role to Analyst invitation for Jake Kline to team. |
| | Member deleted | User Jack Smith removed user Matt Berg from team. |
| | Member updated | User Deven Maru updated role to Analyst for Zack Chew in team. |
| **Recipe** | | |
| | Started | Recipe Offboarding for employees set for termination in Workday was started. |
| | Stopped | Response From Hire Right -> Update SNOW was stopped. |
| | Created | Recipe Employee Day 1 on boarding was created. |
| | Deleted | Recipe New/updated record will log message to output was deleted. |
| **Connection** | | |
| | Connected | Connection ServiceNow was connected. |
| | Disconnected | Connection Greenhouse Sandbox was disconnected. |
| | Created | Connection HR Amazon S3 was created. |
| | Deleted | Connection Salesforce Prod account was deleted. |
| **Folder** | | |
| | Created | Folder Home/Alerts was created. |
| | Deleted | Folder Home/Alerts/Lead management was deleted. |
| **Package** | | |
| | Exported | User Gabriel Sim exported package ai-document-understanding.zip. |
| | Imported | User Bryan Yap imported package listevents.zip. |

## Activity audit logs in more detail

Imagine an unplanned stoppage of a business critical recipe syncing product SKU data between your ERP like NetSuite or SAP and e-commerce app; or an update to Salesforce connection settings rendering it inactive; or someone inadvertently deleting a employee onboarding recipe connecting to Workday, a connection, or a folder. As an administrator, would you like to know if user login has failed? And how many times? Below are some examples where you will find the audit of activities that provide just the answers to the scenarios outlined above.

#### Recipe stopped by user

![Recipe stopped](/assets/images/activity-audit/recipe-stopped-user.png "Recipe stopped by user")

#### Connection disconnected by user

![Connection disconnected](/assets/images/activity-audit/connection-disconnected-user.png "Connected disconnected by user")

#### Folder created

![Folder created](/assets/images/activity-audit/folder-created.png "Folder created")

#### Folder deleted

![Folder deleted](/assets/images/activity-audit/folder-deleted.png "Folder deleted")

#### User login

![User login](/assets/images/activity-audit/user-login.png "User login")

#### User login failed

![User login failed](/assets/images/activity-audit/user-login-failed.png "User login failed")

#### Invite team member

![Invite team member](/assets/images/activity-audit/team-invited-user.png "Invite team member")

#### Team member joined

![Team member joined](/assets/images/activity-audit/team-joined-user.png "Team member joined")

#### Using filters

Find information quickly and efficiently using time-based, user-based and Workato asset-based filters.

Filtering by time lets you see the activity audit for certain time period like last 7 days or 30 days and more.

![Time filter](/assets/images/activity-audit/filter-time.png "Filter by time period")

In this example, simply select the user to find all the activities by that user in the Workato workspace.

![User filter](/assets/images/activity-audit/filter-user.png "User filter")

Similarly, find all the activities by any user on all recipes in the workspace using the asset filter.

![Asset filter](/assets/images/activity-audit/filter-asset.png "Filter by asset type")
