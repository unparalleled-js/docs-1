---
title: Workato connectors - Approve/reject inbox task action
date: 2019-08-01 00:00:00 Z
---

# Workday REST - Approve/reject inbox task action

Use this action to approve or reject an inbox task. For this action to be successful, the inbox task must have a **Step type** (API name: stepType) descriptor of **Approval**.

![Approve/reject inbox task action](/assets/images/workday-rest/approve-reject-inbox-task.png)
*Approve/reject inbox task action*

### Input fields
| Input field     | Description                                     |
| --------------- | ----------------------------------------------- |
| Inbox task ID   | Workday ID of the inbox task to approve/reject. |
| Action          | Select either **Approve** or **Reject**.        |

### Output fields

| Output field    | Description                           |
| --------------- | ------------------------------------- |
| Descriptor      | Indicates *Approval by Manager* task. |
| ID              | Workday ID of the inbox task.         |
| HREF            | API resource URL of the inbox task.   |
