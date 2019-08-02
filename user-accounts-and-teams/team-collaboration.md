---
title: Team collaboration
date: 2017-02-16 06:15:00 Z
---

# Team collaboration
Team feature enables multiple users to work on the same Workato account and collaborate on recipes in a shared workspace. User roles and permission sets can be assigned to ensure that different users have access to the features they need.

Workato also allows for [Single Sign On](/user-accounts-and-teams/single-sign-on.md) through SAML providers and [Just in time provisioning](/user-accounts-and-teams/just-in-time-provisioning.md) for custom roles. 

Team feature is enabled only for certain plans. Check the [Pricing and Plans page](https://www.workato.com/pricing?audience=general) or reach out to Workato sales representatives at +1 (844) 469-6752 to find out more.

## Team owner permissions
For Workato accounts with team access, team owners are able to view the team option on their account menu.

![Team option](/assets/images/user-accounts-and-teams/team-collaboration/team-option.png)
*Team feature menu option*

In the team admin screen, team owners can view current collaborators on their team, view pending invitations to collaborators, as well as invite collaborators. Collaborator roles can also be changed by the team owner.

[![https://gyazo.com/8c002bf0ddbc8610dbdb1ad0eaba61c2](https://i.gyazo.com/8c002bf0ddbc8610dbdb1ad0eaba61c2.gif)](https://gyazo.com/8c002bf0ddbc8610dbdb1ad0eaba61c2)
*View collaborators, pending invites to collaborators, and invite collaborators*

## Team roles
Each collaborator you invite to a team will have a role. Roles define the permissions a user has when logged into the team account, such as the ability to access particular folders, or the ability to create, edit, delete recipe assets.

The default roles for teams are:
- Admin
- Analyst
- Operator

The following table details the specific set of permissions each role has.

![Roles table](/assets/images/user-accounts-and-teams/team-collaboration/roles-table.png)
*Access rights comparison*

### Admin role
Admins have almost equivalent permissions as the team owner. They are able to add, edit and delete recipes, connections, SDK, API keys and on-prem agents. In addition, admins have administrative rights over the team and are able to invite collaborators or edit collaborators' roles.

The admin role is typically given to users managing the Workato team account.

### Analyst role
Analysts have no access to team administration nor API keys. They are able to add and edit recipes, connections, SDK, as well as start and stop the on-prem agents.

The analyst role is typically given to users building and testing integration recipes or custom connectors on Workato.

### Operator role
Operators only have access to view recipes and jobs, as well as start and stop recipes and rerun jobs.

The operator role is typically given to users maintaining the recipe and ensuring the recipes are running well.

### Custom roles
In addition to the default team roles, you can also define custom roles. These allow you to assign fine-grained permission sets to collaborators. You can create new roles on the team page.

![Roles management](/assets/images/user-accounts-and-teams/team-collaboration/roles-management.png)
*Manage your roles and create new roles in the roles tab within the Team feature*

When creating a new role, select the specific create, edit and delete rights for recipe assets. In addition, select the additional Workato features within the team account you would like the collaborators to have access to.

![Additional role access to features](/assets/images/user-accounts-and-teams/team-collaboration/role-permissons.gif)
*Additional role access to Workato features*

You can also define the folders, and correspondingly the recipes and connections contained in that folder, that the role will have access to. This is useful when there are multiple teams working on the same Workato account, such as development, QA and production teams in the [recipe development lifecycle](/recipe-development-lifecycle.md), or when different departments in the company wish to manage their recipes separately. Users assigned to those folders will not have access to other folders nor to the `Home` folder.

![Additional role access to features](/assets/images/user-accounts-and-teams/team-collaboration/folder-permissions.gif)
*Define folder permissions for the new role*

## Invite collaborators
To invite collaborators, provide the full name of the collaborator and their email.

[![https://gyazo.com/6fe635f951ea2a67e622e5b90bcb9975](https://i.gyazo.com/6fe635f951ea2a67e622e5b90bcb9975.gif)](https://gyazo.com/6fe635f951ea2a67e622e5b90bcb9975)
*Invite collaborators to the team*

Existing Workato users will be prompted to login to Workato and accept the team invite.

Non-Workato users will be prompted to sign up for a Workato account.

## Switching between personal accounts and team accounts
Team members will be able to view the teams they are collaborating on in their account menu, as well as their roles in the team. Members can toggle to these teams by clicking on the team.

[![https://gyazo.com/e3ab4949a64b8753537c8517243525bb](https://i.gyazo.com/e3ab4949a64b8753537c8517243525bb.gif)](https://gyazo.com/e3ab4949a64b8753537c8517243525bb)
*Switching to the ACME team account*

## Audit logs
Recipe changes are logged under **Versions** tab and attributed to the collaborator who made the change. Older versions of the recipe can be restored by users with admin or analyst roles.

![Recipe versions](/assets/images/user-accounts-and-teams/team-collaboration/recipe-versions.png)
*Recipe audit log in Versions tab*
