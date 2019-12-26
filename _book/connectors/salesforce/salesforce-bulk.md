---
title: Salesforce Batch Operations
date: 2018-01-04 06:15:00 Z
---

# Salesforce bulk operations

Salesforce supports capabilities for bulk data load. Workato uses the [bulk API 2.0](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm) to support the loading of data in bulk from a CSV file into Salesforce. Supported operations are:
- Create objects in bulk via CSV file
- Update objects in bulk via CSV file
- Upsert objects in bulk via CSV file
- Retry objects bulk job in Salesforce via CSV file

The difference between bulk load via CSV file actions and non-CSV file bulk actions are as follows.

| Bulk load via CSV file                               | Non-CSV bulk actions                               |
|------------------------------------------------------|----------------------------------------------------|
| Can process millions of records                      | Limited to 2k records per action                   |
| Does not support data transformation                 | Supports data transformation                       |
| Data is streamed only from CSV file into bulk action | Data can be from multiple sources into bulk action |

Workato also supports [batch operations](/connectors/salesforce/batch-operations.md) to create and update objects in batches (max size of 2000 per batch).

## Permissions required

The `Manage Data Integrations` and `API Enabled` permissions are required on the connected Salesforce User's account to allow all bulk operations to work correctly. Please note that you need to be the system administrator in order to enable these permissions. View this [document](https://help.salesforce.com/articleView?id=monitoring_async_api_jobs_overview.htm&type=5) for more information.

## Create/update/upsert objects in bulk via CSV file
There are 4 main sections/components in these bulk actions.

![Salesforce bulk create via CSV file action sections](/assets/images/salesforce-docs/bulk-create-action-sections.png)
*Salesforce bulk create via CSV file action sections*

