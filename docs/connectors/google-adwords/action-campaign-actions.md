---
title: Workato connectors - Google AdWords Action - Campaign Actions
date: 2020-01-29 06:00:00 Z
---

# Google Ads action - Campaigns
The Google AdWords connector allows you to interact with campaigns in a specific client customer's Google Ads account. Currently, we allow users to retrieve, remove or update campaigns using this connector.

## Get Campaigns

### Input fields

| Field name | Description |
|---|---|
| Client Customer ID | The client customer ID of the advertising account from which data should be included in the report. This Client Customer ID should be the ID of one the accounts managed by the Google Ads manager account specified in this connection. This should come in the form of XXX-XXX-XXXX. <br><br> Click [here](https://support.google.com/google-ads/answer/1704344?hl=en) to learn more on how to get your client customer ID. |
| Campaign ID | Use this to retrieve a specific campaign by it's assigned ID. Leave this and Campaign Name blank to retrieve all campaigns. |
| Campaign Name | Use this to retrieve a specific campaign by it's assigned name. This name must match exactly. Leave this and Campaign ID blank to retrieve all campaigns.|



### Output fields
The output of this action is a list of campaigns with the following attributes.

| Field name | Description |
|---|---|
| ID | The ID of the newly created Campaign |
| Name | Name of this Campaign |
| Status | Status of this campaign. On add, defaults to ENABLED. |
| Serving status | Serving status. |
| Start date | Date the campaign begins. On add, defaults to the current day in the parent account's local timezone. The date's format should be YYYYMMDD. |
| End date | Date the campaign ends. On add, defaults to 20371230, which means the campaign will run indefinitely. To set an existing campaign to run indefinitely, set this field to 20371230 . The date's format should be YYYYMMDD. |
| Labels | [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.Label.html)|
| Budget | Current base budget of campaign; default if no custom budgets are enabled. This field is readonly for draft campaigns and will be ignored when sent to the API. |
| Conversion optimizer eligibility | [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.ConversionOptimizerEligibility.html)|
| Ad serving optimization status | Ad serving optimization status. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.AdServingOptimizationStatus.html)|
| Frequency cap | Frequency cap for this campaign. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.FrequencyCap.html)|
| Settings | Settings of the Campaign <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.Setting.html)|
| Advertising channel type | The primary serving target for ads within this campaign.|
| Advertising channel sub type | Optional refinement of advertisingChannelType. Must be a valid sub-type of the parent channel type. May only be set for new campaigns and cannot be changed once set.|
| Network setting | Network settings for the campaign indicating where the campaign will serve. |
| Bidding strategy configuration | Bidding configuration for this campaign.<br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.BiddingStrategyConfiguration.html) |
| Forward compatibility map | It is a presently unused object by AdWords|
| URL custom parameters | A list of mappings to be used for substituting URL custom parameter tags in the trackingUrlTemplate, finalUrls, and/or finalMobileUrls. |
| Vanity pharma | Describes how unbranded pharma ads will be displayed. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.VanityPharma.html) |
| Universal app campaign info | Stores information specific to Universal App Campaigns. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.UniversalAppCampaignInfo.html)|
| Selective optimization | Selective optimization setting for this campaign, which includes a set of conversion types to optimize this campaign towards. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.SelectiveOptimization.html) |
| Campaign trial type | Indicates if this campaign is a normal campaign, a draft campaign, or a trial campaign. |
| Tracking URL template | URL template for constructing a tracking URL. |
| Final URL suffix | URL template for appending params to Final URL. |
| Campaign group ID | Id of the campaign group this campaign belongs to. |
| Base campaign ID | ID of the base campaign of the draft or trial campaign. For base campaigns, this is equal to the campaign ID. |

## Update Campaign
Use this action to update campaign attributes.

