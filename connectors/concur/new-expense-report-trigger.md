---
title: Workato connectors - SAP Concur New expense report trigger
date: 2018-10-04 06:00:00 Z
---

# SAP Concur - New expense report trigger

## New expense report trigger


![New expense report trigger](/assets/images/concur/new-expense-report-trigger.png)
*New expense report trigger*

## Input fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>When first started, this recipe should pick up events from</td>
      <td>
        Expense reports created or submitted after this time will be processed by the recipe.<br>
        If no Approval status is selected or if <b>Not submitted</b> status is selected, this trigger will pick up expense reports when they are first created. Otherwise, it will pick up expense reports when they are submitted.
      </td>
    </tr>
    <tr>
      <td>Approval status</td>
      <td>
        Select an Approval status to filter from this list of statuses:<br>
        - Not submitted<br>
        - Submitted<br>
        - Submission triggered an anomaly and fraud check<br>
        - Pending reviews<br>
        - Pending external validation<br>
        - Pending Budget approval<br>
        - Pending Cost object approval<br>
        - Pending manager approval<br>
        - Pending prepayment validation<br>
        - Pending receipt images<br>
        - Needs to be resubmitted<br>
        - Approved<br>
        - Expired in approval queue<br><br>
        You can also provide a custom status. Refer to SAP Concur <a href="https://developer.concur.com/api-reference/expense/expense-report/v3.reports.html">API documentation</a> for more information about these statuses.
      </td>
    </tr>
    <tr>
      <td>Payment status</td>
      <td>
        Select a Payment status to filter from this list of statuses:<br>
        - On hold<br>
        - Not paid<br>
        - Confirmed<br>
        - In process to be paid<br>
        - Paid<br><br>
        You can also provide a custom status. Refer to SAP Concur <a href="https://developer.concur.com/api-reference/expense/expense-report/v3.reports.html">API documentation</a> for more information about these statuses.
      </td>
    </tr>
  </tbody>
</table>

## Output fields
All expense report fields, including custom fields, will be available as output fields for mapping in recipes action steps.
