import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/lib/data/team'
// import { InternalLink, ExternalLink } from "~/components/text/link";
// import { P } from "~/components/text/paragraph";
// import Image from '~/components/image'
import { Code } from '~/components/text/code'
// import {
//   TerminalInput,
//   TerminalOutput
// } from "~/components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'SDK API Reference',
  date: '30 Aug 2017',
  authors: [expoteam],
})(markdown(components)`


The Expo SDK provides access to system functionality such as contacts, camera, and social login. It is provided by the npm package [expo](https://www.npmjs.com/package/expo). Install it by running \`npm install --save expo\` in the root directory of the project. Then you can import modules from it in your JavaScript code as follows:

${<Code>{`import { Contacts } from 'expo';`}</Code>}

You can also import all Expo SDK modules:

${<Code>{`import Expo from 'expo';`}</Code>}

This allows you to write [\`Expo.Contacts.getContactsAsync()\`](contacts#expocontactsgetcontactsasync "Expo.Contacts.getContactsAsync"), for example.

## SDK Version

Each month there is a new Expo SDK release that typically updates to the
latest version of React Native and includes a variety of bugfixes,
features and improvements to the Expo APIs. It's often useful to know
what version of React Native your Expo project is running on, so the
following table maps Expo SDK versions to their included React Native
version.

${
  <table>
    <tr><th>Expo SDK Version</th><th>React Native Version</th></tr>
    <tr><td>20.0.0</td><td>0.47.1</td></tr>
    <tr><td> 19.0.0</td><td>0.46.1</td></tr>
    <tr><td> 18.0.0</td><td>0.45.1</td></tr>
    <tr><td>17.0.0</td><td>0.44.0</td></tr>
    <tr><td> 16.0.0</td><td>0.43.1</td></tr>
    <tr><td>15.0.0</td><td>0.42.0</td></tr>
    <tr><td>14.0.0</td><td>0.41.0</td></tr>
    <tr><td>13.0.0</td><td>0.40.0</td></tr> 
    <tr><td>12.0.0</td><td>0.37.0</td></tr>
    <tr><td>11.0.0</td><td>0.37.0</td></tr>
    <tr><td>10.0.0</td><td>0.33.0</td></tr>
  </table>
}


`)
