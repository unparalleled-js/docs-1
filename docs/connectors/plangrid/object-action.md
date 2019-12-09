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

## Project
In Workato, the PlanGrid connector can be used to create, get details or update a project. When selecting the object type `project`, fields will be generated dynamically based on the action type you have chosen. These range from a list of input fields to describe a project for create or update actions to a single input field for the project ID for get details actions.

Below, we describe the object representation of a project in Workato.

### Representation of a Project
<table>
  <tr>
    <th>Field name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Project ID</td>
    <td>ID of the project.</td>
  </tr>
  <tr>
    <td>Project Name</td>
    <td>Name of the project in PlanGrid</td>
  </tr>
  <tr>
    <td>Project Code</td>
    <td>Custom code assigned to the project in PlanGrid (if any).</td>
  </tr>
  <tr>
    <td>Organization ID</td>
    <td>The ID of the organization to which the project belongs in PlanGrid (if any).</td>
  </tr>
  <tr>
    <td>Project Type</td>
    <td>Project type with possible values of: general, manufacturing, power, water-sewer-waste, industrial-petroleum, transportation, hazardous-waste, telecom, education-k-12, education-higher, gov-federal, gov-state-local, or other.</td>
  </tr>
  <tr>
    <td>Project Status</td>
    <td>The current status of the project as set in PlanGrid.</td>
  </tr>
  <tr>
    <td>Project Owner</td>
    <td>The owner of the project as specified in PlanGrid.</td>
  </tr>
  <tr>
    <td>Project Start Date</td>
    <td>Project start date as set in PlanGrid.</td>
  </tr>
  <tr>
    <td>Project End Date</td>
    <td>Project end date as set in PlanGrid.</td>
  </tr>
  <tr>
    <td>Street line 1</td>
    <td>Address information as set in PlanGrid.</td>
  </tr>
  <tr>
    <td>Street line 2</td>
    <td>Address information as set in PlanGrid.</td>
  </tr>
  <tr>
    <td>Town or city</td>
    <td>Address information as set in PlanGrid.</td>
  </tr>
  <tr>
    <td>State, province, or region</td>
    <td>Address information as set in PlanGrid.</td>
  </tr>
  <tr>
    <td>Zip or postal code</td>
    <td>Address information as set in PlanGrid.</td>
  </tr>
  <tr>
    <td>Country</td>
    <td>Address information as set in PlanGrid.</td>
  </tr>
  <tr>
    <td>Latitude</td>
    <td>Address information as set in PlanGrid.</td>
  </tr>
  <tr>
    <td>Longitude</td>
    <td>Address information as set in PlanGrid.</td>
  </tr>
  <tr>
    <td>Updated at</td>
    <td>Timestamp of when the project was last updated in PlanGrid.</td>
  </tr>
</table>

## Document
In Workato, the PlanGrid connector can be used to get details or upload a document. When selecting the object type `document`, fields will be generated dynamically based on the action type you have chosen. These range from a list of input fields to describe a document for upload actions to a single input field for the document ID for get details actions.

Below, we describe the object representation of a document in Workato.

### Representation of a document

<table>
  <tr>
    <th colspan="2">Field name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="2">Document ID</td>
    <td>ID of the document.</td>
  </tr>
  <tr>
    <td colspan="2">Project ID</td>
    <td>ID of the project.</td>
  </tr>
  <tr>
    <td colspan="2">Document Name</td>
    <td>Name of the document in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">Folder</td>
    <td>The folder path within PlanGrid documents where the file was contained.</td>
  </tr>
  <tr>
    <td colspan="2">URL</td>
    <td>URL to download the file.</td>
  </tr>
  <tr>
    <td colspan="2">Created at</td>
    <td>Timestamp of when the file was created in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="3">Created by</td>
    <td>UID</td>
    <td>ID of the user that created the file.</td>
  </tr>
  <tr>
    <td>URL</td>
    <td>URL to the user’s profile in PlanGrid</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>Email address of the user that created the file.</td>
  </tr>
  <tr>
    <td colspan="2">Deleted</td>
    <td>Indicates whether the file has been deleted.</td>
  </tr>
  <tr>
    <td colspan="2">Updated at</td>
    <td>Timestamp of when the file was last updated in PlanGrid.</td>
  </tr>
</table>

