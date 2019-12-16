---
title: On-prem Group - Configuration file
date: 2019-09-05 12:00:00 Z
---

# Configuration file

The configuration file (**config.yml**) contains one or more [connection profiles](/on-prem/agents/profile.md) used to establish an [on-prem connection](/on-prem/agents/connection.md).

Since requests will be distributed evenly across all agents, the on-prem connection makes an assumption that the profile name used to obtain credentials is available and identical across every agent in the same group. Hence, all on-prem agents in the same on-prem group must use identical configuration files.

> **Creating agents in the same group with different or missing profiles will cause errors in unexpected ways.**

It is recommended to configure a single agent first, with all the required profiles, and complete the setup before moving on to backup agents. The configuration file can then be duplicated and used for subsequent agents in the same group.
