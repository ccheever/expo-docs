import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/data/team'
// import { InternalLink, ExternalLink } from "~/components/text/link";
// import { P } from "~/components/text/paragraph";
// import Image from '~/components/image'
import { Code } from '~/components/text/code'
// import SnackEmbed from '~/components/snack-embed'
// import {
//   TerminalInput,
//   TerminalOutput
// } from "~/components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'ScreenOrientation',
  date: '30 Aug 2017',
  authors: [expoteam],
})(markdown(components)`

Allows changing supported screen orientations at runtime. This will take priority over the \`orientation\` key in \`app.json\`.

### Expo.ScreenOrientation.allow(orientation)

Allow a screen orientation. You can call this function multiple times with multiple orientations to allow multiple orientations.

#### Arguments

-   **orientation (_string_)** -- The allowed orientation. See the Orientation enum for possible values.

#### Example

${<Code>{`
  function changeScreenOrientation() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
  }
  `}</Code>}



### Expo.ScreenOrientation.Orientation

An object containing the values that can be passed to the allow function.

-   \`ALL\` -- All 4 possible orientations
-   \`ALL_BUT_UPSIDE_DOWN\` -- All but reverse portrait, could be all 4 orientations on certain Android devices.
-   \`PORTRAIT\` -- Portrait orientation, could also be reverse portrait on certain Android devices.
-   \`PORTRAIT_UP\` -- Upside portrait only.
-   \`PORTRAIT_DOWN\` -- Upside down portrait only.
-   \`LANDSCAPE\` -- Any landscape orientation.
-   \`LANDSCAPE_LEFT\` -- Left landscape only.
-   \`LANDSCAPE_RIGHT\` -- Right landscape only.

### Detecting when the orientation changes

The best way to do this is to listen for changes to [Dimensions](https://facebook.github.io/react-native/docs/dimensions.html).


`)
