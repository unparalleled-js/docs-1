---
title: SDK - Best Practices
date: 2018-05-24 14:00:00 Z
isTocVisible: true
---

# Best Practices
Below, we have compiled a list of best practices which makes development of your custom connector easier to build, test and maintain. We have organised this best practices in the following way:
1. [General best practices](#general-best-practices)
2. [Block specific best practices](#block-specific-best-practices)
    * [Connection block](#connection-block)
    * [Test block](#test-block)
    * [Object definitions block](#object-defintions-block)
    * [Actions block](#actions-block)
    * [Triggers block](#triggers-block)
    * [Sample output block](#sample-output-block)
    * [Error handling](#error-handling)
3. [Usability and testing best practices](#usability-and-testing-best-practices)

## General best practices
These best practices relate directly to the development of a custom connector on Workato's SDK platform.

* The connector should be named after the application. This makes it easier for you or collaborators in your workspace to search for your own custom connector
  * If a standard/global connector already exists, the SDK should be named “<app name> (Custom)”, which indicates it’s custom SDK connector  

* Provide trigger and action level hints when building actions. This allows users who aren't familiar with your connector understand which action to choose

* Avoid leaving unused variables, methods, pick lists and object_definitions inside your connector code

* Keep the code clean, easy to read, understand and extensible
  * Follow the DRY principle of Ruby, use methods and object_definitions for reusable code liberally

* Always be expressive when declaring named objects or methods
  * Do not use short codes, special chars for declaring variables
  * Users should be able to understand what each block of code is trying to accomplish based on its name
  * Include comments before Actions and Triggers, indicate what it does and any special instructions and limitations

* Prefix with `_` for unused parameters in blocks
  * Example:
  ```ruby
  fields: lambda do |_connection, _config_fields|
    #Some code here that doesn't reference the connection or config_fields object
  end
  ```
* Include empty lines between each code block (methods, actions, triggers, pick lists etc.). This makes your code more readable for those looking to improve upon it

* Use the `dig` method when you need to navigate data to two or more levels. [Learn more](http://ruby-doc.org/core-2.3.0_preview1/Hash.html#method-i-dig)

* Use `#{}` instead of string concatenation (`"string" + "string"`) whenever possible
  * `#{}` is more defensive as errors are not raised when the variable is not declared

* Use Date fields and format cautiously, ensure the time zones are handled

* Avoid puts inside the code except for when testing and debugging using the `Console` tab in the debugger console

* Avoid implementing triggers(strictly) and actions for endpoints with HTTP Rate limits
  * If the action is required, then handle rate limit logic on the recipe but not in the connector code

* Each Trigger and Action should have a description tag with appropriate action or trigger name
  - Standard convention: `<action/trigger> <object> in <applicationName>`
  - Example: Search invoices in Xero

## Block specific best practices

### Connection block
* Use control_type: password for sensitive data

* Use control_type: subdomain and url when requesting user input about a subdomain parameter
  * This makes your input fields more usable to end users and minimises the amount of human error possible
  * Example:
    ```ruby
    fields: lambda do |_connection, _config_fields|
      {
          name: 'sub_domain',
          control_type: 'subdomain',
          url: '.salesforce.com',
          optional: false,
          hint: 'Provide salesforce sub-domain e.g. <code>test_instance</code>'
      }
    end
    ```

* If the connector is intended for distribution, ensure that no sensitive details are kept inside the code
  * This is especially important for Client IDs and Secrets when authenticating through an OAuth 2.0 flow

* Define refresh_token and detect_on blocks for authorization tokens that expires over time. While your initial connection may be successful, your connection may break when the token expires

* Provide reference links to aid users into how to attain credentials to create a successful connection
  * A simple thing like adding a link to the URL that lets you generate API keys or client IDs and secrets are go a long way for users of your custom connector.

* Ensure required scopes are included in the authorization URL for Oauth 2 authentication

* When using `type: "custom_auth"`, the `acquire:` block is only run if the `detect_on:` or `refresh_on:` is triggered. When using the `acquire:` block to retrieve credentials like tokens, be sure to include the error code that is returned when your `test:` block is executed without retrieving the proper tokens.

* Include version of the API if the app supports multiple versions at the same time

* Store the API url in connection hash
  * If the base url is dynamic and tenant specific, use acquire block to fetch the base_url dynamically

* Use picklists to select production, sandbox environments if the SDK need to support different environments

* Use picklists in the `fields:` block in the `connection:` block to avoid typos, which leads to connection failures

* Use base_uri(when applicable) to set the base url for API calls, which avoids keeping the full URL in triggers, actions, methods and picklists
  * Example:
  ```ruby
  base_uri: lambda do |connection|
    if connection['custom_domain']
      "https://#{connection['custom_domain']}"
    else
      'https://go.trackvia.com'
    end
  end
  ```

* Use the static base_uri or acquire the base_url from the endpoint (if there is an API which returns base_url account specific)

## Test block
* Use endpoint with least privileges and minimum data in the response for testing the connection.
  * E.g. use endpoint “get(/profile/me”), which may hold min. data in the memory.

* Minimize the get method to store least possible data on the test endpoint call.
  * This reduces the amount of time to successfully create a connection
  * Validate connection status before a recipe is started

## Object definitions
* Dynamic object definitions should be preferred over static object definitions
  * Dynamic object definitions reduce the amount of maintenance of the custom connector - especially when users can create custom fields in the application which you want to connect to
  * Dynamic object definitions normally depend on sending HTTP requests to metadata endpoints of the App you hope to connect to. Use the response to transform the data into the format expected in the `input_fields:` and `output_fields:` blocks.

* Special characters are not allowed in object field names except underscore `_`

* Use labels to increase the usability for custom connector end users
  * For example, some APIs provide metadata endpoints whose responses come with suitable labels for fields. For example, metadata about fields in an target application may contain an `ID` field as well as a `name` field. This may require us to map `name` in our object definitions to `ID` and `label` in our object definitions to `name` to maximise usability for end users.

* Use `control_type:` judiciously to reduce user error
  * For example, use `control_type:` = `date_time` instead of `text` when looking to collect date time input

* Toggle fields should be used for `boolean`, `select`, `multi-select` control_types to allow users to toggle to `text` input to map datapills during recipe design time

* When Toggle option is provided, toggle hints should indicate allowed values.
  * List values on the recipe UI if only few values, otherwise link to the appropriate page to show possible values for the toggle field

* Use number type when you need double and float, currency values.

* Use static pick_list values for select options if the options are static e.g. Genders, Address Type, Currency types

## Actions
* Actions should be clearly named
  * Naming conventions for actions:
    * Get - Get only one specific record by ID
    * Search - Return 0, 1 or more records based on a search query
    * List - List out all records
    * Add - Create a new record
    * Create - Create a new record
    * Update - Update an existing record
    * Upsert - Create a new record or update an existing record

* Be sure to perform validations on input_fields whenever necessary
  * We always advise guarding against edge cases by performing validation

* Use `help` tag, to indicate any special instructions to the user


* In execute block, call target application endpoints only for the data
  * Metadata HTTP requests should have been executed in `object_definitions:`

* Use methods as much as possible to reduce redundant code

* Use `after_response` block to capture response header information like cookies etc.

* It’s good practice to have a custom action in connector for CRUD operations, which can be used for any endpoint

* Actions that delete entire tables or impact object_definitions are not advisable in Workato
  * These actions have lasting impacts and potentially lead to data loss
  * It is advised for these actions to be deliberate and done directly by the an admin on the application instead of through a recipe

## Triggers
* Name of the trigger should be specific to what it does

* E.g. New employee in Replicon - Triggers when new employee created in Replicon

* Naming conventions for Triggers:
  * New - Trigger that detects when objects are created
  * New or updated - Trigger that detects when objects are either created or updated
  * Deleted - Trigger that detects when objects are deleted

* `Since` input fields are often useful for users to retrieve data from the past
  * This could be an optional field to allow users the ability to pull records from a past date when first starting the recipe
  * Traditionally, APIs should support this by allowing you to query records since a past date using a set parameter

* Avoid making unnecessary API requests in the poll block as this block is executed at least once in each trigger poll

* Use closure block to store query fields, page number, last modified date time (only if required)
  * Information cached in closure is persisted across poll intervals.

* Use methods as much as possible to reduce redundant code

* Dynamic webhooks should be used in APIs that have functionality for programatic setting up and tearing down of webhook URLs
  * Static webhooks are the alternative but require you to manually register Workato's given static URL

### Sample output
* In Workato recipes, every action or trigger should have sample output data populated with output data pills under app data section
  * This gives user idea about the data that he uses in downstream systems and improves usability

* Static static sample output data is preferred for the objects with fewer fields
  * Dynamic sample outputs can be used for objects with large amounts of fields
  * Avoid too much of data transformation and too many API calls to show sample data in the sample_output block
  * For download files actions, use static data in sample output block

* Ensure the sample data is populated for each trigger or action(output)
  * This should show up as grey text next to each datapill
  * When triggers do not have any input fields, the datatree does not show up until a second action is added

### Error handling
* Signal exceptions using the raise method

* Catch validation errors early, instead of waiting for API to return errors.

* Implement Error handling when you need to handle specific error codes in the SDK and define your own response

* Don’t suppress exceptions, better to expose more API information than hide them

## Usability and testing best practices
* Check the Recipe UI for actions and triggers

* Ensure the action names, triggers names, labels and help instructions clearly communicate their purpose to the end user

* Remember to set up some end to end tests for your custom connector by creating recipes
  * This is especially useful for pushing new versions of your connector to your production workspace by first testing it in recipes using your sandbox environment
