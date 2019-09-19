---
title: On-prem Agent
date: 2019-09-05 12:00:00 Z
isTocVisible: true
---

# On-prem Agent
The Workato on-prem agent provides a secure way for Workato to selectively access customer-authorized on-prem apps, databases, and folders without having to open ports in the corporate firewall.

Users can communicate securely with Workato by installing the agent within the protected server.

The on-prem agent is used to create connections that are used by recipes to perform requests. These on-prem connections can be connected to one or more agents in an [on-prem group](/on-prem/agents/groups.md).

> **Adding multiple on-prem agents to an on-prem group allows you to achieve high availability with fault tolerance and load balancing capabilities.**

![On-prem menu option](/assets/images/on-prem/navigate-to-opa.gif)
*On-prem menu option*

## Overview
The following is a conceptual model of Workato's on-prem agent and how it interacts with databases and applications behind the firewall.

![On-prem model](/assets/images/on-prem/on_prem_conceptual_model.png)
*Conceptual model for on-prem agent and connector*

Workato on-prem connectivity has 2 core components:

- Tunneling
- Database, file system, and application access.

The on-prem agent runs within the user's server, typically behind a firewall, and establishes a TLS websocket tunnel to connect out to Workato.

Since the on-prem agent is within the same network as systems behind the firewall, it can safely access them and act as the agent to communicate securely out to Workato.

## Supported operating systems
The on-prem agent runs on the following systems:

- Linux (64-bit)

- Windows 7, 10 (64-bit)

- Mac OS X

Minimum hardware requirements for the system running the on-prem agent are:

- 8GB of RAM
- 250 MB of disk space
- 800 Mhz 64-bit CPU (Intel/AMD).

[Detailed instructions on how to set up for each operating system](https://docs.workato.com/on-prem/agents/setup.html).

## Common errors when using the on-prem agent
If connecting to on-prem applications fail, check that:
- The selected agent is active
- Credentials provided in the app connection are correct
- Credentials provided by user in the app connection has the correct role and permission to connect

If connecting to on-prem databases fail, check that:
- Selected agent is active
- Credentials provided in the connection profile are correct
- Database name and type provided in the connection profile is correct
