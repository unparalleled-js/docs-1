(window.webpackJsonp=window.webpackJsonp||[]).push([[492],{2355:function(e,t,r){"use strict";r.r(t);var i=r(0),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"amazon-s3-trigger-new-updated-csv-file"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#amazon-s3-trigger-new-updated-csv-file"}},[e._v("#")]),e._v(" Amazon S3 trigger - New/updated CSV file")]),e._v(" "),r("p",[e._v("Triggers when a CSV file is added or updated in a selected bucket/folder in Amazon S3.")]),e._v(" "),r("p",[e._v("Checks selected folder for new or updated CSV file once every poll interval. The output includes the file’s metadata and file contents, which are CSV rows delivered in batches.")]),e._v(" "),r("p",[e._v("Note that in Amazon S3, when a file is renamed, it is considered a new file. When a file is uploaded and overwrites an existing file with the same name, it is considered an updated file but not a new file.")]),e._v(" "),r("h2",{attrs:{id:"input-fields"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Field name")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("When first started, this recipe should pick up events from")]),e._v(" "),r("td",[e._v("When recipe starts for the first time, it will pick up CSV files created or updated from this specified time. Once recipe has been run or tested, value cannot be changed. "),r("router-link",{attrs:{to:"/recipes/triggers.html#since-from"}},[e._v("Learn more about this field here")]),e._v(".")],1)]),e._v(" "),r("tr",[r("td",[e._v("Bucket region")]),e._v(" "),r("td",[e._v("The region of the bucket to monitor for new/updated file, e.g. us-west-2. In Amazon S3, go to "),r("strong",[e._v("Bucket > Properties > Static website hosting")]),e._v(" to find your region in the Endpoint URL.")])]),e._v(" "),r("tr",[r("td",[e._v("Bucket")]),e._v(" "),r("td",[e._v("The bucket to monitor for new/updated CSV file. Select a bucket from the picklist or enter the bucket name directly.")])]),e._v(" "),r("tr",[r("td",[e._v("Folder")]),e._v(" "),r("td",[e._v("The folder to monitor for new/updat  ed CSV file. Select a folder from the picklist or enter the folder path directly.")])]),e._v(" "),r("tr",[r("td",[e._v("Include sub-folders")]),e._v(" "),r("td",[e._v("Select "),r("strong",[e._v("Yes")]),e._v(" to monitor sub-folders for new/updated CSV file as well.")])]),e._v(" "),r("tr",[r("td",[e._v("Include files not ending with .csv?")]),e._v(" "),r("td",[e._v("Handle the cases when your CSV files exported from other systems may not have "),r("code",[e._v(".csv")]),e._v(" extension.")])]),e._v(" "),r("tr",[r("td",[e._v("Column names")]),e._v(" "),r("td",[e._v("The column names of the CSV file. Upload a sample CSV file to automatically generate column names, or add column names manually.")])]),e._v(" "),r("tr",[r("td",[e._v("Column delimiter")]),e._v(" "),r("td",[e._v("Delimiter separating the columns in the CSV file.")])]),e._v(" "),r("tr",[r("td",[e._v("Contains header row?")]),e._v(" "),r("td",[e._v("Select "),r("strong",[e._v("Yes")]),e._v(" if CSV file contains header row. Workato will not process that row as data.")])]),e._v(" "),r("tr",[r("td",[e._v("Batch size")]),e._v(" "),r("td",[e._v("Workato divides the CSV file into smaller batches to process more efficiently. This field defines the number of CSV rows to process in each batch (Maximum of 1000 rows/batch). Use a larger batch size to increase data throughput. In some cases, Workato will automatically reduce batch size to avoid exceeding API limit. "),r("router-link",{attrs:{to:"/features/batch-processing.html"}},[e._v("Learn more about Batch Processing")]),e._v(".")],1)])])]),e._v(" "),r("p",[e._v("This trigger supports "),r("router-link",{attrs:{to:"/recipes/triggers.html#trigger-conditions"}},[e._v("Trigger Condition")]),e._v(", which allows you to filter trigger events.")],1),e._v(" "),r("h2",{attrs:{id:"output-fields"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[e._v("#")]),e._v(" Output fields")]),e._v(" "),r("table",{staticClass:"unchanged rich-diff-level-one"},[r("thead",[r("tr",[r("th",{attrs:{width:"30%",colspan:"2"}},[e._v("Field name")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{attrs:{rowspan:"5"}},[e._v("File")]),e._v(" "),r("td",[e._v("File name")]),e._v(" "),r("td",[e._v("Full name of the file.")])]),e._v(" "),r("tr",[r("td",[e._v("Last modified")]),e._v(" "),r("td",[e._v("Last modified timestamp of the file.")])]),e._v(" "),r("tr",[r("td",[e._v("E tag")]),e._v(" "),r("td",[e._v("The hash of the file object, generated by Amazon S3.")])]),e._v(" "),r("tr",[r("td",[e._v("Size")]),e._v(" "),r("td",[e._v("The file size in bytes.")])]),e._v(" "),r("tr",[r("td",[e._v("Storage class")]),e._v(" "),r("td",[r("a",{attrs:{href:"https://aws.amazon.com/s3/storage-classes/"}},[e._v("Storage class")]),e._v(" of this file object. Usually "),r("b",[e._v("S3 Standard")]),e._v(".")])]),e._v(" "),r("tr",[r("td",{attrs:{rowspan:"3"}},[e._v("CSV rows")]),e._v(" "),r("td",[e._v("Row number")]),e._v(" "),r("td",[e._v("The number of this CSV row.")])]),e._v(" "),r("tr",[r("td",[e._v("CSV columns")]),e._v(" "),r("td",[e._v("Contains all column values in this CSV row. You can use the nested datapills to map each column values.")])]),e._v(" "),r("tr",[r("td",[e._v("List size")]),e._v(" "),r("td",[e._v("Number of rows in this "),r("b",[e._v("CSV rows")]),e._v(" list.")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);