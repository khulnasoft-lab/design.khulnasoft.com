---
name: Color
---

## Data visualization palette

Data visualization and dashboards are critical content within GitLab. The presentation and interpretation of this content relies on visual nuance that is separate from the rest of the UI.

The data visualization palette is designed specifically for data and graphical dashboards. The meaning is derived from the data itself, not by color as a first measure. Color sequence is intentional to help colorblind users distinguish data points. The palette is versatile enough to be applied in a number of use cases in both light and dark UI.

View the [Color](/product-foundations/colors) section of Foundations for details about the UI, neutral, and theme palettes.

### Palette

There are 5 hues, each with 11 steps for a total of 55 variables. The palette is designed for both light and dark UI where:

* `$data-viz-[hue]-50`—`$data-viz-[hue]-500` steps meet or exceed a 3:1 contrast ratio on a dark `$gray-950` (`#1f1f1f`) surface.
* `$data-viz-[hue]-500`—`$data-viz-[hue]-950` steps meet or exceed a 3:1 contrast ratio on a light `$white` (`#ffffff`) surface.

Because the `500` step has at least a 3:1 contrast ratio on both light and dark surfaces, there are 30 total variables that can be used for each surface. 

<div class="color-palette row m-b-9">
  <div class="data-vis-green col col-33">
    <h4>Green</h4>
    <div class="distributed palette">
      <div class="color">
        <div class="color-overview data-viz-green-50 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-green-50</span>
          <span class="hex f-small">#ddfab7</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-100 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-green-100</span>
          <span class="hex f-small">#c9f097</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-200 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-green-200</span>
          <span class="hex f-small">#b0de73</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-300 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-green-300</span>
          <span class="hex f-small">#94c25e</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-400 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-green-400</span>
          <span class="hex f-small">#83ab4a</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-500 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-green-500</span>
          <span class="hex f-small f-inverted">#608b2f</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-600 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-green-600</span>
          <span class="hex f-small f-inverted">#487900</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-700 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-green-700</span>
          <span class="hex f-small f-inverted">#366800</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-800 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-green-800</span>
          <span class="hex f-small f-inverted">#275600</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-900 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-green-900</span>
          <span class="hex f-small f-inverted">#1a4500</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-green-950 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-green-950</span>
          <span class="hex f-small f-inverted">#0f3300</span>
        </div>
      </div>
    </div>
  </div>

  <div class="data-vis-aqua col col-33">
    <h4>Aqua</h4>
    <div class="distributed palette">
      <div class="color">
        <div class="color-overview data-viz-aqua-50 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-aqua-50</span>
          <span class="hex f-small">#b8fff2</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-100 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-aqua-100</span>
          <span class="hex f-small">#93fae7</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-200 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-aqua-200</span>
          <span class="hex f-small">#5eebdf</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-300 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-aqua-300</span>
          <span class="hex f-small">#25d2d2</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-400 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-aqua-400</span>
          <span class="hex f-small">#0bb6c6</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-500 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-aqua-500</span>
          <span class="hex f-small f-inverted">#0094b6</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-600 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-aqua-600</span>
          <span class="hex f-small f-inverted">#0080a1</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-700 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-aqua-700</span>
          <span class="hex f-small f-inverted">#006887</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-800 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-aqua-800</span>
          <span class="hex f-small f-inverted">#004d67</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-900 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-aqua-900</span>
          <span class="hex f-small f-inverted">#003f57</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-aqua-950 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-aqua-950</span>
          <span class="hex f-small f-inverted">#00293d</span>
        </div>
      </div>
    </div>
  </div>

  <div class="data-vis-blue col col-33">
    <h4>Blue</h4>
    <div class="distributed palette">
      <div class="color">
        <div class="color-overview data-viz-blue-50 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-blue-50</span>
          <span class="hex f-small">#e9ebff</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-100 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-blue-100</span>
          <span class="hex f-small">#d4dcfa</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-200 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-blue-200</span>
          <span class="hex f-small">#b7c6ff</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-300 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-blue-300</span>
          <span class="hex f-small">#97acff</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-400 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-blue-400</span>
          <span class="hex f-small">#748eff</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-500 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-blue-500</span>
          <span class="hex f-small f-inverted">#5772ff</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-600 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-blue-600</span>
          <span class="hex f-small f-inverted">#445cf2</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-700 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-blue-700</span>
          <span class="hex f-small f-inverted">#3547de</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-800 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-blue-800</span>
          <span class="hex f-small f-inverted">#232fcf</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-900 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-blue-900</span>
          <span class="hex f-small f-inverted">#1e23a8</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-blue-950 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-blue-950</span>
          <span class="hex f-small f-inverted">#11118a</span>
        </div>
      </div>
    </div>
  </div>

  <div class="data-vis-magenta col col-33">
    <h4>Magenta</h4>
    <div class="distributed palette">
      <div class="color">
        <div class="color-overview data-viz-magenta-50 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-magenta-50</span>
          <span class="hex f-small">#ffe3eb</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-100 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-magenta-100</span>
          <span class="hex f-small">#ffc9d9</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-200 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-magenta-200</span>
          <span class="hex f-small">#fcacc5</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-300 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-magenta-300</span>
          <span class="hex f-small">#ff85af</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-400 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-magenta-400</span>
          <span class="hex f-small">#f2639a</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-500 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-magenta-500</span>
          <span class="hex f-small f-inverted">#d84280</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-600 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-magenta-600</span>
          <span class="hex f-small f-inverted">#c52c6b</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-700 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-magenta-700</span>
          <span class="hex f-small f-inverted">#b31756</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-800 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-magenta-800</span>
          <span class="hex f-small f-inverted">#950943</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-900 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-magenta-900</span>
          <span class="hex f-small f-inverted">#7a0033</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-magenta-950 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-magenta-950</span>
          <span class="hex f-small f-inverted">#570028</span>
        </div>
      </div>
    </div>
  </div>

  <div class="data-vis-orange col col-33">
    <h4>Orange</h4>
    <div class="distributed palette">
      <div class="color">
        <div class="color-overview data-viz-orange-50 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-orange-50</span>
          <span class="hex f-small">#fae8d1</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-100 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-orange-100</span>
          <span class="hex f-small">#f7d8b5</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-200 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-orange-200</span>
          <span class="hex f-small">#f3c291</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-300 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-orange-300</span>
          <span class="hex f-small">#eb9a5c</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-400 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable">$data-viz-orange-400</span>
          <span class="hex f-small">#e17223</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-500 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-orange-500</span>
          <span class="hex f-small f-inverted">#d14e00</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-600 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-orange-600</span>
          <span class="hex f-small f-inverted">#b24800</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-700 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-orange-700</span>
          <span class="hex f-small f-inverted">#944100</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-800 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-orange-800</span>
          <span class="hex f-small f-inverted">#6f3500</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-900 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-orange-900</span>
          <span class="hex f-small f-inverted">#5c2b00</span>
        </div>
      </div>
      <div class="color">
        <div class="color-overview data-viz-orange-950 p-t-3 p-r-5 p-b-3 p-l-5">
          <span class="variable f-inverted">$data-viz-orange-950</span>
          <span class="hex f-small f-inverted">#421e00</span>
        </div>
      </div>
    </div>
  </div>
