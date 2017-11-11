import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/data/team'
import JSFeaturesTable from '~/components/js-features-table'

// prettier-ignore
export default withDoc({
  title: 'Using Modern JavaScript',
  
  authors: [expoteam],
})(markdown(components)`

JavaScript is an evolving language. You may have heard of ES2015, ES2016, and so on, which are new versions of JavaScript that have added features like classes, async functions, and more.

You can use much of modern JavaScript with Expo and React Native. The JavaScript VMs on devices already support many modern features. The JavaScript packager ([Metro Bundler](https://github.com/facebook/metro-bundler)) also uses Babel to transform modern JavaScript into an older version that JavaScript VMs can interpret. Between newer JavaScript VMs and Babel, you can use many features of modern JavaScript.

## JavaScript VMs and Expo

On iOS, Expo uses the JavaScriptCore VM that is part of iOS. This means that different versions of iOS have different versions of JavaScriptCore. The newer versions support more features.

On Android, Expo includes its own copy of JavaScriptCore. This means that Expo projects have the same JavaScript features across all Android devices. Expo's version of JavaScriptCore is similar to that included with iOS 10.3.

The table later on this page tells you which features Expo supports. [Kangax's compatibility tables](https://kangax.github.io/compat-table/) also are a helpful resource to see which versions of Safari, which uses JavaScriptCore, support which features of modern JavaScript.

## Polyfills and Babel Transforms

Some parts of the modern JavaScript API are implemented in polyfills. These polyfills are included in your JavaScript bundle by Metro.

Before your code runs in your app, Metro also transforms your code and your dependencies with Babel. By default, Expo projects define a preset Babel configuration (babel-preset-expo) based on the React Native preset ([babel-preset-react-native](https://github.com/facebook/react-native/tree/master/babel-preset)).

## JavaScript Support in Expo

${<JSFeaturesTable />}

## WebAssembly

WebAssembly, or WASM for short, is a low-level language implemented in JavaScript interpreters. WebAssembly is not JavaScript, but WebAssembly code can interact with JavaScript code in the same program. Currently, Expo does not support WebAssembly.

`)
