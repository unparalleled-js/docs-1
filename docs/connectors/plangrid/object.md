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

| Object name  | Available triggers | Available actions |
| ------------ | ------------------ | ----------------- |
| Document     | [New](/connectors/plangrid/object-trigger.md#document) | [Get, Update, Upload](/connectors/plangrid/object-action.md#document) |
| Photo        | [New](/connectors/plangrid/object-trigger.md#photo) | [Get, Update, Upload](/connectors/plangrid/object-action.md#photo) |
| RFI          | [New, New/updated](/connectors/plangrid/object-trigger.md#rfi) | [Create, Get, Get status, Update](/connectors/plangrid/object-action.md#rfi) |
| Annotation   | [New](/connectors/plangrid/object-trigger.md#annotation) | |
| Field report | [New, New/updated](/connectors/plangrid/object-trigger.md#field-report) | [Get](/connectors/plangrid/object-action.md#field-report) |
| Project      | [New, New/updated](/connectors/plangrid/object-trigger.md#project) | [Create, Get, Update](/connectors/plangrid/object-action.md#project) |
| Sheet        | [New](/connectors/plangrid/object-trigger.md#sheet) | [Create version upload, Complete version upload, Create sheet packet, Get, Get sheet packet, Upload file to sheet version](/connectors/plangrid/object-action.md#sheet) |
| Snapshot     | [New](/connectors/plangrid/object-trigger.md#snapshot) | [Get](/connectors/plangrid/object-action.md#snapshot) |
| Task         | [New, New/updated](/connectors/plangrid/object-trigger.md#task) | [Create, Create task list, Get task, Get task list, Update task, Update task list](/connectors/plangrid/object-action.md#task) |

This is a non-exhaustive list of objects and there are still more enhancements to come. If you see an object that we don't currently support, you can use custom actions that allow you to send custom HTTP requests.