## Field report
In Workato, the PlanGrid connector can be used to get details on a field report. When selecting the object type `field report`, fields will be generated dynamically based on the action type you have chosen. For our get field report action, the only input would be a single input field for the field report ID.

Below, we describe the object representation of a field report in Workato.

### Representation of a field report

<table>
  <tr>
    <th colspan="3">Field name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="3">Field Report ID</td>
    <td>ID of the field report.</td>
  </tr>
  <tr>
    <td colspan="3">Project ID</td>
    <td>ID of the project.</td>
  </tr>
  <tr>
    <td colspan="3">Title</td>
    <td>Title of the field report in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="3">Description</td>
    <td>Description of the field report in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="3">URL</td>
    <td>The URL to access the field report in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="3">Report Date</td>
    <td>Timestamp of when the report was created in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="3">Status</td>
    <td>Status of the field report, and the values can be: draft, submitted, archived, or deleted.</td>
  </tr>
  <tr>
    <td rowspan="3">Field report type</td>
    <td colspan="2">Name</td>
    <td>Name of the field report template.</td>
  </tr>
  <tr>
    <td colspan="2">Status</td>
    <td>Status of the field report template, can be active or archived.</td>
  </tr>
  <tr>
    <td colspan="2">UID</td>
    <td>ID of the field report template.</td>
  </tr>
  <tr>
    <td colspan="3">PDF URL</td>
    <td>The URL to access the PDF version of the field report (exists only if the report was originally a PDF in PlanGrid; not available for the native daily report).</td>
  </tr>
  <tr>
    <td rowspan="3">PDF Form Values:</td>
    <td colspan="2">Name</td>
    <td>Name of the PDF form field.</td>
  </tr>
  <tr>
    <td colspan="2">Value</td>
    <td>Value corresponding to the form field name.</td>
  </tr>
  <tr>
    <td colspan="2">List size</td>
    <td>The number of form field values available from the field report.</td>
  </tr>
  <tr>
    <td rowspan="19">Daily Report values</td>
    <td rowspan="6">Work log entries:</td>
    <td>Trade</td>
    <td>The trade that performed the work.</td>
  </tr>
  <tr>
    <td>Timespan</td>
    <td>The total number of works for the work log entry in milliseconds.</td>
  </tr>
  <tr>
    <td>Headcount</td>
    <td>The number of workers for the work log entry.</td>
  </tr>
  <tr>
    <td>Description</td>
    <td>A description of the work performed.</td>
  </tr>
  <tr>
    <td>Deleted</td>
    <td>Whether the work log entry has been deleted or not.</td>
  </tr>
  <tr>
    <td>List size</td>
    <td>The number of entries in the “Work log entries” list.</td>
  </tr>
  <tr>
    <td rowspan="6">Material entries</td>
    <td>Unit</td>
    <td>The unit of measure for the quantity specified.</td>
  </tr>
  <tr>
    <td>Quantity</td>
    <td>The quantity of material that was used.</td>
  </tr>
  <tr>
    <td>Item</td>
    <td>A specific description of the material item used.</td>
  </tr>
  <tr>
    <td>Description</td>
    <td>A description of the material used (may be blank if “item” above contains all details).</td>
  </tr>
  <tr>
    <td>Deleted</td>
    <td>Whether the material entry has been deleted or not.</td>
  </tr>
  <tr>
    <td>List size</td>
    <td>The number of entries in the “Material entries” list.</td>
  </tr>
  <tr>
    <td rowspan="6">Equipment entries:</td>
    <td>Timespan</td>
    <td>The total time all equipment was used for in milliseconds.</td>
  </tr>
  <tr>
    <td>Quantity</td>
    <td>The number of pieces of the equipment that was used.</td>
  </tr>
  <tr>
    <td>Item</td>
    <td>A specific description of the equipment item used.</td>
  </tr>
  <tr>
    <td>Description</td>
    <td>A description of the equipment utilized (may be blank if “item” above contains all details).</td>
  </tr>
  <tr>
    <td>Deleted</td>
    <td>Whether the equipment entry has been deleted or not.</td>
  </tr>
  <tr>
    <td>List size</td>
    <td>The number of entries in the “Equipment entries” list.</td>
  </tr>
  <tr>
    <td colspan="2">List size</td>
    <td>The number of entries in the “Daily Report Values” list.</td>
  </tr>
  <tr>
    <td rowspan="2">Documents</td>
    <td colspan="2">Total count</td>
    <td>The total number of documents associated with the field report.</td>
  </tr>
  <tr>
    <td colspan="2">URL</td>
    <td>The URL to access the documents associated with the field report in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="2">Photos</td>
    <td colspan="2">Total count</td>
    <td>The total number of photos associated with the field report.</td>
  </tr>
  <tr>
    <td colspan="2">URL</td>
    <td>The URL to access the photos associated with the field report in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="2">Snapshots</td>
    <td colspan="2">Total count</td>
    <td>The total number of snapshots associated with the field report.</td>
  </tr>
  <tr>
    <td colspan="2">URL</td>
    <td>The URL to access the snapshots associated with the field report in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="3">Created by</td>
    <td colspan="2">UID</td>
    <td>ID of the user.</td>
  </tr>
  <tr>
    <td colspan="2">URL</td>
    <td>URL to access the user’s profile in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">Email</td>
    <td>Email of the user in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="3">Updated at</td>
    <td>Timestamp of when the report was last updated in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="11">Weather</td>
    <td colspan="2">Humidity</td>
    <td>A percentage value indicating the humidity over the course of the day.</td>
  </tr>
  <tr>
    <td colspan="2">Precipitation accumulation</td>
    <td>The amount of precipitation accumulated throughout the day. Unit specified in “precipitation_accumulation_unit”.</td>
  </tr>
  <tr>
    <td colspan="2">Precipitation accumulation unit</td>
    <td>The unit of the precipitation accumulated.</td>
  </tr>
  <tr>
    <td colspan="2">Speed unit</td>
    <td>The unit of the wind speed measurement.</td>
  </tr>
  <tr>
    <td colspan="2">Summary key</td>
    <td>A description of the weather (i.e. Partly Cloudy).</td>
  </tr>
  <tr>
    <td colspan="2">Temperature max</td>
    <td>The maximum temperature during the day.</td>
  </tr>
  <tr>
    <td colspan="2">Temperature min</td>
    <td>The minimum temperature during the day.</td>
  </tr>
  <tr>
    <td colspan="2">Temperature unit</td>
    <td>The unit of the temperature measurements.</td>
  </tr>
  <tr>
    <td colspan="2">Wind bearing</td>
    <td>The direction of the wind.</td>
  </tr>
  <tr>
    <td colspan="2">Wind gust</td>
    <td>The maximum wind speed observed throughout the day.</td>
  </tr>
  <tr>
    <td colspan="2">Wind speed</td>
    <td>The average wind speed observed throughout the day.</td>
  </tr>
