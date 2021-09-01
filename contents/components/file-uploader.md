---
name: File uploader
description: File uploaders are used to upload files from your computer or device. The accepted file types will be determined by the context of the file uploader.
docs: in-progress
---

## Examples

[View in Pajamas UI Kit →](https://www.figma.com/file/qEddyqCrI7kPSBjGmwkZzQ/Component-library?node-id=8000%3A0)

## Structure

<figure class="figure" role="figure" aria-label="File uploader structure">
  <img class="figure-img" src="/img/file-uploader-structure.svg" alt="Numbered diagram of a file uploader structure" role="img" />
</figure>

1. **Title**: Title giving context to the file uploader.
1. **Button**: Button that triggers the file upload process.
1. **File name**: Name of the file once uploaded to the frontend.
1. **Removal**: Icon button that removes the file uploaded to the frontend.
1. **Help text**: Help text describing the upload process or requirements.
1. **Submit**: Once uploaded to the frontend, submits the file to the system.

## Guidelines

### When to use

- Users need to upload one or more files to the system.

### Behavior

- Selecting a file uploads the file to the frontend.
- Filename appears once a file is uploaded to the frontend.
- Submit button appears once a file is uploaded to the frontend.

### Accessibility

Todo: Add accessibility specs
