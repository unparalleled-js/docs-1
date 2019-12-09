---
title: Wrike - New/updated timelog trigger
data: 2019-06-11 18:00:00 Z
search:
    keywords: ['wrike', 'timelog', 'new', 'updated']
---

# Wrike - New/updated timelog trigger

This trigger picks up timelog records that are created or updated. Each record is processed as a separate job. It checks for new jobs once every poll interval.

![New/updated timelog trigger](~@img/connectors/wrike/updated-timelog-trigger.png)
*New/updated timelog trigger*

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
      <td>When first started, this recipe should pick up events from</a></td>
      <td>
        Timelog records created or updated after this time will be processed by the recipe. If left blank, the default will be set to <b>one hour</b> before the recipe is first started.
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
        The ID of the timelog record.
      </td>
    </tr><tr>
      <td>Task ID</td>
      <td>
        The ID of the task that this timelog record tracks.
      </td>
    </tr>  
    <tr>
      <td>User ID</td>
      <td>
        The ID of the user who tracked the timelog record.
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
  </tbody>
</table>
