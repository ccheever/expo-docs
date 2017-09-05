import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'

import { expoteam } from '../../../lib/data/team'
// import { InternalLink, ExternalLink } from "../../../components/text/link";
// import { P } from "../../../components/text/paragraph";
// import Image from '../../../components/image'
import { Code } from '../../../components/text/code'
// import {
//   TerminalInput,
//   TerminalOutput
// } from "../../../components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'KeepAwake',
  date: '4 Sep 2017',
  authors: [expoteam],
})(markdown(components)`
A React component that prevents the screen sleeping when rendered. It also exposes static methods to control the behavior imperatively.

## Example: component

${<Code>
  {`import React from 'react';
  import {
    Text,
    StyleSheet,
    View,
  } from 'react-native';
  import { KeepAwake } from 'expo';

  export default class KeepAwakeExample extends React.Component {
    render() {
      return (
        <View>
          <KeepAwake />
          <Text>This screen will never sleep!</Text>
        </View>
      );
    }
  }`}
  </Code>}

### Example: static methods

${<Code>
{`import React from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';
import { KeepAwake } from 'expo';

export default class KeepAwakeExample extends React.Component {

  _activate = () => {
    KeepAwake.activate();
  }

  _deactivate = () => {
    KeepAwake.deactivate();
  }

  render() {
    return (
      <View>
        <Button onPress={this._activate}>Activate</Button>
        <Button onPress={this._deactivate}>Deactivate</Button>
      </View>
    );
  }
}
`}</Code>}

`)
