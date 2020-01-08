---
title: On-prem Group - Add Agent to Group
date: 2019-09-05 12:00:00 Z
---

# Add Agent to Group

![New on-prem group](~@img/on-prem/empty-group.png)
*New on-prem group*

Once you have selected an on-prem group or created a new one, you will then be prompted to create an agent.

Clicking on **Add on-prem agent** will bring you through an agent creation wizard to setup, run and verify that your agent is active. The wizard will provide instructions specific to each OS. See here for the wizard setup on [Windows](#setup-on-premise-agent-on-windows), [Mac](#setup-on-premise-agent-on-mac), and [Linux](#setup-on-premise-agent-on-linux).

The wizard will take you through the following steps.

## Setup On-Premise Agent on Windows

For this example, we will setup an on-prem agent on a Windows OS.

| Step       | Description |
| ---------- | :---------- |
| Choose OS  | Provide a meaningful agent name and select the Windows OS.<br><br>![Choose OS](~@img/on-prem/choose-os.png) |
| Accept ToS | Read and accept the **End User License Agreement**.<br><br>![Accept ToS](~@img/on-prem/accept-tos.png) |
| Install    | Download the installer file on the on-prem system. Instructions specific to your OS will be displayed.<br><br>![Install](~@img/on-prem/install.png) |
| Add key    | Download agent key and move it into the appropriate folder in the agent directory according to the instructions provided.<br><br>![Add key](~@img/on-prem/add-key.png) |
| Run agent  | Follow the instructions to setup and run the agent.<br><br>![Run agent](~@img/on-prem/run-agent-wizard.png) |
| Test       | Once the agent is active, click **Test** to verify that the connection is successful.<br><br>![test](~@img/on-prem/test-agent-setup.png) |

## Setup On-Premise Agent on Mac

For this example, we will setup an on-prem agent on a Mac OS.

| Step       | Description |
| ---------- | :---------- |
| Choose OS  | Provide a meaningful agent name and select the Mac OS.<br><br>![Choose OS](~@img/on-prem/choose-os-mac.png) |
| Accept ToS | Read and accept the **End User License Agreement**.<br><br>![Accept ToS](~@img/on-prem/accept-tos.png) |
| Install    | Download the installer file on the on-prem system.<br><br>![Install](~@img/on-prem/install-mac.png) |
| Add key    | Download agent key and move it into the appropriate folder in the agent directory according to the instructions provided.<br><br>![Add key](~@img/on-prem/add-key-mac.png) |
| Run agent  | Follow the instructions to setup and run the agent.<br><br>![Run agent](~@img/on-prem/run-agent-wizard-mac.png) |
| Test       | Once the agent is active, click **Test** to verify that the connection is successful.<br><br>![test](~@img/on-prem/test-agent-setup.png) |

## Setup On-Premise Agent on Linux

For this example, we will setup an on-prem agent on a Linux OS.

| Step           | Description |
| -------------- | :---------- |
| Choose OS      | Provide a meaningful agent name and select the Linux OS.<br><br>![Choose OS](~@img/on-prem/choose-os-linux.png) |
| Accept ToS     | Read and accept the **End User License Agreement**.<br><br>![Accept ToS](~@img/on-prem/accept-tos-linux.png) |
| Download       | Download the installer and agent key.<br><br>![Install](~@img/on-prem/download-installer-linux.png) |
| Move to Server | Follow the steps to move the installer and agent keys to your secure server.<br><br>![Move to server](~@img/on-prem/move-to-server-linux.png) |
| Setup agent    | Extract the installer and agent keys to setup your OPA.<br><br>![Setup OPA](~@img/on-prem/setup-opa-linux.png) |
| Run agent      | Run the agent on your server.<br><br>![Run agent](~@img/on-prem/run-agent-wizard-linux.png) |
| Test           | Once the agent is active, click **Test** to verify that the connection is successful.<br><br>![test](~@img/on-prem/test-agent-setup-linux.png) |

Learn more about how to setup an on-prem agent [here](/on-prem/agents/setup.md).
