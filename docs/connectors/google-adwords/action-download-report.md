---
title: Workato connectors - Google AdWords Action - Download Advertising Report
date: 2020-01-29 06:00:00 Z
---

# Google Ads action - Download Advertising report
This action downloads a chosen advertising report from Google Ads.

## Input fields

| Field name | Description |
|---|---|
| Client Customer ID | The client customer ID of the advertising account from which data should be included in the report. This Client Customer ID should be the ID of one the accounts managed by the Google Ads manager account specified in this connection. This should come in the form of XXX-XXX-XXXX. <br><br> Click [here](https://support.google.com/google-ads/answer/1704344?hl=en) to learn more on how to get your client customer ID. |
| Report Type | Workato's download advertising report supports all possible reports from the AdWords API. Find the list [here](https://developers.google.com/adwords/api/docs/appendix/reports) |
| Date range type | Select the range of the report to pull. Select custom date range to be able to define custom date ranges. This will prompt 2 new input fields for the start and end date which can be pegged to dynamic start and end dates. |
| Fields | Select the columns you want pulled in the report. These columns are specific to the report selected earlier and not all fields can be selected together. Find your select report from [here](https://developers.google.com/adwords/api/docs/appendix/reports) to find fields that are not compatible with each other. |
| Download report in raw format | If you would like to download the report in a specific format such as XML, CSV or TSV, select Yes. By default this is No and the output of the report can be used as datapills in downstream actions. |
| Predicates | Use predicates to add filters to your report based on the fields available |
| Skip report header | Exclude header row containing the report name and date range in the report. Default value is false. |
| Skip column header | Exclude column row containing field names in the report. Default value is false. |
| Skip report summary | Exclude summary row containing report totals in the report. Default value is false. |
| Use display name | Replaces each field's column header name with the display name seen in the UI instead of the API name. Default value is false. |
| Include zero impressions | NOTE: Not all report types support this field; leave blank if it doesn't. Check your report type [here](https://developers.google.com/adwords/api/docs/appendix/reports) to learn more. Include rows where all specified metric fields are zero, provided the requested fields and predicates support zero impressions. |

## Output fields

**If Download report in raw format is No (Default)**
| Field name | Description |
|---|---|
| Report Name | Contains the name of the report |
| Date range | Contains a string describing the date range of the report in absolute dates |
| Table | Contains 2 attributes. An object describing the column names of the report and a list of rows describing a single record in the report|

**If Download report in raw format is Yes**
| Field name | Description |
|---|---|
| Downloaded report | Contains the raw data of the report in a specified format |
