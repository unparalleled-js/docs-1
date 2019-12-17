---
title: Workato connectors - SFTP new/updated file in directory trigger
date: 2019-10-15 09:00:00 Z
---

# New/updated file in directory trigger

This triggers picks up new or updated files in a specified folder. New and updated files in subfolders will also be picked up.

![New/updated file in directory trigger](/assets/images/connectors/sftp/updated-file-trigger.png)
*New/updated file in directory trigger*

## Input

| Input field | Description |
| ----------- | ----------- |
| Directory   | Select the folder that you want to track. You can choose from the dropdown menu or enter the folder path directly. |
| When first started, this recipe should pick up events from | Files created or updated after this time will be processed by the recipe. If left blank, the default date will be set to **1 hour** before the recipe is first started. |

## Output

| Output field | Description                                     |
| ------------ | ----------------------------------------------- |
| File name    | The file path.                                  |
| Name         | The name of the file.                           |
| Symlink      | Whether this file contain links to other files. |
| Size         | The size of the file.                           |
| Owner        | The designated owner of the file.               |
| Group        | The group that this file belongs to.            |
| Permissions  | The permissions enabled on this file.           |
| Last accessed time | The last time this file was accessed.     |
