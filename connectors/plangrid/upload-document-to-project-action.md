---
title: Workato connectors - Plangrid upload document to project action
date: 2019-09-09 12:00:00 Z
---

# Upload document to project
Uploads contents of a file to PlanGrid as a document. File content can be used from previous steps of the recipe.

In the example below, we will use the **File Contents** from Box's Download file action.

![Upload document to project](/assets/images/plangrid/upload-document-to-project.png)

## Input fields

| Field name | Description |
|----------------------|---------------------------------------------------------------------------------------------------------------------|
| Project / Project ID | Select the project or input the unique identifier of the project. |
| Content Type | Content type of the document's file (e.g. application/pdf). |
| File Content | Binary contents of the file. |
| Document Name | Name of the document. |
| Project Folder | Folder in the project to store the document. |
| Auto Version | Indicate whether the document will automatically be versioned if a document of the same name resides in the folder. |

## Output fields

| Field name | Description |
|---------------|-----------------------------------------------------------------------|
| Document ID | ID of the uploaded document. |
| Project ID | ID of the selected project. |
| Document Name | Name of the uploaded document. |
| Folder | Folder in the project where the document is stored. |
| URL | URL to retrieve the document. |
| Created at | Date and time of when the document was created. |
| Created by | Reference to the PlanGrid user that created the document. |
| - UID | ID of the user that created the document. |
| - URL | URL to retrieve information about the user that created the document. |
| - Email | Email of the user that uploaded the document. |
| Deleted | Indicates whether the document has been deleted or not. |
| Updated at | Date and time of when the document was last updated. |
