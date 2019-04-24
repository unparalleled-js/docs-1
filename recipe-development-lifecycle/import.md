---
title: Recipe development lifecycle
date: 2017-05-31 15:00:00 Z
---

# Import

To import recipes and dependencies into a Workato instance, you will need a zip file containing [exported](/recipe-development-lifecycle/export.md) assets.

After exporting a package as a zip file, import the file into another Workato instance. From the main recipe development lifecycle page, click on the ‘Import’ tab to begin.

> :loudspeaker: If you had import logs before the UX update on {date}, all imports that were done will be logged in auto-created import target folders depending on the target folder.

Start the import process by selecting an import target folder. If the folder is not shown in the list of import target folders, click on ‘Import package to new folder’.

Select the .zip file to import from the computer as well as the target folder. The wizard will begin reading the package and loading its contents. It will also compare the corresponding recipes and dependencies in the account and look for changes.

There are 3 general tags that will inform the user of import status:

- A new recipe/dependency will be added (New)
- The recipe/dependency was not changed or updated

  If there are no detected changes, the asset will be tagged with a **‘No change’** tag and it will not be stopped (for running recipes) or updated.

- The current recipe/dependency will be overwritten


### Unique tags for recipes, connections and lookup tables:

#### Recipes:
![RLM in tools gif](/assets/images/features/packages/name-manifest.png)
*All possible status tags for recipes*

A running recipe may be overwritten. The recipes will be stopped, updated and then automatically restarted.

#### Connections:
A placeholder connection may be created. This placeholder contains only the application and name of the connection. Authentication to this placeholder is required.

#### Lookup tables:
Lookup tables in the zip file will always contain schema data (name and column names) but may or may not contain data. During import, users can specify if the table data should be or overwritten or ignored.

If the lookup table contains no data, it will be created/updated with only column names. If the lookup table contains data, use the radio buttons to select if the data should be overwritten or ignored.

![RLM in tools gif](/assets/images/features/packages/import-lookup.png)
*'Import data' or 'Ignore data' on individual lookup tables to be imported*

‘Overwrite’ will cause all table data to be overwritten and all data in the table to be replaced permanently. ‘Ignore’ will disregard all table data even though the table was exported with data.

### Updating a running recipe
A running recipe may be overwritten. The recipes will be stopped, updated and then automatically restarted.

![RLM in tools gif](/assets/images/features/packages/rerun-running.png)
*Running recipes will be automatically stopped and then restarted*

If there are running recipes that need to be updated, a warning will appear after the review process. Acknowledge that the recipes with triggers that are subscribed to webhooks may miss events in the time that it takes for the recipe to be updated and that recipes with pending jobs cannot be stopped.

As a best practice, it is recommended that the recipes to be updated are stopped manually before the import process.

The list of stopped recipes are temporarily stored and will be automatically restarted after the import process is complete. Any errors with restarting the recipes have to be fixed manually. Once the process is completed, the new/updated recipes and dependencies should be successfully imported and restarted.


## Packages import behavior
The following table details how an imported package's assets are moved into your Workato account.

| Dependency type | What Workato does when package is imported                                                                                                                                                   | Location        |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| Recipes         | **Overwrites** recipe if a recipe with the same name exists in the folder. <br> **Creates** new recipe if no recipe with the same name exists in the folder.                                               | Selected folder |
| Custom connectors  | Overwrites existing custom connector if connector with same name already exists in the Workato account. Creates new connector if no connector with the same name exists in the Workato account. | Connector SDK       |
| Connections     | Creates a connection placeholder. The user should connect the application after importing. Nothing is done if a connection with the same name already exists.                                                               | App Connections     |
| Lookup tables   | Creates a lookup table with the header rows. Imports the lookup table data if selected during export and import.                                                                                         | Lookup table    |
| Properties      | Adds properties to existing properties in the Workato account. Does nothing if a property with the same name already exists.                                                                  | Account Properties      |
| Common data models   | Adds the schema to existing shared schemas in the Workato account or updates it if a schema with the same name already exists.     | Common data models |
| Message templates | Adds the message template to existing templates in the Workato account or updates it if a template with the same name already exists. | Message templates |
