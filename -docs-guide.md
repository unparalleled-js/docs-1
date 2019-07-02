---
title: Workato docs style guide
date: 2018-04-08 10:45:00 Z
---

# Workato Docs Style Guide

## Introduction
Workato docs is the main resource Workato users should turn to when looking for ways to configure their recipes, for error resolution and for general learning about the tools on the platform.  

The docs are structured such that basic concepts about Workato are upfront (recipe building, Workato concepts etc.). Thereafter, more complex/advanced topics and features are covered.

Since users who are reading our documentation are mostly looking for a way to solve their problems or are looking to learn how to use a feature, the docs should be comprehensive and cover how-tos effectively.

## Tools to download

- Github Desktop ([View guide](https://docs.google.com/document/d/1QyKcPPN8fSTBAGqZpTFuusmyPjIv04piXBFDemGWi6g/edit#heading=h.h2lp2qtwzjtz))
- Atom/Sublime text

## How articles should be structured

- You should use your own discretion about article structure, but generally, write in a clear, step-by-step manner.

- Include examples and use cases/recipes if you think it makes your articles clearer.


## Adapter docs

Generally, adapter docs should contain the following:

- Brief description of adapter
- API version currently supported
- Supported editions/versions
- How to connect to the adapter (sandbox/prod and other details)
- Roles and permissions required to connect, if any
- Trigger and action configuration specific to the adapter
- Common errors while using the adapter

If you are writing documentation about an adapter that requires many section, adopt the following convention: Have one .md file that gives a rough introduction about the adapter. You can have separate .md files for every subsequent topic you wish to cover about the adapter.

If there are only 1-3 topics covered, you may write 1 .md file and link them in SUMMARY to an anchor. (eg. connectors/s3.html#how-to-connect-to-amazon-s3-on-workato)

You can include links to the adapters’ own documentation or API where needed.


## Product updates

Product updates are available on https://docs.workato.com/product-updates.html. This page is updated with new product features/connector enhancements/platform enhancements. The link to the product updates page is available on the platform (Profile dropdown > Product updates).


## Language/Punctuation

Use clear, simple language. Assume our readers are smart, but don’t assume they know everything. We often cover complex, technical topics, so imagine you’re talking to a friend or family member to make sure you’re being clear.

Do not use first-person “ie. I connected this application…”.
Generally, you can use second-person “You should ensure that…” or avoid pronouns altogether “Ensure that apps are connected before…”

### Using the em-dash/en-dash: “—” and “–”:

Ensure that there are spaces on both sides of the dashes.
Examples: `This sentence is long — make it shorter` & `10 Jul – 15 Jul`


## Using markdown (.md) structure

As a general rule, we do not use numbered headers (ie. no 1.1, 1.1.2)
Headers should not span more than 1 line (~52 chars max.)
Use your own discretion for all header size guidelines.  

Title;
Headlines are indicated with one ‘#’. This is the largest header and are only used for the title/topic of your article.
# Title

Headers;
These headers are used within an article.
## Header

Sub-headers;
These headers are used within a topic in an article.
### Sub-header

Try as far as possible to not use the h4 headers ‘####’ unless necessary.

### Others:
Bold: **test**
Italics: _test_

## Inserting code/code snippets

If you need to mention a formula, datapill or code in-line, wrap them in `code`  so that it appears in grey.

Code snippets can be wrapped in ``` code ``` for it to appear as follows:
```
value_parser :process_entity_ref do |raw_input_ref|
  if raw_input_ref.keys.include?("value")
    { "value" => raw_input_ref["value"] }
```

## Using images/gifs

**Please use tinypng.com to optimize all images to reduce file size so the pages load quickly. Use ezgif.com for gifs.**

You should use images and gifs when they are helpful in explaining a procedure/concept. Keep your .gifs to less than 10s in length.

As a good practice, you should add a caption to images and gifs whenever possible. The caption should explain the main point of the image succinctly.  

### Guidelines

Images should be inserted into individual folders in `docs/assets/images`. If you are adding to an existing article or updating one, please find the folder that the existing images are in. Note that some folders are nested within other folders.

Generally, the folders should have the same name as the article you are writing.

Image names should be meaningful — do not name your images image1.png. They should indicate the image content, eg. `salesforce-connection-success.png`. This is to allow others who work on the articles after you to be able to find the images they need easily.

Image names should have no spaces, only hyphens.

**If images are being replaced, you should delete the old ones.**


## Inserting links

There should be as many links as possible in your articles. Think about a Wikipedia/wikia structure where there are links on terms, names and concepts.

Links to other documents within docs.workato.com should be links to the .md file’s path instead of to the weblink
Provide links to useful recipes whenever possible. If these are recipes you have created, ensure that they are set to ‘public’ and have good descriptions (how it works) and in-action comments.

## Updating ‘SUMMARY’

SUMMARY.md is the table of contents of the entire docs page. You should update this document when you add new content to docs.

This allows users to navigate to specific portions of your article or to different .md files within one topic.


## Working with Github Desktop
https://docs.google.com/document/d/1QyKcPPN8fSTBAGqZpTFuusmyPjIv04piXBFDemGWi6g/edit?usp=sharing
Follow the guide above for using Github desktop, editing docs on your local machine and committing them to the workato/docs repository.


## Reviewing docs
https://docs.google.com/document/d/12Fy2eOJTaLz9VtiUguh_gkomuo2YHvyUT4H5aiEcVvY/edit
Please assign the appropriate person to review product docs. Use the above as a rough guide when assigning PMs (Eeshan, Jan, Bennett, Calvin and Grace).
