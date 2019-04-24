---
title: Recipe lifecycle management export
date: 2019-04-18 15:00:00 Z
---

# Export
## Export manifests
To begin exporting a package, start by defining an export manifest. A manifest is a record of all the selected recipes and dependencies that users can use for export and re-export. The manifest can also be edited after the creation and first export.

Reuse a defined manifest if the recipes have been iterated on and the same set of objects have to be exported.

Edit the manifest if new assets have been added to the folder that are needed for export or remove those that are no longer relevant. You can also edit the manifest if some recipes in the folder were not edited and need to be excluded from an export.

> :loudspeaker: If you had export logs before the UX update on 25th April 2019, all exports that were done will be logged in auto-created manifests depending on the **export folder**

## Create a manifest
Example of the manifest to be created:
- Only 10 out of 30 recipes in the ‘Marketing’ folder need to be exported
- Exclude exporting the connections the 10 recipes use
- Include only 2 of the lookup tables related to those 10 recipes

To begin, give the manifest a name so users can identify the content and select the source folder.
![RLM in tools gif](/assets/images/features/packages/name-manifest.png)
*Begin by providing the manifest name and source folder*

The wizard will then display the recipes in the folder and all the dependencies related to those recipes. All assets within its subfolders are also displayed here. The assets in the folder and its sub-folders are selected by default.

![Marketing manifest](/assets/images/features/packages/manifest.png)
*Example manifest with recipes and dependencies*

On this screen, select/deselect the assets that you wish to export. All associated connections, custom connectors, lookup tables and callable recipes will also be shown on this page along with all account properties in the Workato account.

Note that users cannot add assets that are in **different folders** to a single manifest. If there are recipes that [call other recipes](/features/callable-recipes.md), please put all the related recipes in 1 folder.

When assets are not in the folder, the wizard will display a warning (as shown below). In this case, if the connection needs to be included as a part of the package, you should go to the App Connections page and move the connection to the right folder. Orange warning messages can be safely ignored if you wish to proceed with the export without dependent assets.

![Connection in diff folder](/assets/images/features/packages/dependent-asset-not-found.png)
*A warning will appear if the connection is in a different folder*

As dependencies related to the asset is deselected, a similar orange warning will appear on the recipe to inform the user that a dependency will be missing from the final exported folder. By expanding each recipe line, users can re-select the asset with a click of a button. If the dependency is unnecessary for export, this warning can be **safely ignored**.

![Connection in diff folder](/assets/images/features/packages/deselect-object.gif)
*As objects are deselected, warnings appear*

If connections are shared across accounts, we recommend that the connections are placed in the 'Home' folder so they can be exported irregardless of the selected folder.

Choose to export the data in lookup tables by individual lookup tables. On the right of the lookup tables, select ‘Include data’ or ‘Ignore data’. This option default to ‘Ignore data’, which exports the table with the headers only. Choose ‘include data’ to export the data in each row in the package.

![Connection in diff folder](/assets/images/features/packages/lookup-properties.png)
*'Ignore data' or 'Include data' on each lookup table*

Finally, save the manifest. The same configuration of recipes and assets can now be used during multiple exports. To reuse the existing manifest, find the manifest in the main export tab and click on it to access its content.

## Export a manifest as a package

After creating a manifest, export the manifest as a package by clicking on the ‘Build and export package’ button on the top right of the screen.

Clicking on the button will begin the process of creating a .zip file package and open a pop-up with the export status. Once the .zip file completes building, you can download it.

![Download package](/assets/images/features/packages/download-package.gif)
*As objects are deselected, warnings appear*

All exports are saved in the ‘Export history’ tab of the manifest. Click the ‘Download zip file’ button on the last column in the history table to re-download that version of the package. The version of the package is saved at the point of export. The package will persist for as long as the [data retention](/data-retention.md) period on that account. Check the [Account settings](https://www.workato.com/users/current/edit#data_retention) tab to find the data retention period of your account.

![Export history](/assets/images/features/packages/export-history.png)
*All past exports of this manifest is saved in the export history tab*

## Returning to an existing manifest
After the continued development of recipes in the same folder, users may want to returning to an existing manifest to re-export the content. During that time, one or more of the following may have occurred:

- Assets were deleted
- Assets were moved to a different folder/sub-folder
- Assets were renamed
- Assets were edited
- Assets were added

### Deleted, moved, renamed assets
To maintain cross-compatibility and synchronization across Workato instances, a series of automatic checks will take place before a manifest can be exported. If assets were deleted, moved or renamed, the manifest structure will have changed from its previous configuration and will thus be highlighted to the user.

In order to continue with the export process, the user must review the manifest and **remove deleted files** or accept changes.

![Connection in diff folder](/assets/images/features/packages/missing-connection.png)
*As objects are deselected, warnings appear*

### Edited assets
If assets were edited (eg. recipe action/mapping changes, additions to a lookup table), they will be highlighted as changes in the manifest with a blue tag.

All edits that do not affect the manifest structure can be ignored and the user can proceed to build the package by clicking on ‘Ignore and build package’. The package will be downloaded with the same manifest content with the latest changes.

![Connection in diff folder](/assets/images/features/packages/new-changed-asset.png)
*Example of an edited recipe and a new recipe*

### New assets
If a new recipe or dependency is added to the folder, it will be highlighted with a green (+) sign as shown in the image above. To add this new object to the manifest, select the checkbox and save the manifest. The new additions will be saved as the latest manifest version.
