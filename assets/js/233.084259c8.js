(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{2188:function(e,t,r){"use strict";r.r(t);var s=r(0),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"bigquery-new-row-triggers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bigquery-new-row-triggers"}},[e._v("#")]),e._v(" BigQuery - New row triggers")]),e._v(" "),s("h2",{attrs:{id:"new-row-trigger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-row-trigger"}},[e._v("#")]),e._v(" New row trigger")]),e._v(" "),s("p",[e._v("This trigger picks up rows that are inserted in the selected table. Each row is processed as a separate job. It checks for new rows once every poll interval.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:r(459),alt:"New row trigger",width:"2500",height:"1310"}}),e._v(" "),s("em",[e._v("New row trigger")])],1),e._v(" "),s("h3",{attrs:{id:"input-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[e._v("Field")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Project")]),e._v(" "),s("td",[e._v("The project available in the connection to be billed for the query.")])]),e._v(" "),s("tr",[s("td",[e._v("Dataset")]),e._v(" "),s("td",[e._v("The dataset which the action or trigger will pull the possible tables from.")])]),e._v(" "),s("tr",[s("td",[e._v("Table")]),e._v(" "),s("td",[e._v("The table inside the dataset.")])]),e._v(" "),s("tr",[s("td",[e._v("Unique key")]),e._v(" "),s("td",[e._v("Values from this selected column is used to deduplicate rows in the selected table, making sure that the same row is not processed twice in the same recipe."),s("br"),e._v("\n      As such, the values in the selected column should not be repeated in your table. Typically, this column is the primary key of the table (e.g. `ID`) and must be of type integer.")])]),e._v(" "),s("tr",[s("td",[e._v("Output columns")]),e._v(" "),s("td",[e._v("After selecting your table, you'll also be able to select which columns you want returned. Selecting only what you need for your recipe increases job throughput and overall efficiency of the recipe.")])]),e._v(" "),s("tr",[s("td",[e._v("WHERE condition")]),e._v(" "),s("td",[e._v("Refer to the "),s("a",{attrs:{href:"/connectors/bigquery.html#where-condition"}},[e._v("WHERE condition")]),e._v(" guide for more information.")])]),e._v(" "),s("tr",[s("td",[e._v("Location")]),e._v(" "),s("td",[e._v("The geographical location of where the job should be run. This field isn't required in most cases.")])])])]),e._v(" "),s("h3",{attrs:{id:"output-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[e._v("Field")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Columns")]),e._v(" "),s("td",[e._v("Workato introspects the schema of the table and returns the value of each column as a datapill")])])])]),e._v(" "),s("h2",{attrs:{id:"new-rows-batch-trigger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-rows-batch-trigger"}},[e._v("#")]),e._v(" New rows batch trigger")]),e._v(" "),s("p",[e._v("This trigger picks up rows that are inserted in the selected table or view. These rows are processed as a batch of rows for each job. This batch size can be configured in the trigger input. It checks for new rows once every poll interval.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:r(460),alt:"New batch of rows trigger",width:"2452",height:"1422"}}),e._v(" "),s("em",[e._v("New batch of rows trigger")])],1),e._v(" "),s("h3",{attrs:{id:"input-fields-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-2"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[e._v("Field")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Project")]),e._v(" "),s("td",[e._v("The project available in the connection to be billed for the query.")])]),e._v(" "),s("tr",[s("td",[e._v("Dataset")]),e._v(" "),s("td",[e._v("The dataset which the action or trigger will pull the possible tables from.")])]),e._v(" "),s("tr",[s("td",[e._v("Table")]),e._v(" "),s("td",[e._v("The table inside the dataset.")])]),e._v(" "),s("tr",[s("td",[e._v("Unique key")]),e._v(" "),s("td",[e._v("Values from this selected column is used to deduplicate rows in the selected table, making sure that the same row is not processed twice in the same recipe."),s("br"),e._v("\n      As such, the values in the selected column should not be repeated in your table. Typically, this column is the primary key of the table (e.g. `ID`) and must be of type integer.")])]),e._v(" "),s("tr",[s("td",[e._v("Output columns")]),e._v(" "),s("td",[e._v("After selecting your table, you'll also be able to select which columns you want returned. Selecting only what you need for your recipe increases job throughput and overall efficiency of the recipe.")])]),e._v(" "),s("tr",[s("td",[e._v("Batch size")]),e._v(" "),s("td",[e._v("The batch size of the rows to be returned in each job. This can be anywhere from 1 to 50,000 with 50,000 being the default. Larger batch sizes will increase data throughput. If more new rows are found than the batch size, multiple jobs will be created until all new rows are processed.")])]),e._v(" "),s("tr",[s("td",[e._v("WHERE condition")]),e._v(" "),s("td",[e._v("Refer to the "),s("a",{attrs:{href:"/connectors/bigquery.html#where-condition"}},[e._v("WHERE condition")]),e._v(" guide for more information.")])]),e._v(" "),s("tr",[s("td",[e._v("Location")]),e._v(" "),s("td",[e._v("The geographical location of where the job should be run. This field isn't required in most cases.")])])])]),e._v(" "),s("h3",{attrs:{id:"output-fields-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-2"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[e._v("Field")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Rows")]),e._v(" "),s("td",[e._v("An array of the rows. Each datapill in the row corresponds to a single column.")])]),e._v(" "),s("tr",[s("td",[e._v("Total rows")]),e._v(" "),s("td",[e._v("Total rows returned from this poll.")])])])])])}),[],!1,null,null,null);t.default=i.exports},459:function(e,t,r){e.exports=r.p+"assets/img/new-row-trigger.e27e3317.png"},460:function(e,t,r){e.exports=r.p+"assets/img/new-batch-of-rows-trigger.6fb96094.png"}}]);