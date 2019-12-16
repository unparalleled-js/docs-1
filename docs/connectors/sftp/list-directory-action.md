---
title: Workato connectors - SFTP list directory action
date: 2019-10-15 09:00:00 Z
---

# List directory action

This action retrieves all items from a specified folder in your SFTP server. All files and subfolders in the specified path will be retrieved. However, items in the subfolders will not be retrieved.

![List directory action](~@img/connectors/sftp/list-directory-action.png)
*List directory action*

## Input

| Input field | Description                                 |
| ----------- | ------------------------------------------- |
| Directory   | Select the folder that you want to inspect. |

## Output

The output of this action is a **list of records**. with each record containing the following details:

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
| Directory    | Whether this items is a folder.                 |
