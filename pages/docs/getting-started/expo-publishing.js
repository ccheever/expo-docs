import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'

import { ccheever } from '../../../lib/data/team'
import { TerminalInput } from '../../../components/text/terminal'
import { Code, InlineCode } from '../../../components/text/code'
import { HR } from '../../../components/text/paragraph'
import Image from '../../../components/image'

// prettier-ignore
export default withDoc({
  title: 'Publishing in Expo',
  date: '26 August 2017',
  authors: [ccheever],
})(markdown(components)`

While you’re developing your project, you’re writing code on your
computer, and when you use XDE or exp, a server and the React Native
packager run on your machine and bundle up all your source code and make
it available from a URL. Your URL for a project you’re working on
probably looks something like this: \`somehi\`
${<InlineCode>exp://i3-kvb.ccheever.an-example.exp.direct:80</InlineCode>}

${<InlineCode>exp.direct</InlineCode>} is a domain we use for tunneling, so that even if you’re
behind a VPN or firewall, any device on the internet that has your URL
should be able to access your project. This makes it much easier to open
your project on your phone or send it someone else you’re collaborating
with who isn’t on the same LAN.

But since the packager and server are running on your computer, if you
turn off your laptop or close XDE, you won’t be able to load your
project from that URL. "Publish" is the term we use for deploying your
project. It makes your project available at a persistent URL, for
example https://expo.io/@community/native-component-list, which can be
opened with the Expo client. It also uploads all of your app images,
fonts, and videos to a CDN ([read more
here](how-expo-works.html#publishingdeploying-an-expo-app-in-production)).

## How to Publish

To publish a project, click the Publish button in XDE. (It’s in the
upper right of the window.) If you're using the exp cli tool, then run
${<InlineCode>exp publish</InlineCode>}. No setup is required, go ahead and create a new project
and publish it without any changes and you will see that it works.

When you do this, the packager will minify all your code and generate
two versions of your code (one for iOS, one for Android) and then upload
those to a CDN. You’ll get a link like [https://exp.host/@ccheever/an-example](https://exp.host/@ccheever/an-example)
that anyone can load your project from.

Any time you want to deploy an update, hit publish again and a new
version will be available immediately to your users the next time they
open it.

## Deploying to the App Store and Play Store

When you're ready to distribute your app to end-users, you can create a
standalone app binary (an ipa or apk file) and put it in the iOS App
Store and the Google Play Store. [See the full guide to building a
standalone app.](building-standalone-apps.html)

When you build the binary, the current version of your app JavaScript is
bundled so that it loads immediately the first time the app opens. But
you're not stuck with that version of your code, you can publish updates
at any time after that without needing to re-build the binary. For
example, if you find a bug or want to add some functionality to the app
after submitting the binary.

The standalone app knows to look for updates at your app's published
url, and if you publish an update then the next time a user opens your
app they will automatically download the new version. These are
commonly referred to as "Over the Air" (OTA) updates, the functionality
is similar to [CodePush](https://microsoft.github.io/code-push/), but it
is built into Expo so you don't need to install anything.

Updates are handled differently on iOS and Android. On Android, updates
are downloaded in the background. This means that the first time a user opens
your app after an update they will get the old version while the new version
is downloaded in the background. The second time they open the app they'll get
the new version. On iOS, updates are downloaded synchronously, so users will
get the new version the first time they open your app after an update.

## Limitations

If you make any of the following changes in ${<InlineCode>app.json</InlineCode>}, you will need to
re-build the binaries for your app for the change to take effect:

- Increment the Expo SDK Version
- Change anything under the ${<InlineCode>ios</InlineCode>} or ${<InlineCode>android</InlineCode>} keys
- Change your app ${<InlineCode>icon</InlineCode>}
- Change your app ${<InlineCode>name</InlineCode>}
- Change your app ${<InlineCode>scheme</InlineCode>}
- Change your ${<InlineCode>facebookScheme</InlineCode>}

## Privacy

You can set the privacy of your project in your ${<InlineCode>app.json</InlineCode>} configuration
file by setting the key “privacy” to either ${<InlineCode>“public”</InlineCode>} or ${<InlineCode>“unlisted”</InlineCode>}.

These options work similarly to the way they do on YouTube. Unlisted
project URLs will be secret unless you tell people about them or share
them. Public projects might be surfaced to other developers.


With ▲now, you can deploy and publish any kind of web app (or service) in under five minutes. This guide includes information about:

* Deploying an app
* Buying a domain name
* Mapping that domain name to the app
* Configuring an SSL certificate

## Now Desktop

To use ▲now, start by installing [Now Desktop](https://zeit.co/download).

When the installation is completed, you can log in to ▲now by running the following command using a terminal:

${<TerminalInput>now login</TerminalInput>}

Follow the instructions on the screen.<br/>
(Since this is your first time, it will create an account for you.)

## Deployment

Let's deploy a simple static web app.

Create a directory called \`my-web-app\` and add the following content to a file called \`index.html\`.

${<Code>{`<!DOCTYPE html>
<html>
  <body>
    This is a static web app.
  </body>
</html>`}</Code>}

> You can also use a [Node.js app](https://github.com/zeit/nextgram) or an [app with a Dockerfile](https://github.com/now-examples/cobol-hello-world) instead of this simple static app.

After you have added the content, visit the \`my-web-app\` directory using a terminal and run this command:

${<TerminalInput>now</TerminalInput>}

▲now will deploy the app and give you a URL as shown below.

${<Image
  src={`${ASSETS_URL}/docs/five-minute-guide-to-now/deploy.png`}
  width={650}
  height={255}
  caption="Getting a unique URL after the deployment."
/>}

This is a URL for the current deployment of the app. You can access this version of the app anytime with this URL.

## Domain Name

Now you have a unique URL(<https://my-web-app-avvuiuuwto.now.sh>) for your app. But you probably want a nicer-sounding URL before directing your users there. The next step is to map the "now.sh" URL to a domain name that you prefer.

Let's assume the domain name is \`my-web-app.com\`, and you haven't bought it yet. <br/>
To map this domain name to the app's unique URL, run this command:

${<TerminalInput>now alias https://my-web-app-avvuiuuwto.now.sh my-web-app.com</TerminalInput>}

Since you haven't bought the domain name yet, you will be asked to enter your credit card information to buy it.
You can do that by running this command:

${<TerminalInput>now cc add</TerminalInput>}

You may choose to upgrade your account to the "Premium" plan by running this command:

${<TerminalInput>now upgrade</TerminalInput>}

Now, run the domain mapping command again and follow these instructions:

${<TerminalInput>now alias https://my-web-app-avvuiuuwto.now.sh my-web-app.com</TerminalInput>}

Once you've done that, you'll be able to access your app using <https://my-web-app.com>.
It is automatically configured with a [Let's Encrypt](https://letsencrypt.org/) SSL certificate and served with HTTPS.

${<Image
  src={`${ASSETS_URL}/docs/five-minute-guide-to-now/domain-setup.png`}
  width={650}
  height={412}
  caption="After mapping a domain name to a deployment."
/>}

## Updates

If you've made any changes to your app, you will need to deploy the latest version of your app. To do that, run this command:

${<TerminalInput>now</TerminalInput>}

You will receive a unique URL for this deployment. Let's assume that the new URL is <https://my-web-app-ttfxzqwbwz.now.sh>.

You can map this new URL to your domain name by running this command:

${<TerminalInput>now alias https://my-web-app-ttfxzqwbwz.now.sh my-web-app.com</TerminalInput>}

Now everything is ready.<br/>
Your users can access the updated web app at <https://my-web-app.com>.

${<HR />}

These are just a few things you can do with ▲now. To learn more about ▲now, simply follow the rest of the docs.
`)
