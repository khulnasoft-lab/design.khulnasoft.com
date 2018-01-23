<template>
  <div class="content limited md m-t-7 m-b-7">
    <h1>Tooling</h1>

    <img class="m-t-6 m-b-5" src="~/assets/images/tooling/plugins-illustration.png">
    <h2>Plugins</h2>
    <p> Sketch plugins help to significantly improve the design workflow. We recommend installing the following plugins in order to make using GitLab Elements a seamless experience. If you’d like to recommend a plugin, please <a href="https://gitlab.com/gitlab-org/gitlab-design/issues/new">create an issue</a> in the GitLab Design project for adding guidelines here.</p>

    <h3><a href="https://brand.ai/sketch">Brand.ai</a></h3>
    <p>Brand.ai is a hosted design library that syncs symbols and styles across files. Within the plugin you will find colors, text styles, shared styles, icons, components, and artboards to help quickly create mockups. If an element changes, simply push the change to the library and watch it sync across files. <a href="https://brand.ai/git-lab/primary-brand">Browse GitLab’s design library on Brand.ai</a></p>

    <p class="text-center"><img src="~/assets/images/tooling/brandai.png"></p>

    <h3><a href="https://github.com/kenmoore/sketch-relabel-button">Relabel Button</a></h3>
    <p>The Relabel Button plugin for Sketch prompts for a button’s new label, applies the text, resizes the button background, and repositions any other interior elements while maintaining the existing padding. It’s essentially awesome voodoo magic.</a></p>

    <h4>How to use</h4>
    <ol>
      <li>Select element:<br><img src="~/assets/images/tooling/relabel-button/select-element.png"></li>
      <li>Press <kbd>Cmd+J</kbd> and enter the new text for the button (or <kbd>Cmd+Ctrl+J</kbd> for right aligned resize):<br><img src="~/assets/images/tooling/relabel-button/prompt.png"></li>
      <li>✨ Tada! The text and other objects will be updated maintaining the button’s original padding and relative layout:<br><img src="~/assets/images/tooling/relabel-button/new-label.png"></li>
    </ol>

    <h4>Guidelines</h4>
    <ul>
      <li>Nested groups not supported</li>
      <li>For symbols, elements SHOULD NOT be placed within a group</li>
      <li>For symbols, child elements should have Resizing set to Pin To Corner so they do not get shrunk/stretched</li>
      <li>See the <a href="https://github.com/kenmoore/sketch-relabel-button/raw/master/Relabel%20Button%20Guidelines.sketch">Relabel Button Guidelines</a> Sketch file for example buttons</li>
    </ul>

    <img class="m-t-6 m-b-5" src="~/assets/images/tooling/symbols-illustration.png">
    <h2>Symbol overrides</h2>
    <p> GitLab Elements takes advantage of nexted symbols and overrides to make updating components as easy as possible. We’ve built out symbols using visual cues that help identify when and where a component can be overriden. Common override scenarios include changing a component’s state or color.</p>

    <h3>State, color, and text overrides</h3>
    <p>There are multiple different types of overrides that can be applied to symbols. Symbols that do not utilize Relabel Button can utilize overrides to quickly switch between states, colors, text, and more.</p>
    <p>For an example of a symbol that uses multiple types of overrides, see our Label + Input symbol:</p>
    <p><img src="~/assets/images/tooling/symbol-overrides.png"></p>

    <h3>Building components using overrides</h3>
    <p><strong>Atoms</strong> are turned into <em>symbols</em> so that they can utilize overrides. <strong>Molecules</strong> are often made up of multiple <em>atom symbols</em>. <strong>Organisms</strong>, however, are not turned into symbols and are instead kept as <em>groups</em> containing symbols (atoms or molecules) and other layers. This allows designers to easily manipulate organisms for their designs, as well as find and use overrides for each symbol easily.</p>
    <p>In order to make applying overrides easy, follow these guidelines:</p>
    <p>↪<br>When an override is nested under another override, preface the label with  ↪. This will make it easy to visually see that the override will apply to the override above it. A common example of this is text within an input or the color of an icon.</p>
    <p>💡<br>When an override changes the state of the component, preface the label with 💡. This will make it easy to visually see that the override will apply a state change. A common example of this is when applying a hover or active state to a component.</p>
    <p>🎨<br>When an override changes the color of the component, preface the label with 🎨. This will make it easy to visually see that the override will apply a color change. A common example of this is changing the color of a background or icon.</p>
  </div>
</template>
