import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'

import { ccheever } from '../../../lib/data/team'
// import { InternalLink, ExternalLink } from "../../../components/text/link";
// import { P } from "../../../components/text/paragraph";
import Image from '../../../components/image'
// import { InlineCode } from "../../../components/text/code";
// import {
//   TerminalInput,
//   TerminalOutput
// } from "../../../components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'Development Mode',
  date: '30 Aug 2017',
  authors: [ccheever],
})(markdown(components)`


React Native includes some very useful tools for development: remote JavaScript debugging in Chrome, live reload, hot reloading, and an element inspector similar to the beloved inspector that you use in Chrome. It also performs bunch of validations while your app is running to give you warnings if you're using a deprecated property or if you forgot to pass a required property into a component, for example.

${
    <Image
      src={`${ASSETS_URL}/docs/guides/development-mode.png`}
      width={1096}
      height={604}
      caption="Screenshots of development mode in action"
    />
  }


**This comes at a cost: your app runs slower in development mode.** You can toggle it on and off from XDE. When you switch it, just close and re-open your app for the change to take effect. **Any time you are testing the performance of your app, be sure to disable development mode**.

## Toggling Development Mode in XDE

${
    <Image
      src={`${ASSETS_URL}/docs/guides/toggle-development-mode.png`}
      width={1062}
      height={683}
    />
  }

`)
