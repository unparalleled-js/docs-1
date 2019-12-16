---
title: Webhooks connector - Debug common errors
date: 2019-05-29 10:00:00 Z
---

# Webhooks connector - Debug common errors

This document contains some common errors that you may come across when using this connector along with some explanation and ways to resolve the issues.

## Commons error in webhooks wizard

### Webhook address is already used

![Webhook address is already used](~@img/webhooks/webhook-address-already-used.png)
*Webhook address is already used*

This issue appears when you have another recipe with the same webhook address. The recipe ID is provided for your reference.

#### Why does this happen?

The event name will become part of the unique webhook address generated. To avoid recipes receiving webhook events from multiple sources, the event name must be unique across all your webhook recipes.

#### How do I fix this?

To address this issue, you just need to use a different event name.

### Error generating schema for response

![Error generating schema](~@img/webhooks/error-generating-schema.png)
*Error generating schema*

This issue appears when there is a mismatch between the detected **Content-Type** (from the webhook header) and the payload data type. In the image above, the webhook wizard detected that the webhook contains JSON data from the header. However, it encountered an error when trying to parse the XML payload, `<id>1</id>`.

#### Why does this happen?

This happens with legacy or custom applications that may not follow standard HTTP practices, specifically a **Content-Type** that does not match the payload format.

#### How do I fix this?

Check with the owner of the application to ensure that the webhooks API is sending the right format and make adjustments if needed. Often, this is not possible. In that case, click **Save and skip >** and configure the payload schema manually.
