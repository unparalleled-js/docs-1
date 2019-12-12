---
title: Workato connector - SFTP integration
date: 2019-19-05 18:00:00 Z
---

# SFTP connector

SSH File Transfer Protocol (SFTP) is a file transfer protocol that encodes and transmits data through a secure channel. It establishes security by encrypting both authentication credentials and data files being transferred.

Use this connector for bi-directional SFTP integrations. This connector allows you to read, write and manage files in your SFTP server.

With the SFTP connector, you use the triggers to monitor your SFTP server for events (e.g. [New/updated CSV file in directory](/connectors/sftp/updated-csv-trigger.md)). You can also integrate recipe actions like [Upload file](/conectors/sftp/upload-file-action.md), [Rename file](/connector/sftp/rename-file-action.md), and [Download file](/connectors/sftp/download-file-action.md).

### How to authenticate with SFTP

Because SFTP is built on top of the Secure Shell Protocol (SSH), you can include SSH keys as part of your authentication flow. SSH keys can be used in combination with user ID/password or used independently to authenticate Workato to your SFTP server. This extends the security of your connection with SSH encryption for your public and private keys.

## Connection setup

![Connection setup](/assets/images/connectors/sftp/sftp-connection-setup.png)
*SFTP connection setup*

| Input field     | Description |
| --------------- | ----------- |
| Connection name |  Given this connection a unique name that identifies which SFTP server it is connected to. |
| Auth type       | Select which authentication method to use. |
| Username        | The user ID of the SFTP server to be connected. |
| Password        | The password credential to the SFTP server to be connected. |
| *Private key*   | _Only for **Public/private key** authentication type._<br>The SSH private key for the SFTP server to be connected. |
| Hostname        | The address of your SFTP server. |
| Port            | The default port for SFTP is `22`. |
| Host key fingerprint | A hash of the SSH public key. |
| Transfer buffer size | The size of the buffer used to transfer files. |
| Force close     | Shuts down the SSH connection at the end of each transaction. Toggle this if your SFTP server connection attempts get stuck. Otherwise, leave it blank. |

## Other related chapters:

The SFTP connector documentation contains the following chapters:
- [New/updated file in directory](/connectors/sftp/updated-file-trigger.md)
- [New/updated CSV file in directory](/connectors/sftp/updated-csv-trigger.md)
- [Create folder](/connectors/sftp/create-folder-action.md)
- [List directory](/connectors/sftp/list-directory-action.md)
- [Get file information](/connectors/sftp/get-file-information-action.md)
- [Upload file](/connectors/sftp/upload-file-action.md)
- [Download file](/connectors/sftp/download-file-action.md)
- [Download large file](/connectors/sftp/download-large-file-action.md)
- [Rename file](/connectors/sftp/rename-file-action.md)
- [Remove file](/connectors/sftp/remove-file-action.md)
