---
title: Planning for lifecycle management
date: 2019-08-28 15:00:00 Z
---

# Planning for lifecycle management

Before starting to use lifecycle management in Workato, it is recommended that you spend some time thinking about and documenting the process you want to use. If you have already done so, you may move on to our next chapters:

- **Planning for lifecycle management** _(current)_
- [Exporting: Packaging recipes and dependencies](/recipe-development-lifecycle/export.md)
- [Importing: Deployment](/recipe-development-lifecycle/import.md)
- [Working with external source control systems](/recipe-development-lifecycle/rdlc-guide-source-control.md)

## Defining environments, promotion criteria, and responsibilities

This planning process for lifecycle management is recommended to include:

- Defining the software lifecycle stages
- Identifying how many different teams you need to support
- Identifying individual roles/responsibilities (e.g. who manages a team, who develops, tests or deploys, and who should be responsible for moving assets between stages)

You should document the criteria for moving recipes across stages: for example, what tests must be run before promotion. Your organization may already have standards in some of these areas, but these may have to be adapted to the terminology and features used in the Workato environment.

An example of a typical software lifecycle includes the use of 3 environments: a development, staging (QA), and a live production environment.

![Environments](~@img/features/packages/environments.png)
*Set up with dev, test and production environments*

## Using team features
Workato’s [Teams and collaboration](/user-accounts-and-teams/team-collaboration.md) features are designed to give organizations the ability to do development within a shared workspace and also to provide the ability to have oversight and monitoring of development.

A Team owner can organize a team and invite other members, and set their roles and permissions. In Workato, a single account manages a single Team. Within a Team, users can see other users’ recipes (if given permission to do so) and the Team owner can view recipes across the team.

Once a user has been invited to and joined a team, that user will have both an individual and a Team account. It is recommended that the Team account be used for development work.

Teams can optionally be configured to use [SAML-based Single-Sign On](/user-accounts-and-teams/single-sign-on.md). It is recommended that this be enabled if possible, so that users can login using their standard corporate accounts, and so that uniform login policies can be applied from the SAML identity provider (a directory system).

## Organizing accounts
Each development lifecycle stage should take place within a different Workato account, usually a Team account with multiple users. The simplest organization of accounts is just to have one team account per stage.

### Multiple teams
When there are a large number of recipes in use, or when multiple distinct departments or groups work on recipes within a single stage (for example: each department does its own development), then there are a couple of ways to segment accounts further. One is to use distinct accounts for each group + stage. For example, like this:

![Teams and departments](~@img/features/packages/team-departments.png)
*A team account is created for each department*

### Multiple folders
Another possibility is to segment one or more of the Team accounts so that different users access different folders, like this:

![RLM in tools gif](~@img/features/packages/teams-folders.png)
*Folders are created in each environment for distinct departments*

This can be convenient, but may complicate role management, for reasons described in the next section.

## Role management

Firstly, have the team owner create a new Team and invite other users. While only one account can be owner, it is possible to add other users who have an Administrator role, and these users effectively have the same permissions as the owner. However, most team members should not have the Administrator role, but a more limited role.

For simplicity, it is recommended that team members be given one of the standard roles such as Analyst if possible. But, if it is desired to segment the team so that some team members have access to only some folders, while other team members access different folders, or if non-Administrator team members need Import or Export privileges, then you will need to define and use a custom role for those team members. Only a custom role can restrict access to folders, and currently default non-Administrator roles can’t import or export (this may change).

Another reason to consider using [custom roles](/user-accounts-and-teams/team-collaboration.md#custom-roles) is to more finely segment the actions that users can perform. For example, some users might be empowered to create and manage connections to applications, while others are able to use the connections but not change them.

## Folders
It is also worth thinking about how recipes should be organized into folders, and what naming conventions should be used for this. As mentioned earlier, you may want to use folders together with custom roles so that members within a Team account can be assigned responsibility for recipes within a particular folder or folders.

![Folders](~@img/features/packages/recipes-folders.png)
*Example of recipes in a folder*

You should try to avoid having a large number of recipes all placed in the root (Home) folder, which is the default location. Workato recommends that if you have more than 5-10 recipes, these should be organized into folders, and that each folder should also be restricted to a small manageable number (10 or so maximum) of related recipes.

Folders are also the unit that is used for import and export of assets, so recipes and related objects such as connections should be placed together in a folder if they are to be migrated across accounts together.

If you are planning to move assets across accounts, for example from development to test, you might want to establish a rule that the folder names and structure are the same in the accounts for different stages, although this is not required by Workato.

## Connections
Connections can be scoped into folders in Workato. By default, their scope is the Home folder. However, when preparing to use Lifecycle Management, you may want to associate the connections required by the recipes in a folder you plan to export to that folder.

This can be done by visiting the App Connections tab and dragging the corresponding connection(s) into a folder shown on the left-hand side of the page. This will help organize your connections and ensure that the correct connections are used for each exported folder.

![App connections](~@img/features/packages/app-connections.png)
*App connections can be organized and managed by folders*

Assigning connections to folders also makes it possible to restrict access to connections by team members. Only those connections in folders to which a team member has access will be visible and usable by that member.
