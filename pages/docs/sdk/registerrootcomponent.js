import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'

import { ccheever } from '../../../lib/data/team'
// import { InternalLink, ExternalLink } from "../../../components/text/link";
// import { P } from "../../../components/text/paragraph";
// import Image from '../../../components/image'
import { Code } from '../../../components/text/code'
// import SnackEmbed from '../../../components/snack-embed'
// import {
//   TerminalInput,
//   TerminalOutput
// } from "../../../components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'registerRootComponent',
  date: '30 Aug 2017',
  authors: [ccheever],
})(markdown(components)`

### Expo.registerRootComponent(component)

Sets the main component for Expo to use for your app.

> **Note: ** Prior to SDK 18, it was necessary to use \`registerRootComponent\`
directly, but for projects created as of SDK 18 or later, this is handled
automatically in the Expo SDK.


#### Arguments

-   **component (ReactComponent)** -- The React component class that renders
the rest of your app.

#### Returns

No return value.

> **Note:** \`Expo.registerRootComponent\` is roughly equivalent to React
Native's [AppRegistry.registerComponent](https://facebook.github.io/react-native/docs/appregistry.html),
with some additional hooks to provide Expo specific functionality.

## Common questions

### I created my project before SDK 18 and I want to remove
Expo.registerRootComponent, how do I do this?

- Before continuing, make sure your project is running on SDK 18 or later.
- Open up \`main.js\` (or if you changed it, whatever your \`"main"\` is
in \`package.json\`).
- Set \`"main"\` to \`"node_modules/expo/AppEntry.js"\`.
- Delete the \`Expo.registerRootComponent\` call from \`main.js\` and
put \`export default\` before your root component's class declaration.
- Rename \`main.js\` to \`App.js\`.

### What if I want to name my main app file something other than App.js?

You can set the \`"main"\` in \`package.json\` to any file within your
project. If you do this, then you need to use \`registerRootComponent\`;
\`export default\` will not make this component the root for the Expo app
if you are using a custom entry file.

For example, let's say you want to make \`"src/main.js"\` the entry file
for your app -- maybe you don't like having JavaScript files in the
project root, for example. First, set this in \`package.json\`:


${<Code>{`
  {
    'main': 'src/main.js'
  }
`}</Code>}

Then in \`"src/main.js"\`, make sure you call \`registerRootComponent\` and
pass in the component you want to render at the root of the app.


${<Code>{`
  import Expo from 'expo';
  import React from 'react';
  import { View } from 'react-native';

  class App extends React.Component {
    render() {
      return <View />;
    }
  }

  Expo.registerRootComponent(App);
`}</Code>}

`)
