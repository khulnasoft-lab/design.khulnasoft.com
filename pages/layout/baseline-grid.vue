<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Baseline grid</h1>
      <p>Adhering to a baseline grid allows us to be more efficient by removing decision making while maintaining a consistent rhythm between components. Using a baseline grid of 8px allows flexibility when scaling and defining our <a href="/layout/measures">measures</a> without overloading the system with options.</p>
      <h2>Components</h2>
      <p>By using multiples of 8 to define dimensions, padding, and margins of components, we ensure every UI element aligns to the pixel grid.</p>
      <h2>Typography</h2>
      <h3>UI typography</h3>
      <p>When text is used within a UI element, set the line-height to be consistent with the baseline grid and use padding to define the size of the component. See our <a href="/styles/typography">typography styles</a> for the more information.</p>
      <p class="todo">Todo: Add baseline grid example for UI typography</p>
      <h3>Markdown</h3>
      <div class="baseline">
        <h1>H1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <p>Paragraph</p>
      </div>
      <h3>Compact markdown</h3>
      <div class="baseline md compact">
        <h1>H1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <p>Paragraph</p>
      </div>
    </div>
  </div>
</template>
