# Pick lists and toggle fields
A pick list is list of choices predefined for a user to select instead of having to input the actual values. It is useful when there is a list of accepted values for a field or when the field requires a value that is not visible.

You'll be able to define both static pick lists which are hardcoded as well as dynamic picklists that generates a pick list by executing a HTTP call.

> Pick lists are great ways to make your connector more usable for end users by reducing human error when users type in values manually.

Toggle fields are another way you can introduce greater flexibility and increase usability in your input fields. When used, toggle fields allow users to switch between two control types.

> Toggle fields are often used in conjunction with pick lists. Since pick lists produce dropdowns, users are unable to map datapills which they normally would in recipes. Toggle fields fix that by allowing them to toggle to plain text fields which can accept datapills.

## Pick lists
There are 2 ways to define a pick list: dynamically or statically.

### Static pick lists
Pick list is defined as a array of selections. Each selection is an array made up of 2 elements.

#### Sample code snippet
```ruby
{
  title: 'My Wrike connector',

  connection: { ... },
  test: {...},

  actions: {
    create_task: {
      input_fields: lambda do |object_definitions|
        [
          {
            name: 'folder_id',
            control_type: 'select',
            pick_list: 'folder'
          }
        ]
      end,

      execute: lambda do |connection,input|
        # Some code here
      end,

      output_fields: lambda do |object_definitions|
        # Some code here
      end
    },
  },

  triggers: { ... },
  object_definitions: { ... },

  pick_lists: {
    folder: lambda do |connection|
      [
        # Display name, value
        ["Root","111390"],
        ["Recycle Bin","235611"]
      ]
    end
  },

  methods: { ... }
}
```

The first element in the selection array is the value displayed and the second element is the value of that selection.

### Dynamic pick lists
Pick lists can also be dynamic by including a HTTP request in the lambda function.

#### Sample code snippet
```ruby
{
  title: 'My Wrike connector',

  connection: { ... },
  test: {...},

  actions: {
    create_task: {
      input_fields: lambda do |object_definitions|
        [
          {
            name: 'folder_id',
            control_type: 'select',
            pick_list: 'folder'
          }
        ]
      end,

      execute: lambda do |connection,input|
        # Some code here
      end,

      output_fields: lambda do |object_definitions|
        # Some code here
      end
    },
  },

  triggers: { ... },
  object_definitions: { ... }

  pick_lists: {
    folder: lambda do |connection|
      get("https://www.wrike.com/api/v3/folders")["data"].
        map { |folder| [folder["title"], folder["id"]] }
    end
  },

  methods: { ... }
}
```
After making a GET requests for all folders available, the pick list is populated with folder `id`s and displays the corresponding folder `title`

> Remember to format the response from the HTTP call into the nested array format that Workato expects from all pick_lists.

## Toggle Fields
Toggle fields are a special type of input fields that allow 2 input types.

### Sample code snippet
Here we have an example toggle field `parser_id` used in the Docparser connector. The action, **Fetch document from URL**, requires the parser ID as an input. This ID can be accessed within the parser page URL. However, that is not a great user experience for the recipe builder. Ideally, we want users to be able to stay on the recipe page without having to toggle (pun intended) between browser tabs.

```ruby
fetch_document_from_url: {
  input_fields: lambda do
    [
      {
        name: "url",
        label: "Source URL",
        hint: "Upload file from this URL",
        optional: false
      },
      {
        name: "parser_id",
        label: "Document Parser",
        hint: "The Document Parser the file gets imported to",
        control_type: :select,
        pick_list: "parsers",
        optional: false,
        toggle_hint: "Select from list",
        toggle_field: {
          name: "parser_id",
          label: "Parser ID",
          type: :string,
          control_type: "text",
          optional: false,
          toggle_hint: "Use Parser ID",
          hint: "Go to home page and select the required parser. If the URL is 'https://app.docparser.com/stack/ynrqkdxvaghs/overview', then 'ynrqkdxvaghs' is the ID"
        }
      },
      {
        name: "remote_id",
        sticky: true
      }
    ]
  end,

  execute: lambda do |connection, input|
      post("https://api.docparser.com/v1/document/fetch/#{input["parser_id"]}?url=#{input["url"]}")
  end,

  output_fields: lambda do |object_definitions|
      object_definitions["document"]
  end
}
```

A pick list input type is used to create a more desired user experience. However, this makes the action value mapping static. Because the pick list can only select a single value, all recipe jobs executing this action will use the single parser ID value selected. To overcome this limitation, a text field should be used. A text field allows dynamic mapping of input field value.

In this case, since both field types are desired, a `toggle_field` can be used to provide both input options to users. Since, it is a more common scenario for users to select a parser per action, pick list type is set as the primary toggle and text field set as the secondary (nested `toggle_field`).

## Toggle field in recipe
Here is how a toggle field would look in practice.

### Toggle primary field
![Toggle primary field](/assets/images/sdk/toggle-primary.png)

### Toggle secondary field
![Toggle secondary field](/assets/images/sdk/toggle-secondary.png)

### toggle_hint

Toggle hints are displayed in the toggle dropdown when choosing between primary and secondary options. This is an optional field but should be added as best practice. A `toggle_hint` defined in the primary field will be displayed as a hint for choosing the primary field. The same applies for `toggle_hint` for secondary field.

![Toggle field hint](/assets/images/sdk/toggle-hint.png)

### toggle_field

`toggle_field` should be defined as a hash nested in the primary field. Within this hash should be a definition of a typical field. This means that the `toggle_field` hash should contain all the fields required for a field.

Note: `toggle_field` keys do not have default behaviours. This means that all fields are required and must be explicitly defined. For a details of field definitions, check out [Object Definition](object-definition.md)
