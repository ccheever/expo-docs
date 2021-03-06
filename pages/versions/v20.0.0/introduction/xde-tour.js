import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/data/team'
import Image from '~/components/base/image'

// prettier-ignore
export default withDoc({
  title: 'XDE Tour',
  authors: [expoteam],
})(markdown(components)`

## Sign in screen

When you open XDE for the first time you'll be greeted by this sign in screen. If you have an account already, go ahead and sign in. If you don't, either sign in with Github or register an account.

${
    <Image
      src={`${ASSETS_URL}/docs/introduction/xde-signin.png`}
      width={2224}
      height={1532}
      caption="XDE sign in screen"
    />
  }

## Home screen

Success, you signed in! From this screen you may want to create a new project or open an existing one. We list some of your most recently opened projects for convenience.

${
    <Image
      src={`${ASSETS_URL}/docs/introduction/xde-signin-success.png`}
      width={2272}
      height={1572}
      caption="XDE home"
    />
  }

## Project dialog

Click on Project and you'll see everything you can do from here. Naturally you cannot close a project or show it in finder, etc, because you don't have one opened yet.

${
    <Image
      src={`${ASSETS_URL}/docs/introduction/xde-project-dialog.png`}
      width={2272}
      height={1572}
      caption="XDE home project dialog"
    />
  }


## Sign out, if you want

At any time you can click on your username in the top right and sign out. Or log out. Who can really agree on the verbiage?

${
    <Image
      src={`${ASSETS_URL}/docs/introduction/xde-signout.png`}
      width={2272}
      height={1572}
      caption="XDE sign out"
    />
  }


## Project screen

So we've opened up a new project. The left pane is the React Packager, which you can learn more about in [Up and Running](../guides/up-and-running.html#up-and-running) and in [How Expo Works](../guides/how-expo-works.html#how-expo-works). The right pane is for device logs, which you can read more about in [Viewing Logs](../guides/logging.html#logging).

${
    <Image
      src={`${ASSETS_URL}/docs/introduction/xde-project-opened.png`}
      width={2272}
      height={1572}
      caption="XDE project"
    />
  }

## Share

Send a link to your app to anybody with an internet connection. This is also useful for getting the link on your device if you don't have it connected to your computer.

${
    <Image
      src={`${ASSETS_URL}/docs/introduction/xde-send-link.png`}
      width={2272}
      height={1572}
      caption="XDE send link"
    />
  }

## Opening on a device

The device button lets you quickly open your app on a device or simulator. Read more in [Up and Running](../guides/up-and-running.html#up-and-running).


${
    <Image
      src={`${ASSETS_URL}/docs/introduction/xde-device.png`}
      width={2272}
      height={1572}
      caption="XDE open on device"
    />
  }

## Development mode

You'll often want to work on your project in development mode. This makes it run a bit more slowly because it adds a lot of runtime validations of your code to warn you of potential problems, but it also gives you access to live reloading, hot reloading, remote debugging and the element inspector. Disable Development Mode and reload your app if you want to test anything related to performance.


${
    <Image
      src={`${ASSETS_URL}/docs/introduction/xde-development-mode.png`}
      width={2272}
      height={1572}
      caption="XDE project development mode"
    />
  }

## Project dialog (with project open)

In addition to the options provided from the home screen, with a project opened we give you access to a few shortcuts like showing the project directory in finder.

${
    <Image
      src={`${ASSETS_URL}/docs/introduction/xde-project-opened.png`}
      width={2272}
      height={1572}
      caption="XDE project dialog in open project"
    />
  }


## Publish

While you work on your project, it is given a temporary URL which is served from your computer. When you're ready to share the project with others, you can **Publish** the project to get a permanent URL (something like \`expo.io/@your-username/your-app-slug\`) that anybody can open with the Expo Client.

When you click the **Publish** button in XDE, you'll be asked to confirm that you want your project to be available to the public. XDE takes some time to generate your minified JS bundle and upload your Assets to our servers, and once it's done, prints out your app's published URL. You can read more details about how publishing works in [How Expo Works](../guides/how-expo-works.html#how-expo-works) and the [Publishing guide](../guides/publishing.html).

${
    <Image
      src={`${ASSETS_URL}/docs/introduction/xde-publish.png`}
      width={2272}
      height={1572}
      caption="XDE publish"
    />
  }



`)