</table>

## Photo
In Workato, the PlanGrid connector can be used to get details, update or upload a photo. When selecting the object type `photo`, fields will be generated dynamically based on the action type you have chosen. These range from a list of input fields to describe a photo for upload and update actions to a single input field for the photo ID for get details actions.

Below, we describe the object representation of a photo in Workato.

### Representation of a photo

<table>
  <tr>
    <th colspan="2">Field name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="2">Photo ID</td>
    <td>ID of the photo.</td>
  </tr>
  <tr>
    <td colspan="2">Project ID</td>
    <td>ID of the project.</td>
  </tr>
  <tr>
    <td colspan="2">Title</td>
    <td>Title of the photo in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">URL</td>
    <td>URL to download the photo from PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">Created at</td>
    <td>Timestamp of when the file was created in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="3">Created by</td>
    <td>UID</td>
    <td>ID of the user that created the file.</td>
  </tr>
  <tr>
    <td>URL</td>
    <td>URL to the user’s profile in PlanGrid</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>Email address of the user that created the file.</td>
  </tr>
  <tr>
    <td colspan="2">Deleted</td>
    <td>Indicates whether the file has been deleted.</td>
  </tr>
</table>

## RFI
In Workato, the PlanGrid connector can be used to create, get details or update a RFI. In addition to this, you'll also be able to get the status of an RFI as well. When selecting the object type `RFI` or `RFI status`, fields will be generated dynamically based on the action type you have chosen. These range from a list of input fields to describe a RFI for create and update actions to a single input field for the RFI ID for get details actions.

Below, we describe the object representation of a RFI in Workato.

### Representation of a RFI