</div>

## Usage

### Surfaces

* In a light UI, all data visualization should be on a `$white` (`#ffffff`) surface
* In a dark UI, all data visualization should be on a `$gray-950` (`#1f1f1f`) surface

### Sequential data

Sequential data uses color lightness to indicate a range from low (light) to high (dark). Color transitions use stops within a single hue, starting at the 500 values.

Both light and dark sets have 6 color steps. On white, the color steps range from 500–950, and on `$gray-950` the color steps range from 50–500.

**Potential applications:** stacked bar charts, heat maps, choropleth maps, funnels, cycle diagrams, clusters, pyramids, etc.

### Categorical data

Categorical data (also known as qualitative or thematic) uses hue to differentiate qualitative data, and lightness to differentiate quantitive data. The order of hues is mixed to increase contrast between sibling data points.

For data sets where qualitative and quantitive data is presented, start with the 500 values for qualitative (categories), and follow the linear stops in each hue (as seen in the linear stops above) for the quantitive.

For data sets where either qualitative or quantitive data is presented, use the sequence shown below to alternate hues.

With 5 hues in the palette we can alternate both the hue and lightness to create sequences with color and contrast differences. There are many patterns that can be explored (and have been by the IBM team within the article linked in the Resources), we use a chevron-skipping pattern.

**Potential applications:** bar charts, pie charts, line graphs, stacked area charts, etc.

### Divergent data

Divergent data moves in opposite directions from a central point. Color is used to indicate distance from the center with darker stops on each end.

Stops that use fill values lighter than the minimum contrast have borders that use the 500 value to ensure sufficient contrast on the surface.

There are two divergent palette options, choose the one that works best with the type of data being shown.

The steps required to make a useful progression would not meet 3:1 contrast ratios by using fill alone, so a border that uses the 500 value from the relative hue surrounds low-contrast fills.

The pattern for selecting values skips every other step. For data with a smaller range, the pattern could be a subset, skipping every other step from the larger sequence.

**Potential applications:** butterfly charts, choropleth maps, sparklines, etc.

### Dashboards

Todo: Add dashboard usage guidelines and examples.

## Accessibility

At GitLab, we are dedicated to continually improving the accessibility of the application. Color is no exception. Every step of every hue in the data visualization palette has been evaluated to satisfy a 3:1 contrast ratio against the light or dark surface it will be used on.

* For light UI, that is a contrast ratio of at least 3:1 on `$white` (`#ffffff`).
* For a dark UI, that is a contrast ratio of at least 3:1 on `$gray-950` (`#1f1f1f`)

### Visual separators

Per [WCAG 2.1 Success Criterion 1.4.11: Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html), UI components and graphical objects must have a contrast ratio of at least 3:1 against adjacent colors. 

Colors meet or exceed a 3:1 contrast ratio against either a light or dark surface, but not necessarily each other. There are a few solutions, but the easiest is “whitespace” between each element. This means at least a `1px` gap between elements, where the gap is the color of the surface. Alternately, a border of at least `1px` can be used on elements, where the border matches the surface color. Whether this is an actual gap, or border, the effect is the same.

### Pattern fills

Pattern fills can create accessibility issues of their own, namely cognitive, and we currently do not support this as an option.

## Resources

* https://medium.com/design-ibm
* inclusive-color-sequences-for-data-viz-in-6-steps-712869b910c2
* https://design.lyft.com/re-approaching-color-9e604ba22c88
* https://www.colorbox.io/
* https://designsystem.digital.gov/design-tokens/color/overview/
* https://www.khanacademy.org/partner-content/pixar/color#color-space
* https://michelf.ca/projects/sim-daltonism/