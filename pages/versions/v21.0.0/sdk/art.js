import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/data/team'
// import { InternalLink, ExternalLink } from "~/components/text/link";
// import { P } from "~/components/text/paragraph";
// import Image from '~/components/image'
// import SnackEmbed from '~/components/plugins/snack-embed'
// import { Code } from '~/components/text/code'
// import {
//   TerminalInput,
//   TerminalOutput
// } from "~/components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'ART',
  date: '30 Aug 2017',
  authors: [expoteam],
})(markdown(components)`

React Native comes with a built in library for simple vector drawing called ART. It is barely documented and instead you likely want to use [Svg](svg.html) which is more feature complete and better documented and more standard implementation of vector graphics.

But sometimes you'll find some code that uses ART such as [react-native-progress](https://github.com/oblador/react-native-progress) and you'll want to be able to run it on Expo, and, since ART is built in to React Native, you can.

**Again, you almost definitely want to use [Svg](svg.html) instead of this unless you are really sure you want to use ART for some reason.**

`)