<table>
  <tr>
    <th colspan="2">Field name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="2">RFI ID</td>
    <td>ID of the RFI.</td>
  </tr>
  <tr>
    <td colspan="2">Project</td>
    <td>ID of the project.</td>
  </tr>
  <tr>
    <td colspan="2">RFI Number</td>
    <td>Number of the RFI within the project.</td>
  </tr>
  <tr>
    <td rowspan="3">Status</td>
    <td>UID</td>
    <td>ID of the current status of the RFI.</td>
  </tr>
  <tr>
    <td>Label</td>
    <td>Label of the current status of the RFI (i.e. draft, answered, etc.)</td>
  </tr>
  <tr>
    <td>Color</td>
    <td>Color code of the RFI in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">Locked</td>
    <td>Indicates whether the RFI is locked or still editable.</td>
  </tr>
  <tr>
    <td colspan="2">Title</td>
    <td>The title of the RFI in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">Question</td>
    <td>The question asked in the RFI in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">Answer</td>
    <td>The answer given for the RFI in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">Sent at</td>
    <td>Timestamp of when the RFI was sent to the Reviewer in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">Due at</td>
    <td>Timestamp of when the RFI is due in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="4">Assigned to</td>
    <td>UID</td>
    <td>ID of the user.</td>
  </tr>
  <tr>
    <td>URL</td>
    <td>URL to access the user’s profile in PlanGrid.</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>Email of the user in PlanGrid.</td>
  </tr>
  <tr>
    <td>List size</td>
    <td>The number of users in this list that this RFI is assigned to.</td>
  </tr>
  <tr>
    <td colspan="2">Updated at</td>
    <td>Timestamp of when the RFI was last updated in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="3">Updated by</td>
    <td>UID</td>
    <td>ID of the user.</td>
  </tr>
  <tr>
    <td>URL</td>
    <td>URL to access the user’s profile in PlanGrid.</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>Email of the user in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">Created at</td>
    <td>Timestamp of when the RFI was created in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="3">Created by</td>
    <td>UID</td>
    <td>ID of the user.</td>
  </tr>
  <tr>
    <td>URL</td>
    <td>URL to access the user’s profile in PlanGrid.</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>Email of the user in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="2">Photos</td>
    <td>Total count</td>
    <td>The total number of photos associated with the RFI.</td>
  </tr>
  <tr>
    <td>URL</td>
    <td>The URL to access the photos associated with the RFI in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="2">Attachments</td>
    <td>Total count</td>
    <td>The total number of attachments associated with the RFI.</td>
  </tr>
  <tr>
    <td>URL</td>
    <td>The URL to access the attachments associated with the RFI in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="2">Snapshots</td>
    <td>Total count</td>
    <td>The total number of snapshots associated with the RFI.</td>
  </tr>
  <tr>
    <td>URL</td>
    <td>The URL to access the snapshots associated with the RFI in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="2">Comments</td>
    <td>Total count</td>
    <td>The total number of comments associated with the RFI.</td>
  </tr>
  <tr>
    <td>URL</td>
    <td>The URL to access the comments associated with the RFI in PlanGrid.</td>
  </tr>
</table>

## Sheet
In Workato, the PlanGrid connector can be used to get details of a Sheet. In addition to this, you'll also be able to create sheet packets and sheet versions, get details on entire sheet packets or upload new sheet versions. When selecting the object type `Sheet`, `Sheet packet`, `Sheet version`, fields will be generated dynamically based on the action type you have chosen.

Below, we describe the object representation of a Sheet in Workato.

### Representation of a Sheet

<table>
  <tr>
    <th colspan="2">Field name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="2">Sheet ID</td>
    <td>Unique identifier (UID) of the sheet, never blank.</td>
  </tr>
  <tr>
    <td colspan="2">Project ID</td>
    <td>ID of the project containing the sheet.</td>
  </tr>
  <tr>
    <td colspan="2">Name</td>
    <td>Name of the sheet in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">Version Name</td>
    <td>Name of the version set to which the sheet belongs in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">Description</td>
    <td>Description of the sheet.</td>
  </tr>
  <tr>
    <td colspan="2">Tags</td>
    <td>A list of any tags associated with the sheet in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="3">Published by</td>
    <td>UID</td>
    <td>ID of the user.</td>
  </tr>
  <tr>
    <td>URL</td>
    <td>URL to access the user’s profile in PlanGrid.</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>Email of the user in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">Published at</td>
    <td>Timestamp of when the sheet was published in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">Deleted</td>
    <td>Indicates whether this sheet has been deleted in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">Uploaded file name</td>
    <td>Name of the uploaded file this sheet was contained in. Never blank.</td>
  </tr>
