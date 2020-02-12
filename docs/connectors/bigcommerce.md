---
title: Workato connectors - BigCommerce
date: 2019-02-12 06:00:00 Z
---

# BigCommerce
[BigCommerce](https://www.bigcommerce.com/) is an online store builder that allows businesses to sell directly to consumers via an online storefront. It allows you to do everything yourself, including add products, upload photos, process orders, create pages, create discount coupons, and more.

## How to connect to BigCommerce on Workato
The BigCommerce connector uses API accounts to authenticate with BigCommerce.

![Configuring Bigcommerce connection](~@img/bigcommerce/connection.png)

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
      <td>Give this BigCommerce connection a unique name that identifies which BigCommerce store it is connected to or the scopes given to this BigCommerce API token.</td>
    </tr>
    <tr>
      <td>Client ID</td>
      <td>The client ID provided when creating this API account in your storefront.</td>
    </tr>
    <tr>
      <td>Access Token</td>
      <td>The access token provided when creating this API account in your storefront.</td>
    </tr>
    <tr>
      <td>Store hash</td>
      <td>The store hash provided when creating this API account in your storefront. When creating a API key account, your store hash can be found in the API path. See below for more details.</td>
    </tr>
  </tbody>
</table>

## Creating an API account in BigCommerce
From your BigCommerce home dashboard, head over to `Advanced Settings` => `API accounts` => `Create API Account` => `Create V2/V3 API Token`. Give this API account a recognisable name that corresponds to the connection created in Workato. i.e. `Workato-BigCommerce-Finance` which corresponds to the API account for finance related integrations in Workato.

![Configuring OAuth scopes](~@img/bigcommerce/oauthScopes.png)

When configuring API accounts related to departments, its always a good practice to only restrict access to scopes which each department needs. For example, finance teams may need to retrieve Marketing information but should be restricted from modifying the Marketing information in BigCommerce.

After the account is created, you should receive a downloaded txt file from BigCommerce with credential information.

```
ACCESS TOKEN: ABCD1234
CLIENT ID: XXXXXX321
CLIENT SECRET: XXXXXX123
NAME: Workato-BigCommerce-Finance
API PATH: https://api.bigcommerce.com/stores/ABCD1234/v3/
```

This corresponds to your Access token and Client ID requested in the connection input fields in Workato. The store hash can be derived from your API PATH. If `https://api.bigcommerce.com/stores/ABCD1234/v3/` is your API PATH, `ABCD1234` is your store hash.