| Action section | Description |
| -------------- | ----------- |
| [CSV file input](#csv-file-input) | Define the schema of the CSV files containing Salesforce bulk load data.                                                                      |
| [Salesforce object to create/update/upsert](#salesforce-object-to-create-update-upsert) | Define the Salesforce object to write to, as well as `External ID` for upsert operation. |
| [CSV to Salesforce field mapping](#csv-to-salesforce-field-mapping) | Describe how the CSV data columns should map into Salesforce object fields. |
| [Advanced configuration](/#advanced-configuration) | Define the size per Salesforce bulk job. Define whether this action should be synchronous or asynchronous. |

Let's go into each section in detail.

### CSV file input
In this section, define the schema of the CSV files containing Salesforce bulk load data. This enables Workato to read and extract data from your CSV files and move it into Salesforce accurately. These are the fields to fill in:

![Salesforce bulk action - unconfigured CSV file input section](/assets/images/salesforce-docs/unconfigured-bulk-action-csv-file-input-section.png)
*Salesforce bulk action - unconfigured CSV file input section*

| Input field           | Description                                                                                                                                                                                                                     |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| File content          | Provide the CSV file content here. This would typically be a datapill from a **Download file** action or from a **New file** trigger.                                                                                               |
| Column separator      | Describe the delimiter of your file - this can be comma, tab, colon, pipe or space.                                                                                                                                             |
| Contains header line? | Describe whether the CSV file content you're providing contains a header line or not. This will tell Workato whether to skip the first line for processing, because we don't want to inaccurately process header lines as data. |
| Columns names         | Describe the names of the data columns in your CSV file. This will be used to generate the available CSV data for mapping into Salesforce in the **CSV to Salesforce field mapping** section.                         |

This is how the section should look after configuration.

![Salesforce bulk action - configured CSV file input section](/assets/images/salesforce-docs/bulk-action-csv-file-input-section.png)
*Salesforce bulk action - configured CSV file input section*

In our example, we used the sample CSV file below.

```
external_id,first_name,last_name,total_recipe_count
"a0K1h000003fXSS","Jenna","Minnes","54"
"a0K1h000003fehx","Kathrine","Lecompte","12"
"a0K1h000003fjnv","Mariela","Fester","28"
```

### Salesforce object to create/update/upsert
For the create and update operations, select the Salesforce object you wish to write to.

![Salesforce bulk create action - configured Salesforce object section](/assets/images/salesforce-docs/salesforce-object-to-bulk-create-config.png)
*Salesforce bulk create action - configured Salesforce object section*

For the upsert operations, select the Salesforce object you wish to write to as well as the external ID field of the object. In order to carry out the bulk upsert action, your Salesforce object must have an external ID field.

![Salesforce bulk upsert action - configured Salesforce object section](/assets/images/salesforce-docs/salesforce-object-to-bulk-upsert-config.png)
*Salesforce bulk upsert action - configured Salesforce object section*

### CSV to Salesforce field mapping
In this section, describe how your data should flow from the CSV file into the Salesforce object. The input fields are generated from your selection of Salesforce object to create/update/upsert, while the picklist is generated from your CSV column names in the **CSV file input** section.

When unconfigured, this section will not map any data into Salesforce.

![Salesforce bulk upsert action - unconfigured fields mapping section](/assets/images/salesforce-docs/bulk-action-unconfigured-fields-mapping.png)
*Salesforce bulk upsert action - unconfigured fields mapping section*

For each field that you wish to write to in Salesforce, select which column of the CSV file the data should come from. This action does not allow datapills or data transformation via formula mode as it streams the CSV file data into Salesforce.

This is how the section should look after configuration.

![Salesforce bulk upsert action - configured fields mapping section](/assets/images/salesforce-docs/bulk-action-configured-fields-mapping.png)
*Salesforce bulk upsert action - configured fields mapping section*

### Advanced configuration
In this section, define whether the action should be synchronous or asynchronous. If synchronous, Workato waits for Salesforce to complete the bulk job processing before moving to the next recipe action. If asynchronous, Workato simply uploads the CSV file content into Salesforce and move to the next recipe action without waiting for Salesforce to complete the bulk job processing.

You can also define the size of the CSV file chunk per Salesforce bulk job. This defaults to 10MB.

## Understanding the output datatree
The bulk operation's output datatree contains the following.

![Salesforce bulk operation output datatree](/assets/images/salesforce-docs/bulk-operation-datatree.gif)
*Salesforce bulk operation output datatree*

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th>Output datapill</th>
        <th colspan="2">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>All records successfully processed?</td>
      <td colspan="2">True if all CSV rows across Salesforce bulk jobs are processed successfully. False if any CSV rows across Salesforce bulk jobs failed.</td>
    </tr>
    <tr>
      <td>Number of records failed</td>
      <td colspan="2">Total number of CSV rows that failed to be successfully processed in Salesforce.</td>
    </tr>
    <tr>
      <td>Number of retried records</td>
      <td colspan="2">Total number of CSV rows that were retried to be processed in Salesforce. Only relevant for the retry action.</td>
    </tr>
    <tr>
      <td>Number of records processed</td>
      <td colspan="2">Total number of CSV rows that were processed in total by Salesforce (failed + succeeded).</td>
    </tr>
    <tr>
      <td>CSV content with failed records</td>
      <td colspan="2">CSV file content containing CSV rows in the original API request which failed to be successfully processed.  2 additional columns are added to this CSV file - **sf__Error** and **sf__Id**. Refer to the <a href="https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/get_job_failed_results.htm">Salesforce documentation</a> for more information.</td>
    </tr>
    <tr>
      <td rowspan="5">Salesforce bulk jobs</td>
      <td colspan="2">If CSV file is large, Workato will split the CSV file into chunks and process them as separate Salesforce bulk jobs in order to comply with Salesforce API size limits.<br><br>Each bulk job in the list will have the following data.</td>
    </tr>
    <tr>
      <td>Job ID</td>
      <td>Internal Salesforce ID of the Salesforce bulk job created</td>
    </tr>
    <tr>
      <td>Number of records failed</td>
      <td>Number of records failed to be processed successfully by Salesforce</td>
    </tr>
    <tr>
      <td>Number of records processed</td>
      <td>Number of records processed in total by Salesforce (i.e. number of rows in CSV file excluding header row)</td>
    </tr>
    <tr>
      <td>List size</td>
      <td>Synthetic field that tells us how many Salesforce bulk jobs were created in total</td>
    </tr>
  <tbody>
</table>

The aggregated results across bulk jobs can be found at the top of the datatree.

![Salesforce bulk operation output datatree - aggregated results across bulk jobs](/assets/images/salesforce-docs/bulk-operation-datatree-aggregate-numbers.png)
*Salesforce bulk operation output datatree - aggregated results across bulk jobs*

The list of Salesforce bulk jobs can be found at the bottom of the datatree.

![Salesforce bulk operation output datatree - list of bulk jobs](/assets/images/salesforce-docs/bulk-operation-datatree-array-of-jobs.png)
*Salesforce bulk operation output datatree - list of bulk jobs*

## Retry bulk job for failed records from CSV file
The retry action has a single input field **CSV content with failed records** that expects the <kbd>CSV content with failed records</kbd> datapill from a previous Salesforce bulk operation action. By passing that CSV content in, Workato will understand the previous configuration you have done (i.e. what your CSV file looks like, what Salesforce object to write to and how the CSV data should be mapped into Salesforce fields).

The retry action is synchronous. This means that the recipe will only continue to the next action when Salesforce has finished processing all CSV rows into Salesforce.

![Configured Salesforce bulk retry action](/assets/images/salesforce-docs/configured-bulk-retry-action.png)
*Configured Salesforce bulk retry action*

### Example recipe
Let's go through an example recipe using the bulk upsert via CSV file action as well as the retry bulk job action.

![Sample recipe - Salesforce bulk upsert via CSV file](/assets/images/salesforce-docs/sample-bulk-upsert-recipe.png)
*Sample recipe - Salesforce bulk upsert via CSV file. [Example recipe](https://www.workato.com/recipes/686080)*

The S3 trigger monitors new CSV files dropped into an S3 bucket, and we stream the data from the CSV file into Salesforce via the **Upsert objects in bulk via CSV file** Salesforce action. If this upsert operation is not fully successful, i.e. at least 1 CSV row did not get written into Salesforce successfully, we use the **Retry objects bulk job in Salesforce via CSV file** action to attempt to write the failed CSV rows into Salesforce again.

The Salesforce actions **Upsert objects in bulk via CSV file** and **Retry objects bulk job in Salesforce via CSV file** will manage large files for you. For large CSV files over a couple of GBs in size, Workato will chunk the CSV file into sizes under the Salesforce bulk API size limits and create multiple Salesforce bulk jobs.

The CSV file we use is as follows.

```
external_id,first_name,last_name,total_recipe_count
"a0K1h000003fXSS","Jenna","Minnes","54"
"a0K1h000003fehx","Kathrine","Lecompte","12"
"a0K1h000003fjnv","Mariela","Fester","28"
```

Here is the configured bulk upsert action.

![Configured Salesforce bulk upsert action](/assets/images/salesforce-docs/configured-bulk-upsert-action.png)
*Configured Salesforce bulk upsert action*

Subsequently, the recipe checks to see if any records failed to be processed successfully by Salesforce. this could be due to many reasons such as:
- Data errors
- Records were locked as someone else/another process was editing them
- Network issues

![If condition checking for any failed records](/assets/images/salesforce-docs/if-condition-for-successful-bulk-jobs.png)
*If condition checking for any failed records*

If any records failed, <kbd>All records successfully processed?</kbd> will be `false`, and the recipe will proceed to carry out the retry action.

![Configured retry bulk operation action](/assets/images/salesforce-docs/configured-retry-object-bulk-job-in-sample-recipe.png)
*Configured retry bulk operation action*
