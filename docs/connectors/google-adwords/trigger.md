---
title: Workato connectors - Google AdWords - New Ads, AdGroups and Campaigns
date: 2020-01-29 06:00:00 Z
---

# Google Ads trigger - New Ads, AdGroups and Campaigns
This trigger polls every 5 minutes and checks if new Ads, AdGroups or Campaigns have been created in a specific Google Ads account.

## New Ad

### Input fields

| Field name | Description |
|---|---|
| Client Customer ID | The client customer ID of the advertising account from which data should be included in the report. This Client Customer ID should be the ID of one the accounts managed by the Google Ads manager account specified in this connection. This should come in the form of XXX-XXX-XXXX. <br><br> Click [here](https://support.google.com/google-ads/answer/1704344?hl=en) to learn more on how to get your client customer ID. |
| Ad ID | This allows you to create jobs based off ads created before the start of this recipe. Do so by specifying the earliest ad ID from which Workato should pull. Leave blank to pull all Ads from the creation of this account. |

## Output fields

| Field name | Description |
|---|---|
| ID | The ID of the newly created Ad |
| URL | The destination URL of the newly created Ad |
| Display Url | The display URL of the newly created Ad |
| Final Urls | An array of possible final URLs after all cross domain redirects. |
| Final mobile URLs | A list of possible final mobile URLs after all cross domain redirects. |
| Final app URLs | A list of final app URLs that will be used on mobile if the user has the specific app installed. |
| Tracking URL template | URL template for constructing a tracking URL. |
| Final URL suffix | URL template for appending params to Final URL. |
| URL custom parameters | A list of mappings to be used for substituting URL custom parameter tags in the trackingUrlTemplate, finalUrls, and/or finalMobileUrls. |
| URL data | Additional urls for the ad that are tagged with a unique identifier. Currently only used for TemplateAds for specific template IDs. For all other ad types, use finalUrls, finalMobileUrls and finalAppUrls instead. |
| Automated | Indicates if this ad was added by AdWords. |
| Type | Type of ad. Indicates that this instance is a subtype of Ad.<br> [Possible types of Ads](https://developers.google.com/adwords/api/docs/reference/v201809/AdService.Ad#type_1) |
| Device preference | The device preference for the ad. You can only specify a preference for mobile devices (CriterionId 30001). If unspecified (no device preference), all devices are targeted. |
| System managed entity source | The source of this system-managed ad. |
| Ad type | Indicates that this instance is a subtype of Ad. |

 **Additional Ad Type specific fields**

Based on the Ad Type of the the Ad, there are numerous Ad Type specific fields which can be used. Based on your Ad Type, find out more about the available parameters [here](https://developers.google.com/adwords/api/docs/reference/v201809/AdService.Ad)

## New Ad Group

### Input fields

| Field name | Description |
|---|---|
| Client Customer ID | The client customer ID of the advertising account from which data should be included in the report. This Client Customer ID should be the ID of one the accounts managed by the Google Ads manager account specified in this connection. This should come in the form of XXX-XXX-XXXX. <br><br> Click [here](https://support.google.com/google-ads/answer/1704344?hl=en) to learn more on how to get your client customer ID. |
| Ad group ID | This allows you to create jobs based off ad groups created before the start of this recipe. Do so by specifying the earliest ad group ID from which Workato should pull. Leave blank to pull all Ads from the creation of this account. |

## Output fields

| Field name | Description |
|---|---|
| ID | The ID of the newly created Ad Group |
| Campaign ID | ID of the campaign with which this ad group is associated. |
| Campaign Name | Name of the campaign with which this ad group is associated. |
| Name | Name of this ad group (at most 255 UTF-8 full-width characters). This field is required and should not be null for ADD operations from v201309 version. |
| Status | Status of this ad group. |
| Settings | List of settings for the AdGroup. |
| Labels | Labels that are attached to the AdGroup. |
| Forward compatibility map | This Map provides a place to put new features and settings in older versions of the AdWords API in the rare instance we need to introduce a new feature in an older version. It is presently unused. Do not set a value. |
| Bidding strategy configuration | Bidding configuration for this ad group. To set the bids on the ad groups use BiddingStrategyConfiguration.bids. Multiple bids can be set on ad group at the same time. Only the bids that apply to the effective bidding strategy will be used. Effective bidding strategy is considered to be the directly attached strategy or inherited campaign level strategy when there’s no directly attached strategy. |
| Base campaign ID | ID of the base campaign from which this draft/trial adgroup was created. This field is only returned on get requests. |
| URL custom parameters | A list of mappings to be used for substituting URL custom parameter tags in the trackingUrlTemplate, finalUrls, and/or finalMobileUrls. |
| Base ad group ID | ID of the base adgroup from which this draft/trial adgroup was created. For base adgroups this is equal to the adgroup ID. If the adgroup was created in the draft or trial and has no corresponding base adgroup, this field is null. |
| Content bid criterion type group | Allows advertisers to specify a criteria dimension on which to place absolute bids. This is only applicable for campaigns that target only the content network and not search. |
| Ad group type | [Ad Group type](https://developers.google.com/adwords/api/docs/reference/v201809/AdGroupService.AdGroup#adgrouptype) |
| Tracking URL template | URL template for constructing a tracking URL. |
| Final URL suffix | URL template for appending params to Final URL. |
| Ad group ad rotation mode | The ad rotation mode to specify how often the ads in the ad group will be served relative to one another. |

## New Campaigns

### Input fields

| Field name | Description |
|---|---|
| Client Customer ID | The client customer ID of the advertising account from which data should be included in the report. This Client Customer ID should be the ID of one the accounts managed by the Google Ads manager account specified in this connection. This should come in the form of XXX-XXX-XXXX. <br><br> Click [here](https://support.google.com/google-ads/answer/1704344?hl=en) to learn more on how to get your client customer ID. |
| Campaign ID | This allows you to create jobs based off campaigns created before the start of this recipe. Do so by specifying the earliest campaign ID from which Workato should pull. Leave blank to pull all Ads from the creation of this account. |

## Output fields

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
