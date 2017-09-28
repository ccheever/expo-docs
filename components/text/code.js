import { FONT_FAMILY_MONO } from '../css-config'

export const Code = ({ children }) => (
  <pre
    style={{
      border: '1px solid #eaeaea',
      padding: '16px',
      margin: '0',
      whiteSpace: 'pre',
      overflowWrap: 'break-word',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch'
    }}
  >
    <code className="language-js">
      {children.trim()}
      <style jsx>
        {`
        code {
          color: #bd10e0;
          font-family: ${FONT_FAMILY_MONO};
          font-size: 12px;
          line-height: 1rem;
          margin-bottom: 2rem;
        }
      `}
      </style>
    </code>
  </pre>
)

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
