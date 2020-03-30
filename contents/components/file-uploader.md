---
name: File uploader
status: in-progress
related:
  - forms
  - modals
---

File uploaders are used to upload files from your computer or device. The accepted file types will be determined by the context of the file uploader.

## Usage

A user should know what action is needed to upload the file and for what purpose. For example, the action “Upload avatar” paired with a “Choose file…” button.

After the upload begins, use the [spinner component](/components/spinner) and live text indicating the percentage complete. For example, “Uploading image - 87%.”

### Types

| Component type | Purpose |
| --- | --- |
| Single file uploader | A single file uploader uploads a single file. An example of a single file uploader is uploading an avatar for your profile, group, or project.  |
| Multiple file uploader | A multiple file uploader can upload multiple files in a single upload. An example of a multiple file uploader is uploading multiple designs to the design tab or uploading multiple files to a directory. |

### Dos and Dont’s - Single file uploader

| Do | Don’t |
| --- | --- |
| Show a "Choose file..." button to click to select a file to upload. | Exclude a description on how to upload a file |
| After a file has been selected and is ready for upload, show an "Upload" (or similar verbiage) and "Cancel" button to start or cancel the upload of the selected file. |  |
| Include help text on maximum file size allowed (if any). |  |
|  |  |
|  |  |

### Dos and Dont’s - Multiple file uploader

| Do | Don’t |
| --- | --- |
| Create a dashed border around the file uploader to indicate the upload/dropzone area. | Exclude a description on how to upload a file. |
| Have the ability to drag and drop files on the dropzone to upload. |  |
| Have the ability to click the dropzone to select files to upload from your computer. |  |
| Include a description on how to upload files within the dropzone. |  |
| Include help text on maximum file size allowed or maximum number of files allowed to upload (if any). |  |

## Demo

Todo: Add live component block with code example

## Specifications

### Design

<!--
  DESIGN SPECIFICATIONS, add a link here to the component-specific sketch-measure preview.
  All design specifications should live in the design repo under 'hosted/design-gitlab-specs/COMPONENTNAME-spec-previews'
  *** If there are max-width, min-width, or other specs that should be known about this component,
  please add it in Sketch Measure via a note.
  This link must ALWAYS be included.
-->

Color, spacing, dimension, and layout specific information pertaining to this component can be viewed using the following link:

TODO: Add design specs link

### Accessibility

TODO: Add accessibility specs

[Figma preview for INSERT NAME OF COMPONENT HERE](/)

## Resources

*   [A related resource used when writing this documentation](/) -->
