<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="colors md">
      <div class="page-header p-b-5 m-b-6">
        <h1>Color</h1>
      </div>
      <h2>Chromatic palette</h2>
      <p>We have four primary chromatic colors and their derivatives, totaling 44 colors for use across the application. These colors give flexibility during the design process, while also providing a harmonious palette that looks consistent and in line with our brand styles.</p>
      <h4>Color priorities</h4>
      <p>The current color palette follows the numeric naming conventions used by the font-weight attribute and is based on their degree of blackness. We use this to define a system of color priorities to help aide in creating contrast or hierarchy. The four primary colors have a weight of 500 and are considered priority 1. Colors with a weight of 300 and 700 are priority 2. 100 and 300 weights are priority 3. All remaining weights are priority 4.</p>
      <p>For example, if we had to pick only one shade of blue, it would be the medium weight 500, which is priority 1. If we needed more colors, we could choose from the next priority level. And so forth.</p>
      <h4>Accessibility</h4>
      <p>At GitLab, we are dedicated to continually improving the accessibility of the application. Currently, all chromatic colors pass the <a href="https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast" target="_blank">Web Content Accessibility Guidelines (WCAG)</a> AA level for large text when used as a background color. Learn more in <a href="/usability/a11y">Accessibility</a>.</p>
      <div class="color-palette row m-b-9">
        <div class="green col col-50">
          <h4>Green</h4>
          <div class="palette">
            <div class="color">
              <div class="color-overview c-green-background-50 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$green-50</span>
                <span class="hex f-small">#f1fdf6</span>
              </div>
              <div class="color-details c-green-border-50 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-green-background-50 c-green-border-50 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-50 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-green-background-50 c-green-border-50 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-50 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-green-background-50 c-green-border-50 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-50 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-green-background-50 c-green-border-50 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-50 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-green-background-100 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$green-100</span>
                <span class="hex f-small">#dcf5e7</span>
              </div>
              <div class="color-details c-green-border-100 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-green-background-100 c-green-border-100 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-100 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-green-background-100 c-green-border-100 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-100 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-green-background-100 c-green-border-100 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-100 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-green-background-100 c-green-border-100 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-100 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-green-background-200 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$green-200</span>
                <span class="hex f-small">#b3e6c8</span>
              </div>
              <div class="color-details c-green-border-200 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-green-background-200 c-green-border-200 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-200 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-green-background-200 c-green-border-200 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-200 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-green-background-200 c-green-border-200 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-200 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-green-background-200 c-green-border-200 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-200 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-green-background-300 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$green-300</span>
                <span class="hex f-small">#75d09b</span>
              </div>
              <div class="color-details c-green-border-300 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-green-background-300 c-green-border-300 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-300 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-green-background-300 c-green-border-300 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-300 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-green-background-300 c-green-border-300 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-300 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-green-background-300 c-green-border-300 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-300 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-green-background-400 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$green-400</span>
                <span class="hex f-small">#37b96d</span>
              </div>
              <div class="color-details c-green-border-400 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-green-background-400 c-green-border-400 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-400 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-green-background-400 c-green-border-400 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-400 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-green-background-400 c-green-border-400 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-400 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-green-background-400 c-green-border-400 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-400 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-priority color-overview c-green-background-500 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$green-500</span>
                <span class="hex f-small f-inverted">#1aaa55</span>
              </div>
              <div class="color-details c-green-border-500 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-green-background-500 c-green-border-500 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-500 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-green-background-500 c-green-border-500 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-500 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-green-background-500 c-green-border-500 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-500 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-green-background-500 c-green-border-500 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-500 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-green-background-600 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$green-600</span>
                <span class="hex f-small f-inverted">#168f48</span>
              </div>
              <div class="color-details c-green-border-600 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-green-background-600 c-green-border-600 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-600 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-green-background-600 c-green-border-600 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-600 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-green-background-600 c-green-border-600 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-600 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-green-background-600 c-green-border-600 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-600 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-green-background-700 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$green-700</span>
                <span class="hex f-small f-inverted">#12753a</span>
              </div>
              <div class="color-details c-green-border-700 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-green-background-700 c-green-border-700 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-700 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-green-background-700 c-green-border-700 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-700 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-green-background-700 c-green-border-700 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-700 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-green-background-700 c-green-border-700 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-700 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-green-background-800 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$green-800</span>
                <span class="hex f-small f-inverted">#0e5a2d</span>
              </div>
              <div class="color-details c-green-border-800 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-green-background-800 c-green-border-800 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-800 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-green-background-800 c-green-border-800 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-800 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-green-background-800 c-green-border-800 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-800 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-green-background-800 c-green-border-800 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-800 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-green-background-900 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$green-900</span>
                <span class="hex f-small f-inverted">#0a4020</span>
              </div>
              <div class="color-details c-green-border-900 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-green-background-900 c-green-border-900 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-900 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-green-background-900 c-green-border-900 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-900 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-green-background-900 c-green-border-900 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-900 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-green-background-900 c-green-border-900 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-900 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-green-background-950 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$green-950</span>
                <span class="hex f-small f-inverted">#072b15</span>
              </div>
              <div class="color-details c-green-border-950 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-green-background-950 c-green-border-950 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-950 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-green-background-950 c-green-border-950 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-950 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-green-background-950 c-green-border-950 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-green-border-950 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-green-background-950 c-green-border-950 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-green-border-950 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="blue col col-50">
          <h4>Blue</h4>
          <div class="palette">
            <div class="color">
              <div class="color-overview c-blue-background-50 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$blue-50</span>
                <span class="hex f-small">#f6fafe</span>
              </div>
              <div class="color-details c-blue-border-50 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-blue-background-50 c-blue-border-50 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-50 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-blue-background-50 c-blue-border-50 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-50 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-blue-background-50 c-blue-border-50 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-50 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-blue-background-50 c-blue-border-50 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-50 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-blue-background-100 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$blue-100</span>
                <span class="hex f-small">#e4f0fb</span>
              </div>
              <div class="color-details c-blue-border-100 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-blue-background-100 c-blue-border-100 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-100 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-blue-background-100 c-blue-border-100 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-100 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-blue-background-100 c-blue-border-100 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-100 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-blue-background-100 c-blue-border-100 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-100 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-blue-background-200 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$blue-200</span>
                <span class="hex f-small">#b8d6f4</span>
              </div>
              <div class="color-details c-blue-border-200 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-blue-background-200 c-blue-border-200 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-200 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-blue-background-200 c-blue-border-200 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-200 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-blue-background-200 c-blue-border-200 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-200 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-blue-background-200 c-blue-border-200 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-200 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-blue-background-300 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$blue-300</span>
                <span class="hex f-small">#73afea</span>
              </div>
              <div class="color-details c-blue-border-300 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-blue-background-300 c-blue-border-300 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-300 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-blue-background-300 c-blue-border-300 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-300 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-blue-background-300 c-blue-border-300 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-300 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-blue-background-300 c-blue-border-300 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-300 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-blue-background-400 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$blue-400</span>
                <span class="hex f-small">#2e87e0</span>
              </div>
              <div class="color-details c-blue-border-400 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-blue-background-400 c-blue-border-400 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-400 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-blue-background-400 c-blue-border-400 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-400 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-blue-background-400 c-blue-border-400 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-400 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-blue-background-400 c-blue-border-400 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-400 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-priority color-overview c-blue-background-500 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$blue-500</span>
                <span class="hex f-small f-inverted">#1f78d1</span>
              </div>
              <div class="color-details c-blue-border-500 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-blue-background-500 c-blue-border-500 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-500 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-blue-background-500 c-blue-border-500 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-500 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-blue-background-500 c-blue-border-500 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-500 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-blue-background-500 c-blue-border-500 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-500 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-blue-background-600 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$blue-600</span>
                <span class="hex f-small f-inverted">#1b69b6</span>
              </div>
              <div class="color-details c-blue-border-600 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-blue-background-600 c-blue-border-600 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-600 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-blue-background-600 c-blue-border-600 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-600 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-blue-background-600 c-blue-border-600 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-600 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-blue-background-600 c-blue-border-600 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-600 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-blue-background-700 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$blue-700</span>
                <span class="hex f-small f-inverted">#17599c</span>
              </div>
              <div class="color-details c-blue-border-700 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-blue-background-700 c-blue-border-700 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-700 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-blue-background-700 c-blue-border-700 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-700 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-blue-background-700 c-blue-border-700 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-700 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-blue-background-700 c-blue-border-700 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-700 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-blue-background-800 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$blue-800</span>
                <span class="hex f-small f-inverted">#134a81</span>
              </div>
              <div class="color-details c-blue-border-800 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-blue-background-800 c-blue-border-800 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-800 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-blue-background-800 c-blue-border-800 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-800 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-blue-background-800 c-blue-border-800 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-800 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-blue-background-800 c-blue-border-800 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-800 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-blue-background-900 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$blue-900</span>
                <span class="hex f-small f-inverted">#0f3b66</span>
              </div>
              <div class="color-details c-blue-border-900 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-blue-background-900 c-blue-border-900 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-900 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-blue-background-900 c-blue-border-900 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-900 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-blue-background-900 c-blue-border-900 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-900 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-blue-background-900 c-blue-border-900 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-900 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-blue-background-950 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$blue-950</span>
                <span class="hex f-small f-inverted">#0a2744</span>
              </div>
              <div class="color-details c-blue-border-950 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-blue-background-950 c-blue-border-950 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-950 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-blue-background-950 c-blue-border-950 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-950 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-blue-background-950 c-blue-border-950 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-950 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-blue-background-950 c-blue-border-950 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-blue-border-950 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="orange col col-50 m-t-7">
          <h4>Orange</h4>
          <div class="palette">
            <div class="color">
              <div class="color-overview c-orange-background-50 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$orange-50</span>
                <span class="hex f-small">#fffaf4</span>
              </div>
              <div class="color-details c-orange-border-50 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-orange-background-50 c-orange-border-50 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-50 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-orange-background-50 c-orange-border-50 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-50 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-orange-background-50 c-orange-border-50 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-50 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-orange-background-50 c-orange-border-50 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-50 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-orange-background-100 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$orange-100</span>
                <span class="hex f-small">#fff1de</span>
              </div>
              <div class="color-details c-orange-border-100 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-orange-background-100 c-orange-border-100 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-100 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-orange-background-100 c-orange-border-100 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-100 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-orange-background-100 c-orange-border-100 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-100 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-orange-background-100 c-orange-border-100 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-100 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-orange-background-200 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$orange-200</span>
                <span class="hex f-small">#fed69f</span>
              </div>
              <div class="color-details c-orange-border-200 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-orange-background-200 c-orange-border-200 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-200 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-orange-background-200 c-orange-border-200 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-200 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-orange-background-200 c-orange-border-200 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-200 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-orange-background-200 c-orange-border-200 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-200 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-orange-background-300 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$orange-300</span>
                <span class="hex f-small">#fdbc60</span>
              </div>
              <div class="color-details c-orange-border-300 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-orange-background-300 c-orange-border-300 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-300 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-orange-background-300 c-orange-border-300 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-300 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-orange-background-300 c-orange-border-300 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-300 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-orange-background-300 c-orange-border-300 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-300 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-orange-background-400 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$orange-400</span>
                <span class="hex f-small">#fca121</span>
              </div>
              <div class="color-details c-orange-border-400 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-orange-background-400 c-orange-border-400 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-400 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-orange-background-400 c-orange-border-400 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-400 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-orange-background-400 c-orange-border-400 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-400 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-orange-background-400 c-orange-border-400 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-400 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-priority color-overview c-orange-background-500 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$orange-500</span>
                <span class="hex f-small">#fc9403</span>
              </div>
              <div class="color-details c-orange-border-500 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-orange-background-500 c-orange-border-500 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-500 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-orange-background-500 c-orange-border-500 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-500 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-orange-background-500 c-orange-border-500 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-500 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-orange-background-500 c-orange-border-500 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-500 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-orange-background-600 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$orange-600</span>
                <span class="hex f-small">#de7e00</span>
              </div>
              <div class="color-details c-orange-border-600 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-orange-background-600 c-orange-border-600 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-600 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-orange-background-600 c-orange-border-600 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-600 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-orange-background-600 c-orange-border-600 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-600 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-orange-background-600 c-orange-border-600 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-600 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-orange-background-700 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$orange-700</span>
                <span class="hex f-small f-inverted">#c26700</span>
              </div>
              <div class="color-details c-orange-border-700 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-orange-background-700 c-orange-border-700 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-700 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-orange-background-700 c-orange-border-700 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-700 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-orange-background-700 c-orange-border-700 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-700 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-orange-background-700 c-orange-border-700 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-700 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-orange-background-800 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$orange-800</span>
                <span class="hex f-small f-inverted">#a35200</span>
              </div>
              <div class="color-details c-orange-border-800 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-orange-background-800 c-orange-border-800 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-800 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-orange-background-800 c-orange-border-800 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-800 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-orange-background-800 c-orange-border-800 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-800 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-orange-background-800 c-orange-border-800 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-800 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-orange-background-900 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$orange-900</span>
                <span class="hex f-small f-inverted">#853c00</span>
              </div>
              <div class="color-details c-orange-border-900 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-orange-background-900 c-orange-border-900 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-900 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-orange-background-900 c-orange-border-900 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-900 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-orange-background-900 c-orange-border-900 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-900 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-orange-background-900 c-orange-border-900 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-900 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-orange-background-950 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$orange-950</span>
                <span class="hex f-small f-inverted">#592800</span>
              </div>
              <div class="color-details c-orange-border-950 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-orange-background-950 c-orange-border-950 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-950 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-orange-background-950 c-orange-border-950 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-950 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-orange-background-950 c-orange-border-950 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-950 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-orange-background-950 c-orange-border-950 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-orange-border-950 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="red col col-50 m-t-7">
          <h4>Red</h4>
          <div class="palette">
            <div class="color">
              <div class="color-overview c-red-background-50 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$red-50</span>
                <span class="hex f-small">#fef6f5</span>
              </div>
              <div class="color-details c-red-border-50 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-red-background-50 c-red-border-50 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-50 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-red-background-50 c-red-border-50 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-50 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-red-background-50 c-red-border-50 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-50 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-red-background-50 c-red-border-50 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-50 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-red-background-100 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$red-100</span>
                <span class="hex f-small">#fbe5e1</span>
              </div>
              <div class="color-details c-red-border-100 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-red-background-100 c-red-border-100 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-100 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-red-background-100 c-red-border-100 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-100 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-red-background-100 c-red-border-100 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-100 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-red-background-100 c-red-border-100 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-100 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-red-background-200 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$red-200</span>
                <span class="hex f-small">#f2b4a9</span>
              </div>
              <div class="color-details c-red-border-200 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-red-background-200 c-red-border-200 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-200 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-red-background-200 c-red-border-200 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-200 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-red-background-200 c-red-border-200 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-200 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-red-background-200 c-red-border-200 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-200 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-red-background-300 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$red-300</span>
                <span class="hex f-small">#e67664</span>
              </div>
              <div class="color-details c-red-border-300 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-red-background-300 c-red-border-300 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-300 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-red-background-300 c-red-border-300 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-300 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-red-background-300 c-red-border-300 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-300 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-red-background-300 c-red-border-300 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-300 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-red-background-400 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$red-400</span>
                <span class="hex f-small">#e05842</span>
              </div>
              <div class="color-details c-red-border-400 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-red-background-400 c-red-border-400 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-400 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-red-background-400 c-red-border-400 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-400 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-red-background-400 c-red-border-400 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-400 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-red-background-400 c-red-border-400 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-400 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-priority color-overview c-red-background-500 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$red-500</span>
                <span class="hex f-small f-inverted">#db3b21</span>
              </div>
              <div class="color-details c-red-border-500 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-red-background-500 c-red-border-500 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-500 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-red-background-500 c-red-border-500 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-500 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-red-background-500 c-red-border-500 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-500 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                  <div class="f-inverted d-inline-block c-red-background-500 c-red-border-500 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-500 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-red-background-600 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$red-600</span>
                <span class="hex f-small f-inverted">#c0341d</span>
              </div>
              <div class="color-details c-red-border-600 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-red-background-600 c-red-border-600 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-600 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-red-background-600 c-red-border-600 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-600 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-red-background-600 c-red-border-600 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-600 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-red-background-600 c-red-border-600 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-600 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-red-background-700 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$red-700</span>
                <span class="hex f-small f-inverted">#a62d19</span>
              </div>
              <div class="color-details c-red-border-700 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-red-background-700 c-red-border-700 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-700 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-red-background-700 c-red-border-700 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-700 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-red-background-700 c-red-border-700 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-700 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-red-background-700 c-red-border-700 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-700 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-red-background-800 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$red-800</span>
                <span class="hex f-small f-inverted">#8b2615</span>
              </div>
              <div class="color-details c-red-border-800 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-red-background-800 c-red-border-800 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-800 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-red-background-800 c-red-border-800 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-800 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-red-background-800 c-red-border-800 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-800 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-red-background-800 c-red-border-800 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-800 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-red-background-900 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$red-900</span>
                <span class="hex f-small f-inverted">#711e11</span>
              </div>
              <div class="color-details c-red-border-900 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal</div>
                  <div class="d-inline-block c-red-background-900 c-red-border-900 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-900 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-red-background-900 c-red-border-900 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-900 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Large</div>
                  <div class="d-inline-block c-red-background-900 c-red-border-900 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-900 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-red-background-900 c-red-border-900 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-900 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-red-background-950 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$red-950</span>
                <span class="hex f-small f-inverted">#4b140b</span>
              </div>
              <div class="color-details c-red-border-950 p-t-6 p-r-5 p-b-6 p-l-5">
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal Normal</div>
                  <div class="d-inline-block c-red-background-950 c-red-border-950 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-950 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-red-background-950 c-red-border-950 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-950 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
                <div class="color-details--section">
                  <div class="f-bold m-b-2">WCAG Normal Normal</div>
                  <div class="d-inline-block c-red-background-950 c-red-border-950 p-t-2 p-r-3 p-b-2 p-l-3">AA</div>
                  <div class="d-inline-block c-red-border-950 p-t-2 p-r-3 p-b-2 p-l-3 fail">Fail</div>
                  <div class="f-inverted d-inline-block c-red-background-950 c-red-border-950 p-t-2 p-r-3 p-b-2 p-l-3 m-l-3">AA</div>
                  <div class="d-inline-block c-red-border-950 p-t-2 p-r-3 p-b-2 p-l-3 pass">Pass</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row m-b-9">
        <div class="col col-50">
          <h2>Neutral palette</h2>
          <p>Our neutral palette is primarily used within components to help differentiate hierarchy. Shades of gray can be used as backgrounds, borders, and shadows to emphasise certain areas or set them apart.</p>
          <div class="palette neutral">
            <div class="color">
              <div class="color-overview c-white-background p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$white</span>
                <span class="hex f-small">#ffffff</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-gray-background-50 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$gray-50</span>
                <span class="hex f-small">#fafafa</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-gray-background-100 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$gray-100</span>
                <span class="hex f-small">#f2f2f2</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-gray-background-200 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$gray-200</span>
                <span class="hex f-small">#f2f2f2</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-gray-background-300 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$gray-300</span>
                <span class="hex f-small">#cccccc</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-gray-background-400 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$gray-400</span>
                <span class="hex f-small">#bababa</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-gray-background-500 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$gray-500</span>
                <span class="hex f-small f-inverted">#a7a7a7</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-gray-background-600 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$gray-600</span>
                <span class="hex f-small f-inverted">#949494</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-gray-background-700 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$gray-700</span>
                <span class="hex f-small f-inverted">#707070</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-gray-background-800 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$gray-800</span>
                <span class="hex f-small f-inverted">#4f4f4f</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-gray-background-900 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$gray-900</span>
                <span class="hex f-small f-inverted">#2e2e2e</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-gray-background-950 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$gray-950</span>
                <span class="hex f-small f-inverted">#1f1f1f</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview c-black-background p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$black</span>
                <span class="hex f-small f-inverted">#000000</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col col-50">
          <h2>Transparencies</h2>
          <p>Transparencies are used only to indicate hover and active states within themes. Each theme has its own series of four transparencies to utilize with alpha levels ranging from 0.02 to 0.08.</p>
          <div class="palette neutral m-b-6">
            <div class="color">
              <div class="color-overview t-gray-background-a-02 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-gray-a-02</span>
                <span class="hex f-small">rgba($black, 0.02)</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-gray-background-a-04 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-gray-a-04</span>
                <span class="hex f-small">rgba($black, 0.04)</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-gray-background-a-06 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-gray-a-06</span>
                <span class="hex f-small">rgba($black, 0.06)</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-gray-background-a-08 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-gray-a-08</span>
                <span class="hex f-small">rgba($black, 0.08)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Themes</h2>
      <p>There are five different theme options for users to choose from that customize the appearance of the application header and navigation sidebar. These theme options make up four different color palettes:</p>
      <div class="color-palette row m-b-6">
        <div class="indigo col col-25">
          <h4>Indigo</h4>
          <div class="palette">
            <div class="color">
              <div class="color-overview t-indigo-background-50 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-indigo-50</span>
                <span class="hex f-small">#f7f7ff</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-indigo-background-100 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-indigo-100</span>
                <span class="hex f-small">#ebebfa</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-indigo-background-200 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-indigo-200</span>
                <span class="hex f-small">#d1d1f0</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-indigo-background-300 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-indigo-300</span>
                <span class="hex f-small">#a6a6de</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-indigo-background-400 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-indigo-400</span>
                <span class="hex f-small">#7c7ccc</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-indigo-background-500 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-indigo-500</span>
                <span class="hex f-small f-inverted">#6666c4</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-indigo-background-600 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-indigo-600</span>
                <span class="hex f-small f-inverted">#5b5bbd</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-indigo-background-700 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-indigo-700</span>
                <span class="hex f-small f-inverted">#4b4ba3</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-indigo-background-800 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-indigo-800</span>
                <span class="hex f-small f-inverted">#393982</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-indigo-background-900 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-indigo-900</span>
                <span class="hex f-small f-inverted">#292961</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-indigo-background-950 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-indigo-950</span>
                <span class="hex f-small f-inverted">#1a1a40</span>
              </div>
            </div>
          </div>
        </div>
        <div class="gray col col-25">
          <h4>Dark &amp; Light</h4>
          <div class="palette">
            <div class="color">
              <div class="color-overview t-gray-background-50 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-gray-50</span>
                <span class="hex f-small">#fafafa</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-gray-background-100 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-gray-100</span>
                <span class="hex f-small">#f2f2f2</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-gray-background-200 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-gray-200</span>
                <span class="hex f-small">$dfdfdf</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-gray-background-300 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-gray-300</span>
                <span class="hex f-small">#cccccc</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-gray-background-400 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-gray-400</span>
                <span class="hex f-small">#bababa</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-gray-background-500 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-gray-500</span>
                <span class="hex f-small f-inverted">#a7a7a7</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-gray-background-600 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-gray-600</span>
                <span class="hex f-small f-inverted">#949494</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-gray-background-700 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-gray-700</span>
                <span class="hex f-small f-inverted">#707070</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-gray-background-800 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-gray-800</span>
                <span class="hex f-small f-inverted">#4f4f4f</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-gray-background-900 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-gray-900</span>
                <span class="hex f-small f-inverted">#2e2e2e</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-gray-background-950 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-gray-950</span>
                <span class="hex f-small f-inverted">#1f1f1f</span>
              </div>
            </div>
          </div>
        </div>
        <div class="blue col col-25">
          <h4>Blue</h4>
          <div class="palette">
            <div class="color">
              <div class="color-overview t-blue-background-50 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-blue-50</span>
                <span class="hex f-small">#f4f8fc</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-blue-background-100 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-blue-100</span>
                <span class="hex f-small">#e6edf5</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-blue-background-200 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-blue-200</span>
                <span class="hex f-small">#c8d7e6</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-blue-background-300 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-blue-300</span>
                <span class="hex f-small">#97b3cf</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-blue-background-400 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-blue-400</span>
                <span class="hex f-small">#648cb4</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-blue-background-500 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-blue-500</span>
                <span class="hex f-small f-inverted">#4a79a8</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-blue-background-600 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-blue-600</span>
                <span class="hex f-small f-inverted">#3e6fa0</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-blue-background-700 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-blue-700</span>
                <span class="hex f-small f-inverted">#305c88</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-blue-background-800 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-blue-800</span>
                <span class="hex f-small f-inverted">#25496e</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-blue-background-900 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-blue-900</span>
                <span class="hex f-small f-inverted">#1a3652</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-blue-background-950 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-blue-950</span>
                <span class="hex f-small f-inverted">#0f2235</span>
              </div>
            </div>
          </div>
        </div>
        <div class="green col col-25">
          <h4>Green</h4>
          <div class="palette">
            <div class="color">
              <div class="color-overview t-green-background-50 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-green-50</span>
                <span class="hex f-small">#f2faf6</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-green-background-100 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-green-100</span>
                <span class="hex f-small">#e4f3ea</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-green-background-200 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-green-200</span>
                <span class="hex f-small">#c0dfcd</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-green-background-300 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-green-300</span>
                <span class="hex f-small">#8ac2a1</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-green-background-400 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable">$t-green-400</span>
                <span class="hex f-small">#52a274</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-green-background-500 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-green-500</span>
                <span class="hex f-small f-inverted">#35935c</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-green-background-600 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-green-600</span>
                <span class="hex f-small f-inverted">#288a50</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-green-background-700 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-green-700</span>
                <span class="hex f-small f-inverted">#1c7441</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-green-background-800 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-green-800</span>
                <span class="hex f-small f-inverted">#145d33</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-green-background-900 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-green-900</span>
                <span class="hex f-small f-inverted">#0d4524</span>
              </div>
            </div>
            <div class="color">
              <div class="color-overview t-green-background-950 p-t-3 p-r-5 p-b-3 p-l-5">
                <span class="variable f-inverted">$t-green-950</span>
                <span class="hex f-small f-inverted">#072d16</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
