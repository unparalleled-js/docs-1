---
title: Team - Just in time provisioning
date: 2019-08-02 18:00:00 Z
---

# Team collaboration - Just in time provisioning
Just-in-Time (JIT) provisioning eliminates the needs for team admins to create Workato user accounts in advance on behalf of team members. When an employee signs up for a new Workato account via SAML SSO, they will automatically be added into the organization's team.

> If an employee has an existing Workato account they will be automatically be added into the organization's team.

You may enable SAML Just-In-Time provisioning on **Team** > **Settings** page.

![Enable SAML Just-In-Time provisioning](/assets/images/user-accounts-and-teams/jit-provisioning/saml-jitp.png)
*Enable SAML Just-In-Time provisioning*

## Customize JIT provisioning
You can customize JIT provisioning to relay user-specific information to Workato. Workato will take a SAML attribute (e.g. name) and apply it for the provisioned Workato account. This enables new users to be provisioned with the appropriate information according to your workflow.

The following attributes are supported: `workato_email`, `workato_full_name`, and `workato_role`. If the attributes are not configured, a default value will be used.

| Workato user field  | SAML attribute      | Default value                      |
| ------------------- | ------------------- | ---------------------------------- |
| User email          | `workato_email`     | SAML `NameID`<br>(in email format) |
| User name           | `workato_full_name` | Part of SAML `Name`                |
| User team role      | `workato_role`      | `Operator`                         |

### Why customize JIT provisioning
Outside of the default roles (`Admin`, `Analyst`, and `Operator`), custom roles can be configured with specific access to folder or permissions to edit connections and recipes. This gives you more control to enforce security policies for Workato accounts.

Also, this eliminates the need to manually provision Workato accounts with the **appropriate access privileges**. This leads to reduced operations cost and smoother onboarding.

## How to customize JIT provisioning
To assign user information during JIT provisioning, you first need complete the basic setup:
- Enable [SAML based SSO](/user-accounts-and-teams/single-sign-on.md) for Team
- Enable [SAML Just-in-Time provisioning](#team-collaboration-just-in-time-provisioning) for Team
- Create [custom role](/user-accounts-and-teams/team-collaboration.md#custom-roles) on Workato
    + e.g. `mktg_ops` with specific access to the Marketing folder
- **Configure the SAML attribute** on the SAML provider's application page.

### Configure SAML attribute on SAML provider
Let's configure the SAML attributes for `workato_role` on Okta.

| Steps                                | Description |
| ------------------------------------ | --- |
| 1. Locate **Profile Editor**         | ![Profile editor](/assets/images/user-accounts-and-teams/jit-provisioning/okta-profile-editor.png) |
| 2. Select Okta > **Profile**         | ![Okta profile](/assets/images/user-accounts-and-teams/jit-provisioning/okta-profile.png) |
| 3. Select **Add attribute**          | ![Add attribute](/assets/images/user-accounts-and-teams/jit-provisioning/add-attribute.png) |
| 4. Fill in the **attribute** details | For more information see [here](#setting-up-workatorole-attribute).<br>![Attribute fields](/assets/images/user-accounts-and-teams/jit-provisioning/attribute-fields.png) |
| 5. Locate the Workato **SAML app**   | ![Workato SAML app](/assets/images/user-accounts-and-teams/jit-provisioning/workato-saml-app.png) |
| 6. Select **SAML settings** > edit   | ![Add attribute](/assets/images/user-accounts-and-teams/jit-provisioning/saml-app-setting.png) |
| 7. Skip to **Configure SAML**        | ![Configure SAML](/assets/images/user-accounts-and-teams/jit-provisioning/configure-saml.png) |
| 8. Locate **Attribute statement**    | The `Name` value is passed to workato (this is case-sensitive), `user.workato_role` is the attribute you just configured.<br><br> ![Attribute statement](/assets/images/user-accounts-and-teams/jit-provisioning/attribute-statement.png)<br><br>Instead of the `user.workato_role` attribute, it is possible to input a fixed value (e.g. Analyst). This will set the default for all users to be provisioned with the `Analyst` role. |
| 9. Save and exit SAML setting        | Note that existing users will not be affect. In order to implement JIT custom role provisioning, define the user's `workato_role` in their [profile page](#assign-roles-for-team-members). |

#### Setting up `workato_role` attribute
Workato accepts certain attributes and converts them into user values when provisioning a new account. In order to facilitate this, all values have to be identical to the roles in Workato Team.

For example, we created a custom role in workato Team called `mktg_ops` with custom permissions to certain folders and recipes.

Thus, the SAML attribute will be as follows:

| SAML attribute | Stored values |
| -------------- | ------------- |
| `workato_role` | `Admin`, `Analyst`, `Operator` and `mktg_ops` |

>It is recommended that you also list out the default roles; `Admin`, `Analyst`, `Operator`.

All values are case-sensitive (`Admin`, ~~`admin`~~). Ensure that you have configured the role names identical to the ones on your Team setting.

## Assign roles for team members
- When an employee is onboarded with Okta, select a value for `workato_role`.

![Select workato_role for new user](/assets/images/user-accounts-and-teams/jit-provisioning/new-user-custom-role.png)
*Select `workato_role` for new user*

- For existing Okta users, assign `workato_role` on their profile page. This only applies if this Okta user **does not have** an existing Workato account.

![Configure workato_role for an existing user](/assets/images/user-accounts-and-teams/jit-provisioning/assign-current-user.gif)
*Configure `workato_role` for an existing user*

Now, when when a user logins to Workato [using SSO](/user-accounts-and-teams/single-sign-on.md), the identity provider passes `workato_role` for this new user. For a new hire in the Marketing department, the provisioned Workato account with be configured with the custom role `mktg_ops`.
