---
title: Workato connectors - Wrike update project action
date: 2019-05-30 18:00:00 Z
---

# Wrike - Update project action

Folders/projects are one of the main ways to organize, manage, and report on work within Wrike.

This action updates a specific project in Wrike. You can change the project name, parent project, add or modify the title and description, as well as modify sharing users;

![Update project action](/assets/images/connectors/Wrike/update-project-action.png)
*Update project action*

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
      <td>project</td>
      <td>
        Select a project to retrieve. To use project ID, toggle "Enter a project ID".
      </td>
    </tr>
    <tr>
      <td>Title</td>
      <td>
        The new title of the project. 
        <br>\\\\\To retain the original title, use a data pill??
      </td>
    </tr>
    <tr>
      <td>Description</td>
      <td>
        The description of the project.
      </td>
    </tr>
    <tr>
      <td>Users to share the project with</td>
      <td>
        Select users to share this project with. You can define users with a source list or manually input with the user ID. 
      </td>
    </tr>
    <tr>
      <td>Remove users from sharing of project</td>
      <td>
        The users to remove from sharing of project. You can define users with a source list or manually input with the user ID. 
      </td>
    </tr>
     <tr>
      <td>Remove parent folders/projects</td>
      <td>
        The parent folders to remove. You cannot remove the <b>root project</b> or the <b>recycle bin</b>.  You can define users with a source list or manually input with the user ID. 
      </td>
    </tr>
    <tr>
      <td>Add parent folders/projects</td>
      <td>
        Select parent folders/projects to add. You can define users with a source list or manually input with the user ID. 
      </td>
    </tr>
    <tr>
      <td>Restore</td>
      <td>
        Select <code>Yes</code> to restore project from recycle bin, otherwise select <code>No</code>.
      </td>
    </tr>
    <tr>
      <td>Custom field</td>
      <td>
        Provide data for the custom field(s).
      </td>
    </tr>
    <tr>
      <td>Project</td>
      <td>
        \\\ insert table.
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
      <td>project ID</td>
      <td>
        The Wrike ID of the project.
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
        The title of the project.
      </td>
    </tr>
    <tr>
      <td>Created date</td>
      <td>
        The date this project was created.
      </td>
    </tr>
    <tr>
      <td>Updated date</td>
      <td>
        The date this project was updated.
      </td>
    </tr>
    <tr>
      <td>Brief description</td>
      <td>
        A brief description of the project. Will be blank if not specified. 
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
              <td>User ID</td>td>
              <td>The ID of the user who shares this project</td>
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
      <td>Parent project</td>
      <td>
        The list of parent projects of this project.
        <table>
          <tbody>
            <tr>
              <td>project ID</td>td>
              <td>The project ID of the parent project</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of parent projects retrieved</td>
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
              <td>project ID</td>td>
              <td>The project ID of the child project</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of child projects retrieved</td>
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
              <td>project ID</td>td>
              <td>The project ID of the super parent project. Only applicable to 'selective sharing' labs feature.</td>
            </tr>
            <tr>
              <td>List size</td>
              <td>The size of the list, corresponding to the number of super parent projects retrieved</td>
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
        Is <code>True</code> if the project has attachments, otherwise it will display <code>False</code>. 
      </td>
    </tr>
    <tr>
      <td>Attachment count</td>
      <td>
        The total number of attachments in this project
      </td>
    </tr>
    <tr>
      <td>Permalink</td>
      <td>
        The link to open the project in a web workspace, this is only accessible if the user has the appropriate access. 
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
        The manually inputted metadata of this project.
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
    <tr>
      <td>List size</td>
      <td>
        The size of the list, corresponding to the number of projects retrieved.
      </td>
    </tr>
  </tbody>
</table>
