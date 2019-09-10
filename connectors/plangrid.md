---
title: Workato connectors - Plangrid
date: 2019-09-09 12:00:00 Z
---

# Plangrid
[PlanGrid](https://www.plangrid.com) is an intuitive, sheet-based mobile construction app that keeps everyone building from the current set, and building together. View and comment on plans, create punch lists, submit progress reports, and more—instantly from the field.

### API version
The PlanGrid connector uses the [PlanGrid API](https://developer.plangrid.com).

### Supported editions and versions
The PlanGrid connector works with all PlanGrid accounts.

## How to connect to PlanGrid on Workato

### PlanGrid connection
The PlanGrid connector uses OAuth 2.0 authentication to authenticate with PlanGrid.

![PlanGrid connection page on Workato](/assets/images/plangrid/workato-plangrid-connection.png)

* **Connection name**

  Give the PlanGrid connection a unique name that identifies which PlanGrid instance it is connected to.

* **Client ID**

  Create a client ID by registering an application [here](https://enterprise.plangrid.com). Navigate to your organisation and the OAuth section before creating a new OAuth App in the top right corner.

* **Client secret**

  When registering a new OAuth app, you should receive both a client ID and client secret for a single application.

Click on Connect and a PlanGrid dialog box will pop-up, requesting PlanGrid account email and password, granting access to Workato.

![PlanGrid connection page on Workato](/assets/images/plangrid/popup-dialog-page.png)

* **Email**

  Email of PlanGrid account.

* **Password**

  Password of PlanGrid account.


### Roles and permissions required to connect
The PlanGrid connection will have the same permissions as the PlanGrid account used to create the connection. This means that they will have the same capabilities per their respective permissions on a PlanGrid project
