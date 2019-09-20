---
title: Workato connectors - PlanGrid - object triggers
date: 2019-09-09 12:00:00 Z
isTocVisible: true
---

# PlanGrid object triggers
PlanGrid triggers poll your PlanGrid projects at set intervals and trigger recipes based on new or updated objects in PlanGrid. This trigger polls PlanGrid at set intervals for recently created or updated objects since the previous poll. When Workato finds a newly created or updated object, it will check whether it fulfills the trigger condition (if any) and execute a new job for each object it finds.

**Trigger conditions**

Trigger conditions are like filters in Workato. Turning on trigger conditions in Workato means you can selectively choose which events you want to trigger workflows. Conditions can be set on object attributes like status. For example, you may only want field reports that have been submitted to trigger a workflow and ignore archived or draft field reports.

**Input fields for object triggers**

Triggers are easy to set up on Workato and in most instances the only required input is the PlanGrid project. When you first start the recipe, you can also set the last time you want Workato to pull from, allowing you to pull events retrospectively.

**Output fields for object triggers**
Each new or new/updated object triggers a separate run. You can then use the output datapills in a subsequent step in your recipe.

## Objects Supported
* [New or New/updated project](#project)
* [New or New/updated Task](#task)
* [New or New/updated RFI](#rfi)
* [New or New/updated Field Report](#field-report)
* [New Sheet](#sheet)
* [New Document](#document)
* [New Annotation](#annotation)
* [New Photo](#photo)
* [New Snapshot](#snapshot)

## Project
Triggers when a new or updated project is detected in PlanGrid. Trigger will pick up the projects created/updated from the time the recipe has started.

### Input fields

| Field name    | Description                                 |
|---------------|---------------------------------------------|
| Object type   | Must be set to `Project`.                   |

### Output fields
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

## Annotation
Triggers when a new or updated annotation is added to a sheet in a PlanGrid project. Trigger will pick up the annotations created/updated from the time the recipe has started.

### Input fields

| Field name    | Description                                 |
|---------------|---------------------------------------------|
| Object type   | Must be set to `Annotation`.                |
| Project       | Project to monitor for new or updated annotations. Select from the dropdown list or input a project ID.               |

### Output fields

<table>
  <tr>
    <th colspan="2">Field name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td colspan="2">Annotation ID</td>
    <td>ID of the annotation.</td>
  </tr>
  <tr>
    <td colspan="2">Project ID</td>
    <td>ID of the project containing the file.</td>
  </tr>
  <tr>
    <td colspan="2">Color</td>
    <td>The color assigned to the annotation in PlanGrid.</td>
  </tr>
  <tr>
    <td colspan="2">Stamp</td>
    <td>The stamp assigned to the annotation in PlanGrid (if any).</td>
  </tr>
  <tr>
    <td colspan="2">Visibility</td>
    <td>The visibility level of the annotation. Can be either “user” or “master”. User indicates a team member (or former team member) has not published the annotation to the project. Never blank.</td>
  </tr>
  <tr>
    <td colspan="2">Deleted</td>
    <td>Indicates whether this annotation has been deleted.</td>
  </tr>
  <tr>
    <td rowspan="2">Sheet</td>
    <td>UID</td>
    <td>ID of the sheet the annotation is located on.</td>
  </tr>
  <tr>
    <td>URL</td>
    <td>The URL to access the sheet in PlanGrid that the annotation is located on.</td>
  </tr>
</table>

## Document
Triggers when a new or updated document is added to a PlanGrid project. Trigger will pick up the documents created/updated from the time the recipe has started.

### Input fields

| Field name    | Description                                 |
|---------------|---------------------------------------------|
| Object type   | Must be set to `Document`.                |
| Project       | Project to monitor for new or updated documents. Select from the dropdown list or input a project ID.               |

### Output fields

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
Triggers when a new or updated field report is created in a PlanGrid project. Trigger will pick up the field reports created/updated from the time the recipe has started.

### Input fields

| Field name    | Description                                 |
|---------------|---------------------------------------------|
| Object type   | Must be set to `Field report`.                |
| Project       | Project to monitor for new or updated field reports. Select from the dropdown list or input a project ID.               |

### Output fields

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
Triggers when a new or updated photo is added to a PlanGrid project. Trigger will pick up the photos created/updated from the time the recipe has started.

### Input fields

| Field name    | Description                                 |
|---------------|---------------------------------------------|
| Object type   | Must be set to `Photo`.                |
| Project       | Project to monitor for new or updated photos. Select from the dropdown list or input a project ID.               |

### Output fields

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
Triggers when a new or updated RFI is added to a PlanGrid project. Trigger will pick up the RFIs created/updated from the time the recipe has started.

### Input fields

| Field name    | Description                                 |
|---------------|---------------------------------------------|
| Object type   | Must be set to `RFI`.                |
| Project       | Project to monitor for new or updated RFIs. Select from the dropdown list or input a project ID.               |

### Output fields

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
Triggers when a new or updated sheet is added to a PlanGrid project. Trigger will pick up the sheets created/updated from the time the recipe has started.

### Input fields

| Field name    | Description                                 |
|---------------|---------------------------------------------|
| Object type   | Must be set to `Sheet`.                |
| Project       | Project to monitor for new or updated sheets. Select from the dropdown list or input a project ID.               |

### Output fields

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
Triggers when a new or updated snapshot is added to a PlanGrid project. Trigger will pick up the snapshots created/updated from the time the recipe has started.

### Input fields

| Field name    | Description                                 |
|---------------|---------------------------------------------|
| Object type   | Must be set to `Snapshot`.                |
| Project       | Project to monitor for new or updated snapshots. Select from the dropdown list or input a project ID.      |

### Output fields

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
Triggers when a new or updated task is added to a PlanGrid project. Trigger will pick up the tasks created/updated from the time the recipe has started.

### Input fields

| Field name    | Description                                 |
|---------------|---------------------------------------------|
| Object type   | Must be set to `Task`.                |
| Project       | Project to monitor for new or updated tasks. Select from the dropdown list or input a project ID.      |

### Output fields

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
