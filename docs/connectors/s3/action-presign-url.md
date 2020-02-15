---
title: Workato connectors - Amazon S3 action - Generate presigned URL
date: 2018-12-13 23:00:00 Z
---

# Amazon S3 action - Generate presigned URL

This action creates a temporary URL to a specific object in your Amazon S3 bucket. This URL can be passed to third-party users to upload, download or modify an existing object.

Use this action to securely share temporary access to your S3 bucket.

![Generate presign URL](~@img/connectors/amazon-s3/generate-presign-url.png)
*Generate presigned URL*

## Input

| Input | Description |
| :---------- | :---|
| Region | The region of the bucket to list the files from, e.g. us-west-2. In Amazon S3, go to **Bucket > Properties > Static website hosting** to find your region in the Endpoint URL. |
| Bucket name | The bucket to list files from. |
| Object name | The name of the object, including file path and extension. |
| HTTP method | The HTTP method allowed for this URL. |
| Expires in  | The duration of this presigned URL, in seconds. It defaults to 900 seconds. |

## Output

The output of this action is a presigned URL for the specified object.
