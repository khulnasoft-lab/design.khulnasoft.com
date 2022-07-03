---
name: Color
---

## Chromatic palette

<note>View the [Data visualization > Color](/data-visualization/color) section for details about the data visualization palette.</note>

We have five primary chromatic hues and their color steps, totaling 55 color variables for use across the application. These colors give flexibility during the design process, while also providing a harmonious palette that looks consistent and in-line with our brand styles.

Though deciding which color to use depends on the situation, here are some general guidelines for using the chromatic palette hues:

- **Blue** indicates a current or active state. It communicates management, progress, connectivity, or organization.
- **Green** indicates success. It communicates save, create, add, available, done, approved, or resolved.
- **Orange** indicates attention is required. It communicates warning, pending, missing, or impeded progress.
- **Red** indicates a problem. It communicates a critical state, destructive action, error, failure, removal, stop, or decline.
- **Purple** is not assigned meaning in the same way the other chromatic hues are, and instead is associated with the GitLab brand. It communicates an affinity with the brand, and is used for things like illustrations or company-related announcements in the product.

<div class="row gl-mb-11">
  <foundations-color-palette
    class="col col-50 md p-b-7"
    color-id="blue"
    background-class-prefix="c-background-"
    name="Blue"
    :shades="[
      {
        value: 50,
        code: '#e9f3fc',
      },
      {
        value: 100,
        code: '#cbe2f9',
      },
      {
        value: 200,
        code: '#9dc7f1',
      },
      {
        value: 300,
        code: '#63a6e9',
      },
      {
        value: 400,
        code: '#428fdc',
      },
      {
        value: 500,
        code: '#1f75cb',
        class: 'color-priority f-inverted'
      },
      {
        value: 600,
        code: '#1068bf',
        class: 'f-inverted'
      },
      {
        value: 700,
        code: '#0b5cad',
        class: 'f-inverted'
      },
      {
        value: 800,
        code: '#064787',
        class: 'f-inverted'
      },
      {
        value: 900,
        code: '#033464',
        class: 'f-inverted'
      },
      {
        value: 950,
        code: '#002850',
        class: 'f-inverted'
      },
    ]"
    show-contrast-scores></foundations-color-palette>
  <foundations-color-palette
    class="col col-50 md p-b-7"
    color-id="green"
    background-class-prefix="c-background-"
    name="Green"
    :shades="[
      {
        value: 50,
        code: '#ecf4ee',
      },
      {
        value: 100,
        code: '#c3e6cd',
      },
      {
        value: 200,
        code: '#91d4a8',
      },
      {
        value: 300,
        code: '#52b87a',
      },
      {
        value: 400,
        code: '#2da160',
      },
      {
        value: 500,
        code: '#108548',
        class: 'color-priority f-inverted'
      },
      {
        value: 600,
        code: '#217645',
        class: 'f-inverted'
      },
      {
        value: 700,
        code: '#24663b',
        class: 'f-inverted'
      },
      {
        value: 800,
        code: '#0d532a',
        class: 'f-inverted'
      },
      {
        value: 900,
        code: '#0a4020',
        class: 'f-inverted'
      },
      {
        value: 950,
        code: '#072b15',
        class: 'f-inverted'
      },
    ]"
    show-contrast-scores></foundations-color-palette>
  <foundations-color-palette
    class="col col-50 md gl-mt-7 p-b-7"
    color-id="orange"
    background-class-prefix="c-background-"
    name="Orange"
    :shades="[
      {
        value: 50,
        code: '#fdf1dd',
      },
      {
        value: 100,
        code: '#f5d9a8',
      },
      {
        value: 200,
        code: '#e9be74',
      },
      {
        value: 300,
        code: '#d99530',
      },
      {
        value: 400,
        code: '#c17d10',
      },
      {
        value: 500,
        code: '#ab6100',
        class: 'color-priority f-inverted'
      },
      {
        value: 600,
        code: '#9e5400',
        class: 'f-inverted'
      },
      {
        value: 700,
        code: '#8f4700',
        class: 'f-inverted'
      },
      {
        value: 800,
        code: '#703800',
        class: 'f-inverted'
      },
      {
        value: 900,
        code: '#5c2900',
        class: 'f-inverted'
      },
      {
        value: 950,
        code: '#421f00',
        class: 'f-inverted'
      },
    ]"
    show-contrast-scores></foundations-color-palette>
  <foundations-color-palette
    class="col col-50 md gl-mt-7"
    color-id="red"
    background-class-prefix="c-background-"
    name="Red"
    :shades="[
      {
        value: 50,
        code: '#fcf1ef',
      },
      {
        value: 100,
        code: '#fdd4cd',
      },
      {
        value: 200,
        code: '#fcb5aa',
      },
      {
        value: 300,
        code: '#f57f6c',
      },
      {
        value: 400,
        code: '#ec5941',
      },
      {
        value: 500,
        code: '#dd2b0e',
        class: 'color-priority f-inverted'
      },
      {
        value: 600,
        code: '#c91c00',
        class: 'f-inverted'
      },
      {
        value: 700,
        code: '#ae1800',
        class: 'f-inverted'
      },
      {
        value: 800,
        code: '#8d1300',
        class: 'f-inverted'
      },
      {
        value: 900,
        code: '#660e00',
        class: 'f-inverted'
      },
      {
        value: 950,
        code: '#4d0a00',
        class: 'f-inverted'
      },
    ]"
    show-contrast-scores></foundations-color-palette>
  <foundations-color-palette
    class="col col-50 md gl-mt-7"
    color-id="purple"
    background-class-prefix="c-background-"
    name="Purple"
    :shades="[
      {
        value: 50,
        code: '#f4f0ff',
      },
      {
        value: 100,
        code: '#e1d8f9',
      },
      {
        value: 200,
        code: '#cbbbf2',
      },
      {
        value: 300,
        code: '#ac93e6',
      },
      {
        value: 400,
        code: '#9475db',
      },
      {
        value: 500,
        code: '#7b58cf',
        class: 'color-priority f-inverted'
      },
      {
        value: 600,
        code: '#694cc0',
        class: 'f-inverted'
      },
      {
        value: 700,
        code: '#5943b6',
        class: 'f-inverted'
      },
      {
        value: 800,
        code: '#453894',
        class: 'f-inverted'
      },
      {
        value: 900,
        code: '#2f2a6b',
        class: 'f-inverted'
      },
      {
        value: 950,
        code: '#232150',
        class: 'f-inverted'
      },
    ]"
    show-contrast-scores></foundations-color-palette>
