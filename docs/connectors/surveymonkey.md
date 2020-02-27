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

1. First, head into Workato to the connections tab and select Survey Monkey as the app you would like to connect to.

![image](https://user-images.githubusercontent.com/29884948/75465998-79e06f80-5957-11ea-96f7-83c9c6f97a84.png)

2. An Ouath2 screen will appear, in this screen, log in to Survey Monkey using your credentials. 
**Note: It will be best to use an admin account to avoid permission roadblocks.** 

![image](https://user-images.githubusercontent.com/29884948/75465798-266e2180-5957-11ea-95a3-767582fa73a8.png)

3. Read the terms of service and hit Authorize.
 **Note: Ensure to select [view answers along with responses] if you would like to use the [New Survey Responses] trigger in Workato.** 

![image](https://user-images.githubusercontent.com/29884948/75475886-9be1ee00-5967-11ea-8c8e-4ca70bbe6f27.png)