### Input fields
| Field name | Description |
|---|---|
| Client Customer ID | The client customer ID of the advertising account from which data should be included in the report. This Client Customer ID should be the ID of one the accounts managed by the Google Ads manager account specified in this connection. This should come in the form of XXX-XXX-XXXX. <br><br> Click [here](https://support.google.com/google-ads/answer/1704344?hl=en) to learn more on how to get your client customer ID. |
| Campaign ID | The ID of the campaign to update. Required. |
| Name | Name of this Campaign |
| Status | Status of this campaign. On add, defaults to ENABLED. |
| Serving status | Serving status. |
| Start date | Date the campaign begins. On add, defaults to the current day in the parent account's local timezone. The date's format should be YYYYMMDD. |
| End date | Date the campaign ends. On add, defaults to 20371230, which means the campaign will run indefinitely. To set an existing campaign to run indefinitely, set this field to 20371230 . The date's format should be YYYYMMDD. |
| Labels | [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.Label.html)|
| Budget | Current base budget of campaign; default if no custom budgets are enabled. This field is readonly for draft campaigns and will be ignored when sent to the API. |
| Conversion optimizer eligibility | [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.ConversionOptimizerEligibility.html)|
| Ad serving optimization status | Ad serving optimization status. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.AdServingOptimizationStatus.html)|
| Frequency cap | Frequency cap for this campaign. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.FrequencyCap.html)|
| Settings | Settings of the Campaign <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.Setting.html)|
| Advertising channel type | The primary serving target for ads within this campaign.|
| Advertising channel sub type | Optional refinement of advertisingChannelType. Must be a valid sub-type of the parent channel type. May only be set for new campaigns and cannot be changed once set.|
| Network setting | Network settings for the campaign indicating where the campaign will serve. |
| Bidding strategy configuration | Bidding configuration for this campaign.<br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.BiddingStrategyConfiguration.html) |
| Forward compatibility map | It is a presently unused object by AdWords|
| URL custom parameters | A list of mappings to be used for substituting URL custom parameter tags in the trackingUrlTemplate, finalUrls, and/or finalMobileUrls. |
| Vanity pharma | Describes how unbranded pharma ads will be displayed. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.VanityPharma.html) |
| Universal app campaign info | Stores information specific to Universal App Campaigns. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.UniversalAppCampaignInfo.html)|
| Selective optimization | Selective optimization setting for this campaign, which includes a set of conversion types to optimize this campaign towards. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.SelectiveOptimization.html) |
| Campaign trial type | Indicates if this campaign is a normal campaign, a draft campaign, or a trial campaign. |
| Tracking URL template | URL template for constructing a tracking URL. |
| Final URL suffix | URL template for appending params to Final URL. |
| Campaign group ID | Id of the campaign group this campaign belongs to. |
| Base campaign ID | ID of the base campaign of the draft or trial campaign. For base campaigns, this is equal to the campaign ID. |


### Output fields
New attributes of the campaign updated.

| Field name | Description |
|---|---|
| ID | The ID of the newly created Campaign |
| Name | Name of this Campaign |
| Status | Status of this campaign. On add, defaults to ENABLED. |
| Serving status | Serving status. |
| Start date | Date the campaign begins. On add, defaults to the current day in the parent account's local timezone. The date's format should be YYYYMMDD. |
| End date | Date the campaign ends. On add, defaults to 20371230, which means the campaign will run indefinitely. To set an existing campaign to run indefinitely, set this field to 20371230 . The date's format should be YYYYMMDD. |
| Labels | [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.Label.html)|
| Budget | Current base budget of campaign; default if no custom budgets are enabled. This field is readonly for draft campaigns and will be ignored when sent to the API. |
| Conversion optimizer eligibility | [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.ConversionOptimizerEligibility.html)|
| Ad serving optimization status | Ad serving optimization status. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.AdServingOptimizationStatus.html)|
| Frequency cap | Frequency cap for this campaign. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.FrequencyCap.html)|
| Settings | Settings of the Campaign <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.Setting.html)|
| Advertising channel type | The primary serving target for ads within this campaign.|
| Advertising channel sub type | Optional refinement of advertisingChannelType. Must be a valid sub-type of the parent channel type. May only be set for new campaigns and cannot be changed once set.|
| Network setting | Network settings for the campaign indicating where the campaign will serve. |
| Bidding strategy configuration | Bidding configuration for this campaign.<br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.BiddingStrategyConfiguration.html) |
| Forward compatibility map | It is a presently unused object by AdWords|
| URL custom parameters | A list of mappings to be used for substituting URL custom parameter tags in the trackingUrlTemplate, finalUrls, and/or finalMobileUrls. |
| Vanity pharma | Describes how unbranded pharma ads will be displayed. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.VanityPharma.html) |
| Universal app campaign info | Stores information specific to Universal App Campaigns. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.UniversalAppCampaignInfo.html)|
| Selective optimization | Selective optimization setting for this campaign, which includes a set of conversion types to optimize this campaign towards. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.SelectiveOptimization.html) |
| Campaign trial type | Indicates if this campaign is a normal campaign, a draft campaign, or a trial campaign. |
| Tracking URL template | URL template for constructing a tracking URL. |
| Final URL suffix | URL template for appending params to Final URL. |
| Campaign group ID | Id of the campaign group this campaign belongs to. |
| Base campaign ID | ID of the base campaign of the draft or trial campaign. For base campaigns, this is equal to the campaign ID. |


