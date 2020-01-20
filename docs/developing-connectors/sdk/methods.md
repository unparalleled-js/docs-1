---
title: SDK - Methods
date: 2018-05-24 14:00:00 Z
---

# Methods
Not all ruby public instance methods are available when building connectors on Workato's SDK framework. Below we go through a list of whitelisted ruby methods that you can use in any block when building your connector.

Furthermore, you'll be able to declare personal reusable methods to use in any block when using your SDK.

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
       <td>at</td>
       <td>Creates a new time object with the given argument. <br>
       <a href="https://apidock.com/ruby/Time/at/class">More details here.</a>
       </td>
     </tr>
     <tr>
       <td>abs</td>
       <td>Returns the absolute value of number.
       </td>
     </tr>
     <tr>
       <td>ago</td>
       <td>Go back in time. Returns timestamp. <br>
       <pre><code style="display: block; white-space: pre-wrap;">2.days.ago #2017-01-15T12:30:00.000000-07:00 if time now is 2017-01-17T12:30:00.000000-07:00
30.minutes.ago #2017-01-15T12:30:00.000000-07:00 if time now is 2017-01-15T13:00:00.000000-07:00
30.seconds.ago #2017-01-15T12:30:00.000000-07:00 if time now is 2017-01-15T12:30:30.000000-07:00</code></pre>
       <a href="https://apidock.com/rails/ActiveSupport/Duration/ago">More details here.</a>
       </td>
     </tr>
     <tr>
       <td>as_string</td>
       <td>Decode byte sequence as string in given encoding
        <pre><code style="display: block; white-space: pre-wrap;">"0J/RgNC40LLQtdGC\n".decode_base64.as_string('utf-8')</code></pre>
       </td>
     </tr>
     <tr>
       <td>as_utf8</td>
       <td>Decode byte sequence as string in given encoding
        <pre><code style="display: block; white-space: pre-wrap;">"0J/RgNC40LLQtdGC\n".decode_base64.as_string('utf-8')</code></pre>
       </td>
     </tr>
     <tr>
       <td>blank?</td>
       <td>Returns true if value is null or an empty string, otherwise false
       </td>
     </tr>
     <tr>
       <td>binary?</td>
       <td>Returns true if value is a binary array
       </td>
     </tr>
     <tr>
       <td>beginning_of_hour</td>
       <td>Returns timestamp for top-of-the-hour for given timestamp<br>
       <pre><code style="display: block; white-space: pre-wrap;">"2017-06-01T16:56:00.000000-07:00".to_time.beginning_of_hour #2017-06-01T16:00:00.000000 +0000</code></pre>
       </td>
     </tr>
     <tr>
       <td>beginning_of_day</td>
       <td>Returns timestamp for midnight for given timestamp<br>
       <pre><code style="display: block; white-space: pre-wrap;">"2017-06-08T22:30:10.000000-07:00".to_time.beginning_of_day #2017-06-08T00:00:00.000000 +0000</code></pre>
       </td>
     </tr>
     <tr>
       <td>beginning_of_week</td>
       <td>Returns timestamp for midnight for the start of the week (Mon) for given timestamp<br>
       <pre><code style="display: block; white-space: pre-wrap;">"2017-08-18T00:00:00.000000-07:00".to_time.beginning_of_week #2017-08-14T00:00:00.000000 +0000</code></pre>
       </td>
     </tr>
     <tr>
       <td>beginning_of_month</td>
       <td>Returns timestamp for midnight for the start of the month for given timestamp<br>
       <pre><code style="display: block; white-space: pre-wrap;">"2017-01-30T22:35:00.000000-07:00".to_time.beginning_of_month #2017-01-01T00:00:00.000000 +0000</code></pre>
       </td>
     </tr>
     <tr>
       <td>beginning_of_year</td>
       <td>Returns timestamp for midnight for the start of the year for given timestamp<br>
       <pre><code style="display: block; white-space: pre-wrap;">"2017-01-30T22:35:00.000000 -07:00".to_time.beginning_of_year #2017-01-01T00:00:00.000000 +0000</code></pre>
       </td>
     </tr>
     <tr>
       <td>bytes</td>
       <td>Returns an array of bytes for a given string.<br>
       <pre><code style="display: block; white-space: pre-wrap;">"Hello".bytes # ["72","101","108","108","111"]</code></pre>
       </td>
     </tr>
     <tr>
       <td>bytesize</td>
       <td>Returns the length of a given string in bytes.<br>
       <pre><code style="display: block; white-space: pre-wrap;">"Hello".bytesize # 5</code></pre>
       </td>
     </tr>
     <tr>
       <td>capitalize</td>
       <td>Capitalizes the first character of the string
       </td>
     </tr>
     <tr>
       <td>compact</td>
       <td>Returns a hash with non nil values. <br>
       <a href="https://apidock.com/rails/Hash/compact">More details here.</a>
       </td>
     </tr>
     <tr>
       <td>decode_base64</td>
       <td>Decode using Base64 algorithm
       </td>
     </tr>
     <tr>
       <td>decode_hex</td>
       <td>Decode hexadecimal into binary string
       </td>
     </tr>
     <tr>
       <td>decode_urlsafe_base64</td>
       <td>Decode using URL-safe modification of Base64 algorithm
       </td>
     </tr>
     <tr>
       <td>decryt</td>
       <td>Decrypt the enrypted string using AES-256-CBC algorithm. Input should be in RNCryptor V3 format.
       </td>
     </tr>
     <tr>
       <td>dig</td>
       <td>Retrieves the value object corresponding to the index passed in <br>
       The dig method is often used to strip away layers in nested arrays/hashes. For example, we use the dig method often when dealing with XML data formats. <br>
      <a href="/developing-connectors/sdk/data-format/xml-format.md">More details here.</a></td>
    </tr>
    <tr>
      <td>dst?</td>
      <td>Returns true if the time is within Daylight Savings Time for the specified time zone.</td>
   </tr>
    <tr>
      <td>each</td>
      <td>Basic iterator<br><code>[1, 2, 3].each { |i| puts i }</code></td>
    </tr>
    <tr>
      <td>each_byte</td>
      <td>Passes each byte in str to the given block, or returns an enumerator if no block is given. <a href="https://apidock.com/ruby/v2_5_5/String/each_byte">More details here.</a></td>
    </tr>
    <tr>
      <td>each_char</td>
      <td>Passes each character in str to the given block, or returns an enumerator if no block is given. <a href="https://apidock.com/ruby/String/each_char">More details here.</a></td>
    </tr>
    <tr>
      <td>each_with_index</td>
      <td>Iterator returned with an index<br><code>[1, 2, 3].each_with_index { |item, index| puts "#{index}:#{item}" }</code><br> <a href="https://apidock.com/ruby/Enumerator/each_with_index">More details here.</a></td>
    </tr>
    <tr>
      <td>each_with_object</td>
      <td>Iterator returned with an object which you can define
        <pre><code style="display: block; white-space: pre-wrap;">[%w(foo bar).each_with_object({}) { |str, hsh| hsh[str] = str.upcase }
# => {'foo' => 'FOO', 'bar' => 'BAR'}</code></pre>
      <a href="https://apidock.com/rails/Enumerable/each_with_object">More details here.</a></td>
    </tr>
    <tr>
      <td>encode_hex</td>
      <td>Converts binary string to its hex representation
      <pre><code style="display: block; white-space: pre-wrap;">"0J/RgNC40LLQtdGC\n".decode_base64.encode_hex</code></pre>
      </td>
    </tr>
    <tr>
      <td>encode_sha256</td>
      <td>Encode using SHA256 algorithm
      </td>
    </tr>
    <tr>
      <td>encode_base64</td>
      <td>Encode using Base64 algorithm
      </td>
    </tr>
    <tr>
      <td>encode_url</td>
      <td>URL encode a string
      <pre><code style="display: block; white-space: pre-wrap;">'Hello World'.encode_url # 'Hello%20World'</code></pre>
      </td>
    </tr>
    <tr>
      <td>encode_urlsafe_base64</td>
      <td>Encode using URL-safe modification of Base64 algorithm
      </td>
    </tr>
    <tr>
      <td>encode_www_form</td>
      <td>Join hash into url-encoded string of parameters
      <pre><code style="display: block; white-space: pre-wrap;">{"apple" => "red green", "2" => "3"}.encode_www_form #"apple=red+green&2=3"</code></pre>
      </td>
    </tr>
    <tr>
      <td>ends_of_month</td>
      <td>Returns a new date/time representing the end of the month<br>
      <pre><code style="display: block; white-space: pre-wrap;">"2017-08-18T00:00:00".to_time.end_of_month #2017-08-31 23:59:59 +0000</code></pre>
      </td>
    </tr>
    <tr>
      <td>ends_with?</td>
      <td>Returns true if string ends with a specific pattern. False otherwise<br>
      <pre><code style="display: block; white-space: pre-wrap;">"Hello!".ends_with?("!") #true</code></pre>
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
      <td>even?</td>
      <td>Returns true if integer is an even number<br> <a href="https://apidock.com/ruby/Integer/even%3F">More details here.</a></td>
    </tr>
    <tr>
      <td>except</td>
      <td>Returns a hash that includes everything except given keys<br>
      <pre><code style="display: block; white-space: pre-wrap;">{ name: "Jake", last_name: "Paul", age: "22" }.except(:name, :last_name) # { :age => "22" } </code></pre>
      <a href="https://apidock.com/rails/Hash/except">More details here.</a></td>
    </tr>
    <tr>
      <td>exclude</td>
      <td>Returns true if field does not contain a value. Case sensitive<br>
      <pre><code style="display: block; white-space: pre-wrap;">"Partner account".exclude?("Partner") #false</code></pre>
      <a href="https://apidock.com/rails/Hash/except">More details here.</a></td>
    </tr>
    <tr>
      <td>fetch</td>
      <td>Returns a value from the hash for the given key.<br> <a href="https://apidock.com/ruby/Hash/fetch">More details here.</a></td>
    </tr>
    <tr>
      <td>first</td>
      <td>Returns the first item in a list. Can also be used to return the first n items in a list.<br> <a href="https://apidock.com/ruby/Array/first">More details here.</a></td>
    </tr>
    <tr>
      <td>flatten</td>
      <td>Flatten multi-dimensional array to simple array<br>
      <pre><code style="display: block; white-space: pre-wrap;">[[1, 2, 3],[4,5,6]].flatten #[1, 2, 3, 4, 5, 6]</code></pre>
      <a href="https://apidock.com/ruby/Array/flatten">More details here.</a></td>
    </tr>
    <tr>
      <td>format_json</td>
    <td>
        Convert request to json format and expect response body in json format
    </td>
    </tr>
    <tr>
      <td>format_map</td>
      <td>Create an array of strings by formatting each row of given array<br>
      <pre><code style="display: block; white-space: pre-wrap;">[[{name: 'Jake', age: 23}].format_map('Name: %{name}, Age: %{age}') #['Name: Jake, Age: 23']
[[22, 45], [33, 88]].format_map('Id: %s, Count: %s') #['Id: 22, Count: 45', 'Id: 33, Count: 88']</code></pre>
      <a href="http://docs.workato.com/formulas/array-list-formulas.html#formatmap">More details here.</a></td>
    </tr>
    <tr>
      <td>format_xml</td>
    <td>
        Convert request to XML format and expect response body in XML format
    </td>
    </tr>
    <tr>
      <td>from_now</td>
      <td>Go forward in time. Returns timestamp of the moment that the formula was executed with the specified time period added, in Pacific time (UTC-8/UTC-7)<br>
      <pre><code style="display: block; white-space: pre-wrap;">4.months.from_now #2017-05-23T14:40:07.338328-07:00
2.days.from_now #2017-01-05T14:40:07.338328-07:00
30.minutes.from_now
12.seconds.from_now</code></pre></td>
    </tr>
    <tr>
      <td>group_by</td>
      <td>
        Group arrays into sets.<br>
        <a href="http://apidock.com/rails/Enumerable/group_by">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>gsub</td>
      <td>Substitute a pattern with value. Case sensitive<br>
      <pre><code style="display: block; white-space: pre-wrap;">"Jean Marie".gsub(/J/, "M") #"Mean Marie"</code></pre>
      <a href="https://apidock.com/ruby/String/gsub">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>has_key?</td>
      <td>Returns true if the given key is present in hash.<br> <a href="https://apidock.com/ruby/v1_9_3_392/Hash/has_key">More details here.</a></td>
    </tr>
    <tr>
      <td>headers</td>
      <td>
        Add headers to a request<br>
        <code>.headers(Authorization: "Bearer HTB674HJK1")</code>
      </td>
    </tr>
    <tr>
      <td>hmac_md5</td>
      <td>
        Creates HMAC_MD5 signature<br>
        <pre><code style="display: block; white-space: pre-wrap;">"username:password:nonce".hmac_md5("key")</code></pre>
      </td>
    </tr>
    <tr>
      <td>hmac_sha1</td>
      <td>
        Creates HMAC_SHA1 signature<br>
        <pre><code style="display: block; white-space: pre-wrap;">"username:password:nonce".hmac_sha1("key")</code></pre>
      </td>
    </tr>
    <tr>
      <td>hmac_sha256</td>
      <td>
        Creates HMAC_SHA256 signature<br>
        <pre><code style="display: block; white-space: pre-wrap;">"username:password:nonce".hmac_sha256("key")</code></pre>
      </td>
    </tr>
    <tr>
      <td>hmac_sha512</td>
      <td>
        Creates HMAC_SHA512 signature<br>
        <pre><code style="display: block; white-space: pre-wrap;">"username:password:nonce".hmac_sha512("key")</code></pre>
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
      <td>include?</td>
      <td>
        Returns true if field contains a value. False otherwise<br>
        <a href="https://apidock.com/ruby/String/include%3F">More details here.</a>
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
      <td>in_time_zone</td>
      <td>
        Converts the time to given time zone<br>
        <pre><code style="display: block; white-space: pre-wrap;">"2017-09-06T18:30:15.671720-05:00".to_time.in_time_zone("America/Los_Angeles") #"2017-09-06T16:30:15.671720-07:00"</code></pre>
      </td>
    </tr>
    <tr>
      <td>is_a?</td>
      <td>Returns true if class is the class of obj, or if class is one of the superclasses of obj or modules included in obj.<br> Workato currently supports the following classes - Array, Hash, Time, String, Integer, Float <br>
      <a href="https://apidock.com/ruby/Object/is_a%3F">More details here.</a></td>
    </tr>
    <tr>
      <td>is_true?</td>
      <td>Converts a value to boolean and returns true if value is truthy.</td>
    </tr>
    <tr>
      <td>is_not_true?</td>
      <td>Converts a value to boolean and returns true if value is not truthy.</td>
    </tr>
    <tr>
      <td>iso8601</td>
      <td>Convert a date/date-time variable to ISO8601 format</td>
    </tr>
    <tr>
      <td>join</td>
      <td>Returns the last item in a list. Can also be used to return the last n items in a list.
      <a href="https://apidock.com/ruby/Array/join">More details here.</a></td>
    </tr>
    <tr>
      <td>jwt_encode_rs256</td>
      <td>Creates JWT with RS256 - RSA using SHA-256 hash algorithm
      <pre><code style="display: block; white-space: pre-wrap;">workato.jwt_encode_rs256({ name: "John Doe" }, "PEM key") # => "eyJhbGciO..."</code></pre>
      </td>
    </tr>
    <tr>
      <td>last</td>
      <td>Join array elements into a string
      <a href="https://apidock.com/ruby/Array/last">More details here.</a></td>
    </tr>
    <tr>
      <td>ljust</td>
      <td>Aligns string to left and pads with whitespace or pattern until string is specified length
      <pre><code style="display: block; white-space: pre-wrap;">" test".ljust(10, "*") # " test*****"</code></pre>
      <a href="https://apidock.com/ruby/String/ljust">More details here.</a></td>
    </tr>
    <tr>
      <td>lookup</td>
      <td>Lookup a record from your lookup tables defined in Workato.
      <pre><code style="display: block; white-space: pre-wrap;">lookup('States list', 'State code': 'AZ')['State name'] #"Arizona"</code></pre>
      <a href="http://docs.workato.com/formulas/other-formulas.html#lookup">More details here.</a></td>
    </tr>
    <tr>
      <td>lstrip</td>
      <td>Remove white space from the beginning of string.
      <pre><code style="display: block; white-space: pre-wrap;">"     Test     ".lstrip #"Test     "</code></pre>
      <a href="https://apidock.com/ruby/String/lstrip">More details here.</a></td>
    </tr>
    <tr>
      <td>map</td>
      <td>Returns a new array after invoking block on each element</td>
    </tr>
    <tr>
      <td>md5_hexdigest</td>
      <td>Creates message digest using the MD5 Message-Digest Algorith.
      <pre><code style="display: block; white-space: pre-wrap;">"hello".md5_hexdigest #5d41402abc4b2a76b9719d911017c592</code></pre>
      </td>
    </tr>
    <tr>
      <td>match?</td>
      <td>Returns true if a string contains a pattern. Case sensitive.
      <pre><code style="display: block; white-space: pre-wrap;">"Jean Marie".match?(/Marie/) #true</code></pre>
      </td>
    </tr>
    <tr>
      <td>merge</td>
      <td>
        Returns a new hash containing merged contents.<br>
        <a href="https://ruby-doc.org/core-2.2.0/Hash.html#method-i-merge">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>next</td>
      <td>
        Returns the next object in the enumerator, and move the internal position forward.<br>
        This is often used in config_fields where you can use <code>next</code> as a way to add a guard clause that checks inputs before the lambda function is executed.
        <pre><code style="display: block; white-space: pre-wrap;">object_definition: {
  document: {
    fields: lambda do |connection, config_fields|
      next [] if config_fields.blank?
      get("https://www.webmerge.me/api/documents/#{config_fields["document_id"]}/fields").map {
        |field| field.slice("name")
      }
    end
  }
}</code></pre>
        <a href="https://apidock.com/ruby/Enumerator/next">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>now</td>
      <td>Returns timestamp of the moment that the formula was executed, in Pacific time (UTC-8/UTC-7)
      <pre><code style="display: block; white-space: pre-wrap;">now #2017-01-23T14:04:53.365908-08:00
now + 2.days #2017-01-25T14:04:53.365908-08:00</code></pre>
      </td>
    </tr>
    <tr>
      <td>odd?</td>
      <td>Returns true if integer is an odd number<br> <a href="https://apidock.com/ruby/Integer/odd%3F">More details here.</a></td>
    </tr>
    <tr>
      <td>only</td>
      <td>
        White list a comma-separate  of fields<br>
        <code>object_definition["user"].only("id", "name")</code>
      </td>
    </tr>
    <tr>
      <td>ordinalize</td>
      <td>Turns a number into an ordinal string used to denote the position in an ordered sequence such as 1st, 2nd, 3rd, 4th..
      <pre><code style="display: block; white-space: pre-wrap;">"1".ordinalize # "1st"</code></pre>
      </td>
    </tr>
    <tr>
      <td>parameterize</td>
      <td>Replaces special characters in a string
      <pre><code style="display: block; white-space: pre-wrap;">"öüâ".parameterize #"oua"</code></pre>
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
      <td>parse_json</td>
      <td>
        Works the same way as json.parse <br>
        <a href="https://apidock.com/ruby/v1_9_3_392/JSON/parse">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>parse_yaml</td>
      <td>
        Parse a YAML string. Supports true, false, nil, numbers, strings, arrays, hashes<br>
      <pre><code style="display: block; white-space: pre-wrap;">workato.parse_yaml("---\nfoo: bar") # => { "foo" => "bar" }</code></pre>
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
      <td>pluralize</td>
      <td>
        Returns the plural form of the word in the string <br>
        <a href="https://apidock.com/rails/String/pluralize">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>pop</td>
      <td>
        Removes the last element from self and returns it, or nil if the array is empty.<br>
        If a number n is given, returns an array of the last n elements (or less) and removes it from array.
        <pre><code style="display: block; white-space: pre-wrap;">a = [ "a", "b", "c", "d" ]
a.pop     #=> "d"
a.pop(2)  #=> ["b", "c"]
a         #=> ["a"]</code></pre>
        <a href="https://apidock.com/ruby/Array/pop">More details here<.</a></td>
      </td>
    </tr>
    <tr>
      <td>presence</td>
      <td>
        Returns the value if present. Otherwise returns nil
        <pre><code style="display: block; white-space: pre-wrap;">nil.presence #nil
"".presence #nil
0.presence #0</code></pre>
        <a href="https://apidock.com/rails/Object/presence">More details here<.</a></td>
      </td>
    </tr>
    <tr>
      <td>present?</td>
      <td>
        Returns true if the field has a value. False otherwise
        <pre><code style="display: block; white-space: pre-wrap;">nil.present? #false
"".present? #false
0.present? #true</code></pre>
        <a href="https://apidock.com/rails/Object/presence">More details here<.</a></td>
    </tr>
    <tr>
      <td>puts</td>
      <td>ruby version of <code>console.log</code> or <code>stdout</code>, not the same as <b>put</b> method
      <br>
      Any outputs using the puts method shows up in the console log when testing in the code editor. Use this to aid in your debugging.
      </td>
    </tr>
    <tr>
      <td>rand</td>
      <td>Random number between 0 and 1</td>
    </tr>
    <tr>
      <td>reject</td>
      <td>
        Selectively returns elements for which the block returns false. Similar but opposite of <b>select</b>.<br>
        <a href="http://apidock.com/ruby/v1_9_3_392/Array/reject">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>render_yaml</td>
      <td>
        Render an object into a YAML string.<br>
        <pre><code style="display: block; white-space: pre-wrap;">workato.render_yaml({ "foo" => "bar" }) # => "---\nfoo: bar\n"</code></pre>
      </td>
    </tr>
    <tr>
    <td>response_format_json</td>
      <td>
        Expect response in json format
      </td>
    </tr>
    <tr>
      <td>response_format_raw</td>
      <td>
        Expect response in raw format
      </td>
    </tr>
    <tr>
      <td>response_format_xml</td>
      <td>
        Expect response in XML format
      </td>
    </tr>
    <tr>
      <td>request_format_json</td>
    <td>
        Convert request to json format
    </td>
    </tr>
    <tr>
      <td>request_format_multipart_form</td>
    <td>
        Convert request to multipart_form format
    </td>
    </tr>
    <tr>
      <td>request_format_www_form_urlencoded</td>
    <td>
        Convert request to url-encoded format
    </td>
    </tr>
    <tr>
      <td>request_format_xml</td>
    <td>
        Convert request to XML format
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
      <td>reverse</td>
      <td>
        Reverse string or array
      </td>
    </tr>
    <tr>
      <td>rjust</td>
      <td>
        Aligns string to right and pads with whitespace or pattern until string is specified length
        <pre><code style="display: block; white-space: pre-wrap;">"test".rjust(5) #" test"
"test".rjust(10, "*!") #"*!*!* test"
</code></pre>
        <a href="https://apidock.com/ruby/String/rjust">More details here<.</a></td>
    </tr>
    <tr>
      <td>round</td>
      <td>
        Round the number by regular rounding rules
        <pre><code style="display: block; white-space: pre-wrap;">11.99.round #12
11.555.round(2) #11.56
</code></pre>
        <a href="https://apidock.com/ruby/Float/round">More details here<.</a></td>
    </tr>
    <tr>
      <td>rstrip</td>
      <td>
        Remove white space from the end of string
        <pre><code style="display: block; white-space: pre-wrap;">" Test ".rstrip #" Test"</code></pre>
        <a href="https://apidock.com/ruby/String/rstrip">More details here<.</a></td>
    </tr>
    <tr>
      <td>scan</td>
      <td>
        Remove white space from the end of string
        <pre><code style="display: block; white-space: pre-wrap;">"Thu, 01/23/2014".scan(/\d+/).join("-") #01-23-2014</code></pre>
        <a href="https://apidock.com/ruby/String/scan">More details here<.</a></td>
    </tr>
    <tr>
      <td>select</td>
      <td>
        Selectively returns elements for which the block returns true.<br>
        <a href="http://apidock.com/ruby/v1_9_3_392/Array/select">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>SHA1</td>
      <td>
        Encrypts a given string using the SHA1 encryption algorithm.<br>
        <pre><code style="display: block; white-space: pre-wrap;">"abcdef".sha1.encode_base64 # "H4rBDyPFtbwRZ72oS4M+XAV6d9I="</code></pre>
        <a href="https://ruby-doc.org/stdlib-2.4.0/libdoc/digest/rdoc/Digest/SHA1.html">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>slice</td>
      <td>
        Returns a substring of a given string, as defined by start indexes and length<br>
        <pre><code style="display: block; white-space: pre-wrap;">"Jean Marie\.slice(0,3) #"Jea"</code></pre>
        <a href="https://apidock.com/ruby/String/slice">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>smart_join</td>
      <td>
        Join array to string. Removes empty and nil values. Trims the white space before joining<br>
        <pre><code style="display: block; white-space: pre-wrap;">[nil, " ", " Hello ", "   World "].smart_join(" ") #Hello World</code></pre>
        <a href="http://docs.workato.com/formulas/array-list-formulas.html#smartjoin">More details here.</a>
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
      <td>split</td>
      <td>
        Split string into an array by using defined pattern as delimiter<br>
        <pre><code style="display: block; white-space: pre-wrap;">"Split string".split() #["Split", "string"]
"Split string".split("t") #["Spli", " s", "ring"]</code></pre>
        <a href="https://apidock.com/ruby/String/split">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>strip</td>
      <td>
        Strip white spaces from the beginning and the end of string<br>
        <pre><code style="display: block; white-space: pre-wrap;">"    This is an example   ".strip #"This is an example"</code></pre>
        <a href="https://apidock.com/ruby/String/strip">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>strip_tags</td>
      <td>
        Strip html tags from the string<br>
        <pre><code style="display: block; white-space: pre-wrap;">"<html><body>Double bubble</body></html>".strip_tags #"Double bubble"</code></pre>
      </td>
    </tr>
    <tr>
      <td>strftime</td>
      <td>
        Format date or time using %-placeholders
      </td>
    </tr>
    <tr>
      <td>sub</td>
      <td>
        Substitute the first occurrence of a pattern with value.
        <pre><code style="display: block; white-space: pre-wrap;">"Mean Marie".sub(/M/, "J") #"Jean Marie"
"Hello".sub(/[aeiou]/, "\*") #"H*llo"</code></pre>
      </td>
    </tr>
    <tr>
      <td>tap</td>
      <td>
        Yields x to the block, and then returns x.<br>
        The tap method is often used for transformation. For example, we use the tap method below to transform a webhook's payload. If a webhook payload is deliever in this format.
        <pre><code style="display: block; white-space: pre-wrap;">{
  "id" => {"value" => 1},
  "name" => {"value" => 2}
}</code></pre>
        You can use tap to transform it into a more user friendly JSON.<br>
        <pre><code style="display: block; white-space: pre-wrap;">webhook_notification: lambda do |input, payload|
  payload.tap do |output|
    output.each { |k, v| output[k] = v["value"] }
  end
end</code></pre>
      The final JSON will look like this <code>{"id"=>1, "name"=>2}</code><br>
      <a href="https://apidock.com/ruby/Object/tap">More details here.</a></td>
    </tr>
    <tr>
      <td>to_currency</td>
      <td>
        Convert to currency string<br>
        <pre><code style="display: block; white-space: pre-wrap;">1234567890.50.to_currency    # $1,234,567,890.50</code></pre>
      </td>
    </tr>
    <tr>
      <td>to_currency_code</td>
      <td>
        Convert alpha-2/3 country code or country name to ISO4217 currency code<br>
        <pre><code style="display: block; white-space: pre-wrap;">"India".to_currency_code #INR</code></pre>
      </td>
    </tr>
    <tr>
      <td>to_currency_name</td>
      <td>
        Convert alpha-2/3 country code or country name to ISO4217 currency name<br>
        <pre><code style="display: block; white-space: pre-wrap;">"India".to_currency_name #Rupees</code></pre>
      </td>
    </tr>
    <tr>
      <td>to_currency_symbol</td>
      <td>
        Convert alpha-2/3 country code or country name to ISO4217 currency symbol<br>
        <pre><code style="display: block; white-space: pre-wrap;">"India".to_currency_symbol # ₨</code></pre>
      </td>
    </tr>
    <tr>
      <td>to_country_alpha2</td>
      <td>
        Convert alpha-3 country code or country name to alpha2 country code<br>
        <pre><code style="display: block; white-space: pre-wrap;">"India".to_country_alpha2 #IN
"IND".to_country_alpha2 #IN</code></pre>
      </td>
    </tr>
    <tr>
      <td>to_country_alpha3</td>
      <td>
        Convert alpha-2 country code or country name to alpha2 country code<br>
        <pre><code style="display: block; white-space: pre-wrap;">"Australia".to_country_alpha2 #AUS
"AU".to_country_alpha2 #AUS</code></pre>
      </td>
    </tr>
    <tr>
      <td>to_country_name</td>
      <td>
        Convert alpha-2/3 country code or country name to ISO3166 country name<br>
        <pre><code style="display: block; white-space: pre-wrap;">"GB".to_country_name #United Kingdom
"GBR".to_country_name #United Kingdom</code></pre>
      </td>
    </tr>
    <tr>
      <td>to_country_number</td>
      <td>
        Convert alpha-2/3 country code or country name to ISO3166 country numeric code<br>
        <pre><code style="display: block; white-space: pre-wrap;">"India".to_country_number #356</code></pre>
      </td>
    </tr>
    <tr>
      <td>to_date</td>
      <td>
        Convert string or timestamp to date. Can be formatted.<br>
        <pre><code style="display: block; white-space: pre-wrap;">"12/24/2014 10:30PM".to_date(format: "MM/DD/YYYY")</code></pre>
      </td>
    </tr>
    <tr>
      <td>to_f</td>
      <td>
        Convert to float. Numbers will be rounded up or down according to regular rounding rules.<br>
        <pre><code style="display: block; white-space: pre-wrap;">45.to_f #45.0</code></pre>
      </td>
    </tr>
    <tr>
      <td>to_hex</td>
      <td>
        Converts binary string to its hex representation
      </td>
    </tr>
    <tr>
      <td>to_i</td>
      <td>
        Convert to integer. Decimals are always rounded down.<br>
        <pre><code style="display: block; white-space: pre-wrap;">45.67.to_i #45</code></pre>
      </td>
    </tr>
    <tr>
      <td>to_json</td>
      <td>
        Converts hash or array into JSON string<br>
        <pre><code style="display: block; white-space: pre-wrap;">{"a" => "c d", "2" => "3"}.to_json #"{"a":"c d","2":"3"}"</code></pre>
      </td>
    </tr>
    <tr>
      <td>to_phone</td>
      <td>
        Convert string or number to a formatted phone number<br>
        <pre><code style="display: block; white-space: pre-wrap;">5551234.to_phone # 555-1234
1235551234.to_phone(area_code: true) # (123) 555-1234
1235551234.to_phone(delimiter: " ") # 123 555 1234
1235551234.to_phone(country_code: 1) # +1-123-555-1234</code></pre>
      </td>
    </tr>
    <tr>
      <td>to_param</td>
      <td>
        Returns a string representation for use as a URL query string<br>
        <pre><code style="display: block; white-space: pre-wrap;">{name: 'Jake', age: '22'}.to_param #name=Jake&age=22</code></pre>
      </td>
    </tr>
    <tr>
      <td>to_s</td>
      <td>
        Convert to string<br>
        <pre><code style="display: block; white-space: pre-wrap;">45.67.to_s #"45.67"</code></pre>
      </td>
    </tr>
    <tr>
      <td>to_state_code</td>
      <td>
        Convert state name to code<br>
        <pre><code style="display: block; white-space: pre-wrap;">"California".to_state_code #CA</code></pre>
      </td>
    </tr>
    <tr>
      <td>to_state_name</td>
      <td>
        Convert state code to name<br>
        <pre><code style="display: block; white-space: pre-wrap;">"CA".to_state_name #"CALIFORNIA"</code></pre>
      </td>
    </tr>
    <tr>
      <td>to_time</td>
      <td>
        Convert string or date to timestamp<br>
        <pre><code style="display: block; white-space: pre-wrap;">"2014-11-21".to_time #2014-11-21 00:00:00 +0000</code></pre>
      </td>
    </tr>
    <tr>
      <td>to_xml</td>
      <td>
        Converts hash or array into XML string<br>
        <pre><code style="display: block; white-space: pre-wrap;">{"name" => "Ken"}.to_xml(root: "user") # &#60;user&#62;&#60;name&#62;Ken&#60;/name&#62;&#60;/user&#62;</code></pre>
      </td>
    </tr>
    <tr>
      <td>today</td>
      <td>
        Date today. Returns the date of the moment that the formula was executed, in Pacific time (UTC-8/UTC-7).<br>
        <pre><code style="display: block; white-space: pre-wrap;">today #2016-07-13
today + 2.days #2016-07-15</code></pre>
      </td>
    </tr>
    <tr>
      <td>transliterate</td>
      <td>
        Replaces non-ASCII characters with an ASCII approximation, or if none exists, a replacement character which defaults to '?'<br>
        <pre><code style="display: block; white-space: pre-wrap;">'Chloé'.transliterate #Chloe</code></pre>
      </td>
    </tr>
    <tr>
      <td>upcase</td>
      <td>
        Convert string to upper case<br>
        <pre><code style="display: block; white-space: pre-wrap;">"Convert to UPCASE".upcase #"CONVERT TO UPCASE"</code></pre>
      </td>
    </tr>
    <tr>
      <td>uniq</td>
      <td>
        Return unique items in an array<br>
        <pre><code style="display: block; white-space: pre-wrap;">[1.0, 1.5, 1.0].uniq #[1.0, 1.5]</code></pre>
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
      <td>uuid</td>
      <td>Creates a UUID. Useful when sending strings that are unique in a request.  
      <pre><code style="display: block; white-space: pre-wrap;">workato.uuid #c52d735a-aee4-4d44-ba1e-bcfa3734f553 => "eyJhbGciO..."</code></pre>
      </td>
    </tr>
    <tr>
      <td>where</td>
      <td>
        Filter array by given condition
      </td>
    </tr>
    <tr>
      <td>while</td>
      <td>
        while loop statement.<br>
        <a href="https://www.tutorialspoint.com/ruby/ruby_loops.htm">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>wday</td>
      <td>
        Returns day of the week where 1 is Monday
      </td>
    </tr>
    <tr>
    <td>wrap</td>          
      <td>
        Wraps its argument in an array unless it is already an array <br> The wrap method is often used in the execute block.            while loop statement.<br>
        <pre><code>execute: lambda do |connection, input|            <a href="https://www.tutorialspoint.com/ruby/ruby_loops.htm">More details here.</a>
  {
    accounts: Array.wrap(get("/accounts", input)["records"])
  }
end</code></pre>
        This ensures that the <code>accounts</code> variable is always an array in spite of whatever return. At Workato, we often use this to guard against unexpected returns from the various APIs we work with.
        <br>
        <a href="https://apidock.com/rails/Array/wrap/class">More details here.</a>
      </td>
    </tr>
    <tr>
      <td>yday</td>
      <td>
        Returns day of the year<br>
        <pre><code style="display: block; white-space: pre-wrap;">"2016-07-19 10:45:30".to_time.yday #201</code></pre>
      </td>
    </tr>
    <tr>
      <td>yweek</td>
      <td>
        Returns week of the year<br>
        <pre><code style="display: block; white-space: pre-wrap;">"2016-07-19 10:45:30".to_time.yweek #29</code></pre>
      </td>
    </tr>
    <tr>
      <td>zip</td>
      <td>Used as a method called by arrays. Converts any arguments to arrays, then merges elements of self with corresponding elements from each argument. <br>
      <a href="https://apidock.com/ruby/Array/zip">More details here.</a>
      </td>          </td>
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
  - This is a hash of input variables. Leave blank if your method does not take inputs.

The input hash is passed into the method as an argument, which you may reference as so:

```ruby
methods: {
  factorial: lambda do |input|
    number = input[:number]
    ...
```

### Recursion
Methods can also be called within method code blocks. This means that a method can be called by another method or by itself. In the case of the factorial example provided above, note that the `factorial` method has some degree of recursion. Be careful when writing recursive loops by setting a failsafe as in the example below:

```ruby
if number > 1
  number * call(:factorial, { number: number - 1 })
else
  number
end
```

### Testing
The SDK console only allows testing of actions and triggers. To test your reusable method, write an action that encapsulates it.

### Summary
Reusable methods are powerful tools that can make development more efficient. It is especially useful when making schema introspection calls within the `object_definitions` or `input_schema` lambdas.

## Next section
Find out more about how to catch and expose errors that return from the API to users configuring your connector. This makes it much easier to debug actions or triggers using your custom connector.
[Go to our error handling documentation](/developing-connectors/sdk/error-handling.md).
