---
title: Workato Embedded Implementation
date: 2020-01-04 11:00:00 Z
---

# Workato Embedded (Implementation Guide)
Workato Embedded allows all pages and elements on the Workato platform to be embedded within in an iframe built into the OEM partner’s platform UI. This allows for the most seamless end customer experience and brings the power of Workato's modern, low-code recipe building interface to your platform.

Alongside tools like the [activity audit log](/features/activity-audit-log.md), [role-based access control](/user-accounts-and-teams/team-collaboration.md#team-roles), the [Workato admin dashboard](/features/admin-dashboard.md) and more, your customers can build, test and monitor their integrations from within your platform.

## Introduction
In this guide, we will show you how Workato embedded can be implemented within your platform.

A couple of key points to note:

- The integration between Workato and the vendor is done via iFrame - a native way to embed one webapp into another in a browser.
- To match page style and design on our OEM partner's application, we provides a way to customize some of Workato's style properties like brand color, page margins etc.
- We also provide the Workato Embedding Client script that is meant to simplify synchronization between Workato (embedded via iframe) and the partner's web app.

## Configuration parameters

| Parameter name | Type | Example value | Description |
|----------------|------|---------------|-------------|
| Vendor origin | Required | `https://vendor.com` | Origin (`<url_schema>://<url_host>`) of the vendor's webapp. |
| Embedding URL prefix | Required | `/integration` | In order to provide the best user experience we need a way to synchronize Workato URL from the iframe with the URL of the vendor's webapp. To do so, vendor have to pick some embedding path prefix that will be used to generate vendor URLs from Workato URLs using this pattern: `<embedding_url_prefix>/<workato_url>`. For example if prefix is `/integration` and Workato URL is `/foo?a=1#hash` then corresponding vendor URL will be `/integration/foo?a=1#hash`. |
| Styling properties | Optional | See [Styling](#styling) section | List of properties that customize Workato to better match vendor's design. See [Styling](#styling) section for more information. |

## Glossary of terms

We will introduce a few terms to make this guide clearer:

### Links

- **Vendor**: The OEM partner's web app is a **_vendor_**.  
- **Vendor URL** - all the URLs that belong to `Vendor origin` (`https://vendor.com/*`)
- **Embedding URL** - all the vendor URLs that start with `Embedding URL prefix` (`https://vendor.com/integration/*`).
- **Embedding link** - `<a>` element which points to an embedding URL.
- **Embedding iframe** or just **iframe** - an `<iframe>` HTML element that contains embedded Workato webapp.  
- **Embedding page** - any page of the vendor's web app which is located under embedding URL **and**  contains an embedding iframe.

`Vendor origin` and `Embedding URL prefix` parameters are needed to convert all the links in the embedded Workato webapp into an embedding links.

For example, `<a href="/foo?a=1#hash">` will become:

```
<a href="https://vendor.com/integration/foo?a=1#hash">
```

This allows users to open the correct embedded page when he wants to open a link in a new tab or in the case of copying a link's URL.

### Communication between apps
Communication between the iframe and the partner's application is done via browser's [PostMessage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).

See [[EmbeddingWorkatoMessage]] for the complete list of messages that Workato sends to the vendor's webapp and [[EmbeddingVendorMessage]] for the list of messages
that can be sent in the opposite direction.

In order to simplify communication between Workato and vendor's webapps we have built the [Workato Embedding Client](#workato-embedding-client). Read on to learn more.

## Workato Embedding Client

The `Workato Embedding Client` is a tiny script that simplifies communication between vendor's webapp and the embedded Workato platform. It also provides a few helper methods that help with synchronization of Workato and embedding URLs.

In order to inject it into your webapp you can follow these installation steps:

1. Inject this script on every embedding page: `<script src="https://embedding.workato.com/r/embedding-client.js">`.

    There are a few important things to note:
    - It should be injected **before** the embedding iframe.
    - It shouldn't contain neither `async` nor `defer` attributes as it must be loaded synchronously before the iframe does.

    It creates a global `Workato` object that is an instance of the [[EmbeddingClient]] class.

2. Insert the following configuration script right below the first one:
    ```html
    <script>
      Workato.configure({
        // Value of `Embedding URL prefix` parameter
        embeddingUrlPrefix: '/integration'
      });
    </script>
    ```

That's it! Now you can use any property or method of the [EmbeddingClient class](https://workato.github.io/full-embed-sample/classes/embeddingclient.html).

For example, you can use the [EmbeddingClient.handleNavigation](https://workato.github.io/full-embed-sample/classes/embeddingclient.html#handlenavigation) method to synchronize current Workato URL in the embedded
iframe with current URL of the vendor's webapp or the [EmbeddingClient.generateIFrameUrl](https://workato.github.io/full-embed-sample/classes/embeddingclient.html#generateiframeurl) method to generate a value for the iframe's `src` attribute.

The [EmbeddingClient](https://workato.github.io/full-embed-sample/classes/embeddingclient.html) documentation lists information about all the available helper methods.

## Styling

As an OEM partner, you can customize some of Workato's style properties to better match design of your application. All of them are optional. If the value for a property is not provided its default value will be used.

Here is the list of all the customizable properties and their defaults:

| Name | Value type | Default value |
|------|------------|---------------|
| `brand-color` | 	Hex color code | `#108291` |
| `brand-hover-color` | 	Hex color code | `#065f69` |
| `brand-pending-color` | 	Hex color code | `#c7eded` |
| `page-background-color` | Hex color code | `#f7f9fa` |
| `container-max-width` | Dimension | `1296px` |
| `container-margin-left` | Dimension | `auto` |
| `container-margin-right` | Dimension | `auto` |
| `container-padding-left` | Dimension | `8px` |
| `container-padding-right` | Dimension | `8px` |

### Value types

| Type | Allowed values |
|------|----------------|
| Hex color code | CSS color in 3- or 6-digits HEX format e.g. `#108291` or `#ccc` |
| Dimension | Value in pixels or `auto` |
