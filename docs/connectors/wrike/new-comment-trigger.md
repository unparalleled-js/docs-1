---
title: Workato connectors - Wrike new comment trigger
data: 2019-06-11 18:00:00 Z
search:
    keywords: ['wrike', 'comment', 'new']
---

# Wrike - New comment trigger

This trigger picks up comments that are created.

Each comment is processed as a separate job. It checks for new jobs once every poll interval, retrieving up to 7 days of new comments for each poll.

If the last new comment event is older than 7 days, more than 1 poll will be required to retrieve new comments up to current date & time.

![New comment trigger](~@img/connectors/wrike/new-comment-trigger.png)
*New comment trigger*

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
      <td>When first start, this recipe should pick up events from</a></td>
      <td>
        Comments created after this time will be processed by the recipe. If left blank, the default date will be set to <b>one hour</b> before the recipe is first started.
      </td>
    </tr>
    </tbody>
</table>

### Output fields

The output of this trigger contains the full set of columns from the selected comment. Here are some of the commonly used outputs. Since each Wrike comments are uniquely attached to folders or task, either the **Folder ID** or the **Task ID** will be displayed.

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
      <th width='25%'>Output field</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Comment ID</td>
      <td>
        The ID of the comment.
      </td>
    </tr>  
    <tr>
      <td>Author ID</td>
      <td>
        The ID of the author.
      </td>
    </tr>
    <tr>
      <td>Text</td>
      <td>
        The text of the comment.
      </td>
    </tr>
    <tr>
      <td>Updated data</td>
      <td>
        The date this comment was updated.
      </td>
    </tr>
    <tr>
      <td>Created data</td>
      <td>
        The date this comment was created.
      </td>
    </tr>
    <tr>
      <td>Folder ID</td>
      <td>
        The ID of the related task. Either <code>Folder ID</code> or <code>Task ID</code> is displayed.
      </td>
    </tr>
    <tr>
      <td>Task ID</td>
      <td>
        The ID of the related folder. Either <code>Folder ID</code> or <code>Task ID</code> is displayed.
      </td>
    </tr>
  </tbody>
</table>
