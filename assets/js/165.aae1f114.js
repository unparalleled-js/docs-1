(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{1468:function(t,e,i){t.exports=i.p+"assets/img/dynamiclist.7096742d.png"},1469:function(t,e,i){t.exports=i.p+"assets/img/fixedlist.276566cd.png"},1470:function(t,e,i){t.exports=i.p+"assets/img/item-fixed.3958a8e1.gif"},2568:function(t,e,i){"use strict";i.r(e);var s=i(0),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"fixed-and-dynamic-lists"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fixed-and-dynamic-lists"}},[t._v("#")]),t._v(" Fixed and dynamic lists")]),t._v(" "),s("h2",{attrs:{id:"using-list-data-pills-in-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-list-data-pills-in-actions"}},[t._v("#")]),t._v(" Using list data pills in actions")]),t._v(" "),s("p",[t._v("Some actions will accept a list as input e.g. Salesforce bulk insert and bulk update actions, create journal entry actions for accounting apps, create sales order actions for ERP apps.")]),t._v(" "),s("p",[t._v("Actions that take lists as inputs will have a input field called Source list, which will only take in list pills. List data pills are indicated with a stack of lines as an icon. When these list input fields are selected, the data tree will offer only list pills.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:i(74),alt:"Example input source list",width:"1498",height:"1192"}}),t._v(" "),s("em",[t._v("Rows list object is mapped into the Salesforce Contacts input source list")])],1),t._v(" "),s("p",[t._v("When actions offer a list as input, the input modes allowed are "),s("code",[t._v("Fixed list")]),t._v(" and "),s("code",[t._v("Dynamic list")]),t._v(". Select the input mode by clicking on the ellipses icon as shown below.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:i(1468),alt:"Dynamic or fixed",width:"1248",height:"628"}}),t._v(" "),s("em",[t._v("Select the input mode")])],1),t._v(" "),s("h2",{attrs:{id:"dynamic-lists"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-lists"}},[t._v("#")]),t._v(" Dynamic lists")]),t._v(" "),s("p",[t._v("Use the 'Dynamic list' option when you want the action to dynamically iterate through all items in a list, reading the values in every row. For example, if you have a CSV file with 10 rows, Dynamic list will iterate through all the rows, using the data in each row to create 10 new records in Salesforce.")]),t._v(" "),s("p",[t._v("When this option is selected, the first field to map is the 'Source list' field, which only accepts a list data pill. Using the list data pill will read directly from the source application's list of objects. Thereafter, map the fields below using the pills nested within the list pill.")]),t._v(" "),s("p",[t._v("In the example below, the source list comes from a CSV file uploaded into Dropbox and will create Salesforce Opportunity records in bulk using the data in each line of the CSV file. It will loop through all CSV rows and read the column values from each row, such as Product code, Product description etc. Thus, each line in the CSV file will provide data per Opportunity record created in Salesforce.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:i(74),alt:"Example input source list",width:"1498",height:"1192"}}),t._v(" "),s("em",[t._v("Rows list object is mapped into the Salesforce products input source list")])],1),t._v(" "),s("h2",{attrs:{id:"fixed-lists"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fixed-lists"}},[t._v("#")]),t._v(" Fixed lists")]),t._v(" "),s("p",[t._v("In contrast, use the 'Fixed list' option when you want to input a list with a fixed number of items, without dynamically iterating through another list. In this case, each item is added one by one.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:i(1469),alt:"Dynamic or fixed",width:"1254",height:"698"}}),t._v(" "),s("em",[t._v("Select the input mode")])],1),t._v(" "),s("p",[t._v("Use this input mode if the total number of items in the list and their contents should be the same across recipe jobs. When this option is selected, you need to add and map each item in the list one by one.")]),t._v(" "),s("p",[t._v("The example below demonstrates using Fixed list to create a fixed number of Contacts in Salesforce. In this case, the user already knows the number of contacts he wishes to create in Salesforce, so he will add each item in the Contacts list one by one.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:i(1470),alt:"Dynamic or fixed",width:"1280",height:"628"}}),t._v(" "),s("em",[t._v("Entering Contact names in a fixed list")])],1)])}),[],!1,null,null,null);e.default=a.exports},74:function(t,e,i){t.exports=i.p+"assets/img/example-input-source-list.ddd21eef.png"}}]);