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
  title: 'Branch',
  date: '5 Sep 2017',
  authors: [expoteam],
})(markdown(components)`

Expo includes alpha support for [Branch](https://branch.io/) attribution services.

> **Note:** This API only works with standalone builds created with [exp build](../guides/building-standalone-apps.html).

## Importing Branch

The Branch SDK currently lives under Expo's **DangerZone** namespace because it's in a place where it might change significantly. You can import it like this:

${<Code>{`
import { DangerZone } from 'expo';
let { Branch } = DangerZone;
`}</Code>}

## Configuration (standalone apps only)

- Add the **Branch Key** to your \`app.json\` in the section \`android.config.branch.apiKey\` and \`ios.config.branch.apiKey\`. You can find your key on [this page](https://dashboard.branch.io/account-settings/app) of the Branch Dashboard.
- Add a **linking scheme** to your \`app.json\` in the \`scheme\` section if you don't already have one.

### Enable Branch support for universal links (iOS only)

Branch can track universal links from domains you associate with your app. **Note:** Expo won't forward these to your JS via the normal Linking API.

- Enable associated domains on [Apple's Developer Portal](https://developer.apple.com/account/ios/identifier/bundle) for your app id. To do so go in the \`App IDs\` section and click on your app id. Select \`Edit\`, check the \`Associated Domains\` checkbox and click \`Done\`.

- Enable Universal Links in the [Link Settings](https://dashboard.branch.io/link-settings) section of the Branch Dashboard and fill in your Bundle Identifier and Apple App Prefix.

- Add an associated domain to support universal links to your \`app.json\` in the \`ios.associatedDomains\` section. This should be in the form of \`applinks:<link-domain>\` where \`link-domain\` can be found in the Link Domain section of the [Link Settings](https://dashboard.branch.io/link-settings) page on the Branch Dashboard.

## Using the Branch API

We pull in the API from [react-native-branch](https://github.com/BranchMetrics/react-native-branch-deep-linking#usage), so the documentation there is the best resource to follow. Make sure you import Branch using the above instructions (from \`Expo.DangerZone.Branch\`).

## Example

Listen for links:

${<Code>{`
Expo.DangerZone.Branch.subscribe((bundle) => {
  if (bundle && bundle.params && !bundle.error) {
  	// \`bundle.params\` contains all the info about the link.
  }
});
`}</Code>}

Open a share dialog:

${<Code>{`
class ArticleScreen extends Component {
  componentDidMount() {
    this.createBranchUniversalObject();
  }

  async createBranchUniversalObject() {
    const { article } = this.props;

    this._branchUniversalObject = await Expo.DangerZone.Branch.createBranchUniversalObject(
      \`article_\${article.id}\`,
      {
        title: article.title,
        contentImageUrl: article.thumbnail,
        contentDescription: article.description,
        // This metadata can be used to easily navigate back to this screen
        // when implementing deep linking with \`Branch.subscribe\`.
        metadata: {
          screen: 'articleScreen',
          params: JSON.stringify({ articleId: article.id }),
        },
      }
    );
  }

  onShareLinkPress = async () => {
    const shareOptions = {
      messageHeader: this.props.article.title,
      messageBody: \`Checkout my new article!\`,
    };
    await this._branchUniversalObject.showShareSheet(shareOptions);
  };
}
`}</Code>}

## Errors during Apple submission?

We've had reports of some users seeing this message (or similar) during Apple submission after enabling Branch and associated domains:

> ERROR ITMS-90046: "Invalid Code Signing Entitlements. Your application bundle's signature contains code signing entitlements that are not supported on iOS. Specifically, value '*' for key 'com.apple.developer.associated-domains' in 'Payload/Exponent.app/Exponent' is not supported."

We're currently working on a fix. In the meantime, if you hit this, [here's a workaround](https://gist.github.com/wli/ec2999046a5b0483e9598e40e1616b74).

`)
