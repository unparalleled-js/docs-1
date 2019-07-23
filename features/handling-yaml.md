---
title: Handling YAML
date: 2017-03-07 22:00:00 Z
---

# Handling YAML files
YAML is a data serialization human readable language. It stores data as `key:value` pairs containing a variety of data types. YAML files are an easy way to store, update, and retrieve data that everyone is able to understand.

Let's take a look at an example of sieving through a YAML file and retrieving the relevant data. The recipe reads the YAML content and finds employees that are able to code in Python.

The [sample recipe](https://www.workato.com/recipes/969549) uses a YAML file of Employee information.

<details><summary><i>Sample YAML file: Employee Information</i></summary>

```
- number_1:
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

- number_2:
  Name: Tabita Flower
  Age: 32
  Title: Sales engineering
  Employed: True
  Introduction_string:
      Come and say hi
  Responsibilities_list:
      - female empowerment
      - Bake off day
  Languages_NestedList:
      - [lisp, normal]
      - [fortran, normal]
  Education_dictionary:
      Bachelors:
        School : UCLA
        Degree : BA in Communications
        GPA : 3.9

- number_3:
  Name: Mohan Raguh
  Age: 28
  Title: Systems engineer
  Employed: True
  Introduction_string:
      I like chicken
  Responsibilities_list:
      - Hackathon
      - Company sports day
  Languages_NestedList:
      - [Python, Excellent]
      - [CSS, Good]
  Education_dictionary:
      Bachelors:
        School : UCLA
        Degree : BA in Systems engineering
        GPA : 3.9
```
</details>

## YAML Parser
Convert YAML content into a usable datapill with the **YAML parser by Workato**.

This parser requires you to download the YAML file on to Workato beforehand. You can do so with a connector's built-in download action (e.g. Dropbox) or with the [File by Workato]().

### Parse YAML document
Input the YAML document onto the relevant field and provide a sample of the YAML schema.

![Parse YAML content](/assets/images/features/handling-yaml-files/yaml-parser-by-workato.png)
*Parse YAML content*


| Input field | Description |
| ----------- | ----------- |
| Sample YAML document | The YAML schema of your document. This is used to generate outputs in the datatree. |
| YAML content | The file to be parsed. |


## Working with YAML content
Beside formatting entire files in YAML, it is common to use YAML headers for other file formats. They commonly store metadata like **titles**, **authors**, and **date**.

**YAML parser by Workato** will read through the content between the `---` boundaries and return them as datapills. Other contents in the files are ignored.


```
---
title: "Edinburgh Biodiversity"
author: John Doe
date: 22/Oct/2016
output: html_document
---
```
