---
title: On-prem Agent - Upgrading to newer versions
date: 2018-05-09 12:00:00 Z
---

# Upgrading to newer versions
Follow the instructions below for upgrading an existing agent:

## Windows
1. [Download the newest installer](/on-prem/agents/setup.md)
2. Verify that the agent is stopped (either stop **Workato Agent** Windows service or terminate console-based agent)
3. Uninstall the agent (e.g.  **Start Menu &rarr; Workato &rarr; Uninstall**). This should not change the `config.yml` file and the certificate files (`cert.key`, `cert.pem`) in `C:\Program Files\Workato Agent/conf`.
4. Run the downloaded installer (this will automatically install to the same location)
5. Run the agent. Depending on the setup, either start **Workato Agent** Windows service or run the agent from command line.
6. Make sure your agent is active and verify its version number on the [on-prem agent page](https://www.workato.com/on_prem_groups).

## Linux/MacOS
1. Verify that the agent process is stopped. The upgrade will fail if any running agents are detected.
2. Navigate to the agent directory (e.g. `cd ~/programs/workato-agent/`). **Do not** navigate further into the `/bin/` directory.
3. Run the upgrade script: `bin/upgrade.sh`. Make sure you have enough permissions.
4. Follow the instructions provided by the upgrade script. Confirm the upgrade when prompted.
5. Upon successful completion of the upgrade, run the agent (e.g. `bin/run.sh`).
6. Make sure your agent is active and verify its version number on the [on-prem agent page](https://www.workato.com/on_prem_groups).
7. The upgrade process is not triggered if no new versions are available. However, it might be necessary to repair a broken installation; in that case use the command line option when running the upgrade: `bin/upgrade.sh --enforce`.

## Troubleshoot
- For Linux/MacOS users, if you have anaconda installed on your terminal, be sure to deactivate any conda environments with `conda deactivate` as it will cause an error when upgrading. 

