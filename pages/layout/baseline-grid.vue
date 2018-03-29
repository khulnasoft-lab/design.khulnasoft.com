<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Baseline grid</h1>
      <p>Adhering to a baseline grid allows us to be more efficient by removing decision making while maintaining a consistent rhythm between components and typography.
      <h2>Components</h2>
      <p>Using a baseline grid of 8px allows flexibility when scaling and defining our <a href="/layout/measures">measures</a> without overloading the system with options. By using multiples of 8 to define dimensions, padding, and margins of components, we ensure every UI element aligns to the pixel grid.</p>
      <div class="baseline a-center m-b-6">
        <div class="w-13 h-3"></div>
        <div class="w-13 h-5 c-blue-background-300"></div>
        <div class="w-13 h-3"></div>
        <div class="w-13 h-6 c-blue-background-300"></div>
        <div class="w-13 h-3"></div>
        <div class="w-13 h-7 c-blue-background-300"></div>
        <div class="w-13 h-3"></div>
        <div class="w-13 h-3"></div>
      </div>
      <p>When text is used within a UI element, set the line-height to be consistent with the baseline grid and use padding to define the size of the component.</p>
      <div class="baseline a-center">
        <div class="w-13 h-3"></div>
        <div class="w-13 h-3 c-orange-background-200"></div>
        <div class="w-13 h-3 c-green-background-200"></div>
        <div class="w-13 h-5 c-blue-background-300 label">Text</div>
        <div class="w-13 h-3 c-green-background-200"></div>
        <div class="w-13 h-3 c-orange-background-200"></div>
        <div class="w-13 h-3"></div>
        <div class="w-13 h-3"></div>
      </div>
      <h2>Typography</h2>
      <p>All typography aligns to a 4px baseline grid. This allows for readible line heights at all sizes. See our <a href="/styles/typography">typography styles</a> for more information about how to use our type scale.</p>
      <h3>UI typography</h3>
      <div class="baseline--typography distributed">
        <h1>H1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <p>Paragraph</p>
        <span class="label">Label</span>
      </div>
      <h3>Markdown</h3>
      <div class="baseline--typography">
        <h1>H1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <p>Paragraph</p>
      </div>
      <h3>Compact markdown</h3>
      <div class="baseline--typography md compact">
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
