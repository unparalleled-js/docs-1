---
title: Developer program
date: 2019-05-08 17:00:00 Z
---
# Using the Workato SDK Platform
Workato's SDK platform has numerous features that enable you to build, test, develop and share your custom connector. In this article, we will be going through the basic functionalities of the platform and how you can leverage on different functionalities to make your connector development process smoother.  

## Before you begin
### Navigating to the SDK platform homepage
In the main Workato recipes page, head over to the tools tab and click on connector SDK. This will take you to your personal registry of custom connectors - a page where you can see all custom connectors that you have built or cloned from others. If you're signed in, [click here](https://www.workato.com/custom_adapters) to be taken to that page.

![Navigating to SDK](/assets/images/sdk/Navigating-to-SDK.png)
*Located in the top navigation bar in Workato*

### Creating a new custom connectors
In the top right corner of the page, you'll see a button to create a new custom connector. Clicking this will take you to your new custom connector's home page. This page will be where you can begin writing custom connector code as well as find useful information about your connector such as the share links and version history.

### Changing your connector title, description and logo
When first creating your custom connector, it is given a default title, logo and empty description. You should populate these fields first to make it easier to search for your customer connector when looking through your personal registry in the future.

Custom connector title changes can be done by clicking on the pencil icon next to the customer connector and editing the name in the box that appears. Saving your changes can be done by clicking the green tick when you are done. Clear any unsaved changes by clicking the grey cross instead.

Custom connector logo changes can be done by clicking on the logo image. This should prompt your browser to open up a system upload window for you to select the logo you would want to upload. This logo will not only represent your custom connector in your personal registry but also show up as the logo when using your custom connector in recipes.

Changing your description can be done by navigating to the `Settings` tab in your custom connector home page. This tab will contain information including a text input field for a description about your connector. This description will let others know more about your connector when they are deciding to clone your connector.

## Introduction to version control
Version control in the Workato SDK platform can be done directly through the UI. When you first enter a custom connector homepage, you are greeted with the source code of the latest version of the custom connector inside the code editor. This represents the latest source code that you or anyone with access in your workspace has worked on and committed into a version.

Since the latest version of your custom connector may not be a version which you want your active recipes to be working off, you also have the ability to select a certain version of a custom connector in Workato to deploy and have custom connectors running off them. That way, you can have a stable version of your custom connector deployed and continue on developing before deploying the next version which you believe is stable.

>You can always check the latest deployed version of a custom connector in the top right corner of a custom connector's homepage.

### Editing the latest version
The Workato SDK platform only allows you to edit the latest version of a custom connector's source code. By making changes directly in the code editor in "Source Code" tab, you are effectively making edits to the latest version. These changes will not be saved until you explicitly press the save changes button in the top left corner of the page or start debugging through the debugger console. When these changes are saved, the new custom connector source code is saved as a new latest version.

### Deploying the latest version
Workato only allows you to deploy the latest version as well. When you deploy a new version of a custom connector, this means that each recipe in your Workato account using this custom connector will begin using this version from the next job onwards. Be sure to do your relevant tests using the debugger console to make sure that your code is reliable before deploying it.

Workato actively searches for any errors in your code and prevents you from deploying code with errors. This is to prevent any of your recipes from breaking. You'll be informed of the line of code which contains the error so you can jump to it and fix it.

>When you first create your connector, you need to deploy a version before you can search for it while building a recipe.

### Reverting to an old version
In situations where you want to revert to an older version of your custom connector, you can easily go to the "Versions" tab of the custom connector homepage to view a table of versions. Clicking on any version will bring you to a page which contains a snapshot of the source code at that point in time as well as a snapshot of the triggers and actions based on that source code.

![View old version](/assets/images/sdk/viewing-old-version.gif)
*Click on a specific version to view details about it*

When viewing a specific version, you are given the ability to restore your custom connector to this version by clicking "Restore this version" in the top right of the page. This restores the version by making a copy of that version's source code as a new latest version. You'll be able to begin editing from there or immediately deploy this version.

## Using the debugger console
Below the code editor on the "Source code" tab, you'll see our debugger console which allows you to test various portions of your custom connector before deploying it.

![Debugger console](/assets/images/sdk/debugger-console.png)
*Debugger console*

This debugger console allows you to run tests on the latest version of your custom connector code. Any unsaved changes that are currently in the code editor will result in the custom connector creating a new latest version before running any tests are executed. There will be a notification to tell you when this is the case.

In cases when there is an error in your latest version, the debugger console will be hidden instead. Fix the error in the line of code stated so you can start testing again.

![Debugger console with error](/assets/images/sdk/debugger-console-with-error.png)
*Debugger console when there is a syntax error*

