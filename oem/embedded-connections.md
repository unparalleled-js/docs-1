---
title: Embedded connections
date: 2019-10-21 11:00:00 Z
---

# Embedded connections

To use Connections widget you can add: 

```html
<iframe src="https://workato.com/direct_link/embedded/connection/<connection_id>>?workato_dl_token=<jwt_token>"></iframe>
``` 

Widget API works on postMessage. 

Format: `{ type: string, payload: object }` 

Is supported next types: 

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
    <iframe id="workatoId" src="https://workato.com/direct_link/embedded/connection/<connection_id>>?workato_dl_token=<token>" style="width: 500px; height: 150px; border: 0"></iframe>
  </body>
</html>
```

### Example of JWT generation: 

```javascript
import nanoid from 'nanoid';
import {sign} from 'jsonwebtoken';

/**
* @param apiKey A unique key associated with the vendor.
* @param userId Id of the user's account
* @param privateKey Private key using RS256 algorithm (this should match the public key provided to Workato)
*/
function getToken(apiKey, userId, privateKey) {
  return sign({
    sub: `${apiKey}:${userId}`,
    jti: nanoid()
  },
  privateKey,
  {
    algorithm: 'RS256'
  });
}
```

See more examples https://github.com/auth0/node-jsonwebtoken

 