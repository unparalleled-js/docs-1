---
title: Product Updates
date: 2018-06-05 21:45:00 Z
---


![Product Updates banner](/assets/images/product-updates-banner.png)

Our engineers are hard at work daily to make Workato better! View the latest updates to our platform below.


### Platform security: Just-in-Time provisioning now supports custom roles
###### Jun 23, 2019

#### What is Just-in-time provisioning
Just-in-Time provisioning enables customers to use a SAML assertion to create users in downstream  apps e.g. Workato on-demand when users log into the app for the very first time.
This eliminates the need to manually provision user accounts in advance. For example, instead of manually creating a Workato account for a new employee customers can use Just-in-Time provisioning to dynamically create the Workato account when the new employee initially logs in using Single Sign On (SSO).   

#### For Whom
- Available for all plans that include SSO & Teams
- All current accounts using Teams with SAML based SSO (e.g. OKTA, One Login or other)

#### Why we built it
- Supporting custom roles for Just-in-time provisioning allows customers to enforce custom security policies for Workato
- The standard roles Admin, Analyst, and operator available with Just-in-time provisioning  don't suffice for customer's security policies

#### How it works
- First, Workato admin creates a custom role e.g.mktg_ops for marketingOps that can only access, create, or modify objects (recipes, connections,OPA etc.) in the Marketing folder.
- Next, the authentication method is set to SAML based SSO (e.g. Okta, OneLogin) with SAML JIT enabled.
- The 3rd party identity provider (i.e. Okta, Onelogin) is configured to use the custom role value e.g. mktg_ops for the workato_role as one of the SAML attributes
- When a user logs into Workato using SAML based SSO for the first time, the identity provider (i.e. Okta,OneLogin) passes the custom role value e.g. mktg_ops for workato_role.
- The user's Workato account is then automatically provisioned with the custom role i.e. mktg_ops

#### Why it is useful
- *Reduced Administrative Costs:* Eliminates manual work to provision Workato accounts thus reducing cost of operations.
- *Increased Security:* In addition to the access/security policies enforced by the identity provider, customers can now enforce custom security policies for Workato accounts.
- *Faster Onboarding & improved employee experience:* New hires have faster access to Workato accounts with the right access privileges.

