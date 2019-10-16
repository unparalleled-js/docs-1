---
title: Connector building - Coding patterns
date: 2019-10-15 17:00:00 Z
isTocVisible: true
---

# Connector building - Useful coding patterns
There are some known limitations to Workato's platform that have fixes in the works. In the meantime, here are some ways that you can easily solve for any limitations that you might find when building a custom connector.

## Handling special characters
One known limitation of relates closely to datapills in Workato. When JSON objects have keys that contain the following fields “-”,”<”,”>”,”!”, “@”, “#”,”$”, “%”, “^”, “&”, “\*”, “(“, “)”, “=”, “+”, “{“, “}”, “|”, “;”, “ ‘ “, “ \` “, “~”, “ , “, “ . “, “?”. When input or output fields are defined with names that have these special characters, input fields don’t show up and output datapills render incorrectly.

For example, schema defined where
{
	name: “due-date”
}
Would not show up as a string input field and datapills would turn render as long strings instead of datapills.

![Broken datapill](/assets/images/sdk/broken-datapill.png)
*When names of schema have special characters, datapills are renders incorrectly*

instead of

![Proper datapill](/assets/images/sdk/proper-datapill.png)
*There is a need to render them properly by switching out the special characters in their names*

Fortunately, there is a workaround which we highly recommend you build into your connector as well. ( You could even copy and paste the following if it fits.) We create a series of 3 methods, `format_schema`, `format_payload`, `format_schema` which can be called at the beginning and end of each `execute` block. We had done something similar in our earlier example when defining our action.

### `format_schema`
Sample code snippet:
```ruby
format_schema: lambda do |schema|
  if schema.is_a?(Array)
    schema.map do |array_value|
      call('format_schema', array_value)
    end
  elsif schema.is_a?(Hash)
    schema.map do |key,value|
      if %w[name].include?(key.to_s)
        value = call('replace_special_characters',value.to_s)
      elsif %w[properties toggle_field].include?(key.to_s)
        value = call('format_schema', value)
      end
      { key => value }
    end.inject(:merge)
  end
end,
```
Since fields where names contain keys cause errors, we need a service method that can take invalid schema and convert any names into formats we can handle. The method above recursively searches through a given schema and replaces any special characters with a valid string. For example,

```ruby
[
  {
    control_type: "text",
    label: "Txn date",
    type: "string",
    name: "Txn-Date"
  }
]
```

Would be converted to

```ruby
[
  {
    control_type: "text",
    label: "Txn date",
    type: "string",
    name: "Txn__hyp__Date"
  }
]
```

This allows the field to be displayed in Workato with no observable difference to the end user as labels are preserved. This service method can be called on either static or dynamic schema.

### `format_payload`
Sample code snippet:
```ruby
format_payload: lambda do |payload|
  if payload.is_a?(Array)
    payload.map do |array_value|
      call('format_payload', array_value)
    end
  elsif payload.is_a?(Hash)
    payload.map do |key, value|
      key = call('inject_special_characters',key)
      if value.is_a?(Array) || value.is_a?(Hash)
        value = call('format_payload', value)
      end
      { key => value }
    end.inject(:merge)
  end
end,
```

This method should be called when input from the job is passed through the `execute:` block. At this stage, this method recursively searches through the input hash and finds any markers that a special character was replaced and transforms it back to its original form. The return from this method is a formatted payload with all special characters replaced back in.

### `format_response`
Sample code snippet:
```ruby
format_response: lambda do |payload|
  if payload.is_a?(Array)
    payload.map do |array_value|
      call('format_response', array_value)
    end
  elsif payload.is_a?(Hash)
    payload.map do |key, value|
      key = call('replace_special_characters',key)
      if value.is_a?(Array) || value.is_a?(Hash)
        value = call('format_response',value)
      end
      { key => value }
    end.inject(:merge)
  end
end,
```

When working with responses, we still need to match them back to the Workato valid schema. As such, we need to transform the keys in our responses from our network traffic back to replace any special characters. This should be done immediately after we get a response back from a HTTP call.

