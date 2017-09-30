// Components
import React from 'react'
import Head from '../components/head'
import Header from '../components/header'
import Heading from '../components/heading'
import Page from '../components/page'
import { PDIV, P, Quote } from '../components/text/paragraph'
import { UL, OL, LI } from '../components/text/list'
import { H3, H4 } from '../components/text/heading'
import { InlineCode } from '../components/text/code'
import { ExternalLink } from '../components/text/link'
import DocsNavbarDesktop from '../components/docs/navbar/desktop'
import DocsNavbarMobile from '../components/docs/navbar/mobile'
import FreezePageScroll from '../components/freeze-page-scroll'
import Router from 'next/router'

import { VERSIONS, NEW_DOC_VERSIONS } from '~/data/versions'

export default function withDoc(options) {
  return function withContent(content) {
    class DocPage extends React.Component {
      render = () => {
        let version = (this.props.url.asPath || this.props.url.pathname)
          .split(`/`)[2]
        if (!version || VERSIONS.indexOf(version) === -1) {
          version = VERSIONS[0]
        }
        this.version = version

        const setVersion = version_ => {
          if (NEW_DOC_VERSIONS.indexOf(version_) !== -1) {
            this.version = version_
            Router.push('/versions/' + version_)
          } else {
            // Redirect to old docs
            window.location.href = `https://docs.expo.io/versions/${version_}/index.html`
          }
        }

        return (
          <Page>
            <Head
              titlePrefix=""
              title={`${options.title} - Expo Documentation`}
            />
            <script src="/static/prism/prism.js" />
            <link href="/static/prism/prism.css" rel="stylesheet" />
            <link href="/static/prism/prism-coy.css" rel="stylesheet" />
            <link href="/static/algolia/algolia.css" rel="stylesheet" />
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css"
            />
            <div className="header">
              <Header
                clean={true}
                inverse={true}
                user={this.props.user}
                pathname={this.props.url.pathname}
                onLogout={() => {
                  this.props.onUser(null)
                  this.props.url.push('/login')
                }}
                onLogoRightClick={() => this.props.url.push('/logos')}
                activeVersion={this.version}
                setVersion={setVersion}
              />
            </div>
            <FreezePageScroll>
              <div className="sidebar">
                <DocsNavbarDesktop
                  url={this.props.url}
                  activeVersion={this.version}
                />
              </div>
            </FreezePageScroll>
            <div>
              <div className="doc-layout">
                <div className="topbar">
                  <DocsNavbarMobile
                    url={this.props.url}
                    activeVersion={this.version}
                  />
                </div>
                <div className="content">
                  <h1>{options.title}</h1>
                  <div className="doc-markdown">
                    {content}
                    <div className="footnote">
                      Still have questions?
                      {' '}
                      <a href="https://forums.expo.io/">Ask on our forums!</a>
                      <br />
                      <a href="https://github.com/expo/expo-docs">
                        You can edit these docs by sending us a PR
                      </a>
                    </div>
                  </div>
                </div>
                <div />
              </div>
            </div>
            <style jsx>{`
            .doc-layout {
              display: flex;
              margin: 130px 30px 50px 320px;
              padding: 0 20px;
              justify-content: left;
              -webkit-font-smoothing: antialiased;
            }

            .header {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
            }

            .sidebar {
              position: fixed;
              width: 280px;
              margin-top: 0;
              bottom: 0;
              left: 0;
              top: 130px;
              padding-left: 30px;
              overflow: auto;
              -webkit-font-smoothing: antialiased;
            }

            .topbar {
              display: none;
            }

            .content {
              flex: 1;
              max-width: 600px;
            }

            .content h1 {
              color: #000;
              font-size: 26px;
              line-height: 20px;
              font-weight: 400;
              margin: 0 0 30px 0;
              padding: 0;
            }

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

            @media screen and (max-width: 950px) {
              .header {
                position: relative;
              }

              .doc-layout {
                display: block;
                margin: 0;
              }

              .content {
                width: 100%;
                margin-left: 0;
              }

              .sidebar {
                display: none;
              }

              .topbar {
                display: block;
              }
            }
          `}</style>
          </Page>
        )
      }
    }

    return DocPage
  }
}

const DocH2 = ({ children }) => (
  <Heading lean={true} offsetTop={175}>
    <H3>{children}</H3>
  </Heading>
)

const DocH3 = ({ children }) => (
  <Heading lean={true} offsetTop={175}>
    <H4>{children}</H4>
  </Heading>
)

export const components = {
  p: PDIV,
  strong: P.B,
  ul: UL,
  ol: OL,
  li: LI,
  h2: DocH2,
  h3: DocH3,
  h4: H4,
  code: InlineCode,
  a: ExternalLink,
  blockquote: Quote
}
