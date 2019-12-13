---
title: Workato connectors - Wrike get task by id action
date: 2019-06-14 18:00:00 Z
search:
    keywords: ['wrike', 'task', 'search','id']
---

# Wrike - Get task by id action

This action retrieves a single task that matches a search by task ID. Only results in your Wrike instance that match the criteria will be returned.

![Get task by ID action](~@img/connectors/wrike/get-task-by-id-action.png)
*Get task by ID action*

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
      <td>Task ID</td>
      <td>
        The ID of the task.
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
        The ID of the task.
      </td>
    </tr>  
    <tr>
      <td>Account ID</td>
      <td>
        The ID of the account.
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
              <td>Folder ID</td>
              <td>The folder ID of the parent folder.</td>
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
              <td>Folder ID</td>
              <td>The folder ID of the super parent folder.</td>
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
              <td>User ID</td>
              <td>The ID of the user who shares this task.</td>
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
              <td>User ID</td>
              <td>The ID of the user who shares this task.</td>
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
      <td>
        The status of the task.
      </td>
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
       The date this task was completed.
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
              <td>The type of task. Permitted values are <code>Backlogged</code>, <code>Milestone</code>, and <code>scheduled</code>.</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>
                Mandatory for <code>Planned</code> tasks. The duration in minutes.
              </td>
            </tr>
            <tr>
              <td>Start date</td>
              <td>The start date of this task. <code>Backlogged</code> tasks do not have start dates.</td>
            </tr>
            <tr>
              <td>Due date</td>
              <td>The due date of this task. <code>Backlogged</code> tasks and <code>Milestone</code> tasks do not have due dates.</td>
            </tr>
            <tr>
              <td>Work on weekends</td>
              <td>Indicates if weekends are included in task scheduling.</td>
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
              <td>User ID</td>
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
              <td>Name</td>
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
      <td>Has attachments</td>
      <td>
        Indicates if the folder has attachments.
      </td>
    </tr>
    <tr>
      <td>Permalink</td>
      <td>
        The link to open the task in a web workspace. This is only accessible if the user has the appropriate access.
      </td>
    </tr>
    <tr>
      <td>Priority</td>
      <td>
        The ordering key that defines the task order in a task list.
      </td>
    </tr>
    <tr>
      <td>Followed by me</td>
      <td>
        Indicates if the task is followed by the Wrike user registered on Workato.
      </td>
    </tr>
    <tr>
      <td>Followers</td>
      <td>
        The users who follow this task.
        <table>
          <tbody>
            <tr>
              <td>Follower ID</td>
              <td>The ID of the user who follows this task.</td>
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
      <td>Super task</td>
      <td>
        The list of tasks that are marked as super tasks.
        <table>
          <tbody>
            <tr>
              <td>Super task ID</td>
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
              <td>Super task ID</td>
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
              <td>Dependency ID</td>
              <td>The ID of the task that is marked as a dependency.</td>
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
      <td>Metadata</td>
      <td>
        The metadata of this task. The metadata list size corresponds to the number of metadata entries retrieved.
      </td>
    </tr>
    <tr>
      <td>Custom fields</td>
      <td>
        Includes data from custom field(s).
      </td>
    </tr>
  </tbody>
</table>
