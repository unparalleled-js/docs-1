---
title: API Endpoint Management
date: 2020-01-20 00:00:00 Z
---

# API Endpoint Management

Workato groups several similar API endpoints into API collection. The API collection overview page displays all API endpoints in this collection. Navigate to this page from **Tools** > **API Platform** > **API collections** tab > **Select an API collection**.

You should see something like this:

![API collection overview](~@img/api-mgmt/api-collection-overview.png)
*API collection overview*

## Setting up an API Endpoint

The first step in setting up an API endpoint is to create a recipe that uses the [Callable recipes by Workato](/features/callable-recipes.md) connector as a trigger.

The next step is to organize these recipes into one or more API Collections. Generally, an API Collection should contain endpoints whose access pattern has some common features, so that you can manage them together. For example, a set of Salesforce endpoints that are intended to be called by recipes used with the Sales team might be put together in an API Collection.

In this guide, we will go through API endpoint configurations
- [How to activate an API endpoint](#activating-or-deactivating-an-endpoint)
- [How to customize URL path for an endpoint](#customize-url-path-for-an-endpoint)
- [How to view individual endpoint](#viewing-an-endpoint)
- [How to test individual endpoints](#testing-an-endpoint)

## Creating an Endpoint

Clicking on **Create new endpoint** within the API Collection tab brings up a dialog that allows you to add a new Endpoint to the API Collection. The recipe for this endpoint can be chosen from any callable recipe: it does not have to be in the same folder as other existing collection endpoints.

![Create endpoint dialog](~@img/api-mgmt/add-new-endpoint.png)
*Create endpoint dialog*

## Editing an Endpoint

The ellipsis (**•••**) icon in the upper-right corner of the listed endpoint within the API Collection brings up a menu that allows editing or deleting an individual endpoint within the collection. The editing dialog looks like this:

![Edit endpoint dialog](~@img/api-mgmt/edit-endpoint.png)
*Edit endpoint dialog*

Editing allows changing the name, recipe, HTTP Method (such as POST), and the URL path to the API collection.

:::warning
Changes may require clients of the API to make adjustments on their end, so that their recipes, scripts, etc. still work. Deleting an endpoint removes it from the collection and makes it inaccessible to any clients that had previously been granted access to it through the collection.
:::

### Customize URL path for an Endpoint

Open up the editing dialog for the selected endpoint.

![Customize endpoint URL](~@img/api-mgmt/customize-endpoint-url.png)
*Customize endpoint URL*

:::warning
Changes to the resource URL may require clients of the API to make adjustments on their end.
:::

## Activating or Deactivating an Endpoint

Toggle individual endpoints between **Active**/**Inactive**. See here for more [information](/api-mgmt/api-collections.md#activating-or-deactivating-an-endpoint).

| State    | Description |
| -------- | ----------- |
| Active   | Active endpoints are callable from API requests. To set an endpoint to the **Active** state, the recipe associated with the endpoint must first be running.
| Inactive | Inactive endpoints cannot be called remotely. Using this slider to toggle to **Inactive** does not, however, stop the associated recipe. |

## Viewing an Endpoint

Select an API endpoint from the API collections overview page to bring up a page with detailed documentation on that endpoint. These details are also available in this [OpenAPI file downloadable](/api-mgmt/api-collections.md#machine-readable-documentation-openapi) from the API collections page.

There are several sections within the information section.

![Endpoint information section](~@img/api-mgmt/view-endpoint.png)
*Endpoint information section*

### Implementation notes

These come from the recipe description and describe what the recipe does.

### Parameters

This section lists the parameters that are required to be input as part of the call to the API. For a GET method, parameters should be sent as query strings that are part of the URL. For a POST or PUT method, parameters should be sent in JSON format in the body of the request.

### Response

When a call to the endpoint is made, a status message will be returned to the client. This section also documents the responses if the call to the endpoints was successful and any response data that is sent along with the status.

| Code | Description |
| ---- | ----------- |
| 200  | If the call was successful, the response message will be returned with a "success reply". |
| error codes | If a call to the API fails, then an error status will be returned to the HTTP client. This section documents the possible error codes that might be returned. |

## Testing an Endpoint

To the right of the **Parameters** section, there is a **Try it out** button. This can be used to make a REST call to the endpoint for testing purposes.

The input parameters can be entered in the **Parameters** section of the endpoint description. Often, the **Example value** shown in the endpoint description will suffice for a test. For example:

![Parameter input](~@img/api-mgmt/test-endpoint-parameters.png)
*Parameters input*

Once the required parameters are entered, click the Test button at the bottom of the screen. A successful test might produce results like this:

![Test response](~@img/api-mgmt/test-response.png)
*Test response*

This shows a "Success" return code (200).

If the response value is not 200, the test results in an error. There can be numerous reasons for an error.

The most common error when performing a test from the same account that owns the callable recipe is "Invalid request" (500). This usually indicates that the input parameters were incorrect: not all required parameters were supplied or had values that are invalid for the target recipe.

## More information

Read our walkthrough for API collections configuration:
- [How to create an API collection](/api-mgmt/api-collections.md#creating-an-api-collection)
- [How to edit an API collection](/api-mgmt/api-collections.md#editing-an-api-collection)
- [How to customize URL path for API collection](/api-mgmt/api-collections.md#customize-url-path-for-api-collection)
- [How to obtain machine-readable documentation (openAPI)](/api-mgmt/api-collections.md#machine-readable-documentation-openapi)
