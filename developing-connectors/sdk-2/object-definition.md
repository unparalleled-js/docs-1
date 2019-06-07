# Object Definitions and structuring input and output fields

Object Definitions are an important component of the SDK. It allows you to define your schema for objects to be used in the actions and triggers.

After that, we will dive deeper into the details of how you can clearly define your input and output fields. This will have important effects on what end users see when building recipes using your connector such as the data types input fields should expect and the data types of output fields which they will potentially map as datapills in subsequent steps.

## Static object definitions

The most basic way to build an object definition is to define the field name and type

### Sample code snippet

```ruby
{
  title: 'My close.io connector',

  connection: { ... },
  test: {...},
  actions: {

    get_lead_by_id: {
      input_fields: lambda do
        [
          { name: "lead_id", optional: false }
        ]
      end,

      execute: lambda do |connection, input|
        get("https://app.close.io/api/v1/lead/#{input["lead_id"]}/")
      end,

      output_fields: lambda do |object_definitions|
        object_definitions["lead"]
      end
    }

  },

  triggers: { ... },

  object_definitions: {
    lead: {
      fields: lambda do
        [
          { name: "name", type: :boolean },
          { name: "email" },
          { name: "number"}
        ]
      end
    }
  }

  picklists: { ... },
  methods: { ... }
}

```

In this example, the object `leads` is being defined in the fields lambda function. This can then be easily referenced in the action above. Defined as an array of objects. Each field object corresponds to a field in the lead object.

Using object definitions allows you to have less redundancy in your code, especially when the same input and output fields are expected.

## Dynamic object definitions
Object definitions can also be used to dynamically generate input and output schemas. This is often done by a HTTP requests to metadata endpoints which return data about what fields to expect. Below we go through a simple example of using a `GET` request to a metadata endpoint to know what fields to expect in a form.

### Sample code snippet

```ruby
object_definitions: {
  form: {
    fields: lambda do |connection|
      get("https://api.unbounce.com/pages/#{connection['page_id']}/form_fields")["formFields"].
        map { |field| { name: field["id"] } }
    end
  }
}
```

Remember that the ultimate output of the lambda function would still have to be in the format that Workato expects. This often means using ruby methods like `map` to transform the response from an HTTP call.

### Testing
Testing and debugging your object definitions can be done in the same way that you would for your actions or triggers. Make sure that your object definition is being used in a specific action and test that action in the code editor. HTTP calls from the object definition should be recorded in the `Network` tab and any `puts` functions in your object definition block should be displayed in the `Console` tab as well.

## Structuring input and output fields
Up until now, our sample code snippets have largely only included the basic fields such as `name` when defining input and output fields. Workato allows you to define a much larger set of variables that affect the way your fields are displayed to end users.

<table class="unchanged rich-diff-level-one">
    <thead>
        <tr>
            <th>Key</th>
            <th>Definition</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>The name of this field. For example <code>id</code> or <code>created_at</code>
            </td>
        </tr>
        <tr>
            <td>label</td>
            <td>An optional key. All fields will have default labels based on the field name. Use this to change the default value of the field label.
            </td>
        </tr>        
        <tr>
            <td>type</td>
            <td>
              The data type of this field. Default value is <code>:string</code>.
              Should be given the symbol notation (prepend colon).
              <ul>
                <li><code>:string</code></li>
                <li><code>:integer</code></li>
                <li><code>:number</code></li>
                <li><code>:date_time</code></li>
                <li><code>:date</code></li>
                <li><code>:timestamp</code></li>
                <li><code>:boolean</code></li>
                <li><code>:object</code> Must be accompanied with <code>:properties</code></li>
                <li><code>:array</code> Must be accompanied with <code>:properties</code></li>
              <ul>
            </td>
        </tr>
        <tr>
            <td>control_type</td>
            <td>
              This field relates only to input fields and it dictates the input field type to expose in a recipe. Refer to the list of <a href="#control-types">Control types</a> supported.
              <br>
              If this is declared for output fields, whether as an object definition or if it is hardcoded, it would be ignored.
            </td>
        </tr>
        <tr>
            <td>pick_list</td>
            <td>
              If <code>control_type</code> is <code>:select</code> or <code>:multiselect</code>, this property is required.
              See more in <a href="/developing-connectors/sdk/pick-list.html">Pick List</a> chapter.
            </td>
        </tr>
        <tr>
            <td>properties</td>
            <td>
              When defining nested objects, use the <code>properties</code> key to define the fields in the object.
              Remember to define the type as <code>:array</code> or <code>:object</code>
            </td>
        </tr>
        <tr>
            <td>sticky</td>
            <td>Use this property to make the optional field visible on the Input section. For Ex: Since is optional field but to be displayed always under Input fields. Use <code>sticky: true</code>.
            </td>
        </tr>
    </tbody>
