import { FONT_FAMILY_SANS, FONT_FAMILY_SANS_BOLD } from '../css-config'

export const P = ({ children }) => (
  <p>
    {children}
    <style jsx>
      {`
      p {
        font-size: 1rem;
        line-height: 1.725rem;
        margin-bottom: 1.5rem;
      }
    `}
    </style>
  </p>
)

export const PDIV = ({ children }) => (
  <div>
    {children}
    <style jsx>
      {`
      div {
        font-size: 1rem;
        line-height: 1.725rem;
        margin-bottom: 1.5rem;
      }
    `}
    </style>
  </div>
)

const B = ({ children }) => (
  <span>
    {children}
    <style jsx>
      {`
      span {
        font-family: ${FONT_FAMILY_SANS_BOLD};
        font-weight: 400;
        letter-spacing: 0.3px;
      }
    `}
    </style>
  </span>
)

export const HR = () => (
  <div>
    <style jsx>{`
      div {
        border: 0;
        border-bottom: 1px solid #CCC;
        margin: 50px 30px;
      }
    `}</style>
  </div>
)

export const Quote = ({ children }) => (
  <blockquote>
    {children}
    <style jsx>{`
      blockquote {
        font-family: ${FONT_FAMILY_SANS};
        padding: 12px 24px;
        border-left: 5px solid #000;
        margin: 0 0 1.5rem 0;
        color: #888;
      }

      blockquote :global(div) {
        margin: 0;
      }
    `}</style>
  </blockquote>
)

P.B = B