#### Resources
- [Documentation](https://docs.workato.com/user-accounts-and-teams/team-collaboration.html#saml-just-in-time-provisioning)
___

### Platform security: Two-factor authentication
###### Jun 12, 2019

#### What is Two-Factor Authentication (2FA)
2FA is an extra layer of security used to make sure that people trying to gain access to an online account are who they say they are. First, a user will enter their username and a password. Then, instead of immediately gaining access, they will be required to provide another piece of information. This second factor could come from one of the following categories:

1. **Something you know:** This could be a personal identification number (PIN), a password, answers to “secret questions” or a specific keystroke pattern
2. **Something you have:** Typically, a user would have something in their possession, like a credit card, a smartphone, or a small hardware token
3. **Something you are:** This category is a little more advanced, and might include biometric pattern of a fingerprint, an iris scan, or a voice print

#### For Whom
- Available for all plans
- All existing and new accounts

#### How it works
Workato's two-factor authentication uses a software generated time-based, one-time passcode (also called TOTP, or soft-token)
- First, a user must download and install a free 2FA app (e.g. Google Authenticator, Authy, or other) on their smartphone or desktop
- Next, they will need to go to their Account settings section to enable two-factor authentication.
- When enabled, the user will be prompted to go through a couple of simple steps to activate 2FA for their account

#### Why is it useful
- Customers can add a secondary layer of security to protect unauthorized and fraudulent access to their Workato account
- Similar to SSO, enterprise IT teams can now use 2FA to alleviate risks by enforcing security policies that require 2FA.
- Enables secure onboarding of collaborators to a team
- Eliminates the painful policy for periodic password reset

#### Resources
- [Documentation](https://docs.workato.com/security/2fa.html)
- [Video demo](https://www.dropbox.com/s/7dyi467bsl3aw7v/2FA%20Tutorial%20-%20V02.mp4?dl=0-)

___

### Connector update: Zendesk Sunshine
###### Jun 03, 2019

#### Introduction to Zendesk Sunshine
- [Zendesk Sunshine](https://www.zendesk.com/platform/) is an open, flexible CRM platform. Sunshine is built on AWS and lets customers seamlessly connect and understand all their customer data--wherever it lives.
- With Zendesk Sunshine, customers can build entirely custom applications that help go beyond customer support
- Zendesk Sunshine introduced Custom objects and relationships to store custom entities like products, subscriptions - that are unique to each customer/business.

#### How it works

Workato is the first, and currently the only integration platform to support Zendesk Sunshine. The Zendesk connector has been updated to support actions for newly introduced Zendesk Sunshine objects and APIs:

**Custom Objects:**
- Create custom object record
- Update custom object record
- Get custom object record by ID
- Get list of custom object records by external ID
- Delete custom object record

**Custom relationship**
- Create relationship record
- Get related records
- Delete Relationship Record

#### Resources:
- [Overview](https://www.workato.com/integrations/zendesk)

___

### Webhooks wizard
###### Jun 03, 2019

#### Background: Why webhooks?
Webhooks is part of a larger platform offering: custom connectivity. While we have a strong list of triggers out of the box, user data shows that 44% of our users require custom connectivity to some extent. It is typically used to connect to proprietary or legacy apps.

Users use need webhooks for time-sensitive use cases. These use cases require real-time triggering of workflows like requesting an outbound call to a lead downloading the company ebook.

#### For Whom
- Users looking to build recipes with real-time triggers
- Available to all plans

#### Why we built it
Webhooks has been a key part of many customer use cases. In the last year alone, Workato saw more than 2.5x increase in the number of recipes using webhook triggers to enable real-time automation. This trend is expected to continue increasing exponentially. We want to make the user experience for this popular trigger the best out there.

#### How it works
This wizard takes the user through a guided flow to test and verify a webhook trigger. We take the information from this test to configure the metadata automatically.

#### What problems does it solve for you
Unlike other products in the iPaaS space, building a webhooks trigger can now take less than 5 mins (down from 15-30 minutes). Often, users will need to switch back and forth between the recipe and their app.
Additionally, users need to learn/understand the webhooks metadata - what the webhook schema looks like, which HTTP method and data type to expect.
Lastly, it is difficult to verify that a webhook trigger is configured correctly. Users needed to do end-to-end tests with active recipes.

1. Simplify UX - users can verify if the webhook trigger works immediately.
2. Reduce skill barrier and human error - wizard detects key information  and uses it to configure the trigger automatically.

#### Resources
- [Documentation](https://docs.workato.com/connectors/workato-webhooks.html)
- [Common errors and how to resolve them](https://docs.workato.com/connectors/workato-webhooks/common-errors.html)

___

### New connector: Airtable
###### May 26, 2019

#### For Whom
- Customers looking to connect Airtable to enterprise business system apps - Salesforce, ServiceNow, Workday, Netsuite, ERPs, Databases, and more
- Customers looking to automate employee/customer/partner onboarding campaign/event/project management workflows, and more
- Available for Business and above plans

#### How it works
The Airtable Connector provides:

- Polling Triggers -  Access to new records in base, table, and view
- Actions - To create/update records, search records
- Custom Actions - To extend the functionality of the connector
- Time Machine- Access to current and historical data

#### Why it is useful
- Addresses key LOB automations - Enables marketing, sales, finance, HR, and other business teams to create automations connecting enterprise apps
- Connects business and technology teams - HR,Marketing, Sales, Finance teams can easily create and track requests for IT and engineering teams

#### Resources
- [Overview](https://www.workato.com/integrations/airtable)

___

### New connector: Coupa
###### May 19, 2019

#### For Whom
- Customers looking to connect Coupa to ERP, invoicing, order management, contract management, travel & expense management, CRM, Identity managment, enterprise content sharing appps, and more
- Customers looking to automate procure-to-pay, record-to-reports, expense management, procurement approval, and other processes
- Available for Business and above plans

#### How it works
The Coupa Connector provides:

- Polling Triggers - For major standard objects e.g. Account, Address, Contract, Expense Report, Lookup Value, Inventory Transaction, Supplier, and more
- Actions - To create/update standard objects, close purchase order, Get Object id, Search objects, and more
- Custom Actions - To extend the functionality of the connector
- Custom Fields- Access to standard and custom fields for various objects

#### Why it is useful
- Addresses key finance automations - Enables customers to automate key financial processes e.g. procure-to-pay, record-to-report, spend and expense management, source-to-pay, and more
- Increases value and usage of Coupa - Connects Coupa to all corners of the business i.e. finance, IT, HR, Marketing, Sales, Support

#### Example recipes
- [Manage Procure To Pay integrations between Coupa and your ERP](https://product.workato.com/2019/05/10/automating-procure-to-pay-by-connecting-coupa-to-netsuite/)
- [Manage Procure To Order integrations between Coupa and your ERP](https://product.workato.com/2019/05/10/coupa-integrations-with-netsuite-powered-by-workato-expense-management/)
- [Manage Expense Management integrations between Coupa and your ERP](https://product.workato.com/2019/05/10/coupa-integrations-with-netsuite-powered-by-workato-expense-management/)
- [Sync Supplier data from your ERP to Coupa](https://www.workato.com/recipes/929986-sync-supplier-data-from-netsuite-to-coupa)
- [Sync invoice data from Coupa to your ERP](https://www.workato.com/recipes/930010-invoice-approval-in-coupa-updates-netsuite)
- [Sync purchase order data from Coupa to your ERP](https://www.workato.com/recipes/930615-new-updated-purchase-order-in-coupa-creates-updates-purchase-order-in-netsuite)
- [Close purchase orders in Coupa](https://www.workato.com/recipes/930619-vendor-payment-in-netsuite-closes-purchase-order-in-coupa)
- [Sync expense reports data in Expensify and Coupa](https://www.workato.com/recipes/930715-new-expense-report-in-expensify-creates-new-expense-report-in-coupa#settings)

#### Resources
- [Overview](https://www.workato.com/integrations/coupa)
- [Product Blog](https://product.workato.com/2019/05/10/extending-coupa-with-workato/)  
- [Coupa Link](https://www.coupa.com/coupalink/middleware/workato/)

___

### API Platform with JWT authentication
###### May 12, 2019

#### For Whom
- Customers looking to expose internal business processes, and data to be accessed from portals, widgets in SaaS apps, and other internal service
- Customers looking to expose business processes, and data for external partners to consume
- Add-on for Business Plus and above plans

#### Why we built it
- Customers expect API management capabilities when purchasing iPaaS
- Digital businesses need APIs for agility to improve time-to-market, reduce cost of change, and solve a diverse set of use cases
- Increase the publishing and consumption of APIs by reducing the skill and cost barriers

#### How it works
API platform provides the following:

- *RESTful API Endpoints* - expose callable recipes as RESTFUL endpoints
- *API access control* - JWT and auth token based authentication; IP whitelisting
- *API Collections & Policies* - Purpose specific API groups; rate and usage metering for QoS
- *Dashboard & Activity* - Real-time monitoring of usage and health

#### Why is it useful
- *Create New Experiences* - Access to data & services through mobile apps, portals, widgets, bots, and other interfaces
- *Improve security and compliance* - Share data without direct access to underlying apps and systems
- *Increase reuse to reduce cost* - Create reusable components that can be shared to reduce dev costs

#### Competitive Advantages
- *Reduced skill barrier*  -  business analysts, App admins, and non-developer personas can publish & consume
- *Reduced costs* - lower development & maintenance costs; lower operations cost; zero DevOps
- *Faster time to value* - faster development cycles; rapid iterations for adapting to changing requirements
- *Rapid adoption at scale* - enables more roles in the enterprise to participate in the digital transformation

#### Resources
- [Product Hour](https://resources.workato.com/product-hour/api-management-with-workato-jan-17/)
- [Product Blog post](https://product.workato.com/2019/02/08/feb-2019-product-release-api-platform-update/)
- [Documentation](https://docs.workato.com/api-mgmt/access-tokens.html)

___

### Automation Dashboard And Job History Search
###### May 05, 2019

#### For Whom
- Customers looking to monitor mission and business critical automations
- Operators/Admins responsible for triaging/resolving issues quickly for SLA
- All plans

#### Challenges Addressed
- Elimination of manual steps to analyze and discover issues across all recipes in an account
- Lack of visibility into historical trends in jobs processed/failed to analyze health of all recipes in an account.
- Extremely time consuming manual process of reviewing log for each job run for auditing and triaging issues. Unsustainable for recipes with 100s of jobs.

#### How it works
Users have instant visibility into the health of recipes, connections, OPA, jobs from a single view- Automation Dashboard.

- Real-time visualization of data pertaining to recipes, connections, etc.
- Target issues that matter with filters to drill down to details of specific time periods, folders, recipe status
- Manage and fix errors that need immediate attention
- Google like search using keywords across all job history data

#### Why is it useful
- Faster discovery and resolution of issues increases uptime & improves SLA
- Significant savings in time and effort in monitoring all recipes for an account
- Unprecedented access to audit, troubleshoot and resolve issues to improve data quality & integrity

#### Competitive Advantage
For other iPaaS vendors:

- Dashboards provide operational insights using technical data vis-a-vis CPU, memory and I/O utilization & performance, and aggregated job run stats - requiring users to manually analyze and discover issues.
- Accessing and querying job history data/logs when available would require custom tooling or 3rd party tools.

#### Resources
- [Demo](https://www.youtube.com/watch?v=L3eY4EPCgLY)
- [Product Hour](https://resources.workato.com/product-hour/autonomous-operations-mar-28/)
- [Product Blog post](https://product.workato.com/2019/04/09/apr-2019-product-release/)

___

### Recipe Lifecycle Management automation with Manifests and APIs
###### Apr 28, 2019

#### For Whom
- Enterprise Customers
- Multiple Environments/Accounts (Dev/Test/Production)
- Available for Business Plus and above plans

#### Challenges Addressed
- Automation of delivery cycles - from build/change, to testing to deployment to reduce error rates and increase speed of delivery for business
- Elimination of manual steps to create and move packages (recipes & dependencies) across environments
Support integration with external version control software and  deployment automation

#### How it works
Users can create manifests- a record of all assets (recipes & dependencies) that is  included in the package.

- Manifests eliminate manual selection to ensure consistency in export of recipes & dependencies
- Automated tracking and auditability of package changes to reduce errors
- Additionally, APIs available to export and import packages help with deployment automation

#### Why is it useful
- Faster recipe deployment cycles with less effort
- Reduced errors when deploying mission critical automations in production
- Improved visibility and consistency across the development lifecycle

#### Resources
- [Docs](https://docs.workato.com/recipe-development-lifecycle.html)
- [Best Practices](https://docs.workato.com/recipe-development-lifecycle.html)
