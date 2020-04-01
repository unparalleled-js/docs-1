(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1652:function(e,t,a){e.exports=a.p+"assets/img/name-manifest.590afe3d.png"},1653:function(e,t,a){e.exports=a.p+"assets/img/manifest.c44e92bb.png"},1654:function(e,t,a){e.exports=a.p+"assets/img/dependent-asset-not-found.44cce8de.png"},1655:function(e,t,a){e.exports=a.p+"assets/img/deselect-object.032e7504.gif"},1656:function(e,t,a){e.exports=a.p+"assets/img/lookup-properties.91a7abd2.png"},1657:function(e,t,a){e.exports=a.p+"assets/img/download-package.1bbe7999.gif"},1658:function(e,t,a){e.exports=a.p+"assets/img/export-history.a2ec15e1.png"},1659:function(e,t,a){e.exports=a.p+"assets/img/missing-connection.afd4e346.png"},1660:function(e,t,a){e.exports=a.p+"assets/img/new-changed-asset.a3c3a158.png"},2636:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"export-packaging-recipes-and-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#export-packaging-recipes-and-dependencies"}},[e._v("#")]),e._v(" Export: Packaging recipes and dependencies")]),e._v(" "),s("p",[e._v("Exporting packages allows users to create a distributable file that contains related recipes and their dependencies.")]),e._v(" "),s("p",[e._v("The export process in recipe lifecycle management typically happens after the development of a set of recipes and their related assets are completed or when a new change in your business process requires the recipes to be edited. In Workato, recipes and assets are exported as packages in the form of a zip file. The file contains json file representations of every one of the exported assets.")]),e._v(" "),s("p",[e._v("Packages are used to:")]),e._v(" "),s("ul",[s("li",[e._v("Move recipes across environments (development -> test -> production)")]),e._v(" "),s("li",[e._v("Store recipes in a traditional version control system such as git.")])]),e._v(" "),s("p",[e._v("After the export process is complete, you can "),s("router-link",{attrs:{to:"/recipe-development-lifecycle/import.html"}},[e._v("import")]),e._v(" the package in another Workato instance to apply the changes made.")],1),e._v(" "),s("h2",{attrs:{id:"contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),s("p",[e._v("This section covers how Workato recipes and dependencies can be converted to shareable assets known as packages. If you have already exported a package, you may move on to our other sections:")]),e._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/recipe-development-lifecycle/rdlc-guide-planning.html"}},[e._v("Planning for lifecycle management")])],1),e._v(" "),s("li",[s("strong",[e._v("Exporting: Packaging recipes and dependencies")]),e._v(" "),s("em",[e._v("(current)")])]),e._v(" "),s("li",[s("router-link",{attrs:{to:"/recipe-development-lifecycle/import.html"}},[e._v("Importing: Deployment")])],1),e._v(" "),s("li",[s("router-link",{attrs:{to:"/recipe-development-lifecycle/rdlc-guide-source-control.html"}},[e._v("Working with external source control systems")])],1)]),e._v(" "),s("h2",{attrs:{id:"export-manifests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#export-manifests"}},[e._v("#")]),e._v(" Export manifests")]),e._v(" "),s("p",[e._v("To begin exporting a package, start by defining an export manifest. A manifest is a record of all the selected recipes and dependencies that users can use for export and re-export. The manifest can also be edited after the creation and first export.")]),e._v(" "),s("p",[e._v("Reuse a defined manifest if the recipes have been iterated on and the same set of objects have to be exported.")]),e._v(" "),s("p",[e._v("Edit the manifest if there are changes to the folder marked for export - the addition of new assets or the removal of redundant assets. You can also edit the manifest if you want to exclude some recipes from an export.")]),e._v(" "),s("h2",{attrs:{id:"create-a-manifest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-a-manifest"}},[e._v("#")]),e._v(" Create a manifest")]),e._v(" "),s("p",[e._v("Example of the manifest to be created:")]),e._v(" "),s("ul",[s("li",[e._v("Only 10 out of 30 recipes in the ‘Marketing’ folder need to be exported")]),e._v(" "),s("li",[e._v("Exclude exporting the connections the 10 recipes use")]),e._v(" "),s("li",[e._v("Include only 2 of the lookup tables related to those 10 recipes")])]),e._v(" "),s("p",[e._v("To begin, give the manifest a name so users can identify the content and select the source folder.\n"),s("DocImage",{attrs:{src:a(1652),alt:"RLM in tools gif",width:"2452",height:"1494"}}),e._v(" "),s("em",[e._v("Begin by providing the manifest name and source folder")])],1),e._v(" "),s("p",[e._v("The wizard will then display the recipes in the folder and all the dependencies related to those recipes. All assets within its subfolders are also displayed here. The assets in the folder and its sub-folders are selected by default.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1653),alt:"Marketing manifest",width:"2880",height:"3071"}}),e._v(" "),s("em",[e._v("Example manifest with recipes and dependencies")])],1),e._v(" "),s("p",[e._v("On this screen, select/deselect the assets that you wish to export. All associated connections, custom connectors, lookup tables and callable recipes will also be shown on this page along with all account properties in the Workato account.")]),e._v(" "),s("p",[e._v("Note that users cannot add assets that are in "),s("strong",[e._v("different folders")]),e._v(" to a single manifest. If there are recipes that "),s("router-link",{attrs:{to:"/features/callable-recipes.html"}},[e._v("call other recipes")]),e._v(", please put all the related recipes in one folder.")],1),e._v(" "),s("p",[e._v("When assets are not in the folder, the wizard will display a warning (as shown below). In this case, if the connection needs to be included as a part of the package, you should go to the App Connections page and move the connection to the right folder. Connections in the Home folder are shared connections that will be available for export regardless of the chosen folder. Orange warning messages can be safely ignored if you wish to proceed with the export without dependent assets.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1654),alt:"Connection in diff folder",width:"1930",height:"392"}}),e._v(" "),s("em",[e._v("A warning will appear if the connection is in a different folder")])],1),e._v(" "),s("p",[e._v("As dependencies related to the asset are deselected, a similar orange warning will appear on the recipe to inform the user that a dependency will be missing from the final exported folder. By expanding each recipe line, users can re-select the asset with a click of a button. If the dependency is unnecessary for export, this warning can be "),s("strong",[e._v("safely ignored")]),e._v(".")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1655),alt:"Connection in diff folder",width:"962",height:"348"}}),e._v(" "),s("em",[e._v("As objects are deselected, warnings appear")])],1),e._v(" "),s("p",[e._v("If connections are shared across accounts, we recommend that the connections are placed in the 'Home' folder so they can be exported regardless of the selected folder.")]),e._v(" "),s("p",[e._v('Choose to export the data in lookup tables by individual lookup tables. On the right of the lookup tables, select "Include data" or "Ignore data". This option default to "Ignore data", which exports the table with the headers only. Choose Include data" to export the data in each row in the package.')]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1656),alt:"Connection in diff folder",width:"1908",height:"482"}}),e._v(" "),s("em",[e._v('"Ignore data" or "Include data" on each lookup table')])],1),e._v(" "),s("p",[e._v("Finally, save the manifest. The same configuration of recipes and assets can now be used during multiple exports. To reuse the existing manifest, find the manifest in the main export tab and click on it to access its content.")]),e._v(" "),s("h2",{attrs:{id:"export-a-manifest-as-a-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#export-a-manifest-as-a-package"}},[e._v("#")]),e._v(" Export a manifest as a package")]),e._v(" "),s("p",[e._v("After creating a manifest, export the manifest as a package by clicking on the ‘Build and export package’ button on the top right of the screen.")]),e._v(" "),s("p",[e._v("Clicking on the button will begin the process of creating a .zip file package and open a pop-up with the export status. Once the .zip file completes building, you can download it.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1657),alt:"Download package",width:"1376",height:"674"}}),e._v(" "),s("em",[e._v("The export process produces a zip file for download")])],1),e._v(" "),s("p",[e._v("All exports are saved in the ‘Export history’ tab of the manifest. Click the ‘Download zip file’ button on the last column in the history table to re-download that version of the package. The version of the package is saved at the point of export. The package will persist for as long as the "),s("router-link",{attrs:{to:"/data-retention.html"}},[e._v("data retention")]),e._v(" period on that account. Check the "),s("a",{attrs:{href:"https://www.workato.com/users/current/edit#data_retention",target:"_blank",rel:"noopener noreferrer"}},[e._v("Account settings"),s("OutboundLink")],1),e._v(" tab to find the data retention period of your account.")],1),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1658),alt:"Export history",width:"2700",height:"1138"}}),e._v(" "),s("em",[e._v("All past exports of this manifest is saved in the export history tab")])],1),e._v(" "),s("h2",{attrs:{id:"returning-to-an-existing-manifest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returning-to-an-existing-manifest"}},[e._v("#")]),e._v(" Returning to an existing manifest")]),e._v(" "),s("p",[e._v("After the continued development of recipes in the same folder, users may want to return to an existing manifest to re-export the content. During that time, one or more of the following may have occurred:")]),e._v(" "),s("ul",[s("li",[e._v("Assets were deleted")]),e._v(" "),s("li",[e._v("Assets were moved to a different folder/sub-folder")]),e._v(" "),s("li",[e._v("Assets were renamed")]),e._v(" "),s("li",[e._v("Assets were edited")]),e._v(" "),s("li",[e._v("Assets were added")])]),e._v(" "),s("h3",{attrs:{id:"deleted-moved-renamed-assets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deleted-moved-renamed-assets"}},[e._v("#")]),e._v(" Deleted, moved, renamed assets")]),e._v(" "),s("p",[e._v("To maintain cross-compatibility and synchronization across Workato instances, a series of automatic checks will take place before a manifest can be exported. If assets were deleted, moved or renamed, the manifest structure will have changed from its previous configuration and will thus be highlighted to the user.")]),e._v(" "),s("p",[e._v("To continue with the export process, the user must review the manifest and "),s("strong",[e._v("remove deleted files")]),e._v(" or accept changes.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1659),alt:"Connection in diff folder",width:"1926",height:"574"}}),e._v(" "),s("em",[e._v("As objects are deselected, warnings appear")])],1),e._v(" "),s("h3",{attrs:{id:"edited-assets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#edited-assets"}},[e._v("#")]),e._v(" Edited assets")]),e._v(" "),s("p",[e._v("If assets were edited (eg. recipe action/mapping changes, additions to a lookup table), they will be highlighted as changes in the manifest with a blue tag.")]),e._v(" "),s("p",[e._v("All edits that do not affect the manifest structure can be ignored and the user can proceed to build the package by clicking on ‘Ignore and build package’. The package will be downloaded with the same manifest content with the latest changes.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1660),alt:"Connection in diff folder",width:"1692",height:"372"}}),e._v(" "),s("em",[e._v("Example of an edited recipe and a new recipe")])],1),e._v(" "),s("h3",{attrs:{id:"new-assets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-assets"}},[e._v("#")]),e._v(" New assets")]),e._v(" "),s("p",[e._v("If a new recipe or dependency is added to the folder, it will be highlighted with a green (+) sign as shown in the image above. To add this new object to the manifest, select the checkbox and save the manifest. The new additions will be saved as the latest manifest version.")])])}),[],!1,null,null,null);t.default=n.exports}}]);