---
title: Webhooks trigger configuration
date: 2019-05-29 10:00:00 Z
---

# Webhooks trigger configuration

![COnfigured webhooks trigger](~@img/webhooks/configured-webhook-trigger.png)
*Configured webhooks trigger*

## Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th colspan=2 width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan=2>Event name</td>
      <td>
        <p>
          Name for the event that this webhook trigger is listening to. This name will become part of the unique webhook address generated. This URL is visible below the input field and can be copied.
        </p>
        <p>
          <b>To avoid recipes receiving webhook events from multiple sources, the event name must be unique across all your webhook recipes.</b>
        </p>
        <p>
          More specifically, the resultant webhooks address must be unique across all webhook triggers in a single Workato account.
        </p>
      </td>
    </tr>
    <tr>
      <td rowspan=3>Payload configuration</td>
      <td>Webhook type</td>
      <td>
        <p>
          Select the type that matches the incoming webhooks. You can select from the following list.
        </p>
        <ul>
          <li>GET request</li>
          <li>PUT/POST with JSON payload</li>
          <li>PUT/POST with XML payload</li>
          <li>PUT/POST with FORM encoded payload</li>
          <li>PUT/POST with raw binary data</li>
          <li>PUT/POST with unicode text data</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Payload schema</td>
      <td>
        <p>
          Describe the fields that you expect from the webhook event. If you use the webhooks wizard, this will be automatically generated for you using the sample webhook event as a template.
        </p>
        <p>
          Otherwise, there are 2 ways to configure this input field. The easier way is to use a sample payload to get all the fields at once. Alternatively, you can add the fields individually.
        </p>
        <p><b>This field needs to be defined only if you choose the following webhook types:</b></p>
        <ul>
          <li>GET request</li>
          <li>PUT/POST with JSON payload</li>
          <li>PUT/POST with XML payload</li>
          <li>PUT/POST with FORM encoded payload</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Headers</td>
      <td>
        <p>
          Describe the headers that you expect from the webhook event.
        </p>
          <p>
            Describe the headers that you expect from the webhook event. If you use the webhooks wizard, this will be automatically generated for you using the sample webhook event as a template.
          </p>
          <p>
            Otherwise, there are 2 ways to configure this input field. The easier way is to use a sample JSON to get all the fields at once. Alternatively, you can add the fields individually.
          </p>
      </td>
    </tr>
  </tbody>
</table>

## Output fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Headers</td>
      <td>
        <p>
          This output object contains datapills of all the headers that you can expect from the webhook events calling this recipe. To add missing headers, just add a field in the <b>Headers</b> input field.
        </p>
      </td>
    </tr>
    <tr>
      <td>Payload</td>
      <td>
        <p>
          This output object contains datapills matching the data that you can expect from the webhook events calling this recipe. To add/edit these fields, just update the <b>Payload schema</b> input field.
        </p>
      </td>
    </tr>
  </tbody>
</table>
