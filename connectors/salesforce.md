---
title: Workato connectors - Salesforce
date: 2017-02-16 06:15:00 Z
---

# Salesforce
[Salesforce](https://www.salesforce.com/) is a best-of-breed cloud customer relationship management app, enabling organizations to easily manage and track leads, contacts and opportunities. It is built on the Force.com platform, and can be readily extended with an expansive range of third-party marketplace apps and other Salesforce products that encompasses sales, marketing, customer service and commerce.

## API version
The Salesforce connector uses [Salesforce REST API](https://developer.salesforce.com/page/REST_API).

## Supported editions and versions
The Salesforce connector works with all Salesforce cloud instances, e.g. **Professional, Enterprise, Unlimited, and Developer**

It also works with Force.com apps.

## How to connect to Salesforce on Workato
The Salesforce connector uses OAuth2 authentication to authenticate with Salesforce.

![Configured Salesforce connection](/assets/images/salesforce-docs/salesforce-new-connection.PNG)
*Configured Salesforce connection*

- **Connection name**

Give this Salesforce connection a unique name that identifies which Salesforce instance it is connected to.

- **Sandbox**

To connect to a Salesforce Sandbox instance, simply use the login credentials for your sandbox account and select "yes" on this field.

- **Enable restricted IP**

Relevant for organizations with IP whitelisting. Select *yes* to have all requests from Workato originate from a consistent, known IP address.

Fill in the above fields and click connect. A Salesforce connection pop-up prompts you to provide your Salesforce login credentials for OAuth2 authorization.

![Salesforce authorization pop-up](/assets/images/salesforce-docs/salesforce-authentication.PNG)
*Salesforce authorization pop-up*

- **Username**

Username to connect to Salesforce.

- **Password**

Password to connect to Salesforce.

### Roles and permissions required to connect
Salesforce users can connect to Salesforce from Workato. We recommend that a separate user be created for integration purposes.

The connected user will have the same [permissions](https://help.salesforce.com/articleView?id=admin_userperms.htm&language=en_US&type=0) through the Workato Salesforce connector as in Salesforce. They will be able to read and write the objects as specified in their Salesforce profile. The user profile should be setup to allow appropriate access to the requisite objects required for the recipes. The permissions can be edited via the connected user's profile in Salesforce.

#### API Enabled permission
The connected user's profile should be API enabled.
![API enabled permission - profile setup](/assets/images/salesforce-docs/api-enabled-permission.png)
*API enabled permission - profile setup*

#### Standard and custom object permissions
To interact with an object in Salesforce, the connected user's profile needs to have permissions to `read`, `write`, `edit`, `delete`, `view all`, `modify all` for the standard object or custom object in your Salesforce organization.

![Salesforce standard object permissions - profile setup](/assets/images/salesforce-docs/standard-object-profile-permissions.png)
*Salesforce standard object profile permissions setup*

![Salesforce custom object permissions - profile setup](/assets/images/salesforce-docs/custom-object-profile-permissions.png)
*Salesforce custom object profile permissions setup*

#### Platform event permissions
In order to use platform events triggers and actions, you need platform events to be enabled in your Salesforce organization. You would need to set `read` and `create` permissions for the connected user's profile.

![Salesforce platform events permissions - profile setup](/assets/images/salesforce-docs/platform-events-permissions.png)
*Salesforce platform events permissions - profile setup*

#### Real-time trigger permissions
To use real-time triggers in Salesforce, workflow rules have to be set up in your Salesforce organization. These workflow rules require the `Customize application` permission under the Administrative Permissions tab to be setup, although the connected user does not need to be the user who sets these rules up.

![Customize application permission - profile setup](/assets/images/salesforce-docs/customize-application-permission.png)
*Customize application permission - profile setup*

## Working with the Salesforce connector

### Can I connect more than one Salesforce account in a single recipe?
Yes, you may use up to 2. Simply use the Salesforce Secondary app on Workato, and you will be able to use both accounts in a single recipe. Find out more [here](http://http://docs.workato.com/features/secondary-connectors.html).

## Best practices
When starting to use Workato with your Salesforce account, we recommend that you either do it on a sandbox account, or test on non-essential pieces of data. This would prevent any loss of crucial data, especially since actions performed through Workato cannot be undone.

### Working with sandboxes on Workato
Salesforce sandboxes are isolated from your Salesforce production organization, so operations that you perform in your sandboxes don’t affect your Salesforce production organization, and conversely. Sandboxes are nearly identical to your Salesforce production organization. For a list of differences, see [Sandbox Setup Tips and Considerations](https://help.salesforce.com/HTViewHelpDoc?id=data_sandbox_implementation_tips.htm&language=en_US).

## Troubleshooting
Here is a list of common errors that you may encounter, and links to how to rectify them.

- 400 Bad Request

  [errorCode: MALFORMED_ID. Wrong Field is mapped](https://support.workato.com/solution/articles/1000166841-salesforce-error-400-bad-request-errorcode-malformed-id-wrong-field-is-mapped)

  [Invalid Cross-Reference Key](https://support.workato.com/solution/articles/1000229427-salesforce-error-400-bad-request-invalid-cross-reference-key)

  [CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY](https://support.workato.com/solution/articles/1000180151-salesforce-error-400-bad-request-cannot-insert-update-activate-entity)

  [No such column](https://support.workato.com/solution/articles/1000172057-salesforce-error-400-bad-request-message-no-such-column-expiry-date-c-)

  [Bad request: A workflow or approval field update caused an error when saving this record. Contact your administrator to resolve it](https://support.workato.com/solution/articles/1000248902-salesforce-error-400-bad-request-a-workflow-or-approval-field-update-caused-an-error-when-saving-th)

- [401 Unauthorised: Invalid Session ID](https://support.workato.com/solution/articles/1000229430-salesforce-error-401-unauthorised-invalid-session-id)

- [404 Resource not found](https://support.workato.com/solution/articles/1000171918-salesforce-error-404-resource-not-found)

- [Custom field not present](https://support.workato.com/solution/articles/1000188420-salesforce-error-custom-field-is-not-present-custom-fields-are-not-showing-up-)

- [Entered email ID is not valid, Incorrect format, input data too big](https://support.workato.com/solution/articles/1000188419-salesforce-error-entered-email-id-is-not-valid-incorrect-format-input-data-too-big)

- [Input required for field or required field missing](https://support.workato.com/solution/articles/1000188418-salesforce-error-input-required-for-field-or-required-field-missing)
