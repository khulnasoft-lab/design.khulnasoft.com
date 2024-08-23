<template>
  <div class="index typography">
    <nuxt-child />
    <section aria-labelledby="skipTarget" class="homepage-hero gl-m-5">
      <div class="container gl-grid gl-place-items-center gl-text-center gl-min-h-48">
        <div>
          <img src="../assets/pajamas-logo.svg" alt="" width="56" height="96" />
          <h1 id="skipTarget" class="gl-my-3! gl-heading-display homepage-hero-heading">
            Pajamas Design System
          </h1>
          <p class="gl-font-lg">Resources, components, and design guidelines behind GitLab</p>
        </div>
      </div>
    </section>

    <section aria-label="Content" class="gl-my-8">
      <div class="container">
        <ul class="gl-grid lg:gl-grid-cols-2 gl-gap-7 gl-p-0 gl-list-none">
          <li>
            <h2>Brand</h2>
            <p>
              The creative expression of our mission, vision, and values — the design language for
              GitLab. <a href="/brand/overview">Overview →</a>
            </p>
          </li>
          <li>
            <h2>Product</h2>
            <p>
              Foundations, components, patterns and guidelines for building the UI of GitLab.
              <a href="/get-started/navigating-pajamas">Get started →</a>
            </p>
          </li>
          <li>
            <h2>Usability and interaction</h2>
            <p>
              Methodologies, decisions, processes and concepts that frame the user experience.
              <a href="#">Some link →</a>
            </p>
          </li>
          <li>
            <h2>Content</h2>
            <p>
              Copy and messaging are meaningful aspects of the experience and conversation with our
              users. <a href="#">Some link →</a>
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section aria-labelledby="contribute" class="gl-my-8">
      <div class="container">
        <div
          class="gl-p-5 gl-bg-subtle gl-border-1 gl-border-solid gl-border-default gl-rounded-lg sm:-gl-mx-5"
        >
          <h2 id="contribute" class="gl-heading-4">Contribute</h2>
          <p class="gl-mb-5">
            It is GitLab’s mission to enable everyone to contribute to and co-create the software
            that powers our world. This includes contributions to the brand, product design, UX, and
            content, and more. Here are a few ways to get started.
          </p>
          <ul class="gl-grid md:gl-grid-cols-3 gl-gap-3 gl-list-none gl-m-0 gl-p-0">
            <li>
              <a
                href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues"
                target="_blank"
                class="gl-block gl-p-3 gl-text-center"
              >
                <img
                  src="../assets/images/resources/issues.svg"
                  class="gl-mx-auto gl-block"
                  alt=""
                />
                <span class="gl-block gl-mt-3">Issue tracker</span>
              </a>
            </li>
            <li>
              <a
                href="https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com"
                target="_blank"
                class="gl-block gl-p-3 gl-text-center"
              >
                <img src="../assets/images/resources/code.svg" class="gl-mx-auto gl-block" alt="" />
                <span class="gl-block gl-mt-3">Repository</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.figma.com/community/file/781156790581391771/"
                target="_blank"
                class="gl-block gl-p-3 gl-text-center"
              >
                <img
                  src="../assets/images/resources/figma.svg"
                  class="gl-mx-auto gl-block"
                  alt=""
                />
                <span class="gl-block gl-mt-3">Pajamas UI Kit (Figma)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
