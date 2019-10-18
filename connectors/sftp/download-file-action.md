---
title: Workato connectors - SFTP download file action
date: 2019-10-15 09:00:00 Z
---

# Download file action

This action downloads a file from your SFTP server. The file contents can be used in subsequent recipe steps. This action cannot be used to download entire folders. 

The size limit for this action is 70MB. The file will be downloaded in binary mode.

![Download file action](/assets/images/connectors/sftp/download-file-action.png)
*Download file action*

## Input

| Input field | Description                                                          |
| ----------- | -------------------------------------------------------------------- |
| File path   | Define the path to your file, including the file name and file type. |

## Output

The output of this action is a **list of entries**. Each entry contains the following datapills:

| Output field      | Description               |
| ----------------- | ------------------------- |
| File content      | The contents of the file. |
| Detected encoding | The encoding of the file. |
