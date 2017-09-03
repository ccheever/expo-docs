import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'

import { ccheever } from '../../../lib/data/team'
// import { InternalLink, ExternalLink } from "../../../components/text/link";
// import { P } from "../../../components/text/paragraph";
// import Image from '../../../components/image'
import { InlineCode } from '../../../components/text/code'
// import {
//   TerminalInput,
//   TerminalOutput
// } from "../../../components/text/terminal";

import SnackEmbed from '../../../components/snack-embed'

// prettier-ignore
export default withDoc({
  title: 'WebBrowser',
  date: '30 Aug 2017',
  authors: [ccheever],
})(markdown(components)`

Provides access to the system's web browser and supports handling redirects. On iOS, it uses \`SFSafariViewController\` to provide a secure Safari browser modal that shares cookies with the Safari app, and on Android it uses \`ChromeCustomTabs\` for the same reason.

${<SnackEmbed snackId="r116LYJne" />}

<br />

#### Authentication

You can use \`WebBrowser\` to build OAuth flows, such as [this Auth0 example](https://github.com/AppAndFlow/exponent-auth0-example) and [this Twitter example](https://github.com/AppAndFlow/exponent-twitter-login-example).

#### Handling redirects

When you're done an authentication flow, or for some other reason you want to pass information back to your app, you will want to redirect back to your app.
You can use React Native's [Linking.addEventListener](https://facebook.github.io/react-native/docs/linking.html) function to do this.

##### Important

When you are developing your Expo experience and handling redirections, to test, you need to open your application via the \`exp://\` URI without the port. This is a workaround needed when developing, because without it, Expo will reload the experience instead of redirecting you to the existing one.

#### Other uses

You might just want to have a simple modal browser window to show the terms of services, privacy policy, or other information about your app. This is a great use case for it.

## Expo.WebBrowser

### Expo.WebBrowser.openBrowserAsync(url)

Opens the url with the system's web browser.

#### Arguments

- **url (_string_)** -- The url to open in the web browser.

#### Returns

If the user closed the web browser, the promise resolves with ${<InlineCode>{"{ type: 'cancel' }"}</InlineCode>}.
If the browser is closed using \`Expo.WebBrowser.dismissBrowser()\`, the promise resolves with ${<InlineCode>{"{ type: 'dismissed' }"}</InlineCode>}.

### Expo.WebBrowser.dismissBrowser()

Dismisses the system's presented web browser.

#### Returns

The promise resolves with ${<InlineCode>{"{ type: 'dismissed' }"}</InlineCode>}.


`)
