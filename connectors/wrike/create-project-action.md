---
title: Workato connectors - Wrike create project action
date: 2019-06-14 18:00:00 Z
search:
    keywords: ['wrike', 'project', 'create']
---

# Wrike - Create project action

Projects are one of the main ways to organize, manage, and report on work within Wrike. In essence, Wrike projects are folders with additional properties.

This action creates a single project in a specified location. To create a main project, select **Root** as the parent folder.

![Create project action](/assets/images/connectors/Wrike/create-project-action.png)
*Create project action*

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
      <td>Parent folder/project</td>
      <td>
        Select a parent folder/project to create this folder in. To use folder/project ID, toggle "Enter a folder/project ID".
      </td>
    </tr>
    <tr>
      <td>Title</td>
      <td>
        The title of the folder.
      </td>
    </tr>
    <tr>
      <td>Project</a></td>
      <td>
        Select the project properties.
        <table>
          <tbody>
            <tr>
              <td>Status</td>
              <td>The status of the project.</td>
            </tr>
            <tr>
              <td>User IDs of Wrike users who should own this project</td>
              <td>Select users as project owners. You can define users with a source list or manually input their user ID.
            </tr>
            <tr>
              <td>Start date</td>
              <td>The date this project was started.</td>
            </tr>
            <tr>
              <td>End date</td>
              <td>The date this project will end.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>Description</td>
      <td>
        The description of the project.
      </td>    
    </tr>
    <tr>
      <td>Users who share the project</td>
      <td>
        Select users who share this project. You can define users with a source list or manually input their user ID.
      </td>
    </tr>
    <tr>
      <td>Custom fields</a></td>
      <td>
        Provide data for the custom field(s).
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
