---
title: Workato connectors - PlanGrid
date: 2019-09-09 12:00:00 Z
---

# PlanGrid object triggers and actions
The PlanGrid connector in Workato provides triggers and actions that allows you to select the object you want to work with when configuring the step. The required input fields will then be dynamically generated based on the object you select.

The following triggers are supported:
* New object
* New or updated object

The following actions are supported:
* Create object
* Get object
* Update object
* Upload object


## Objects
| Object name                   | Available actions types                     | Triggers              |
| ------------------------------|---------------------------------------------|-----------------------|
| Document     | [Get, Update, Upload](/connectors/plangrid/object-action.md#document)    | [New](/connectors/plangrid/object-trigger.md#document)           |
| Photo     | [Get, Update, Upload](/connectors/plangrid/object-action.md#photo)                        | [New](/connectors/plangrid/object-trigger.md#photo)           |
| RFI         | [Create, Get, Get status, Update](/connectors/plangrid/object-action.md#rfi)                | [New/updated, New](/connectors/plangrid/object-trigger.md#rfi)           |
| Annotation |                                             | [New](/connectors/plangrid/object-trigger.md#Annotation)           |
| Field report | [Get](/connectors/plangrid/object-action.md#field-report)                                            | [New/updated, New](/connectors/plangrid/object-trigger.md#field-report)           |
| Project                 | [Create, Get, Update](/connectors/plangrid/object-action.md#project)                            | [New/updated, New](/connectors/plangrid/object-trigger.md#project)           |
| Sheet    | [Create version upload, Complete version upload, Create sheet packet, Get, Get sheet packet, Upload file to sheet version](/connectors/plangrid/object-action.md#sheet)   | [New](/connectors/plangrid/object-trigger.md#sheet) |
| Snapshot   | [Get](/connectors/plangrid/object-action.md#snapshot)                                            | [New](/connectors/plangrid/object-trigger.md#snapshot)           |
| Task        | [Create, Create task list, Get task, Get task list, Update task, Update task list](/connectors/plangrid/object-action.md#task)    | [New/updated, New](/connectors/plangrid/object-trigger.md#task) |

This is a non-exhaustive list of objects and there are still more enhancements to come. If you see an object that we don't currently support, you can use custom actions that allow you to send custom HTTP requests.
