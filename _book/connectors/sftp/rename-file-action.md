---
title: Workato connectors - SFTP rename file action
date: 2019-10-15 09:00:00 Z
---

# Rename file action

This action changes the file path of an existing file. You can use this to rename a file or to move files across folders.

This action modifies an existing file on your SFTP server. If the file path provided is invalid, the job will fail.

![Upload file action](/assets/images/connectors/sftp/rename-file-action.png)
*Upload file action*

## Input

| Input field       | Description |
| ----------------- | ----------- |
| Existing filename | Provide the file path to your existing file, including the file name and file type. |
| New filename      | Provide the new file path. Ensure that the file paths are valid, otherwise, it will result in an error. |

## Output

There is no output for this action. To retrieve details about the file you've just renamed or moved, use the [Get file information](/connectors/sftp/get-file-information-action.md) action.
