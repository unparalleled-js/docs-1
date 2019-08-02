---
title: Handling CSV
date: 2017-03-07 22:00:00 Z
---

# Handing CSV
A Comma-separated values (CSV) file is a text file that stores tabular data. It stores the data in a human-readable plain text.

In order to convert CSV content into useable datapills, parse it with [Workato's built-in CSV parser](parsing-csv-files-via-csv-by-workato) or use a [connector-specific CSV parser](#parsing-csv-files-via-external-parser).

We will be using the following sample CSV content:
```
Manufacturer, Model, Category, Item Name, Item Code, Description, Unit Cost, Unit Price, Taxable, Tax, Custom Field 1, Custom Field 2, Custom Field 3
Sierra Gardening, MS-321, Gardening supplies, Pine wood potting bench, MS-321, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Pine, White, 30 inches
Sierra Gardening, MS-322, Gardening supplies, Cherry wood potting bench, MS-322, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Cherry, Natural, 30 inches
Sierra Gardening, MS-323, Gardening supplies, Cedar wood potting bench, MS-323, Oakwood potting bench, 74.50, 119.99, Yes, 0.0875, Cedar, Black, 30 inches
```

### Parsing CSV files via CSV by Workato
Most triggers return CSV files without additional processing. You can use **CSV by Workato** to read the text content of the CSV file. This will allow you to move individual rows and transform the data as required by your use-case.

In this example, new CSV files are picked up in Dropbox. However, the file content is not yet accessible. Run the **Parse CSV** action to obtain a list of lines/rows (each line has a set of inventory item values).

![Download file and parse CSV](/assets/images/features/handling-csv-files/download-file-and-parse-csv.png)
*Download file and parse CSV. See the sample recipe [here](https://www.workato.com/recipes/492685)*

#### Input field
| Input fields     | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| CSV contents     | Select the CSV file as input.                                |
| Column separator | Select the character that separates columns in the CSV file. |
| CSV contents contain header line | Indicate if there is a header line.          |
| Header line      | Specify the header line of your CSV file.                    |
| Keep track of columns by | Configure this if your CSV contents does not have a fixed column order. |
| Quote Character  | The character used to quote the CSV cell values. Select `none` if no quote character is used. |

#### Output field
This action will generate an arrays of lines, with each line containing the schema as defined in your **header line**. As this is an array object, you would have to use a [repeat action](/recipes/steps.md#repeat-step) to iterate through the rows.

In our sample recipe, we iterate through each line of the array object and create a task in Wrike.

![Mapping of datapills from the Repeat step datatree to the action](/assets/images/features/handling-csv-files/parse-csv-mapping.png)
*Mapping of datapills from the Repeat step datatree to the action*

For more information on working with list, see [here](/features/list-management.md)

### Parsing CSV files via external parser
Certain connectors have triggers/actions that parse CSV content. The [Box connector](/connectors/box.md) has this capability. You can simply listen to **new CSV files** and parse them via the same trigger.

![CSV file parsing in Box trigger](/assets/images/features/handling-csv-files/csv-file-parsing-recipe.png)
*CSV file parsing in Box trigger. See the sample recipe [here](https://www.workato.com/recipes/485023)*

#### Input field
Similarly, input the header line for the CSV in the **Field names**. This is necessary to generate datapills in the output.

![Define expected columns in CSV](/assets/images/features/handling-csv-files/define-expected-csv-columns.png)
*Defining the expected columns in the CSV files that the recipe will pick up. [Example recipe](https://www.workato.com/recipes/485023)*

> Note - even if you have CSV files with other schema and different header lines in the selected folder and sub-folders, the **New CSV file** trigger will pick up those CSV files as well and attempt to process them with the header specified. This may lead to job errors or bad data being moved into your app. Ensure that you're only picking up the files you want by keeping all the relevant CSV files in the monitored folder, or by adding a trigger filter to filter only files to pick up.

#### Output field
The output from the **Box CSV parser** is the the same as the output from **CSV by Workato**. The columns in the CSV content (as defined in the trigger) will show up as usable variables which can be used to map into subsequent recipe steps.

Similarly, run a **repeat action** to iterate through the list of CSV rows.

![Using the variables defined in the Box trigger](/assets/images/features/handling-csv-files/use-defined-csv-variables.png)
*Using the variables defined in the Box trigger*