</table>

## Snapshot
In Workato, the PlanGrid connector can be used to get details on a snapshot. When selecting the object type `snapshot`, fields will be generated dynamically based on the action type you have chosen. For our get snapshot action, the only input would be a single input field for the snapshot ID.

Below, we describe the object representation of a snapshot in Workato.

### Representation of a snapshot

<table>
  <tr>
    <th>Field name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Snapshot ID</td>
    <td>Unique identifier (UID) of the file, never blank.</td>
  </tr>
  <tr>
    <td>Project ID</td>
    <td>ID of the project containing the file.</td>
  </tr>
  <tr>
    <td>Title</td>
    <td>The name of the snapshot in PlanGrid.</td>
  </tr>
  <tr>
    <td>URL</td>
    <td>The URL to access the snapshot in PlanGrid.</td>
  </tr>
  <tr>
    <td>Created at</td>
    <td>Timestamp of when the snapshot was created in PlanGrid.</td>
  </tr>
  <tr>
    <td>Created by</td>
    <td>Reference to the user that created the snapshot in PlanGrid.</td>
  </tr>
  <tr>
    <td>UID</td>
    <td>ID of the user.</td>
  </tr>
  <tr>
    <td>URL</td>
    <td>URL to access the user’s profile in PlanGrid.</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>Email of the user in PlanGrid.</td>
  </tr>
  <tr>
    <td>Sheet</td>
    <td>Object containing information about the sheet from which this snapshot was taken.</td>
  </tr>
  <tr>
    <td>UID</td>
    <td>ID of the sheet.</td>
  </tr>
  <tr>
    <td>URL</td>
    <td>URL to access the sheet in PlanGrid.</td>
  </tr>
  <tr>
    <td>Deleted</td>
    <td>Indicates whether this snapshot has been deleted in PlanGrid.</td>
  </tr>
</table>

## Task
In Workato, the PlanGrid connector can be used to create, update or get details of a task in PlanGrid. In addition to this, you'll also be able to create, update or get details of entire task lists in PlanGrid. When selecting the object type `Task`, or `Task list`, fields will be generated dynamically based on the action type you have chosen.

Below, we describe the object representation of a task in Workato.

### Representation of a task

