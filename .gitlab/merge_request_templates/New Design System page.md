## Description

(Add a short description what this new page covers)

## Solution

(What’s the solution? Why is it like that? What are the benefits?)

## References

(Link related Design System or GitLab Design issues)

## Checklist

* [ ] Page link added to `layout/default.vue`
* [ ] Check if cross-reference to this page from other pages might be relevant or helpful
<!-- For component pages only (pages/components/) -->
* [ ] Page link with corresponding status added to `getting-started/status.vue`
* [ ] Depending on type of the page, content should follow the documentation template (link or structure outline can be added to the MR templates as well)
  * **Component page**:
  ```html
    <template>
      <div class="content limited m-t-7 m-b-7">
        <div class="component md">
          <h1>COMPONENT NAME</h1>
          <p>DESCRIPTION</p>
          
          <h2>Usage</h2>
          <p>DESCRIPTION</p>

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
                <td>DO</td>
                <td>DON'T</td>
              </tr>
            </tbody>
          </table>
          <h3>FURTHER DETAILS</h3>
          <p>DESCRIPTION</p>

          <h2>Demo</h2>
          <p class="todo">Todo: Add live component block with code example</p>

          <h2>Design specifications</h2>
          <p>DESCRIPTION:</p>    
          <p><a href="https://gitlab-org.gitlab.io/gitlab-design/hosted/design-gitlab-specs/LINK/">Sketch Measure Preview for COMPONENT</a></p>
          <h2>Related patterns</h2>
          <ul>
            <li><a href="/STRUCTURE/LINK">COMPONENT TITLE</a></li>
          </ul>
        </div>
      </div>
    </template>
  ```

/cc @sarrahvesselov @tauriedavis
