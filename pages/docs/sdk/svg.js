import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'

import { ccheever } from '../../../lib/data/team'
// import { InternalLink, ExternalLink } from "../../../components/text/link";
// import { P } from "../../../components/text/paragraph";
// import Image from '../../../components/image'
// import { Code } from '../../../components/text/code'
import SnackEmbed from '../../../components/snack-embed'
// import {
//   TerminalInput,
//   TerminalOutput
// } from "../../../components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'Svg',
  date: '30 Aug 2017',
  authors: [ccheever],
})(markdown(components)`

### Expo.Svg()

A set of drawing primitives such as \`Circle\`, \`Rect\`, \`Path\`,
\`ClipPath\`, and \`Polygon\`. It supports most SVG elements and properties.
The implementation is provided by [react-native-svg](https://github.com/react-native-community/react-native-svg),
and documentation is provided in that repository.

${<SnackEmbed snackId='HJ1m5ICJb' />}

`)
