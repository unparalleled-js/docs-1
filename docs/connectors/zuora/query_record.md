---
title: Workato connectors - Zuora Query record actions
date: 2019-12-16 06:10:00 Z
---

# Zuora - Query record action

## Query record action
This action queries records in Zuora using [Zuora Object Query Language](https://knowledgecenter.zuora.com/DC_Developers/BC_ZOQL). The Zuora Object Query Language (ZOQL) is a simple SQL-like query language used to construct query calls in the SOAP API.

Basic knowledge and experience with SQL is required to work with ZOQL

![Query record action](~@img/zuora/query_record_action.png)
*Query records*


### Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Object</td>
      <td>Select the object type in Zuora you hope to query for.</td>
    </tr>
    <tr>
      <td>ZOQL Query</td>
      <td>A valid ZOQL query. i.e. <code>select field_names from object where filter_statements</code></td>
    </tr>
    <tr>
      <td>Batch size</td>
      <td>The size of the query result to be returned. Maximum is 2000.</td>
    </tr>
  </tbody>
</table>

### Output fields
<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Array of records</td>
      <td>An array of records where the attributes returned for each record change dynamically based on the object you have selected.</td>
    </tr>
   </tbody>
</table>

### ZOQL details
* No Complex Queries​
Zuora does not support complex queries and joining for query().

* No Aggregate Functions
Nested aggregate functions are not supported for query().

* No Wild Card Support
You cannot use the asterisk wild card (*) for field names with a query() call. You must explicitly specify a field name.

* No Order By Support
ZOQL does not support sorting results in ascending or descending order.

* Conditions Allowed
A maximum of 200 conditions are allowed in a WHERE clause of a query() call. For example, you can have up to 200 distinct AND or OR clauses.

For more details check out the ZOQL documentation [here](https://knowledgecenter.zuora.com/DC_Developers/BC_ZOQL)
