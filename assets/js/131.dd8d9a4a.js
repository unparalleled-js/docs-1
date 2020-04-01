(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{1686:function(t,e,a){t.exports=a.p+"assets/img/action_1.0c333a11.png"},1687:function(t,e,a){t.exports=a.p+"assets/img/action_2.c07bb9c7.png"},1688:function(t,e,a){t.exports=a.p+"assets/img/action_3.e04a3c49.png"},1689:function(t,e,a){t.exports=a.p+"assets/img/action_4.9a7a1475.png"},1690:function(t,e,a){t.exports=a.p+"assets/img/action_5.ee0fabf4.png"},1691:function(t,e,a){t.exports=a.p+"assets/img/action_6.75c19491.png"},2643:function(t,e,a){"use strict";a.r(e);var o=a(0),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"actions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#actions"}},[t._v("#")]),t._v(" Actions")]),t._v(" "),o("p",[t._v("Every connector makes available a set of actions. Apart from connectors, Workato makes several utility actions available (e.g. create pie chart, get file from URL, etc.).")]),t._v(" "),o("p",[t._v("Actions can be grouped into the following types")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("Create,\nUpdate,\nUpsert (create or update),\nSearch,\nGet,\nDelete,\netc.\n")])])]),o("p",[t._v("We will use the Zendesk and Salesforce connectors to illustrate these actions. Check out the Workato recipe "),o("a",{attrs:{href:"https://www.workato.com/recipes/484532",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1),t._v(" and install it into your Workato account if you would like to test out these actions.")]),t._v(" "),o("h2",{attrs:{id:"create"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create"}},[t._v("#")]),t._v(" Create")]),t._v(" "),o("p",[t._v("The "),o("strong",[t._v("Create object")]),t._v(" action allows you to create any standard or custom object. In Salesforce, creating an account requires at least an Account Name to be stated.")]),t._v(" "),o("p",[t._v("Create action will typically return an ID that can be used to look up the newly created object. Sometimes, the entire object (with all the fields) will be returned. This depends on the API Workato uses to connect to the apps.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1686),alt:"create",width:"1200",height:"898"}}),t._v(" "),o("em",[t._v("Create action")])],1),t._v(" "),o("h2",{attrs:{id:"update"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[t._v("#")]),t._v(" Update")]),t._v(" "),o("p",[t._v("The Update Object action allows you to make changes to existing objects. The input to this action will usually be data that will uniquely identify the object to be updated.")]),t._v(" "),o("p",[t._v("In this example, it will the Salesforce Account ID.")]),t._v(" "),o("p",[t._v("Update action will return the ID or the entire object (with all the fields) of the updated object.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1687),alt:"update",width:"1200",height:"782"}}),t._v(" "),o("em",[t._v("Update action")])],1),t._v(" "),o("h2",{attrs:{id:"search"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#search"}},[t._v("#")]),t._v(" Search")]),t._v(" "),o("p",[t._v("This action is used to search for an object given a set of data that help identify an object.")]),t._v(" "),o("p",[t._v("Search will return all objects matching the specified criteria. i.e. Search returns a list of objects.")]),t._v(" "),o("p",[t._v("If no objects are found, search will return an empty list. i.e. Search will not throw an error. This will cause downstream actions that depend on the results of the search to fail.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1688),alt:"search",width:"1200",height:"711"}}),t._v(" "),o("em",[t._v("Search action")])],1),t._v(" "),o("h2",{attrs:{id:"get"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" Get")]),t._v(" "),o("p",[t._v("Get is similar to search, but is more pinpointed - it requires a unique ID identifying the object to be passed. If object is available, it will return the details of the object.")]),t._v(" "),o("p",[t._v("If the the object is not found, get will thrown an error.")]),t._v(" "),o("p",[t._v("In the case of Salesforce, using the Get action on an Account will require you to input the Salesforce Account ID.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1689),alt:"get",width:"1200",height:"758"}}),t._v(" "),o("em",[t._v("Get action")])],1),t._v(" "),o("h2",{attrs:{id:"upsert"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upsert"}},[t._v("#")]),t._v(" Upsert")]),t._v(" "),o("p",[t._v("Upsert is a combination of search, and create or update. Upsert will first search to see if an object exists, if object exists, it will update it otherwise it will create a new object.")]),t._v(" "),o("p",[t._v("The Salesforce upsert action will perform a search for the object based on the object ID, create the object if it does not exist, else perform an update on it with the input field values.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1690),alt:"upsert",width:"1200",height:"990"}}),t._v(" "),o("em",[t._v("Upsert action")])],1),t._v(" "),o("h2",{attrs:{id:"delete"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[t._v("#")]),t._v(" Delete")]),t._v(" "),o("p",[t._v("Delete actions allows you to delete any object. The input to this action is usually an ID that identifies the object to be deleted. However, most apps do not support delete, so Workato does not have broad support for deletes.")]),t._v(" "),o("p",[t._v("As the nature of this action can lead to permanently lost data, it is best to be cautious and understand the implications when using this action in Workato recipes.")]),t._v(" "),o("p",[o("DocImage",{attrs:{src:a(1691),alt:"delete",width:"1200",height:"762"}}),t._v(" "),o("em",[t._v("Delete action")])],1)])}),[],!1,null,null,null);e.default=s.exports}}]);