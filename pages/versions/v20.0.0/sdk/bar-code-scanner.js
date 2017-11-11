import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/data/team'
// import { InternalLink, ExternalLink } from "~/components/text/link";
// import { P } from "~/components/text/paragraph";
// import Image from '~/components/base/image'
import { Code } from '~/components/base/code'
// import {
//   TerminalInput,
//   TerminalOutput
// } from "~/components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'BarCodeScanner',
  date: '5 Sep 2017',
  authors: [expoteam],
})(markdown(components)`
A React component that renders a viewfinder for the device's either front or back camera viewfinder and will detect bar codes that show up in the frame.

Requires \`Permissions.CAMERA\`.

## Supported formats
${<Code>{`
| Bar code format | iOS | Android |
| --------------- | --- | ------- |
| aztec           | Yes | Yes     |
| codabar         | No  | Yes     |
| code39          | Yes | Yes     |
| code93          | Yes | Yes     |
| code128         | Yes | Yes     |
| code138         | Yes | No      |
| code39mod43     | Yes | No      |
| datamatrix      | Yes | Yes     |
| ean13           | Yes | Yes     |
| ean8            | Yes | Yes     |
| interleaved2of5 | Yes | Yes     |
| itf14           | Yes | No      |
| maxicode        | No  | Yes     |
| pdf417          | Yes | Yes     |
| rss14           | No  | Yes     |
| rssexpanded     | No  | Yes     |
| upc_a           | No  | Yes     |
| upc_e           | Yes | Yes     |
| upc_ean         | No  | Yes     |
| qr              | Yes | Yes     |
  `}</Code>}
### Example

${<Code>{`
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{flex: 1}}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  }

  _handleBarCodeRead = (data) => {
    alert(JSON.stringify(data));
  }
}
`}</Code>}

### props

- \`type\`

When \`'front'\`, use the front-facing camera. When \`'back'\`, use the back-facing camera. Default: \`'back'\`.

- \`torchMode\`

When \`'on'\`, the flash on your device will turn on, when \`'off'\`, it will be off. Defaults to \`'off'\`.

- \`barCodeTypes\`

An array of bar code types. Usage: \`BarCodeScanner.Constants.BarCodeType.<codeType>\` where \`codeType\` is one of the listed above. Default: all supported bar code types.

`)
