(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{2029:function(t,e,a){t.exports=a.p+"assets/img/anatomy-of-a-command-1.c3404145.gif"},2030:function(t,e,a){t.exports=a.p+"assets/img/creating-a-command-1.3f9515b7.png"},2031:function(t,e,a){t.exports=a.p+"assets/img/command-input-fields-1.624b8f95.png"},2032:function(t,e,a){t.exports=a.p+"assets/img/add-new-command-input-field-1.b19adaf1.png"},2033:function(t,e,a){t.exports=a.p+"assets/img/defining-the-command-1.ec5ce562.png"},2034:function(t,e,a){t.exports=a.p+"assets/img/commands-on-slack-1.293bec7a.png"},2035:function(t,e,a){t.exports=a.p+"assets/img/command-datapills-1.52c6de86.png"},2714:function(t,e,a){"use strict";a.r(e);var o=a(0),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"creating-a-command"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-command"}},[t._v("#")]),t._v(" Creating a Command")]),t._v(" "),o("p",[t._v("Did you know that you can command Workbot to do things for you from Slack? Workbot has been helping our users perform all kinds of tasks like:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.workato.com/recipes/57785-workbot-command-to-add-subscriber-to-list-in-mailchimp#recipe",target:"_blank",rel:"noopener noreferrer"}},[t._v("Adding subscribers to a list in Mailchimp"),o("OutboundLink")],1),t._v(" by telling Workbot: “"),o("strong",[t._v("Mailchimp add subscriber")]),t._v("”")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://www.workato.com/recipes/146385-incident-report-pie-chart-in-servicenow#recipe",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting a breakdown of incident reports from ServiceNow via a pie chart"),o("OutboundLink")],1),t._v(" (in Slack!) by telling Workbot: “"),o("strong",[t._v("ServiceNow report incident")]),t._v("”")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://www.workato.com/recipes/663926-create-an-issue-on-github-from-slack-using-workbot#recipe",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating an issue in Github"),o("OutboundLink")],1),t._v(' by telling Workbot to "'),o("strong",[t._v("Create a Github issue")]),t._v("”")])]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(2029),alt:"Workbot Command trigger diagram",width:"712",height:"408"}}),t._v(" "),o("em",[t._v("Anatomy of a Command trigger")])],1),t._v(" "),o("p",[t._v("A command consists of 3 parts; "),o("code",[t._v("app")]),t._v(", "),o("code",[t._v("action")]),t._v(", "),o("code",[t._v("action data")]),t._v(" - and can be used to trigger recipes. You can also prompt users for more info if they’re required to perform the recipe actions via "),o("strong",[t._v("Command input fields")]),t._v(".")]),t._v(" "),o("p",[t._v("You can find the list of all the input fields for Command below, but for now, let’s focus on "),o("strong",[t._v("App")]),t._v(", "),o("strong",[t._v("Action")]),t._v(", "),o("strong",[t._v("Action data")]),t._v(" and "),o("strong",[t._v("Command input fields")]),t._v(" so we can "),o("router-link",{attrs:{to:"/workbot/workbot-commands.html#creating-a-command"}},[t._v("create our very first command")]),t._v(".")],1),t._v(" "),o("table",{staticClass:"unchanged rich-diff-level-one"},[o("thead",[o("tr",[o("th",[t._v("New command trigger input field")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("App")]),t._v(" "),o("td",[t._v("\n               This is the 1st part of the command; it defines which application this command relates to, e.g."),o("br"),t._v("Github, ServiceNow, etc.\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("Action")]),t._v(" "),o("td",[t._v("\n              This is the 2nd part of the command; it defines what action to perform onto the "),o("b",[t._v("App data")]),t._v(", e.g."),o("br"),t._v("Create, Show, List, etc.\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("Action data")]),t._v(" "),o("td",[t._v("\n              The 3rd and last part of the command; it defines what sort of data to act on e.g. "),o("br"),t._v("Opportunity, Issue, Invoice, etc.\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("Command input fields")]),t._v(" "),o("td",[t._v("\n              The data to ask from the user so as to successfully carry out recipe actions, defined in a specific format. Parameters may have the type:"),o("code",[t._v("file")]),t._v(", which takes file content as input (e.g. text or binary content) that you may upload into Slack. "),o("br"),t._v("You can use this file in subsequent operations using the Workbot action "),o("a",{attrs:{href:"/workbot/workbot-actions.html"}},[t._v("Download Attachment.")])])]),t._v(" "),o("tr",[o("td",[t._v("Help text")]),t._v(" "),o("td",[t._v("\n            Short description of what the command does. Shows up in the Workbot app page under "),o("b",[t._v("Commands")]),t._v(".\n            ")])]),t._v(" "),o("tr",[o("td",[t._v("Hidden command")]),t._v(" "),o("td",[t._v("\n              If "),o("b",[t._v("yes")]),t._v(", command will not show up as a button in the Slack channel when the user types app name. "),o("br"),t._v("If "),o("b",[t._v("no")]),t._v(", command will show up as a button in the Slack channel when the user types the app name.\n            ")])])])]),t._v(" "),o("h3",{attrs:{id:"creating-a-command-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-command-2"}},[t._v("#")]),t._v(" Creating a Command")]),t._v(" "),o("h4",{attrs:{id:"getting-started"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),o("p",[t._v("In this exercise, we'll be creating a command that triggers a recipe that creates an issue in Github.")]),t._v(" "),o("h4",{attrs:{id:"creating-a-command-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-command-3"}},[t._v("#")]),t._v(" Creating a command")]),t._v(" "),o("ol",[o("li",[t._v("Create a new recipe")]),t._v(" "),o("li",[t._v("Under Application, choose Workbot. This allows you to choose Workbox-related triggers.")]),t._v(" "),o("li",[t._v("Under Trigger, choose New Command")])]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(2030),alt:"Creating a Command",width:"994",height:"816"}}),t._v(" "),o("em",[t._v("Creating a new Command")])],1),t._v(" "),o("h4",{attrs:{id:"defining-the-command"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#defining-the-command"}},[t._v("#")]),t._v(" Defining the command")]),t._v(" "),o("p",[t._v("Workbot understands commands in 3 parts: "),o("code",[t._v("app")]),t._v(" "),o("code",[t._v("action")]),t._v(" "),o("code",[t._v("action-data")]),t._v(".")]),t._v(" "),o("p",[t._v("We’ll be creating a command that tells Workbot to "),o("strong",[t._v("Create a Github issue")]),t._v('”. Because Workbot has built-in Natural Language Understanding (NLU) capabilities, Workbot is flexible with how the command is phrased. You have the freedom to type in the commands in any sequence that\'s most natural to you, e.g. "create an issue in Github"')]),t._v(" "),o("ol",[o("li",[o("code",[t._v("app")]),t._v(": This is the 1st word of the phrase; it defines which application this command relates to. In this case, “Github” is the application we want.")]),t._v(" "),o("li",[o("code",[t._v("action")]),t._v(": This is the 2nd part of the command; it defines what action to perform onto the "),o("code",[t._v("action data")]),t._v(". “Create” is what we’ll go with here.")]),t._v(" "),o("li",[o("code",[t._v("action data")]),t._v(": The 3rd part of the command; it defines what sort of data to act on e.g. Opportunity, Issue, Invoice, etc. Let’s go with “issue” here.")])]),t._v(" "),o("h4",{attrs:{id:"command-input-fields"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#command-input-fields"}},[t._v("#")]),t._v(" Command input fields")]),t._v(" "),o("p",[t._v("Sometimes, Workbot needs more input from the user before it can trigger the recipe and carry out its actions. Command input fields let you define each input, along with how they should behave in Slack. Click on "),o("strong",[t._v("+ Add command input")]),t._v(" to add command input fields.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(2031),alt:"Command input fields",width:"974",height:"392"}}),t._v(" "),o("em",[t._v("Add command input fields")])],1),t._v(" "),o("p",[t._v('In this case, Workbot will need 3 things from the user before he can create an issue in Github: the issue "title", the “description” of the issue, and the “assignee” to assign the issue to. Hence, '),o("code",[t._v("title")]),t._v(", "),o("code",[t._v("description")]),t._v(" and "),o("code",[t._v("assignee")]),t._v(" are the 3 command input fields we’ll define. Since only "),o("code",[t._v("name")]),t._v(" is required here, we’ll skip configuring the others for now.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(2032),alt:"Adding a new command input field",width:"1082",height:"1334"}}),t._v(" "),o("em",[t._v("Adding a new user input field")])],1),t._v(" "),o("p",[t._v("How your command should look like at this point:\n"),o("DocImage",{attrs:{src:a(2033),alt:"Defining the command",width:"992",height:"1032"}}),t._v(" "),o("i",[o("strong",[t._v("Github Create Issue recipe")]),t._v(": Command section")])],1),t._v(" "),o("p",[t._v("How it will look like on Slack:")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(2034),alt:"Commands on Slack",width:"1840",height:"1197"}}),t._v(" "),o("em",[t._v("Before Workbot can create the issue on Github, we’ll need to define follow-up recipe actions. Also, notice the final message Workbot sent? That’s a "),o("router-link",{attrs:{to:"/workbot/workbot-command-reply.html"}},[t._v("command reply")]),t._v(" - we’ll go through that later!")],1)],1),t._v(" "),o("h3",{attrs:{id:"command-output-datapills"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#command-output-datapills"}},[t._v("#")]),t._v(" Command output datapills")]),t._v(" "),o("p",[t._v("Command will also provide you with a set of datapills that hold additional info about the command e.g. the user making the command, the channel which the command was made it, etc. The following table details these datapill variables:\n"),o("DocImage",{attrs:{src:a(2035),alt:"Command datapills",width:"382",height:"849"}}),t._v(" "),o("em",[t._v("Command output datatree. Notice the command input parameters we included in the earlier step? They’re datapills too!")])],1),t._v(" "),o("p",[t._v("And with that, we're done configuring the command! Now it’s time to add a series of actions to this trigger. Remember, we’re trying to get Workbot to create an issue in Github from Slack (link to the top), so we still need to create action steps in the recipe to do that. Next, we'll take a look at "),o("router-link",{attrs:{to:"/workbot/workbot-command-reply.html"}},[t._v("how to create a Command Reply")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);