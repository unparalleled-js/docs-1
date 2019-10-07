---
title: Workato connectors - Workday get report
date: 2017-11-05 09:00:00 Z
isTocVisible: true
---

# Get report

## How to use
Workday Report-as-a-Service is exposed as an action in Workato. This action will execute a run of the report, retrieve all data from that report and return them as an array. This data can be used in a recipe like any other actions. Learn how to set up a custom report [here](/connectors/workday/workday_raas.md).

## Inputs
Provide the report URL to run and retrieve a report from Workday.

![Run report input](/assets/images/connectors/workday/raas_input.png)
*Run report input*

| Input field | Description |
| ----------- | ----------- |
| Report URL  | Find out how to get this URL in the [Custom Reports](/connectors/workday/workday_raas.md) section of this documentation. When this URL is provided, the Workday action will generate the appropriate output fields. |
| Detect report schema automatically | If you do not want Workato to inspect the report, select `No`. Then, [configure your report schema](#configure-report-parameters-and-columns).<br><b>This should be used when you intend to use a dynamic value for the report URL.</b><br>If left blank, report schema will be detected automatically. |
| Remove empty fields | If `Yes`, Workato will remove all `Null values` and leave the field empty.<br> Default is `Yes`. |
| Additional fields | If some report fields (e.g. nested fields) do not appear in the action output, use this input field to define them. |

## Configure report parameters and columns

![Configure report parameters and columns manually](/assets/images/connectors/workday/custom-report-schema-input.png)
*Configure report parameters and columns manually*

Sometimes, you need to use a dynamic value for the report URL. A common reason is to maintain recipes across multiple Workday environments (dev and production). Even though reports in both environments have the same schema, they will have different report URLs. So to reduce the work needed to maintain the recipes, you can manage and reuse the same recipe by using an account properties datapill to assign it the appropriate report URL.

> In this case, select `No` for the **Detect report schema automatically** input field.

Consequently, Workato will not be able to generate the report schema automatically. This is because the actual report url is only evaluated when a recipe job is processed. When you are building the recipe, the report URL is still unknown, so there will not be any information about the report schema.

When you do that, additional input fields will appear for you to manually define your report [parameters](/connectors/workday/workday_raas.md#filter-parameters) and columns.

| Additional input fields | Description |
| ------------------- | ---------- |
| Report Parameters   | The filter parameters for your custom report. Input the **parameter alias** and the **value** according to how your custom report is configured. |
| Report columns      | The output of your report. List the columns of your workday custom report. This schema will be converted into usable datapills for subsequently recipe actions on Workato. |

## Outputs
The output of this action is presented as an array. Each element in this array corresponds to a row in the report. Similarly, each column in your report will be rendered as a field in the report output array.

If you configured a custom schema in **Report column**, the custom report columns will be reflected as datapills.

![Outputs from Get report action](/assets/images/connectors/workday/raas_output.png)
*Outputs from Get report action*

## Use cases

#### Generate a custom CSV file
A very simple use case for running and retrieving custom report data from Workday is to create a CSV file from the report. This can be done using the **CSV by Workato**.

![Create CSV file](/assets/images/connectors/workday/compose-csv.png)
*Create CSV file from Workday custom report data*

#### Filter rows using custom logic
Workday provides a comprehensive feature to add filters and validation logic to report results. However, it is limited to data available in Workday. Workato allows you to extract report data out of Workday, and execute validation logic against data from multiple sources.

![Custom filter logic](/assets/images/connectors/workday/multi_app_filter.png)
*Custom filter logic using data from external applications*

This example shows how to filter out rows in a report against data from Salesforce but checking for the presence of a corresponding Salesforce User account. The resulting report will contain only employees from Workday that are active Salesforce Users.
