(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{191:function(t,e,s){t.exports=s.p+"assets/img/dynamic-buttons.fa3c87dc.png"},192:function(t,e,s){t.exports=s.p+"assets/img/list-datapill.a9a2a58a.png"},1928:function(t,e,s){t.exports=s.p+"assets/img/message-recipient.2b203172.png"},1929:function(t,e,s){t.exports=s.p+"assets/img/original-message-id.097471da.png"},193:function(t,e,s){t.exports=s.p+"assets/img/dynamic-button-title.3410396b.png"},1930:function(t,e,s){t.exports=s.p+"assets/img/message-to-update.e913e889.png"},1931:function(t,e,s){t.exports=s.p+"assets/img/post-reply-fields.3862138d.png"},195:function(t,e,s){t.exports=s.p+"assets/img/post-reply-recipe.ec730e13.png"},197:function(t,e,s){t.exports=s.p+"assets/img/post-reply.d4709840.png"},2696:function(t,e,s){"use strict";s.r(e);var a=s(0),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"workato-actions-for-ms-teams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workato-actions-for-ms-teams"}},[t._v("#")]),t._v(" Workato actions for MS Teams")]),t._v(" "),a("p",[t._v("Workbot actions allow you to post messages & replies to users or channels as Workbot.")]),t._v(" "),a("p",[t._v("Additionally, Workbot also includes custom actions. This action allows you to utilize "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft Graph APIs (v1.0)"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Workbot supports 3 actions:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#post-reply"}},[t._v("Post reply")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#post-message"}},[t._v("Post message")])]),t._v(" "),a("li",[t._v("Custom action")])]),t._v(" "),a("h2",{attrs:{id:"post-reply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-reply"}},[t._v("#")]),t._v(" Post reply")]),t._v(" "),a("p",[t._v("Post reply allows you to post a message back to a user when a Workbot command is invoked. Replies are posted directly to the user or in-channel, depending on where the command was invoked.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(197),alt:"Post reply",width:"1816",height:"1143"}}),t._v(" "),a("em",[t._v("Example of a post reply listing open opportunities from Salesforce")])],1),t._v(" "),a("p",[t._v("This reply can be a simple text message about a task's completion, or more advanced like prompting users on subsequent actions.")]),t._v(" "),a("p",[t._v("You can optionally include 1 fact set (a set of name-value pairs), 1 pick list, buttons and images.")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Post reply must always be paired with a Workbot command")])])]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(195),alt:"Post reply recipe",width:"3840",height:"712"}}),t._v(" "),a("em",[t._v("Recipe perspective of the post reply example above")])],1),t._v(" "),a("h2",{attrs:{id:"post-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-message"}},[t._v("#")]),t._v(" Post message")]),t._v(" "),a("p",[t._v("The post message actions allows you to post a message to a user or a channel. It is similar to "),a("strong",[t._v("Post reply")]),t._v(", but with an additional field called "),a("strong",[t._v("Message recipient")]),t._v(". This field allows you to specify where to post the message (direct to user, or to channel).")]),t._v(" "),a("p",[t._v("Use post message if you:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Are using Workbot to post event notifications from another application, e.g. New/updated incident in ServiceNow. Since the trigger is not a Workbot command, "),a("strong",[t._v("Post message")]),t._v(" must be used so you can specify the 'Message recipient' for the event.")])]),t._v(" "),a("li",[a("p",[t._v("Want control over where Workbot should post the message, instead of sending it where the Workbot command was invoked (which is what "),a("strong",[t._v("Post reply")]),t._v(" does automatically)")])]),t._v(" "),a("li",[a("p",[t._v("Want to use advanced features like updating a previous message.")])])]),t._v(" "),a("h3",{attrs:{id:"message-recipient"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-recipient"}},[t._v("#")]),t._v(" Message recipient")]),t._v(" "),a("p",[a("strong",[t._v("Message recipient")]),t._v(" allows you post a message to directly to a user or to a channel you specify. Use the "),a("kbd",[t._v("ID")]),t._v(" datapill (under "),a("strong",[t._v("Conversation")]),t._v(') from the output of a Workbot command. To pick a member or channel instead, toggle to "Select from list".')]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(1928),alt:"Message recipient",width:"3840",height:"720"}}),t._v(" "),a("em",[t._v("Message recipient example")])],1),t._v(" "),a("h2",{attrs:{id:"advanced-section"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-section"}},[t._v("#")]),t._v(" Advanced section")]),t._v(" "),a("p",[t._v("The advanced section has 2 fields: "),a("strong",[t._v("Post as raw JSON")]),t._v(" and "),a("strong",[t._v("Message to update")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"post-as-raw-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-as-raw-json"}},[t._v("#")]),t._v(" Post as raw JSON")]),t._v(" "),a("p",[t._v("This field is for advanced users who want to fully customize the message formatting. When set to "),a("strong",[t._v("Yes")]),t._v(", all other fields will be hidden. Should include "),a("code",[t._v('"type": "message"')]),t._v(", followed by "),a("code",[t._v('"attachments"')]),t._v(", e.g.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attachments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contentType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/vnd.microsoft.card.adaptive"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AdaptiveCard"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"body"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TextBlock"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"size"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"large"')]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("For more details, refer to "),a("a",{attrs:{href:"https://adaptivecards.io/designer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft's Adaptive Card Designer"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"message-to-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-to-update"}},[t._v("#")]),t._v(" Message to update")]),t._v(" "),a("p",[a("strong",[t._v("Message to update")]),t._v(" allows you to overwrite a previously posted message from an earlier action step. Simply use the "),a("kbd",[t._v("Original message ID")]),t._v(" datapill (from the output of a Workbot command), or the "),a("kbd",[t._v("ID")]),t._v(" datapill (from the output of a "),a("strong",[t._v("Post message")]),t._v(" or "),a("strong",[t._v("Post reply")]),t._v(" action).")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(1929),alt:"Original message ID",width:"3128",height:"1016"}}),t._v(" "),a("em",[t._v("Original message ID")])],1),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(1930),alt:"Message to update example",width:"3840",height:"293"}}),t._v(" "),a("em",[t._v("Message to update")])],1),t._v(" "),a("h2",{attrs:{id:"input-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(1931),alt:"Post reply fields",width:"3840",height:"2091"}}),t._v(" "),a("em",[t._v("Post reply & Post message follow the same message structure")])],1),t._v(" "),a("p",[t._v("Both post reply and post message actions follow a fixed structure, with a preceding "),a("strong",[t._v("Envelope text")]),t._v(" and "),a("strong",[t._v("Message container")]),t._v(". Text input fields support markdown syntax.")]),t._v(" "),a("p",[t._v("The table below lists the input fields in the post reply action.")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",[t._v("Group")]),t._v(" "),a("th",[t._v("Input")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td"),t._v(" "),a("td",[t._v("Envelope text*")]),t._v(" "),a("td",[t._v("\n                First message, preceding any text, images, or other elements in the message container. Support markdown.\n            ")])]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"4"}},[t._v("Heading*")]),t._v(" "),a("td",[t._v("Heading")]),t._v(" "),a("td",[t._v("Heading text.")])]),t._v(" "),a("tr",[a("td",[t._v("Subheading*")]),t._v(" "),a("td",[t._v("Subheading text. Supports markdown.")])]),t._v(" "),a("tr",[a("td",[t._v("Link text*")]),t._v(" "),a("td",[t._v("\n                Use markdown to add text links, e.g. "),a("code",[t._v("[Salesforce](https://www.salesforce.com/)")]),t._v(".\n            ")])]),t._v(" "),a("tr",[a("td",[t._v("Heading thumbnail")]),t._v(" "),a("td",[t._v("\n                Provide image URL of thumbnail. Displays to the left of heading text.\n            ")])]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"2"}},[t._v("Body*")]),t._v(" "),a("td",[t._v("Body text")]),t._v(" "),a("td",[t._v("\n                Main body text of message. Supports markdown.\n            ")])]),t._v(" "),a("tr",[a("td",[t._v("Image")]),t._v(" "),a("td",[t._v("\n                Provide image URL. Displays below body text.\n            ")])]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"2"}},[t._v("Fact set")]),t._v(" "),a("td",[t._v("Text*")]),t._v(" "),a("td",[t._v("Title of fact.")])]),t._v(" "),a("tr",[a("td",[t._v("Value*")]),t._v(" "),a("td",[t._v("Value of fact.")])]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"5"}},[t._v("Pick list")]),t._v(" "),a("td",[t._v("Pick list name*")]),t._v(" "),a("td",[t._v("\n                Name of picklist. Displays before choices.\n            ")])]),t._v(" "),a("tr",[a("td",[t._v("Pick list style")]),t._v(" "),a("td",[t._v("\n                Compact displays choices in a drop-down menu, while Expanded displays all choices with radio buttons.\n            ")])]),t._v(" "),a("tr",[a("td",[t._v("Choice parameter")]),t._v(" "),a("td",[t._v("\n                Parameter name to store the choice value. This is a required field when "),a("a",{attrs:{href:"https://docs.workato.com/workbot-for-teams/passing-parameters.html"}},[t._v("passing parameters")]),t._v(" to another recipe, otherwise the value will not be passed.\n            ")])]),t._v(" "),a("tr",[a("td",[t._v("Title")]),t._v(" "),a("td",[t._v("Text to display for choice. Cannot contain "),a("code",[t._v(":")]),t._v(" or "),a("code",[t._v(",")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("Value")]),t._v(" "),a("td",[t._v("\n                Value to pass to "),a("b",[t._v("Choice parameter")]),t._v(" if chosen. Cannot contain "),a("code",[t._v(":")]),t._v(" or "),a("code",[t._v(",")]),t._v(".\n            ")])]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"4"}},[t._v("Buttons")]),t._v(" "),a("td",[t._v("Prompt text for buttons*")]),t._v(" "),a("td",[t._v("\n                Prompt that displays before buttons. Useful in providing context for the buttons that follow.\n            ")])]),t._v(" "),a("tr",[a("td",[t._v("Button text")]),t._v(" "),a("td",[t._v("\n                Text to be displayed on the button."),a("br"),a("br"),a("img",{attrs:{src:s(32)}}),a("br"),a("br")])]),t._v(" "),a("tr",[a("td",[t._v("Submit button command")]),t._v(" "),a("td",[t._v("\n                Workbot command to execute when button is clicked, e.g. "),a("code",[t._v("create_ticket")]),t._v(". Only after "),a("a",{attrs:{href:"https://docs.workato.com/workbot-for-teams/workbot-triggers.html#configuring-the-command"}},[t._v("configuring the command")]),t._v(" in a Workbot for MS Teams trigger block can that command be visible in the dropdown list.\n            ")])]),t._v(" "),a("tr",[a("td",[t._v("Additional parameters")]),t._v(" "),a("td",[t._v("\n                Parameter values to be passed onto the next recipe when button is clicked, e.g. "),a("br"),a("br"),a("pre",[t._v("{"),a("br"),t._v('  "sys_id": "'),a("kbd",[t._v("sys_id")]),t._v('"'),a("br"),t._v('  "summary": "'),a("kbd",[t._v("Summary")]),t._v('",'),a("br"),t._v('  "description": "'),a("kbd",[t._v("Description")]),t._v('"'),a("br"),t._v("}")]),t._v("\n                Datapills need to be wrapped in double quotes and parameter names must be in all lowercase. Parameters can be user-specified, like the urgency of an issue in ServiceNow, or recipe information, like the Message ID of a previous MS Teams message.\n            ")])]),t._v(" "),a("tr",[a("td",{attrs:{rowspan:"2"}},[t._v("Advanced")]),t._v(" "),a("td",[t._v("Post as raw JSON")]),t._v(" "),a("td",[t._v("\n                For advanced users to fully customize the message formatting.\n            ")])]),t._v(" "),a("tr",[a("td",[t._v("Message to update")]),t._v(" "),a("td",[t._v("\n                Use message ID from the output of a post reply or post message action to update that message with this one.\n            ")])])])]),t._v("\n*Supports markdown\n"),a("h2",{attrs:{id:"using-dynamic-lists-in-action-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-dynamic-lists-in-action-fields"}},[t._v("#")]),t._v(" Using dynamic lists in action fields")]),t._v(" "),a("p",[t._v("Fact sets, pick lists and buttons can be generated dynamically using a list datapill (for more information on lists, see the "),a("router-link",{attrs:{to:"/features/list-management.html"}},[t._v("list management guide")]),t._v(")")],1),t._v(" "),a("p",[t._v("From the fields, click on the horizontal ellipses on the top-right and choose 'Dynamic list'. This should bring up the dynamic list option.")]),t._v(" "),a("p",[a("DocImage",{attrs:{src:s(191),alt:"Dynamic buttons",width:"3840",height:"1495"}})],1),t._v(" "),a("p",[t._v("The following table shows what goes into the dynamic buttons fields:")]),t._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",[t._v("Input field")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Buttons source list")]),t._v(" "),a("td",[t._v("\n            List datapills have a list icon next to them in the datatree, e.g. Salesforce users:"),a("br"),t._v(" "),a("img",{attrs:{src:s(192)}})])]),t._v(" "),a("tr",[a("td",[t._v("Button text")]),t._v(" "),a("td",[t._v("\n            The title of the button to be displayed. Typically, you want to use datapills from the list datapill, e.g. Salesforce user name, a datapill from the Salesforce users list:\n            "),a("img",{attrs:{src:s(193)}})])]),t._v(" "),a("tr",[a("td",[t._v("Submit button command")]),t._v(" "),a("td",[t._v("\n            Choose from a list of existing Workbot command recipes or key in a new command. Clicking on this button will trigger the recipe with the corresponding command trigger.\n          ")])]),t._v(" "),a("tr",[a("td",[t._v("Additional parameters")]),t._v(" "),a("td",[t._v("\n            Key in name-value pairs to pass onto the next recipe as additional parameters. Format should be JSON with name-value pairs, e.g."),a("br"),a("br"),a("pre",[t._v("{"),a("br"),t._v('  "opportunity_id": "'),a("kbd",[t._v("Opportunity ID")]),t._v('",'),a("br"),t._v('  "stage": "'),a("kbd",[t._v("Stage")]),t._v('"'),a("br"),t._v("}")]),t._v("\n            Datapills need to be wrapped in double quotes and parameter names must be in all lowercase. Parameters can be user-specified, like the urgency of an issue in ServiceNow, or recipe information, like the Message ID of a previous MS Teams message.\n          ")])])])]),t._v(" "),a("h1",{attrs:{id:"learn-more"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#learn-more"}},[t._v("#")]),t._v(" Learn more")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/workbot-for-teams/using-workbot-for-teams.html"}},[t._v("Using Workbot for MS Teams")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/workbot-for-teams/workbot-triggers.html"}},[t._v("Workbot triggers")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/workbot-for-teams/passing-parameters.html"}},[t._v("Passing parameters")])],1)])])}),[],!1,null,null,null);e.default=o.exports},32:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAAA5CAMAAADz9Ww3AAABFFBMVEUAAABbW1ttbW1SUlJSUlJTU1NYWFhSUlJSUlJTU1NSUlJTU1NTU1NTU1NUVFRUVFRTU1NTU1NSUlJTU1NUVFRZWVlfX19TU1NbW1tSUlJSUlJTU1NSUlJTU1NTU1NxcXFSUlJTU1NSUlJSUlJTU1NVVVVSUlJSUlJTU1NWVlZTU1NSUlJUVFTBwt3Aw91UVFTIyORSUlJTU1NTU1NTU1PBw93////Awtz9/f5SUlL6+vzS0+a+v9vp6fOPkcGKi76DhLp+gLdnaarx8fjLy+JzdLG6utijpMxucK7i4u/HyODExd+gocqbnMdiZKff4O7Z2eqoqc719fq2t9eur9KVlsTk5fB3ebN2eLPU1eiztNXQ0eVkH1UZAAAANnRSTlMACwTBx20W7eh7XLasd0VKcmlgVzwcB4UR++Kh2rKUAppR07wnIPLLry32pzTmpkEcro1laO1FRqvrAAAEhElEQVRo3uyT2aqbUABF11GPGjVqo3GeU9NmgNDkvuT/f6xVMCKU0IKFFrpelM1m63LgP//5VwhPAFcdULxEhvwGV58R/8oboirBu/Ir0+6DiX7XKqzEvQPE+Q54Z6F+Wlwy4C07jZEvFm8Qzz1FzjT9bn1bvh59UanaWpLhs4fAzICmZHkj8WYtxySap+f1N451hGKeWIfalPBVGiFkO1Qpc1lD0DQnXM32T8CHCzcJfQxu1XjgPUCvRkexuTxGR1HpEN31RWVyfLiDY725Efl5nACM6/Rx7keMBHkcl8zJ/qizEo2NOOtNxTXVUTNpZZLA8WJD3L44u8+APIBtCLYXPopAZj4bBz4/R0dVbf2zBWDHEHxZVibHr9vBsXEU1MvN7xRgXO+NbXvQagCZybYoeSWnYsdaeKmwDrhZvVFBlRB/BaiNkG8bBvapSLJvLVqL6YF1rGfH8KlP36pnRqjWorJ0jO0I1xR1rYbAuF7lIFIPwPwE23JOtIDViI6t/YFihJrP+NPIA1zj/OhNjmjtrrJy/SiS5x72z/3s+OiYHOmskxktKgvHLD2BNO0fvBwPPqD5QPL8PDjOSZWwHs7lrENzefYvx9i+6cXsuM3LUJgPByV1IXyKbTk5BrMjH1+qeFlZvkfZCdqOgcnRaQDTApT0NDpOybpY6QFw046XY+HSGx75XVEA+qyAsgjAcfTkYhMYCZvRsU9DwqPFgDAMfVlZOpI7JGaL0kbAuB6Y13p31AG0O4lWMiXKVmc9kvQDUIx4dvTNQ2N73MzMZaC7g5UK0L8ahq2j2Ofu03lwRB6L6mIx0lxgWVk6RtqWsMvMXACM6xvDKFwGToWpypIp6dOWP4sQDCgRC+ZIzIHyOsuuy8rPEco8taiJxVHwN/KdPTg2AQCEoSiYQlzAFWwTfiPZfzOXEAPh3a1h7e1pAAAAwGMKzwIesl90sshtz9x2FYXBKOwL7X03i6YFhEI5lbMIqO//HlMsREZNZq60s+W7gaxVLr7wk5D218skvy1G8QYos753L+LLongL1PravQjLwpuwrN1zNsfNcXP8Gz/SMWBZj39EptDU9n/kSDruuYnb4pEuwAoaAxANNPYeK06h0Y5nkQIkwxN8Byt6fxLFU8fubLJjy8N5+MJT0YPlcQX0TZGBWLyLiE4UTiwiRQ+wOK6vjiyCrk+eG/XmOtYlnV+M7x4C2w/ZkLaelMkFsjxIopOr4yilHDPYQ8hiohzZ4EDXtXeUjrmOIV+GT1AgYUDUQJE3IKWzTkIfgJepRM9qPd7q48HkWU3L4PaBBaWrOCCIYj+fHJdk5djqB2yedFhqwx2p6G6OhDtQVEPmNNpxTlaOhPd6uZPUS224I0J+Dki1dyZHFAVB5XTKz80BXtE5gYKNoMoRxwK4ELX8IoKlzhtCDHZE7XHuS1wd26MYvTQVe1d5okl8qhMoqJ/Ek2OwF0NBp+Vnj8x1nYiTyY4AoXf3pJ0H+c+WLlfy8DAhJs/qAz/yf/WOzXFz3Bzv2Ry3vceP3UP+hLOADzjT+Q2PfWxwV2ipigAAAABJRU5ErkJggg=="}}]);