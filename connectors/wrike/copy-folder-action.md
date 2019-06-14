---
title: Workato connectors - Wrike copy folder action
date: 2019-05-30 18:00:00 Z
---

# Wrike - Copy folder action

Folders are one of the main ways to organize, manage, and report on work within Wrike.

This action selects a single folder and copies it into a specified Wrike folder. To copy the folder as a main folder, select **root** as the parent folder.
*Create folder action*

### Input fields

![Create folder action](/assets/images/connectors/Wrike/create-folder-action.png)

<table class="unchanged rich-diff-level-one">
  <thead>
    <tr>
        <th width='25%'>Input field</th>
        <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Folder to be copied</td>
      <td>
        The name of the folder to be copied. To use folder ID, toggle "Enter a folder ID".
      </td>
    </tr>
    <tr>
      <td>Destination folder/project</td>
      <td>
        Select a parent folder/project to copy the folder into. To use folder/project ID, toggle "Enter a folder/project ID".
      </td>
    </tr>
    <tr>
      <td>Title</td>
      <td>
        The title of the folder.
      </td>
    </tr>
    <tr>
      <td>Copy description</td>
      <td>
        Select <code>Yes</code> to copy the original folder's description, otherwise select <code>No</code>. This will leave the field empty.
      </td>    
    </tr>
    <tr>
      <td>Copy assignee</td>
      <td>
        Select <code>Yes</code> to copy the original folder's task with the original task responsible list, otherwise select <code>No</code>.
      </td>    
    </tr>
    <tr>
      <td>Add assignees to copied tasks</td>
      <td>
        Add users to the task responsible list in the new folder. You can define users with a sourcelist or manually input the user ID.
      </td>    
    </tr>
    <tr>
      <td>Remove assignees to copied tasks</td>
      <td>
        Remove userm the tas frosk responsible list in the new folder. You can define users with a sourcelist or manually input the user ID.
      </td>    
    </tr>
    <tr>
      <td>Copy custom fields</td>
      <td>
        Select <code>Yes</code> to copy the original folder's custom fields, otherwise select <code>No</code>.
      </td>    
    </tr>
    <tr>
      <td>Copy custom statuses</td>
      <td>
        Select <code>Yes</code> to copy the original folder's custom statuses, otherwise select <code>No</code>.
      </td>    
    </tr>
    <tr>
      <td>Copy statuses</td>
      <td>
        Select <code>Yes</code> to copy the original folder's statuses, otherwise select <code>No</code>. This will set the status to <code>New</code>.
      </td>    
    </tr>
    <tr>
      <td>Copy parent folders/projects</td>
      <td>
        Select <code>Yes</code> to copy the original folder's parent folders/projects, otherwise select <code>No</code>.
      </td>    
    </tr>
    <tr>
      <td>Reschedule date</td>
      <td>
        Only <b>active</b> task can be reschuled. The date to use in task rescheduling.<br>
        <br>
        <blockquote>To activate and reschedule all tasks, use <b>Reschedule date</b> in combination with <b>Copy statuses</b> = <code>False</code>.</blockquote>
      </td>    
    </tr>
    <tr>
      <td>Reschedule mode</td>
      <td>
        Valid only of <b>Reschedule date</b> is present. Select <code>Start</code> to set the start date of the task in the new folder, otherwise select <code>End</code>. This will set the end date to the rescedule date.
      </td>    
    </tr>
    <tr>
      <td>Entry limit</td>
      <td>
        Choose the maximum number of tasks/folders/projects to be copied to the new folder. Range from 1-100, the default value is 100. 
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
      <td>Folder ID</td>
      <td>
        The Wrike ID of the folder.
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
        The title of the folder.
      </td>
    </tr>
    <tr>
      <td>Updated date</td>
      <td>
        The date this folder was updated.
      </td>
    </tr>
    <tr>
      <td>Created date</td>
      <td>
        The date this folder was created.
      </td>
    </tr>
    <tr>
      <td>Description</td>
      <td>
        The description of the folder. Will be blank if not specified. 
      </td>
    </tr>
    <tr>
      <td>Users who share the folder</td>
      <td>
        The list of users who share the folder.
        <table>
          <tbody>
            <tr>
              <td>User ID</td>td>
              <td>The ID of the user who shares this folder</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of users retrieved</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Parent folder</td>
      <td>
        The list of parent folders of this folder.
        <table>
          <tbody>
            <tr>
              <td>Folder ID</td>
              <td>The folder ID of the parent folder</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of parent folders retrieved</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Child folder</td>
      <td>
        The list of child folders of this folder.
        <table>
          <tbody>
            <tr>
              <td>Folder ID</td>td>
              <td>The folder ID of the child folder</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of child folders retrieved</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Super parent folder</td>
      <td>
        The list of super parent folder to this folder.
        <table>
          <tbody>
            <tr>
              <td>Folder ID</td>td>
              <td>The folder ID of the super parent folder. Only applicable to 'selective sharing' labs feature.</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of super parent folders retrieved</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Scope</td>
      <td>
        The scope of the folder. 
      </td>
    </tr>
    <tr>
      <td>Has attachments</td>
      <td>
        Is <code>True</code> if the folder has attachments, otherwise it will display <code>False</code>. 
      </td>
    </tr>
    <tr>
      <td>Permalink</td>
      <td>
        The link to open the folder in a web workspace, this is only accessible if the user has the appropriate access. 
      </td>
    </tr>
    <tr>
      <td>Workflow ID</td>
      <td>
        The ID of the folder workflow. 
      </td>
    </tr>
    <tr>
      <td>Metadata</td>
      <td>
        The manually inputted metadata of this folder.
        <table>
          <tbody>
            <tr>
              <td><code>Key</code></td>td>
              <td><code>Value</code></td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of metadata entries  retrieved.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Project</td>
      <td>
        The project properties of this folder.
        <table>
          <tbody>
            <tr>
              <td>Author</td>
              <td>The author who created the project.</td>
            </tr>
            <tr>
              <td>Owner ID</td>
              <td>
                The list of IDs of project owners.
                <table>
                  <tbody>
                    <tr>
                      <td>User ID</td>td>
                      <td>The user ID of the project owner.</td>
                    </tr>
                    <tr>
                      <td>List size</td>
                      <td>The size of the list, corresponding to the number of project owners retrieved.</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>Status</td>
              <td>The status of the task. Permitted values are <code>Green</code>, <code>Yellow</code>, <code>Red</code>, <code>Completed</code>, <code>On hold</code>, and <code>Cancelled</code>.</td>
            </tr>
            <tr>
              <td>Start date</td>
              <td>The date this project was started.</td>
            </tr>
            <tr>
              <td>End date</td>
              <td>The date this project was ended.</td>
            </tr>
            <tr>
              <td>Created date</td>
              <td>The date this project was created.</td>
            </tr>
            <tr>
              <td>Completed date</td>
              <td>The date this project was completed.</td>
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
  </tbody>
</table>
