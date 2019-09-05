---
title: On-prem Group
date: 2019-09-05 12:00:00 Z
---

# On-prem Group

![On-prem groups](/assets/images/on-prem/on-prem-groups.png)
*On-prem groups*

On-prem group is a logical grouping of one or more on-prem agents into a common connection pool. Workload is distributed evenly to all agents in an non-prem group. A recipe that uses an on-prem group with more than one active agent achieves high availability and has a few advantages.

## High Availability
High Availability is the ability of a system to be continuously operational for a long period of time. For any system to be highly available, every part of a system needs to be present and functional in order for the whole to be operational. This is typically achieved through **Redundancy** and **Load balancing**.

## Redundancy
Redundancy is the excess of critical components with the intention of increasing reliability of the larger system. Each of these extra components act as a backup or fail-safe, in the event that one or more critical component goes down. In this case, having multiple on-prem agents in a group allows a recipe to continue processing jobs even when a server hosting on of the agents goes offline.

## Load Balancing
Load balancing is the distribution of work across multiple resources. In this case, we are distributing requests across multiple on-prem agents in the same group. This avoids overloading a single server, improves responsiveness and overall performance of a recipe using on-prem connections.

> On-prem groups feature is available only for certain plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at **+1 (844) 469-6752** to find out more.
