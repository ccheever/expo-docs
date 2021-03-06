import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/data/team'
// import { InternalLink, ExternalLink } from "~/components/text/link";
// import { P } from "~/components/text/paragraph";
// import Image from '~/components/base/image'
// import { Code } from '~/components/base/code'
import SnackEmbed from '~/components/plugins/snack-embed'
// import {
//   TerminalInput,
//   TerminalOutput
// } from "~/components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'Pedometer',
  
  authors: [expoteam],
})(markdown(components)`

Use Core Motion (iOS) or Google Fit (Android) to get the user's step count.

${<SnackEmbed snackId='S1gdfOb4Z' />}

### Expo.Pedometer.isAvailableAsync()

Determine whether the pedometer is available.

#### Returns

- Returns a promise that resolves to a \`Boolean\`, indicating whether the pedometer is available on this device.

### Expo.Pedometer.getStepCountAsync(start, end)

Get the step count between two dates.

#### Arguments

- **start (_Date_)** -- A date indicating the start of the range over which to measure steps.
- **end (_Date_)** -- A date indicating the end of the range over which to measure steps.

#### Returns

- Returns a promise that resolves to an \`Object\` with a \`steps\` key, which is a \`Number\` indicating the number of steps taken between the given dates.

### Expo.Pedometer.watchStepCount(callback)

Subscribe to pedometer updates.

#### Arguments

- **callback (_function_)** A callback that is invoked when new step count data is available. The callback is provided a single argument that is an object with a \`steps\` key.

#### Returns

- An EventSubscription object that you can call remove() on when you would like to unsubscribe the listener.


`)
