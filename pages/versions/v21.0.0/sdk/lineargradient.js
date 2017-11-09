import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/data/team'
// import { InternalLink, ExternalLink } from "~/components/text/link";
// import { P } from "~/components/text/paragraph";
// import Image from '~/components/image'
// import { Code, InlineCode } from '~/components/text/code'
import SnackEmbed from '~/components/plugins/snack-embed'
// import {
//   TerminalInput,
//   TerminalOutput
// } from "~/components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'LinearGradient',
  date: '4 Sep 2017',
  authors: [expoteam],
})(markdown(components)`

A React component that renders a gradient view.
${<SnackEmbed snackId='BJbef43HW' />}
<br />
${<SnackEmbed snackId='r1pvMV3HW' />}

## Expo.LinearGradient

### props

 \`colors\`
- An array of colors that represent stops in the gradient. At least two colors are required (otherwise it's not a gradient, it's just a fill!).

 \`start\`
- An array of \`[x, y]\` where x and y are floats. They represent the position that the gradient starts at, as a fraction of the overall size of the gradient. For example, \`[0.1, 0.1]\` means that the gradient will start 10% from the top and 10% from the left.

 \`end\`
- Same as start but for the end of the gradient.

 \`locations\`
- An array of the same lenth as \`colors\`, where each element is a float with the same meaning as the \`start\` and \`end\` values, but instead they indicate where the color at that index should be.

`)
