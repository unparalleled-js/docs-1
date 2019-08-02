---
title: Team - Single sign-on
date: 2019-08-02 18:00:00 Z
---

# Team collaboration - Single sign on
You can connect SAML providers to Workato. This allows you to provide authentication and authorized access for multiple users across multiple web applications.

This means that your team members do not have to manually create accounts with Workato. Instead, they can authenticate themselves with Single Sign On (SSO).

SSO also enables [just in time provisioning](/user-accounts-and-teams/just-in-time-provisioning.md) to streamline your onboarding flow.

## Create Workato application on your SAML provider
These are the steps to enable SSO for [Okta](#okta-single-sign-on) and [OneLogin](#onelogin-single-sign-on).

### Okta Single sign on
1. Create a new SAML application in Okta admin interface.

![Add application on Okta](/assets/images/user-accounts-and-teams/single-sign-on/add-application.png/)
*Add application on Okta. Refer to the [Okta documentation](http://developer.okta.com/standards/SAML/setting_up_a_saml_application_in_okta) for more details.*

2. Create a New Application integration.

![Create a new application on Okta](/assets/images/user-accounts-and-teams/single-sign-on/create-application.png/)
*Create a new application on Okta*

3. Fill in the General settings for this new SAML Application.

![Configure general settings](/assets/images/user-accounts-and-teams/single-sign-on/configure-general-settings.png/)
*Configure general settings*

4. Configure SAML settings.

![Okta Config Wizard](/assets/images/user-accounts-and-teams/team-collaboration/okta-settings-config-mode.png)
*Okta Workato Service Provider settings in Wizard mode*

Fill the settings form as follows:

| Field                 | Value                                         |
| --------------------- | --------------------------------------------- |
| Single Sign On URL    | `https://www.workato.com/saml/init`           |
| Use this for Recipient URL and Destination URL | Enable checkmark     |
| Allow this app to request other SSO URLs  | Enable checkmark          |
| Requestable SSO URLs  | `https://www.workato.com/saml/consume`        |
| Audience URI (SP Entity ID) | `https://www.workato.com/saml/metadata` |

5. Save and create this SAML application. The final Okta settings screen should look like this:

![Okta Config View](/assets/images/user-accounts-and-teams/team-collaboration/okta-settings-view-mode.png)
*Workato Service Provider completed settings on Okta*

6. Obtain Okta metadata URL.

- Locate the newly created Application's page
- Locate the  **Sign On tab**
- Right-click on **Identity Provider metadata** and **Copy link address**

![Okta IdP URL](/assets/images/user-accounts-and-teams/single-sign-on/okta-metadata-link.gif)
*Okta metadata URL*

### OneLogin Single Sign-On
1. Create a new SAML application in OneLogin admin interface. Find **Apps** > **Add App** > **SAML Test Connector**.

![Add application on OneLogin](/assets/images/user-accounts-and-teams/single-sign-on/onelogin-add-application.png/)
*Add application on OneLogin. Refer to the [OneLogin documentation](https://support.onelogin.com/hc/en-us/articles/202673944-How-to-Use-the-OneLogin-SAML-Test-Connector) for more details.*

2. Fill in the basic configuration for this new application.

![Configure basic settings](/assets/images/user-accounts-and-teams/single-sign-on/onelogin-basic-configuration.png/)
*Configure basic settings*

3. Configure the SAML settings.

![Workato Service Provider settings for OneLogin](/assets/images/user-accounts-and-teams/team-collaboration/onelogin-settings.png)
*Workato Service Provider settings for OneLogin*

Fill the settings form as follows:

| Field              | Value                                           |
| ------------------ | ----------------------------------------------- |
| Audience           | `https://www.workato.com/saml/metadata`         |
| Recipient          | `https://www.workato.com/saml/init`             |
| ACS (Consumer) URL Validator | `^https:\/\/www.workato.com\/saml\/*$`|
| ACS (Consumer) URL | `https://www.workato.com/saml/consume`          |

4. Obtain OneLogin metadata URL.

- **Save** the OneLogin new application setup.
- Select **More actions**
- Right-click on **SAML metadata** and **Copy link address**

![OneLogin IdP URL](/assets/images/user-accounts-and-teams/single-sign-on/onelogin-metadata-link.gif)
*OneLogin metadata URL*

## Workato Single Sign-on setup
After creating a new application on your SAML provider. Finish the SSO setup on Workato's Team [setting page](https://www.workato.com/members#settings).

Once you have filled in the required fields, select **Validate Settings**. After validation has succeeded, select **Save**.

![Workato SAML config](/assets/images/user-accounts-and-teams/single-sign-on/workato-okta-settings.png)
*Workato SAML Okta Configuration example*

| Input Field           | Description                                                |
| --------------------- | ---------------------------------------------------------- |
| Team name             | Define the name for this team.                             |
| Authentication method | Select SAML based SSO.                                     |
| Team ID               | Define a team ID. This is used to identify teams on login. |
| SAML provider         | Select your SAML provider.                                 |
| Do you have your identity provider metadata URL. | Enable this option.             |
| Metadata URL          | Input the metadata URL which you have previously obtained. |
| Do you want to enable SAML JIT provision | See [here](/user-accounts-and-teams/just-in-time-provisioning.md) for more information. |

### SSO configuration with x.509 certificate
You can also configure the SAML settings manually. In this case, you need to get from SAML Identity Provider next information:
- Identity Provider Single Sign-On URL
- Identity Provider Issuer
- X.509 Certificate

![Workato SAML manual config](/assets/images/user-accounts-and-teams/single-sign-on/workato-okta-settings-manual.png)
*Workato SAML Okta Manual Configuration example*

## Assign SAML to people
Once you have completed the SSO configuration, you can start assigning this SAML application to your team members.

For example, we will use the Workato SAML application in Okta. Select **Assign** > **Assign to people**.

![Workato SAML application on Okta](/assets/images/user-accounts-and-teams/single-sign-on/workato-saml-app.png)
*Workato SAML application on Okta*

Assign team members from the list provided.

![Assign SAML to people](/assets/images/user-accounts-and-teams/single-sign-on/assign-to-people.png)
*Assign SAML to people*

## Logging into SAML-enabled Team
Once SAML is enabled, access to Team is controlled by SAML Identity Provider (Okta, OneLogin, etc). Your team members can now access their Workato accounts from the SAML provider.

- Clicking on the Workato application on Okta will lead users to the Workato platform.

![Workato app on Okta](/assets/images/user-accounts-and-teams/single-sign-on/employee-workato-app.png)
*Workato app on Okta*

- From the Workato platform, switching from a personal account to a (SAML-enabled) Team account will require authentication through the SAML provider.

![Team Switch with Okta](/assets/images/user-accounts-and-teams/single-sign-on/okta-team-switch.gif)
*Switch to Team account with Okta authorization*
