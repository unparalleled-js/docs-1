---
title: Workato connectors - JumpCloud
date: 2019-12-02 12:00:00 Z
isTocVisible: true
---

# JumpCloud
[JumpCloud's](https://jumpcloud.com/) Directory-as-a-Service® (DaaS) is the single point of authority to authenticate, authorize, and manage the identities of a business's employees and the systems and IT resources they need access to.

## API version
The JumpCloud connector uses the version 2 of the [JumpCloud API](https://docs.jumpcloud.com/2.0/api-overview/v2-api).

## Supported editions and versions
The JumpCloud connector works with all JumpCloud accounts.

## How to connect to JumpCloud on Workato

## JumpCloud connection
The JumpCloud connector uses API key authentication to authenticate with JumpCloud.

![JumpCloud connection page on Workato](/assets/images/JumpCloud/workato-JumpCloud-connection.png)

* **Connection name**

  Give the JumpCloud connection a unique name that identifies which JumpCloud instance it is connected to.

* **API key**

  Create an API key in JumpCloud which grants Workato access to your JumpCloud. This can be done over by following the instructions over [here](https://docs.jumpcloud.com/1.0/authentication-and-authorization/authentication-and-authorization-overview). Do note, you will need to be a JumpCloud administrator to generate an API key.

* **Organisation ID**

  This field is only required if there are multiple organisations under the same administrator whose API key is used. Head over [here](https://docs.jumpcloud.com/1.0/authentication-and-authorization/multi-tenant-organization-api-headers#to-obtain-an-individual-organization-id-via-the-ui) to find out what your organisation ID is.
