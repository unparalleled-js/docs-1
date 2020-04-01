(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{2337:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"redshift-new-row-triggers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redshift-new-row-triggers"}},[e._v("#")]),e._v(" Redshift - New row triggers")]),e._v(" "),a("h2",{attrs:{id:"new-row"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-row"}},[e._v("#")]),e._v(" New row")]),e._v(" "),a("p",[e._v("This trigger picks up rows that are inserted in the selected table or view. Each row is processed as a separate job. It checks for new rows once every poll interval.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(891),alt:"New row trigger",width:"2204",height:"1707"}}),e._v(" "),a("em",[e._v("New row trigger")])],1),e._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#table"}},[e._v("Table")])]),e._v(" "),a("td",[e._v("\n        Select a table/view to process rows from.\n      ")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#unique-key"}},[e._v("Unique key")])]),e._v(" "),a("td",[e._v("\n        Select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.\n      ")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#where-condition"}},[e._v("WHERE condition")])]),e._v(" "),a("td",[e._v("\n        Provide an optional "),a("code",[e._v("WHERE")]),e._v(" condition to filter rows.\n      ")])])])]),e._v(" "),a("h2",{attrs:{id:"new-batch-of-rows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-batch-of-rows"}},[e._v("#")]),e._v(" New batch of rows")]),e._v(" "),a("p",[e._v("This trigger picks up rows that are inserted in the selected table or view. These rows are processed as a batch of rows for each job. This batch size can be configured in the trigger input. It checks for new rows once every poll interval.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(892),alt:"New batch of rows trigger",width:"2205",height:"2051"}}),e._v(" "),a("em",[e._v("New batch of rows trigger")])],1),e._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#table"}},[e._v("Table")])]),e._v(" "),a("td",[e._v("\n        Select a table/view to process rows from.\n      ")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#unique-key"}},[e._v("Unique key")])]),e._v(" "),a("td",[e._v("\n        Select a unique key column to uniquely identify rows. This list of columns are generated from the selected table/view.\n      ")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#batch-size"}},[e._v("Batch size")])]),e._v(" "),a("td",[e._v("\n        Configure the batch size to process in each individual job for this recipe.\n      ")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#where-condition"}},[e._v("WHERE condition")])]),e._v(" "),a("td",[e._v("\n        Provide an optional "),a("code",[e._v("WHERE")]),e._v(" condition to filter rows.\n      ")])])])]),e._v(" "),a("h2",{attrs:{id:"new-batch-of-rows-via-custom-sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-batch-of-rows-via-custom-sql"}},[e._v("#")]),e._v(" New batch of rows via custom SQL")]),e._v(" "),a("p",[e._v("This trigger picks up rows when any rows matching the custom SQL are inserted. These rows are processed as a batch of rows for each job. This batch size can be configured in the trigger input. It checks for new rows once every poll interval.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:s(893),alt:"New batch of rows via custom SQL trigger",width:"2206",height:"2112"}}),e._v(" "),a("em",[e._v("New batch of rows trigger via custom SQL")])],1),e._v(" "),a("table",{staticClass:"unchanged rich-diff-level-one"},[a("thead",[a("tr",[a("th",{attrs:{width:"25%"}},[e._v("Input field")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#sql"}},[e._v("SQL")])]),e._v(" "),a("td",[e._v("\n        Custom SQL query to be executed at each poll interval to pick up new rows.\n      ")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#unique-key"}},[e._v("Unique key")])]),e._v(" "),a("td",[e._v("\n        Select a unique key column to uniquely identify rows. This list of columns are generated from custom SQL provided.\n      ")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#batch-size"}},[e._v("Batch size")])]),e._v(" "),a("td",[e._v("\n        Configure the batch size to process in each individual job for this recipe. This defaults to 100.\n      ")])])])]),e._v(" "),a("h2",{attrs:{id:"input-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),a("h3",{attrs:{id:"table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[e._v("#")]),e._v(" Table")]),e._v(" "),a("p",[e._v("Select the table/view to process rows from. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.")]),e._v(" "),a("h3",{attrs:{id:"unique-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unique-key"}},[e._v("#")]),e._v(" Unique key")]),e._v(" "),a("p",[e._v("Values from this selected column is used to deduplicate rows in the selected table, making sure that the same row is not processed twice in the same recipe.")]),e._v(" "),a("p",[e._v("As such, the values in the selected column should not be repeated in your table. Typically, this column is the primary key of the table (e.g. "),a("code",[e._v("ID")]),e._v("). It should be incremental and sortable. This column can also be indexed for better performance.")]),e._v(" "),a("p",[e._v("Only columns that has "),a("strong",[e._v("key column usage")]),e._v(" defined can be used. Run this SQL query to find out which columns fulfill this requirement.")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" kc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("column_name\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" information_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("table_constraints tc\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("JOIN")]),e._v(" information_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("key_column_usage kc\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ON")]),e._v(" kc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" tc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("AND")]),e._v("\n   kc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("table_schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" tc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("table_schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("AND")]),e._v("\n   kc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("constraint_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" tc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("constraint_name\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" tc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("table_schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'schema_name'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("AND")]),e._v(" tc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'table_name'")]),e._v("\n")])])]),a("h3",{attrs:{id:"batch-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#batch-size"}},[e._v("#")]),e._v(" Batch size")]),e._v(" "),a("p",[e._v("Batch size of rows to return in each job. This can be any number between "),a("strong",[e._v("1")]),e._v(" and the maximum batch size. Maximum batch size is "),a("strong",[e._v("100")]),e._v(" and default is "),a("strong",[e._v("100")]),e._v(".")]),e._v(" "),a("p",[e._v("In any given poll, if there are less rows than the configured batch size, this trigger will deliver all rows as a smaller batch.")]),e._v(" "),a("h3",{attrs:{id:"where-condition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-condition"}},[e._v("#")]),e._v(" WHERE condition")]),e._v(" "),a("p",[e._v("This condition is used to filter rows based on one or more column values.")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("status")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'closed'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("and")]),e._v(" priority "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\n")])])]),a("p",[e._v("Leave blank to process all rows from the selected table.")]),e._v(" "),a("p",[e._v("Complex "),a("code",[e._v("WHERE")]),e._v(" conditions with subqueries can also be used. Refer to the "),a("router-link",{attrs:{to:"/connectors/redshift.html#where-condition"}},[e._v("WHERE condition")]),e._v(" guide for more information.")],1),e._v(" "),a("h3",{attrs:{id:"sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[e._v("#")]),e._v(" SQL")]),e._v(" "),a("p",[e._v("Provide the SQL to be executed to select rows. The SQL here will be used to generate the output datatree. To do this, the SQL will be executed once when you provide it. You can map datapills here to execute dynamically changing SQL statements. Remember to wrap datapills in quotes ("),a("code",[e._v("''")]),e._v(").")]),e._v(" "),a("p",[e._v("Avoid using limit clauses like "),a("code",[e._v("TOP")]),e._v(" in your SQL. This is because the limit to the number of rows returned in the query is based on the value defined in the "),a("a",{attrs:{href:"#batch-size"}},[a("strong",[e._v("Batch size")]),e._v(" input field")]),e._v(". Adding your own limit clause will cause the action to fail.")])])}),[],!1,null,null,null);t.default=r.exports},891:function(e,t,s){e.exports=s.p+"assets/img/new-row-trigger.0a1a7525.png"},892:function(e,t,s){e.exports=s.p+"assets/img/new-batch-of-rows-trigger.f06850cd.png"},893:function(e,t,s){e.exports=s.p+"assets/img/new-batch-of-rows-via-custom-sql-trigger.3685121f.png"}}]);