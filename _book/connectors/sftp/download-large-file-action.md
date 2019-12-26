---
title: Workato connectors - SFTP download large file action
date: 2019-10-15 09:00:00 Z
---

# Download large file action

This action downloads a file from your SFTP server. This cannot be used to download entire folders.

The file contents will be downloaded in binary mode and can be used in subsequent recipe steps.

Workato will split the file contents into chunks and download them across separate requests. The time it takes to process this action depends on the file size and the download speed.

![Download large file action](/assets/images/connectors/sftp/download-large-file-action.png)
*Download large file action*

## Input

| Input field | Description                                                          |
| ----------- | -------------------------------------------------------------------- |
| File path   | Define the path to your file, including the file name and file type. |

## Output

| Output field      | Description                    |
| ----------------- | ------------------------------ |
| File content      | The contents of the file.      |
| Detected encoding | The encoding of the file.      |
| Size              | The size of the file in bytes. |
