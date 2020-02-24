---
title: OEM vendor APIs
date: 2020-01-04 11:00:00 Z
---

# Workato Embedded
Workato Embedded gives our OEM partner's customers the best end user experience to build and manage their integrations straight out of their product. It allows all pages and elements on the Workato platform to be embedded within in an iFrame built into the OEM partner’s platform UI.

![Workato embedded](~@img/oem/workato-embedded.png)
*Workato embedded in an IFrame in ACME ERP*

Instead of choosing to build an in-house integration or automation solution, embedding a platform built and maintained by specialists in the integration and automation space through the OEM model would allow our partners to utilize all of Workato's experience in the integration space and all the tools required to build, run and maintain integrations in a modern, scalable way.

The following describes the various features of Workato Embedded, to learn more about how it is implemented, read on [here](/oem/workato-embedded-implementation.md). You may also be looking to embed just the connection widget from Workato into your product, which allows customers to authenticate their applications. If so, read the [Embedded connection widget](/oem/embedded-connections.md) document.

## Key benefits

From a partner’s point of view,

- You’re giving your customers the ability to build their own integrations while you have complete control over whether administration of customer accounts by your customer success teams are necessary
- Your customers will get the most seamless transition from your product to Workato embedded in your own UI
- All your customers will have access to the full set of features the Workato platform provides, including our 350+ out of the box connectors and 700+ community connectors and our library of 100,000 recipes

All tools that we have built for our direct customers will be at the disposal of yours, allowing your team to to focus on the core features and innovations that you want to deliver to your customers while leaving the building and maintenance of the integration platform features to us.

## Features

### Navigation
As an OEM partner, the first thing to think about is navigation. Your app will provide the appropriate navigation experience for your customers, giving them all the features that are most important and relevant to them.

As you can see in the screenshot below (with the Workato iFrame portion in green), the navigation through the Workato product is handled in the leftmost menu. In this case, the partner has chosen to implement the Dashboard, Recipes, App connections and Community pages, which is similar to the navigation bar in Workato. They have also chosen to provide links to Tools such as Lookup tables and Account properties.

![Navigation](~@img/oem/embedded-iframe.png)
*Navigation and the Workato IFrame*

The OEM partner can customize this experience completely by simply specifying the Workato paths (eg. /recipes) that link to the correct page. Note that only the pages the customer will have access to based on their role or based on their plan will be accessible.

### Deep linking
In a Workato embedded scenario, the OEM partner's URL will always be mapped to the Workato URL. With this, we ensure that launching vendor URL will always launch the correct IFrame URL and that the browser URL can be shared or bookmarked for future use.

In the image below, the URL provided by the vendor is `https://acme-erp.com/integration`. It will then be appended by the Workato path to direct users to the correct page.

![Workato embedded URL](~@img/oem/embedded-url.png)
*OEM Partner URL and Workato path*

### New tabs/back/forward
Browser navigation with back and forward buttons loads correct OEM partner pages and IFrame pages and all new tabs will also open to the correct page with the vendor URL and path.

![Workato embedded URL](~@img/oem/embedded-url.png)
*OEM Partner URL and Workato path*

### Redirection
Should your customer get curious and try to visit workato.com while logged in to your app, don't worry! They will always be promptly redirected back to your site to the provided URL. In ACME's example, they will be redirected to `https://acme-erp.com/integration`.

### Customization
In order to provide a seamless user interface, OEM partners can customize Workato Embedded to suit their branding and configuration needs.

The following configurable attributes are provided by the OEM partner:

- Origin and path prefix
    - For navigation and linking
- Main branding colour
    - Applied to CTAs, tabs, highlights etc.
- Hover colour
    - Applied to hover states
- Fonts
    - Applied to all text
- Iframe attributes
    - Margins, internal padding so the pages render correctly
