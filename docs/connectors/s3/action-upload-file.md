---
title: Workato connectors - Amazon S3 action - Upload file
date: 2018-12-13 23:00:00 Z
---

# Amazon S3 action - Upload file
This action uploads a new file to selected bucket/folder. If a file with the same name already exists in the bucket/folder, it will be overwritten.

## Input fields
| Field name | Description |
| ---------- | ----------- |
| Region     | The region of the bucket to upload the file to, e.g. us-west-2. In Amazon S3, go to **Bucket > Properties > Static website hosting** to find your region in the Endpoint URL. |
| Bucket name | The bucket to upload the file to. Enter the bucket name directly, this is case sensitive. |
| Folder | The folder to upload the file to. Select a folder from the picklist or enter the folder path directly. |
| Object name | The name of the uploaded file. Note that this is file name, not file path. |
| File contents | Contents of the file to upload. Accepts a datapill, such as `File contents`, or raw text. |
| Chunk size<br>(in kilobytes) | File contents will be [streamed](/features/file-streaming.md) in chunks of this size. Default is 1024 KB, minimum is 32 KB. Workato manages the chunk size automatically by default. Configure this when you want to optimize the data throughput yourself. Larger chunk size will increase throughput, but may exceed API limit. |
