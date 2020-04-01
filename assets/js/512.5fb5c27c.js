(window.webpackJsonp=window.webpackJsonp||[]).push([[512],{2526:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"custom-authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-authentication"}},[t._v("#")]),t._v(" Custom Authentication")]),t._v(" "),a("p",[t._v("Occasionally, the API requires an authentication mechanism different from the typical ones. The "),a("code",[t._v("custom_auth")]),t._v(" type can be used in this case. The custom authentication provides you with the ability to do the following:")]),t._v(" "),a("ul",[a("li",[t._v("acquire and/or refresh credentials")]),t._v(" "),a("li",[t._v("Define when credentials should be refreshed")]),t._v(" "),a("li",[t._v("Store credentials data not provided directly by user (obtained from API requests)")])]),t._v(" "),a("h2",{attrs:{id:"sample-code-snippet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-code-snippet"}},[t._v("#")]),t._v(" Sample code snippet")]),t._v(" "),a("p",[t._v("This example connects to "),a("a",{attrs:{href:"https://www.zoho.com/crm/help/api/using-authentication-token.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zoho CRM"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My Zoho connector'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'email'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        control_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    authorization"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'custom_auth'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      acquire"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          authtoken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://accounts.zoho.com/apiauthtoken/nb/create'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n            params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SCOPE'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ZohoCRM/crmapi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EMAIL_ID'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'email'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PASSWORD'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DISPLAY_NAME'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Workato test adapter'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n            response_format_raw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AUTHTOKEN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\\h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      refresh_on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Three ways to match:")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Integer HTTP response code.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Unauthorized'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# String that equals the whole body or whole title of the error response.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/Unauthorized/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Regex that matches with the body or title of the error response.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Invalid")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Ticket")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# The actual "signal" that we need to re-authorize in Zoho.')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      detect_on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Two ways to match: String (matches whole body of the response), and:")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v('/^\\{"response":\\{"error"/')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Regex that matches the body of the response.")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      apply"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n        params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authtoken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authtoken'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  triggers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  object_definitions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  picklists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"using-the-acquire-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-acquire-block"}},[t._v("#")]),t._v(" Using the "),a("code",[t._v("acquire:")]),t._v(" block")]),t._v(" "),a("p",[t._v("Context is same as an action's execute block. You can write the require code here to acquire and store relevant credentials data to be used in the "),a("code",[t._v("apply")]),t._v(" block.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("acquire"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    authtoken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://accounts.zoho.com/apiauthtoken/nb/create'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n      params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SCOPE'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ZohoCRM/crmapi'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'EMAIL_ID'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'email'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PASSWORD'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DISPLAY_NAME'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Workato test adapter'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n      response_format_raw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AUTHTOKEN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\\h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("p",[t._v("The output of this block should be a "),a("strong",[t._v("hash")]),t._v(", which will be merged with the original connection object. Take note that a hash is expected when using the "),a("code",[t._v("acquire")]),t._v(" block for custom authentication but we expect an array of hashes when using the "),a("code",[t._v("acquire")]),t._v(" block for OAuth 2.0 authentication methods.")]),t._v(" "),a("p",[t._v("This API request to the Auth token endpoint returns a raw text response with the Auth token like this:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("AUTHTOKEN=bad18eba1ff45jk7858b8ae88a77fa30\nRESULT=TRUE\n")])])]),a("p",[t._v("As a result, the connection object is merged with this value after executing the "),a("code",[t._v("acquire")]),t._v(" block.")]),t._v(" "),a("p",[t._v("Original "),a("code",[t._v("connection")]),t._v(" object")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"john@gmail.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pinkfloyd"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("connection")]),t._v(" object after executing "),a("code",[t._v("acquire")]),t._v(" block")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"john@gmail.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pinkfloyd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authtoken"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SAMPLE_TOKEN"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This new connection object will be passed into all actions, triggers, test and pick lists as the "),a("code",[t._v("connection")]),t._v(" argument.")]),t._v(" "),a("blockquote",[a("p",[t._v("Note: When using the acquire block, this block is run only if the refresh_on or detect_on block is triggered. In cases where an access token is retrieved via the acquire block, the refresh_on or detect_on block would need to be triggered first. This can be done by registering the bad request response expected from the failed API call with no access token.")])]),t._v(" "),a("h2",{attrs:{id:"using-the-apply-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-apply-block"}},[t._v("#")]),t._v(" Using the "),a("code",[t._v("apply:")]),t._v(" block")]),t._v(" "),a("p",[t._v("Synonym of the "),a("code",[t._v("credentials")]),t._v(" block. Basically how to apply the credentials to an action/trigger/test request. All requests made in actions, triggers, tests and pick lists will be applied with the credentials defined here.")]),t._v(" "),a("p",[t._v("Here are a list of accepted inputs into the "),a("code",[t._v("apply:")]),t._v(" block")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("apply"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Adds in URL parameters passed as a hash object")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# i.e. authtoken=[connection['authtoken']]")]),t._v("\n  params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authtoken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authtoken'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Adds in payload fields (PATCH, POST, PUT only) pass as hash")]),t._v("\n  payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("grant_type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authorization_code"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          client_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          client_secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client_secret"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auth_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Adds in headers into every request passed as a hash.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# i.e. Authorization : Bearer [given access token]")]),t._v("\n  headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bearer '),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"access_token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Used in conjunction with password function")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# i.e. sends the input as username and password in HTTP authentication")]),t._v("\n  user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   \n  password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v('The "apply" block will not be applied to any requests made in "acquire". So you will have to include the required credentials for a successful API request here.')])]),t._v(" "),a("h2",{attrs:{id:"using-the-refresh-on-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-refresh-on-block"}},[t._v("#")]),t._v(" Using the "),a("code",[t._v("refresh_on")]),t._v(" block")]),t._v(" "),a("p",[t._v("This is an optional array of "),a("strong",[t._v("signals")]),t._v(" that is used to identify a need to re-acquire credentials . When an erroneous response is received (400, 401, 500...), the SDK framework checks it against this list of signals. If a match is found, it triggers a re-authorization (execute "),a("code",[t._v("acquire")]),t._v(").")]),t._v(" "),a("p",[t._v("This list is optional. If not defined, will default to one attempt at re-acquiring credentials for all errors.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("refresh_on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Unauthorized'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/Unauthorized/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/Invalid Ticket Id/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v('The example here shows multiple ways that we can define "signals" to watch.')]),t._v(" "),a("ul",[a("li",[a("code",[t._v("401")]),t._v(": The response status code")]),t._v(" "),a("li",[a("code",[t._v('"Unauthorized"')]),t._v(": The exact string matching the whole body or title of response")]),t._v(" "),a("li",[a("code",[t._v("/Unauthorized/")]),t._v(": Regex matching the body or title of response")]),t._v(" "),a("li",[a("code",[t._v("/Invalid Ticket Id/")]),t._v(': The actual "message" to watch for in the case of the Zoho API')])]),t._v(" "),a("h2",{attrs:{id:"using-the-detect-on-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-detect-on-block"}},[t._v("#")]),t._v(" Using the "),a("code",[t._v("detect_on")]),t._v(" block")]),t._v(" "),a("p",[t._v("Certain APIs don't signal errors with explicit response status code like a "),a("code",[t._v("401")]),t._v(". Instead, they return a "),a("code",[t._v("200")]),t._v(" (pseudo successful response) with a payload that signals the error.")]),t._v(" "),a("p",[t._v("For such APIs, an error (expired credentials, bad requests etc.) will not be picked up since it is interpreted as a successful request (Status code "),a("code",[t._v("200")]),t._v("). A match with the signals defined here will raise an error.")]),t._v(" "),a("p",[t._v("When there is a match here, two things can happen.")]),t._v(" "),a("p",[t._v("Firstly, there can also be a match against "),a("code",[t._v("refresh_on")]),t._v(" signals. When that happens, a re-authorization is triggered (acquire block is executed) instead of raising an error. In this case, "),a("code",[t._v("detect_on")]),t._v(" is used to match errors hidden behind responses with status code "),a("code",[t._v("200")]),t._v(", then used to identify that a credentials refresh is required.")]),t._v(" "),a("p",[t._v("If a match here does not match any of the signals defined in "),a("code",[t._v("refresh_on")]),t._v(", an error will be raised.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("detect_on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sample error message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v('/^\\{"response":\\{"error".+$/')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v('The example here shows multiple ways that we can define "signals" to watch')]),t._v(" "),a("ul",[a("li",[a("code",[t._v('"sample error message"')]),t._v(": The exact string matching the whole body of response")]),t._v(" "),a("li",[a("code",[t._v('/^\\{"response":\\{"error".+$/')]),t._v(": Regex matching the body of response")])]),t._v(" "),a("p",[t._v("This list is optional. If not defined, pseudo successful response will be treated as a successful request instead of raising exceptions. Note: output values of trigger and action will be affected.")]),t._v(" "),a("h2",{attrs:{id:"other-authentication-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-authentication-methods"}},[t._v("#")]),t._v(" Other authentication methods")]),t._v(" "),a("p",[t._v("Check out the other authentication methods we support as well as how to set up a custom connector that works for on-premise connections. "),a("router-link",{attrs:{to:"/developing-connectors/sdk/authentication.html"}},[t._v("Go back to our list of authentication methods")]),t._v(" or check our our "),a("router-link",{attrs:{to:"/developing-connectors/sdk/best-practices.html"}},[t._v("best practices")]),t._v(" for some tips.")],1),t._v(" "),a("h2",{attrs:{id:"next-section"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-section"}},[t._v("#")]),t._v(" Next section")]),t._v(" "),a("p",[t._v("If you're already familiar with the authentication methods we support, check out the actions that our SDK supports as well as how to implement them. "),a("router-link",{attrs:{to:"/developing-connectors/sdk/action.html"}},[t._v("Learn more")])],1)])}),[],!1,null,null,null);s.default=e.exports}}]);