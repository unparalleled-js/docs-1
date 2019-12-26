---
title: Workato connectors - SFTP download file action
date: 2019-10-15 09:00:00 Z
---

# Download file action

This action downloads a file from your SFTP server. This cannot be used to download entire folders.

The file contents will be downloaded in binary mode and can be used in subsequent recipe steps.

The size limit for this action is `70MB`. For files larger than `70MB`, use the [Download large file](/connectors/sftp/download-large-file-action.md) action instead.

![Download file action](/assets/images/connectors/sftp/download-file-action.png)
*Download file action*

## Input

| Input field | Description                                                          |
| ----------- | -------------------------------------------------------------------- |
| File path   | Define the path to your file, including the file name and file type. |

## Output

| Output field      | Description                    |
| ----------------- | ------------------------------ |
| File content      | The contents of the file.      |
| Detected encoding | The encoding of the file.      |
