---
title: Workato connectors - Wrike Search project action
date: 2019-05-30 18:00:00 Z
---

# Wrike - Search project action

Folder/projects are one of the main ways to organize, manage, and report on work within Wrike.

This action retrieves a list of projects that matches your search criteria. Only records in your Wrike instance that matches all the criteria will be returned. A maximum of 100 projects can be retrieved.

![Search project action](/assets/images/connectors/Wrike/search-project-action.png)
*Search project action*

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
      <td>Custom field list</td>
      <td>
        Select a custom field to open the corresponding input fields. This will be blank by default.
      </td>
    </tr>
    <tr>
      <td>Metadata</td>
      <td>
        The metadata details to use in your search.
        \\\\
      </td>
    </tr>
    <tr>
      <td>Permalink</td>
      <td>
        The link to open the project in a web workspace, this is only accessible if the user has the appropriate access. 
      </td>
    </tr>
    <tr>
      <td>Descendants</td>
      <td>
        Select <code>Yes</code> to add all descendant projects to search scope, otherwise select <code>No</code>.
      </td>    
    </tr>
    <tr>
      <td>Retrieve deleted projects only</td>
      <td>
        Select <code>True</code> to return deleted projects only, otherwise select <code>False</code>.
      </td>    
    </tr>
    <tr>
      <td>Updated date</td>
      <td>
        Select the date the project was last updated. The search will retrieve projects updated after this date. 
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
