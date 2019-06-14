---
title: Workato connectors - Wrike search task action
date: 2019-06-14 18:00:00 Z
---

# Wrike - Search task action

This action retrieves a list of tasks that matches your search criteria. Only records in your Wrike instance that matches all the criteria will be returned. A maximum of 100 tasks can be retrieved.

![Search task action](/assets/images/connectors/Wrike/search-task-action.png)
*Search task action*

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
      <td>Search custom field</td>
      <td>
        Select a custom field to open the corresponding input fields. This will be blank by default.
      </td>
    </tr>
    <tr>
      <td>Title</td>
      <td>
        The title of the task.
      </td>
    </tr>
    <tr>
      <td>Importance</td>
      <td>
        The importance of the task. Permitted values are <code>High</code>, <code>Normal</code>, and <code>Low</code>.
      </td>    
    </tr>
    <tr>
      <td>Updated date</td>
      <td>
        Retrieve tasks updated after this date.
      </td>
    </tr>
    <tr>
      <td>Compeleted date</td>
      <td>
        Retrieve tasks completed after this date.
      </td>
    </tr>
    <tr>
      <td>Permalink</td>
      <td>
        The link to open the task in a web workspace. 
      </td>
    </tr>
    <tr>
      <td>Custom status</td>
      <td>
        Select the custom status of the task.
      </td>
    </tr>
    <tr>
      <td>Status</td>
      <td>
        Select the status of the task. Permitted values are <code>Active</code>, <code>Completed</code>, <code>Deferred</code>, and <code>Cancelled</code>.
      </td>
    </tr>
    <tr>
      <td>Created after</td>
      <td>
        Retrieve tasks created after this date.
      </td>    
    </tr>
    <tr>
      <td>Type</td>
      <td>
        Select the type of task. Permitted values are <code>Backlog</code>, <code>Milestone</code>, and <code>Planned</code>.
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
      <td>Task ID</td>
      <td>
        The Wrike ID of the task.
      </td>
    </tr>  
    <tr>
      <td>Account ID</td>
      <td>
        The Wrike ID of the account.
      </td>
    </tr>
    <tr>
      <td>Title</td>
      <td>
        The title of the task.
      </td>
    </tr>
    <tr>
      <td>Description</td>
      <td>
        The description of the task. Will be blank if not specified. 
      </td>
    </tr>
    <tr>
      <td>Brief description</td>
      <td>
        A brief description of the task.
      </td>
    </tr>
    <tr>
      <td>Parent folder</td>
      <td>
        The list of parent folders of this task.
        <table>
          <tbody>
            <tr>
              <td>Folder ID</td>td>
              <td>The folder ID of the parent folder</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of parent folders retrieved.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Super parent folder</td>
      <td>
        The list of super parent folder to this task.
        <table>
          <tbody>
            <tr>
              <td>Folder ID</td>td>
              <td>The folder ID of the super parent folder. Only applicable to 'selective sharing' labs feature.</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of super parent folders retrieved.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>List of users who share task</td>
      <td>
        The list of users who share the task.
        <table>
          <tbody>
            <tr>
              <td>User ID</td>td>
              <td>The ID of the user who shares this task</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of users retrieved.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Assignees</td>
      <td>
        The list of users who are assigned to the task.
        <table>
          <tbody>
            <tr>
              <td>User ID</td>td>
              <td>The ID of the user who shares this task</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of users retrieved.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Status</td>
      <td>The status of the task. Permitted values are <code>Active</code>, <code>Completed</code>, <code>Defrred</code>, and <code>Cancelled</code>.</td>
    </tr>
    <tr>
      <td>Importance</td>
      <td>
        The importance of the task. Permitted values are <code>High</code>, <code>Normal</code>, and <code>Low</code>.
      </td>    
    </tr>
    <tr>
      <td>Created date</td>
      <td>
        The date this task was created.
      </td>
    </tr>
    <tr>
      <td>Updated date</td>
      <td>
        The date this task was updated.
      </td>
    </tr>
    <tr>
      <td>Completed date</td>
      <td>
       The date this tasl was completed.
     </td>
    </tr>
    <tr>
      <td>Dates</td>
      <td>
        The tasks dates.
        <table>
          <tbody>
            <tr>
              <td>Type</td>
              <td>The type of task date. Permitted values are <code>Backlog</code>, <code>Milestone</code>, and <code>Planned</code>.</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>
                Mandatory for <code>Planned</code> tasks. The duration in minutes.
              </td>
            </tr>
            <tr>
              <td>Start date</td>
              <td>The start date of this task.</td>
            </tr>
            <tr>
              <td>Due date</td>
              <td>The due date of this task.</td>
            </tr>
            <tr>
              <td>Work on weekends</td>
              <td>Is <code>True</code> if weekends are included in the task scheduling, otherwise it will display <code>False</code>.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Scope</td>
      <td>
        The scope of the task. 
      </td>
    </tr>
    <tr>
      <td>Author</td>
      <td>
        The list of users who are assigned as authors of the task.
        <table>
          <tbody>
            <tr>
              <td>User ID</td>td>
              <td>The ID of the user.</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of users retrieved.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
     <tr>
      <td>Custom status ID</td>
      <td>
        The custom status ID of the task. 
      </td>
    </tr>
    <tr>
      <td>Custom status</td>
      <td>
        The custom status of the task.
        <table>
          <tbody>
            <tr>
              <td>Name</td>td>
              <td>The name of the custom status.</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The custom status ID of the task.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Permalink</td>
      <td>
        The link to open the task in a web workspace, this is only accessible if the user has the appropriate access. 
      </td>
    </tr>
    <tr>
      <td>Priority</td>
      <td>
        The ordering key that defines the task order in a tasklist. 
      </td>
    </tr>
    <tr>
      <td>Super task</td>
      <td>
        The list of tasks that are marked as super tasks.
        <table>
          <tbody>
            <tr>
              <td>Super task ID</td>td>
              <td>The ID of the task that is marked as a super task.</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of tasks retrieved.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Subtask</td>
      <td>
        The list of tasks that are marked as subtasks.
        <table>
          <tbody>
            <tr>
              <td>Super task ID</td>td>
              <td>The ID of the task that is marked as a subtask.</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of subtasks retrieved.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Dependency</td>
      <td>
        The list of tasks that are marked as dependencies.
        <table>
          <tbody>
            <tr>
              <td>Dependency ID</td>td>
              <td>The ID of the task that is marked as a dependecy.</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of tasks retrieved.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Custom fields</td>
      <td>
        Includes data from custom field(s).
      </td>
    </tr>
    <tr>
      <td>List size</td>
      <td>
        The size of the list, corresponding to the number of tasks retrived.
      </td>
    </tr>
  </tbody>
</table>
