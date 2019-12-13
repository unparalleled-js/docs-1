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
<table>
  <thead>
    <tr>
      <th width=20%>Steps</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1. Create new application</td>
      <td>
        Locate <b>Applications</b> > <b>Add application</b>.<br>
        <img src="~@img/user-accounts-and-teams/single-sign-on/add-application.png" alt="Add application on Okta"></img><br>
        <i>Add application on Okta. Refer to the <a href="http://developer.okta.com/standards/SAML/setting_up_a_saml_application_in_okta">Okta documentation</a> for more details</i>
      </td>
    </tr>
    <tr>
      <td>2. Select <b>SAML 2.0</b></td>
      <td>
        <img src="~@img/user-accounts-and-teams/single-sign-on/create-application.png" alt="Create a new application on Okta"></img><br>
        <i>Create a new application on Okta</i>
      </td>
    </tr>
    <tr>
      <td>3. Skip to <b>SAML settings</b></td>
      <td>
        <img src="~@img/user-accounts-and-teams/team-collaboration/okta-settings-config-mode.png" alt="Okta Config Wizard"></img><br>
        <i>Workato Service Provider settings for Okta</i><br><br>
        Fill in the settings form as follows:<br>
        <table>
          <thead>
            <th>Field</th>
            <th>Value</th>
          </thead>
          <tbody>
            <tr>
              <td>Single Sign On URL</td>
              <td><code>https://www.workato.com/saml/init</code></td>
            </tr>
            <tr>
              <td>Use this for Recipient URL and Destination URL</td>
              <td>Enable checkmark</td>
            </tr>
            <tr>
              <td>Allow this app to request other SSO URLs</td>
              <td>Enable checkmark</td>
            </tr>
            <tr>
              <td>Requestable SSO URLs</td>
              <td><code>https://www.workato.com/saml/consume</code></td>
            </tr>
            <tr>
              <td>Audience URI (SP Entity ID)</td>
              <td><code>https://www.workato.com/saml/metadata</code></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>4. Select <b>Save</b> and <b>Create</b></td>
      <td>
        The final Okta settings screen should look like this:<br>
        <img src="~@img/user-accounts-and-teams/team-collaboration/okta-settings-view-mode.png" alt="Okta Config View"></img><br>
        <i>Workato Service Provider completed settings on Okta</i>
      </td>
    </tr>
    <tr>
      <td>5. Obtain Okta <b>Metadata URL</b></td>
      <td>
        Follow these steps to obtain the Okta Metadata URL:<br>
        <ul>
          <li>Locate the newly created Application's page</li>
          <li>Locate the <b>Sign On tab</b></li>
          <li>Right-click on <b>Identity Provider metadata</b> and <b>Copy link address</b></li>
        </ul>
        <img src="~@img/user-accounts-and-teams/single-sign-on/okta-metadata-link.gif" alt="Okta IdP URL"></img><br>
        <i>Okta metadata URL</i>
      </td>
    </tr>
  </tbody>
</table>

### OneLogin Single Sign-On

<table>
  <thead>
    <tr>
      <th width=20%>Steps</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1. Add application on OneLogin</td>
      <td>
        Locate <b>Appplications</b> > <b>Add App</b>.<br>
        <img src="~@img/user-accounts-and-teams/single-sign-on/onelogin-add-application.png" alt="Add application on OneLogin"></img><br>
        <i>Add application on OneLogin. Refer to the <a href="https://support.onelogin.com/hc/en-us/articles/202673944-How-to-Use-the-OneLogin-SAML-Test-Connector">OneLogin documentation</a> for more details</i>
      </td>
    </tr>
    <tr>
      <td>2. Create a new SAML application</td>
      <td>
        Locate <b>Apps</b> > <b>Add app</b> > <b>SAML Test Connector</b>.<br>
        <img src="~@img/user-accounts-and-teams/single-sign-on/onelogin-saml-test-connector.png" alt="SAML test connector"></img><br>
        <i>SAML test connector</i>
      </td>
    </tr>
    <tr>
      <td>3. Skip to <b>Configuration settings</b></td>
      <td>
        <img src="~@img/user-accounts-and-teams/single-sign-on/onelogin-settings.png" alt="OneLogin Config Wizard"></img><br>
        <i>Workato Service Provider settings for OneLogin</i><br><br>
        Fill in the settings form as follows:<br>
        <table>
          <thead>
            <th>Field</th>
            <th>Value</th>
          </thead>
          <tbody>
            <tr>
              <td>Audience</td>
              <td><code>https://www.workato.com/saml/metadata</code></td>
            </tr>
            <tr>
              <td>Recipient</td>
              <td><code>https://www.workato.com/saml/init</code></td>
            </tr>
            <tr>
              <td>ACS (Consumer) URL Validator</td>
              <td><code>^https:\/\/www.workato.com\/saml\/*$</code></td>
            </tr>
            <tr>
              <td>ACS (Consumer) URL</td>
              <td><code>https://www.workato.com/saml/consume</code></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>4. Obtain OneLogin <b>Metadata URL</b></td>
      <td>
        Follow these steps to obtain the OneLogin Metadata URL:<br>
        <ul>
          <li><b>Save</b> the OneLogin new application setup</li>
          <li>Select <b>More Actions</b></li>
          <li>Right-click on <b>SAML metadata</b> and <b>Copy link address</b></li>
        </ul>
        <img src="~@img/user-accounts-and-teams/single-sign-on/onelogin-metadata-link.gif" alt="OneLogin IdP URL"></img><br>
        <i>OneLogin metadata URL</i>
      </td>
    </tr>
  </tbody>
</table>

## Workato Single Sign-on setup
After creating a new application on your SAML provider, finish the SSO setup on the Workato Team [setting page](https://www.workato.com/members#settings).

Fill in the required fields and select **Validate Settings**. After validation has succeeded, select **Save**.

![Workato SAML config](~@img/user-accounts-and-teams/single-sign-on/workato-okta-settings.png)
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

![Workato SAML manual config](~@img/user-accounts-and-teams/single-sign-on/workato-okta-settings-manual.png)
*Workato SAML Okta Manual Configuration example*

## Assign SAML to people
Once you have completed the SSO configuration, you can start assigning this SAML application to your team members.

For example, we will use the Workato SAML application in Okta. Select **Assign** > **Assign to people**.

![Workato SAML application on Okta](~@img/user-accounts-and-teams/single-sign-on/workato-saml-app.png)
*Workato SAML application on Okta*

Assign team members from the list provided.

![Assign SAML to people](~@img/user-accounts-and-teams/single-sign-on/assign-to-people.png)
*Assign SAML to people*

## Logging into SAML-enabled Team
Once SAML is enabled, access to Team is controlled by SAML Identity Provider (Okta, OneLogin, etc). Your team members can now access their Workato accounts from the SAML provider.

- From Okta, clicking on the Workato application will lead users to the Workato platform.

![Workato app on Okta](~@img/user-accounts-and-teams/single-sign-on/employee-workato-app.png)
*Workato app on Okta*

- From the Workato platform, switching from a personal account to a (SAML-enabled) Team account will require authentication through the SAML provider.

![Team Switch with Okta](~@img/user-accounts-and-teams/single-sign-on/okta-team-switch.gif)
*Switch to Team account with Okta authorization*
