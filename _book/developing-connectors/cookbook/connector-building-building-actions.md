---
title: Connector building - Building actions
date: 2019-10-15 17:00:00 Z
isTocVisible: true
---

# Connector building - Building actions
Now that we’ve defined objects schema in methods, we can now start building out our CRUDS actions which will reference the schema methods we have just defined.

## Defining config fields
When dealing with object-based actions, we first need to define something called configuration fields. [Configuration fields](https://docs.workato.com/developing-connectors/sdk/config-fields.html) are special input fields that you can define whose answers can dynamically generate other input fields.

```ruby
config_fields: [
  {
    name: 'object',
    optional: false,
    label: 'Object type',
    control_type: 'select',
    pick_list: 'object_list_create',
    hint: 'Select the object type from picklist.'
  }
],
```

![Config fields](/assets/images/sdk/config_fields.gif)
*Selecting invoice causes invoice related input fields to appear*

Here we also introduce a [picklist](https://docs.workato.com/developing-connectors/sdk/pick-list.html) which we can easily add additional objects as we introduce support for them.

> Configuration fields can also be used in various ways to dynamically generate input fields based on what the user has selected. In cases where an object selected still requires more information before input fields can be accurately shown to the user, we go through some patterns later in this guide that can do so.

## Defining your title, subtitles, descriptions and help text
It is also highly recommended and really important to define helpful titles and descriptions for your actions. When dealing with object-based actions, this helps with the readability of recipes using your connector as well as improves user experience for those building recipes with your connector.

```ruby
actions: {
  create_object: {
    title: 'Create object',

    subtitle: 'Supports the creation of invoices, payments and customers',

    description: lambda do |input, picklist_label|
      "Create a <span class='provider'>" \
      "#{picklist_label['object'] || 'object'}</span> in " \
      "<span class='provider'>XYZ Accounting</span>"
    end,

    help: lambda do |input, picklist_label|
      "Creates an #{picklist_label['object'] || 'object'} in XYZ. First, select from a list of " \
      'objects that we currently support. After selecting your object,' \
      ' dynamic input fields specific to the object selected ' \
      'will be populated.'
    end,

    config_fields: [
      {
        name: 'object',
        optional: false,
        label: 'Object type',
        control_type: 'select',
        pick_list: 'object_list_create',
        hint: 'Select the object type from picklist.'
      }
    ],
    # More code truncated here
  }
}
```

Over here we define title and subtitles to give users an idea of the action out of all the different actions in your connector. Remember to keep your title concise whilst using subtitles to provide abit more information.

For descriptions, we allow you to use a lambda function (as shown in the example above) to dynamically change the description of the action when a user makes a selection in the config_field. The same can be done for help text as shown in the cookbook example above.

![Bad example of dynamic descriptions](~@img/sdk/dynamic-description-1.png)
*Bad example with no dynamic description*

![Good example of dynamic descriptions](~@img/sdk/dynamic-description-2.png)
*Good example with no dynamic description*


## Defining input fields
Another feature of creating clean and scalable input fields are that a single action can support multiple objects with a single `object_definitions` call. Since the value of configuration fields can only be accessed through an object_definitions method, we suggest calling a generic object_definitions that can later pull the appropriate schema based on the object the user has selected.

### Input fields
```ruby
input_fields: lambda do |object_definitions|
  object_definitions['create_object_input']
end,
```

### Object definition
```ruby
create_object_input: {
  fields: lambda do |connection, config_fields|
    call("#{config_fields['object']}_schema", "create")
  end
},
```

When the object definition `create_object_input` is called, this object definition then calls the schema method we had created earlier.

## Defining the execute block
When defining the execute block, we first store any generic methods for pre processing or post processing of data in the execute block. In the example below, use to generic methods that format payloads before being sent out the the target API. After the formatting of the payload, a call is then made to a method which houses any specific data processing that needs to be done on a `action`-`object` level as well as the final HTTP call to the appropriate endpoint.

Another key feature to take note is the use of error handling to surface appropriate error messages for users of your connectors. During recipe design time and the debugging of any errors, these error messages save large amounts of time for users


### Execute block
```ruby
execute: lambda do |connection,input|
  object_name = input.delete('object')
  payload = call('format_payload',input)
  response = call('create_#{object_name}_execute', payload).
  after_error_response(/.*/) do |_code, body, _header, message|
    error("#{message}: #{body}")
  end
  formatted_response = call('format_response', response.presence)
  formatted_response
end,
```

### `action`-`object` method
``` ruby
create_invoice_execute: lambda do |payload|
  post('api/invoice/create', payload)
end,
```

## Defining the output fields
Output fields can be defined in the same way as input fields using the same schema method used earlier. When calling the schema method, remember to pass the parameter `output` so your method knows to return fields expected in the response. Often this includes metadata about the object that cannot be changed by users such as `created_at` or `updated_at` timestamps.

### Output fields
``` ruby
output_fields: lambda do |object_definitions|
  object_definitions['create_object_output']
end,
```

### Object definition
```ruby
create_object_output: {
  fields: lambda do |connection, config_fields|
    call("#{config_fields['object']}_schema", "output")
  end
},
```

## Defining your sample output
Sample outputs are a great way to hint to give users context about the data-pills they are mapping in downstream actions. When labels might still leave room for confusion, sample outputs bridge the gap in understanding by allowing you to pull data in real time from the user's own application. In the example below, we construct a payload artificially before using a search object method to retrieve the first record found in the user's own instance of XYZ accounting.

### Sample output
```ruby
sample_output: lambda do |connection, input|
  payload = {
    "limit" => 1
  }
  call("search_#{input['object']}_execute", payload)
end
```

The output of this block is then passed to the output fields block and rendered to the right of every data-pill which is matched. This could significantly reduce the amount of time it takes for users whilst troubleshooting.

![Good example of dynamic descriptions](/assets/images/sdk/sample_output.png)
*Sample output renders in grey text next to each data-pill*

## Example 1: Update invoice action in XYZ Accounting
Below, we go through one full example for an update object action in XYZ accounting.

### Sample code
```ruby
methods: {

  invoice_schema: lambda do |action_type|
    # Invoice schema here
  end,

  update_invoice_execute: lambda do |payload|
    patch('api/invoice/update', payload)
  end,

},

object_definitions: {

  update_object_input: {
    fields: lambda do |connection, config_fields|
      call("#{config_fields['object']}_schema", "update")
    end
  },

  update_object_output: {
    fields: lambda do |connection, config_fields|
      call("#{config_fields['object']}_schema", "output")
    end
  },

},
actions: {

  update_object: {
    title: 'Update object',

    subtitle: 'Updates an object in XYZ accounting.',

    description: lambda do |input, picklist_label|
      "Update a <span class='provider'>" \
      "#{picklist_label['object'] || 'object'}</span> in " \
      "<span class='provider'>XYZ Accounting</span>"
    end,

    help: lambda do |input, picklist_label|
      {
        body:
        "Updates an #{picklist_label['object'] || 'object'} in XYZ. First, select from a list of " \
        'objects that we currently support. After selecting your object,' \
        ' dynamic input fields specific to the object selected ' \
        'will be populated.'   
      }
    end,

    config_fields: [
      {
        name: 'object',
        optional: false,
        label: 'Object type',
        control_type: 'select',
        pick_list: 'object_list_update',
        hint: 'Select the object type from picklist.'
      }
    ],

    input_fields: lambda do |object_definitions|
      object_definitions['update_object_input']
    end,

    execute: lambda do |connection,input|
      object_name = input.delete('object')
      payload = call('format_payload',input)
      response = call('update_#{object_name}_execute', payload).
      after_error_response(/.*/) do |_code, body, _header, message|
        error("#{message}: #{body}")
      end
      formatted_response = call('format_response', response.presence)
      formatted_response
    end,

    output_fields: lambda do |object_definitions|
      object_definitions['update_object_output']
    end,

    sample_output: lambda do |connection, input|
      payload = {
        "limit" => 1,
        "status" => "closed"
      }
      call("search_#{input['object']}_execute", payload)
    end

  }
  # More actions below
},

pick_lists: {
  object_list_update: lambda do
    [
      ["Invoice","invoice"]
    ]
  end,
  # More picklists below
}
```

The example below showcases all the different steps needed to create an update object action. Currently this code only shows support for a single object - `Invoices`. The structure for the update object action is largely identical to that of the create object action where configuration fields, titles, subtitles, descriptions, help text, input fields, output fields, execute and sample output blocks are defined generically. Most of the magic happens in object definitions and methods where object-specific code is introduced to retrieve specific schema and make HTTP calls to endpoints related to that object.

Take note that methods `format_payload` and `format_response` in the execute block are not included in the sample code. To find out their definitions, head over [here](/developing-connectors/sdk/methods.md)

### Building triggers
Lets move on to building object based triggers

#### Next Chapter
##### [Object based triggers](/connector-building-building-triggers.md)

#### Previous Chapter
##### [Object-based actions](/connector-building-building-actions.md)
