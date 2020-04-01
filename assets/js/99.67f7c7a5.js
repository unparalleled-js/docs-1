(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{2161:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"access-tokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#access-tokens"}},[e._v("#")]),e._v(" Access Tokens")]),e._v(" "),s("p",[e._v("Access tokens are string fields that identify the client of a Callable Recipe. The token value is a secret that is shared between a client and the Workato server. A token is passed to the API in an authorization header. The header must have a valid value for the call to succeed.")]),e._v(" "),s("p",[e._v("Workato supports two token formats: "),s("a",{attrs:{href:"#auth-tokens"}},[e._v("Auth Token")]),e._v(" and "),s("a",{attrs:{href:"#jwt-tokens"}},[e._v("JSON Web Token (JWT)")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"auth-tokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auth-tokens"}},[e._v("#")]),e._v(" Auth Tokens")]),e._v(" "),s("p",[e._v("An Auth Token is automatically generated when an Access Profile is created. It is a long string.")]),e._v(" "),s("p",[e._v("The Access Profile screen displays this string (but masked for security reasons) after a Profile is created. The auth token can be copied to the clipboard.")]),e._v(" "),s("p",[e._v("The "),s("strong",[e._v("Refresh")]),e._v(" button will generate a new Auth Token value and invalidates any previous value.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(388),alt:"Auth Token for an Access profile",width:"2588",height:"1100"}}),e._v(" "),s("em",[e._v("Auth Token for an Access profile")])],1),e._v(" "),s("p",[e._v("When calling an endpoint, the Auth Token value is passed as the value of the "),s("code",[e._v("API-Token")]),e._v(" header.")]),e._v(" "),s("h2",{attrs:{id:"jwt-tokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt-tokens"}},[e._v("#")]),e._v(" JWT Tokens")]),e._v(" "),s("p",[e._v("For additional security, clients can now make use of JSON Web Tokens (JWT). This is a standard "),s("a",{attrs:{href:"https://tools.ietf.org/html/rfc7519",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 7159"),s("OutboundLink")],1),e._v(" method for web authentication. JWT tokens are signed using a secret or key selected by the client.")]),e._v(" "),s("p",[e._v("When JWT is selected in the Access Profile screen, there are two additional field values to select. One is the signing method and the other is a secret or key field.")]),e._v(" "),s("p",[e._v("Workato supports two signing methods: "),s("strong",[e._v("HMAC")]),e._v(" and "),s("strong",[e._v("RSA")]),e._v(". HMAC uses a symmetric shared secret (client and server have the same secret). RSA uses an asymmetric key pair (client has a private key and shared the public key with the server). HMAC uses a 256-bit secret value.")]),e._v(" "),s("p",[e._v("If you select "),s("strong",[e._v("HMAC")]),e._v(", you will see the following fields in the Access Profile screen:")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(389),alt:"JWT Token Configuration",width:"610",height:"431"}}),e._v(" "),s("em",[e._v("JWT Token Configuration")])],1),e._v(" "),s("p",[e._v("The shared secret can be any value that you select, but for best security, it should be a long value generated by a secure random number generator. If you have OpenSSL, you can generate such a secret with the command:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("openssl rand -base64 "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("32")]),e._v("\n")])])]),s("p",[e._v("Paste the secret value into the "),s("strong",[e._v("JWT HMAC secret")]),e._v(" field.")]),e._v(" "),s("p",[e._v("If you select "),s("strong",[e._v("RSA")]),e._v(" then you must have an RSA public key/certificate and a corresponding RSA private key. One way to generate this is by using OpenSSH:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("ssh-keygen -t rsa\n")])])]),s("p",[e._v("This will generate two files, one for the private key (no extension) and one for the public key (.pub extension). A typical public key file might look like this:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC4O6vRGXTkXWQ4yjj6baC7xAlrJPagWQ1WgI7RBUfk5PRPyD88Lp1vqe0CqshOIEeIVca3mD+W0YtJGlu4IaFh2gIC0W2lQY+3yXkzw2IQvnK1jjzxLJ6Dho7Vh3kLVqlmDB0ABdFhoU+vZf19AnLMqGhmu81xXoutK89MJAfvGFWbZ/zfM/yl9aqTOVrEJFpUxloL2IY/EAiUqblRTH5KWtimetEPF8VG3hu/YeU/5/CzPGZaLKUOcO3k0A6a6iIA2ruV180QN0FmgrCUsQ6oA6vWZsY1LuJm3bnLv7KJApR+WYqp7OCMlhk67N7zxkbZqNb2+eyUCx7E2SFCjFkR jdart@bear\n")])])]),s("p",[e._v("The public key needs to be pasted into the "),s("strong",[e._v("Public Key")]),e._v(" field in the "),s("strong",[e._v("Access Profile")]),e._v(" screen.")]),e._v(" "),s("h2",{attrs:{id:"generating-jwt-tokens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generating-jwt-tokens"}},[e._v("#")]),e._v(" Generating JWT Tokens")]),e._v(" "),s("p",[e._v("A JWT token can encapsulate several pieces of information that the client communicates to the server. For Workato, the essential information is the Workato access key and the name of the user. These should be placed in a JSON structure similar to the following:")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"sub"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"d4aee74e131926682043395edecaf377765fae48e56e232cb295af475b314545"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"John Doe"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("Here "),s("code",[e._v("sub")]),e._v(" is the Auth token that is obtainable from the Access Profile screen in Workato, and "),s("code",[e._v("name")]),e._v(" is the name of the client.")]),e._v(" "),s("p",[e._v("The JWT token is a signed representation of the JSON structure. You can generate a JWT token using the tools at "),s("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JWT.IO"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("With JWT, the client is responsible for generating and packaging a token in the correct format. An online tool is available at "),s("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JWT.IO"),s("OutboundLink")],1),e._v(' to facilitate this. The JSON format text mentioned above should be pasted or typed into the "payload" field on the "Decoded" side of the tool. In addition, they will paste in the private key (RSA) or secret string (HMAC) in the "Verify Signature" section. The signed and encoded key then appears on the right-hand side in the "Encoded" section.')]),e._v(" "),s("p",[e._v("The two standard algorithms Workato supports are "),s("strong",[e._v("HS256")]),e._v(" (aka HMAC) and "),s("strong",[e._v("RS256")]),e._v(" (aka RSA).")]),e._v(" "),s("p",[e._v("For example, generation of an HMAC JWT might look like this:")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(390),alt:"JWT Generation",width:"2402",height:"1512"}}),e._v(" "),s("em",[e._v("JWT Generation")])],1),e._v(" "),s("h2",{attrs:{id:"invoking-apis-secured-with-jwt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#invoking-apis-secured-with-jwt"}},[e._v("#")]),e._v(" Invoking APIs secured with JWT")]),e._v(" "),s("h3",{attrs:{id:"testing-an-api-endpoint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing-an-api-endpoint"}},[e._v("#")]),e._v(" Testing an API endpoint")]),e._v(" "),s("p",[e._v("Once the JWT token is generated, clients can test the APIs by visiting the API group URL. Click on "),s("strong",[e._v("Copy client URL")]),e._v(" in the client screen as shown in the image below. You can provide your client with this URL.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(391),alt:"Copy client URL",width:"2356",height:"1042"}}),e._v(" "),s("em",[e._v("Copy the client URL")])],1),e._v(" "),s("p",[e._v("Next, select a collection in the next screen. To test an API endpoint within a collection, click on the toggle for "),s("strong",[e._v("Authentication method and token")]),e._v(" and select JSON web token (JWT). Paste the JWT token here and set the token.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(392),alt:"Select JWT",width:"1748",height:"772"}}),e._v(" "),s("em",[e._v("Setting the JWT token")])],1),e._v(" "),s("p",[e._v("After setting the token, choose on one of the endpoints and provide valid values for the required parameters. Click on "),s("strong",[e._v("Test")]),e._v(" at the bottom of the page to test the API endpoint. The test should return a "),s("code",[e._v("200")]),e._v(" response code and the expected response body.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(393),alt:"Select JWT",width:"2220",height:"1070"}}),e._v(" "),s("em",[e._v("200 response code and response body")])],1),e._v(" "),s("h3",{attrs:{id:"calling-an-api-endpoint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#calling-an-api-endpoint"}},[e._v("#")]),e._v(" Calling an API endpoint")]),e._v(" "),s("p",[e._v("The encoded and signed token is passed to the Workato API in the header (see "),s("router-link",{attrs:{to:"/api-mgmt/calling-apis.html"}},[e._v("Calling APIs")]),e._v("). The access token is sent in the Authorization header with the Bearer authentication scheme.")],1),e._v(" "),s("ol",[s("li",[s("p",[e._v("The example below shows how the token is used in Postman:\n"),s("DocImage",{attrs:{src:a(394),alt:"Postman test",width:"1606",height:"390"}}),e._v(" "),s("em",[e._v("Example of a JWT token used in Postman")])],1)]),e._v(" "),s("li",[s("p",[e._v("The example below shows how the token is used in a curl request:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -XGET "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Authorization: Bearer ayJhbGciOiJIUzI1NakIKjkJFVCJ9.eyJzdWIiOiI4OJSIFMLLdkZTY0ZWZkNDY1MTcyMjk2MDA2ZTlmNDEwNGEzOGJmMDAzZTk0YmYyYzRiMzhjYzg3ZDgwYjU0ODk1IiwibmFtZSI6os9fvaG4gRG9lIn0.D_ZHmYZkbRAFQeL'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://apim.workato.com/api-endpoints-v1/call?email=john-doe%40acme.com'")]),e._v("\n")])])])])])])}),[],!1,null,null,null);t.default=n.exports},388:function(e,t,a){e.exports=a.p+"assets/img/auth-token.2564a760.png"},389:function(e,t,a){e.exports=a.p+"assets/img/jwt-token-config.5f54574f.png"},390:function(e,t,a){e.exports=a.p+"assets/img/jwt-generation.4ab998f0.png"},391:function(e,t,a){e.exports=a.p+"assets/img/copy-client-url.a18c373d.png"},392:function(e,t,a){e.exports=a.p+"assets/img/set-jwt-token.d16308c4.png"},393:function(e,t,a){e.exports=a.p+"assets/img/test-success.240ad847.png"},394:function(e,t,a){e.exports=a.p+"assets/img/postman-eg.0fcaf3f2.png"}}]);