---
title: Workato connectors - SurveyMonkey
date: 2017-02-16 06:15:00 Z
---

# SurveyMonkey
[SurveyMonkey](https://www.surveymonkey.com) is a widely used online forms and survey software that allows users to easily design and send surveys and forms, as well as analyze the results.

## API version
The SurveyMonkey connector uses [SurveyMonkey REST API V3](https://developer.surveymonkey.com/api/v3/#getting-started).

## Supported editions and versions
The SurveyMonkey connector works with all SurveyMonkey plans. However, the [**Extract data** capability](https://www.surveymonkey.com/pricing/details/) is required to retrieve survey responses from SurveyMonkey, i.e. using the **Completed survey response** trigger or the **Send survey invite via email and wait for response** action.

## How to connect to SurveyMonkey on Workato
The SurveyMonkey connector uses [OAuth2 authentication](https://developer.surveymonkey.com/api/v3/#authentication) to authenticate with SurveyMonkey.

1. First, head into Workato to the connections tab and select SurveyMonkey as the app you would like to connect to.

![SM workato connection screen](~@img/connectors/survey_monkey/survey_monkey_connection_page_1.png)

2. An authorization page will appear, in this screen, log in to SurveyMonkey using your credentials. 
**Note:**
* It will be best to use an admin account to avoid permission roadblocks.

3. Read the terms of service and hit Authorize.
 **Note:**
 * Ensure to select `view answers along with responses` if you would like to use the `New Survey Responses` trigger in Workato. 

![oauth 2 login screen](~@img/connectors/survey_monkey/survey_monkey_connection_page_3.png)

## How to unlink Workato on SurveyMonkey
If you ever need to change your selections in the authorization page, you might have to unlink the current app in SurveyMonkey. Head over to your `accounts` page, where you will see the currently linked applications. Simply click on `Unlink` to remove the connection. 

![survey monkey application links](~@img/connectors/survey_monkey/survey_monkey_connection_page_2.png)