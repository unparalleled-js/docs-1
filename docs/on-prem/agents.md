---
title: On-prem Agent
date: 2019-09-05 12:00:00 Z
---

# On-prem Agent
The Workato on-prem agent provides a secure way for Workato to selectively access customer-authorized on-prem apps, databases, and folders without having to open ports in the corporate firewall.

Users can communicate securely with Workato by installing the agent within the protected server.

The on-prem agent is used to create connections that are used by recipes to perform requests. These on-prem connections can be connected to one or more agents in an [on-prem group](/on-prem/groups.md).

> **Adding multiple on-prem agents to an on-prem group allows you to achieve high availability with fault tolerance and load balancing capabilities.**

![On-prem menu option](~@img/on-prem/navigate-to-opa.gif)
*On-prem menu option*

## Common errors when using the on-prem agent
If connecting to on-prem applications fail, check that:
- The selected agent is active
- Credentials provided in the app connection are correct
- Credentials provided by user in the app connection has the correct role and permission to connect

If connecting to on-prem databases fail, check that:
- Selected agent is active
- Credentials provided in the connection profile are correct
- Database name and type provided in the connection profile is correct

## In this section
* [Setup agent](/on-prem/agents/setup.md)
* [Run agent](/on-prem/agents/run.md)
* [Profiles](/on-prem/agents/profile.md)
* [Upgrade agent](/on-prem/agents/upgrade.md)
* [On-prem connections](/on-prem/agents/connection.md)
* [Password encryption](/on-prem/agents/password-encryption.md)
* [Proxy server](/on-prem/agents/proxy.md)
* [Logging](/on-prem/agents/logging.md)
* [Extensions](/on-prem/agents/extension.md)
