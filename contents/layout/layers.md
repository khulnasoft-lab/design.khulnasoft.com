---
name: Layers
---

Layers addresses dimensional hierarchy and content relationships — not just top-down or scale, but also depth (think z-index) and dynamic changes based on state or overflow. Visual styles and affordance that indicate depth, content boundaries, and state are also encompassed within layers.

## Shadows

### 4px - sm shadow

![sm shadow](/img/layers/sm-shadow.png)

#### Definition

Surfaces that need an indication they can be manually interacted with.

#### Components

* [Card](/components/card)
* *Components with shadow boundaries*

#### Attributes

* Passive, defines surface bounds when on a white backgrounds.
* Indicates surface can be interacted with.

#### Style

box-shadow:<br>0px 2px 4px rgba(0, 0, 0, 0.08),<br>0px 0px 1px rgba(0, 0, 0, 0.24);

### 8px - md shadow

![md shadow](/img/layers/md-shadow.png)

#### Definition

Surfaces that need boundary definition and appear on hover.

#### Components

* [Popover](/components/popover)
* Flyout menu
* *Stacked elevation components*

#### Attributes

* Surfaces that appear on hover.
* Components layered above other components. Stacked layers and static components that have content that scrolls beneath.

#### Style

box-shadow:<br>0px 0px 2px rgba(0, 0, 0, 0.16),<br>0px 2px 8px rgba(0, 0, 0, 0.16);

### 12px - lg shadow

![lg shadow](/img/layers/lg-shadow.png)

#### Definition

Surfaces with elevation that appear as a result of a user/system action.

#### Components

* [Toast](/components/toast)
* [Card](/components/card) on drag

#### Attributes

* Components in motion.

#### Style

box-shadow:<br>0px 0px 4px rgba(0, 0, 0, 0.16),<br>0px 4px 12px rgba(0, 0, 0, 0.16);

### 16px - xl shadow

![xl shadow](/img/layers/xl-shadow.png)

#### Definition

Large surfaces with elevation that appear in our UI.

#### Components

* [Toast](/components/toast)
* [Modal](/components/modal)
* [Drawer](/components/drawer)

#### Attributes

* Large components.

#### Style

box-shadow:<br>0px 0px 2px rgba(0, 0, 0, 0.24),<br>0px 4px 16px rgba(0, 0, 0, 0.24);

## Accessibility
