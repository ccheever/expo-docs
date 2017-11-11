import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/data/team'
// import { InternalLink, ExternalLink } from "~/components/text/link";
// import { P } from "~/components/text/paragraph";
// import Image from '~/components/base/image'
import { Code, InlineCode } from '~/components/base/code'
// import {
//   TerminalInput,
//   TerminalOutput
// } from "~/components/text/terminal";

// prettier-ignore
export default withDoc({
  title: 'Preloading & Caching Assets',
  date: '30 Aug 2017',
  authors: [expoteam],
})(markdown(components)`


In order to keep the loading screen visible while we cache our assets, we render [Expo.AppLoading](../sdk/app-loading#app-loading) and only that component until everything is ready.

For images that we have saved to our local filesytem, we can use \`Expo.Asset.fromModule(image).downloadAsync()\` to download and cache the image. For web images, we can use \`Image.prefetch(image)\`. Continue referencing the image normally, eg. with ${<InlineCode>{"`<Image source={require('path/to/image.png')} />"}</InlineCode>}.

Fonts are preloaded using \`Expo.Font.loadAsync(font)\`. The \`font\` argument in this case is an object such as the following: ${<InlineCode>{"{OpenSans: require('./assets/fonts/OpenSans.ttf')}"}</InlineCode>}. \`@expo/vector-icons\` provides a helpful shortcut for this object, which you see below as \`FontAwesome.font\`.

${<Code>{`
import Expo from 'expo';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Expo.Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Expo.Font.loadAsync(font));
}

class AppContainer extends React.Component {
  state = {
    appIsReady: false,
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  render() {
    if (!this.state.appIsReady) {
      return <Expo.AppLoading />;
    }

    return <MyApp />;
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/images/exponent-wordmark.png'),
      'http://www.google.com/logo.png',
    ]);

    const fontAssets = cacheFonts([
      FontAwesome.font,
    ]);

    await Promise.all([
      ...imageAssets,
      ...fontAssets,
    ]);

    this.setState({appIsReady: true});
  }
}
`}</Code>}

See a full working example in [github/expo/new-project-template](https://github.com/expo/new-project-template/blob/master/App.js).
`)