</table>

> If no type is defined, we always default to string.

### Control types
Control types are a way for you to declare how input fields are displayed to users of your connector.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th>Control type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>text</td>
      <td>
        Simple text input field with formula mode option.<br>
        <img src="/assets/images/sdk/text.png" alt="text control type">
      </td>
    </tr>
    <tr>
      <td>text-area</td>
      <td>
        Long text input field with formula mode option.<br>
        <img src="/assets/images/sdk/text-area.png" alt="text-area control type">
      </td>
    </tr>
    <tr>
      <td>plain-text</td>
      <td>
        Simple text input field without formula mode option.<br>
        <img src="/assets/images/sdk/plain-text.png" alt="plain-text control type">
      </td>
    </tr>
    <tr>
      <td>plain-text-area</td>
      <td>
        Long text input field with formula mode option. This input field can be expanded using the adjust icon.<br>
        <img src="/assets/images/sdk/plain-text-area.png" alt="plain-text-area control type">
      </td>
    </tr>
    <tr>
      <td>number</td>
      <td>
        Simple number field with icon to indicate either an integer or float value. This control type has formula mode option.<br>
        <img src="/assets/images/sdk/number.png" alt="number control type">
      </td>
    </tr>
    <tr>
      <td>url</td>
      <td>
        Text field with icon to indicate a URL value. This control type has formula mode option.<br>
        <img src="/assets/images/sdk/url.png" alt="url control type">
      </td>
    </tr>
    <tr>
      <td>select</td>
      <td>
        Control type to provide a predefined list of values to choose from. Make sure to include the <code>pick_list</code> property.<br>
        <img src="/assets/images/sdk/select.png" alt="select control type">
      </td>
    </tr>
    <tr>
      <td>checkbox</td>
      <td>
        Simple Yes/No select interface. This control type adds an implicit toggle to text mode (for dynamic mapping and formula mode option).<br>
        <img src="/assets/images/sdk/checkbox.png" alt="checkbox control type">
      </td>
    </tr>
    <tr>
      <td>multiselect</td>
      <td>
        Control type similar to <code>select</code> with additional ability to select multiple values. This control type must be accompanied with <code>pick_list</code> and <code>delimiter</code> properties.<br>
        <img src="/assets/images/sdk/multiselect.png" alt="multiselect control type">
      </td>
    </tr>
    <tr>
      <td>date</td>
      <td>
        Control type indicating date value. This control type has formula mode option.
        <img src="/assets/images/sdk/date.png" alt="date control type">
      </td>
    </tr>
    <tr>
      <td>date_time</td>
      <td>
        Control type indicating date with time value. This control type has formula mode option.
        <img src="/assets/images/sdk/date_time.png" alt="date_time control type">
      </td>
    </tr>
    <tr>
      <td>phone</td>
      <td>
        Control type indicating phone value. This control type has formula mode option.<br>
        <img src="/assets/images/sdk/phone.png" alt="phone control type">
      </td>
    </tr>
    <tr>
      <td>email</td>
      <td>
        Control type indicating email value. This control type has formula mode option.<br>
        <img src="/assets/images/sdk/email.png" alt="email control type">
      </td>
    </tr>
    <tr>
      <td>subdomain</td>
      <td>
        Control type to indicate a subdomain of a particular site. Typically used in connection fields. Make sure to include the <code>url</code> property.<br>
        <img src="/assets/images/sdk/subdomain.png" alt="subdomain control type">
      </td>
    </tr>
    <tr>
      <td>static-list</td>
      <td>
        Control type for arrays where the size of the array is statically determined by the recipe designer. Remember to define <code>item_label</code>, <code>add_item_label</code>, <code>empty_list_title</code> and <code>empty_list_text</code>.<br>
        <img src="/assets/images/sdk/static-list.png" alt="static-list control type">
      </td>
    </tr>
  </tbody>
</table>

___________
## Variations

### Nested objects
Often, data returned from API request is not a simple one-level JSON. More often than not, the returned JSON object is much more complex, with multiple levels of nesting. This section aims to illustrate how to define nested fields.

