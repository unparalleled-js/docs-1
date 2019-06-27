---
title: On-premises Agent - Setting up On-premises Agent
date: 2018-05-09 12:00:00 Z
---

# Setting up On-premises Agent

1) [Install agent](#install-agent)

2) [Create connection profiles](/on-prem/profile.md)

3) [Run agent](/on-prem/run.md)

4) [Upgrade agent](/on-prem/upgrade.md)

## Install agent
### Windows
1) On the top navigation bar, click `Tools` > `On-prem agent`. Alternatively, you can access the [On-premises agent page](https://www.workato.com/secure_agents) directly.

![On-premises option](/assets/images/on-prem/navigate-to-opa.gif)

2) Click `Create a new agent`

![On-premises option](/assets/images/on-prem/create-opa.png)

3) Click `Download key` and `Download agent`, which downloads a `cert.zip` file and an agent installer respectively.

![On-premises option](/assets/images/on-prem/download-key-and-agent.png)

4) Select **Windows** to download the right agent installer.

![On-premises option](/assets/images/on-prem/windows-os.png)

5) Run the agent installer and follow the installation instructions.

6) By default, the agent is installed into `C:\Program Files\Workato Agent` folder and a `Workato` group is created in the Start Menu.

7) During the installation, you can choose to install a Windows service called `WorkatoAgent`.

8) Unzip the `cert.zip` file and move the contents (`cert.key` and `cert.pem`) to `C:\Program Files\Workato Agent/conf` directory. It should be in the same folder as the sample `config.yml` file.

9) After installing your agent on your machine, you will now need to configure your agent by [creating connection profiles](/on-prem/profile.md)

An installation instruction video for Windows is also available [here](https://www.youtube.com/watch?v=Pu3GCk7OY6Q&feature=youtu.be).

### Mac OS
1) On the top navigation bar, click `Tools` > `On-premises agent`

![On-premises option](/assets/images/on-prem/navigate-to-opa.gif)

2) Click `Create a new agent`

![On-premises option](/assets/images/on-prem/create-opa.png)

3) Click `Download key` and `Download agent`, which downloads a `cert.zip` file and an agent installer respectively.

![On-premises option](/assets/images/on-prem/download-key-and-agent.png)

4) Select your operating system to download the right agent installer.

![On-premises option](/assets/images/on-prem/mac-os.png)

5) Unpack the agent package file into a folder of your choice, which we will refer to as `<INSTALL_HOME>` folder.

6) Unzip the `cert.zip` file and move the contents (`cert.key` and `cert.pem`) to `<INSTALL_HOME>/conf` directory. It should be in the same folder as the sample `config.yml` file.

7) After installing your agent on your machine, you will now need to configure your agent by [creating connection profiles](/on-prem/profile.md)

### Linux
In some cases, the secure network is a Linux environment where you cannot set up the OPA files using an interface. The setup will need to be done in 2 separate steps. First, download agent and cert files into a local machine (usually a work device with access to the secure remote server). Then, securely move these files into the secure remote server and set up the OPA.

1) On the top navigation bar, click `Tools` > `On-premises agent`

![On-premises option](/assets/images/on-prem/navigate-to-opa.gif)

2) Click `Create a new agent`

![On-premises option](/assets/images/on-prem/create-opa.png)

3) Click `Download key` and `Download agent`, which downloads a `cert.zip` file and an agent installer respectively.

![On-premises option](/assets/images/on-prem/download-key-and-agent.png)

4) When downloading the agent, select the Linux operating system to download the right agent installer.

![On-premises option](/assets/images/on-prem/linux-os.png)

5) Securely copy Agent package file to secure server
```bash
$ scp -i ~/my_key.pem ~/Downloads/workato-agent-linux-x64-*.tar.gz ec2-user@ec2-XXX-XXX-XXX-XXX.compute-1.amazonaws.com:~/
```

6) Copy agent keys to secure server
```bash
$ scp -i ~/my_key.pem ~/Downloads/cert.zip ec2-user@ec2-XXX-XXX-XXX-XXX.compute-1.amazonaws.com:~/
```

7) Connect to secure server (Example: using SSH)
```bash
$ ssh -i ~/my_key.pem ec2-user@ec2-XXX-XXX-XXX-XXX.compute-1.amazonaws.com
```

8) Unpack agent package file. Provide a meaningful name for the agent directory. (Defaults to `workato-agent`)
```bash
$ tar xvzf workato-agent-linux-x64-X.X.X.tar.gz
```

9) Unzip agent keys
```bash
$ unzip cert.zip
```

10) Move keys into the OPA `conf` folder
```bash
$ mv cert.key workato-agent/conf/
$ mv cert.pem workato-agent/conf/
```

11) Optional - move Workato agent to a desired directory in your secure server.
```bash
$ sudo mv workato-agent /opt/workato
```

12) Optional - create non-priviledged user for systemd to run OPA 

```bash
# groupadd -r workato
# useradd -c "Workato On-Premise Agent" -g workato -s /sbin/nologin -r -d /opt/workato workato
```

13) Optional - add systemd service
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

14) Launch OPA and set it to autostart
```bash
# systemctl start workato
# systemctl enable workato
```

15) You will now need to configure your agent by [creating connection profiles](/on-prem/profile.md).
