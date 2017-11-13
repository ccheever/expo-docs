import React from 'react'

import Permalink from '~/components/base/permalink'
import { H2, H3, H4 } from '~/components/base/headers'
import { PDIV, P, Quote } from '~/components/base/paragraph'
import { UL, OL, LI } from '~/components/base/list'
import { InlineCode } from '~/components/base/code'
import { ExternalLink } from '~/components/base/link'
import DocsPage from '~/components/pages/docs'

export default function withDoc(options) {
  return function withContent(content) {
    class DocPage extends React.Component {
      render() {
        return (
          <DocsPage title={options.title} url={this.props.url}>
            <div className="content">
              <h1>{options.title}</h1>
              <div className="doc-markdown">
                {content}
                <div className="footnote">
                  Still have questions?
                  {' '}
                  <a href="https://forums.expo.io/">Ask on our forums!</a>
                  <br />
                  <a
                    href={
                      'https://github.com/ccheever/expo-docs/tree/master/pages' +
                        this.props.url.pathname +
                        (this.props.url.pathname.slice(-1) === '/'
                          ? 'index'
                          : '') +
                        '.js'
                    }
                  >
                    You can edit these docs by sending us a PR
                  </a>
                </div>
              </div>
            </div>
            <style jsx>{`
                .footnote {
                  padding: 48px 0 48px 0;
                  color: #777777;
                  font-size: 0.8rem;
                  text-align: center;
                }

                .footnote a {
                  color: #2188FF;
                  text-decoration: none;
                }

                .footnote a:hover {
                  text-decoration: underline;
                }
            `}</style>
          </DocsPage>
        )
      }
    }

    return DocPage
  }
}

const createPermalinkedComponent = BaseComponent => {
  let newComp = ({ children }) => (
    <Permalink lean={true}>
      <BaseComponent>{children}</BaseComponent>
    </Permalink>
  )
  return newComp
}

export const components = {
  p: PDIV,
  strong: P.B,
  ul: UL,
  ol: OL,
  li: createPermalinkedComponent(LI),
  h2: createPermalinkedComponent(H2),
  h3: createPermalinkedComponent(H3),
  h4: createPermalinkedComponent(H4),
  code: InlineCode,
  a: ExternalLink,
  blockquote: Quote
}
