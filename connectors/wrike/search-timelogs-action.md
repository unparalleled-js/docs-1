---
title: Workato connectors - Wrike search timelogs action
date: 2019-06-14 18:00:00 Z
---

# Wrike - Search timelogs action

This action retrieves a list of timelog records that matches your search criteria. Only records in your Wrike instance that matches all the criteria will be returned. 

![Update timelog action](/assets/images/connectors/Wrike/update-timelog-action.png)
*Update timelog action*

### Input fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Timelog category</td>
      <td>
        Select the category for your timelog. 
      </td>
    </tr>
    <tr>
      <td>Created date</td>
      <td>
        The date this timelog record was created.
      </td>
    </tr>
    <tr>
      <td>Updated date</td>
      <td>
        The date this timelog record was updated.
      </td>
    </tr>
    <tr>
      <td>Tracked date</td>
      <td>
        The date of the new timelog record
      </td>    
    </tr>
     <tr>
      <td>Descendants</td>
      <td>
        Select <code>Yes</code> to add all descendant tasks to search scope, otherwise select <code>No</code>.
      </td>    
    </tr>
  </tbody>
</table>

### Output fields

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Output field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Timelog ID</td>
      <td>
        The Wrike ID of the timelog.
      </td>
    </tr><tr>
      <td>Task ID</td>
      <td>
        The Wrike ID of the task that this timelog record tracks.
      </td>
    </tr>  
    <tr>
      <td>User ID</td>
      <td>
        The Wrike ID of the user who tracked the timelog record.
      </td>
    </tr>
    <tr>
      <td>Category ID</td>
      <td>
        The ID of the category of this timelog record. 
      </td>
    </tr>
    <tr>
      <td>Hours</td>
      <td>
        The hours tracked in the timelog record.
      </td>
    </tr>
    <tr>
      <td>Completed date</td>
      <td>
       The date this timelog record was completed.
     </td>
    </tr>
    <tr>
      <td>Comment</td>
      <td>
        The comment to this timelog record.
      </td>
    </tr>
     <tr>
      <td>List size</td>
      <td>
        The size of the list, corresponding to the number of tasks retrieved.
      </td>
    </tr>
  </tbody>
</table>
