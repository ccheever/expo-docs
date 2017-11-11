import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/data/team'
// import { InternalLink, ExternalLink } from "~/components/text/link";
// import { P } from "~/components/text/paragraph";
// import Image from '~/components/base/image'
// import { Code } from '~/components/base/code'
import SnackEmbed from '~/components/plugins/snack-embed'
// import {
//   TerminalInput,
//   TerminalOutput
// } from "~/components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'Svg',
  
  authors: [expoteam],
})(markdown(components)`

### Expo.Svg()

A set of drawing primitives such as \`Circle\`, \`Rect\`, \`Path\`,
\`ClipPath\`, and \`Polygon\`. It supports most SVG elements and properties.
The implementation is provided by [react-native-svg](https://github.com/react-native-community/react-native-svg),
and documentation is provided in that repository.

${<SnackEmbed name="Expo.Svg Example">{`
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants, Svg } from 'expo';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Svg height={100} width={100}>
          <Svg.Circle
            cx={50}
            cy={50}
            r={45}
            strokeWidth={2.5}
            stroke="#e74c3c"
            fill="#f1c40f"
          />
          <Svg.Rect
            x={15}
            y={15}
            width={70}
            height={70}
            strokeWidth={2}
            stroke="#9b59b6"
            fill="#3498db"
          />
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});

`}</SnackEmbed>}

`)
