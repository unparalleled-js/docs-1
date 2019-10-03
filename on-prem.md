---
title: On-prem Connectivity
date: 2017-02-22 12:00:00
isTocVisible: true
---

# On-prem Connectivity
Enterprises have on-prem applications and databases that are deployed within their corporate data centers. These apps are protected via firewalls, and therefore are typically not easily accessible to cloud services like Workato.

> On-prem access is enabled only for certain plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at **+1 (844) 469-6752** to find out more.

## Overview
The following is a conceptual model of Workato's on-prem agent and how it interacts with databases and applications behind the firewall.

![On-prem model](/assets/images/on-prem/on_prem_conceptual_model.png)
*Conceptual model for on-prem agent and connector*

On-prem agents can also be installed into logical groups, called [On-prem groups](/on-prem/groups.md), to achieve **High Availability** and **Load Balancing** capabilities.

![On-prem group model](/assets/images/on-prem/on_prem_group_conceptual_model.png)
*Conceptual model for on-prem agents in a group*

## How it works
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

Minimum hardware requirements are:

- 8GB of RAM
- 250 MB of disk space
- 800 Mhz 64-bit CPU (Intel/AMD).

Learn how to setup for each OS [here](/on-prem/agents/setup.html).

## In this section
* [On-prem group](/on-prem/groups.md)
  * [Create a group](/on-prem/groups/create-group.md)
  * [Add agent to a group](/on-prem/groups/add-agent.md)
  * [Status of a group](/on-prem/groups/group-status.md)
  * [Common configuration](/on-prem/groups/common-config.md)
* [On-prem agent](/on-prem/agents.md)
  * [Setup agent](/on-prem/agents/setup.md)
  * [Run agent](/on-prem/agents/run.md)
  * [Upgrade agent](/on-prem/agents/upgrade.md)
  * [Profiles](/on-prem/agents/profile.md)
  * [On-prem connections](/on-prem/agents/connection.md)
  * [Password encryption](/on-prem/agents/password-encryption.md)
  * [Proxy server](/on-prem/agents/proxy.md)
  * [Logging](/on-prem/agents/logging.md)
  * [Extensions](/on-prem/agents/extension.md)
