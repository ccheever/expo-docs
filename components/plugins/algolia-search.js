import React from 'react'
import Router from 'next/router'

import { replaceVersionInUrl } from '~/lib/url'
import { LATEST_VERSION } from '~/data/versions'

class AlgoliaSearch extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (
      this.props.activeVersion &&
      this.props.activeVersion !== nextProps.activeVersion
    ) {
      this.docsearch.algoliaOptions = {
        ...this.docsearch.algoliaOptions,
        facetFilters: [
          `tags:${nextProps.activeVersion === 'latest' ? LATEST_VERSION : nextProps.activeVersion}`
        ]
      }
    }
  }

  processUrl(url) {
    // Update URLs for new doc URLs
    var routes = url.split('/')
    routes[routes.length - 1] = routes[routes.length - 1].replace('.html', '')
    return routes.join('/')
  }

  componentDidMount() {
    const docsearch = require('docsearch.js')
    const Hotshot = require('hotshot')
    this.docsearch = docsearch({
      appId: 'S6DBW4862L',
      apiKey: '59ebba04e5d2e4bed5d5ae12eed28bdd',
      indexName: 'exponent-docs-v2',
      inputSelector: '#algolia-search-box',
      algoliaOptions: {
        facetFilters: [
          `tags:${this.props.activeVersion === 'latest' ? LATEST_VERSION : this.props.activeVersion}`
        ],
        hitsPerPage: 10
      },
      enhancedSearchInput: true,
      handleSelected: (input, event, suggestion) => {
        input.setVal('')
        const url = suggestion.url
        let route = url.match(/https?:\/\/(.*)(\/versions\/.*)/)[2]

        let asPath = null
        if (this.props.activeVersion === 'latest') {
          asPath = this.processUrl(replaceVersionInUrl(route, 'latest'))
        }
        route = this.processUrl(route)
        if (asPath) {
          Router.push(route, asPath)
        } else {
          Router.push(route)
        }

        document.getElementById('docsearch').blur()
        const searchbox = document.querySelector('input#docsearch')
        const reset = document.querySelector('.searchbox [type="reset"]')
        reset.className = 'searchbox__reset'
        if (searchbox.value.length === 0) {
          reset.className += ' hide'
        }
        this.props.closeSidebar && this.props.closeSidebar()
      }
    })

    // add keyboard shortcut
    this.hotshot = new Hotshot({
      combos: [
        {
          keyCodes: [16, 191], // shift + / (otherwise known as '?')
          callback: () =>
            setTimeout(() => document.getElementById('docsearch').focus(), 16)
        }
      ]
    })
  }

  render() {
    return (
      <div style={this.props.style}>
        <div className="search-container">
          <input
            id="algolia-search-box"
            type="text"
            placeholder="Search..."
            autoComplete="off"
            spellCheck="false"
            dir="auto"
          />
        </div>

        <style jsx>
          {`

          @media screen and (max-width: 950px) {
            .search-container {
                margin-top: 12px;
            }
          }

        #algolia-search-box {
            border: '1px solid #eee';
            border-radius: 3;
            font-size: '14px';
            padding: '2px 10px';
            margin-top: '2px';
        }
        `}
        </style>
      </div>
    )
  }
}

export default AlgoliaSearch
