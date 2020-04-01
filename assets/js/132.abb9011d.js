(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{120:function(e,r,t){e.exports=t.p+"assets/img/connection-error.ccf20a9d.png"},1760:function(e,r,t){e.exports=t.p+"assets/img/missing-required-field.baa158b2.gif"},1761:function(e,r,t){e.exports=t.p+"assets/img/formula-error.98576d23.gif"},1762:function(e,r,t){e.exports=t.p+"assets/img/design-time-errors-change-trigger.8c17a6fa.gif"},1763:function(e,r,t){e.exports=t.p+"assets/img/fixing-invalid-pills.c4790cf7.gif"},2656:function(e,r,t){"use strict";t.r(r);var i=t(0),s=Object(i.a)({},(function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"recipe-design-time-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#recipe-design-time-errors"}},[e._v("#")]),e._v(" Recipe design-time errors")]),e._v(" "),i("p",[e._v("Recipe design-time errors refer to errors which are caught while building a recipe. These errors typically show up when you click on recipe test or recipe start, and prevent you from testing or starting the recipe until they are resolved. This is because recipes with design-time errors will definitely result in job errors if ran. We go through common design-time errors in this section.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:t(271),alt:"Recipe design-time errors show up when recipe is tested or started",width:"967",height:"810"}}),e._v(" "),i("em",[e._v("Recipe design-time errors show up when recipe is tested or started")])],1),e._v(" "),i("h2",{attrs:{id:"missing-required-input-fields-at-design-time"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#missing-required-input-fields-at-design-time"}},[e._v("#")]),e._v(" Missing required input fields at design-time")]),e._v(" "),i("p",[e._v("Triggers and actions typically need configuration to be useful in a recipe. For example, to update a Zendesk organization, we need, at a minimum, the ID of the organization to update. Therefore, that's a required field in the recipe.")]),e._v(" "),i("p",[e._v("If the recipe detects that a required input field is lacking values or datapills, it will raise a design-time error and refuse to start until the input field has been filled with a value or a datapill.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:t(1760),alt:"Missing required field",width:"967",height:"810"}}),e._v(" "),i("em",[e._v("Recipe design error due to missing required input field (Organization ID) in Step 3")])],1),e._v(" "),i("h2",{attrs:{id:"design-time-formula-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#design-time-formula-errors"}},[e._v("#")]),e._v(" Design-time formula errors")]),e._v(" "),i("p",[e._v("Every input field (except for list input fields) can be toggled between text and formula mode. When in formula mode, errors in formula syntax will raise design-time errors.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:t(1761),alt:"Formula error",width:"967",height:"810"}}),e._v(" "),i("em",[e._v("Recipe design error due to misspelt formula in Step 5")])],1),e._v(" "),i("p",[e._v("Common design-time formula errors are:")]),e._v(" "),i("ul",[i("li",[e._v("misspelt formulas (such as the above)")]),e._v(" "),i("li",[e._v("lack of proper spacing between formulas and operators (e.g. having 2 whitespaces instead of 1)")]),e._v(" "),i("li",[e._v("formula syntax errors (e.g. using curly braces "),i("code",[e._v("{ }")]),e._v(" instead of square brackets "),i("code",[e._v("[ ]")]),e._v(")")]),e._v(" "),i("li",[e._v("symbols in the wrong format (e.g. when copying formulas and symbols from word processors like OpenOffice and Microsoft Word, these programs may format symbols like "),i("code",[e._v('"')]),e._v(", "),i("code",[e._v("'")]),e._v(" and "),i("code",[e._v("{ }")]),e._v(" differently and cause the Workato formula editor to not recognize these symbols)")])]),e._v(" "),i("p",[e._v("For more formula errors examples and how to resolve them, you can refer to the "),i("router-link",{attrs:{to:"/recipes/formula-errors.html"}},[e._v("formula errors article")]),e._v(".")],1),e._v(" "),i("h2",{attrs:{id:"invalid-datapills"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#invalid-datapills"}},[e._v("#")]),e._v(" Invalid datapills")]),e._v(" "),i("p",[e._v("Datapills can become invalid when their source is missing, e.g. if the trigger or action that the datapill comes from is changed, or if the field gets deleted from the app (e.g. if the custom field "),i("code",[e._v("Customer subscription plan")]),e._v(" in Salesforce object "),i("code",[e._v("Account")]),e._v(" gets deleted in Salesforce, that datapill will become invalid for use in Workato). Invalid datapills will turn red.")]),e._v(" "),i("p",[e._v("In the following example, design-time errors due to invalid datapills are raised when the Salesforce trigger is changed.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:t(1762),alt:"Salesforce trigger is changed from New/updated object to New object",width:"967",height:"810"}}),e._v(" "),i("em",[e._v("Salesforce trigger is changed from New/updated object to New object")])],1),e._v(" "),i("p",[e._v("The recipe proceeds to raise errors when we try to test the recipe.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:t(271),alt:"Design-time errors for invalid pills show up when recipe is tested or started",width:"967",height:"810"}}),e._v(" "),i("em",[e._v("Design-time errors for invalid pills show up when recipe is tested or started")])],1),e._v(" "),i("p",[e._v("To resolve issues with invalid datapills, you need to replace these pills with valid datapills or values. In the above example, we need to replace datapills from the old trigger "),i("strong",[e._v("New/updated Account")]),e._v(" with datapills from the new trigger "),i("strong",[e._v("New Account")]),e._v(".")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:t(1763),alt:"Replacing the invalid datapill with a valid datapill",width:"967",height:"810"}}),e._v(" "),i("em",[e._v("Replacing the invalid datapill with a valid datapill")])],1),e._v(" "),i("h2",{attrs:{id:"app-connection-errors"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#app-connection-errors"}},[e._v("#")]),e._v(" App connection errors")]),e._v(" "),i("p",[e._v("App connections can become invalid due to several reasons:")]),e._v(" "),i("ul",[i("li",[e._v("app credentials were changed and the connection was not updated correspondingly in Workato")]),e._v(" "),i("li",[e._v("connected user doesn't have the right set of permissions to read/write selected records")]),e._v(" "),i("li",[e._v("permissions of the connected user was changed to a reduced scope")])]),e._v(" "),i("p",[e._v("In such cases, reconnecting or verifying that the connected user has permissions to read/write records used in the recipes should work to re-establish the connection.")]),e._v(" "),i("p",[i("DocImage",{attrs:{src:t(120),alt:"Design-time errors for app connection errors",width:"948",height:"321"}}),e._v(" "),i("em",[e._v("Design-time errors for app connection errors")])],1)])}),[],!1,null,null,null);r.default=s.exports},271:function(e,r,t){e.exports=t.p+"assets/img/design-time-errors-invalid-pills.0abf7828.gif"}}]);