---
title: On-prem Agent - Connections using On-prem Agent
date: 2017-02-22 12:00:00 Z
---

# Connections Using On-prem Agent
A [connection](/connections.md) determines where requests will be made from. With a direct connection, requests will be executed from Workato servers. A connection using an on-prem agent will have requests sent from the environment where the agent is installed in.

For some of your connections, you may want to specify whether it connects through Workato servers or through your on-prem agent. The triggers and actions available in the chosen connector are the same regardless of your choice of connection. An on-prem app connection needs to point to a specific [connection profile](/on-prem/agents/profile.md) in your on-prem agent.

## Connecting to database profiles
All database connectors give you the option to connect through an on-prem agent. In the connection fields, Select the desired on-prem agent from the field labelled **Is this app in a private network?**.

Once you select the on-prem agent, enter the **On-prem connection profile** name. This profile name should be the same as what you configured in the `database` section of the `config.yml` configuration file.

In the following example, we are connecting to a SQL Server database with the profile name `production`.

```YAML
database:
  production:
    adapter: sqlserver
    host: localhost
    username: me
    password: foobar
```
When configuring a SQL Server connection to this profile, we will need to provide the profile name accordingly.

![Database connection using on-prem agent ](~@img/on-prem/database-opa-connection.png)
*Database connection using on-prem agent*

## Connecting to on-prem file system profiles
All on-prem files connectors must be connected through an on-prem agent. In the connection fields, Select the desired on-prem agent from the field labelled **Is this app in a private network?**.

Once you select the on-prem agent, enter the **On-prem connection profile** name. This profile name should be the same as what you configured in the `database` section of the `config.yml` configuration file.

```YAML
files:
  hrfiles:
    base: "C:/Documents/HR"
```

When configuring an on-prem files connection to this profile, we will need to provide the profile name accordingly.

![On-prem file connection using on-prem agent](~@img/on-prem/files-opa-connection.png)
*On-prem file connection using on-prem agent*

## Next Steps
* [Upgrade your on-prem agent](/on-prem/agents/upgrade.md)
* [Avoid exposure of any sensitive data by using the encryptor tool provided](/on-prem/agents/password-encryption.md)
* [Run your on-prem agent in environments with limited internet connectivity](/on-prem/agents/proxy.md)
* [Connect to legacy applications using Java](/on-prem/agents/extension.md)