### `replace_special_characters` and `inject_special_characters`
Samples code snippet:
```ruby
replace_special_characters: lambda do |input|
  input.gsub(/[-<>!@#$%^&*()+={}:;'"`~,.?|]/,
    '-' => '__hyp__',
    '<' => '__lt__',
    '>' => '__gt__',
    '!' => '__excl__',
    '@' => '__at__',
    '#' => '__hashtag__',
    '$' => '__dollar__',
    '%' => '__percent__',
    '^' => '__pwr__',
    '&' => '__amper__',
    '*' => '__star__',
    '(' => '__lbracket__',
    ')' => '__rbracket__',
    '+' => '__plus__',
    '=' => '__eq__',
    '{' => '__rcrbrack__',
    '}' => '__lcrbrack__',
    ';' => '__semicol__',
    '\'' => '__apost__',
    '`' => '__bckquot__',
    '~' => '__tilde__',
    ',' => '__comma__',
    '.' => '__period__',
    '?' => '__qmark__',
    '|' => '__pipe__',
    ':' => '__colon__',
    '\"' => '__quote__'
    )
end,

inject_special_characters: lambda do |input|
  input.gsub(/(__hyp__|__lt__|__gt__|__excl__|__at__|__hashtag__|__dollar__|\__percent__|__pwr__|__amper__|__star__|__lbracket__|__rbracket__|__plus__|__eq__|__rcrbrack__|__lcrbrack__|__semicol__|__apost__|__bckquot__|__tilde__|__comma__|__period__|__qmark__|__pipe__|__colon__|__quote__|__slash__|__bslash__)/,
    '__hyp__' => '-',
    '__lt__' => '<',
    '__gt__' => '>',
    '__excl__' => '!',
    '__at__' => '@',
    '__hashtag__' => '#',
    '__dollar__' => '$',
    '__percent__' => '%',
    '__pwr__' => '^',
    '__amper__' => '&',
    '__star__' => '*',
    '__lbracket__' => '(',
    '__rbracket__' => ')',
    '__plus__' => '+',
    '__eq__' => '=',
    '__rcrbrack__' => '{',
    '__lcrbrack__' => '}',
    '__semicol__' => ';',
    '__apost__' => '\'',
    '__bckquot__' => '`',
    '__tilde__' => '~',
    '__comma__' => ',',
    '__period__' => '.',
    '__qmark__' => '?',
    '__pipe__' => '|',
    '__colon__' => ':',
    '__quote__' => '"'
    )
end
```

## Defining arrays of primitive datatypes doesn’t render properly as input fields
When defining arrays of primitive data types like integers and strings, Workato fails to render them properly at the moment.

### Sample input schema
```ruby
object_schema: lambda do
        [
 	          {
            		name: 'array_of_string',
            		type: :array,
            		of: :string
            }
        ]
      end,
```

Which is then rendered as

![Array of strings rendered wrongly](/assets/images/sdk/array-of-string-wrong.png)
*Arrays of primitive data types like strings show up as single input fields*

Users are unable to enter in an array of variables since there is no input field for list datapills.

As such, we recommend a simple workaround when looking to render these fields as input or output fields.

### Suggested input schema
```ruby
  object_schema: lambda do |action_type|
          [
   	         if action_type == ‘create’ || action_type == ‘update’
               {
              		name: array_of_object_string,
              		type: ‘array’,
              		of: ‘object’,
  		              properties: [
  			                     {
  				                     name: ‘value’
  			                     }
  		              ]
                }
  	        else
                {
              		name: 'array_of_string',
              		type: ‘array’,
              		of: ‘string’
               }
  	       end
         ]
  end,
```
Which is then rendered as

![Array of strings rendered corrected](/assets/images/sdk/array-of-string-correct.png)
*Users are able to map an array of values to this input field*

### Followup data manipulation
Since the input schema defined is not exactly an array of string, the input from this field would look something like this:
```json
{
  "array_of_object_string": [
  	{
    	"value": "abc"
  	},
  	{
    	"value": "def"
  	}
  ]
}
```

Which can be easily transformed back into an array through a map function.

```ruby
array_of_object_strings = input[‘array_of_object_strings’]&.map { |item| item[‘value’] } || []
```

## Summary
Object based actions and triggers in Connectors are something we highly recommend. Not only do they improve user experience for your users but they also make it so much easier to extend your connector when done properly.
Here are a few of the main concepts we covered:
1. Defining the base schema of each object in a service method. Don’t forget to include an input argument that allows you to adjust the schema based on the action type.
2. Use object_definitions to pull the proper input and output field schema based on the object selected
3. When defining actions or triggers, make sure to declare all blocks especially `description` blocks. This will vastly increase usability for your users.
4. Contain any general processing inside execute blocks but leverage on dedicated object execute methods (i.e. `create_invoice_execute`)for anything specific.
i.e. Use `format_paylod` and `format_response` in the execute block before using the `create_#{object}_execute` method.

### Usability rules
Great connectors not only have great architecture but look and feel great to use. Read on to find out more about how you can make your connector easy to use.

[Usability](connector-building-usability-rules.md)
