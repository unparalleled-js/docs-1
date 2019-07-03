# Toggle Fields
Toggle fields are a special type of input fields that allow 2 input types. They are a great way you can introduce greater flexibility and increase usability in your input fields. When used, toggle fields allow users to switch between two control types.

> Toggle fields are often used in conjunction with pick lists. Since pick lists produce dropdowns, users are unable to map datapills which they normally would in recipes. Toggle fields fix that by allowing them to toggle to plain text fields which can accept datapills.

## Sample code snippet
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

## Next section
The next section goes through what ruby methods you can use in the Workato SDK as well as how you can declare your own reusable methods. [Go to our methods documentation](/developing-connectors/sdk-2/methods.md) or check out our [best practices](/developing-connectors/sdk-2/best-practices.md) for some tips.
