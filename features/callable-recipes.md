---
title: Callable recipes
date: 2017-04-05 14:00:00 Z
---

# Callable recipes
Callable recipes are a type of recipe that can be called from another recipe. This helps to reduce the length of your recipes by separating a repeatable set of actions into a callable recipe that can be called from other recipes that require the same steps.

A callable recipe is triggered by a call from another recipe instead of a trigger event in an application.

Callable recipes can also be exposed as REST endpoints using the [API Platform feature](/api-management.md).

## Advantages of using callable recipes

| Advantages | Details |
| ---------- | ------- |
| Easier to test | By grouping a set of actions into a separate recipe instead of repeating them in the same recipe, you reduce the effort needed to change and test the steps. |
| More readable | Instead of having really long recipes, break it out into smaller recipes that can be called. |
| Sharing across recipes | If you have a standard error notification policy, you can create a recipe and then have all recipes call this recipe for error notification. |
| Share across accounts and with partners | You can expose REST APIs to your business partners. e.g. a REST API that provides inventory status to your suppliers. |

## Other related chapters:
 * [Walk-through](callable-recipes/walk-through.md)
 * [New call for recipe trigger](callable-recipes/new-call-trigger.md)
 * [Call recipe actions](callable-recipes/call-recipe-action.md)
 * [Return response from recipe action](callable-recipes/return-response-action.md)
 * [Callable recipe as a REST endpoint](callable-recipes/rest-endpoint.md)
