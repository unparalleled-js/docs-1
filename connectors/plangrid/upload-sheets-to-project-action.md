---
title: Workato connectors - Plangrid upload document to project action
date: 2019-09-09 12:00:00 Z
---

# Upload sheets to project
Uploading sheets to PlanGrid is a multi-step process that involves the following:
Creating a sheet version that provides necessary information to upload files
Uploading the PDF documents associated with the created sheet version
Completing sheet version once all PDF documents have been uploaded
Note that sheets are individual drawings and a PDF file may contain multiple sheets. Once uploaded to PlanGrid, each sheet will be extracted automatically and added to the Publish Log for the project administrator to publish to the rest of the project team.

## How to use this action
First you will need the PDF file or list of files that will be uploaded as a sheet version. This may be from another action or you can use a variable with a list of files as shown below:

![Create a list variable](/assets/images/plangrid/create-list-var.png)
*Create a list variable*

![Add file content to list var](/assets/images/plangrid/add-file-content-to-list-var.png)
*Add file content to the list variable*

Once you have a list of PDF files to upload, you can use the Create sheet version upload action to start the upload process:

![Use sheet version upload action](/assets/images/plangrid/sheet-version-upload-action.png)
*Use sheet version upload action*

Next, you will create a Repeat action for each PDF in the list of files:

![Create a repeat action for each PDF](/assets/images/plangrid/repeat-action-for-pdf.png)
*Create a repeat action for each PDF*

Inside the loop of the Repeat action, add the Upload file to sheet version action:

![Upload file to sheet in each iteration of the loop](/assets/images/plangrid/upload-file-to-sheet.png)
*Upload file to sheet in each iteration of the loop*

Within the Upload file to sheet version action, you will map the output from the previous Create sheet version action like so:

![Map output from previous create sheet version action](/assets/images/plangrid/map-output.png)
*Map output from previous create sheet version action*

For the File Content, you will use the variable from your list of files created earlier:

![Map PDF file variable to file content input](/assets/images/plangrid/file-content-file-variable.png)
*Map PDF file variable to file content input*

Finally,  we can add the Complete sheet version upload action after the Repeat action loop:

![Complete sheet version upload](/assets/images/plangrid/complete-version-upload.png)
*Complete sheet version upload*


Within the Complete sheet version upload action, you can map the Sheet Version Upload ID field from the previous Create sheet version upload action.

![Map sheet version upload ID](/assets/images/plangrid/map-version-upload-ID.png)
*Map sheet version upload ID*
