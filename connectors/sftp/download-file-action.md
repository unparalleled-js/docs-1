---
title: Workato connectors - SFTP download file action
date: 2019-10-15 09:00:00 Z
---

# Download file action

This action downloads a file from your SFTP server. This cannot be used to download entire folders. 

The file contents will be downloaded in binary mode and can be used in subsequent recipe steps. 

When downloading large files, Workato will split the file contents into chunks and download them across separate requests. The time it takes to process this action depends on the file size and the download speed. This means that larger files will take more time to process, leading to longer job processing time.

There is a timeout limit of **180 seconds** for this action. See here for more information on [timeouts on jobs and actions](/recipes/recipe-job-errors.md#timeouts). 

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
| Size              | The size of the file.     |
