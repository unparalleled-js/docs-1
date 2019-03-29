---
title: Tools
date: 2018-12-18 18:00:00 Z
---

# Tools

Workato Tools help perform three main functions: Build recipes, connect apps and collaborate and manage recipes. Access the full list of tools using the navigation bar on the top of the screen and click on 'All tools'.

![Navigate to tools](/assets/images/features/tools/nav_to_tools.png)
*Find all tools on the navigation bar*

## Building recipes

Tools for building recipes are often associated with connectors, triggers and actions that users can select while building recipes. For example, setting up a lookup table in tools will allow the use of actions in the recipe which adds, removes or updates the lookup table using the connector in a recipe.

![Using lookup table](/assets/images/features/tools/lookup.png)
*Using the add row action in a recipe creates new rows in an existing lookup table*

These tools aid in making recipes more powerful with human approval capabilities as well as allow data to be reused across recipes in the same account.

The following are classified under this category:
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[Properties](features/account-properties.md)</td>
      <td>
        Define account wide properties that you can use as variables in your recipes. [Click here to find out more.](features/account-properties.md)
      </td>
    </tr>
    <tr>
      <td>[Lookup table](features/lookup-tables.md)</td>
      <td>
        Define lookup tables that your recipes can easily lookup to get additional information. [Click here to find out more.](features/lookup-tables.md)
      </td>
    </tr>
    <tr>
      <td>[People Task](workflow.md)</td>
      <td>
        Add steps into your recipes that require a designated human to approve before it can continue. [Click here to find out more.](workflow.md)
      </td>
    </tr>
    <tr>
      <td>[Message templates](features/message-template.md)</td>
      <td>
        Create static message templates on HTML/text/Json/XML that can be used in multiple recipes. [Click here to find out more.](features/message-template.md)
      </td>
    </tr>
    <tr>
      <td>[Common data models](features/common-data-model.md)</td>
      <td>
        Create schemas for objects such as Customers that can be used in multiple recipes. [Click here to find out more.](features/common-data-model.md)
      </td>
    </tr>
    <tr>
      <td>[Pub/Sub](connectors/pubsub.md)</td>
      <td>
        Allow recipes to subscribe to events published by other recipes reducing dependencies and trickle down effects of change between recipes. [Click here to find out more.](connectors/pubsub.md)
      </td>
    </tr>
    <tr>
      <td>[Workbot for Slack](workbot/workbot.md)</td>
      <td>
        Create a chatbot on slack that can interact with users to accomplish complex workflows. [Click here to find out more.](workbot/workbot.md)
      </td>
    </tr>
    <tr>
      <td>[Workbot for Microsoft Teams](workbot-for-teams/workbot.md)</td>
      <td>
        Create a chatbot on Microsoft Teams that can interact with users to accomplish complex workflows.  [Click here to find out more.](workbot-for-teams/workbot.md)
      </td>
    </tr>        
  </tbody>
</table>


## Connect apps

Tools for connecting apps allow the user to add and manage their custom applications, on-prem applications and API endpoints.

The following are classified under this category:
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[Connector SDK](developing-connectors/sdk.md)</td>
      <td>
        Build robust custom application connectors on Workato's Software Development Kit to connect to your any application we currently don't support. [Click here to find out more.](developing-connectors/sdk.md)
      </td>
    </tr>
    <tr>
      <td>[On-prem agent](on-prem.md)</td>
      <td>
        Connect easily and securely to applications such as databases hidden behind firewalls. [Click here to find out more.](on-prem.md)
      </td>
    </tr>
    <tr>
      <td>[API management](api-management.md)</td>
      <td>
        Turn any recipe or collection of recipes on Workato into an API endpoint that can be exposed to the public. [Click here to find out more.](api-management.md)
      </td>
    </tr>
  </tbody>
</table>

## Collaborate and manage recipes

The tools in this section allow the collaboration across teams, the management of team roles and sharing of recipes and dependencies between team accounts.

The following are classified under this category:

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[Recipe lifecycle management](recipe-development-lifecycle.md)</td>
      <td>
        Plan, develop, test and deploy new workflows on Workato. [Click here to find out more.](recipe-development-lifecycle.md)
      </td>
    </tr>
    <tr>
      <td>[Teams](user-accounts-and-teams/team-collaboration.md)</td>
      <td>
         Collaborate with multiple users to build recipes in a share workspace. [Click here to find out more.](user-accounts-and-teams/team-collaboration.md)
      </td>
    </tr>
  </tbody>
</table>
