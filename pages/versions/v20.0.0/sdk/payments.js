import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/data/team'
// import { InternalLink, ExternalLink } from "~/components/text/link";
// import { P } from "~/components/text/paragraph";
// import Image from '~/components/base/image'
// import { Code, InlineCode } from '~/components/base/code'
// import {
//   TerminalInput,
//   TerminalOutput
// } from "~/components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'Payments',
  date: '4 Sep 2017',
  authors: [expoteam],
})(markdown(components)`

- Note: Expo previously included support for a native Payments API. The Payments API was using the Stripe SDK on iOS. We learned that apple sometimes rejects apps which contain the Stripe SDK but don’t offer anything for sale. To help your App Review process go more smoothly, we’ve decided to remove the Stripe SDK and experimental Payments API from apps built with the Expo standalone builder. We’re still excited to give developers a way to let users pay for goods when they need to and we’ll announce ways to do so shortly.

`)
