<template>
  <div>
    <nuxt-child />
    <div class="content banner">
      <div class="banner__header text-center">
        <h1 class="banner__header--title">
          GitLab Design System
        </h1>
        <h5 class="banner__header--description">Design guidelines and UI components for GitLab CE/EE</h5>
      </div>
      <div class="overlay"></div>
    </div>
    <div class="content limited">
      <div class="md principles m-t-9 m-b-7">
        <div class="principle">
          <h2>Professional and productive</h2>
          <p>GitLab is a tool to support what people do, day in, day out. We need to respect the importance of their work, and avoid gimicky details.</p>
        </div>
        <div class="principle">
          <h2>Minimal and efficient</h2>
          <p>While work can get complicated, GitLab is about bringing a sharp focus, helping our customers know what matters now.</p>
        </div>
        <div class="principle">
          <h2>Immediately recognizable</h2>
          <p>When you look at any screen, you should know immediately that it is GitLab. Our personality is strong and consistent across product and marketing experiences.</p>
        </div>
        <div class="principle">
          <h2>Human and quirky</h2>
          <p>We need to build empathy with our users, understand their state of mind, and connect with them on a human level. Quirkiness is part of our DNA; we should embrace it in the right moments and contexts.</p>
        </div>
      </div>
    </div>
    <div class="content limited contributing-box md">
      <div class="contributing-box__content">
        <div class="p-t-8 p-r-8 p-b-4 p-l-8">
        <h1>Everyone can contribute</h1>
        <p>We encourage all feedback and ideas in order to continue improving our design system. If you are intersted in contributing, check out our <a href="">guidelines</a> to get started. Have any questions? Open an issue on our <a href="https://gitlab.com/gitlab-org/design.gitlab.com/issues">GitLab issue tracker</a>.</p></div>
      </div>
      <div class="image">
      </div>
    </div>
  </div>
</template>
