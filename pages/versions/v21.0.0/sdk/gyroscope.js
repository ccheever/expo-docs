import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/data/team'
// import { InternalLink, ExternalLink } from "~/components/text/link";
// import { P } from "~/components/text/paragraph";
// import Image from '~/components/image'
import { Code } from '~/components/text/code'
// import SnackEmbed from '~/components/plugins/snack-embed'
// import {
//   TerminalInput,
//   TerminalOutput
// } from "~/components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'Gyroscope',
  date: '4 Sep 2017',
  authors: [expoteam],
})(markdown(components)`

Access the device gyroscope sensor to respond to changes in rotation in 3d space.

### Expo.Gyroscope.addListener(listener)

Subscribe for updates to the gyroscope.

#### Arguments

-   **listener (_function_)** -- A callback that is invoked when an gyroscope update is available. When invoked, the listener is provided a single argumument that is an object containing keys x, y, z.

#### Returns

An EventSubscription object that you can call remove() on when you would like to unsubscribe the listener.

### Expo.Gyroscope.removeAllListeners()

Remove all listeners.

### Expo.Gyroscope.setUpdateInterval(intervalMs)

Subscribe for updates to the gyroscope.

#### Arguments

-   **intervalMs (_number_)** -- Desired interval in milliseconds between gyroscope updates.

## Example: basic subscription

${<Code>
  {`import React from 'react';
  import {
    Gyroscope,
  } from 'expo';
  import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
  } from 'react-native';

  export default class GyroscopeSensor extends React.Component {
    state = {
      gyroscopeData: {},
    }

    componentDidMount() {
      this._toggle();
    }

    componentWillUnmount() {
      this._unsubscribe();
    }

    _toggle = () => {
      if (this._subscription) {
        this._unsubscribe();
      } else {
        this._subscribe();
      }
    }

    _slow = () => {
      Gyroscope.setUpdateInterval(1000);
    }

    _fast = () => {
      Gyroscope.setUpdateInterval(16);
    }

    _subscribe = () => {
      this._subscription = Gyroscope.addListener((result) => {
        this.setState({gyroscopeData: result});
      });
    }

    _unsubscribe = () => {
      this._subscription && this._subscription.remove();
      this._subscription = null;
    }

    render() {
      let { x, y, z } = this.state.gyroscopeData;

      return (
        <View style={styles.sensor}>
          <Text>Gyroscope:</Text>
          <Text>x: {round(x)} y: {round(y)} z: {round(z)}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this._toggle} style={styles.button}>
              <Text>Toggle</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._slow} style={[styles.button, styles.middleButton]}>
              <Text>Slow</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._fast} style={styles.button}>
              <Text>Fast</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  function round(n) {
    if (!n) {
      return 0;
    }

    return Math.floor(n * 100) / 100;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'stretch',
      marginTop: 15,
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eee',
      padding: 10,
    },
    middleButton: {
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: '#ccc',
    },
    sensor: {
      marginTop: 15,
      paddingHorizontal: 10,
    },
  });`}
  </Code>}

`)