<table>
  <tr>
    <th colspan="3">Field name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="3">Task ID</td>
    <td>Unique identifier (UID) of the task, never blank.</td>
  </tr>
  <tr>
    <td colspan="3">Project ID</td>
    <td>ID of the project containing the task.</td>
  </tr>
  <tr>
    <td colspan="3">Number</td>
    <td>The task number (specific to this project) as specific in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="3">Title</td>
    <td>The title of the task.</td>
  </tr>
  <tr>
    <td colspan="3">Status</td>
    <td>Current status of task. Possible values are "open", "in_review", "pending", "closed".</td>
  </tr>
  <tr>
    <td colspan="3">Type</td>
    <td>Indicates the type of task. Possible values are: issue, planned_work, other.</td>
  </tr>
  <tr>
    <td rowspan="3">Assignees</td>
    <td colspan="2">UID</td>
    <td>ID of the user.</td>
  </tr>
  <tr>
    <td colspan="2">Type</td>
    <td>Type of user assigned</td>
  </tr>
  <tr>
    <td colspan="2">List size</td>
    <td>Number of users assigned</td>
  </tr>
  <tr>
    <td rowspan="3">Watchers</td>
    <td colspan="2">UID</td>
    <td>ID of the user.</td>
  </tr>
  <tr>
    <td colspan="2">Type</td>
    <td>Type of user assigned</td>
  </tr>
  <tr>
    <td colspan="2">List size</td>
    <td>Number of users assigned</td>
  </tr>
  <tr>
    <td colspan="3">Location</td>
    <td>Location of the task as specific in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="3">Start date</td>
    <td>Timestamp of when the task is set to start in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="3">Due at</td>
    <td>Timestamp of when the task is due in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="3">Closed at</td>
    <td>Timestamp of when the task was closed in PlanGrid. Available only once the task has been closed.</td>
  </tr>
  <tr>
    <td colspan="3">Stamp</td>
    <td>The task stamp selected in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="2">Task List</td>
    <td colspan="2">Task list ID</td>
    <td>ID of the task list.</td>
  </tr>
  <tr>
    <td colspan="2">URL</td>
    <td>URL to access the task list in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="3">Description</td>
    <td>Description of the task.</td>
  </tr>
  <tr>
    <td colspan="3">Cost impact</td>
    <td>Number indicating the cost impact to the project as a result of this task.</td>
  </tr>
  <tr>
    <td colspan="3">Has cost impact</td>
    <td>Indicates whether the task has a cost impact.</td>
  </tr>
  <tr>
    <td colspan="3">Currency code</td>
    <td>Currency of the cost impact.</td>
  </tr>
  <tr>
    <td colspan="3">Schedule impact</td>
    <td>Time in seconds by which this task is impacting the project schedule.</td>
  </tr>
  <tr>
    <td colspan="3">Has schedule impact</td>
    <td>Indicates whether the task has a schedule impact.</td>
  </tr>
  <tr>
    <td rowspan="7">Current annotation</td>
    <td colspan="2">UID</td>
    <td>ID of the annotation in PlanGrid</td>
  </tr>
  <tr>
    <td colspan="2">Color</td>
    <td>The color assigned to the annotation in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">Stamp</td>
    <td>The stamp assigned to the annotation in PlanGrid (if any)</td>
  </tr>
  <tr>
    <td colspan="2">Visibility</td>
    <td>The visibility level of the annotation. Can be either “user” or “master”. User indicates a team member (or former team member) has not published the annotation to the project. Never blank</td>
  </tr>
  <tr>
    <td colspan="2">Deleted</td>
    <td>Indicates whether the annotation has been deleted in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="2">Sheet</td>
    <td>UID</td>
    <td>ID of the sheet.</td>
  </tr>
  <tr>
    <td>URL</td>
    <td>URL to access the sheet in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="2">Comments</td>
    <td colspan="2">Total count</td>
    <td>Total number of comments on the task.</td>
  </tr>
  <tr>
    <td colspan="2">URL</td>
    <td>URL to access the comments on the task in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="2">Photos</td>
    <td colspan="2">Total count</td>
    <td>Total number of photos associated with the task.</td>
  </tr>
  <tr>
    <td colspan="2">URL</td>
    <td>URL to access the photos on the task in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="3">Deleted</td>
    <td>Indicates whether this task has been deleted in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="3">Created at</td>
    <td>Timestamp of when the task was created PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="3">Created by</td>
    <td colspan="2">UID</td>
    <td>ID of the user.</td>
  </tr>
  <tr>
    <td colspan="2">URL</td>
    <td>URL to access the user’s profile in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">Email</td>
    <td>Email of the user in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="3">Updated at</td>
    <td>Timestamp of when the task was last updated in PlanGrid.</td>
  </tr>
  <tr>
    <td rowspan="3">Updated by</td>
    <td colspan="2">UID</td>
    <td>ID of the user.</td>
  </tr>
  <tr>
    <td colspan="2">URL</td>
    <td>URL to access the user’s profile in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">Email</td>
    <td>Email of the user in PlanGrid.</td>
  </tr>
</table>

## User
In Workato, the PlanGrid connector can be used to create or get details of a user in PlanGrid. When selecting the object type `user`, fields will be generated dynamically based on the action type you have chosen.

Below, we describe the object representation of a user in Workato.

### Representation of a user

| ﻿Field name | Description |
|---------------------|--------------------|
| Email | Email of user in PlanGrid |
| Project ID | ID of the project the user belongs to. |
| Role ID | ID of the role to assign to the user on this project |
| First name | First name of user |
| Last name | Last name of user |
| Language | Native language of user |

## Role
In Workato, the PlanGrid connector can be used to get details of a role in PlanGrid. When selecting the object type `role`, fields will be generated dynamically based on the action type you have chosen.

Below, we describe the object representation of a role in Workato.

### Representation of a role

| ﻿Field name | Description |
|---------------------|--------------------|
| UID | ID of the role |
| Role | Role in project |
| Project ID | ID of the project |