## Remove Campaign
Use this action with caution. Once removing a campaign, you permanently stop it and you cannot resume it. To pause a campaign, use the `Update campaign` action instead.

### Input fields
| Field name | Description |
|---|---|
| Client Customer ID | The client customer ID of the advertising account from which data should be included in the report. This Client Customer ID should be the ID of one the accounts managed by the Google Ads manager account specified in this connection. This should come in the form of XXX-XXX-XXXX. <br><br> Click [here](https://support.google.com/google-ads/answer/1704344?hl=en) to learn more on how to get your client customer ID. |
| Campaign ID | The ID of the campaign to remove |


### Output fields
Attributes of the campaign removed.

| Field name | Description |
|---|---|
| ID | The ID of the newly created Campaign |
| Name | Name of this Campaign |
| Status | Status of this campaign. On add, defaults to ENABLED. |
| Serving status | Serving status. |
| Start date | Date the campaign begins. On add, defaults to the current day in the parent account's local timezone. The date's format should be YYYYMMDD. |
| End date | Date the campaign ends. On add, defaults to 20371230, which means the campaign will run indefinitely. To set an existing campaign to run indefinitely, set this field to 20371230 . The date's format should be YYYYMMDD. |
| Labels | [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.Label.html)|
| Budget | Current base budget of campaign; default if no custom budgets are enabled. This field is readonly for draft campaigns and will be ignored when sent to the API. |
| Conversion optimizer eligibility | [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.ConversionOptimizerEligibility.html)|
| Ad serving optimization status | Ad serving optimization status. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.AdServingOptimizationStatus.html)|
| Frequency cap | Frequency cap for this campaign. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.FrequencyCap.html)|
| Settings | Settings of the Campaign <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.Setting.html)|
| Advertising channel type | The primary serving target for ads within this campaign.|
| Advertising channel sub type | Optional refinement of advertisingChannelType. Must be a valid sub-type of the parent channel type. May only be set for new campaigns and cannot be changed once set.|
| Network setting | Network settings for the campaign indicating where the campaign will serve. |
| Bidding strategy configuration | Bidding configuration for this campaign.<br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.BiddingStrategyConfiguration.html) |
| Forward compatibility map | It is a presently unused object by AdWords|
| URL custom parameters | A list of mappings to be used for substituting URL custom parameter tags in the trackingUrlTemplate, finalUrls, and/or finalMobileUrls. |
| Vanity pharma | Describes how unbranded pharma ads will be displayed. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.VanityPharma.html) |
| Universal app campaign info | Stores information specific to Universal App Campaigns. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.UniversalAppCampaignInfo.html)|
| Selective optimization | Selective optimization setting for this campaign, which includes a set of conversion types to optimize this campaign towards. <br> [More info](https://developers.google.com/adwords/api/docs/reference/v201809/CampaignService.SelectiveOptimization.html) |
| Campaign trial type | Indicates if this campaign is a normal campaign, a draft campaign, or a trial campaign. |
| Tracking URL template | URL template for constructing a tracking URL. |
| Final URL suffix | URL template for appending params to Final URL. |
| Campaign group ID | Id of the campaign group this campaign belongs to. |
| Base campaign ID | ID of the base campaign of the draft or trial campaign. For base campaigns, this is equal to the campaign ID. |
