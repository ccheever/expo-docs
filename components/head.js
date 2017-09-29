import PropTypes from 'prop-types'
import React from 'react'
import NextHead from 'next/head'
import NProgress from 'nprogress'
import debounce from 'lodash.debounce'
import RouterEvents from '../lib/router-events'

const start = debounce(NProgress.start, 200)
RouterEvents.on('routeChangeStart', start)
RouterEvents.on('routeChangeComplete', () => {
  start.cancel()
  NProgress.done()
})
RouterEvents.on('routeChangeError', () => {
  start.cancel()
  NProgress.done()
})

class Head extends React.PureComponent {
  render() {
    const titlePrefix = null != this.props.titlePrefix
      ? this.props.titlePrefix
      : 'ZEIT – '
    const { darkBg } = this.context
    return (
      <div>
        <NextHead>
          <title>{titlePrefix + this.props.title}</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/images/favicon-32x32.png"
            sizes="32x32"
          />

          <meta name="theme-color" content="#000" />
          {this.props.children}
        </NextHead>
        <style jsx global>
          {`
          #nprogress {
            pointer-events: none;
          }
          #nprogress .bar {
            position: fixed;
            z-index: 2000;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
          }
          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            opacity: 1.0;
            transform: rotate(3deg) translate(0px, -4px);
          }
        `}
        </style>
        <NextHead>
          <style>
            {`
            #nprogress .bar {
              background: ${darkBg ? '#fff' : '#000'};
            }

            #nprogress .peg {
              box-shadow: ${darkBg ? '0 0 10px #fff, 0 0 5px #fff' : '0 0 10px #ccc, 0 0 5px #ccc'};
            }
          `}
          </style>
        </NextHead>
      </div>
    )
  }
}

Head.contextTypes = {
  darkBg: PropTypes.bool
}

export default Head
