import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/data/team'
// import { InternalLink, ExternalLink } from "~/components/text/link";
// import { P } from "~/components/text/paragraph";
// import Image from '~/components/base/image'
// import { InlineCode } from "~/components/base/code";
// import {
//   TerminalInput,
//   TerminalOutput
// } from "~/components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'Community',
  
  authors: [expoteam],
})(markdown(components)`

Want to chat about Expo? The best way to get in touch with our team and other people developing with Expo is to join our Slack chat. We always like to hear about projects and components that people are building on Expo and there's usually someone available to answer questions.

- [Join our forums](http://forums.expo.io/)
- [Follow us on Twitter @expo_io](https://twitter.com/expo_io)
- [Become a contributor on Github](https://github.com/expo)
- [Request an invitation](https://slack.expo.io/) to our [Slack](https://expo-developers.slack.com/).

`)
