---
title: Handling XML files
date: 2017-04-05 16:00:00 Z
---

# Handling XML files
XML (eXtensible Markup Language) is a syntax for storing and transferring data. It is a common data format for APIs. XML data is stored in a systematic hierarchy of tags. While JSON format has being increasingly preferred over XML format, XML is still used widely and provides some advantages over the former.

XML data is mostly hidden from regular Workato users because we expose data as input fields and output datapills in the recipe. However, you may occassionally require raw XML data for your use case. Workato provides a few options for handling such instances.

```xml
<request>
  <control>
    <senderid>SENDER_ID</senderid>
    <password>SENDER_PASSWORD</password>
    <controlid>testControlId</controlid>
    <uniqueid>false</uniqueid>
    <dtdversion>3.0</dtdversion>
  </control>
  <operation>
    <authentication>
      <login>
        <userid>USERNAME</userid>
        <companyid>COMPANY_ID</companyid>
        <password>USER_PASSWORD</password>
      </login>
    </authentication>
    <content>
      <function controlid="testControlId">
        <get_list object="glaccount" maxitems="1"></get_list>
      </function>
    </content>
  </operation>
</request>
```
*Sample XML request body*

This is a sample request body to Intacct Web services. The XML data is stored in a top level tag `<request>`, which has nested tags `<control>` and `<operation>`, which in turn, has respective nested tags. Because of this feature, XML data, when coupled with an adequate query language, is capable of storing and transporting deeply nested data.

On top of that, the ability to define **named-tags** as well as attributes within tags allows XML to create and work with very complex data structure, even creating new data types.

## XML Parser
The easiest way to convert an XML document into a format that can be used in Workato recipes is to parse it using the XML Parser by Workato.

### Connection setup
No connection setup is required. Simply select **App** > **CSV by Workato** to get started.

![XML parser by Workato](/assets/images/features/csv-by-workato.png)
*XML parser by Workato*

### Parse XMl document

![image](link)
*caption*

| Input field | Description |
| --- | --- |
| XML type | Select the level of detail to parse the XML. See [below](#parse-at-different-levels-of-detail). |
| Sample document | A sample XML that has the same format as the XML document to be parsed. |
| Document | The input XML content to be parsed. |

### Parse at different levels of detail
- Simple XML without attributes

The default XML type is a simple one and will ignore most attributes, except *type*. Let's use the following XML that represents a contact record as an example.

```xml
<Contact>
    <Name type="C">
      <First>Sally</First>
      <Last>Jones</Last>
    </Name>
    <Address>
      <Street verified="">20450 Stevens Creek Blvd #150</Street>
      <City verified="">Cupertino</City>
      <ST verified="">CA</ST>
      <Postal verified="">95014</Postal>
    </Address>
    <Phone validation="1" mobile="">4105554119</Phone>
</Contact>
```

When we use this as the **Sample document** with **Simple XML without attributes** type selected, a simplified output is generated.

![Datatree of simple XML without attributes](/assets/images/xml-parser/simple-xml-output.png)
*Datatree of simple XML without attributes*

Notice that the *type* attribute is generated for the `<Name>` tag but all the `<Phone>` attributes were dropped. This is fine if your integration use case does not involve attribute values.

- Full XML with attributes

However, if you need to access these values for validation or simply to sync these values, you will have to choose **Full XML with attributes** type. Using the same XML of a contact record above, let's take a look at what the output will look like.

![Datatree of full XML with attributes](/assets/images/xml-parser/full-xml-output.png)
*Datatree of full XML with attributes*

At first glance, we see that all attributes are now included in the output datatree. Additionally, the structure of the output is slightly different. Each XML tag is now presented as an array with the value of the tag presented as a <kbd>Content</kbd> datapill.

## Developing custom connectors
**XML parser by Workato** excels with off the cuff handling of raw XML data. However, if you will be frequently interacting with such data. It is advisable to custom a more permanent solution with the **HTTP connector** or **Connector SDK**.

- HTTP connector

The HTTP connector is a convenient way to handle raw data from APIs. Refer to our [HTTP connector course](http://resources.workato.com/http-connector/#/?_k=1szm77) for a detailed guide and examples on building HTTP triggers and actions to handle XML data.

- Workato connector SDK

Workato connector SDK is an extension of the Workato framework. It supports a variety of authentication procedures and allows developers to build, maintain and distribute connectors to integration-seekers. Please refer to the main [Workato SDK documentation](/developing-connectors/sdk.md) for more details.

- Which should I use?

Refer to our documentation on the [HTTP vs SDK](/developing-connectors/http-vs-sdk.md) for a detailed comparison.
