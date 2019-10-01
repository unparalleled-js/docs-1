---
title: Workato connectors - Workday scheduled report trigger
date: 2017-11-05 09:00:00 Z
isTocVisible: true
---

# Workday scheduled report trigger

## How to use
This trigger is a combination of a Scheduler (advanced) and Workday RaaS action. When configured, it will run a report in Workday at pre-defined times and return results of the report in [batches](/features/batch-processing.md). The batch size limit is `200`.

### Inputs
The required inputs are naturally a combination of both the Scheduler trigger and Workday RaaS actions.

First, configure the Workday report to retrieve.

- Provide the RaaS report URL of the Workday report. Click [here](/connectors/workday/workday_raas.md) to learn how to retrieve the RaaS URL.
- If the report requires inputs (e.g. filter parameters), additional input fields will be generated. Find out more about input configuration [here](/connectors/workday/get_report.md#custom-report-inputs).

Second, configure the scheduler.

- Refer to documentation about configuring the advanced scheduler trigger [here](/features/scheduler.md).

![Scheduled report input](/assets/images/connectors/workday/scheduled-report-input.png)
*Scheduled report configuration*

### Outputs
This trigger returns a number of fields:

| Field                   | Description |
| ----------------------- | ----------- |
| Scheduled time          | The time that the report was ran. |
| Total number of records | The total number of rows generated in the scheduled run of the report. If this report has more than 200 rows, they will be split into batches of 200 rows per batch. Each batch will then be processed as individual jobs, in the same sequence as returned by the Workday RaaS endpoint. |
| Starting offset         | The offset number for the first row of this batch. For example, if there are `1000` rows and the current job is showing rows `201-400`. The starting offset is `200`. |
| Ending offset           | The offset number for the last row of this batch. For example, if there are `1000` rows and the current job is showing rows `201-400`. The starting offset is `399`. |
| First batch             | A boolean value indicating if this is the first batch. |
| Last batch              | A boolean value indicating if this is the last batch. |
| Rows                    | Each batch of rows is returned as a list (array). Each item in this list corresponds to a row in the report. Similarly, each column in your report will be rendered as a field in the output datatree. |

#### Using first/last batch in your recipe logic
You can use the values from **first batch** and **last batch** and integrate them into your recipe logic. For example, this is useful when you want to create a file from the output of a Workday report. Your recipe will contain the following logic:

if `First batch` is `true`
- Create a new file with contents of the first batch

if `First batch` is `false`
- Append lines to an existing file

if `Last batch` is `true`
- Send notification about successful transfer of report content
