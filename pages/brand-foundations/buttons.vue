<template>
  <div class="content limited m-t-7 m-b-7">
    <div class="component md">
      <h1>Buttons</h1>
      <p>Buttons are an important facet to any design system. Buttons define a call to action that lead people somewhere related to the content it's contained in. There are common practices and data that prove certain types of buttons work better for conversion than others. Here are buttons and their classes that should be used throughout the marketing website:</p>
      <h2>Primary buttons</h2>
      <p>Primary buttons are solid and should be the default buttons used. Depending on the color scheme of the content, purple or orange solid buttons can be used depending on the background color of the content. These primary buttons should be used on white or lighter gray backgrounds or any background that has a high contrast with the button color. They should also be a <code>%a</code> tag so it can be linked elsewhere and for accessibility. Buttons should also be given the class <code>margin-top20</code> if the button lacks space between itself and the content above.</p>
      <div class="flex-container flex-column flex-start margin-bottom20"> <a href="/handbook/marketing/corporate-marketing/#primary-buttons" class="btn cta-btn orange margin-top20">Primary Button 1</a> <pre class="highlight shell">.btn.cta-btn.orange</pre> <p>OR</p> <a href="/handbook/marketing/corporate-marketing/#primary-buttons" class="btn cta-btn purple">Primary Button 2</a> <pre class="highlight shell">.btn.cta-btn.purple</pre> </div>
      <h2>Secondary buttons</h2>
      <p>There will be times when two buttons are needed. This will be in places such as <a href="https://about.gitlab.com/jobs/" target="_blank">our jobs page</a>, where we have a button to view opportunities and one to view our culture video. In this example, both buttons are solid, but one is considered the primary button (orange), and the other is the secondary button (white). The CSS class for the solid white button is <code>.btn.cta-btn.btn-white</code>.</p>
      <img 
        src="~/assets/images/brand/jobs-buttons-example.png" alt="primary and secondary button example" 
        width="600px"
      />
    </div>
  </div>
</template>