#### Sample code snippet
```json
{
  "id": "00ub0oNGTSWTBKOLGLNR",
  "status": "STAGED",
  "created": "2013-07-02T21:36:25.344Z",
  "activated": null,
  "lastLogin": "2013-07-02T21:36:25.344Z",
  "profile": {
    "firstName": "Isaac",
    "lastName": "Brock",
    "email": "isaac.brock@example.com",
    "login": "isaac.brock@example.com",
    "mobilePhone": "555-415-1337"
  },
  "credentials": {
    "provider": {
      "type": "OKTA",
      "name": "OKTA"
    }
  },
  "_links": {
    "activate": {
      "href": "https://your-domain.okta.com/api/v1/users/00ub0oNGTSWTBKOLGLNR/lifecycle/activate"
    }
  }
}
```

Nested object field `profile` can be defined `type: :object` with fields nested inside using `properties`. Properties should be an array of fields objects (just like `fields` within the `user` object).

```ruby
object_definitions: {
  user: {
    fields: lambda do
      [
        {
          name: "id"
        },
        {
          name: "status"
        },
        {
          name: "created",
          type: :timestamp
        },
        {
          name: "activated",
          type: :timestamp
        },
        {
          name: "lastLogin",
          type: :timestamp
        },
        {
          name: "profile",
          type: :object,
          properties: [
            {
              name: "firstName"
            },
            {
              name: "lastName"
            },
            {
              name: "email",
              control_type: :email
            },
            {
              name: "login",
              control_type: :email
            },
            {
              name: "mobilePhone",
              control_type: :phone
            }
          ]
        }
      ]
    end
  }
}
```

### Nested Arrays
The other common type of nested field is array of objects. This type of field contains a list of repeated objects of the same fields. The defining such fields will be very similar to defining objects. Take the following sample `user` object from Asana for instance.

#### Sample code snippet
```json
{
  "data": {
    "id": 12149914544379,
    "email": "eeshan@workato.com",
    "name": "Ee Shan",
    "workspaces": [
      {
        "id": 1041269201604,
        "name": "Workato"
      },
      {
        "id": 498346130780,
        "name": "Product Documentation"
      }
    ]
  }
}
```

The `workspaces` array should be given `type: :array` as well as `of: :object`. This tells the `object_definitions` framework that the field contains an array of objects. Similar to nested objects, you will need to define `properties`, which is an array of fields corresponding to the fields of each object in the `workspaces` array.

```ruby
object_definitions: {
  user: {
    fields: lambda do
      [
        {
          name: 'id',
          type: :integer
        },
        { name: 'name' },
        {
          name: 'email',
          control_type: :phone
        },
        {
          name: 'workspaces',
          type: :array,
          of: :object,
          properties: [
            {
              name: 'id',
              label: 'Workspace ID',
              type: :integer
            },
            { name: 'name' }
          ]
        }
      ]
    end
  }
}
```

### Configuration Fields
Occasionally, input/output fields depend on user input. For example, the fields for an object depends on the chosen object. Here, we introduce `config_fields`. It is an optional key available in both actions and triggers. It is a special type of input field that can be used to generate other dependent input/output fields. We see this in the merge_document action in Webmerge.

#### Sample code snippet
```ruby
action: {
  merge_document: {
    config_fields: [
      # this field shows up first in recipe as a picklist of documents to use
      {
        name: "document_id",
        label: "Document",
        control_type: :select,
        pick_list: "documents",
        optional: false
      }
    ],

    input_fields: lambda do |object_definition|
      object_definition["document"]
    end,

    execute: lambda do |_connection, input|
      d = input["document_id"].split("|")
      post(d.last.to_s, input)
    end,

    output_fields: lambda do |_object_definition|
      [
        {
          name: "success"
        }
      ]
    end
  }
}
```

Since the fields are different for each document, this can be set up such that users first chooses a document (from a pick list of documents available in the instance) which is then used to generate the remaining fields. This part is done by specifying that the "document" object definition is dependent on the value of "document_id" within config_field. Notice that the fields block accepts a second argument `config_fields`. This argument refers to the field(s) you define in `config_fields` in each action/trigger.

```ruby
object_definition: {
  document: {
    fields: lambda do |connection, config_fields|
      return [] if config_fields.blank?
      get("https://www.webmerge.me/api/documents/#{config_fields["document_id"]}/fields").
        map { |field| field.slice("name") }
    end
  }
}
```

|Argument | Details |
| -- | -- |
| connection | The connection object which is created during authentication. You'll be able to reference this in your object definition if needed |
| config_field | The config_field object which you can reference to pull out user input before executing a request in your object definition.|

While the config_fields is empty, document objects will have no fields (empty array of fields). As soon as config_fields is given a value, a request is made to retrieve the fields present in this document. From a recipe user perspective, the action will appear initially as a single input with a list of documents. After selecting a document, the corresponding set of fields will be generated, to be used in the recipe.

![config_fields schema screenshot](/assets/images/sdk/config_fields_demo.gif)
 *Configuration fields in action*
