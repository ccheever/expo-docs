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
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="icon" type="image/png" href="/static/images/favicon-32x32.png" sizes="32x32"/>

          <link href="/static/libs/prism/prism.css" rel="stylesheet" />
          <link href="/static/libs/prism/prism-coy.css" rel="stylesheet" />
          <script src="/static/libs/prism/prism.js" />

          <link href="/static/libs/tippy/tippy-1.2.0.css" rel="stylesheet" />
          <script src="/static/libs/tippy/tippy-1.2.0.min.js" />

          <link href="/static/libs/tippy/tippy-1.2.0.css" rel="stylesheet" />

          <link href="/static/libs/algolia/algolia.min.css" rel="stylesheet"/>
          <link href="/static/libs/algolia/algolia-mobile.css" rel="stylesheet" />

          <link href="/static/libs/nprogress/nprogress.css" rel="stylesheet"/>
          <script src="/static/libs/nprogress/nprogress.js" />

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
