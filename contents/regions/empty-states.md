---
name: Empty States
stories:
  - regions-empty-state--default
related:
  - banner
  - button
---

## Goals

The primary goals of an empty state region should be to:

- Increase feature adoption.
- Improve learnability and feature discovery.
- Improve usability.

## Solutions

While we do provide a [fallback solution](#fallback) for empty state regions, *first* think about how to incorporate unique features in an empty state to achieve the above goals better than we can if we simply used our fallback solution. For example:

- In an epic with 0 related issues, *suggest* a few existing issues through keyword matching or other intelligent methods that could be added with a simple click. In this case, it could make it easier to add related issues without leaving the epic. This may `Increase feature adoption` more than simply telling users that no content exists. 

This is just one example. Each case will be unique and should be thought of as a problem to solve while keeping the [3 main goals in mind](#goals). 

## Analytics & testing

All empty state solutions should include usage analytics so you and your team can measure and improve the empty state solution you've created over time. It‘s also important to think about this as a *solution*, much like any other solution being developed in your stage group, so continue to follow the [solution validation](https://about.gitlab.com/handbook/engineering/ux/ux-research-training/solution-validation-and-methods/) process.

## Use cases

### Blank content

A `Blank content` empty state serves as a placeholder when no content exists on a page. It should contain a call to action that triggers the creation of content. 

#### Specifications

- Appears when no content exists within a configured feature.
- Contains a method for creating content.

#### Content

The title phrase should be a call to action that starts with an active verb. No period at the end of the phrase.

Examples:

- `Monitor vulnerabilities in your project`
- `Get started with monitoring`

#### Considerations

##### Archived content

It’s ok to hide most, if not all, of the UI that would be displayed if there was some content. This helps emphasize the next action that a user should perform. But not all Blank content empty states are the same. Some don’t have any content because all of it was archived. If there’s a benefit for users to be able to see that archived content, the regular UI should be shown instead of the empty state.

##### Technical implementation

Sometimes, content is lazy loaded, which means it’s impossible for the system to know if an empty state should be used until a user clicks on a certain element that would lazy load some content that isn’t initially shown. Be sure to check with engineers how interactions on a page in question work before you decide to hide the UI in favor of showing an empty state.

### Configuration required

A `Configuration required` empty state serves as a placeholder for features that need to be configured first, before having the ability to create content.

#### Specifications

- Contains a primary action for configuring a feature.
- Contains a secondary action for inviting a member to configure a feature. The secondary action should read as `Invite member to configure`, which should trigger the invite modal.

Use the following implementation to trigger the invite modal:
- [Initialize from a Vue component](http://gitlab.com/gitlab-org/gitlab/blob/81fc02642a748484af91e45abda84c24a54b7ac9/app/assets/javascripts/vue_shared/components/markdown/toolbar.vue#L70-70).
- [Initialize as a separate button/link using haml](https://gitlab.com/gitlab-org/gitlab/blob/81fc02642a748484af91e45abda84c24a54b7ac9/app/views/projects/_invite_members_empty_project.html.haml#L6-13).

#### Content

The title phrase should be a call to action that starts with an active verb. No period at the end of the phrase.

Examples:

- `Monitor vulnerabilities in your project`
- `Get started with monitoring`

### Higher tier feature

A `Higher tier feature` empty state serves as a placeholder when a certain feature isn‘t available under the current tier. [The Growth team](https://about.gitlab.com/handbook/product/categories/#growth-section) is the DRI for `Higher tier feature` empty state regions and should be involved in implementation of solutions for this type of empty state region.

#### Specifications

- Specifications and actions should be determined by [the Growth team](https://about.gitlab.com/handbook/product/categories/#growth-section). If implementing a solution for this empty state region, collaborate with the Growth Product Designer and Product Manager. 

<todo>Add specifications for Higher Tier empty state region.</todo>

<todo>Add content for Higher Tier empty state region.</todo>

### Empty search results

An `Empty search results` empty state serves as a placeholder when there are no search results after doing a search or filtering results.

#### Specifications

- Appears when no results are found after a search or filter.
- Should describe that a search or filter came back with no results.
- Does not contain a CTA.

#### Content

- When using the [filter component](/components/filter), the text should always be exactly:
  - For the title, `No results found`.
  - For the text underneath, `Edit your search filter and try again`.
- When using the [search component](/components/search), the text should always be exactly:
  - For the title, `No results found`.
  - For the text underneath, `Edit your search and try again`.

## Fallback

If you're unable to come up with a solution to achieve one of the [3 goals of an empty state region](#goals), you can use the empty state fallback. Using the fallback should still achieve one of the three goals and should include a way to track conversion. 

### Example

<story-viewer story-name="regions-empty-state--default"></story-viewer>

## Implementation

Create an issue and [follow the Empty state issue template](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Empty%20state).

## References

- [Invited users are more likely to activate new stages](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/2526#note_691364062)
