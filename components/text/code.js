import { FONT_FAMILY_MONO } from '../css-config'
import React from 'react'

/* global Prism */

export class Code extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
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
        <code className="language-javascript">
          {this.props.children}
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
        </code>
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
