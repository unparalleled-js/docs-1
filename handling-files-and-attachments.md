---
title: title**
date: 2017-02-22 12:00:00 Z
---
# Advance datapills <!-- suggested name -->
Files and attachments are a key aspect of many integrations. Your recipes might involve data formats that are not found in the [standard datapill list](/recipes/data-pills-and-mapping.md#data-types). Workable enables you to move file and attachments of different formats (e.g. JSON, XML) across different access/transport mechanism (e.g. FTP, file system, APIs, S3).

For instance, you may need to upload a CSV file to Redshift or move attachments from Salesforce to Zendesk.

Workato is able to work with the text files and binary files.

## Text files
Text files refers to files which can be opened with any text editor and is generally human-readable. Workato can act as the intermediary to move files from one app to another, as well as extract data from text files and parse it for use in Workato. 

For instance, a recipe can retrieve CSV file content, parse, and make it available within the recipe. The data can further be used in transformations and loaded unto the target system.

Some examples of text files commonly worked with:
- Tabular data: [CSV]
- Documents: txt, rtf
- Web standards: html, [XML], [JSON] 
- :
- [SOAP]
- [YAML]

## Binary files
Binary files refer to any file which is not human readable. Unlike text files where Workato parses the content to understand the structure of data, with binary files, Workato does not interpret the content, e.g. Workato cannot read and interpret an image file, but it can upload the entire file into Salesforce as an attachment.

Some examples of binary files commonly used:
- Images: jpg, png, gif, bmp, psd
- Documents: pdf, doc, docx, ppt, xls, odt

Click [here](/features/handling-binary-files.md) to see how to work with binary files on Workato.



