---
title: Workato connectors - SNC encryption
date: 2020-02-27 06:00:00 Z
---

# SAP connection - Enabling SNC encryption
The SAP Cryptographic Library is the default security product delivered by SAP for performing encryption functions in SAP Systems. You can use it for providing Secure Network Communications (SNC) between various SAP server components or for using the Secure Sockets Layer (SSL) protocol with the SAP Web Application Server. In this guide, we will be going through how you can enable SNC in your own SAP instance and configuring your On-premise Agent to use SNC for encrypted communications.

The process follows 2 steps:
* Configuring the SAP cryptographic library in your SAP instance for SNC.
* Registering an SNC user in your SAP instance and using that in your connection profile in the config file of your OPA.

## Configuring the SAP cryptographic library in your SAP instance for SNC.

::: warning
You will need server side access to the machine(s) hosting your SAP instance. This required the downloading and installation of the SAP cryptographic library on the server.
:::

### 1. Install the SAP Cryptographic Library
To install the SAP cryptographic library, you will first need to obtain the SAP cryptographic library installation package. This can be found in the [SAP support portal](https://support.sap.com/en/index.html). Head over to software downloads in the landing page and you'll be brought to the SAP one launchpad for Support.

![Software downloads](~@img/connectors/sap/snc-support-nav-1.png)

::: tip Login credentials
You will need access to the SAP one launchpad. If you do not have such credentials, contact your SAP admin for support.
:::

In the launchpad, head over to the top search bar and type in `COMMONCRYPTOLIB 8` which should bring you to this screen.

![Commoncryptolib 8](~@img/connectors/sap/snc-support-nav-2.png)

Click on `COMMONCRYPTOLIB 8` and select the latest patch. Ensure that the operating system selected matches that of the server hosting your SAP instance. In the example below, we have selected the latest patch `8530`. Add this to your download basket and by clicking the shopping cart icon in the top right corner of the table.

![Download basket](~@img/connectors/sap/snc-support-nav-3.png)

Head over to your download basket by clicking `Download Basket` at the bottom of the screen and click on the file you just added to download it. You may be prompted to reenter your login credentials at this point.

The SAP Cryptographic Library installation package `sapcrypto.sar` contains the following files:
1. The SAP Cryptographic Library (`sapcrypto.dll` for Windows NT or `libsapcrypto.<ext>` for UNIX)
2. A corresponding license ticket (ticket)
3. The configuration tool `sapgenpse.exe`

### 2. Installing the Cryptographic Library on the SAP OS
As the user `<sid>adm`
* Extract the contents of the SAP Cryptographic Library installation package.
* Copy the library file and the configuration tool `sapgenpse.exe` to the directory specified by the application server's profile parameter `DIR_EXECUTABLE`. In the following, we represent this directory with the notation `$(DIR_EXECUTABLE)`.

Example: Windows NT:
```
DIR_EXECUTABLE: <DRIVE>:/sapmnt/LI1/exe
Location of SAP Cryptographic Library: <DRIVE>:/sapmnt/LI1/exe/sapcrypto.dll
```

* Check the file permissions for the SAP Cryptographic Library. If, for example, you copied the library to its location using ftp on UNIX, then the file permissions may not be set correctly. Make sure that `<sid>adm` (or `SAPService<SID>` under Windows NT) is able to execute the library's functions.
* Copy the ticket file to the sub-directory sec in the instance directory `$(DIR_INSTANCE)`.

Example: Windows NT:
```
DIR_INSTANCE: <DRIVE>:/usr/sap/<SID>/<instance>
Location of the ticket: <DRIVE>:/usr/sap/<SID>/<instance>/sec/ticket
```

* Set the environment variable SECUDIR to the sec sub-directory. The application server uses this
variable to locate the ticket and its credentials at run-time.

### 3. Set the trust manager profile parameters in your application server
Set the profile parameters so that the trust manager can access the SAP Cryptographic Library. Set the following profile parameters on each SAP AS ABAP instance and restart the application server.

| Profile parameters | Value | Example |
|--------------------|-------|---------|
| `sec/libsapsecu` | Path and file name of the SAP Cryptographic Library | `UNIX: /usr/sap/<SID>/SYS/exe run/ libsapcrypto.so` <br> <br> `Windows NT: <DRIVE>:\usr\sap\<SID>\SYS\ exe\run\sapcrypto.dll` |
| `ssf/ssfapi_lib ` | Path and file name of the SAP Cryptographic Library | `UNIX: /usr/sap/<SID>/SYS/exe run/ libsapcrypto.so` <br> <br> `Windows NT: <DRIVE>:\usr\sap\<SID>\SYS\ exe\run\sapcrypto.dll` |
| `ssf/name` | `SAPSECULIB` | `SAPSECULIB` |

### 4. Create a PSE and self-signed public-key certificate on SAP application server

::: tip Note
If the component has several hosts, then you can create a single PSE on one host and copy it to the other hosts.
:::

Using the trust manager in the SAP GUI
1. Go to the trust manager (T-code STRUST)
2. Select the SNC PSE node. In the example below, we have it named as `SNC SAPCrytolib`

![Create or replace PSE](~@img/connectors/sap/snc-support-nav-4.png)

3. Right click to open the context menu and select `Create` (if no PSE exists) or `Replace`.
4. If the server's SNC name is defined in the profile parameter `snc/identity/as`, then the system automatically determines the Distinguished Name accordingly. Otherwise, enter the Distinguished Name parts in the corresponding fields, for example:
- Name = `<SID>`
- Org. (opt.) = Test
- Comp./Org. = MyCompany
- Country = US
5. Choose `Enter` to return to the Trust Manager screen.
6. For SNC, you must assign a password to the PSE. Choose Assign password. The PSE dialog appears.

![Set password](~@img/connectors/sap/snc-support-nav-5.png)

7. Enter a password for the PSE and choose Enter. You return to the Trust Manager screen

Once done, The system creates the SNC PSE and distributes it to the individual application servers. The system protects the PSE with a password and creates credentials for the server so that it can access the PSE at run-time.

### 5. Export the SAP SNC certificate
Export the SAP Certificate from the application server to be imported on Web logic Server.

Using the trust manager in the SAP GUI
1. Go to the trust manager (T-code STRUST)
2. Select the SNC PSE node. In the example below, we have it named as `SNC SAPCrytolib`
3. Choose PSE Export under the `Certificate` section. Select Base64 format.

![Export certificate](~@img/connectors/sap/snc-support-nav-6.png)

4. Save the PSE to your server's file system. This SNC PSE will be use later on in the OPA to establish a secure connection.

### 6. Importing a Certificate from external server

Using the trust manager in the SAP GUI
1. Go to the trust manager (T-code STRUST)
2. Select the SNC PSE node. In the example below, we have it named as `SNC SAPCrytolib`
3. Choose Certificate import in the certificate section of the node.
4. Select the `.crt` from the file system. Note: This crt was generated from web logic server.
5. The PSE information appears in the PSE certificate section as a file `.crt`. (Base 64 format)
6. For SNC, you must assign a password to the PSE. Choose Assign password.

![Set password](~@img/connectors/sap/snc-support-nav-5.png)

7. Enter a password for the PSE and choose Enter. You return to the Trust Manager screen

Once done, The system creates the SNC PSE and distributes it to the individual application servers. The system protects the PSE with a password and creates credentials for the server so that it can access the PSE at run-time.

### 7. Set the SNC profile parameters
The last step in the configuration procedure on the application server is to set the SNC-relevant profile parameters.

::: warning
Setting the profile parameter snc/enable to 1 activates SNC on the application server. If this parameter is set but the SNC PSE and credentials do not exist, then the application server will not start. Therefore, setting the SNC parameters should be the last step in the configuration procedure
:::

Set the below profile parameters on the application server so that the server can communicate using SNC and restart the SAP System.

| Profile parameters | Value | Example |
|--------------------|-------|---------|
| snc/enable | 1 | 1 |
| snc/gssapi_lib  | Path and file name where the SAP Cryptographic Library is located | `UNIX: /usr/sap/<SID>/SYS/exe run/ libsapcrypto.so` <br> <br> `Windows NT: <DRIVE>:\usr\sap\<SID>\SYS\ exe\run\sapcrypto.dll` |
| snc/identity/as | Application server's SNC name <br> Syntax: `p:<Distinguished_Name>` The Distinguished Name part must match the Distinguished Name that you specify when creating the SNC PSE. | p:CN=ABC, OU=Test, O=MyCompany, C=US |
| snc/data_protection/max | 1: Authentication only <br> 2: Integrity protection <br> 3: Privacy protection | 3 |
| snc/data_protection/min | 1: Authentication only <br> 2: Integrity protection <br> 3: Privacy protection | 1 |
| snc/data_protection/use | 1: Authentication only <br> 2: Integrity protection <br> 3: Privacy protection <br> 9: Use the value from snc/data_protection/max | 9 |
| snc/accept_insecure_cpic  | 0: do not accept <br> 1: accept | 1 |
| snc/accept_insecure_gui | 0: do not accept <br> 1: accept | 1 |
| snc/accept_insecure_r3int_rfc | 0: do not accept <br> 1: accept | 1 |
| snc/accept_insecure_rfc | 0: do not accept <br> 1: accept | 1 |

#### Sample SNC parameters
```
snc/identity/as = p:CN=EH8, OU=I0021153659, OU=SAP Web AS, O=SAP Trust Community, C=DE
ssf/name = SAPSECULIB
ssf/ssfapi_lib = D:\usr\sap\EH8\SYS\exe\uc\NTAMD64\sapcrypto.dll
sec/libsapsecu = D:\usr\sap\EH8\SYS\exe\uc\NTAMD64\sapcrypto.dll
snc/enable = 1
snc/gssapi_lib = D:\usr\sap\EH8\SYS\exe\uc\NTAMD64\sapcrypto.dll
spnego/krbspnego_lib = D:\usr\sap\EH8\SYS\exe\uc\NTAMD64\sapcrypto.dll
snc/data_protection/max = 3
snc/data_protection/min = 1
snc/data_protection/use = 9
snc/accept_insecure_cpic = 1
snc/accept_insecure_gui = 1
snc/accept_insecure_r3int_rfc = 1
snc/accept_insecure_rfc = 1
SNC_QOP = 8
snc/permit_insecure_start = 1
snc/extid_login_diag = 1
snc/extid_login_rfc = 1
DIR_SAPJVM = $(DIR_EXECUTABLE)$(DIR_SEP)sapjvm_6
jstartup/vm/home = $(DIR_SAPJVM)
```

### 8. Mapping an SNC user
Using the trust manager in the SAP GUI
1. Go to the trust manager (T-code STRUST)
2. Select the SNC PSE node. In the example below, we have it named as `SNC SAPCrytolib`
3. Import the certif
