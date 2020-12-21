---
name: Color picker
figma: 
docs: 
vueComponents:
  - GlFormGroup
  - GlFormInput
  - GlFormInputGroup
  - GlLink
related:
  - form
---

Color picker allows users to choose a custom color option by clicking on the swatch color or by manually typing the HEX code into the input field. Suggested options are also given to provide accesible color options. 

## Usage

The color picker comes in two parts: the input field and the color swatch preview. The input field must be pre-populated with #428BCA, and the color swatch preview opens a popover that allows a user to specify with RGB, HSL, or HEX values. 

The user should be able to input the color by either typing it in its HEX value or choosing a color from the color picker popover. The user must never be forced to use only one of the two input methods.

When using the input field, users are able to only enter HEX formats. For example, the user can type `#000` or `#000000`. The color picker will translate the format.

Todo: Add live component block with code example (inputs of different widths)

## Design specification

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

[View design in Pajamas UI Kit →]()

