import markdown from 'markdown-in-js'
import withDoc, { components } from '~/lib/with-doc'

import { expoteam } from '~/data/team'
import { InlineCode } from '~/components/base/code'

// prettier-ignore
export default withDoc({
  title: 'DocumentPicker',
  
  authors: [expoteam],
})(markdown(components)`


Provides access to the system's UI for selecting documents from the available providers on the user's device.

### Expo.DocumentPicker.getDocumentAsync(options)

Display the system UI for choosing a document.

#### Arguments

-   **options (_object_)** --

      A map of options:

    -   **type (_string_)** -- The [MIME type](https://en.wikipedia.org/wiki/Media_type) of the documents that are available to be picked. Is also supports wildcards like \`image/*\` to choose any image. To allow any type of document you can use \`*/*\`. Defaults to \`*/*\`.

#### Returns

If the user cancelled the document picking, returns ${<InlineCode>{`{ type: 'cancel' }`}</InlineCode>}.

Otherwise, returns ${<InlineCode>{`{ type: 'success', uri, name, size }`}</InlineCode>} where \`uri\` is a URI to the local document file, \`name\` is its name and \`size\` is its size in bytes.


`)