</div>

<div class="row gl-mb-11">
  <div class="col col-50 md">

## Neutral palette

The neutral palette is primarily used within components to help differentiate hierarchy. Use shades of gray as backgrounds, borders, and shadows to emphasize areas or set them apart.

  <foundations-color-palette
    color-id="gray"
    background-class-prefix="c-background-"
    :shades="[
      {
        id: 'white',
        code: '#ffffff',
      },
      {
        value: 10,
        code: '#f5f5f5',
      },
      {
        value: 50,
        code: '#f0f0f0',
      },
      {
        value: 100,
        code: '#dbdbdb',
      },
      {
        value: 200,
        code: '#bfbfbf',
      },
      {
        value: 300,
        code: '#999999',
      },
      {
        value: 400,
        code: '#868686',
      },
      {
        value: 500,
        code: '#666666',
        class: 'f-inverted',
      },
      {
        value: 600,
        code: '#5e5e5e',
        class: 'f-inverted',
      },
      {
        value: 700,
        code: '#525252',
        class: 'f-inverted',
      },
      {
        value: 800,
        code: '#404040',
        class: 'f-inverted',
      },
      {
        value: 900,
        code: '#303030',
        class: 'f-inverted',
      },
      {
        value: 950,
        code: '#1f1f1f',
        class: 'f-inverted',
      },
      {
        id: 'black',
        code: '#000000',
        class: 'f-inverted',
      },
    ]"></foundations-color-palette>
  </div>

  <div class="col col-50 md">

## Transparency

