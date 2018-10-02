<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Buttons</h1>
      <p>Buttons execute an action, either in the background or foreground of an experience. They guide users into taking certain actions as emphasis can be increased or decreased by using different button types. Buttons express what action will occur when the user clicks or touches it either by text, icon, or both. Additional meaning can derived from the button style.</p>

      <h2>Types</h2>
      <p>Button types make it possible to bring more emphasis to certain buttons. This way the user can be guided into taking certain actions which can add to the comprehensiveness of a page.</p>

      <h3>Primary</h3>
      <p>Primary buttons represent the sole primary action on the page and thus have the most emphasis placed upon them. Primary buttons are recognisable by their contained styling which colors the entirety of the button. It is required that these buttons choose one of the four elementary button styles: info (blue), success (green), warning (orange), or danger (red).</p>

      <h3>Secondary</h3>
      <p>Secondary buttons represent one or more actions that are still worth for the user to be guided towards but do not represent the sole primary action of the page. Due to the outlined styling there is less emphasis placed on these buttons, still they require one of the four elementary button styles: info (blue), success (green), warning (orange), or danger (red).</p>

      <h3>Tertiary</h3>
      <p>A tertiary button is the default button type. Tertiary buttons still have an outlined styling but cannot have one of the four elementary button styles. They are typically used for less important actions that are not promoted to the user.</p>

      <h3>Link</h3>
      <p class="todo">Todo: Add link type button documentation</p>

      <h2>States</h2>
      <p>Buttons change depending on the user's interaction or set behaviour. This is to ensure they are accessible and feel responsive in both desktop and mobile environments. Additionally disabled and read-only buttons need certain interaction restrictions and a certain styling for their meaning to become apparent to the user.</p>

      <h3>Hover, Active, and Focus</h3>
      <p>Buttons change depending on the user's interaction with them. In all three states the buttons will have a thicker border and their background color will change. For the focus state, buttons will get an additional blue glow indicating that they are in focus.</p>

      <h3>Disabled</h3>
      <p>Disabled buttons are prevented from having any true interaction with the user. They are there to let the user know a certain action would be possible if circumstances would be different. All buttons regardless of style are styled the same way when in the disabled state. Additionally they will show the "not-allowed" cursor style when hovered upon and have a faded text color.</p>

      <h2>Styles</h2>
      <p>Apart from  text, icon, or both, buttons can derive additional meaning from their presented style.</p>

      <h3>Default</h3>
      <p>The default button style is used most often and is generally picked when using tertiary buttons. It features grayscale colors with a white background.</p>

      <h3>Elementary</h3>
      <p>When choosing one of the four elementary button styles, buttons will automatically express themselves better by falling in a certain category due to the meaning and symbolism of their respective color. Those colors are aligned with our <a href="/foundations/colors">four primary chromatic colors</a>.</p>

      <h4>Info</h4>
      <p>Buttons that represent activation or informative processes. Additionally any actions that do not fit any of the other categories also fit in this category. They are represented in a blue color.</p>

      <h4>Success</h4>
      <p>Buttons that represent positive actions such as the creation or addition of items. They are represented in a green color.</p>

      <h4>Warning</h4>
      <p>Buttons that represens actions for which the user should be cautious, such as actions that will override certain rulesets or overwrite certain information. They are represented in a orange color.</p>

      <h4>Danger</h4>
      <p>Buttons that represens actions for which the user should be extra cautious, such as destructive actions that might irreversively delete content. They are represented in a red color.</p>
  
      <h3>Dashed</h3>
      <p>Dashed button styles are used when something has not yet been created. Their action will create the missing item and will be replaced by that content.</p>

      <h3>Dark and Inverted</h3>
      <p>Some circumstances are exceptions in that they require a different button style than normal in order for those to still be accessible. When UI is darker than normal they can require either a dark or inverted  button style. These button styles are only possible for tertiary button types.</p>

      <h2>Variations</h2>
      <p>Buttons come in many different variations which fit different situations. Some can require a dropdown while others require less width or a certain type of information and action combo.</p>

      <h3>Default</h3>
      <p></p>

      <h3>Icon</h3>
      <p></p>

      <h3>Dropdown</h3>
      <p></p>

      <h4>Split dropdown</h4>
      <p></p>
      
      <h4>Icon dropdown</h4>
      <p></p>

      <h3>Count</h3>
      <p></p>

      <h3>Ellipsis</h3>
      <p></p>

      <h3>Group</h3>
      <p></p>

      <h3>Segmented Control</h3>
      <p>See <a href="/components/segmented-control">Segmented Control</a></p>

      <h2>Sizing</h2>
      <p>Apart from the default buttons size, certain button variations can be sized down in order to fit tighter spaces.</p>

      <h3>Default</h3>
      <p></p>

    </div>
  </div>
</template>