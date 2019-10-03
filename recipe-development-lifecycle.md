---
title: Recipe development lifecycle
date: 2017-05-31 15:00:00 Z
---

# Recipe lifecycle management

Organizations typically plan, develop, test and deploy new integrations with a recipe development lifecycle. This may involve moving recipes from a development environment to a testing environment, or from a testing environment to a production/deployment environment.

Recipe lifecycle management is one of the features that enables teams to collaborate concurrently in a planned and controlled recipe development effort. This tool allows the export and import of packages which contain recipes and their dependencies (lookup tables, message templates etc.). This allows teams to maintain their integration recipes across their different teams' environments.

## Packages

Users can export and import their recipes as packages. Here's a list of assets that can be exported in a package:
- Recipes in a chosen folder
- Sub-folders and recipes in those sub-folders
- Associated connections
- Associated custom connectors (SDK connectors)
- Associated callable recipes
- Associated lookup tables
- Associated shared schemas
- Associated message templates
- Associated account properties

The import and export of packages are useful when teams are collaborating across different Workato accounts, for example, if the development team wishes to move recipes over to the QA team's Workato account, or to the production Workato account. Consultants can also utilize this feature to move comprehensive integrations into their clients' accounts.

The Recipe lifecycle management feature is enabled only for certain Workato plans. Check the [Pricing and plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

For Workato accounts with the Recipe lifecycle management feature enabled, users will be able to see the option when they click on Tools > All Tools > Recipe Lifecycle Management.

![RLM in tools gif](/assets/images/features/packages/navigate-to-recipelifecycle.gif)
*Recipe lifecycle management in Tools*

## Process walkthrough

Learn more about the process of using the recipe lifecycle management feature in the following documents:

- [Planning for lifecycle management]((/recipe-development-lifecycle/rdlc-guide-planning.md))
- [Exporting: Packaging recipes and dependencies](/recipe-development-lifecycle/export.md)
- [Importing: Deployment](/recipe-development-lifecycle/recipe-development-lifecycle/import.md)
- [Working with external source control systems](/recipe-development-lifecycle/rdlc-guide-source-control.md)
- Automated testing (Coming soon)

## Recipe lifecycle management automation

To automate the import and export of packages, users can make use of [Recipe lifecycle management APIs](workato-api/recipe-lifecycle-management.md).
