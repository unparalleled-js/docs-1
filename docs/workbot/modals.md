---
title: Modals
date: 2020-03-19 00:00:00 Z
---

# Block kit in modals
Modals allow you to build rich, interactive and dynamic views that collect information from users in a structured manner.
![Modal example](~@img/workbot/workbot-blockkit/pretty-modal.png)

Modals views are built using blocks.
A modal view has a title, the view (comprised of blocks), and submission/close buttons.
As mentioned, you can use blocks to build views. There are modal-only blocks called input blocks. These are:
- Singleline input
- Multiline input
- Select menu input
- Datepicker input
- Checkboxes input

# Interactive components vs input blocks
Input blocks work differently from the interactive components from other blocks.

While buttons, menus, and other interactive components invoke commands **when clicked**, input blocks only invoke commands **when a view is submitted**. For example, a user is free to choose from 'Approve' or 'Reject' – the value is only locked in once he submits the modal by clicking the submit button.

![Example select input](~@img/workbot/workbot-blockkit/example-select-input.png)

If a view does not have any input blocks, no submit button/close button needs to be defined. If you do have them, then you **must** define submit/close buttons.

# Modal stack
You can stack up to 3 views. Users see the top-most view. This view is called the active view.

![Modal stack with 3 views](~@img/workbot/workbot-blockkit/modal-stack.png)

Opening a modal opens the root view. Pushing a modal view pushes a new view on top of any existing views.

Each view has an associated ID. You'll need this view ID if you want to update an existing view.s

# Working with modals
Modals can be opened using:
- buttons,
- menus,
- overflow
- select menus,
- datepickers,
- radio buttons,
- shortcuts,
- message actions,
- slash commands,
- modal view submissions

The components above invoke a bot command, and generate a Trigger ID. The New command trigger can then pick it up. Trigger IDs are mandatory for modals – opening, updating and pushing modal views requires this trigger ID.

The New command trigger datatree contains a **Modal** object which stores modal-related context for you to perform modal actions.
| Modal datapills  | Description                                                                                                                                                                                                                            |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| View ID          | View ID of view from which command was invoked, a.k.a. the active view. If the command was invoked from a view submission, then this view ID cannot be used for updating/pushing views as the view has already closed on submission. If only 1 view is active, then this view ID will be identical to the root view ID.                                                                                                                                                                                         |
| Root View ID     | View ID of the root view.                                                                                                                                                                                                     |
| Previous View ID | View ID of the view beneath the current view                                                                                                                                                                                             |
| Private metadata | Private data you can optionally use to pass to downstream recipes. This field is encrypted and hidden from users.                                                                                                                      |
| Hash             | A unique value you can optionally use when updating modals. When provided, the hash is validated such that only the most recent view is updated, ensuring the correct view is being updated when updates are happening asynchronously. |

# Modal view input
The following table holds additional information about the **Modal** object and the data it correspondingly holds.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Group</th>
            <th>Input</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td>Trigger ID (required)</td>
            <td>
                Modal views can only be opened by interactive components (like buttons & menus), modal submissions, message actions, shortcuts, and slash commands. When users interact with or use these features, a trigger ID is generated. You can grab these from the New command trigger dataree under the Modals object.
            </td>
        </tr>
            <tr>
                <td></td>
                <td>View ID (optional)</td>
                <td>
                    To open a brand new modal view, leave this blank. To update an existing modal, specify the view ID of the view you want to update.
                </td>
            </tr>
        <tr>
            <td rowspan="10">View</td>
            <td>Title of modal</td>
            <td>Title of the modal view. Up to 24 characters only.</td>
        </tr>
        <tr>
            <td>Blocks</td>
            <td>An array of blocks you can stack and rearrange.</td>
        </tr>
        <tr>
            <td>Submit command</td>
            <td>
                Command to invoke when users do a modal submission.
            </td>
        </tr>
        <tr>
            <td>Hidden parameters</td>
            <td>
                When users do a modal submission, you may want to pass some hidden parameters (e.g. the user ID, opportunity_id) so that the downstream recipe has context to work with. You'll need to define these parameters in the downstream recipe to use them there. <br><br>The parameter names in both upstream & downstream recipes must match.
            </td>
        </tr>
        <tr>
            <td>Submit button label</td>
            <td>
                Label of the submit button. Up to 24 characters only.
            </td>
        </tr>
        <tr>
            <td>Close button label</td>
            <td>
                Label of the submit button. Up to 24 characters only.
            </td>
        </tr>
        <tr>
            <td>Callback ID</td>
            <td>
                For advanced users. Used to reference the view submission event in downstream recipes. Max length of 255 characters.
            </td>
        </tr>
        <tr>
            <td>Private metadata</td>
            <td>
                For advanced users. Used to pass sensitive data. This field is encrypted and hidden to users. Max length of 3000 characters.
            </td>
        </tr>
        <tr>
            <td>Clear on close</td>
            <td>
                Clicking on the close button will clear all views in a modal and close it. Defaults to false.
            </td>
        </tr>
        <tr>
            <td>Notify on close</td>
            <td>
                Sends a view_closed event when a user clicks the close button. Defaults to false. Use the New event trigger to listen to this event.
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                Hash
            </td>
            <td>A unique value you can optionally use when updating modals. When provided, the hash is validated such that only the most recent view is updated, ensuring the correct view is being updated when updates are happening asynchronously.</td>
        </tr>
    </tbody>
</table>

# Open/update modal view
You can open or update modals using the same action: Open/update modal view.

![Open/update modal view](~@img/workbot/workbot-blockkit/open-update-modal-view.png)

Once a modal view is open, you can choose to update the active view, or push a new view on top of the existing active view.

To open a modal, just use Trigger ID.

To update a modal, use both Trigger ID and View ID (of the view you want to update). Generally speaking, commands (from interactive components) invoked in modal views typically *update* the active view (View ID in the Modal datatree), while modal submissions usually update the root view (Root View ID in the Modal datatree).

::: warning
When a view is submitted, it closes by default. Be careful not to update a closed modal.
:::

# Push modal view
To push a modal view, use Trigger ID (no View ID is required). This pushes a modal on top of an existing view.

::: warning
When a view is submitted, it closes by default. Be careful not to push a modal view on top of a closed modal.
:::
