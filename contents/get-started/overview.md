---
name: Get started
---

Welcome to Pajamas! We're excited to help you get started using the design system. This page is a guide to all the facets of Pajamas, including our usage guidelines, our Vue components, and more.

## Pajamas

The [Pajamas design system project](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com) is maintained by GitLab product designers and engineers. The project contains [issues](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues) related to our ongoing roadmap, including improvements to our documentation and [Figma UI Kit](https://www.figma.com/@gitlab).

<div class="app-styles">
  <gl-button href="https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library" target="_blank">View Figma library<gl-icon name="external-link" class="gl-ml-2" /></gl-button>
</div>

### Goals

- Jumpstart design work by using the UI Kit and existing working files.
- Enable frequent, stable, and consistent contributions.
- Make GitLab’s design open, transparent, and open source.
- Facilitate design–development communication.

The project is primarily used by GitLab’s UX Design department to host design files and hand them off for implementation. To learn about the best practices to manage the project, including the repository’s organization, check out the [contribution guidelines](https://gitlab.com/gitlab-org/gitlab-design/blob/master/CONTRIBUTING.md). For more information about the UX department as a whole, you can find useful information in [our handbook page](https://about.gitlab.com/handbook/engineering/ux/).

## GitLab UI

GitLab UI are the Vue components we use in the product, which is driven by Pajamas documentation. We track issues and changes to the components in [the GitLab UI project](https://gitlab.com/gitlab-org/gitlab-ui). There, you can see ongoing efforts and upcoming features to our components. If you'd like to view live examples of our components, you can either navigate to a component here in Pajamas and click the `Implementation` tab, or you can view them in Storybook.

<div class="app-styles">
  <gl-button href="https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/base-accordion--default" target="_blank">View in Storybook<gl-icon name="external-link" class="gl-ml-2" /></gl-button>
</div>

You can also find information about our components right here in Pajamas! Just navigate to a component and view the `Implementation` tab, where you'll find useful information like component properties.

### Usage

Since our components are open source, you can use them in your own project! All you have to do is install the npm package:

<code class="gl-p-4 gl-mb-2 w-100">npm i @gitlab/ui</code>

Once installed, import the components in your `.vue` file:

<code class="gl-p-4 gl-mb-2 w-100">import { GlButton } from "@gitlab/ui";</code>

If have questions, would like to contribute, or suggest improvements, feel free to [open an issue](https://gitlab.com/gitlab-org/gitlab-ui/-/issues?sort=priority&state=opened).

## GitLab SVGs

All GitLab SVG assets (icons and illustrations) are managed in the [GitLab SVG](https://gitlab.com/gitlab-org/gitlab-svgs) project. This project automates creating an SVG sprite out of icons and optimizing SVG based illustrations. We built an online viewer of our GitLab SVGs that allows exploring and searching our icon library.

<div class="app-styles">
  <gl-button href="http://gitlab-org.gitlab.io/gitlab-svgs/" target="_blank">View GitLab SVGs<gl-icon name="external-link" class="gl-ml-2" /></gl-button>
</div>

## GitLab First Look

Here at GitLab, we regularly conduct user research to improve our product. You can help shape the future of GitLab. We want your feedback on how we can continue to improve GitLab. By joining GitLab First Look, you’ll be the first to see new features and your thoughts will drive product improvements for a better user experience.

[Join or learn more about GitLab First Look](https://about.gitlab.com/community/gitlab-first-look/index.html)
