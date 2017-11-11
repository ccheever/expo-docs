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
  title: 'ErrorRecovery',
  date: '5 Sep 2017',
  authors: [expoteam],
})(markdown(components)`
### Expo.ErrorRecovery.setRecoveryProps(props)

Set arbitrary error recovery props. If your project crashes in production as a result of a fatal JS error, Expo will reload your project. If you've set these props, they'll be passed to your reloaded project's initial props under \`exp.errorRecovery\`. [Read more about error handling with Expo](../guides/errors.html).

#### Arguments

-   **props (_object_)** -- An object which will be passed to your reloaded project's initial props if the project was reloaded as a result of a fatal JS error.
`)
