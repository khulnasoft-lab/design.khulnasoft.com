# Pajamas Design System

Resources, components, and design guidelines behind GitLab. See [design.GitLab.com](https://design.gitlab.com).
Read about the [Component Lifecycle](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/blob/master/doc/component-lifecycle.md).

## Prerequisites

Before you move on, make sure you have [Node](https://nodejs.org/en/) 12.x and [Yarn](https://yarnpkg.com/) 1.10 or newer installed.

### Start using Git on the command line

- [Start using Git](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html)
- [Command Line basic commands](https://docs.gitlab.com/ee/gitlab-basics/command-line-commands.html)
- [Technical Tutorials for Product Designers](https://www.youtube.com/playlist?list=PL05JrBw4t0Kra6RseLWXFIXtu9UPzjzbT) on Unfiltered

## Quick start

1. Clone the project with `git clone git@gitlab.com:gitlab-org/gitlab-services/design.gitlab.com.git`
1. Install [yarn](https://yarnpkg.com/en/docs/install)
1. Run `yarn install`
1. Run `yarn start` to start build & watch changes
1. Open http://localhost:2018

## Linting

We control this repositories code quality with automatic linting tools like `eslint` and `prettier`.

If you change something in the code, you can run `yarn test` to see if your changes are up to code.

A lot of failures are auto-fixable, so simply run `yarn run lint:fix` to fix errors automatically.

## Conventional commits

We use conventional commits specifications to write meaningful commit messages that are used as part of our [semantic release](https://gitlab.com/gitlab-org/gitlab-ui/wikis/Frequently-asked-questions#2-why-are-we-using-semantic-release) process.

Please read the official specifications for more details: https://www.conventionalcommits.org/.

Each commit message consists of a **header**, a **body**, and a **footer**. The header has a special
format that includes a **type**, a **scope**, and a **subject**:

```plaintext
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The header is mandatory and the scope of the header is optional.
Each line in the commit message should be no longer than 100 characters.

When opening an MR, make sure you do at least one of the following:

- Include at least one commit message that complies with the conventional commit standards.
- Ensure the MR's title itself complies with the conventional commit standards.

Following these conventions will result in a properly versioned package and clear [changelogs](./CHANGELOG.md) for every version.

### When should my MR's title follow these conventions?

It's always a good idea to follow the conventions for your MR's title as well as for commit messages. This way, if your MR is squashed
upon merge, the maintainer will be able to use its title as the final commit message, which will result in a properly formatted history.

### Is it okay that all my commits don't follow the conventions in a single MR?

It's recommended that all commits follow the conventions because we refer to those commits when generating changelogs.

## What types can I use for my commit messages?

We use the same types as [Angular's commit guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type):

- **feat:** A new feature (adding a new component, providing new variants for an existing component, etc.).
- **fix:** A bug fix (correcting a styling issue, addressing a bug in a component's API, etc.).
When updating non-dev dependencies, mark your changes with the `fix:` type.
- **docs:** Documentation only changes.
- **style:** Changes that do not affect the meaning of the code
(white-space, formatting, missing semi-colons, etc). _Not_ to be used for CSS changes as those are
meaningful changes, consider using `feat:` of `fix:` instead.
- **refactor:** A code change that neither fixes a bug nor adds a feature.
- **perf:** A code change that improves performance.
- **test:** Adding missing tests or correcting existing tests.
- **build:** Changes that affect the build system (changing WebPack's or Rollup's config for example).
- **ci:** Changes to our CI configuration files and scripts
(changing `.gitlab-ci.yml`, adding or changing Danger plugins, etc.).
- **chore:** Other changes that don't modify source or test files. Use this type when adding or
updating dev dependencies.
- **revert:** Reverts a previous commit.

Each commit type can have an optional scope to specify the place of the commit change: `type(scope):`.
It is up to you to add or omit a commit's scope. When a commit affects a specific component, use the
component's PascalCase name as the commit's scope. For example:

```
docs(GlButton): add secondary variant demo
```

> Note that only `feat:` and `fix:` types trigger a new release
> If you're introducing a breaking change, the message body should start with [`BREAKING CHANGE:`](https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-description-and-breaking-change-footer),
> this will trigger a major version bump (e.g. `v1.2.3` -> `v2.0.0`)

## Creating a Figma component

To create a new Figma component, [create an issue with the Figma component template](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/issues/new?issuable_template=Figma%20component) and follow the steps in the template. 

## Writing component documentation

When starting from scratch:
1. Copy the contents from `pages/components/template.md`
1. Paste the contents in an existing placeholder file in `contents/components/` or create a new file and call it `componentname.md`
1. Edit and write your documentation

## Reviewing

Each merge request for this repository will generate a [review app](https://docs.gitlab.com/ee/ci/review_apps/). Review apps create a new environment (dynamically) for each one of your branches. A Review App is then visible as a link when you visit the merge request relevant to the branch. That way, you are able to see live all changes introduced by the merge request changes.

## Contributing

GitLab is an open source project and we are very happy to accept community
contributions. Please refer to [CONTRIBUTING.md](/CONTRIBUTING.md) for details.

## Why is the design system called Pajamas?

Pajamas is a nod to our fully remote culture. In addition, they are comfortable, reliable, and consistent! Read more about how we landed on the name Pajamas in the [original issue](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/issues/138).
