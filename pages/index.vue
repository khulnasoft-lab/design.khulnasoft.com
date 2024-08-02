<template>
  <div class="index typography">
    <nuxt-child />
    <div class="gl-grid gl-place-items-center gl-text-center gl-min-h-48">
      <div>
        <img
          alt=""
          src="../assets/images/pajamas_logo.svg"
          class="gl-h-auto gl-w-10 gl-inline-block gl-mb-3"
        />
        <h1 id="skipTarget" class="gl-heading-display gl-mb-3! brand-text-gradient">Pajamas</h1>
        <p class="gl-font-lg">Resources, components, and design guidelines behind GitLab</p>
      </div>
    </div>
    <div class="gl-pt-11 gl-pb-11">
      <div class="container">
        <div class="two-column two-column--alt">
          <div class="two-column-start">
            <img
              alt=""
              class="two-column-image"
              src="../assets/images/contribute.png"
              srcset="../assets/images/contribute@2x.png 2x"
            />
          </div>
          <div class="two-column-end">
            <h2>Everyone can contribute</h2>
            <p>
              GitLab is an
              <a
                target="_blank"
                href="https://about.gitlab.com/2016/07/20/gitlab-is-open-core-github-is-closed-source/"
                >open core</a
              >
              product and has over 4,000 community contributors. When everyone can contribute,
              consumers become contributors and we greatly increase the rate of human progress.
            </p>
            <p>
              To ensure that everyone can contribute to GitLab with confidence we provide everyone
              with the right resources and know-how. The Pajamas design system is the single source
              of truth for everything anyone needs to know about contributing to GitLab.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="gl-bg-gray-10 gl-border-gray-50 gl-border-solid gl-border-0 gl-border-t-1 gl-border-b-1 gl-pt-9 gl-pb-9"
    >
      <div class="container">
        <div class="two-column">
          <div class="two-column-start">
            <img alt="" class="two-column-image" src="../assets/images/content.svg" />
          </div>
          <div class="two-column-end">
            <h2>Everything you need</h2>
            <p>
              Pajamas is here to make it as comfortable as possible for anyone to contribute towards
              GitLab. You will find information such as our principles, components, usage
              guidelines, branding, research methodologies, and more!
            </p>
            <p>Start by looking into the component documentation, including live examples.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="gl-pt-11 gl-pb-11">
      <div class="container">
        <div class="two-column two-column--alt">
          <div class="two-column-start">
            <img
              alt=""
              class="two-column-image two-column-image--small"
              src="../assets/images/pajamas_stars.svg"
            />
          </div>
          <div class="two-column-end">
            <h2>Contributing to the design system</h2>
            <p>
              We encourage any feedback and ideas towards the design system itself as well! If you
              are interested in contributing, check out our
              <a href="/get-started/contributing">guidelines</a> to get started. Have any questions?
              Open an issue on our
              <a
                target="_blank"
                href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues"
                >Design System issue tracker</a
              >. Otherwise, be sure to check out the resources below!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="gl-pt-9 gl-pb-9">
      <div class="container">
        <div class="row gl-mt-9">
          <div class="col col-33">
            <a
              href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues"
              target="_blank"
              class="gl-text-center"
            >
              <img
                width="48"
                height="48"
                src="../assets/images/resources/r-solid.png"
                class="gl-mx-auto gl-display-block"
                alt=""
              />
              <span class="gl-display-block gl-p-3"> View the issue tracker </span>
            </a>
          </div>
          <div class="col col-33">
            <a
              href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com"
              target="_blank"
              class="gl-text-center"
            >
              <img
                width="48"
                height="48"
                src="../assets/images/resources/r-outline.png"
                class="gl-mx-auto gl-display-block"
                alt=""
              />
              <span class="gl-display-block gl-p-3"> Explore the repository </span>
            </a>
          </div>
          <div class="col col-33">
            <a
              href="https://www.figma.com/community/file/781156790581391771/"
              target="_blank"
              class="gl-text-center"
            >
              <img
                width="48"
                height="48"
                src="../assets/images/resources/r-figma.png"
                class="gl-mx-auto gl-display-block"
                alt=""
              />
              <span class="gl-display-block gl-p-3"> Duplicate our Figma UI Kit </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
