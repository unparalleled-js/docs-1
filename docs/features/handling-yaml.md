---
title: Handling YAML
date: 2017-03-07 22:00:00 Z
---

# Handling YAML
YAML is a data serialization format that is written in a human-readable language. It stores data as `key:value` pairs in a variety of data types. YAML files are an easy way to store, update, and retrieve data that everyone can understand.

We will go through an example of sieving through a YAML file and retrieving the relevant data. We will be using a sample YAML file of Employee information.

```yaml
  - employee_1:
    Name: Martin Simon
    Age: 25
    Title: Technical Manager
    Employed: True
    Introduction_string:
        Hi i love to play football
    Responsibilities_list:
        - sales rep
        - fire safety committee
        - first aid
    Languages_NestedList:
        - [perl, elite]
        - [python, Elite]
        - [pascal, Fundamental]
    Education_dictionary:
        Bachelors:
          School : UCLA
          Degree : BSc in IoT
          GPA : 4.3
        PostGrad:
          School : MIT
          Degree : PhD in CS
          GPA : 4.2
```

## YAML parser by Workato
Convert YAML content into useable datapills with the built-in YAML parser. **YAML parser by Workato** is a native application that does not require any connection setup.

Select **App** > **YAML parser by Workato** to get started.

This parser requires you to download the YAML file on to Workato beforehand. You can do so with a connector's built-in download action (e.g. Dropbox) or with [File by Workato](/handling-files-and-attachments.md).

![Parse YAML content](~@img/features/handling-yaml/YAML-parser-by-workato.png)
*Parse YAML content. See the sample recipe [here](https://www.workato.com/recipes/969549).*

### Input fields
| Input field          | Description                                                                         |
| -------------------- | ----------------------------------------------------------------------------------- |
| Sample YAML document | The YAML schema of your document. This is used to generate outputs in the datatree. |
| YAML content         | The file to be parsed.                                                              |

### Output fields
Datapills will be generated according to the format defined in the **Sample YAML document**. In our example, an array output is generated, with simple datapills (`name` and `title`) and arrays (`responsibilities list`) and nested objects (`languages nested list`).

### Working with YAML content
Beside formatting entire files in YAML, it is common to use YAML headers for other file formats. They commonly store metadata like **titles**, **authors**, and **date**.

**YAML parser by Workato** will read through the content between the `---`...`---` boundaries and return them as datapills. All other file content will be ignored.

For example, you may store YAML in a HTML file:

```yaml
---
title: "Edinburgh Biodiversity"
author: John Doe
date: 22/Oct/2016
output: html_document
---
```

The recipe will return datapills only for the YAML specified in the action.

![Parse YAML content in other file types](~@img/features/handling-yaml/parse-yaml-in-other-types.png)
*Parse YAML content in other file types*
