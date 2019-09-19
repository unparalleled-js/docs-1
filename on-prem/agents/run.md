---
title: On-prem Agent - Run On-prem Agent
date: 2018-05-09 12:00:00 Z
---

# Run On-prem Agent

## Linux 64-bit and Mac OS X
If your on-prem agent is installed in a Linux or Mac OS, run the on-prem agent using the following bash script:

```bash
sh <INSTALL_HOME>/bin/run.sh
```

If you are accessing the server through SSH and want to let the agent run in the background independent of your shell session, you can add the nohup command (`&`) at the end. You can also include a `> file_name` command to ensure that the outputs are logged.

```bash
sh <INSTALL_HOME>/bin/run.sh > opa_output.txt &
```

Level of details of the OPA logs depend on your configuration. [Learn more](/on-prem/agents/logging.md).

## Windows 64-bit
For on-prem agents installed in Windows, run the agent as a Windows console application or as a [Windows Service](#using-windows-service).

Run the on-prem agent in console mode by launching `Workato` &rarr; `Run Agent (console)` in the Start Menu.

Alternatively, you can use the `Run Agent (console)` shortcut to ensure the agent is successfully connecting to Workato using the provided certificate.

### Using Windows Service
The installer automatically registers an agent (`WorkatoAgent`) as a Windows service . However, the agent does not start automatically. Navigate to the service configuration (**Control Panel → System and Security → Administrative Tools → Services → WorkatoAgent**) to configure service auto-start.

### Browsing log files
When the on-prem agent is running as a Windows service, log files can be found at: `%SYSTEMROOT%\System32\LogFiles\Workato`. There's also a shortcut to the Workato log directory in the `Workato` group found in the Start Menu.

Level of details of the OPA logs depend on your configuration. [Learn more](/on-prem/agents/logging.md).

## Confirming your on-prem agent is running and connected

To check if your on-prem agent is running and connected, head back to the [on-prem agent page](https://www.workato.com/secure_agents). Alternatively, you can find it in the top navigation bar under `Tools` > `On-prem agent`.

![On-prem option](/assets/images/on-prem/navigate-to-opa.gif)
*Navigating to the on-prem agent page*

If successful, you should see the following in the agent you have just created.

![Confirmation of on-prem agent](/assets/images/on-prem/Confirmation-of-OPA.gif)
*On-prem agent page when connected and running*

Your on-prem agent's status in the top left should be labelled green and `Active`

After you've configured and secured a connection to Workato using your on-prem agent, its time to [finally set up connections to your recipes in Workato.](/on-prem/agents/connection.md)
