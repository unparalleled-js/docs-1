---
title: Handling CSV files
date: 2017-03-07 22:00:00 Z
---

# Handing CSV files
A Comma-separated values (CSV) files is a text file that stores tabular data. It stores the data in a human-readable plain text format. 

On Workato, you can work with CSV files with the **CSV by Workato** connector. **CSV by Workato** is a native application that allows you to work with CSV files with [parse] and [compose] actions.

## Connection setup
No connection setup is required. Simply select **App** > **CSV by Workato** to get started.

![CSV by Workato](/assets/images/features/csv-by-workato.png)
*CSV by Workato*

## Parsing CSV file
When receiving CSV files, you have to parse the CSV file content in order to use them as datapills in your recipe. Workato faciliatates this in 2 ways:
- **CSV by Workato** [connector](#iaso)
- - Connectors with built-in CSV parsing

We will be using the following sample CSV file.

```
Manufacturer, Model, Category, Item Name, Item Code, Description, Unit Cost, Unit Price, Taxable, Tax, Custom Field 1, Custom Field 2, Custom Field 3
Sierra Gardening, MS-321, Gardening supplies, Pine wood potting bench, MS-321, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Pine, White, 30 inches
Sierra Gardening, MS-322, Gardening supplies, Cherry wood potting bench, MS-322, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Cherry, Natural, 30 inches
Sierra Gardening, MS-323, Gardening supplies, Cedar wood potting bench, MS-323, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Cedar, Black, 30 inches
```

### Parsing CSV files via CSV by Workato
Most triggers return CSV files without additional processing. You can use **CSV by Workato** to read the text content of the CSV file. This will allow you to move individual values and transform the data as required by your use-case. 

In the following [sample recipe](https://www.workato.com/recipes/492685), new CSV files are picked up in Dropbox. However, the file content is not yet accessible. Run the **Parse CSV** action to obtain a list of lines (each line has a set of inventory item values).

![Download file and parse CSV](/assets/images/features/files-and-attachments/download-file-and-parse-csv.png)
*Download file and parse CSV*

| Input fields      | Description                                                                    |
| ----------------- | ------------------------------------------------------------------------------ |
| CSV contents      | Select the CSV file as input.                                                  |
| Column separator  | Select the character that seperates columns in the CSV contents.               |
| CSV contents contain header line | Select `Yes` if there is a header line. Otherwise, select `No`. |
| Header line       | Specify the header line of your CSV file.                                      |
| Keep track of columns by | Configure this if your CSV contents does not have a fixed column order. |
| Quote Character   | The chracter used to quote the CSv cell values. Select `none` if no quote character is used. |

The **Parse CSV** action's datatree returns a list of CSV lines. In order to iterate through this list of CSV lines, we have to use a [repeat action](/recipes/steps.md#repeat-step). The following shows the mapping of datapills from the `for each` datatree to the input fields of Wrike's **Create Task** action.

![Mapping of datapills from the Repeat step datatree to the action](/assets/images/features/handling-csv-files/parse-csv-mapping.png)
*Mapping of datapills from the Repeat step datatree to the action*

### Parsing CSV files via external parser 
Certain connectors are able to process CSV files. The Box connector this capability. You can simply listen to **new CSV files** and parse them via the same trigger. See the sample recipe [here](https://www.workato.com/recipes/485023)

![CSV file parsing in Box trigger](/assets/images/features/handling-csv-files/csv-file-parsing-recipe.png)
*CSV file parsing in Box trigger*

When using the Box **new CSV file** trigger, the expected columns in CSV files has to be declared for Workato to know how the data is structured. From this declaration, Workato will build the trigger output datatree for use in subsequent actions.

![Define expected columns in CSV](/assets/images/features/handling-csv-files/define-expected-csv-columns.png)
*Defining the expected columns in the CSV files that the recipe will pick up. [Example recipe](https://www.workato.com/recipes/485023)*

The output of a external parser will be the same as the output for **CSV by Workato**. Similarly, run a **repeat action** to iterate through the list of CSV lines. 

> Note - even if you have CSV files with other schema and different header lines in the selected folder and sub-folders, the **New CSV file** trigger will pick up those CSV files as well and attempt to process them with the header specified. This may lead to job errors or bad data being moved into your app. Ensure that you're only picking up the files you want by keeping all the relevant CSV files in the monitored folder, or by adding a trigger filter to filter only files to pick up.

The columns defined in the **Box new CSV file** trigger shows up as usable variables in the output datatree. These variables can be used to map into subsequent recipe steps.

![Using the variables defined in the Box trigger](/assets/images/features/handling-csv-files/use-defined-csv-variables.png)
*Using the variables defined in the Box trigger*
