import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/data/team'
import { Code } from '~/components/base/code'
import SnackEmbed from '~/components/plugins/snack-embed'

// prettier-ignore
export default withDoc({
  title: 'Accelerometer',
  authors: [expoteam],
})(markdown(components)`

${
    /*eslint-disable */
    <Code>{`
    /* @info Replace <strong>'YOUR_APP_ID'</strong> with your application id from <a href='https://developers.facebook.com' target='_blank'>developers.facebook.com</a> */
    const FB_APP_ID = 'YOUR_APP_ID'; 
    /* @end */
    `}</Code>
    /*eslint-enable */
}

Access the device accelerometer sensor(s) to respond to changes in
acceleration in 3d space.

### Expo.Accelerometer.addListener(listener)

Subscribe for updates to the accelerometer.

#### Arguments

-   **listener (_function_)** -- A callback that is invoked when an
    accelerometer update is available. When invoked, the listener is
    provided a single argumument that is an object    containing keys x, y,
    z.

#### Returns

-   An EventSubscription object that you can call remove() on when you
    would like to unsubscribe the listener.

### Expo.Accelerometer.removeAllListeners()

Remove all listeners.

### Expo.Accelerometer.setUpdateInterval(intervalMs)

Subscribe for updates to the accelerometer.

#### Arguments

-   **intervalMs (_number_)** Desired interval in milliseconds between
    accelerometer updates.

## Example: basic subscription

${<SnackEmbed snackId="rkqb6ytFb" />}

`)
