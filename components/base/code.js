import React from 'react'
import Prism from 'prismjs'

import { FONT_FAMILY_MONO } from '~/style/css-config'

export class Code extends React.Component {
  componentDidMount() {}

  _escapeHtml(text) {
    return text.replace(/"/g, '&quot;')
  }

  _replaceCommentsWithAnnotations(value) {
    return value
      .replace(
        /<span class="token comment">\/\* @info (.*?)\*\/<\/span>\s*/g,
        (match, content) => {
          return `<span class="code-annotation" title="${this._escapeHtml(content)}">`
        }
      )
      .replace(
        /<span class="token comment">\/\* @end \*\/<\/span>(\n *)?/g,
        '</span>'
      )
  }

  render() {
    let code = this.props.children
    let html = Prism.highlight(code.toString(), Prism.languages.javascript)
    console.log(process.browser, html)
    html = this._replaceCommentsWithAnnotations(html)
    console.log(process.browser, html)

    return (
      <pre
        style={{
          border: '1px solid #eaeaea',
          padding: '20px',
          margin: '40px 0',
          whiteSpace: 'pre',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <code
          className="language-javascript"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <style jsx>
          {`
          code {
            color: #bd10e0;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
            font-size: 13px;
            line-height: 20px;
          }
        `}
        </style>
      </pre>
    )
  }
}

export const InlineCode = ({ children, noWrap }) => (
  <code className={noWrap && 'no-wrap'}>
    {children}
    <style jsx>
      {`
      code {
        color: #bd10e0;
        font-family: ${FONT_FAMILY_MONO};
        font-size: 0.9rem;
        white-space: pre-wrap;
      }

      code.no-wrap {
        white-space: nowrap;
      }

      code::before {
        content: '';
        /* content: '\`'; */
      }

      code::after {
        /* content: '\`'; */
        content: '';
      }
    `}
    </style>
  </code>
)
