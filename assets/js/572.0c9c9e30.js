(window.webpackJsonp=window.webpackJsonp||[]).push([[572],{2686:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"recipe-lifecycle-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recipe-lifecycle-management"}},[t._v("#")]),t._v(" Recipe lifecycle management")]),t._v(" "),s("h3",{attrs:{id:"quick-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-reference"}},[t._v("#")]),t._v(" Quick reference")]),t._v(" "),s("table",{staticClass:"api-quick-reference"},[s("thead",[s("tr",[s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Resource")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("POST")]),t._v(" "),s("td",[s("a",{attrs:{href:"#export-package-based-on-a-manifest"}},[t._v("/api/packages/export/:manifest_id")])]),t._v(" "),s("td",[t._v("Export package based on a manifest.")])]),t._v(" "),s("tr",[s("td",[t._v("POST")]),t._v(" "),s("td",[s("a",{attrs:{href:"#import-package-into-a-folder"}},[t._v("/api/packages/import/:folder_id")])]),t._v(" "),s("td",[t._v("Import package into a folder.")])]),t._v(" "),s("tr",[s("td",[t._v("GET")]),t._v(" "),s("td",[s("a",{attrs:{href:"#get-package-by-id"}},[t._v("/api/packages/:id")])]),t._v(" "),s("td",[t._v("Get package by ID.")])]),t._v(" "),s("tr",[s("td",[t._v("GET")]),t._v(" "),s("td",[s("a",{attrs:{href:"#download-package"}},[t._v("/api/packages/:id/download")])]),t._v(" "),s("td",[t._v("Download a package.")])])])]),t._v(" "),s("h2",{attrs:{id:"export-package-based-on-a-manifest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#export-package-based-on-a-manifest"}},[t._v("#")]),t._v(" Export package based on a manifest")]),t._v(" "),s("p",[t._v("Export package based on a manifest.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("POST /api/packages/export/:id\n")])])]),s("p",[t._v("This is an asynchronous request. Use "),s("a",{attrs:{href:"#get-package-by-id"}},[t._v("GET package by ID")]),t._v(" endpoint to get details of the exported package.")]),t._v(" "),s("h3",{attrs:{id:"url-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url-parameters"}},[t._v("#")]),t._v(" URL parameters")]),t._v(" "),s("table",{staticClass:"api-input"},[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[s("strong",[t._v("string")]),s("br"),s("em",[t._v("required")])]),t._v(" "),s("td",[t._v("Export manifest ID.")])])])]),t._v(" "),s("h4",{attrs:{id:"sample-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sample-request"}},[t._v("#")]),t._v(" Sample request")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v("  -X POST https://www.workato.com/api/packages/export/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("manifest_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-email: <email>'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-token: <token>'")]),t._v("\n")])])]),s("h3",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("242")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"operation_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"completed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"export_manifest_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"download_url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.workato-staging-assets.com/packages/zip_files/000/000/242/original/exportdemo.zip"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"import-package-into-a-folder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-package-into-a-folder"}},[t._v("#")]),t._v(" Import package into a folder")]),t._v(" "),s("p",[t._v("Import a package (zip file) into a folder.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("POST /api/packages/import/:id\n")])])]),s("p",[t._v("This is an asynchronous request. Use "),s("a",{attrs:{href:"#get-package-by-id"}},[t._v("GET package by ID")]),t._v(" endpoint to get details of the imported the package.")]),t._v(" "),s("p",[t._v("The input (zip file) is a "),s("code",[t._v("application/octet-stream")]),t._v(" payload containing package content. URL parameter "),s("strong",[t._v("restart_recipes")]),t._v(" should be "),s("code",[t._v("true")]),t._v(" if the running recipes need to be restarted upon import.")]),t._v(" "),s("h3",{attrs:{id:"url-parameters-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url-parameters-2"}},[t._v("#")]),t._v(" URL parameters")]),t._v(" "),s("table",{staticClass:"api-input"},[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[s("strong",[t._v("string")]),s("br"),s("em",[t._v("required")])]),t._v(" "),s("td",[t._v("Folder ID.")])]),t._v(" "),s("tr",[s("td",[t._v("restart_recipes")]),t._v(" "),s("td",[s("strong",[t._v("boolean")]),s("br"),s("em",[t._v("optional")])]),t._v(" "),s("td",[t._v("If "),s("code",[t._v("true")]),t._v(", it will allow the restarting of running recipes.")])])])]),t._v(" "),s("h4",{attrs:{id:"sample-request-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sample-request-2"}},[t._v("#")]),t._v(" Sample request")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v("  -X POST https://www.workato.com/api/packages/import/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("folder_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("?restart_recipes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-email: <email>'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-token: <token>'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/octet-stream'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      --data-binary @"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/local/file.zip'")]),t._v("\n")])])]),s("h3",{attrs:{id:"response-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("251")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"operation_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"import"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"completed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"download_url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.workato-staging-assets,com/packages/zip_files/000/000/242/original/exportdemo.zip"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"get-package-by-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-package-by-id"}},[t._v("#")]),t._v(" Get package by ID")]),t._v(" "),s("p",[t._v("Get details of an imported or exported package.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /api/packages/:id\n")])])]),s("h3",{attrs:{id:"url-paramters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url-paramters"}},[t._v("#")]),t._v(" URL paramters")]),t._v(" "),s("table",{staticClass:"api-input"},[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[s("strong",[t._v("string")]),s("br"),s("em",[t._v("required")])]),t._v(" "),s("td",[t._v("Package ID.")])])])]),t._v(" "),s("h4",{attrs:{id:"sample-request-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sample-request-3"}},[t._v("#")]),t._v(" Sample request")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v("  -X GET https://www.workato.com/api/packages/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("package_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-email: <email>'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-token: <token>'")]),t._v("\n")])])]),s("h3",{attrs:{id:"response-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("ul",[s("li",[t._v("This shows a successful export.")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("242")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"operation_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"completed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"export_manifest_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"download_url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.workato-staging-assets,com/packages/zip_files/000/000/242/original/exportdemo.zip"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("This shows a package that failed to export properly.")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("242")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"operation_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"failed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error_message"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"export_manifest_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"download_url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"null"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"download-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-package"}},[t._v("#")]),t._v(" Download package")]),t._v(" "),s("p",[t._v("Downloads a package.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /api/packages/:id/download\n")])])]),s("h3",{attrs:{id:"url-parameters-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url-parameters-3"}},[t._v("#")]),t._v(" URL parameters")]),t._v(" "),s("table",{staticClass:"api-input"},[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[s("strong",[t._v("string")]),s("br"),s("em",[t._v("required")])]),t._v(" "),s("td",[t._v("Package ID.")])])])]),t._v(" "),s("h4",{attrs:{id:"sample-request-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sample-request-4"}},[t._v("#")]),t._v(" Sample request")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v("  -X GET https://www.workato.com/api/packages/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("package_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/download "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-email: <email>'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n      -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'x-user-token: <token>'")]),t._v("\n")])])]),s("h3",{attrs:{id:"response-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("p",[t._v("If successful, you will be redirected to the package content. Returns "),s("code",[t._v("404")]),t._v(" if package not found or doesn't have content.")])])}),[],!1,null,null,null);a.default=r.exports}}]);