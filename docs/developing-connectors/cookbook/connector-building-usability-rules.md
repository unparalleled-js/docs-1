---
title: Connector building - Usability
date: 2019-10-15 17:00:00 Z
---

# Connector building - Usability rules
Now that you’ve learned some of the concepts behind creating object-based actions and triggers, you should now begin testing it not only in the debugger console but when used as a recipe. When you reach this stage, you may also start to take note of certain aspects of your connector which are not as usable as you would hope. Good connectors are not only well organized in terms of code but place user experience front and center in the entire recipe building experience. Here are some rules that distinguish good connectors from bad ones.
1. Descriptive help texts
2. User friendly input fields
3. Descriptive error messages

## Descriptive help texts
Help texts in actions are critical in helping your users plug any knowledge gaps they may have about the actions you've built. Here are some important details that you should include in the help texts of your actions:

1. API versions supported

API versions of the application you are connecting to help manage expectations for your users. They would have a better understanding of what to expect in terms of functionality for your connector.

2. Object specific help

Different objects may require different action level help hints. Help texts can be easily changed based on the object users select.

```ruby
help: lambda do |input, picklist_label|
  if input['object'] == 'invoice'
    {
      body: "Creates an invoice in XYZ. Invoices in XYZ accounting are essential " \
      "components of the platform. This action supports the creation of invoices " \
      "including custom fields",
      learn_more_url: "docs.xyz.com",
      learn_more_text: "Learn to setup this action"
    }
  else
    {
      body: "Creates an object in XYZ. First, select from a list of " \
      'objects that we currently support. After selecting your object,' \
      ' dynamic input fields specific to the object selected ' \
      'will be populated.'
    }
  end
end,
```

3. Links to appropriate documentation

Help texts can also include links to appropriate documentation if users need more information about how to set up this action.

![Help text hints](~@img/sdk/help-text-link.png)
*Linking to documentation can help your users when not all the information can be contained in a small paragraph*

4. Field level hints

Hints are an essential way to guide your users on how to use a specific input field. Let them know about input expected such as whether you require the timestamp to be in a specific date format (iso8601 or DD/MM/YYYY) etc.

5. Field level help

In cases where it is critical for your users to read this to configure the action properly, we suggest using field level help. This should be used sparingly.

### Sample code
```ruby
[
  {
    control_type: "text",
    label: "Txn date",
    type: "string",
    name: "TxnDate",
    optional: true,
    sticky: true,
    help: {
      title: "Extra info",
      text: "This field is super important"
    }
  }
]
```

![Help text hints](~@img/sdk/field-level-help.png)
*Bring attention to a specific field using field level help*

## User friendly input fields
Here are some simple rules that would help fine-tune your connector to make it as user-friendly as possible. When creating connectors with the eventual aim of getting them listed on Workato as globally scope connectors, these rules will form an important part of the UIUX review that we put each connector through.

1. Is the label of the input field descriptive enough? Be as explicit as possible when defining labels on input fields so your end users are on the same page as you.
While the `name` of the field may be `id`, changing the label to `Invoice ID` makes it immediately clear to end users what they are doing.

2. Is the type and control_type of the input field accurate? Types and control_types help your users know what kind of values they are working with. Workato defaults the type and control_type to string and text if nothing is defined.

3. Did you declare hints for input fields that might still be ambiguous after changing the label? Using hints are a great way to guide your users even more. Links in HTML format can also be used.

4. Does this input field only accept a defined set of values? Using select dropdowns make it easier for your users to give correct input instead of typing in their answers manually. This also reduces the number of errors they might face.

5. Does this input field accept ID values? For example, a `create invoice` action in XYZ accounting might require an input field that contains the ID of the associated customer. Since your users might not have IDs of customers on hand, but the name of the customer instead, you may consider making the input field a picklist which shows customer names as the label but provides the ID of the customer as the value instead.

6. When using dropdowns, always also include a toggle_field option that allows your users to map datapills if they need to. While a dropdown is great, sometimes your users may need to map datapills instead. Remember to change the toggle_hints accordingly.

7. Is this dropdown a config field? If yes, ensure that the secondary toggle field has `control_type` set to `plain-text` to prevent datapills from being mapped. Config fields should never accept datapills as other input fields in the action rely on the information.

8. Are all required fields in the action or trigger labeled as required? Users should be able to quickly understand which fields they need to fill in for this action to be valid.

9. Are there any optional fields that will be commonly used? Making these fields sticky can bring end-users attention to their input fields instead of having them search for them.

10. Are you dynamically retrieving possible custom fields for end users of your connector? Use the `custom` parameter in each custom field to provide your users with feedback on which fields are standard and which fields are custom to them.

For each input field, we suggest running through this series of questions quickly. Once you get the hang of it, it becomes a simple process of highlighting input fields which need adjustments before going back into the schema definitions to make changes.

## Descriptive error messages
Descriptive error messages are a crucial part of the recipe building experience for end-users. Without the proper error messages, users have a tough time figuring out why their recipes are failing. If you haven’t checked out the possible ways to surface errors on Workato, do check out our [error handling docs.](https://docs.workato.com/developing-connectors/sdk/error-handling.html)

Here are some general rules to include proper error handling in your connector.
1. Does your connector use picklists or dynamic schema of any sort? Chaining an `after_error_response` function allows your users to receive exact information of what may have gone wrong. [Example here.](https://docs.workato.com/developing-connectors/sdk/error-handling.html#object-definition-error-handling)

2. Does your connector have certain fields that are required together, such as a start date and end date? Whilst these fields may not be required all the time, some fields are often required together. In cases like these, validations may help surface these errors better and also reduce the number of API calls made unnecessarily. [Example here.](https://docs.workato.com/developing-connectors/sdk/error-handling.html#input-validation)

3. Does the API you are connecting to respond with appropriate HTTP status codes? In certain cases, APIs may send back responses that should actually be errors but have their HTTP status as `200`. In cases like these, using an ` after_error_response` function can help highlight issues to your users instead. [Example here.](https://docs.workato.com/developing-connectors/sdk/error-handling.html#response-validation)

#### Previous Chapter
##### [Common code patterns](connector-building-code-patterns.md)
