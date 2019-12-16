---
title: Workato connectors - Zendesk list user identities action
date: 2019-05-30 18:00:00 Z
search:
    keywords: ['zendesk', 'user', 'identity','details', 'get', 'find']
---

# Zendesk - List user identities action
User identity is something that can be used to identify an individual. For example, an email address or a phone number.

This action selects a specific user and returns a list of user identities. It retrieves the user through a search by user ID. Only records in your Zendesk instance that matches the criteria will be returned.

![List user identities action](~@img/connectors/zendesk/list-user-identities-action.png)
*List user identities action*

### Input fields
| Input field | Description                        |
|-------------|------------------------------------|
| User ID     | The unique Zendesk ID of the user. |

### Output fields
The output of this action contains the full set of user identities from the selected user.

| Output field | Description                                                 |
|--------------|-------------------------------------------------------------|
| ID           | Unique Zendesk user identity ID. This is automatically assigned when the user identity is created. |
| User ID      | Unique Zendesk User ID. This is automatically assigned when the user is created. |
| Type         | The type of user identity. Some possible values are `email`, `phone_number`, `sdk` etc. |
| Value        | The value of the user identity. It is stored as a `string`. |
| Verified     | Is `True` if the identity has been verified, otherwise it will display `False`. |
| Primary      | Is `True` if the identity is marked as the primary identity, otherwise it will display `False`. For more information on primary user identity, please see the Zendesk documentation on this [topic](https://developer.zendesk.com/rest_api/docs/support/user_identities#make-identity-primary). |
| Created at   | The time the identity was created.                          |
| Updated at   | The time the identity was last updated.                     |
| List size    | The size of the list, corresponding to the number of user identities retrieved. |
