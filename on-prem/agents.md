---
title: On-prem Agent
date: 2019-09-05 12:00:00 Z
---

# On-prem Agent
The Workato on-prem agent provides a secure way for Workato to selectively access customer-authorized on-prem apps, databases, and folders without having to open ports in the corporate firewall.

Once the on-prem feature is enabled for your account, view the on-prem option in the **Tools** menu.

![On-prem menu option](/assets/images/on-prem/navigate-to-opa.gif)
*On-prem menu option*

## Overview
The following is a conceptual model of Workato's on-prem agent and how it interacts with databases and applications behind the firewall.

![On-prem model](/assets/images/on-prem/on_prem_conceptual_model.png)
*Conceptual model for on-prem agent and connector*

Workato on-prem connectivity has 2 core components:

- Tunneling
- Database and filesystem access.

The on-prem agent runs within the customer’s data center, behind the firewall, and establishes a TLS websocket tunnel to connect out to Workato.

The on-prem agent can be configured to access the selected databases and filesystems behind the firewall. Since 2.2.x it also supports connections to [JMS-compliant systems](/connectors/jms.md).

## Supported operating systems
The on-prem agent runs on the following systems:

- Linux (64-bit)

- Windows 7, 10 (64-bit)

- Mac OS X

Minimum hardware requirements for the system running the on-prem agent are:

- 8GB of RAM
- 250 MB of disk space
- 800 Mhz 64-bit CPU (Intel/AMD).

[Detailed instructions on how to set up for each operating system](https://docs.workato.com/on-prem/agent/setup.html)

## Common errors when using the on-prem agent
If connecting to on-prem applications fail, check that:
- The selected agent is active
- Credentials provided in the app connection are correct
- Credentials provided by user in the app connection has the correct role and permission to connect

If connecting to on-prem databases fail, check that:
- Selected agent is active
- Credentials provided in the connection profile are correct
- Database name and type provided in the connection profile is correct
