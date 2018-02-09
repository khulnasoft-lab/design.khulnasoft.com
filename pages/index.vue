<template>
  <div>
    <nuxt-child />
    <div class="content banner">
      <div class="banner__header text-center">
        <h1 class="banner__header--title f-display f-inverted">
          GitLab Design System
        </h1>
        <h3 class="banner__header--description f-inverted">Design guidelines and UI components for GitLab</h3>
      </div>
      <div class="overlay"></div>
    </div>
    <div class="content limited">
      <div class="md principles m-t-10 m-b-10">
        <div class="principle m-b-7">
          <img src="../assets/images/principles/professional-productive.png" srcset="../assets/images/principles/professional-productive@2x.png 2x" class="a-center">
          <div class="principle__content m-l-5">
            <h4>Professional and productive</h4>
            <p>GitLab is a tool to support what people do, day in, day out. We need to respect the importance of their work, and avoid gimicky details.</p>
          </div>
        </div>
        <div class="principle m-b-7">
          <img src="../assets/images/principles/minimal-efficient.png" srcset="../assets/images/principles/minimal-efficient@2x.png 2x">
          <div class="principle__content m-l-5">
            <h4>Minimal and efficient</h4>
            <p>While work can get complicated, GitLab is about bringing a sharp focus, helping our customers know what matters now.</p>
          </div>
        </div>
        <div class="principle">
          <img src="../assets/images/principles/human-quirky.png" srcset="../assets/images/principles/human-quirky@2x.png 2x">
          <div class="principle__content m-l-5">
            <h4>Human and quirky</h4>
            <p>We need to build empathy with our users, understand their state of mind, and connect with them on a human level. Quirkiness is part of our DNA; we should embrace it in the right moments and contexts.</p>
          </div>
        </div>
        <div class="principle">
          <img src="../assets/images/principles/immediately-recognize.png" srcset="../assets/images/principles/immediately-recognize@2x.png 2x">
          <div class="principle__content m-l-5">
            <h4>Immediately recognizable</h4>
            <p>When you look at any screen, you should know immediately that it is GitLab. Our personality is strong and consistent across product and marketing experiences.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content contribute p-b-8">
      <div class="content limited md contributing-box__content">
        <img src="../assets/images/contribute.png" srcset="../assets/images/contribute@2x.png 2x" class="a-center d-block m-t-8 m-b-5">
        <h3 class="text-center">Everyone can contribute</h3>
        <p class="a-center a-text">In an effort to continue improving our design system, we encourage all feedback and ideas! If you are intersted in contributing, check out our <a href="/getting-started/contributing">guidelines</a> to get started. Have any questions? Open an issue on our <a href="https://gitlab.com/gitlab-org/design.gitlab.com/issues">GitLab issue tracker</a>.
        </p>
      </div>
    </div>
    <div class="content limited p-t-10 p-b-10">
      <div class="resources d-flex m-t-6">
        <a href="https://gitlab.com/gitlab-org/design.gitlab.com" target="_blank" class="card text-center">
          <img src="../assets/images/resources/r-gitlab.png" srcset="../assets/images/resources/r-gitlab@2x.png 2x" class="a-center d-block m-b-3">
          <h5>View repository</h5>
        </a>
        <a href="https://gitlab.com/gitlab-org/gitlab-design/blob/master/production/resources/gitlab-elements.sketch" target="_blank" class="card text-center m-l-5">
          <img src="../assets/images/resources/r-sketch.png" srcset="../assets/images/resources/r-sketch@2x.png 2x" class="a-center d-block m-b-3">
          <h5>Download pattern library</h5>
        </a>
        <a href="https://about.gitlab.com/researchpanel/" target="_blank" class="card text-center m-l-5">
          <img src="../assets/images/resources/r-research.png" srcset="../assets/images/resources/r-research@2x.png 2x" class="a-center d-block m-b-3">
          <h5>Join our research panel</h5>
        </a>
      </div>
    </div>
  </div>
</template>
