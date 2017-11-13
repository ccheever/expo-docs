import React from 'react'
import Router from 'next/router'

import Head from '~/components/base/head'
import Page from '~/components/base/page'
import Header from '~/components/custom/header'
import Navbar from '~/components/custom/navbar'
import FreezePageScroll from '~/components/custom/freeze-page-scroll'

import { replaceVersionInUrl } from '~/lib/url'
import { VERSIONS, NEW_DOC_VERSIONS } from '~/data/versions'

class DocsPage extends React.Component {
  state = {
    isMobileOverlayVisible: false
  }

  render() {
    let version = (this.props.url.asPath || this.props.url.pathname)
      .split(`/`)[2]
    if (!version || VERSIONS.indexOf(version) === -1) {
      version = VERSIONS[0]
    }

    const setVersion = version_ => {
      if (NEW_DOC_VERSIONS.indexOf(version_) !== -1) {
        this.version = version_
        // TODO: Support `latest` URLs with an `asPath`
        Router.push('/versions/' + version_)
      } else {
        // Redirect to old docs
        window.location.href = `https://docs.expo.io/versions/${version_}/index.html`
      }
    }

    const canonicalUrl =
      'https://docs.expo.io' +
      replaceVersionInUrl(this.props.url.pathname, 'latest')

    const tippyScript = `
      tippy('.code-annotation', {
          theme: 'light',
          arrow: true,
          interactive: true,
      });
    `
    return (
      <Page>
        <Head titlePrefix="" title={`${this.props.title} - Expo Documentation`}>
          {version === 'unversioned' &&
            <meta name="robots" content="noindex" />}
          <link rel="canonical" href={canonicalUrl} />
          <script src="/static/prism/prism.js" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/tippy.js@1.2.0/dist/tippy.css"
          />
          <script src="https://unpkg.com/tippy.js@1.2.0/dist/tippy.min.js" />
        </Head>
        <div
          className="header"
          style={{
            display: this.state.isMobileOverlayVisible ? 'none' : 'block'
          }}
        >
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
            toggleMobileOverlay={() =>
              this.setState({
                isMobileOverlayVisible: !this.state.isMobileOverlayVisible
              })}
          />
        </div>
        <FreezePageScroll>
          <div
            className="sidebar"
            ref={sidebar => {
              this.sidebar = sidebar
            }}
          >
            <Navbar
              url={this.props.url}
              activeVersion={this.version}
              getSidebarScrollPosition={() => this.sidebar.scrollTop}
              setSidebarScrollPosition={val => (this.sidebar.scrollTop = val)}
            />
          </div>
        </FreezePageScroll>
        {this.state.isMobileOverlayVisible &&
          <Navbar
            mobile={true}
            className="mobile-overlay"
            url={this.props.url}
            activeVersion={this.version}
            toggleMobileOverlay={() =>
              this.setState({
                isMobileOverlayVisible: !this.state.isMobileOverlayVisible
              })}
            setVersion={setVersion}
          />}
        <div style={{ height: '100vh', overflow: 'auto' }}>
          <div className="doc-layout">
            {this.props.children}
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
            z-index: 99;
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

          @media screen and (max-width: 950px) {
            .header {
              position: relative;
            }

            .doc-layout {
              display: block;
              margin: 0;
              margin-top: 160px;
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
        <script dangerouslySetInnerHTML={{ __html: tippyScript }} />
      </Page>
    )
  }
}

export default DocsPage
