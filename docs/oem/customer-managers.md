---
title: Customer managers
date: 2019-10-24 11:00:00 Z
---

# Customer managers

The customer managers feature helps OEM partners and their team members manage their customer accounts. The feature is available on the OEM Admin console under the 'Customer managers' tab.

## Who are Customer managers?

Customer managers are members in the OEM partner's team that can access **all customer accounts**. They may be members of your customer success teams, support personnel or recipe and connector developers tasked with helping your customers with their integrations.

Customer managers should be trusted team members that have permissions to view data in customer accounts. The type and amount of data/tools they can view in customer teams can be handled by permissions with [role-based access control](/user-accounts-and-teams/team-collaboration.md#team-roles).

## Adding a customer manager

To add a customer manager, first consider the following:

- Ensure this person is a collaborator in the OEM team. They can be invited in the [Teams page](https://www.workato.com/members).
- Decide the [role](/user-accounts-and-teams/team-collaboration.md#team-roles) they should have within all customer teams. This defines their access to customer recipes, jobs and features.

In the 'Customer managers' tab on the OEM admin console, add a customer manager by clicking on the **+ Add customer manager** button on the top right of the table.

![Customer managers](~@img/oem/customer-manager.png)
*Customer manager table*

In the next dialog, add the collaborator you wish to make a customer manager and select the role from the current available list of system and inheritable roles.

![Customer managers](~@img/oem/customer-manager-add.png)
*Add a customer manager*

Note that this role will be applied for this customer manager in all customer accounts.

Once a customer manager is added, they will be **explicitly** added to the customer team with the specified role. Customers who have access to their Teams page will see all customer managers that can manage their account. This is to ensure customers are aware of all users that have permissions to access their account for security and audit purposes.

![Customer managers tag](~@img/oem/customer-manager-tag.png)
*Customer managers cannot be edited or removed through the customer account*

However, customers will not be able to remove or edit a customer manager within their team. Customer managers are marked with a special tag when viewed in the customer's account.

## Accessing customer accounts

Once a user has been added as a customer manager, they may access their customers' accounts easily from the teams dropdown.

They may also access the customer account from the customer info page (`OEM admin console` > `Customers` > `Customer page`) by clicking on the 'Access customer account' button.

![Customer managers](~@img/oem/customer-info-access.png)
*Access a customer account from the customer info page*

Both actions switch the user from the current account to the selected customer account. They will then be able to perform actions in the customer account.

### Audit tracking

All logins, logouts etc. and work done by customer admins can be tracked in the [activity audit log](/features/activity-audit-log.md).

Each recipe's versions tab also has a 'Modified by' column so edits made to recipes can be tracked.


## Editing/removing a customer manager

You may edit a customer manager's role at any time by clicking on the 'Edit' button in the list of customer managers. Select a new role for the user before saving.

![Customer managers edit](~@img/oem/customer-manager-edit.png)
*Edit the role of a customer manager*

To revoke access to all customer accounts, remove this user from the list customer managers by clicking on the 'delete' icon in the table. They will no longer have access to customer accounts going forward and all the work they did in the customer accounts is retained.

## FAQ

1. **If I already have team members added to my current customer teams, how will the customer manager feature work?**

    **Ans:** There are 2 ways OEM partners can be added to their customer teams. The first is manually inviting through the teams feature, and the second is through the customer manager feature.

    Both ways of adding the OEM partner can work together — if there are members already added, you may still invite them through the customer admin feature.

2. **If so, can my team member have 2 roles in a customer account?**

    **Ans:** The role assigned through a manual invite through the team feature will always take precedence.

    For example, if `Admin-A` from your team is invited to the team with an 'Operator' role in `Customer-1` and he is assigned an 'Admin' role with the customer manager feature, his role in the `Customer-1` team will be 'Operator'. He will not be able to access this customer as an 'Admin'.

    You may also remove the manual invite from the team. In that case, `Admin-A` will always access the customer account with an 'Admin' role.
