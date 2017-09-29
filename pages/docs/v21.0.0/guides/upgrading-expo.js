import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/data/team'
// import { InternalLink, ExternalLink } from "~/components/text/link";
// import { P } from "~/components/text/paragraph";
// import Image from '~/components/image'
// import { Code, InlineCode } from '~/components/text/code'
// import {
//   TerminalInput,
//   TerminalOutput
// } from "~/components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'Upgrading Expo',
  date: '30 Aug 2017',
  authors: [expoteam],
})(markdown(components)`

It isn't strictly necessary to update your app when a new version of Expo is released. New versions of the Expo client are backwards compatible with apps published for previous versions. This means that you can download a new version of the Expo client and open apps that were published for previous versions and they will work perfectly.

That said, each version is better than the last, so you might want to stay up to date to take advantage of new features and performance improvements.

**Upgrade guides vary depending on the sdkVersion, so follow the guide in the release notes**

We post our release notes to [Exposition](https://blog.expo.io/), for example the [v16.0.0 release notes](https://blog.expo.io/expo-sdk-v16-0-0-is-now-available-2151d555a580). If you're upgrading by more than one major version, we recommend following the upgrade guide for each major version between your current version and your target.

If you are running ExpoKit inside a native project, upgrading will require extra steps. ExpoKit is currently an alpha feature and upgrading difficulty will vary between versions, but there is some information [here](expokit#upgrading-expokit).

`)
