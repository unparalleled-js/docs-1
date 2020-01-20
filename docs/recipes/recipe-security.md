---
title: Security Best Practices for Recipes
date: 2020-01-20 09:50:00 Z
---

# Security Best Practices for Recipes

## Handling Sensitive Data

Recipes are private by default and data
within them is protected. However, when authoring recipes, Workato
recommends that you avoid placing sensitive data as plain text within
the steps of a recipe. This especially applies to tokens or keys used
for authentication to remote services, but also to personal
information (such as names, addresses, emails) and anything else that
should be kept private to the recipe author.

One reason to avoid this is that when a recipe is cloned, hard-coded
data in the recipe steps is copied. Generally this should not be done
for sensitive data.

Another reason to avoid hard-coded sensitive data in recipe steps is
that it is harder to control and manage such data if it is spread out
across multiple recipes. It is a better practice to centralize it so
that it is maintained in one place.

To avoid sensitive data in recipe steps:

1. Do not place authentication information used for a Connector (the HTTP Connector for example) in the recipe, as a hard-code string. For example, don't specify a URL such as `https://www.myapp.com/services/api-method?token=3ababe3235Z2z` in the recipe. Our suggested approach is instead to store the authentication token in the properties for the Connection. See for example [setting up authentication with a query parameter](/developing-connectors/http/connection-setup.md#authentication-type-query-params).

2. For other sensitive data, consider placing it in the [Account Properties](https://docs.workato.com/features/account-properties.md) and make reference to it as needed in recipes.

3. Another approach is to use a data pill to pass the sensitive data from a previous step to the current step. (This assumes that prior step has also not used hard-coded sensitive data).

When a recipe is cloned, and copied into another Workato account, data that is part of the recipe steps will be copied, but Connection properties and Account Properties are not copied, nor are the dynamic contents of data pills. 

