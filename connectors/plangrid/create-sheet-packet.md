---
title: Workato connectors - Plangrid upload document to project action
date: 2019-09-09 12:00:00 Z
---

# Create a sheet packet
This action generates a PDF sheet packet of the specified sheets in a PlanGrid project. Generating a sheet packet is a two-step process that involves:
Generate the sheet packet with a list of provided sheet IDs. This is an asynchronous process that will depend on the number of sheet IDs specified.
Retrieve the sheet packet file contents once it has been generated.


## How to use this action
First, we must first identify which sheets we want to include in the sheet packet. Typically this is for any drawings with new or updated annotations so we can start with the New or updated annotation trigger as it will provide a sheet ID for us to use. Depending on your use case, you can add this sheet ID to a list prior to generating a sheet packet.

![Use new/updated annotation](/assets/images/plangrid/new-updated-annotation.png)
*Use new/updated annotation*

Next, use the Create sheet packet action to generate a sheet packet. For this example, we will use the Sheet ID from the trigger. Otherwise, we can also use a comma separated list of sheet IDs for the sheet packet.

![Create sheet packet action](/assets/images/plangrid/create-sheet-packet.png)

Because this is an asynchronous action, we want to check the status to make sure it is completed before we download the sheet packet.

![Check status of creation](/assets/images/plangrid/check-status.png)
*Check status of creation*

We recommend using a recursive recipe (a Callable recipe that calls itself) to check if the status is complete to ensure you wait the proper amount of time prior to downloading the sheet packet. Below is an example of such a recipe:

![Use a recursive recipe](/assets/images/plangrid/recursive-recipe.png)
*Use a recursive recipe*

Within the callable recipe, you will use the Get sheet packet action to get the latest status on the sheet packet:

![Use the get sheet packet in project action to check the status of the sheet packet](/assets/images/plangrid/get-latest-status-on-sheet-packet.png)
*Use the get sheet packet in project action to check the status of the sheet packet*

If the output status is equals to complete, then you can return a response and stop the recipe. Otherwise, call the recipe again.
Back in the original recipe, your steps may look like the following:

![Recipe waits for recursive recipe to finally return a response](/assets/images/plangrid/wait-for-recursive-response.png)
*Recipe waits for recursive recipe to finally return a response*

To retrieve the sheet packet file contents, use the Workato Download file action with the URL from the previous Create sheet packet action.

![Recipe waits for recursive recipe to finally return a response](/assets/images/plangrid/download-file-from-url.png)
*Retrieve sheet packet file contents using download file from url action on Workato*
