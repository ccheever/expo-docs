import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'

import { arunoda } from '../../../lib/data/team'
import { TerminalInput } from '../../../components/text/terminal'
import Image from '../../../components/image'

// prettier-ignore
export default withDoc({
  title: 'Installation',
  date: '31 July 2017',
  authors: [arunoda],
})(markdown(components)`

In order to deploy to ▲now, you need to install a small utility app. Let's see how you can do that.

## Now Desktop (Recommended)

${
  <Image
    src={`${ASSETS_URL}/docs/installation/now-desktop.png`}
    width={550}
    height={380}
    caption="Now Desktop on Mac OS"
  />
}

This is a desktop app which is [available](https://zeit.co/download) for all of the major operation systems. It comes as an operation system status bar app.

You can deploy apps, see notifications, and manage your account using an easy-to-use interface.
It will update new versions automatically behind the scenes and you can always use the latest version of [Now Desktop](https://zeit.co/download).

> Additionally, it comes with the \`now\` command line utility where you can interact with ▲now using a terminal.

## NOW CLI

This is the command line interface for ▲now, especially built for [servers](https://zeit.co/download#command-line). It's a pre-built binary and works without any dependencies.

NOW CLI is the ideal way to interact with ▲now inside Continues Integration(CI) services.

## NOW via NPM

This is exactly NOW CLI but distributed via [NPM](https://www.npmjs.com/). This method is ideal if your server environment already has NPM support.

You can get this via the following command:

${
  <TerminalInput>npm install -g now</TerminalInput>
}

## Open Source

All of these apps are available under the open source MIT license. So, you can always check the source code and modify it as needed.
You are always welcome to suggest new features and submit issues. Use following repositories:

* Now Desktop - <https://github.com/zeit/now-desktop>
* Now CLI - <https://github.com/zeit/now-cli>
* Now Client - <https://github.com/zeit/now-client>

`)
