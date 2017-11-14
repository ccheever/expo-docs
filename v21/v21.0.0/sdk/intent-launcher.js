import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/data/team'
// import { InternalLink, ExternalLink } from "~/components/text/link";
// import { P } from "~/components/text/paragraph";
// import Image from '~/components/base/image'
import { Code } from '~/components/base/code'
// import {
//   TerminalInput,
//   TerminalOutput
// } from "~/components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'Intent Launcher (Android)',
  
  authors: [expoteam],
})(markdown(components)`
Provides a way to launch android intents. e.g. - opening a specific settings screen.

## Usage

### Expo.IntentLauncherAndroid.startActivityAsync(activity, data)

Starts the specified activity. The optional \`data\` parameter can be specified to pass additional data object to the activity. The method will return a promise which resolves when the user returns to the app.

There are a few pre-defined constants you can use for the \`activity\` parameter. You can find them at [expo/expo-sdk/src/IntentLauncherAndroid.js](https://github.com/expo/expo-sdk/blob/master/src/IntentLauncherAndroid.js).

#### Example

${<Code>
  {`import { IntentLauncherAndroid } from 'expo';

  // Open location settings
  IntentLauncherAndroid.startActivityAsync(
    IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS
  );`}</Code>}

`)