### Testing a connection
When using the debugger console, the first thing you need to do is establish a successful connection. After defining the connection inside the source code, you'll be test this connection immediately in the connection tab of the debugger console.

![Establishing connection](/assets/images/sdk/establishing-connection.gif)
*Successfully establishing a connection*

When the connection you make is successful, the debugger will immediately display a "Connection success" message to let you know. This connection you just established will be used as the connection for any tests that you execute in the debugger console following this.

>You can't test actions or triggers until a successful connection is made. Without a successful connection, HTTP requests sent during triggers and actions would not be able to actively authenticate itself with the API endpoint.

Find out more about the configuring a connection in our SDK and what connection types we support. [Learn more](/developing-connectors/sdk-2/authentication.md)

### Testing actions and triggers
After establishing a successful connection, you'll be able to test any actions and triggers you have defined using the debugger console.

![Testing actions or triggers](/assets/images/sdk/testing-actions-triggers.png)
*Open up the dropdowns for triggers or actions to see the full list available in your latest version*

When attempting to test and action or trigger, you'll need to define the input parameters expected. This is done via a popup when pressing the "Test" button next to any action or trigger. When testing actions, we immediately populate the JSON with skeleton to help you along. When you run the action or trigger, it is executed based on the latest version in the code editor and the output is shown in the console to the right of the debugger.

![Input popup](/assets/images/sdk/test-input-popup.png)
*Action popup during testing*

![Console tab](/assets/images/sdk/console-output-tab.png)
*Output of the execute block shown in the console*

Besides the input and outputs of the action or trigger, you'll also be able to see the network activity triggered such as any API requests sent. The console tab shows the result of any `puts` ruby methods that were executed during the test. This is especially useful for debugging and shows even if the test was unsuccessful due to a logic error in the action or trigger.

## Sharing your connector
After you've built and deployed your connector, you'll be able to share it with other Workato users using your share link located in the "Settings" tab. When a user clicks on your share link, they'll be brought to an install page where they can view information about the latest deployed version of your connector including descriptions, source code and the actions and triggers present.

![Input popup](/assets/images/sdk/settings-page-share-link.png)
*Share link in the settings page*

![Install page](/assets/images/sdk/install-page.png)
*Install page for custom connector*

When users have reviewed your custom connector, they can choose to install it by clicking the "Install this connector" button in the top right corner. This will create an identical copy of this latest version in their own Workato account labeled as version 1.

### Sharing new deployed versions with others who have already cloned your connector
The relationship between the original parent connector and its child cloned connector is still maintained. When a new version is deployed in the parent connector, each child connector receives a notification that an update is available.

![Install page](/assets/images/sdk/update-notification.png)
*Notification shows up when there is an update for your child connector*

When a child custom connector is updated, a new latest version is created. This version is identical to the latest deployed version of the parent connector. At this stage, you'll be able to view the source code, the new actions or triggers and decide whether you'd like to deploy this new version. In cases where you felt this update was unnecessary, you'd be able to revert to your own previous version in the same way you would restore an old version.

## Exporting packages with custom connectors
[Recipe lifecycle management](/recipe-development-lifecycle.md) is a tool used to export and import entire folders of recipes from a sandbox environment to a production environment in Workato. Often, recipes that you want to export from one account and import into another contain custom connectors which you have built or cloned. When exporting these recipes, Workato helps to export any custom connectors in the manifests as well.

### Exporting a manifest
When exporting a manifest, the **latest deployed version** of your custom connector that is used in recipes is exported as well. [Find out more about exporting here](/recipe-development-lifecycle/export.md)

### Importing a manifest
When importing a manifest, Workato first checks to see if you have an existing copy of the custom connector. If no existing copy is found, a new one is created with the latest deployed version as version 1. If an existing copy is found, a new latest version is created instead. In both cases, importing a manifest will immediately deploy the latest version of the custom connector for you since the recipes you are importing will be using that latest version. [Find out more about importing here](/recipe-development-lifecycle/import.md)

>Be sure to explore any dependencies that your existing recipes in your production account might have when importing a manifest that overwrites a connector.

## Deleting a custom connector
A Workato account can have any number of custom connectors in its personal registry. However, in the case that you do need to delete a custom connector, you'll be prevented from doing so if there are any active running recipes using it. You'll need to stop or edit the recipes listed in order to delete this connector.

![Delete prevention popup](/assets/images/sdk/prevent-delete-popup.png)
*Stop or edit these recipes to delete a custom connector*

You'll be reminded again of any stopped recipes that will be affected by the deletion of this custom connector before you are able to delete it. Any of this custom connector's cloned children will not be deleted.

![Delete popup warning](/assets/images/sdk/delete-popup-warning.png)
*Once you delete a custom connector, there is no recovering it*
