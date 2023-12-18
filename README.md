# Tailwind 3 SPFX Project

## Summary

This project showcases an integration of Tailwind CSS into an SPFx project. It offers a sample implementation, facilitating straightforward setup and utilization of Tailwind CSS for enhanced styling and design in SharePoint Framework projects.

Here is an illustration of the styling outcome achieved with Tailwind, along with the corresponding code.

![Result](assets/example.png)
![Code](assets/code.png)

To setup the project, proceed with the following steps:

1. Execute the following commands:
   - `npm i -D react-tailwindcss postcss autoprefixer gulp-postcss`
   - `npx react-tailwindcss init`
2. Add the following files:
   - /assets/tailwind.css
   - postcss.config.js
   - tailwind.config.js
3. Update the following files:
   - gulpfile.js
      - Check the changes in this project
   - entry/main component file (e.g. /src/webparts/HelloTailwind/HelloTailwindWebPart.ts)
      - Add `import '../../../assets/dist/tailwind.css`

## Compatibility

| :warning: Important          |
|:---------------------------|
| Every SPFx version is optimally compatible with specific versions of Node.js. In order to be able to build this sample, you need to ensure that the version of Node on your workstation matches one of the versions listed in this section. This sample will not work on a different version of Node.|
|Refer to <https://aka.ms/spfx-matrix> for more information on SPFx compatibility.   |

This sample is optimally compatible with the following environment configuration:

![SPFx 1.18.0](https://img.shields.io/badge/SPFx-1.18.0-green.svg)
![Node.js v18.18](https://img.shields.io/badge/Node.js-v18.18+-green.svg)
![Compatible with SharePoint Online](https://img.shields.io/badge/SharePoint%20Online-Compatible-green.svg)
![Local Workbench Unsupported](https://img.shields.io/badge/Local%20Workbench-Unsupported-red.svg "Local workbench is no longer available as of SPFx 1.13 and above")
![Hosted Workbench Compatible](https://img.shields.io/badge/Hosted%20Workbench-Compatible-green.svg)
![Compatible with Remote Containers](https://img.shields.io/badge/Remote%20Containers-Compatible-green.svg)

## Applies to

- [SharePoint Framework](https://learn.microsoft.com/sharepoint/dev/spfx/sharepoint-framework-overview)
- [Microsoft 365 tenant](https://learn.microsoft.com/sharepoint/dev/spfx/set-up-your-development-environment)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](https://aka.ms/m365devprogram)

## Author

- [Nnorom Christian](https://github.com/nnoromiv)

## Minimal path to awesome

- Clone this repository (or [download this solution as a .ZIP file](https://pnp.github.io/download-partial/?url=https://github.com/pnp/sp-dev-fx-webparts/tree/main/samples/react-tailwindcss3) then unzip it)
- From your command line, change your current directory to the directory containing this sample (`react-tailwindcss3`, located under `samples`)
- in the command line run:
  - `npm install`
  - `gulp serve`

> This sample can also be opened with [VS Code Remote Development](https://code.visualstudio.com/docs/remote/remote-overview). Visit <https://aka.ms/spfx-devcontainer> for further instructions.

## Help

We do not support samples, but this community is always willing to help, and we want to improve these samples. We use GitHub to track issues, which makes it easy for  community members to volunteer their time and help resolve issues.

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**