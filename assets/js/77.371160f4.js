(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{2206:function(e,t,o){"use strict";o.r(t);var a=o(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"google-dialogflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-dialogflow"}},[e._v("#")]),e._v(" Google Dialogflow")]),e._v(" "),a("p",[e._v("Dialogflow is a natural language understanding platform that makes it easy to design and integrate a conversational user interface into your mobile app, web application, device, bot, interactive voice response system, and so on. Using Dialogflow, you can provide new and engaging ways for users to interact with Workbot.")]),e._v(" "),a("p",[e._v("When Workbot is connected with Dialogflow, all commands sent to Workbot will be processed by your connected Dialogflow bot's NLP (instead of Workbot's default NLP).")]),e._v(" "),a("h2",{attrs:{id:"api-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-version"}},[e._v("#")]),e._v(" API version")]),e._v(" "),a("p",[e._v("The Dialogflow connector uses "),a("a",{attrs:{href:"https://cloud.google.com/dialogflow/docs/reference/rest/v2-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dialogflow API v2"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"workbot-support-for-dialogflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workbot-support-for-dialogflow"}},[e._v("#")]),e._v(" Workbot support for Dialogflow")]),e._v(" "),a("p",[e._v("Currently, Workbot for Slack supports the use of Dialogflow on Workato.")]),e._v(" "),a("h2",{attrs:{id:"how-to-connect-dialogflow-on-workato"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-connect-dialogflow-on-workato"}},[e._v("#")]),e._v(" How to connect Dialogflow on Workato")]),e._v(" "),a("p",[e._v("The Dialogflow connector makes use of the "),a("strong",[e._v("Client access token")]),e._v(", obtained from the "),a("code",[e._v("client email")]),e._v(" and "),a("code",[e._v("private_key")]),e._v(" of the "),a("a",{attrs:{href:"https://cloud.google.com/iam/docs/understanding-service-accounts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud Platform Service Account"),a("OutboundLink")],1),e._v(" that your Dialogflow agent is associated with.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(249),alt:"Dialogflow connector",width:"3506",height:"1396"}})],1),e._v(" "),a("p",[e._v("In order to use the V2 API, you will need to create a new Service Account for your agent, and obtain its key. The key can be downloaded as a JSON file once you create the new Service Account. This JSON file contains both the "),a("code",[e._v("client email")]),e._v(" and "),a("code",[e._v("private_key")]),e._v(", which are needed to connect to Dialogflow.")]),e._v(" "),a("p",[e._v("Workato uses the provided "),a("code",[e._v("client email")]),e._v(" and "),a("code",[e._v("private_key")]),e._v(" to exchange a client access token for use by the Dialogflow connector.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("This document assumes that you already have a project and Dialogflow agent. To create a new one, check out "),a("a",{attrs:{href:"https://developers.google.com/actions/dialogflow/project-agent",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dialogflow's guide on creating a new project and Dialogflow agent"),a("OutboundLink")],1),e._v(".")])])]),e._v(" "),a("h3",{attrs:{id:"creating-a-service-account-and-getting-the-client-access-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-service-account-and-getting-the-client-access-token"}},[e._v("#")]),e._v(" Creating a Service Account and getting the Client Access Token")]),e._v(" "),a("p",[e._v("In order to use the V2 API, you will first need to create a new Service Account and obtain a private key associated with that Service Account. The key can be downloaded as a JSON file once you create the new Service Account.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Caution: Your project will have an existing service account, but this should not be altered. For additional client and developer API access, you should create a new service account.")])])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("From your Dialogflow console, head to your agent's settings by clicking on the gear icon of your agent, to the right of the agent name.\n"),a("DocImage",{attrs:{src:o(481),alt:"Dialogflow agent settings",width:"3428",height:"1412"}}),e._v(" "),a("em",[e._v("Dialogflow agent settings")])],1),e._v(" "),a("p",[e._v("If you wish to use another project, you’d need to create a new agent. You can easily do so from any existing project by going to the ‘Export and Import’ tab and clicking the ‘EXPORT AS ZIP’ button.")])]),e._v(" "),a("li",[a("p",[e._v("Under the "),a("strong",[e._v("GOOGLE PROJECT")]),e._v(" section, click on the name of the "),a("strong",[e._v("Service Account")]),e._v(".\n"),a("DocImage",{attrs:{src:o(482),alt:"Google Service Account",width:"682",height:"144"}}),e._v(" "),a("em",[e._v("Getting to the Google Cloud Platform Service Accounts page")]),e._v("\nThis will take you to the Google Cloud Platform Service Accounts page.")],1)]),e._v(" "),a("li",[a("p",[e._v("Click on the "),a("strong",[e._v("Create Service Account")]),e._v(" button at the top of the page.\n"),a("DocImage",{attrs:{src:o(483),alt:"Create new service account",width:"3732",height:"1334"}})],1)]),e._v(" "),a("li",[a("p",[e._v("In the pop up, enter your preferred details for this service account, then click "),a("strong",[e._v("Create")]),e._v(".\n"),a("DocImage",{attrs:{src:o(484),alt:"Create new service account",width:"3498",height:"1334"}}),e._v(" "),a("em",[e._v("Creating a service account for your agent")])],1)]),e._v(" "),a("li",[a("p",[e._v("Next, you'll need to grant this service account access to your agent so it has permissions to operate optimally. Under the Dialogflow category, filter by 'dialogflow' and select from any of the following roles.")])])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Role name")]),e._v(" "),a("th",[e._v("Access Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Dialogflow API Admin")]),e._v(" "),a("td",[e._v("Full API access")])]),e._v(" "),a("tr",[a("td",[e._v("Dialogflow API Client")]),e._v(" "),a("td",[e._v("Session-level API access")])]),e._v(" "),a("tr",[a("td",[e._v("Dialogflow API Reader")]),e._v(" "),a("td",[e._v("Read-only API access")])])])]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(485),alt:"Service account role",width:"3498",height:"1334"}}),e._v(" "),a("em",[e._v("Service account roles")])],1),e._v(" "),a("p",[e._v("Once done, click on "),a("strong",[e._v("Continue")]),e._v(".")]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[e._v("Create a key for this service account by clicking on the "),a("strong",[e._v("Create key")]),e._v(" button.\n"),a("DocImage",{attrs:{src:o(486),alt:"Create service account 1",width:"3080",height:"1334"}}),e._v(" "),a("em",[e._v("Begin creating a key")])],1)]),e._v(" "),a("li",[a("p",[e._v("Choose "),a("strong",[e._v("JSON")]),e._v(" as the "),a("strong",[e._v("Key")]),e._v(" type, then click the "),a("strong",[e._v("Create")]),e._v(" button.\n"),a("DocImage",{attrs:{src:o(487),alt:"Create service account 2",width:"3080",height:"1334"}}),e._v(" "),a("em",[e._v("Choose JSON key type")])],1)]),e._v(" "),a("li",[a("p",[e._v("When the key is created, a download of the JSON file will start. Choose a location (remember the path to this location, you'll need it later!) to save it and confirm.")])])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Caution: You can only download this JSON file once, so make sure to save the file and keep it somewhere safe. If you lose this key or it becomes compromised, you can use the same process to create another.")])])]),e._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[a("p",[e._v("Once complete, you'll see a pop up with a confirmation message. Click "),a("strong",[e._v("Close")]),e._v(".\n"),a("DocImage",{attrs:{src:o(488),alt:"Create service account 3",width:"3080",height:"1334"}})],1)]),e._v(" "),a("li",[a("p",[e._v("Set up the Google Cloud SDK on your machine if you don't have it already. Follow the steps described here: "),a("a",{attrs:{href:"https://cloud.google.com/sdk/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cloud.google.com/sdk/docs/"),a("OutboundLink")],1),e._v(" (don't worry, it's quick and easy)")])]),e._v(" "),a("li",[a("p",[e._v("After the Google Cloud SDK is up and running, execute the following command in terminal (replacing "),a("code",[e._v("<service-account-key-file.json>")]),e._v(" with the path to the JSON file you downloaded in step 8):")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gcloud auth activate-service-account --key-file=<service-account-key-file.json>\n")])])]),a("ol",{attrs:{start:"12"}},[a("li",[e._v("Next, obtain the Client Access Token by executing the following command in terminal:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gcloud auth print-access-token\n")])])]),a("ol",{attrs:{start:"13"}},[a("li",[e._v("Use the Client Access token in your Dialogflow connection in Workato.\n"),a("DocImage",{attrs:{src:o(249),alt:"Dialogflow connector",width:"3506",height:"1396"}})],1)])])}),[],!1,null,null,null);t.default=n.exports},249:function(e,t,o){e.exports=o.p+"assets/img/dialogflow-connector.768ed06f.png"},481:function(e,t,o){e.exports=o.p+"assets/img/dialogflow-agent-settings.f5281d9e.png"},482:function(e,t){e.exports="data:image/png;base64,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"},483:function(e,t,o){e.exports=o.p+"assets/img/create-new-service-account.86520b7e.png"},484:function(e,t,o){e.exports=o.p+"assets/img/service-account-details.649bb446.png"},485:function(e,t,o){e.exports=o.p+"assets/img/service-account-roles.7042b62c.png"},486:function(e,t,o){e.exports=o.p+"assets/img/create-key-1.ebf76a53.png"},487:function(e,t,o){e.exports=o.p+"assets/img/create-key-2.4ad9654d.png"},488:function(e,t,o){e.exports=o.p+"assets/img/create-key-3.c95d5c90.png"}}]);