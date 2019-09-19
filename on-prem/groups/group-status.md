---
title: On-prem Group - Status
date: 2019-09-05 12:00:00 Z
---

# Status
The status of an on-prem group depends on the status of the on-prem agents that belong to a group. The group must be active for it to be used in a recipe.

![On-prem groups statuses](/assets/images/on-prem/groups-statuses.png)
*On-prem groups statuses*

## On-prem agent status

![On-prem agents in a group](/assets/images/on-prem/agents-in-groups-statuses.png)
*On-prem agents in a group*

Clicking into an on-prem group will show you the state of each agent in the group. An agent can have the following statuses.

| Status         | Description |
| -------------- | :---------- |
| Awaiting setup | This agent setup is incomplete. The agent setup is complete only when it has successfully connected for the first time. |
| No response    | This agent is currently not responding. This could be due to several reasons. Usually, this is because the agent is shut down or if the secure connection between Workato and the server is broken. |
| Active         | This agent is active and can process requests from Workato. |
| Disabled       | This agent is manually disabled. Requests will not be sent to this agent. It can be manually enabled to establish an active connection again. |

### Active on-prem group
An on-prem group must have at least one active agent for it to be an active group.

> **Groups with more than one active agent will achieve high availability with fault tolerance and load balancing.**

When the group has only a single active agent, it will continue to process the jobs but without the advantages of load balancing.

## Connections

![On-prem connections](/assets/images/on-prem/on-prem-connections.png)
*On-prem connections*

A connection that connects through an on-prem group depends on the status of the group. Recipes that make use of these connections can only process jobs successfully when the group is active.

As long as a single agent within that group is active, on-prem requests can still be sent successfully.
