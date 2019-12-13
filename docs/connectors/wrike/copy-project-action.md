---
title: Workato connectors - Wrike copy project action
date: 2019-06-11 18:00:00 Z
search:
    keywords: ['wrike', 'project', 'copy']
---

# Wrike - Copy project action

Projects are one of the main ways to organize, manage, and report on work within Wrike. In essence, Wrike projects are folders with additional properties.

This action selects a single project and copies it into a specified location. To copy the project as a main project, select **Root** as the parent project.

![Copy project action](~@img/connectors/wrike/copy-project-action.png)
*Copy project action*

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
      <td>Project to be copied</td>
      <td>
        The name of the project to be copied. To use project ID, toggle "Enter a project ID".
      </td>
    </tr>
    <tr>
      <td>Destination project/project</td>
      <td>
        Select a parent project/project to copy the project into. To use folder/project ID, toggle "Enter a folder/project ID".
      </td>
    </tr>
    <tr>
      <td>Title</td>
      <td>
        The title of the project.
      </td>
    </tr>
    <tr>
      <td>Copy description</td>
      <td>
        Select <code>Yes</code> to copy the original project's description, otherwise select <code>No</code>. This will leave the field empty.
      </td>    
    </tr>
    <tr>
      <td>Copy assignee</td>
      <td>
        Select <code>Yes</code> to copy the original project's task with the original task responsible list, otherwise select <code>No</code>.
      </td>    
    </tr>
    <tr>
      <td>Add assignees to copied tasks</td>
      <td>
        Add users to the task responsible list in the new project. You can define users with a source list or manually input their user ID.
      </td>    
    </tr>
    <tr>
      <td>Remove assignees to copied tasks</td>
      <td>
        Remove user from the task responsible list in the new project. You can define users with a source list or manually input their user ID.
      </td>    
    </tr>
    <tr>
      <td>Copy custom fields</td>
      <td>
        Select <code>Yes</code> to copy the original project's custom fields, otherwise select <code>No</code>.
      </td>    
    </tr>
    <tr>
      <td>Copy custom statuses</td>
      <td>
        Select <code>Yes</code> to copy the original project's custom statuses, otherwise select <code>No</code>.
      </td>    
    </tr>
    <tr>
      <td>Copy statuses</td>
      <td>
        Select <code>Yes</code> to copy the original project's statuses, otherwise select <code>No</code>. This will set the status to <code>New</code>.
      </td>    
    </tr>
    <tr>
      <td>Copy parent projects/projects</td>
      <td>
        Select <code>Yes</code> to copy the original project's parent projects/projects, otherwise select <code>No</code>.
      </td>    
    </tr>
    <tr>
      <td>Reschedule date</td>
      <td>
        Only <code>New</code>/<code>In progress</code> tasks can be rescheduled. The date to use in task rescheduling.<br>
        <br>
        <blockquote>To activate and reschedule all tasks, use <b>Reschedule date</b> in combination with <b>Copy statuses</b> = <code>No</code>.</blockquote>
      </td>    
    </tr>
    <tr>
      <td>Reschedule mode</td>
      <td>
        Valid only of <b>Reschedule date</b> is present. Select <code>Start</code> to set the start date of the task in the new project. Select <code>End</code> to set the end date to the task.
      </td>    
    </tr>
    <tr>
      <td>Entry limit</td>
      <td>
        Choose the maximum number of tasks/projects/projects to be copied to the new project.
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
      <td>Project ID</td>
      <td>
        The ID of the project.
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
        The title of the project.
      </td>
    </tr>
    <tr>
      <td>Updated date</td>
      <td>
        The date this project was updated.
      </td>
    </tr>
    <tr>
      <td>Created date</td>
      <td>
        The date this project was created.
      </td>
    </tr>
    <tr>
      <td>Description</td>
      <td>
        The description of the project. Will be blank if not specified.
      </td>
    </tr>
    <tr>
      <td>Users who share the project</td>
      <td>
        The list of users who share the project.
        <table>
          <tbody>
            <tr>
              <td>User ID</td>
              <td>The ID of the user who shares this project.</td>
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
      <td>Parent project</td>
      <td>
        The list of parent projects of this project.
        <table>
          <tbody>
            <tr>
              <td>Project ID</td>
              <td>The project ID of the parent project.</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of parent projects retrieved.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Child project</td>
      <td>
        The list of child projects of this project.
        <table>
          <tbody>
            <tr>
              <td>Project ID</td>
              <td>The project ID of the child project.</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of child projects retrieved.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Super parent project</td>
      <td>
        The list of super parent project to this project.
        <table>
          <tbody>
            <tr>
              <td>Project ID</td>
              <td>The project ID of the super parent project.</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of super parent projects retrieved.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Scope</td>
      <td>
        The scope of the project.
      </td>
    </tr>
    <tr>
      <td>Has attachments</td>
      <td>
        Indicates if the project has attachments.
      </td>
    </tr>
    <tr>
      <td>Permalink</td>
      <td>
        The link to open the project in a web workspace. This is only accessible if the user has the appropriate access.
      </td>
    </tr>
    <tr>
      <td>Workflow ID</td>
      <td>
        The ID of the project workflow.
      </td>
    </tr>
    <tr>
      <td>Metadata</td>
      <td>
        The metadata of this project. The metadata list size corresponds to the number of metadata entries retrieved.
      </td>
    </tr>
    <tr>
      <td>Project</td>
      <td>
        The project properties of this project.
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
                      <td>User ID</td>
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
              <td>The status of the project.</td>
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
