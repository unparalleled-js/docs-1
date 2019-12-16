---
title: Handling files and attachments
date: 2017-02-22 12:00:00 Z
---
# Handling files and attachments
Files and attachments are a key aspect of many integrations. Your recipes might involve data formats that are not found in the [standard datapill list](/recipes/data-pills-and-mapping.md#data-types). Workato enables you to move file and attachments of different formats (e.g. JSON, XML) across different access/transport mechanism (e.g. FTP, file system, APIs, S3).

For instance, you may need to upload a CSV file to Redshift or move attachments from Salesforce to Zendesk.

## Text files
Text files refers to files which can be opened with any text editor and is generally human-readable. Workato can act as the intermediary to move files from one app to another, as well as extract data from text files and parse it for use in Workato.

For instance, a recipe can retrieve CSV file content, parse, and make it available within the recipe. The data can further be used in transformations and loaded unto the target system.

Some examples of text files commonly worked with:
- Tabular data: [CSV](/features/handling-csv-files.md)
- Documents: txt, rtf
- Web standards: html, [JSON](/features/handling-json.md), [XML](/features/handling-xml.md), [SOAP](/features/handling-soap.md), [YAML](/features/handling-yaml.md)

## Binary files
Binary files refer to any file which is not human readable. Unlike text files where Workato parses the content to understand the structure of the data, Workato moves binary data without interpreting its content. For example, Workato cannot read and interpret an image file, but it can upload the entire file into Salesforce as an attachment.

Some examples of binary files commonly used:
- Images: jpg, png, gif, bmp, psd
- Documents: pdf, doc, docx, ppt, xls, odt

Click [here](/features/handling-binary-files.md) to see our guidelines on working with binary files.
