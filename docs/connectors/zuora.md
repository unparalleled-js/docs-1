---
title: Workato connectors - Zuora
date: 2019-12-16 18:00:00 Z
---

# Zuora
[Zuora](https://www.zuora.com/) is a cloud-based SaaS platform that specialises in handling the complexity of Order-to-Revenue processes for subscription based businesses. It has a suite of tools that handle billing and renewal cycles of customers and can also handle payment collection from customers.

## API version
The Zuora connector uses [Zuora REST API](https://www.zuora.com/developer/api-reference/). Support for Zuora Collect APIs and RevPro APIs will be introduced in separate connectors.

## How to connect to Zuora on Workato
The Zuora connector uses OAuth2. This will require you to generate an OAuth client on Zuora.

![Subdomain setup](~@img/zuora/connection.png)
*Connection setup*

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Connection name</td>
      <td>Give this Zuora connection a unique name that identifies which Zuora instance it is connected to.</td>
    </tr>
    <tr>
      <td>Client ID</td>
      <td>The client ID of the OAuth app generated in Zuora. Create a client OAuth app by following the instructions over <a href='https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/Manage_Users#Create_an_OAuth_Client_for_a_User'>here.</a></td>
    </tr>
    <tr>
      <td>Client secret</td>
      <td>The client secret of the OAuth app generated in Zuora. Create a client OAuth app by following the instructions over <a href='https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/Manage_Users#Create_an_OAuth_Client_for_a_User'>here.</a></td>
    </tr>
    <tr>
      <td>Environment</td>
      <td>This affects the URL of the endpoints in Zuora that Workato will make requests to. Ensure that you pick the proper Environment. More details can be found <a href='https://jp.zuora.com/developer/api-reference/#section/Introduction/Access-to-the-API'>here.</a></td>
    </tr>
    <tr>
      <td>Zuora SOAP API version</td>
      <td>Always pick the latest WSDL version, which can be found <a href='https://knowledgecenter.zuora.com/DC_Developers/G_SOAP_API/Zuora_SOAP_API_Version_History'>here.</a></td>
    </tr>
  </tbody>
</table>
