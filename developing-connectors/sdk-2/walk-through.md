# Connector Walkthrough

Workato's SDK platform was designed to be simple to pick up but powerful enough to connect with most APIs out there.

In this chapter, our aim is to get our feet wet by building a simple connector to something that most people can identify with - **Star Wars!** This API we will be using is free to use and allows us to access information about Star Wars characters, planets, vehicles and much more. For simplicity, we will refer to this API as SWAPI. **[Check out the API over here.](https://swapi.co/)**

This walkthrough aims to show case how we can use the Workato Software Development Kit (SDK) to create a custom connector to retrieve information from this API and how we can use this custom connector in building a recipe. If you haven't already checked out the our **[overview]**, now is the time to do so!

To find the fully built custom connector for today's walkthrough, **[click here])**. You will need to have a valid Workato account to install the connector before being able to see the connector code.

## The basics
To create a new custom connector, you'll need to navigate to the connector SDK page which is located under `Tools > Connector SDK`.

![Navigating to SDK](/assets/images/sdk/Navigating-to-SDK.png)
*Located in the top navigation bar in Workato*

In the following page, you'll be able to see a button in the top right corner to create connector. Clicking on that will bring you to the homepage for your new custom connector.

![Naming your custom connector](/assets/images/sdk/custom-connector-title-description.png)
*Fill in the name of your custom connector*

Over here, I've named my custom connector **Star Wars information** because it returns Star Wars information (duh). I've also added in a cool Star Wars logo which shows up in any recipes that I use this connector with. After this, go ahead and remove any skeleton code that might be inside the code editor below.

> Don't forget to give your new custom connector an appropriate name, description and logo. The name of your connector is how you can find your connector amongst the many that show up during the app search bar when building a recipe.

## Creating a connection
When we want to connect to an API, the first thing that we need to find out is the authentication method that that particular API requires. Authentication is a process that applications use to verify your identity before they choose to send information to you. This is similar to how we have usernames and passwords to protect our social media accounts by forcing us to verify our identities. There are many different forms of authentication types for APIs like basic-auth or OAuth 2.0.

> Don't worry if these authentication terms seem foreign to you. For the purpose of this walkthrough, SWAPI uses the most simple form of authentication - no authentication. Other authentication types will be covered in later chapters.

While the Workato supports most forms of authentication, connecting to an API with no authentication is the most simple. An API that requires no authentication, like SWAPI, is when you are able to send requests to that API over the internet without having to first verify who you are.

### Sample Code Snippet
``` ruby
{
  title: 'Star Wars information',

  connection: {
    fields:
    [
      {
        name: "object",
        hint: "Type in the object you would like to test your connection with",
      }
    ]
  },

  test: lambda do
    get("https://swapi.co/api/#{connection["object"]}")
  end,

  # More code below but hidden for now!
}
```

> In this walkthrough, we first show sample code before going through each component. Feel free to copy this sample code into your code editor to follow along this walkthrough.

### `connection:`
Since SWAPI doesn't require anything from us, our `connection:` object looks relatively empty as well. Inside the `connection:` object, one of the things you'll be able to declare are input fields which will show up when users first make a connection using your connector. You'll be able to use this user input later.

In the example above, we have a `fields:` object which is where we have declared input fields. To see how it would look like to users, simply scroll down to the debugger console at the bottom of the page and open the connection tab.

![Connection input field](/assets/images/sdk/Connection-input-fields.png)
*How input fields look like to end users*

User input collected inside the `fields:` object be used whenever needed in any other part of the custom connector code even outside of the `connection:` object. There are other objects like just like `fields:` which you can declare inside the `connection:` object which we will go through later on.

### `test:`
Outside of our `connection:` object (outside of the curly braces `connection: { ... }`), we see another important feature of establishing a connection. Since Workato needs a way to provide feedback to you or any user of your connector on whether a connection has been successfully made, we need to declare a simple test that runs when the `Link your account` button is pressed.

Tests are run by sending HTTP requests to specific URLs. HTTP requests are one of the ways that applications talk to each other over the internet. There are a few types of calls that fall under the family of HTTP requests but if you're unfamiliar, its sufficient to know that we are using a GET request for our test today.

In the case of our SWAPI connector, we want to send a GET request to any URL endpoint that will successfully send us back information and a confirmation that our request was accepted (response returned with code: 200). Declared in the `test:` block, you'll see the `get()` function that executes a GET request to the URL inside its brackets. Over here, you can even use user input by referencing the `connection` object. In our sample code snippet above, we referenced the user's input to determine what URL to send a HTTP call to.

> Whenever we reference an object inside a string, `#{` and `}` must be prepended and appended to the object reference.

> The URL we sent the request to affects whether our connection would be successful. SWAPI only listens for GET requests on a few URLs documented [here](https://swapi.co/documentation#root). That means that you need to type either "films", "people", "planets", "species", "starships", "vehicles" into the input field to send a request to a valid URL.

### Testing your connection
Now that this is done, you can go ahead and press the `Link your account` button in the debugger console. With a valid input field for Object, you should see a success message.

![successful-connection](/assets/images/sdk/successful-connection.png)
*Congratulations! A connection was established*

That wasn't so hard right? Now that we've established a connection, lets get going with creating an action! Actions are the building blocks of any recipe on Workato. After a recipe is triggered, actions are the subsequent steps that you can configure during recipe design time to execute a workflow.

## Creating an action
SWAPI allows us to send GET requests and receive information about most things in Star Wars such as people, planets and even films. Today, we'll go through how we can build an action called `Get person by ID` that can retrieve information about a character in Star Wars and use the information returned in subsequent steps.

![Action revealed to user](/assets/images/sdk/get-character-by-id-action.png)
*How the Get person by ID action looks like when building a recipe*

### Sample Code Snippet
``` ruby
{
  title: 'Star Wars information',

  connection: { ... }, # Code for connection block is hidden

  test: { ... }, # Code for test block is hidden

  actions: {
    get_person_by_id: {
      input_fields: lambda do
        [
          {
            name: 'id',
            label: 'Person ID',
            type: 'integer',
            optional: false
          }
        ]
      end,

      execute: lambda do |connection, input|
        get("https://swapi.co/api/people/#{input["id"]}/")
      end,

      output_fields: lambda do
        [
          {
            name: "name",
            label: "Person name",
            type: "string"
          },
          {
            name: "birth_year",
            label: "Birth year",
            type: "string"
          },
          {
            name: "eye_color",
            label: "Eye color",
            type: "string"
          },
          {
            name: "gender",
            label: "Gender",
            type: "string"
          },
          {
            name: "hair_color",
            label: "Hair color",
            type: "string"
          },
          {
            name: "height",
            label: "Height"
          },
          {
            name: "mass",
            label: "Weight"
          },
          {
            name: "vehicles",
            label: "Vehicles",
            type: "array",
            of: "string"
          },
        ]
      end
    },
  },
}
```

### `actions:`
In the sample code snippet, we see another high level object - `actions:` - just like the `connection:` object and the `test:` object. This object contains the code that we will use to declare a new action. Remember to use indents to make sure your code is readable and that you don't get lost with all the curly braces and brackets.

#### `get_person_by_id:`
Now we get to the exciting part where we are able to define our `Get person by ID` action. This object can be named however you want but it should match what your action is trying to accomplish. Your action will also inherit this name but with the `_` replaced by spaces.

> The name of your action object should not contain any spaces. Use underscores instead which will be replaced by spaces on the front end.

Once you've created your action object, you'll now need to declare a few things in the action object such as the input fields to show users configuring the action, what HTTP requests to send as well as the datapills to show to users which they can then use in subsequent steps in their recipe.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Object</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>input_fields:</code></td>
      <td>This is where you can declare the input fields which are shown when users configure your action when building a recipe</td>
    </tr>
    <tr>
      <td><code>execute:</code></td>
      <td>This is where you can declare the HTTP request, the URL to send it to as well as any other follow up actions needed</td>
    </tr>
    <tr>
      <td><code>output_fields:</code></td>
      <td>This is where you can declare the datapills that are returned from the action.</td>
    </tr>
  </tbody>
</table>

##### `input_fields:`
In our action to get a Star Wars person by ID, we need the user to give this action an ID to send over to SWAPI. To do this, we need to define an input field inside the `input_fields:` that can capture this.

This is done by declaring an array (the square brackets `[]` immediately following `input_fields:`) of objects inside a lambda function. These objects (there can be multiple to represent multiple input fields) contain certain fields that you must define so Workato knows how to show this to the user and also how you can reference it later on in your `execute:` object.

> A lambda function is a function that is encapsulated between the `lambda do` and `end` after the `execute:` block. It accepts arguments `connection` and `input` which are Workato defined objects which are passed into the function during recipe run time. They correspond to the `connection:` object earlier and the `input_fields:` object which can be referenced by calling `input["id"]`. This would pull the users input into the `id` input field and can be used in any way during the execute block.

Back to our example, we have declared a single input field with the name `id`. The variable `label` which we declared is the input field name that is shown to end users during recipe build time. The variable `type:` defines what users would see in terms of the expected input data type. This could take on many forms such as strings or integers. Lastly, the variable `optional` is set to `false` to indicate that this action requires the input to be filled in. Workato defaults this to `true` if nothing is defined. We will cover these variables in greater detail later on.

![Input fields](/assets/images/sdk/input-field-screen.png)
*How the input field looks like in a recipe*

##### `execute:`
The `execute:` object is where we define what happens when this action is executed during a recipe in Workato. Over here, we have declared a lambda function which is run and the final output of all lines of code are passed back to Workato as the output.

Over here, we have declared a GET request to the URL `https://swapi.co/api/people/#{input["id"]}/` where the input["id"] is referenced from the user's input field. Your custom connector knows that to pull the input["id"] since we wrapped it inside `#{}`.

##### `output_fields:`
After the `execute:` is run, your custom connector still needs to know how to make sense of the return from the GET request. In Workato, input and output fields are defined in the exact same way where you can define an array of objects which correspond to different output fields. The different variables inside denote how the output field looks like and behaves on the front end.

In the case of our `Get person by ID` action and most other actions, this means properly defining the output fields to match the returned object from the GET request in the `execute:` block. Lets take a look how this is done by first studying a truncated sample returned object from the GET request where ID = 1.

**Sample returned object from SWAPI where ID = 1**
```ruby
{
  "name":"Luke Skywalker",
  "height":"172",
  "mass":"77",
  "hair_color":"blond",
  "skin_color":"fair",
  "eye_color":"blue",
  "birth_year":"19BBY",
  "gender":"male",
  "vehicles":[
    "https://swapi.co/api/vehicles/14/",
    "https://swapi.co/api/vehicles/30/"
  ],
  # Some portions of the object have been omitted
}
```

> Knowing what to expect in terms of the content of the returned object from your execute block is essential in defining your `output_fields:` object properly.

From the returned sample returned object above, we see that there are at least 9 fields that we need to define in our `output_fields:` lambda function. By referencing the `output_fields:` object we have defined above, you'll observe that the `name` of each object inside the array should match the name of each variable inside the sample returned object.

For example, the variable named `height` in the sample returned object would be mapped directly to the output_field object with `name:` = `height`. Labels come in useful over here to change the name of the datapill in the recipe to something more readable for end users. In this case, we have changed the datapill's label to `Height` instead of `height`.

![Output fields](/assets/images/sdk/output-field-screen.png)
*How the output fields looks like in a recipe*

Workato's SDK also allows you to define output fields for nested arrays and objects which we will cover in greater detail later on. For today's example, we can see that there is an array named `vehicles` in the sample returned object which contains a series of URLs which point to information about those vehicles. This is expected as Luke Skywalker could have driven multiple vehicles. To define an array, we need to declare the `type:` to `array` so that Workato knows to expect an array which could give multiple values. Lastly, we need to declare the data inside the array using `of:`. Since we are URLs are represented as strings, we declare `of:` to be assigned to the `string`.

### Testing your action
At the bottom of your code editor on Workato's SDK platform, you'll find our debugger console which is perfect for testing and debugging your actions and triggers before creating recipes with them.

![Debugger console](/assets/images/sdk/debugger-console-screen.png)
*Debugger console appears after successfully testing an action*

When testing an action, you are prompted on the screen for the input fields. We currently support a basic way to mimic user input. In the pop-up box, you'll see that the skeleton for an input object has been generated for you which matches our input field object. Simply fill in the ID of your chosen person and click `Run` to execute the `Get person by ID` action.

The debugger console should open up which would give you feedback on the input_fields you supplied, the output fields generated and the HTTP requests sent and the response received. An `Error` tab would also show up if an error occurred  during the running of the action and a `Console` tab would show up if you had any `puts` methods executed at any point in the action code.

> `puts` is a ruby method that allows you to print anything to the console. This is useful in debugging by allowing you to print objects and variables, checking them in the `Console` tab and seeing if they match what you expected.

If all went well (you can just copy our sample code snippets and successfully run the action after making a connection), you should see the debugger console open up with green highlights to indicate a successful action. Be reminded that this only mean't that no errors occurred during the execution of the recipe and that other errors may remain such as logic errors.

## Creating a recipe using your new custom
With our new SWAPI custom connector and action, you can now use this action in any recipe you build within the account. Simply search for the name of your new SWAPI connector when choosing an application and start building!

![Debugger console](/assets/images/sdk/building-recipe.png)
*Debugger console appears after successfully testing an action*

Be sure to test your action in a recipe in addition to the tests on the debugger console to ensure that your action is usable. Often, this means exploring how you can define your `input_fields:` and `output_fields:` objects to make it easy for users to configure your action.