Transparency is used only to indicate hover and active states within themes. Each theme has a series of four transparencies to utilize alpha levels ranging from 0.02 to 0.08.

  <foundations-color-palette
    color-id="t-gray-a"
    :shades="[
      {
        value: '02',
        code: 'rgba($black, 0.02)',
      },
      {
        value: '04',
        code: 'rgba($black, 0.04)',
      },
      {
        value: '06',
        code: 'rgba($black, 0.06)',
      },
      {
        value: '08',
        code: 'rgba($black, 0.08)',
      },
      {
        value: '24',
        code: 'rgba($black, 0.24)',
      },
    ]"></foundations-color-palette>
  </div>
</div>

## Themes

A user may choose between ten different themes to customize the appearance of the application header and navigation sidebar in GitLab. Each theme draws inspiration from one of the primary chromatic colors, the neutral palette, or the corporate indigo color.

- Indigo and light indigo share the same `$t-indigo-` variables.
- Green and light green share the same `$t-green-` variables.
- Dark and light share the same `$t-gray-` variables.

<div class="row gl-mb-6">
  <div class="col col-25 md p-b-7">
    <foundations-color-palette
      color-id="t-indigo"
      name="Indigo / Light indigo"
      class="md"
      :shades="[
        {
          value: 50,
          code: '#f1f1ff',
        },
        {
          value: 100,
          code: '#dbdbf8',
        },
        {
          value: 200,
          code: '#c7c7f2',
        },
        {
          value: 300,
          code: '#a2a2e6',
        },
        {
          value: 400,
          code: '#8181d7',
        },
        {
          value: 500,
          code: '#6666c4',
          class: 'f-inverted',
        },
        {
          value: 600,
          code: '#5252b5',
          class: 'f-inverted',
        },
        {
          value: 700,
          code: '#41419f',
          class: 'f-inverted',
        },
        {
          value: 800,
          code: '#303083',
          class: 'f-inverted',
        },
        {
          value: 900,
          code: '#222261',
          class: 'f-inverted',
        },
        {
          value: 950,
          code: '#14143d',
          class: 'f-inverted',
        },
      ]"></foundations-color-palette>
  </div>
  <div class="col col-25 md p-b-7">
    <foundations-color-palette
      color-id="t-blue"
      name="Blue"
      class="md"
      :shades="[
        {
          value: 50,
          code: '#cdd8e3',
        },
        {
          value: 100,
          code: '#b9cadc',
        },
        {
          value: 200,
          code: '#a6bdd5',
        },
        {
          value: 300,
          code: '#81a5c9',
        },
        {
          value: 400,
          code: '#628eb9',
        },
        {
          value: 500,
          code: '#4977a5',
          class: 'f-inverted',
        },
        {
          value: 600,
          code: '#346596',
          class: 'f-inverted',
        },
        {
          value: 700,
          code: '#235180',
          class: 'f-inverted',
        },
        {
          value: 800,
          code: '#153c63',
          class: 'f-inverted',
        },
        {
          value: 900,
          code: '#0b2640',
          class: 'f-inverted',
        },
        {
          value: 950,
          code: '#04101c',
          class: 'f-inverted',
        },
      ]"></foundations-color-palette>
  </div>
  <div class="col col-25 md p-b-7">
    <foundations-color-palette
      color-id="t-light-blue"
      name="Light blue"
      class="md"
      :shades="[
        {
          value: 50,
          code: '#dde6ee',
        },
        {
          value: 100,
          code: '#c1d4e6',
        },
        {
          value: 200,
          code: '#a0bedc',
        },
        {
          value: 300,
          code: '#74a3d3',
        },
        {
          value: 400,
          code: '#4f8bc7',
        },
        {
          value: 500,
          code: '#3476b9',
          class: 'f-inverted',
        },
        {
          value: 600,
          code: '#2268ae',
          class: 'f-inverted',
        },
        {
          value: 700,
          code: '#145aa1',
          class: 'f-inverted',
        },
        {
          value: 800,
          code: '#0e4d8d',
          class: 'f-inverted',
        },
        {
          value: 900,
          code: '#0c4277',
          class: 'f-inverted',
        },
        {
          value: 950,
          code: '#0a3764',
          class: 'f-inverted',
        },
      ]"></foundations-color-palette>
  </div>
  <div class="col col-25 md p-b-7">
    <foundations-color-palette
      color-id="t-green"
      name="Green / Light green"
      class="md"
      :shades="[
        {
          value: 50,
          code: '#dde9de',
        },
        {
          value: 100,
          code: '#b1d6b5',
        },
        {
          value: 200,
          code: '#8cc497',
        },
        {
          value: 300,
          code: '#69af7d',
        },
        {
          value: 400,
          code: '#499767',
        },
        {
          value: 500,
          code: '#308258',
          class: 'f-inverted',
        },
        {
          value: 600,
          code: '#25744c',
          class: 'f-inverted',
        },
        {
          value: 700,
          code: '#1b653f',
          class: 'f-inverted',
        },
        {
          value: 800,
          code: '#155635',
          class: 'f-inverted',
        },
        {
          value: 900,
          code: '#0e4328',
          class: 'f-inverted',
        },
        {
          value: 950,
          code: '#052e19',
          class: 'f-inverted',
        },
      ]"></foundations-color-palette>
  </div>
  <div class="col col-25 md gl-mt-7">
    <foundations-color-palette
      color-id="t-red"
      name="Red"
      class="md"
      :shades="[
        {
          value: 50,
          code: '#f4e9e7',
        },
        {
          value: 100,
          code: '#ecd3d0',
        },
        {
          value: 200,
          code: '#e3bab5',
        },
        {
          value: 300,
          code: '#d59086',
        },
        {
          value: 400,
          code: '#c66e60',
        },
        {
          value: 500,
          code: '#ad4a3b',
          class: 'f-inverted',
        },
        {
          value: 600,
          code: '#a13322',
          class: 'f-inverted',
        },
        {
          value: 700,
          code: '#8f2110',
          class: 'f-inverted',
        },
        {
          value: 800,
          code: '#761405',
          class: 'f-inverted',
        },
        {
          value: 900,
          code: '#580d02',
          class: 'f-inverted',
        },
        {
          value: 950,
          code: '#380700',
          class: 'f-inverted',
        },
      ]"></foundations-color-palette>
  </div>
  <div class="col col-25 md gl-mt-7">
    <foundations-color-palette
      color-id="t-light-red"
      name="Light red"
      class="md"
      :shades="[
        {
          value: 50,
          code: '#faf2f1',
        },
        {
          value: 100,
          code: '#f6d9d5',
        },
        {
          value: 200,
          code: '#ebada2',
        },
        {
          value: 300,
          code: '#e07f6f',
        },
        {
          value: 400,
          code: '#d36250',
        },
        {
          value: 500,
          code: '#c24b38',
          class: 'f-inverted',
        },
        {
          value: 600,
          code: '#b53a26',
          class: 'f-inverted',
        },
        {
          value: 700,
          code: '#a02e1c',
          class: 'f-inverted',
        },
        {
          value: 800,
          code: '#8b2212',
          class: 'f-inverted',
        },
        {
          value: 900,
          code: '#751709',
          class: 'f-inverted',
        },
        {
          value: 950,
          code: '#5c1105',
          class: 'f-inverted',
        },
      ]"></foundations-color-palette>
  </div>

  <div class="col col-25 md gl-mt-7">
    <h3>Dark / Light</h3>
    <p>The dark and light (gray) themes use the <a href="#neutral-palette">neutral palette</a>.</p>
  </div>
</div>

## Accessibility

At GitLab, we are dedicated to continually improving the accessibility of the application. Pajamas satisfies the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast) AA level for normal text. Learn more in [Accessibility](/accessibility/a11y).

- **Normal text** must have a contrast ratio of at least 4.5:1.
- **Large text** is defined as `14pt` Bold (`18.5px`) or `18pt` (`24px`) and must have a contrast ratio of at least 3:1.

### Passing level and contrast ratio

- **AAA** - Pass 7:1+
- **AA** - Pass 4.5:1+
- **AA+** - Pass, large text only 3:1+
- **F** - Doesn’t pass

Contrast ratios for each color step are calculated using white (`#fff`) and black (`#000`). The `50–400` steps all meet a 4.5:1 contrast ratio or higher against $gray-950 (`#1f1f1f`) or darker, while the `500–950` steps all meet a 4.5:1 contrast ratio against `$gray-10` (`#fafafa`) or lighter.

Use colors at least two steps apart to ensure distinguishable contrast for states and border/fill combinations.
