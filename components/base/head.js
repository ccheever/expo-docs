import PropTypes from 'prop-types'
import React from 'react'
import NextHead from 'next/head'

class Head extends React.PureComponent {
  render() {
    const titlePrefix = null != this.props.titlePrefix
      ? this.props.titlePrefix
      : 'ZEIT – '
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
          <link href="/static/prism/prism.css" rel="stylesheet" />
          <link href="/static/prism/prism-coy.css" rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css"
          />
          <link href="/static/algolia/algolia.css" rel="stylesheet" />

          <script src="http://ricostacruz.com/nprogress/nprogress.js" />
          <link
            href="http://ricostacruz.com/nprogress/nprogress.css"
            rel="stylesheet"
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
              background: '#000'};
            }

            #nprogress .peg {
              box-shadow: '0 0 10px #ccc, 0 0 5px #ccc'};
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
