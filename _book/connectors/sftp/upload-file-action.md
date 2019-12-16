---
title: Workato connectors - SFTP upload file action
date: 2019-10-15 09:00:00 Z
---

# Upload file action

This action creates new files and updates existing ones.

You can use this action with the [create folder](create-folder-action.md) action to upload files into a new folder.

![Upload file action](/assets/images/connectors/sftp/upload-file-action.png)
*Upload file action*

## Input

| Input field   | Description |
| ------------- | ----------- |
| File name     | Define the path to your new file, including the file name and file type. |
| Append        | If there is an existing file with the same path, select `Yes` to append contents to the end of the file. Otherwise, select `No` to overwrite the file. |
| File contents | Drag and drop a datapill. You can also manaully input raw data (e.g. CSV lines). |

## Output

There is no output for this action. To retrieve details about the file you've just created or updated, use the [Get file information](/connectors/sftp/get-file-information-action.md) action.
