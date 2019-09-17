---
title: Workato API - Users
date: 2019-03-21 12:20:00 Z
isTocVisible: true
---

# Users

### Supported Formats

* JSON

## Get user details

Get details of authenticated user.

```
GET /api/users/me
```

### Response

```json
{
  "id": 18289,
  "name": "Dave ACME",
  "created_at": "2015-05-26T22:53:47.154Z",
  "handle": "daveacme",
  "expert": false,
  "avatar_url": "http://www.example.com/assets/default-avatar_large.png",
  "recipes_count": 2,
  "interested_applications": [
    "salesforce",
    "xero"
  ],
  "company_name": "Workato",
  "location": "Cupertino, CA",
  "last_seen": "2015-05-26T22:53:47.165Z",
  "contact_phone": "8718293617",
  "contact_email": "dave@acme.com",
  "about_me": "hi",
  "email": "dave@example.com",
  "phone": null,
  "active_recipes_count": 1
}
```
