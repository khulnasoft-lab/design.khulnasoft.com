<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Breadcrumbs</h1>
      <p>Breadcrumbs assist users by helping them understand their current location in relation the rest of the application. Breadcrumbs use page hierarchy to facilitate discovery without taking up too much space.</p>
      <h2>Usage</h2>
      <p>Breadcrumbs should appear on every page of the application, except for the register and profile screens. Breadcrumbs show the hierarchical progress from the highest page entity to the current page entity, one step at a time. They should not be used to replace the main navigation.</p>
      <h3>Dos and Dont's</h3>
      <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Do</th>
            <th>Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ignore the instance name in the breadcrumb line.</td>
            <td>Include the instance name in the breadcrumb line.</td>
          </tr>
          <tr>
            <td>Keep breadcrumbs to one line by default.</td>
            <td>Break breadcrumbs up onto separate lines.</td>
          </tr>
          <tr>
            <td>Use ellipses to hide multiple subgroups when there are more than three.</td>
            <td>Show more than three subgroups by default.</td>
          </tr>
          <tr>
            <td>Use chevrons between breadcrumb items.</td>
            <td>Use slashes or other characters to separate breadcrumb items.</td>
          </tr>
        </tbody>
      </table>
      <h3>Individual pages</h3>
      <dl>
        <dt class="p-b-5">For pages that present the details for an individual item (issue, merge request, snippet, pipeline, job, milestone, commit, tag, environment, cluster, pipeline schedule), the last element of the breadcrumbs should include the ID for said element.</dt>
        <dd class="p-t-5 p-b-5"><strong>Example:</strong>  MR !1234 in CE becomes <em>'GitLab.org > GitLab Community Edition > Merge Requests > !1234'</em></dd>
      </dl>
      <h3>Contextual pages</h3>
      <dl>
        <dt class="p-b-5">For contextual pages within the navigation, the breadcrumb should only include the submenu title.</dt>
        <dd class="p-t-5 p-b-5"><strong>Example:</strong>  Overview > Details becomes just <em>'Details'</em></dd>
      </dl>
      <h3>Truncation</h3>
      <p>Breadcrumbs should use the following rules to truncate items:</p>
      <ul>
        <li>Use an ellipsis button to hide groups when there are three or more subgroups in the path.</li>
        <li>Use an ellipsis button to hide all Wiki page breadcrumb items except the current page.</li>
        <li>The top-level group and the subgroup closest to the project are never collapsed.</li>
        <li>All breadcrumb items except the last one are truncated to 128px if there isn't enough horizontal space to fit them on one line.</li>
      </ul>
      <h3>Special breadcrumbs</h3>
      <p>Certain pages have special breadcrumb paths to make the breadcrumb labels intuitive. These are defined as follows:</p>
      <table class="do-dont m-b-6">
        <thead>
          <tr>
            <th>Path</th>
            <th>Title in breadcrumbs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Group > Issues > List</td>
            <td>Group > <strong>Issues</strong></td>
          </tr>
          <tr>
            <td>Group > Issues > Boards</td>
            <td>Group > <strong>Issue Boards</strong></td>
          </tr>
          <tr>
            <td>Group > Settings > General</td>
            <td>Group > <strong>General Settings</strong></td>
          </tr>
          <tr>
            <td>Group > Settings > Integrations</td>
            <td>Group > <strong>Integrations Settings</strong></td>
          </tr>
          <tr>
            <td>Group > Settings > CI / CD</td>
            <td>Group > <strong>CI / CD Settings</strong></td>
          </tr>
          <tr>
            <td>Group > Project > Repository > Files</td>
            <td>Group > Project > <strong>Repository</strong></td>
          </tr>
          <tr>
            <td>Group > Project > Repository > Compare</td>
            <td>Group > Project > <strong>Compare Revisions</strong></td>
          </tr>
          <tr>
            <td>Group > Project > Repository > Charts</td>
            <td>Group > Project > <strong>Contribution Charts</strong></td>
          </tr>
          <tr>
            <td>Group > Project > Issues > List</td>
            <td>Group > Project > <strong>Issues</strong></td>
          </tr>
          <tr>
            <td>Group > Project > Issues > Boards</td>
            <td>Group > Project > <strong>Issue Boards</strong></td>
          </tr>
          <tr>
            <td>Group > Project > CI / CD > Charts</td>
            <td>Group > Project > <strong>CI/CD Charts</strong></td>
          </tr>
          <tr>
            <td>Group > Project > Settings > General</td>
            <td>Group > Project > <strong>General Settings</strong></td>
          </tr>
          <tr>
            <td>Group > Project > Settings > Repository</td>
            <td>Group > Project > <strong>Repository Settings</strong></td>
          </tr>
          <tr>
            <td>Group > Project > Settings > CI / CD</td>
            <td>Group > Project > <strong>CI/CD Settings</strong></td>
          </tr>
          <tr>
            <td>User Settings > Profile</td>
            <td>User settings > <strong>Edit Profile</strong></td>
          </tr>
          <tr>
            <td>User Settings > Password</td>
            <td>User settings > <strong>Edit Password</strong></td>
          </tr>
          <tr>
            <td>Admin Area > System Hooks > Edit</td>
            <td>Admin Area > System Hooks > <strong>Edit System Hook</strong></td>
          </tr>
          <tr>
            <td>Admin Area > Label > Edit</td>
            <td>Admin Area > Labels > <strong>Edit Label</strong></td>
          </tr>
        </tbody>
      </table>
      <h2>Demo</h2>
      <p class="todo">Todo: Add live component block with code example</p>
      <h2>Design specifications</h2>
      <p>Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:</p>    
      <p><a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/tooltips-spec-previews/">Sketch Measure Preview for Popovers</a></p>
      <h2>Related patterns</h2>
      <ul>
        <li><a href="/regions/navigation">Navigation</a></li>
      </ul>
    </div>
  </div>
</template>

