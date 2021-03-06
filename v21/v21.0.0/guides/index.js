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
  title: 'Guides',
  
  authors: [expoteam],
})(markdown(components)`

These guides cover specific goals or features you might want to implement in your Expo project. For example, many people want to [load custom fonts](./using-custom-fonts) besides those which come with the device, or [send push notifications](./push-notifications) to their users. Read whichever guide suits your needs.

`)
