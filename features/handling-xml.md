---
title: Handling XML content
date: 2017-04-05 16:00:00 Z
---

# Handling XML content
XML (eXtensible Markup Language) is a syntax for storing and transferring data. It is a common data format for APIs. XML data is stored in a systematic hierarchy of tags.

XML data is mostly hidden from regular Workato users because we expose data as input fields and output datapills in the recipe. However, you may occasionally require raw XML data for your use case.

### Example: Nested data in XML format
We will be using this sample request body formatted in XML:

```
<Contact>
  <Name type="C">
    <First>Sally</First>
    <Last>Jones</Last>
  </Name>
  <Address>
    <Street verified="">215 Castro Street, Suite 300</Street>
    <City verified="">Mountain View</City>
    <ST verified="">CA</ST>
    <Postal verified="">95041</Postal>
  </Address>
  <Phone validation="1" mobile="">8444696752</Phone>
</Contact>
```

The XML data is stored in a top level tag `<Contact>`, which has nested tags `<Name>`, `<Address>`, and `<Phone>`. These tags further contain nested tags. This feature allows XML to create, store and transport deeply nested data.

## XML Parser
The easiest way to convert an XML document into usable datapills is to use the **XML Parser by Workato**.

No connection setup is required. Simply select **App** > **CSV by Workato** to get started.

![XML parser by Workato](/assets/images/features/handling-xml/select-xml-adaptor.png)
*XML parser by Workato*

### Parse XML document
We input the sample XML document and fill in the corresponding fields for the **parse XML document** action.

![XML parser by Workato input fields](/assets/images/features/handling-xml/xml-parser-by-workato.png)
*XML parser by Workato input fields*

| Input field     | Description |
| --------------- | ----------- |
| XML type        | Select the level of detail to parse the XML. See [below](#parse-at-different-levels-of-detail). |
| Sample document | A sample XML that has the same format as the XML document to be parsed. |
| Document        | The input XML content to be parsed. |

### Parse at different levels of detail
Workato automatically understands the basic XML syntax and display datapills in the corresponding datatypes (e.g. `string`, `integer`). Configure the **XML type** to retrieve the desired datapill outputs. You can choose to configure it in [Simple XMl without attributes](#simple-xml-without-attributes) or in [Full XML with attributes](#full-xml-with-attributes).

#### Simple XML without attributes
This configuration reads the default XML syntax and the `type` attribute. Besides the `type` attribute, no other attributes will be process at this configuration.

This will generate a simplified datatree and will be sufficient for most use cases.

![Datatree output for simple XML without attributes](/assets/images/features/handling-xml/simple-xml-without-attributes.png)
*Datatree output for simple XML without attributes*

#### Full XML with attributes
For certain use cases, you have have to access these attribute values for validation or for syncing between systems. Choose **Full XML with attributes** to output a detailed datatree.

![Datatree output for full XML with attributes](/assets/images/features/handling-xml/full-xml-with-attributes.png)
*Datatree output for full XML with attributes*

All attributes are now included in the output datatree. Additionally, the structure of the output is slightly different. Each XML tag is now presented as an <kbd>array</kbd> datapill with the value of the tag presented in the <kbd>Content</kbd> datapill.

## Integrating XML into your workflow
Besides handling XML data within your recipe actions, working with raw XML content involves configuring your Workato recipes to receive such data. Integrate XML content into your workflow by configuring a **REST endpoint that accepts raw content** or by **developing a custom connector**.

- **Rest endpoint with raw content support**

Setup a callable recipe, exposed as a REST endpoint, that accepts XML content. Now, API calls can deliver XML payload directly to the callable recipe. Find out more about setting up REST endpoints to handle XML data [here](/features/callable-recipes/handling-raw-content.md).

- **Developing custom connectors**

Custom connectors allow you to customize the way you receive and interact with your cloud applications through API calls.

| Custom connector      | Description |
| --------------------- | ----------- |
| HTTP connector        | The HTTP connector is a convenient way to handle raw data from APIs. Refer to our [HTTP connector course](http://resources.workato.com/http-connector/#/?_k=1szm77) for a detailed guide and examples on building HTTP triggers and actions to handle XML data. |
| Workato connector SDK  | Workato connector SDK is an extension of the Workato framework. It supports a variety of authentication procedures and allows developers to build, maintain and distribute connectors to integration-seekers. Please refer to the main [Workato SDK documentation](/developing-connectors/sdk.md) for more details. |

Refer to our documentation on the [HTTP vs SDK](/developing-connectors/http-vs-sdk.md) for a detailed comparison.
