---
title: SDK - Pick Lists
date: 2018-05-24 14:00:00 Z
---

# Pick lists and toggle fields
A pick list is list of choices predefined for a user to select instead of having to input the actual values. It is useful when there is a list of accepted values for a field or when the field requires a value that is not visible.

You'll be able to define both static pick lists which are hardcoded, dynamic pick lists that are generated through a HTTP call or dependent pick lists that work off input earlier in the action.

> Pick lists are great ways to make your connector more usable for end users by reducing human error when users type in values manually.

## Pick lists
There are 2 ways to define a pick list: dynamically or statically.

### Static pick lists
Pick list is defined as a array of selections. Each selection is an array made up of 2 elements.

#### Sample code snippet
```ruby
{
  title: 'My Wrike connector',

  connection: {
    # Some code here
  },
  test: {
    # Some code here
  },

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

  triggers: {
    # Some code here
  },
  object_definitions: {
    # Some code here
  },

  pick_lists: {
    folder: lambda do |connection|
      [
        # Display name, value
        ["Root","111390"],
        ["Recycle Bin","235611"]
      ]
    end
  },

  methods: {
    # Some code here
  },
}
```

The first element in the selection array is the value displayed and the second element is the value of that selection.

### Dynamic pick lists
Pick lists can also be dynamic by including a HTTP request in the lambda function.

#### Sample code snippet
```ruby
{
  title: 'My Wrike connector',

  connection: {
    # Some code here
  },
  test: {
    # Some code here
  },

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

  triggers: {
    # Some code here
  },
  object_definitions: {
    # Some code here
  },

  pick_lists: {
    folder: lambda do |connection|
      get("https://www.wrike.com/api/v3/folders")["data"].
        map { |folder| [folder["title"], folder["id"]] }
    end
  },

  methods: {
    # Some code here
  },
}
```
After making a GET requests for all folders available, the pick list is populated with folder `id`s and displays the corresponding folder `title`

> Remember to format the response from the HTTP call into the nested array format that Workato expects from all pick_lists.

### Dependent pick lists
Dependent pick lists allow you to change the contents of a pick list based on the value of another field. For example, rather than displaying all the cities in a single pick list, we can selectively display only cities from a country, selected in another field.

A dependent pick list can be defined either statically or dynamically.

#### Sample code snippet - Static example
```ruby
pick_lists: {
  countries: lambda do |_connection|
    [
      ['United States', 'USA'],
      ['India', 'IND']
    ]
  end,
  cities: lambda do |_connection, country:|
    {
      'USA' => [
        ['New York City', 'NYC'],
        ['San Fransisco', 'SF']
      ],
      'IND' => [
        ['Bangalore', 'BNG'],
        ['Delhi', 'DLH']
      ]
    }[country]
  end
}
```

This example shows two pick lists. `cities` is a dependent static pick list while `countries` is an independent static pick list. The dependent pick list will return an array of cities based on the value of the country provided as an argument. Notice that the `country` is a required keyword argument with a trailing colon.

#### Usage inside an input field
```ruby
input_fields: lambda do |_object_definitions|
  {
    name: 'country',
    control_type: 'select',
    pick_list: 'countries',
    optional: false
  },
  {
    name: 'city',
    control_type: 'select',
    pick_list: 'cities',
    pick_list_params: { country: 'country' },
    optional: false
  }
end
```

We use `pick_list_params` to pass the value selected in a parent input to the dependent pick list in the form of a hash.

```ruby
pick_list_params: { country: 'country' }
```

This hash can contain one or more key/value pair to be passed as arguments to the dependent pick list. In this example, the string `'country'` is used to point to the name of the parent input field to retrieve the value from. This value must be assigned to the key `country`, matching the keyword argument defined in the dependent pick list code block.

The parent input field does not need to be a pick list, a text field can also be used to filter contents of a dependent pick list.

```ruby
input_fields: lambda do |_object_definitions|
  {
    name: 'country',
    optional: false,
    change_on_blur: true,
    extends_schema: true,
    hint: 'Use 3 letter combination country codes. e.g. USA'
  },
  {
    name: 'city',
    control_type: 'select',
    pick_list: 'cities',
    pick_list_params: { country: 'country' },
    optional: false
  }
end
```

#### Sample code snippet - Dynamic example

```ruby
pick_lists: {
  accounts: lambda do |_connection|
    get('https://www.googleapis.com/analytics/v3/management/accounts')['items'].
      pluck('name', 'id')
  end,

  properties: lambda do |_connection, account:|
    get("https://www.googleapis.com/analytics/v3/management/accounts/#{account}/webproperties")['items'].
      pluck('name', 'id')
  end
}
```

In this example, `accounts` is an independent dynamic pick list while `properties` is a dependent dynamic pick list. Values from both pick lists are dynamically generated and may be different between two Google Analytics connections.

Once again, the required value, `account:` is defined as a required keyword argument.

#### Usage inside an input field
```ruby
input_fields: lambda do |_object_definitions|
  {
    name: 'account',
    control_type: 'select',
    pick_list: 'accounts',
    optional: false
  },
  {
    name: 'property',
    control_type: 'select',
    pick_list: 'properties',
    pick_list_params: { account: 'account' },
    optional: false
  }
end
```

Similar to the static example, the parent input does not have to be a pick list. The following snippet uses a text field to pass the account ID instead.

```ruby
input_fields: lambda do |_object_definitions|
  {
    name: 'account_id',
    optional: false,
    change_on_blur: true,
    extends_schema: true
  },
  {
    name: 'property',
    control_type: 'select',
    pick_list: 'properties',
    pick_list_params: { account_id: 'account_id' },
    optional: false
  }
end
```

Notice that the name of the parent input field to retrieve the value from is now `account_id` instead of `account`, hence, the string `'account_id'` is used in the `pick_list_params` hash.

### Next section
The next section goes through toggle fields - a useful variation you can add to your input fields to give users of your connector some choice. [Go to our toggle field documentation](/developing-connectors/sdk/toggle-fields.md) or check out our [best practices](/developing-connectors/sdk/best-practices.md) for some tips.
