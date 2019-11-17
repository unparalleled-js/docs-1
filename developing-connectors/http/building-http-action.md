---
title: HTTP connector - Building a HTTP action
date: 2019-11-17 11:00:00 Z
isTocVisible: true
---

## Building a HTTP action
After you have setup your [HTTP connection](/developing-connectors/http/connection-setup.md), you can now configure HTTP actions.

You can build any actions supported by an API on the HTTP connector (for example, `GET`, `POST`, or `DELETE` actions).

To start, give your request a name to identify it. This also changes the Workato action name at the recipe-level.

![Provide request name](/assets/images/developing-connectors/http/send-request-action.png)
*Provide request name*

## Workato HTTP wizard
Workato has a 3-step HTTP wizard that prompts you to make a test request to the API endpoint. This wizard will try to provide a recommended HTTP configuration for your endpoint wherever possible.

Click `Start guided setup` to begin.

> You may exit this setup wizard at any point if you wish to configure the action manually.

### Example HTTP action
We will be going through an example of building a HTTP action using the Workato HTTP wizard - **Create venue in Eventbrite**.

## Step 1: Provide HTTP method and request URL
To begin, provide the absolute API endpoint you wish to call, and the HTTP method of that endpoint. These should be available via the app's API documentation.

![Step 1: Provide HTTP method and request URL](/assets/images/developing-connectors/http/step1-provide-request-url.png)
*Step 1: Provide HTTP method and request URL*

In this example, we wish to create a venue in Eventbrite. When referring to the documentation, we see that this API is a `POST` call with an endpoint of `https://www.eventbriteapi.com/v3/venues/`. We'll fill out the fields as follows.

![Configuring HTTP method and request URL](/assets/images/developing-connectors/http/step1-configured-method-and-url.gif)
*Configuring HTTP method and request URL*

## Step 2: Configure and send sample request
Here, you configure the sample request to send to the API endpoint.

For some endpoints, Workato recommends a sample request to send, which you can either choose to customize further or remove entirely to build it from scratch.

In our example, Workato recommends a sample request body for Eventbrite's create venue endpoint, which we'll choose to use.

![Step 2: RecipeIQ recommendations for HTTP configuration](/assets/images/developing-connectors/http/step2-recipeiq-recommendation.png)
*Step 2: RecipeIQ recommendations for HTTP configuration*

For endpoints which Workato has not seen before, or if you chose to remove RecipeIQ recommendations, you'll see the following screen.

![Step 2: Configure and send sample request](/assets/images/developing-connectors/http/step2-unconfigured.png)
*Step 2: Configure and send sample request*

You can copy and paste sample request JSON from the API docs to create your sample request body and add required headers.

To create a sample Eventbrite venue, we used the recommended JSON request body and added values for Madison Square Garden:

```ruby
{
  "venue": {
    "name": "Madison Square Garden",
    "address": {
      "address_1": "4 Pennsylvania Plaza",
      "city": "New York City",
      "region": "",
      "postal_code": "10001",
      "country": "USA"
    }
  }
}
```
*Note: there is an incorrect input value for "__country__" in this sample request*

Once all required fields are filled in, we're able to click `Send request`. Workato sends the request you've built to the app, and provides the full response back. In the following, we see that there's an error with the country we sent to Eventbrite as they only accept 2 character country codes.

![Request error due to wrong country code value](/assets/images/developing-connectors/http/request-error.png)
*Request error due to wrong country code value*

Changing the country value from "USA" to "US" should resolve that. Click on `Back` to edit the JSON request, then on `Send request` again. Our request should be successful this time.

![Request successful](/assets/images/developing-connectors/http/request-success.png)
*Request successful*

Check the connected application to see if your changes are successfully reflected on the system. In our example, we should see that the venue Madison Square Garden has been added to our Eventbrite venues list.

## Step 3: Review HTTP configuration
With a successful request, we know that:
- the connection has been set up successfully,
- the API endpoint we're sending our request to is correct, and
- we're sending the right set of request body fields e.g. all required fields with valid values

We can choose to customize our request further by going back to Step 2 to configure our request and sending another sample request. When we're happy with the configuration, click `Apply configuration`. The request and response will be saved to the Workato HTTP action, and the HTTP wizard returns you to the recipe page.

![Configuration applied for HTTP action](/assets/images/developing-connectors/http/configuration-applied.gif)
*Configuration applied for HTTP action*

## Final HTTP configuration
We know that this configuration works - now it's time to replace the static values with datapills that hold dynamic values.

In this example, we want each job to automatically create a new venue that had been created in Salesforce - not to create multiple instances of "Madison Square Garden"! .

You should do the same for any values that should be dynamic instead of static.

![Replace static values with datapills](/assets/images/developing-connectors/http/replace-static-values-with-datapills.gif)
*Replace static values with datapills*

This is what the HTTP configuration should look like after I've put in my relevant datapills. This HTTP action is now ready to be used!

![Completed HTTP action](/assets/images/developing-connectors/http/completed-http-action.gif)
*Completed HTTP action*

## Output
The output of this HTTP action depends on the **response body schema** defined in your HTTP configuration.

## HTTP setup documentation
You can also browse the other chapters:

- [Setting up a connection to your app](/developing-connectors/http/connection-setup.md)
- [Building a HTTP trigger](/developing-connectors/http/building-http-trigger.md)
