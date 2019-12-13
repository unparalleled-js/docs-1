---
title: Handling SOAP
date: 2019-07-23 16:00:00 Z
---

# Handling SOAP
Simple Object Access Protocol (SOAP) is a messaging protocol for communication over the internet. SOAP messages follow a standardized protocol on how it structures the body message. This allows SOAP to develop security, authorization, and error-handling standards that work across web systems.

SOAP acts as a specification on how XML messages are structured and is therefore encoded in XML. Similar to [handling raw XML content](/features/handling-xml.md), convert SOAP content into usable datapills with the built-in parser.

## SOAP tools by Workato
**SOAP tools by Workato** is a native application that does not require any connection setup.

Select **App** > **SOAP tools by Workato** to get started.

![Parse SOAP message](~@img/features/handling-soap/parse-soap-message.png)
*Parse SOAP message*

| Input field     | Description |
| --------------- | ----------- |
| Sample document | A sample SOAP/XML that has the same format as the SOAP document to be parsed. |
| Document        | The input SOAP content to be parsed. |

Datapills are generated according to the **sample document** provided in the input. It includes all SOAP tags and all attributes associated with each tag.

![Datatree output for parse SOAP message](~@img/features/handling-soap/parse-soap-message-datatree.png)
*Datatree output for parse SOAP message*

## Create SOAP message
**SOAP tools by Workato** also allows you to create SOAP messages. Use the **Create SOAP message** action to return a SOAP message. It will take in datapills as `tags` and generate a SOAP document.

For example, we can create a SOAP/XML document that contains a list of employee names, roles, and department details.

![Create SOAP message](~@img/features/handling-soap/create-soap-message.png)
*Create SOAP message*

| Input field      | Description                                    |
| ---------------- | ---------------------------------------------- |
| Message template | Select a message template. To learn how to setup a new SOAP message template, see [below](#setup-message-template). |
| Template input   | The inputs required as defined in the message. |

### Output
The output of this action is a file data object, encoded in SOAP/XML. You can upload this directly to your target web system.

### Setup message template
To effectively draft a SOAP/XML message, you first have to setup the SOAP/XML schema in Message templates. You can find out more about Message templates [here](features/message-template.md).

Setup a message template for your use case. Define the schema of the output SOAP document and use `{tags}` to indicate where datapills are being used.

![SOAP message template for employee list](~@img/features/handling-soap/soap-message-template.png)
*SOAP message template for employee list*
