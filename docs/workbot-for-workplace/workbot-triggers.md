---
title: Workbot for Workplace triggers
date: 2019-10-25 00:00:00 Z
---

# Workbot command trigger
Workbot commands allow you to trigger recipes from Workplace. These recipes can then perform actions in your apps (e.g. creating new ServiceNow tickets, listing Salesforce opportunities).

This means you can from perform actions in your apps from within Workplace!

![Command example](~@img/workbot-for-workplace/workbot-command-example.png)
*Sending a 'new_issue' command with additional parameters in Workplace, then receiving a reply*

When a command is sent to Workbot in Workplace, it will trigger the Workbot recipe and execute its actions.

![Command recipe](~@img/workbot-for-workplace/command-recipes.png)
*A Workbot recipe with a Workbot command trigger*

## Configuring the command
![New command](~@img/workbot-for-workplace/new-command.png)
*Example 'new_issue' command*

### Input fields
The table below lists the input fields in the trigger and what they do.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Input field</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="#command-name">Command name</a></td>
            <td>
              Name of the command.
            </td>
        </tr>
        <tr>
            <td><a href="#parameters">Parameters</a></td>
            <td>
              Parameter can store additional data that can be used as datapills in follow-up recipe actions.
            </td>
        </tr>
        <tr>
            <td>Command hint</td>
            <td>
            Display this instead of command name in response to <b>help</b> messages.
            </td>
        </tr>
        <tr>
            <td>Hidden command</td>
            <td>
              If <b>Yes</b>, command will not show up as a command in <b>help</b> messages. Defaults to <b>No</b>.
            </td>
        </tr>
    </tbody>
</table>

#### Command name
Workbot commands can invoke their recipes by:
1.  Sending the command name in a direct message to Workbot, e.g. **new_issue**
2. Sending the command name in a channel and tagging Workbot, e.g. **@workbot new_issue**
3. Submitting a command button with the command name configured:
![Command name in button](~@img/workbot-for-workplace/command-button.png)<br>*A button can be configured to invoke another Workbot recipe*<br>
4. Submitting a quick reply button with the command name configured:
![Command name in button](~@img/workbot-for-workplace/command-quick-reply-button.png)<br>*Quick reply button configured to invoke another Workbot recipe*<br>
![Command name in button example](~@img/workbot-for-workplace/button-click.png)
*The 'Next' button invokes the 'new_issue' command and executes the recipe when submitted*

#### Parameters
Commands can also prompt users for additional parameters. For example, to create a new Github ticket, the user should provide the `title` and `description` of the incident.

In this case, you can add 2 parameters; `title` & `description`. When the command is invoked, Workbot will prompt the user for each parameter.

![Collecting parameters](~@img/workbot-for-workplace/collecting-parameters.png)
*Workbot can ask users for info if you specify additional parameters in your command*

Users can also skip the prompts by supplying the parameters together with the command.

![Command with in-line parameters](~@img/workbot-for-workplace/workbot-command-example.png)
*Sending a 'new_issue' command with additional parameters Title and Description*

##### Defining parameters
![Adding parameters](~@img/workbot-for-workplace/adding-parameters.png)
*2 parameters added to command*

To add a parameter, click on the **+Add parameter** button under the **Parameters** section of a Workbot command trigger.

![Adding a new parameter](~@img/workbot-for-workplace/adding-a-parameter.png)
*Adding a new parameter*

Configure the parameter by specfying the parameter name, the data type (typically string) and so on.

![Parameter form empty](~@img/workbot-for-workplace/configuring-a-parameter.png)
*Configuring a parameter*

The table below describes in further detail what each parameter configuration field does.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Input field</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Name</td>
            <td>
              Name of the parameter. This is the name you use to reference the parameter in:<br>
              <ul>
                <li>
                  In-line commands</li><br><img src="~@img/workbot-for-workplace/workbot-command-example.png"></img>
                </li>
                <li>
                  Buttons<br><img src="~@img/workbot-for-workplace/buttons.png"></img>
                </li>
                <li>
                  Quick reply buttons<br><img src="~@img/workbot-for-workplace/quick-reply-buttons.png"></img>
                </li>
              </ul>
            </td>
        </tr>
        <tr>
            <td>Data type</td>
            <td>
              Data type of the parameter. Currently only supports <code>string</code>.
            </td>
        </tr>
        <tr>
            <td>Optional?</td>
            <td>
              If set to <b>Yes</b>, users can skip this input. If set to <b>No</b>, users are required to provide this input.
            </td>
        </tr>
        <tr>
            <td>Options</td>
            <td>
              If the display name and the value are different, separate the two by a colon, e.g. <b>High:1,Medium:2,Low:3</b>.
            </td>
        </tr>
    </tbody>
</table>

##### Advanced methods to pass parameter values
Parameter values can also be passed by buttons and quick reply buttons when they invoke a downstream Workbot command recipe. Typically, you use parameters to pass additional context for downstream Workbot recipe to use.

![Command name in button](~@img/workbot-for-workplace/command-button.png)
*A 'Duplicate incident' button which invokes the 'new_issue' recipe, passing it context about the incident to be duplicated.*

![Command name in quick reply button](~@img/workbot-for-workplace/command-quick-reply-button.png)
*A 'Duplicate incident' quick reply button which invokes the 'new_issue' recipe, passing it context about the incident to be duplicated.*

# Learn more
- [Using Workbot for Workplace](/workbot-for-workplace/using-workbot-for-workplace.md)
- [Workbot actions](/workbot-for-workplace/workbot-actions.md)
