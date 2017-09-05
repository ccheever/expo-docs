import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'

import { ccheever } from '../../../lib/data/team'
// import { InternalLink, ExternalLink } from "../../../components/text/link";
// import { P } from "../../../components/text/paragraph";
// import Image from '../../../components/image'
import { Code, InlineCode } from '../../../components/text/code'
// import {
//   TerminalInput,
//   TerminalOutput
// } from "../../../components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'Font',
  date: '4 Sep 2017',
  authors: [ccheever],
})(markdown(components)`

Allows loading fonts from the web and using them in React Native components. See more detailed usage information in the [Using Custom Fonts](../guides/using-custom-fonts.html#using-custom-fonts) guide.

## Usage

### Expo.Font.loadAsync(name, url)

Load a font from the web and associate it with the given name.

#### Arguments

- **name (_string_)** -- A name by which to identify this font. You can make up any name you want; this will be the name that you use when setting \`fontFamily\`. For example, if the name is \`'open-sans'\` then your \`Text\` component would look like: ${<InlineCode>{`<Text style={{fontFamily: 'open-sans'}}>Hello world</Text>`}</InlineCode>}

- **url (_string_)** -- This can be either a remote URL or a \`require\` statement for the font file.

Example:

${<Code>{`Expo.Font.loadAsync('open-sans', 'http://url/to/open-sans.ttf');`}</Code>}

#### Returns

Doesn't return anything and simply awaits till the font is available to use.

### Expo.Font.loadAsync(map)

Convenience form of [\`Expo.Font.loadAsync()\`](#expofontloadasync "Expo.Font.loadAsync") that loads multiple fonts at once.

#### Arguments

-   **map (_object_)** -- A map of names to urls/\`require\` statements as in [\`Expo.Font.loadAsync()\`](#expofontloadasync "Expo.Font.loadAsync").

#### Example

${<Code>{`Expo.Font.loadAsync({
  Montserrat: require('./assets/fonts/Montserrat.ttf'),
  'Montserrat-SemiBold': require('./assets/fontsMontserrat-SemiBold.ttf'),
});`}</Code>}


This is equivalent to calling [\`Expo.Font.loadAsync()\`](#expofontloadasync "Expo.Font.loadAsync") once per name and URL pair.

#### Returns

Doesn't return anything and simply awaits till all fonts are available to use.



`)
