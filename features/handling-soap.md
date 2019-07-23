---
title: Handling SOAP files
date: 2019-07-23 16:00:00 Z
---

# Handling SOAP files
Simple Object Access Protocol (SOAP) is a messaging protocol for communication over the internet. SOAP messages are based on XML and contains. It follows standardize protocol on how it structures the body message. Security, authorization, and error-handling are built into the protocol and is the preferred protocol for high security transactions.

SOAP parser by Workato allows you to read SOAP messages and retrieve its content in the datatree.

<!--
SOAP (eXtensible Markup Language) is a syntax for storing and transferring data. It is a common data format for APIs. SOAP data is stored in a systematic hierarchy of tags. While JSON format has being increasingly preferred over SOAP format, SOAP is still used widely and provides some advantages over the former.

SOAP data is mostly hidden from regular Workato users because we expose data as input fields and output datapills in the recipe. However, you may occassionally require raw SOAP data for your use case. Workato provides a few options for handling such instances. -->

```xml
<env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope">
  <env:Header>
    <n:alertcontrol xmlns:n="http://example.org/alertcontrol">
      <n:priority>1</n:priority>
      <n:expires>2001-06-22T14:00:00-05:00</n:expires>
    </n:alertcontrol>
  </env:Header>
  <env:Body>
    <m:alert xmlns:m="http://example.org/alert">
      <m:msg>Pick up Mary at school at 2pm</m:msg>
    </m:alert>
  </env:Body>
</env:Envelope>
```
*Sample SOAP request body*

## SOAP Parser
The easiest way to convert an SOAP document into a format that can be used in Workato recipes is to parse it using the SOAP Parser by Workato.

### Connection setup
No connection setup is required. Simply select **App** > **CSV by Workato** to get started.

![SOAP parser by Workato](/assets/images/features/csv-by-workato.png)
*SOAP parser by Workato*

### Parse SOAP document

### Create SOAP document

## Developing custom connectors
