(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{2190:function(t,e,o){"use strict";o.r(e);var i=o(0),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"bigquery-select-actions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bigquery-select-actions"}},[t._v("#")]),t._v(" BigQuery - Select actions")]),t._v(" "),i("h2",{attrs:{id:"select-rows"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#select-rows"}},[t._v("#")]),t._v(" Select rows")]),t._v(" "),i("p",[t._v("This action lets you select rows based on certain criteria defined by a "),i("code",[t._v("WHERE")]),t._v(" condition. Rows from the selected table that match the "),i("code",[t._v("WHERE")]),t._v(" condition will be returned as the output of this action. This action is a long action, enabling you to pull data from larger tables. If no data is returned in the first few seconds of the job execution in BigQuery, Workato will wait a periodic amount of time before checking if the data is ready to be retrieved from BigQuery.")]),t._v(" "),i("p",[i("DocImage",{attrs:{src:o(462),alt:"Select rows action",width:"2010",height:"1480"}}),t._v(" "),i("em",[t._v("Select rows action")])],1),t._v(" "),i("h3",{attrs:{id:"input-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),i("table",{staticClass:"unchanged rich-diff-level-one"},[i("thead",[i("tr",[i("th",{attrs:{width:"25%"}},[t._v("Field")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Project")]),t._v(" "),i("td",[t._v("The project available in the connection to be billed for the query.")])]),t._v(" "),i("tr",[i("td",[t._v("Dataset")]),t._v(" "),i("td",[t._v("The dataset which the action or trigger will pull the possible tables from.")])]),t._v(" "),i("tr",[i("td",[t._v("Table")]),t._v(" "),i("td",[t._v("The table inside the dataset.")])]),t._v(" "),i("tr",[i("td",[t._v("Output columns")]),t._v(" "),i("td",[t._v("After selecting your table, you'll also be able to select which columns you want returned. Selecting only what you need for your recipe increases job throughput and overall efficiency of the recipe.")])]),t._v(" "),i("tr",[i("td",[t._v("WHERE condition")]),t._v(" "),i("td",[t._v("Refer to the "),i("a",{attrs:{href:"/connectors/bigquery.html#where-condition"}},[t._v("WHERE condition")]),t._v(" guide for more information.")])]),t._v(" "),i("tr",[i("td",[t._v("Order by")]),t._v(" "),i("td",[t._v("Rows returned from this action can be ordered based on the "),i("b",[t._v("Order by")]),t._v(" input field. This field is used to change the default ordering of rows from your BigQuery database.\n      You can also define the direction of order for each column you wish to order by. The following order by statement will order rows by `priority` in ascending order followed by `created_date` in descending order (latest first)."),i("br"),t._v(" "),i("code",[t._v("priority asc, created_date desc")])])]),t._v(" "),i("tr",[i("td",[t._v("Limit")]),t._v(" "),i("td",[t._v("This input field determines the maximum number of rows to return. The default limit is 50000 and capped at a maximum of 50000 rows for a single "),i("b",[t._v("Select rows")]),t._v(" action.")])]),t._v(" "),i("tr",[i("td",[t._v("Offset")]),t._v(" "),i("td",[t._v("This input field gives you the option to fetch only a page of results from the entire results set. For example, to skip the first 100 rows of the selected results set, input "),i("code",[t._v("100")]),t._v(" to this field. The default is "),i("code",[t._v("0")]),t._v(".")])]),t._v(" "),i("tr",[i("td",[t._v("Location")]),t._v(" "),i("td",[t._v("The geographical location of where the job should be run. This field isn't required in most cases.")])])])]),t._v(" "),i("h3",{attrs:{id:"output-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),i("table",{staticClass:"unchanged rich-diff-level-one"},[i("thead",[i("tr",[i("th",{attrs:{width:"25%"}},[t._v("Field")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Rows")]),t._v(" "),i("td",[t._v("An array of the rows. Each datapill in the row object corresponds to a single column.")])])])]),t._v(" "),i("h2",{attrs:{id:"select-rows-using-custom-sql"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#select-rows-using-custom-sql"}},[t._v("#")]),t._v(" Select rows using custom SQL")]),t._v(" "),i("p",[t._v("This action lets you select rows based on a custom SQL query. Rows that are returned from the query will be returned as the output of this action. This action is a long action, enabling you to pull data from larger tables or perform complex queries including "),i("code",[t._v("JOINS")]),t._v(", "),i("code",[t._v("GROUP BY")]),t._v(" or any other SQL functions available in BigQuery. If no data is returned in the first few seconds of the job execution in BigQuery, Workato will wait a periodic amount of time before checking if the data is ready to be retrieved from BigQuery.")]),t._v(" "),i("p",[i("DocImage",{attrs:{src:o(463),alt:"Select rows using custom SQL action",width:"906",height:"763"}}),t._v(" "),i("em",[t._v("Select rows using custom SQL action")])],1),t._v(" "),i("h3",{attrs:{id:"input-fields-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-2"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),i("table",{staticClass:"unchanged rich-diff-level-one"},[i("thead",[i("tr",[i("th",{attrs:{width:"25%"}},[t._v("Field")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Project")]),t._v(" "),i("td",[t._v("The project available in the connection to be billed for the query.")])]),t._v(" "),i("tr",[i("td",[t._v("SQL")]),t._v(" "),i("td",[t._v("Provide the SQL query to be executed to select rows. The query here will be used to generate the output datatree. To do this, the SQL will be executed once when you provide it. You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes (`''`) if they are used to compared against string datatypes. When using datapills, you will need to use the output columns schema designer to let us know what columns will be returned. "),i("br"),t._v("\n      Do not use the `LIMIT` clause in your SQL but use the limit input field instead.\n      ")])]),t._v(" "),i("tr",[i("td",[t._v("Automatic schema introspection")]),t._v(" "),i("td",[t._v("Workato automatically tries to introspect the output of your query. In cases where the query takes too long or if datapills are used, toggle this to false and define the output fields of your query manually.")])]),t._v(" "),i("tr",[i("td",[t._v("Output fields")]),t._v(" "),i("td",[t._v('This input field appears when "Automatic schema introspection" is false. Use this to manually define the output fields of your query. The names given to the output should be identical to the column names expected. Find out how to define your output fields quickly and easily. '),i("br"),t._v(" "),i("a",{attrs:{href:"/connectors/bigquery.html#defining-your-output-fields"}},[t._v("Find out how to define your output fields quickly and easily.")])])]),t._v(" "),i("tr",[i("td",[t._v("Limit")]),t._v(" "),i("td",[t._v("This input field determines the maximum number of rows to return. The default limit is 50000 and capped at a maximum of 50000 rows")])]),t._v(" "),i("tr",[i("td",[t._v("Offset")]),t._v(" "),i("td",[t._v("This input field gives you the option to fetch only a page of results from the entire results set. For example, to skip the first 100 rows of the selected results set, input "),i("code",[t._v("100")]),t._v(" to this field. The default is "),i("code",[t._v("0")]),t._v(".")])]),t._v(" "),i("tr",[i("td",[t._v("Location")]),t._v(" "),i("td",[t._v("The geographical location of where the job should be run. This field isn't required in most cases.")])]),t._v(" "),i("tr",[i("td",[t._v("Legacy SQL")]),t._v(" "),i("td",[t._v("The default is assumed to be standard SQL. Select true to use legacy SQL instead.")])])])]),t._v(" "),i("h3",{attrs:{id:"output-fields-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-2"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),i("table",{staticClass:"unchanged rich-diff-level-one"},[i("thead",[i("tr",[i("th",{attrs:{width:"25%"}},[t._v("Field")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("Rows")]),t._v(" "),i("td",[t._v("An array of the rows. Each datapill in the row object corresponds to a single column.")])])])]),t._v(" "),i("h3",{attrs:{id:"working-with-automatic-schema-introspection"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#working-with-automatic-schema-introspection"}},[t._v("#")]),t._v(" Working with automatic schema introspection")]),t._v(" "),i("p",[t._v("When working with large queries or datapills, we are unable to automatically introspect the schema of the expected rows for you. As such, the action also gives you the ability to define the output schema of the result set.")]),t._v(" "),i("p",[t._v("Workato has set some basic limitations before schema introspection is disabled")]),t._v(" "),i("ul",[i("li",[t._v("Query's estimated bytes processed is larger than 1 Gigabyte")]),t._v(" "),i("li",[t._v("Query contains datapills")])]),t._v(" "),i("p",[t._v("Relevant error messages are shown when this happens and you should toggle the "),i("code",[t._v("Automatic schema introspection")]),t._v(" input field to "),i("code",[t._v("No")]),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports},462:function(t,e,o){t.exports=o.p+"assets/img/select-rows-action.213fada3.png"},463:function(t,e,o){t.exports=o.p+"assets/img/custom-sql-action.97a96e9e.png"}}]);