---
title: Workato connectors - PlanGrid - object actions
date: 2019-09-09 12:00:00 Z
---

# PlanGrid object actions
Workato allows you to create, update, upload, or retrieve objects in PlanGrid. In Workato, we classify things like projects, tasks, field reports, sheets, and documents as objects. We currently work with a long list of PlanGrid objects. When using actions in Workato that reference objects, you'll be able to specify which object you want to work with.

After specifying which object to work with, you'll input fields will be dynamically generated based on both the object and type of action you have selected.

**Input fields for object actions**

When using an action field, you will be able to select from a list of available objects. For example, when using the `Create object` action, you can select the `Project` object and the step will populate with the inputs required and available for creating a project in PlanGrid. You can use data pills from earlier steps to make objects based on data from your workflow.

Required fields will always show up in the recipe configuration. Remember to fill them in to prevent errors from happening.

**Output fields for object actions**

Each object action executes an action on a single object in PlanGrid. This action will return all object-related information from PlanGrid, which you can then use in subsequent steps in your recipe.

## Objects Supported
* [Create, Get, Update project](#project)
* [Get, Upload Document](#document)
* [Get Field Report](#field-report)
* [Get, Update, Upload Photo](#photo)
* [Create, Get, Update RFI](#rfi)
* [Get RFI status](#rfi)
* [Get Sheet](#sheet)
* [Create, Get Sheet packet](#sheet)
* [Create, Upload Sheet version](#sheet)
* [Get Snapshot](#snapshot)
* [Create, Get, Update Task](#task)
* [Create, Get, Update Task list](#task)
* [Create, Get User](#user)
* [Get Role](#role)


### Project
In Workato, the PlanGrid connector can be used to create, get details or update a project. When selecting the object type `project`, fields will be generated dynamically based on the action type you have chosen. These range from a list of input fields to describe a project for create or update actions to a single input field for the project ID for get details actions.

Below, we describe the object representation of a project in Workato.

#### Representation of a Project
| Field name | Description |
|----------------------------|--------------------------|
| Project ID | ID of the project. |
| Project Name | Name of the project in PlanGrid |
| Project Code | Custom code assigned to the project in PlanGrid (if any). |
| Organization ID | The ID of the organization to which the project belongs in PlanGrid (if any). |
| Project Type | Project type with possible values of: general, manufacturing, power, water-sewer-waste, industrial-petroleum, transportation, hazardous-waste, telecom, education-k-12, education-higher, gov-federal, gov-state-local, or other. |
| Project Status | The current status of the project as set in PlanGrid. |
| Project Owner | The owner of the project as specified in PlanGrid. |
| Project Start Date | Project start date as set in PlanGrid. |
| Project End Date | Project end date as set in PlanGrid. |
| Street line 1 | Address information as set in PlanGrid. |
| Street line 2 | Address information as set in PlanGrid. |
| Town or city | Address information as set in PlanGrid. |
| State, province, or region | Address information as set in PlanGrid. |
| Zip or postal code | Address information as set in PlanGrid. |
| Country | Address information as set in PlanGrid. |
| Latitude | Address information as set in PlanGrid. |
| Longitude | Address information as set in PlanGrid. |
| Updated at | Timestamp of when the project was last updated in PlanGrid. |

### Document
In Workato, the PlanGrid connector can be used to get details or upload a document. When selecting the object type `document`, fields will be generated dynamically based on the action type you have chosen. These range from a list of input fields to describe a document for upload actions to a single input field for the document ID for get details actions.

Below, we describe the object representation of a document in Workato.

#### Representation of a document

| Field name    | Description                                                             |
|---------------|-------------------------------------------------------------------------|
| Document ID   | ID of the document.                                                     |
| Project ID    | ID of the project.                                                      |
| Document Name | Name of the document in PlanGrid.                                       |
| Folder        | The folder path within PlanGrid documents where the file was contained. |
| URL           | URL to download the file.                                               |
| Created at    | Timestamp of when the file was created in PlanGrid.                     |
| Created by    | Reference to  the user that created the file.                           |
| - UID         | ID of the user that created the file.                                   |
| - URL         | URL to the user’s profile in PlanGrid                                   |
| - Email       | Email address of the user that created the file.                        |
| Deleted       | Indicates whether the file has been deleted.                            |
| Updated at    | Timestamp of when the file was last updated in PlanGrid.                |

### Field report
In Workato, the PlanGrid connector can be used to get details on a field report. When selecting the object type `field report`, fields will be generated dynamically based on the action type you have chosen. For our get field report action, the only input would be a single input field for the field report ID.

Below, we describe the object representation of a field report in Workato.

#### Representation of a field report

| Field name | Description |
|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Field Report ID | ID of the field report. |
| Project ID | ID of the project. |
| Title | Title of the field report in PlanGrid. |
| Description | Description of the field report in PlanGrid. |
| URL | The URL to access the field report in PlanGrid. |
| Report Date | Timestamp of when the report was created in PlanGrid. |
| Status | Status of the field report, and the values can be: draft, submitted, archived, or deleted. |
| Field report type | Reference to the field report template. |
| - Name | Name of the field report template. |
| - Status | Status of the field report template, can be active or archived. |
| - UID | ID of the field report template. |
| PDF URL | The URL to access the PDF version of the field report (exists only if the report was originally a PDF in PlanGrid; not available for the native daily report). |
| PDF Form Values: | List containing the values from the form fields of a custom PDF field report (available if the report template is using a custom PDF). |
| - Name | Name of the PDF form field. |
| - Value | Value corresponding to the form field name. |
| - List size | The number of form field values available from the field report. |
| Daily Report Values | List of values from the native daily report (only available if the report was completed using the PlanGrid native daily report module). |
| - Work log entries: | List of values from the Work Log section of the native daily report. |
|   - Trade | The trade that performed the work. |
|   - Timespan | The total number of works for the work log entry in milliseconds. |
|   - Headcount | The number of workers for the work log entry. |
|   - Description | A description of the work performed. |
|   - Deleted | Whether the work log entry has been deleted or not. |
|   - List size | The number of entries in the “Work log entries” list. |
| - Material entries: | List of values from the Material Log section of the native daily report. |
|   - Unit | The unit of measure for the quantity specified. |
|   - Quantity | The quantity of material that was used. |
|   - Item | A specific description of the material item used. |
|   - Description | A description of the material used (may be blank if “item” above contains all details). |
|   - Deleted | Whether the material entry has been deleted or not. |
|   - List size | The number of entries in the “Material entries” list. |
| - Equipment entries: | List of values from the “equipment” section of the native daily report. |
|   - Timespan | The total time all equipment was used for in milliseconds. |
|   - Quantity | The number of pieces of the equipment that was used. |
|   - Item | A specific description of the equipment item used. |
|   - Description | A description of the equipment utilized (may be blank if “item” above contains all details). |
|   - Deleted | Whether the equipment entry has been deleted or not. |
|   - List size | The number of entries in the “Equipment entries” list. |
| - List size | The number of entries in the “Daily Report Values” list. |
| Documents | Reference to  the documents associated with the field report. |
| - Total count | The total number of documents associated with the field report. |
| - URL | The URL to access the documents associated with the field report in PlanGrid. |
| Photos | Reference to  the photos associated with the field report. |
| - Total count | The total number of photos associated with the field report. |
|-  URL | The URL to access the photos associated with the field report in PlanGrid. |
| Snapshots | Reference to  the snapshots associated with the field report. |
| - Total count | The total number of snapshots associated with the field report. |
| - URL | The URL to access the snapshots associated with the field report in PlanGrid. |
| Created by | Reference to  the user that created the field report  in PlanGrid. |
| - UID | ID of the user. |
| - URL | URL to access the user’s profile in PlanGrid. |
| - Email | Email of the user in PlanGrid. |
| Updated at | Timestamp of when the report was last updated in PlanGrid. |
| Weather | Weather information based on the report date and the address of the PlanGrid project. |
| - Humidity | A percentage value indicating the humidity over the course of the day. |
| - Precipitation accumulation | The amount of precipitation accumulated throughout the day. Unit specified in “precipitation_accumulation_unit”. |
| - Precipitation accumulation unit | The unit of the precipitation accumulated. |
| - Speed unit | The unit of the wind speed measurement. |
| - Summary key | A description of the weather (i.e. Partly Cloudy). |
| - Temperature max | The maximum temperature during the day. |
| - Temperature min | The minimum temperature during the day. |
| - Temperature unit | The unit of the temperature measurements. |
| - Wind bearing | The direction of the wind. |
| - Wind gust | The maximum wind speed observed throughout the day. |
| - Wind speed | The average wind speed observed throughout the day. |

### Photo
In Workato, the PlanGrid connector can be used to get details, update or upload a photo. When selecting the object type `photo`, fields will be generated dynamically based on the action type you have chosen. These range from a list of input fields to describe a photo for upload and update actions to a single input field for the photo ID for get details actions.

Below, we describe the object representation of a photo in Workato.

#### Representation of a photo

| Field name | Description                                           |
|------------|-------------------------------------------------------|
| Photo ID   | ID of the photo.                                      |
| Project ID | ID of the project.                                    |
| Title      | Title of the photo in PlanGrid.                       |
| URL        | URL to download the photo from PlanGrid.              |
| Created at | Timestamp of when the file was created in PlanGrid.   |
| Created by | Reference to  the user that created the photo.        |
| - UID      | ID of the user that created the file.                 |
| - URL      | URL to the user’s profile in PlanGrid                 |
| - Email    | Email address of the user that created the file.      |
| Deleted    | Indicates whether the file has been deleted.          |

### RFI
In Workato, the PlanGrid connector can be used to create, get details or update a RFI. In addition to this, you'll also be able to get the status of an RFI as well. When selecting the object type `RFI` or `RFI status`, fields will be generated dynamically based on the action type you have chosen. These range from a list of input fields to describe a RFI for create and update actions to a single input field for the RFI ID for get details actions.

Below, we describe the object representation of a RFI in Workato.

#### Representation of a RFI

| Field name  | Description                                                                            |
|-------------|----------------------------------------------------------------------------------------|
| RFI ID      | ID of the RFI.                                                                         |
| Project     | ID of the project.                                                                     |
| RFI Number  | Number of the RFI within the project.                                                  |
| Status      | An object containing information on the current status of the RFI.                     |
| - UID         | ID of the current status of the RFI.                                                   |
| - Label       | Label of the current status of the RFI (i.e. draft, answered, etc.)                    |
| - Color       | Color code of the RFI in PlanGrid.                                                     |
| Locked      | Indicates whether the RFI is locked or still editable.                                 |
| Title       | The title of the RFI in PlanGrid.                                                      |
| Question    | The question asked in the RFI in PlanGrid.                                             |
| Answer      | The answer given for the RFI in PlanGrid.                                              |
| Sent at     | Timestamp of when the RFI was sent to the Reviewer in PlanGrid.                        |
| Due at      | Timestamp of when the RFI is due in PlanGrid.                                          |
| Assigned to | A list of objects containing information about the users the RFI has been assigned to. |
| - UID         | ID of the user.                                                                        |
| - URL         | URL to access the user’s profile in PlanGrid.                                          |
| - Email       | Email of the user in PlanGrid.                                                         |
| - List size   | The number of users in this list that this RFI is assigned to.                         |
| Updated at  | Timestamp of when the RFI was last updated in PlanGrid.                                |
| Updated by  | Reference to  the user that last updated the RFI.                                      |
| - UID         | ID of the user.                                                                        |
| - URL         | URL to access the user’s profile in PlanGrid.                                          |
| - Email       | Email of the user in PlanGrid.                                                         |
| Created at  | Timestamp of when the RFI was created in PlanGrid.                                     |
| Created by  | Reference to  the user that created the RFI in PlanGrid.                               |
| - UID         | ID of the user.                                                                        |
| - URL         | URL to access the user’s profile in PlanGrid.                                          |
| - Email       | Email of the user in PlanGrid.                                                         |
| Photos      | Reference to  the photos associated with the RFI.                                      |
| - Total count | The total number of photos associated with the RFI.                                    |
| - URL         | The URL to access the photos associated with the RFI in PlanGrid.                      |
| Attachments | Reference to  the attachments associated with the RFI.                                 |
| - Total count | The total number of attachments associated with the RFI.                               |
| - URL         | The URL to access the attachments associated with the RFI in PlanGrid.                 |
| Snapshots   | Reference to  the snapshots associated with the RFI.                                   |
| - Total count | The total number of snapshots associated with the RFI.                                 |
| - URL         | The URL to access the snapshots associated with the RFI in PlanGrid.                   |
| Comments    | Reference to  the comments associated with the RFI.                                    |
| - Total count | The total number of comments associated with the RFI.                                  |
| - URL         | The URL to access the comments associated with the RFI in PlanGrid.                    |

### Sheet
In Workato, the PlanGrid connector can be used to get details of a Sheet. In addition to this, you'll also be able to create sheet packets and sheet versions, get details on entire sheet packets or upload new sheet versions. When selecting the object type `Sheet`, `Sheet packet`, `Sheet version`, fields will be generated dynamically based on the action type you have chosen.

Below, we describe the object representation of a Sheet in Workato.

#### Representation of a Sheet

| Field name         | Description                                                         |
|--------------------|---------------------------------------------------------------------|
| Sheet ID           | Unique identifier (UID) of the sheet, never blank.                  |
| Project ID         | ID of the project containing the sheet.                             |
| Name               | Name of the sheet in PlanGrid.                                      |
| Version Name       | Name of the version set to which the sheet belongs in PlanGrid.     |
| Description        | Description of the sheet.                                           |
| Tags               | A list of any tags associated with the sheet in PlanGrid.           |
| Published by       | Reference to  the user that published the sheet in PlanGrid.        |
| - UID                | ID of the user.                                                     |
| - URL                | URL to access the user’s profile in PlanGrid.                       |
| - Email              | Email of the user in PlanGrid.                                      |
| Published at       | Timestamp of when the sheet was published in PlanGrid.              |
| Deleted            | Indicates whether this sheet has been deleted in PlanGrid.          |
| Uploaded file name | Name of the uploaded file this sheet was contained in. Never blank. |

### Snapshot
In Workato, the PlanGrid connector can be used to get details on a snapshot. When selecting the object type `snapshot`, fields will be generated dynamically based on the action type you have chosen. For our get snapshot action, the only input would be a single input field for the snapshot ID.

Below, we describe the object representation of a snapshot in Workato.

#### Representation of a snapshot

| Field name  | Description                                                                       |
|-------------|-----------------------------------------------------------------------------------|
| Snapshot ID | Unique identifier (UID) of the file, never blank.                                 |
| Project ID  | ID of the project containing the file.                                            |
| Title       | The name of the snapshot in PlanGrid.                                             |
| URL         | The URL to access the snapshot in PlanGrid.                                       |
| Created at  | Timestamp of when the snapshot was created in PlanGrid.                           |
| Created by  | Reference to  the user that created the snapshot in PlanGrid.                     |
| UID         | ID of the user.                                                                   |
| URL         | URL to access the user’s profile in PlanGrid.                                     |
| Email       | Email of the user in PlanGrid.                                                    |
| Sheet       | Object containing information about the sheet from which this snapshot was taken. |
| UID         | ID of the sheet.                                                                  |
| URL         | URL to access the sheet in PlanGrid.                                              |
| Deleted     | Indicates whether this snapshot has been deleted in PlanGrid.                     |

### Task
In Workato, the PlanGrid connector can be used to create, update or get details of a task in PlanGrid. In addition to this, you'll also be able to create, update or get details of entire task lists in PlanGrid. When selecting the object type `Task`, or `Task list`, fields will be generated dynamically based on the action type you have chosen.

Below, we describe the object representation of a task in Workato.

#### Representation of a task

| ﻿Field name | Description |
|---------------------|--------------------|
| Task ID | Unique identifier (UID) of the task, never blank. |
| Project ID | ID of the project containing the task. |
| Number | The task number (specific to this project) as specific in PlanGrid. |
| Title | The title of the task. |
| Status | Current status of task. Possible values are "open", "in_review", "pending", "closed". |
| Type | Indicates the type of task. Possible values are: issue, planned_work, other. |
| Assignees | A list of objects containing information about the users that this task has been assigned to. |
| UID | ID of the user. |
| Type | URL to access the user’s profile in PlanGrid. |
| List size | Email of the user in PlanGrid. |
| Watchers | A list of objects containing information about the users that responsibility of watching this task has been assigned to. |
| UID | ID of the user. |
| Type | URL to access the user’s profile in PlanGrid. |
| List size | Email of the user in PlanGrid. |
| Location | Location of the task as specific in PlanGrid. |
| Start date | Timestamp of when the task is set to start in PlanGrid. |
| Due at | Timestamp of when the task is due in PlanGrid. |
| Closed at | Timestamp of when the task was closed in PlanGrid. Available only once the task has been closed. |
| Stamp | The task stamp selected in PlanGrid. |
| Task List | The task list to which this task belongs in PlanGrid (if any). |
| Task list ID | ID of the task list. |
| URL | URL to access the task list in PlanGrid. |
| Description | Description of the task. |
| Cost impact | Number indicating the cost impact to the project as a result of this task. |
| Has cost impact | Indicates whether the task has a cost impact. |
| Currency code | Currency of the cost impact. |
| Schedule impact | Time in seconds by which this task is impacting the project schedule. |
| Has schedule impact | Indicates whether the task has a schedule impact. |
| Current annotation | Object containing information about the current annotation to which this task is attached in PlanGrid (if any). |
| UID | ID of the annotation in PlanGrid |
| Color | The color assigned to the annotation in PlanGrid. |
| Stamp | The stamp assigned to the annotation in PlanGrid (if any). |
| Visibility | The visibility level of the annotation. Can be either “user” or “master”. User indicates a team member (or former team member) has not published the annotation to the project. Never blank. |
| Deleted | Indicates whether the annotation has been deleted in PlanGrid. |
| Sheet | Object containing information about the sheet to which this task belongs. |
| UID | ID of the sheet. |
| URL | URL to access the sheet in PlanGrid. |
| Comments | Object containing information about the comments on the task in PlanGrid. |
| Total Count | Total number of comments on the task. |
| URL | URL to access the comments on the task in PlanGrid. |
| Photos | Object containing information about the photos associated with the task in PlanGrid. |
| Total count | Total number of photos associated with the task. |
| URL | URL to access the photos on the task in PlanGrid. |
| Deleted | Indicates whether this task has been deleted in PlanGrid. |
| Created at | Timestamp of when the task was created PlanGrid. |
| Created by | Reference to  the user that created the task in PlanGrid. |
| UID | ID of the user. |
| URL | URL to access the user’s profile in PlanGrid. |
| Email | Email of the user in PlanGrid. |
| Updated at | Timestamp of when the task was last updated in PlanGrid. |
| Updated by | Reference to  the user that last updated the task in PlanGrid. |
| UID | ID of the user. |
| URL | URL to access the user’s profile in PlanGrid. |
| Email | Email of the user in PlanGrid. |

### User
In Workato, the PlanGrid connector can be used to create or get details of a user in PlanGrid. When selecting the object type `user`, fields will be generated dynamically based on the action type you have chosen.

Below, we describe the object representation of a user in Workato.

#### Representation of a user

| ﻿Field name | Description |
|---------------------|--------------------|
| Email | Email of user in PlanGrid |
| Project ID | ID of the project the user belongs to. |
| Role ID | ID of the role to assign to the user on this project |
| First name | First name of user |
| Last name | Last name of user |
| Language | Native language of user |

### Role
In Workato, the PlanGrid connector can be used to get details of a role in PlanGrid. When selecting the object type `role`, fields will be generated dynamically based on the action type you have chosen.

Below, we describe the object representation of a role in Workato.

#### Representation of a role

| ﻿Field name | Description |
|---------------------|--------------------|
| UID | ID of the role |
| Role | Role in project |
| Project ID | ID of the project |
