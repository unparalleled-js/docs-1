---
title: Workato connectors - Wrike get folder by id action
date: 2019-05-30 18:00:00 Z
---

# Wrike - Get folder by id action

Folders are one of the main ways to organize, manage, and report on work within Wrike.

This action retrieves a single that matches a search by folder ID. Only results in your Wrike instance that matches the criteria will be returned.


![Get folder by ID action](/assets/images/connectors/Wrike/get-folder-by-ID-action.png)
*Get folder by ID action*

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
      <td>Folder</td>
      <td>
        Select a folder to retrieve. To use folder ID, toggle "Enter a folder ID".
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
              <td>Folder ID</td>td>
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
