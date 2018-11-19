<template>
  <div>
    <nuxt-child />
    <div class="content banner">
      <div class="banner__header text-center">
        <h1 class="display-3 text-white">
          GitLab Design System
        </h1>
        <h3 class="text-light">
          Design guidelines and UI components for GitLab
        </h3>
      </div>
      <img
        src="../assets/images/cover.png"
        class="banner__image"
      />
      <div class="overlay"></div>
    </div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm-1 offset-sm-2">
          <img 
            src="../assets/images/principles/professional-productive.png" 
            srcset="../assets/images/principles/professional-productive@2x.png 2x" 
            class="float-left"
          />
        </div>
        <div class="col-sm-7">
          <h2 class="mt-0 m-b-2">Productive</h2>
          <p>GitLab is an application to support what people do, day in, day out. We need to respect the importance of their work, and avoid gimicky details.</p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-sm-1 offset-sm-2">
          <img 
            src="../assets/images/principles/minimal-efficient.png" 
            srcset="../assets/images/principles/minimal-efficient@2x.png 2x"
          />
        </div>
        <div class="col-sm-7">
          <h2 class="mt-0">Minimal</h2>
          <p>While work can get complicated, GitLab is about bringing a sharp focus, helping our customers know what matters now.</p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-sm-1 offset-sm-2">
          <img 
            src="../assets/images/principles/human-quirky.png" 
            srcset="../assets/images/principles/human-quirky@2x.png 2x"
          />
        </div>
        <div class="col-sm-7">
          <h2 class="mt-0">Human</h2>
          <p>We need to build empathy with our users, understand their state of mind, and connect with them on a human level. Quirkiness is part of our DNA; we should embrace it in the right moments and contexts.</p>
        </div>
      </div>
    </div>
    <div class="content contribute mt-5 pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 offset-sm-2">
            <img 
              src="../assets/images/contribute.png" 
              srcset="../assets/images/contribute@2x.png 2x" 
              class="mx-auto d-block"
            />
            <h2 class="text-center">Everyone can contribute</h2>
            <p>In an effort to continue improving our design system, we encourage any feedback and ideas! If you are interested in contributing, check out our <a href="/getting-started/contributing">guidelines</a> to get started. Have any questions? Open an issue on our <a href="https://gitlab.com/gitlab-org/design.gitlab.com/issues">Design System issue tracker</a>.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-sm-4 offset-sm-4">
        <div class="card-group">
          <a 
            href="https://gitlab.com/gitlab-org/design.gitlab.com" 
            target="_blank" 
            class="card text-center"
          >
            <div class="card-body">
              <img 
                src="../assets/images/resources/r-gitlab.png" 
                srcset="../assets/images/resources/r-gitlab@2x.png 2x"
                class="mb-4"
              />
              <h5 class="card-title">View repository</h5>
            </div>
          </a>
          <a 
            href="https://gitlab.com/gitlab-org/gitlab-design/blob/master/gitlab-pattern-library.sketch" 
            target="_blank" 
            class="card text-center"
          >
            <div class="card-body">
              <img 
                src="../assets/images/resources/r-sketch.png" 
                srcset="../assets/images/resources/r-sketch@2x.png 2x" 
                class="mb-4"
              />
              <h5 class="card-title">Download pattern library</h5>
            </div>
          </a>
          <a 
            href="https://about.gitlab.com/researchpanel/" 
            target="_blank" 
            class="card text-center"
          >
            <div class="card-body">
              <img 
                src="../assets/images/resources/r-research.png" 
                srcset="../assets/images/resources/r-research@2x.png 2x"
                class="mb-4"
              />
              <h5 class="card-title">Join our research panel</h5>
            </div>
          </a>
        </div>  
      </div>
    </div>
  </div>
</template>
