import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/lib/data/team'
// import { InternalLink, ExternalLink } from "~/components/text/link";
// import { P } from "~/components/text/paragraph";
// import Image from '~/components/image'
import { Code } from '~/components/text/code'
import SnackEmbed from '~/components/snack-embed'
// import {
//   TerminalInput,
//   TerminalOutput
// } from "~/components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'Lottie',
  date: '4 Sep 2017',
  authors: [expoteam],
})(markdown(components)`

Expo includes support for [Lottie](https://airbnb.design/lottie/), the animation library from AirBnB.

${<SnackEmbed snackId="SJdIbHe4b" />}


## Importing Lottie

The Lottie SDK currently lives under Expo's **DangerZone** namespace because it's implementation is still in Alpha. You can import it like this:

${<Code>{`import { DangerZone } from 'expo';
let { Lottie } = DangerZone;
`}</Code>}

## Using the Lottie API

We pull in the API from [lottie-react-native](https://github.com/airbnb/lottie-react-native#basic-usage), so the documentation there is the best resource to follow.

`)
