---
title: Workato connectors - Get inbox task(s) action
date: 2019-08-01 00:00:00 Z
---

# Workday REST - Get inbox task(s) action

This action returns all the inbox task record(s) for the connected user. Only the first 100 tasks are returned in descending order with the latest inbox task first.

> **If an integration user is used to connect, only inbox tasks for the integration user will be returned.**

### Input fields
This action has no input fields.

### Output fields

| Output field    | Description                                          |
| --------------- | ---------------------------------------------------- |
| Descriptor      | Title of the inbox task.                             |
| ID              | Workday ID of the inbox task.                        |
| HREF            | API resource URL of the inbox task.                  |
| Subject         | Subject object. Contains descriptor and ID.          |
| Overall process | Business process object. Contains descriptor and ID. |
| Status          | Status object. Contains descriptor and ID.           |
| Step type       | Step type object. Contains descriptor and ID.        |
| Assigned        | Date and time of assignment.                         |
| Due             | Due date of this inbox task.                         |
