---
title: Custom Domain
date: 2020-01-20 00:00:00 Z
---

# Custom Domain

Route Workato API endpoints through your own domain. You can expose Workato API endpoints under your own subdomain. For example, modify the endpoint to reflect your company's subdomain.

**Original API URL:** `https://apim.workato.com/prod/sales-api/get-invoice`
**Custom domain URL:** `https://api.boltcompany.com/sales-api/get-invoice`

| Steps | Description |
| ----- | ----- |
| 1.    | Prepare a registered domain and subdomain name. For more information on domain names, see the [ICANN documentation](https://www.icann.org/resources/pages/register-domain-name-2017-06-20-en). For example, `blog.boltcompany.com`.
| 2.    | Navigate to **Tools** > **API Platform** > **Settings** tab > **Custom domain** on the left menu.<br>![Register custom domain](~@img/api-mgmt/add-custom-domain-blank.png)*Register custom domain* |
| 3.    | Provide your subdomain name.<br>![Register a domain](~@img/api-mgmt/add-custom-domain.png)*Register a domain* |
| 4.    | Once you have configured the custom domain on Workato. It is time to create a record in your domain host. Copy `apim.workato.com` to be used in the DNS host record.<br>![Pending verification](~@img/api-mgmt/custom-domain-pending-verification.png)*Pending verification* |
| 5.    | Register a new CNAME record with your domain host. See [here](#configuring-cname-record). |
| 6.    | Once the verification process succeeds. Your custom setup is complete.<br>![Completed custom domain setup](~@img/api-mgmt/custom-domain-successful.png)*Completed custom domain setup* |

Depending on the domain host, it may take up to a few hours for the new CNAME record to propagate. After this, the custom domain will be verified and it will take effect.

## Configuring CNAME record

For this example, let's register the subdomain `api.boltcompany.com` hosted by **Cloudflare.com**.

![Create CNAME record with Cloudflare](~@img/api-mgmt/add-cname-record-cloudflare.png)
*Create CNAME record with Cloudflare*

| Steps | Description |
| ----- | ----- |
| 1.    | Select **Add record**. |
| 2.    | Select type as `CNAME`. |
| 3.    | Provide the subdomain name. In this example, we are creating a subdomain `api` to `boltcompany.com`. |
| 4.    | Provide the target. Paste the value which was provided in the custom domain configuration earlier: `apim.workato.com`. |
| 5.    | Save your settings. It may take up to a few hours for the settings to propagate through the global domain name system. |

## SSL certificate

When you use Workato’s API platform, the default domain is workato.com. If you add a custom domain, Workato manages TLS certificates for your APIs to enabled HTTPS for your custom domain. New certificates are created automatically when you add a custom domain. These certificates will automatically renew one month before they expire. Workato uses [Let’s Encrypt](https://letsencrypt.org/) to create and manage TLS certificates for your APIs.

::: tip
The original API endpoint will continue to work in parallel with your custom domain.
:::

## How to remove custom domain configuration

You may have to remove the current custom domain configuration if you would like to reconfigure your API platform to a different custom domain. To do this, simply click the **Remove** button on the top-right of the screen.

| Steps | Description |
| ----- | ----- |
| 1.    | Select **Remove** button on the top-right of the screen.<br>![Custom domain page](~@img/api-mgmt/custom-domain-successful.png)*Custom domain page* |
| 2.    | Read the notes on the remove custom domain wizard. Tick the checkbox and select **Remove Domain**.<br>![Remove custom domain](~@img/api-mgmt/remove-custom-domain.png)*Remove custom domain* |

Now your APIs will default to `apim.workato.com`. Next, inform the existing users of this API collection, if you have not already done so.
