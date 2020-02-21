---
title: Embedded connections
date: 2019-10-21 11:00:00 Z
---

# Embedded Connection Widget

The Embedded Connection Widget allows the end customer to access and authenticate the app connections in their account. It allows OEM partners to build their own user experience for their customers to provide authentication to connections.

It usually functions well in Blackbox use cases where the OEM partner builds and maintains integrations on the customer's behalf. In this scenario, the customer can use the widget to authenticate connections required for their recipes from the partner's application, without ever having to leave and access the Workato platform.

This is available as an add-on to all OEM partners.

## Implementation

To use the Connection Widget you can add:

```html
<iframe src="https://workato.com/direct_link/embedded/connections/<connection_id>>?workato_dl_token=<jwt_token>"></iframe>
```

The Connection Widget API works on [PostMessage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) in the following format:

```
{ type: string, payload: object }
```
::: tip Note
If you are testing the Widget for the first time, please provide your Workato customer success representative the Origin URL. This will allow the window to receive the messages via the PostMessage API.
:::

### Supported types

| Type  | Payload | Description |
| ------------- | ------------- | -------- |
| `heightChange`  | `{ height: number }`  | Content height was changed
| `connectionStatusChange`  | `{ id: number, provider: string, connected?: boolean, error?: string }`  | Connection status was changed
| `error` | `{ message: string }` | Unexpected error

### Example of use:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <script>
      window.addEventListener('message', receiveMessage);
      function receiveMessage(event) {
        var data = JSON.parse(event.data);

        switch (data.type) {
          case 'heightChange':
            document.getElementById('workatoId').style.height = data.payload.height + 'px';
            break;
          case 'connectionStatusChange':
            var message = data.error || (data.payload.connected ? 'Connected' : 'Disconnected');
            document.getElementById('statusId').innerText = message;
            break;
          case 'error':
            console.log(data.payload.message);
        }
      }
    </script>
  </head>
  <body>
    <h4>Status: <span id="statusId"></span></h4>
    <iframe id="workatoId" src="https://workato.com/direct_link/embedded/connections/<connection_id>>?workato_dl_token=<token>" style="width: 500px; height: 150px; border: 0"></iframe>
  </body>
</html>
```

## JWT direct linking
Every customer account that uses the Embedded Connection Widget is authenticated to their corresponding Workato account through JWT direct linking. View this [document](/oem/jwt-direct-linking.md) to learn more.

### Example of JWT generation:

```javascript
import nanoid from 'nanoid';
import {sign} from 'jsonwebtoken';

/**
* @param apiKey A unique key associated with the vendor.
* @param customerAccountId Id of the customer's account
* @param privateKey Private key using RS256 algorithm (this should match the public key provided to Workato)
*/
function getToken(apiKey, customerAccountId, privateKey) {
  return sign({
    sub: `${apiKey}:${customerAccountId}`,
    jti: nanoid()
  },
  privateKey,
  {
    algorithm: 'RS256'
  });
}
```

See more examples https://github.com/auth0/node-jsonwebtoken
