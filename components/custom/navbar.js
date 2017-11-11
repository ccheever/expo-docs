import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
// import debounce from 'lodash.debounce'
import qs from 'query-string'
import _ from 'lodash'

import v20 from '~/data/v20'
import v21 from '~/data/v21'

import { replaceVersionInUrl } from '~/lib/url'

import Button from '~/components/base/button'
import AlgoliaSearch from '~/components/plugins/algolia-search'
import VersionSelector from '~/components/custom/version-selector'

export class NavLink extends React.Component {
  getCurrentHref() {
    const { url } = this.props
    const query = qs.stringify(url.query)
    let href = url.pathname

    if (query !== '') {
      href = `${href}?${query}`
    }

    return href
  }

  isSelected() {
    const { href, aliases = [] } = this.props.info
    const currentHref = this.getCurrentHref()

    if (href === currentHref) return true
    if (aliases.indexOf(currentHref) >= 0) return true

    return false
  }

  render() {
    const { info } = this.props

    return (
      <div>
        <Link prefetch href={info.href} as={info.as || info.href}>
          <a className={this.isSelected() ? 'selected' : ''}>{info.name}</a>
        </Link>
        <style jsx>{`
          a {
            text-decoration: none;
            font-size: 0.85rem;
            color: #000;
          }

          a.selected {
            font-family: "Neue Haas Unica SemiBold";
            font-weight: 400;
            color: #000;
          }
        `}</style>
      </div>
    )
  }
}

export default class DocsNavbarDesktop extends React.Component {
  componentDidMount() {
    // const start = debounce(window.NProgress.start, 200);

    // Maintain navbar scroll position when navigating
    Router.onRouteChangeStart = () => {
      window._expoSidebarScrollPosition = this.props.getSidebarScrollPosition()
      // console.log('started');
      // start();
      window.NProgress.start()
    }

    Router.onRouteChangeComplete = () => {
      this.props.setSidebarScrollPosition(window._expoSidebarScrollPosition)
      // start.cancel();
      // console.log('complete');
      window.NProgress.done()
    }

    Router.onRouteChangeError = () => {
      // start.cancel();
      window.NProgress.done()
    }
  }

  renderPost(info, level) {
    if (info.posts) {
      return this.renderCategory(info, level + 1)
    }

    return (
      <div className="link" key={info.href}>
        <NavLink info={info} url={this.props.url} />
        <style jsx>{`
          .link {
            margin: 8px 0;
          }

          @media screen and (max-width: 950px) {
            .link {
              padding: 20px 0;
              margin: 0;
              border-bottom: 1px solid #EEE;
            }
          }
        `}</style>
      </div>
    )
  }

  renderCategory(info, level = 1) {
    const levelClass = `level-${level}`
    const postStyle = {
      marginLeft: 10 * (level - 1)
    }

    return (
      <div className={`category ${levelClass}`} key={info.name}>
        <div className="label">
          {info.href ? <NavLink info={info} url={this.props.url} /> : info.name}
        </div>
        <div className="posts" style={postStyle}>
          {info.posts.map(postInfo => this.renderPost(postInfo, level))}
        </div>
        <style jsx>{`
          .label {
            margin: 0 0 15px 0;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1.3px;
            font-weight: 400;
            color: #888;
            cursor: default;
          }

          .level-2 .label {
            font-size: 14px;
            font-weight: 400;
            margin: 10px 0;
            text-transform: none;
            letter-spacing: 0;
            cursor: default;
          }

          .category.level-1 {
            margin: 0px 0 48px 0;
          }

          @media screen and (max-width: 950px) {
            .label {
              margin: -10px 0;
            }

            .level-2 .label {
              padding: 20px 0;
              margin: 0;
              border-bottom: 1px solid #EEE;
            }
          }
        `}</style>
      </div>
    )
  }

  updateLinks(data) {
    data.forEach(element => {
      if (element.href) {
        element.as = replaceVersionInUrl(element.href, 'latest')
      }
      if (element.posts) {
        this.updateLinks(element.posts)
      }
    })
  }

  render() {
    let data = v21
    if (this.props.activeVersion === 'v20.0.0') {
      data = v20
    } else if (this.props.activeVersion === 'latest') {
      data = _.cloneDeep(data)
      this.updateLinks(data)
    }
    return (
      <div>
        <div
          className="desktop-sidebar"
          style={{
            paddingLeft: '20px',
            paddingRight: '20px'
          }}
        >
          {this.props.mobile &&
            <div
              style={{
                paddingTop: '5px',
                paddingBottom: '10px',
                borderBottom: '1px solid #ccc',
                marginBottom: '1.45rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <VersionSelector
                  activeVersion={this.props.activeVersion}
                  setVersion={this.props.setVersion}
                />
                <Button
                  onClick={this.props.toggleMobileOverlay}
                  value="Close"
                />
              </div>
              <div style={{ display: 'flex', width: '100%' }}>
                <AlgoliaSearch
                  style={{ width: '100%' }}
                  router={this.props.router}
                  activeVersion={this.props.activeVersion}
                />
              </div>
            </div>}
          {data.map(categoryInfo => this.renderCategory(categoryInfo))}
        </div>

        <style jsx>{`
          @media screen and (max-width: 950px) {
            .desktop-sidebar {
              background: white;
              position: absolute;
              width: 100%;
              height: calc(100% + 200px);
              top: -200px;
              padding-top: 200px;
              z-index: 10000;
              overflow-y: scroll;
              -webkit-overflow-scrolling: touch;
              display: block;
            }
          }
        `}</style>
      </div>
    )
  }
}
