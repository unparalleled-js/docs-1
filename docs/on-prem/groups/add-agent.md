---
title: On-prem Group - Add Agent to Group
date: 2019-09-05 12:00:00 Z
---

# Add Agent to Group

![New on-prem group](~@img/on-prem/empty-group.png)
*New on-prem group*

Once you have selected an on-prem group or created a new one, you will then be prompted to create an agent.

Clicking on **Add on-prem agent** will bring you through an agent creation wizard to setup, run and verify that your agent is active. The wizard will take you through the following steps.

## On-premise agent setup wizard

For this example, we will setup an on-prem agent on a Windows OS.

| Step       | Description |
| ---------- | :---------- |
| Choose OS  | Provide a meaningful agent name and select the OS in which the agent will be installed.<br><br>![Choose OS](~@img/on-prem/choose-os.png) |
| Accept ToS | Read and accept the **End User License Agreement**.<br><br>![Accept ToS](~@img/on-prem/accept-tos.png) |
| Install    | Download the installer file on the on-prem system. Instructions specific to your OS will be displayed.<br><br>![Install](~@img/on-prem/install.png) |
| Add key    | Download agent key and move it into the appropriate folder in the agent directory according to the instructions provided.<br><br>![Add key](~@img/on-prem/add-key.png) |
| Run agent  | Follow the instructions to setup and run the agent.<br><br>![Run agent](~@img/on-prem/run-agent-wizard.png) |
| Test       | Once the agent is active, click **Test** to verify that the connection is successful.<br><br>![test](~@img/on-prem/test-agent-setup.png) |

## Optional settings on Linux

### Setup Workato user

You can to create a non-privileged user to run Workato OPA.

```bash
$ groupadd -r workato
$ useradd -c "Workato On-Premise Agent" -g workato -s /sbin/nologin -r -d /opt/workato workato
```

### Setup systemd service

You can create a systemd service that starts Workato OPA automatically. This prevents disruptions to your critical workflows after system reboots.

1. Create a systemd service.

```bash
$ sudo cat > /lib/systemd/system/workato.service <<EOF
# Systemd unit file for default Workato On-Premise Agent
#
# To create clones of this service:
# DO NOTHING, use workato@.service instead.

[Unit]
Description=Workato On-Premise Agent
After=syslog.target network.target

[Service]
Type=simple
Environment="NAME="
EnvironmentFile=/etc/sysconfig/workato
WorkingDirectory=/opt/workato
ExecStart=/usr/bin/java -Djava.security.egd=file:/dev/urandom -cp "/opt/workato/lib/*" com.workato.agent.Main
User=workato

[Install]
WantedBy=multi-user.target
EOF
```

2. Launch Workato OPA and set it to autostart

```bash
$ systemctl start workato
$ systemctl enable workato
```

Learn more about how to setup an on-prem agent [here](/on-prem/agents/setup.md).
