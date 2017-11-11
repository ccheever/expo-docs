import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/data/team'
import SnackEmbed from '~/components/plugins/snack-embed'

// prettier-ignore
export default withDoc({
  title: 'BlurView',
  authors: [expoteam],
})(markdown(components)`

A React component that renders a native blur view on iOS and falls back to a semi-transparent view on Android. A common usage of this is for navigation bars, tab bars, and modals.

${<SnackEmbed snackId="Bkbb_XnHW" />}

<br />

${<SnackEmbed snackId="BJM8eV3rZ" />}

## props

 \`tint\`
A string: \`light\`, \`default\`, or \`dark\`.

 \`intensity\`
A number from 1 to 100 to control the intensity of the blur effect.

`)
