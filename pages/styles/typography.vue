<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="typography md">
      <div class="page-header p-b-5 m-b-6">
        <h1>Typography</h1>
      </div>
      <h2>Typeface</h2>
      <p>GitLab use a system font stack which helps with performance by removing the need to download any font files. System fonts use the font of any particular operating system that is being used.</p>
      <h5>Body font stack</h5>
      <p class="todo">
        # Todo: Add codeblock showing body font variable stack
      </p>
      <h5>Monospace font stack</h5>
      <p class="todo">
        # Todo: Add codeblock showing monospace variable stack
      </p>

      <h2>Typescale</h2>
      <p>The default typography uses line-heights that align with our UI components. Margins are not included to allow for easier alignment with other UI elements. The following scale is used throughout the application:</p>
      <table class="type-scale m-b-6">
        <thead>
          <tr>
            <th>px</th>
            <th>Demo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12px</td>
            <td>The platform for modern developers</td>
          </tr>
          <tr>
            <td>14px</td>
            <td>The platform for modern developers</td>
          </tr>
          <tr>
            <td>16px</td>
            <td>The platform for modern developers</td>
          </tr>
          <tr>
            <td>20px</td>
            <td>The platform for modern developers</td>
          </tr>
          <tr>
            <td>24px</td>
            <td>The platform for modern developers</td>
          </tr>
          <tr>
            <td>28px</td>
            <td>The platform for modern developers</td>
          </tr>
          <tr>
            <td>42px</td>
            <td>The platform for modern developers</td>
          </tr>
        </tbody>
      </table>

      <h3>Markdown</h3>
      <p>Content that is written using markdown includes typography that contains fixed margins and increased line-heights in order to improve readability. GitLab uses two variations of typography when writing markdown. These variations are separated into documentation markdown and issuable markdown.</p>
      <h5>Documentation markdown</h5>
      <p>Documentation markdown is defined as any markdown that is written outside of issuable pages, such as a README or Wiki page.</p>
      <p class="todo">
        # Todo: Show class used for markdown
      </p>
      <h5>Issuable markdown</h5>
      <p>Within issuable pages, the type scale is decreased in order to more closely align with UI content. Issuables are defined as issue and merge request pages and issuable markdown includes content written in issuable descriptions and comments.
      <p class="todo">
        # Todo: Show class used for issuable markdown
      </p>

      <h2>Body copy</h2>
      <p>GitLab uses 14px as the base size for body copy. This is consistent throughout both the interface and within markdown content.</p>

      <p class="todo">
        # Todo: Show base font variable
      </p>

      <h2>Font weight</h2>
      <p>GitLab uses two font weights within the application: normal and bold. A bold font weight can be used to emphasize specific UI elements, such as a title or input label.</p>
      <p class="todo">
        # Todo: Show variables for normal and bold typography
      </p>
      <p class="todo">
        # Todo: Show class used for bold typography
      </p>
      <table class="font-weight m-b-6">
        <thead>
          <tr>
            <th>Weight</th>
            <th>Demo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Normal</td>
            <td>The platform for modern developers</td>
          </tr>
          <tr>
            <td>Bold</td>
            <td class="f-bold">The platform for modern developers</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
