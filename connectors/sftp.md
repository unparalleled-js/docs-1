---
title: Workato connector: SFTP integration
date: 2019-19-05 18:00:00 Z
isTocVisible: true
---

# SFTP connector
File Transfer Protocol over SSH (SFTP) is a file transfer protocol that encodes and transmits data through a secure channel. It establishes security by encryption both authentication credentials and data files being transferred.

The SFTP connector enables a two-way integration workflow, where you can transmit files to and retrieve file from your SFTP server.

It can be applied to use-cases including large file transfers (over ---mb).

## Authentication through SFTP
With SFTP, you can authenticate using user ID/password or with SSH keys. Using SSH private and public keys adds another layer of security to your workflow.

## Connection setup

![Connection setup](/assets/images/connectors/sftp/sftp-connection-setup.png)
*SFTP connection setup*

| Input field   | Description   |
| ------------- | --- |
| Connection name |  Given this connection a unique name that identifies which SFTP server it is connected to. |
| Auth type       | Select which authentication method to use. **Public/private key pair** will replace the **Password** field to **Private key**. |
| Username        | The user ID of the SFTP server to be connected. |
| Password<br>or *Private key* | The password credential to the SFTP server to be connected. |
| Hostname        | The hostname or IP address of your SFTP server. |
| Port            | The default port for SFTP is port `22`. |
| Host key fingerprint | A hash of the SSH public key. This fingerprint will be encrypted but is more vulnerable to [MITM] attacks. |
| Transfer buffer size | The size of the buffer used to transfer files. |
| Force close     |  Select `Yes` if you want to shut down the SSH connection at the end of each transaction. Leave blank to allow a clean connection close. |
