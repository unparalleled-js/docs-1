# Methods
Not all ruby public instance methods are available when building connectors on Workato's SDK framework. Below we go through a list of whitelisted ruby methods which you can use in any block when building your connector.

Furthermore, you'll be able to declare your own reusable methods to use in any block when using your SDK.

## Pre-defined Ruby methods
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>each</td>
      <td>Basic iterator<br><code>[1, 2, 3].each { |i| puts i }</code></td>
    </tr>
    <tr>
      <td>group_by</td>
      <td>
        Group arrays into sets.<br>
        <a href="http://apidock.com/rails/Enumerable/group_by">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>headers</td>
      <td>
        Add headers to a request<br>
        <code>.headers(Authorization: "Bearer HTB674HJK1")</code>
      </td>
    </tr>
    <tr>
      <td>params</td>
      <td>
        Add parameter to a request<br>
        <code>.params(api_key: "HTB674HJK1")</code>
      </td>
    </tr>
    <tr>
      <td>payload</td>
      <td>
        Add payload to a request<br>
        <code>.payload(id: "345")</code>
      </td>
    </tr>
    <tr>
      <td>ignored</td>
      <td>
        Ignore a comma-separate list of fields<br>
        <code>object_definition["user"].ignored("id", "created_at")</code>
      </td>
    </tr>
    <tr>
      <td>only</td>
      <td>
        White list a comma-separate  of fields<br>
        <code>object_definition["user"].only("id", "name")</code>
      </td>
    </tr>
    <tr>
      <td>required</td>
      <td>
        Make a comma-separate list of fields required<br>
        <code>object_definition["user"].required("id", "created_at")</code>
      </td>
    </tr>
    <tr>
      <td>inject</td>
      <td>
        Combine elements in an array using an operation.<br>
        <a href="http://apidock.com/ruby/Enumerable/inject">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>iso8601</td>
      <td>Convert a date/date-time variable to ISO8601 format</td>
    </tr>
    <tr>
      <td>map</td>
      <td>Returns a new array after invoking block on each element</td>
    </tr>
    <tr>
      <td>merge</td>
      <td>
        Returns a new hash containing merged contents.<br>
        <a href="https://ruby-doc.org/core-2.2.0/Hash.html#method-i-merge">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>pluck</td>
      <td>
        Select one or more attributes from an array of objects<br>
        <pre><code style="display: block; white-space: pre-wrap;">[
  {"id": 1, "name": "David"},
  {"id": 2, "name": "Peter"}
].pluck("id")</code></pre>
        returns <code>[1, 2]</code>
      </td>
    </tr>
    <tr>
      <td>rand</td>
      <td>Random number between 0 and 1</td>
    </tr>
    <tr>
      <td>select</td>
      <td>
        Selectively returns elements for which the block returns true.<br>
        <a href="http://apidock.com/ruby/v1_9_3_392/Array/select">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>error</td>
      <td>
        raise a job error with a user-defined error body.<br>
        <code>error("Unable to find Account with ID: 123")</code></a>
      </td>
    </tr>
    <tr>
      <td>reject</td>
      <td>
        Selectively returns elements for which the block returns false. Similar but opposite of <b>select</b>.<br>
        <a href="http://apidock.com/ruby/v1_9_3_392/Array/reject">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>sort</td>
      <td>
        Sort function returning new sorted array.<br>
        <a href="http://apidock.com/ruby/v1_9_3_392/Array/sort">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>sort_by</td>
      <td>
        Sort function returning self.<br>
        <a href="http://apidock.com/ruby/v1_9_3_392/Array/sort_by">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>utc</td>
      <td>
        Convert Time to UTC timezone.<br>
        <a href="http://ruby-doc.org/core-2.2.0/Time.html#method-c-utc">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>puts</td>
      <td>ruby version of <code>console.log</code> or <code>stdout</code>, not the same as <b>put</b> method
      <br>
      Any outputs using the puts method shows up in the console log when testing in the code editor. Use this to aid in your debugging.
      </td>
    </tr>
    <tr>
      <td>while</td>
      <td>
        while loop statement.<br>
        <a href="https://www.tutorialspoint.com/ruby/ruby_loops.htm">More details here.</a>
      </td>
    </tr>
  </tbody>
</table>

This list can and will be expanded constantly, feel free to [contact us](mailto:developer@workato.com) to update/add to this list.

## Reusable Methods

Reusable methods are supported in Workato. Reusable methods help keep your custom adapter code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and may be used in any code block.

Such methods are declared using the `methods` block. This block is a top-level block, similar to triggers and actions.

### Sample code snippet
```ruby
{
  title: "Math",

  connection: {...},

  methods: {
    factorial: lambda do |input|
      number = input[:number]
      if number > 1
        number * call(:factorial, { number: number - 1 })
      else
        number
      end
    end,

    hello: lambda do
      puts "Hello world"
    end
  },

  actions: {
    factorial: {
      input_fields: lambda do
        [
          { name: "number", type: :integer }
        ]
      end,

      execute: lambda do |connection, input|
        { factorial: call(:factorial, { number: input["number"] }) }
      end
    },

    say_hello: {
      execute: lambda do
        call(:hello)
      end
    }
  },
```

### The `call` method

```ruby
call(:name, { number: 1 })
```

Use the `call()` method to reference a method. This method takes in two parameters:

1. Method name
  - Use the method name defined. You can use either `:method_name` (symbol) or `"method_name"` (string) representations.
2. Input hash (optional)
  - This is a hash of input variables. Leave blank if your method does not take in an input.

The input hash is passed into the method as an argument, which you may reference as so:

```ruby
methods: {
  factorial: lambda do |input|
    number = input[:number]
    ...
```

### Recursion
Methods can also be called within method code blocks. This means that a method can be called by another method or by itself. In the case of the factorial example provided above, note that the `factorial` method has some degree of recursion. Be careful when writing recursive loops by setting failsafes as in the example below:

```ruby
if number > 1
  number * call(:factorial, { number: number - 1 })
else
  number
end
```

### Testing
The SDK console only allows testing of actions and triggers. To test your reusable method, write an action which encapsulates it.

### Summary
Reusable methods are powerful tools that can make development more efficient. It is especially useful when making schema introspection calls within the `object_definitions` or `input_schema` lambdas.

## Next section
Find out more about how to catch and expose errors that return from the API to users configuring your connector. This makes it much easier to debug actions or triggers using your custom connector.
[Go to our error handling documentation](/developing-connectors/sdk-2/error-handling.md).
