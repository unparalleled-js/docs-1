(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{1008:function(e,t,r){e.exports=r.p+"assets/img/new-record-trigger.37814439.png"},1009:function(e,t,r){e.exports=r.p+"assets/img/new-record-trigger-real-time.0be71927.png"},1010:function(e,t,r){e.exports=r.p+"assets/img/sys-created-on.522a162e.png"},13:function(e,t,r){e.exports=r.p+"assets/img/extended-output.a47e5b0f.gif"},2371:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"servicenow-new-record-triggers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#servicenow-new-record-triggers"}},[e._v("#")]),e._v(" ServiceNow - New record triggers")]),e._v(" "),s("h2",{attrs:{id:"new-record"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-record"}},[e._v("#")]),e._v(" New record")]),e._v(" "),s("p",[e._v("This trigger picks up records that are created in the selected table. Each record is processed as a separate job. It checks for new records once every poll interval.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:r(1008),alt:"New record trigger",width:"1000",height:"929"}}),e._v(" "),s("em",[e._v("New record trigger")])],1),e._v(" "),s("h3",{attrs:{id:"input-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"#from"}},[e._v("From")])]),e._v(" "),s("td",[e._v("\n        Records created after this time will be processed by the recipe. If left blank, the default date will be set to "),s("b",[e._v("one day")]),e._v(" before the recipe is first started.\n      ")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#table"}},[e._v("Table")])]),e._v(" "),s("td",[e._v("\n        Select a table to pick up new records from.\n      ")])])])]),e._v(" "),s("h3",{attrs:{id:"output-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),s("p",[e._v("The output datatree of this trigger contains the full set of columns from the selected table. All default and custom columns are supported. The output fields will be displayed only after a table is provided, either by selecting a table from the pick list or by providing the full table name.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:r(13),alt:"Output fields",width:"1101",height:"543"}}),e._v(" "),s("em",[e._v("Output fields")])],1),e._v(" "),s("h2",{attrs:{id:"new-record-real-time"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-record-real-time"}},[e._v("#")]),e._v(" New record (real-time)")]),e._v(" "),s("p",[e._v("This trigger picks up records in the selected table as soon they are created. Each record is processed as a separate job. It makes use of business rules to detect and trigger a new record event to be processed.")]),e._v(" "),s("p",[s("strong",[e._v("To use this trigger, the connected user must have sufficient access control to sys_script table. Learn how to configure "),s("router-link",{attrs:{to:"/connectors/servicenow.html#real-time-trigger"}},[e._v("access control for real time triggers")]),e._v(".")],1)]),e._v(" "),s("p",[s("DocImage",{attrs:{src:r(1009),alt:"New record trigger",width:"1000",height:"998"}}),e._v(" "),s("em",[e._v("New record trigger")])],1),e._v(" "),s("h3",{attrs:{id:"input-fields-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-2"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"#unique-key"}},[e._v("From")])]),e._v(" "),s("td",[e._v("\n        Records created after this time will be processed by the recipe.  If left blank, the default time will be set to "),s("b",[e._v("one day")]),e._v(" before the recipe is first started.\n      ")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#table"}},[e._v("Table")])]),e._v(" "),s("td",[e._v("\n        Select a table to pick up new records from.\n      ")])])])]),e._v(" "),s("h3",{attrs:{id:"output-fields-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-2"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),s("p",[e._v("The output datatree of this trigger contains the full set of columns from the selected table. All default and custom columns are supported. The output fields will be displayed only after a table is provided, either by selecting a table from the pick list or by providing the full table name.")]),e._v(" "),s("h2",{attrs:{id:"input-field-definitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-field-definitions"}},[e._v("#")]),e._v(" Input field definitions")]),e._v(" "),s("h3",{attrs:{id:"from"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[e._v("#")]),e._v(" From")]),e._v(" "),s("p",[e._v("This is a user-defined time that marks the earliest time that the trigger should pick up created records.  If left blank, the default time will be set to "),s("b",[e._v("one day")]),e._v(" before the recipe is first started.")]),e._v(" "),s("p",[e._v("The "),s("strong",[e._v("Created (sys_created_on)")]),e._v(" column is used to determine the time that a record is created. Only records with "),s("strong",[e._v("Created (sys_created_on)")]),e._v(" timestamp later than the time specified in "),s("strong",[e._v("From")]),e._v(" will be processed by the trigger.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:r(1010),alt:"Created (sys_created_on) timestamp",width:"1278",height:"656"}}),e._v(" "),s("em",[e._v("Created (sys_created_on) timestamp")])],1),e._v(" "),s("h3",{attrs:{id:"table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[e._v("#")]),e._v(" Table")]),e._v(" "),s("p",[e._v("Select the table to process records from. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.")]),e._v(" "),s("p",[e._v("Make sure that the user used in the connection has "),s("router-link",{attrs:{to:"/connectors/servicenow.html#roles-and-permissions-required-to-connect"}},[e._v("sufficient access control")]),e._v(" to the selected table.")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);