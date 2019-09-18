---
title: Handing binary files
date: 2019-07-16 18:00:00 Z
---

# Handling binary files
Binary files are files that are in a non-text format. It uses a more complex storage configuration and is not written in a human-readable language. Workato allows you to sync such files across your business systems with recipes.

Workato has two approaches for moving files across apps. The two approaches are applicable for both text and binary files.

1) [Moving files via public URL](#moving-files-via-public-url)
Obtain a public URL for the specified file and pass it to the destination app. This moves the file as-is to the destination app and does not move through Workato. The URL will have to be publicly accessible for the duration of the job.

2) [Moving files via download](#moving-files-via-file-content)
Download the file content to Workato and subsequently upload it to the destination app. This approach allows you read and perform transformations on the file data.

However, it is **not** advisable to use this approach for very large files as it may slow down the processing speed of the job.

## Moving files via public URL
This is a 2-step process:
1. Get the public URL of the file to move.
2. Pass this public URL to the destination app.

Here is an example of how to move a file from Dropbox to Box. See the sample recipe [here](https://www.workato.com/recipes/485735).

![Moves files from Dropbox to Box via public URLs](/assets/images/features/files-and-attachments/file-url-recipe.png)
*Moves files from Dropbox to Box via public URLs*

The recipe retrieves the public URl from the **New file** trigger. Next, it checks if the file already exist in Box, before passing the URL to the **Upload file via URL** action.

> When configuring the **New file** trigger, remember to mark `Yes` for the **Obtain a direct URL to file** field to generate a public URL.

## Moving files via file content
This is a 2-step process:
1. Download the file content of the file to move.
2. Load the file to the target system.

You can use the **Files by Workato** connector to achieve this. This is a native application that allows users to perform actions on files.

Here is an example of how to move a attachment from Gmail to Box. See the sample recipe [here](https://www.workato.com/recipes/485773).

![Download attachments from Gmail and upload to Box](/assets/images/features/files-and-attachments/download-file-recipe.png)
*Download attachments from Gmail and upload to Box*

The Gmail **New email** trigger output may contain a list of attachements. This recipe checks if the email has attachments. If present, it will run a Download attachment action. Then, the recipe will load the file to Box with the **Uploadfile using file contents** action.

The `For each` step (Step 2) is a repeat action that recycles the download/upload steps for every attachment in the email.

> In this example, file content is used as Gmail does not provide public URLs to attachments. Wherever possible, [moving of files via URLs](#moving-files-via-public-url) is preferred for recipe efficiency.

## Download file content from public URL
In cases where the file source app provides only a public URL to the file, but the destination app requires the actual file content, use **Files by Workato** to facilitate the download. This native connector has a **Download file from URL** action that will retrieves file content from a given public URL.

Let's take the scenario where new files created in a shared Box folder needs to be uploaded and associated with a Salesforce account. This is how the recipe looks.

![Example recipe - using utilities to download file](/assets/images/features/files-and-attachments/utilities-download-file.png)
*Recipe that uses Utilities to download file content. [Example recipe](https://www.workato.com/recipes/485775).*

The recipe uses the public URL to the Box file to download the file content. This file content is then uploaded into Salesforce as a new attachment, associated to a certain Salesforce account (the account ID is hardcoded in this instance).

![Upload file to Salesforce](/assets/images/features/files-and-attachments/upload-file-to-salesforce.gif)
*Download file using Box URL, then upload file content to Salesforce. [Example recipe](https://www.workato.com/recipes/485775).*

## Base64 encoding
Base64 encoding is a way of converting binary content into a set of standard characters for sending over networks. Certain apps require base64-encoded file content to be uploaded, and usually these same apps will produce base64-encoded file content when their files are downloaded.

Workato supports the ability to encode or decode base64 content via formulas.

To base64 encode binary content and upload it into such apps:

![Encode file content](/assets/images/features/files-and-attachments/encode-file.png)
*Formula for encoding file content*

To decode binary content from base64 content from such apps:

![Decode file content](/assets/images/features/files-and-attachments/decode-file.png)
*Formula for decoding file content*
