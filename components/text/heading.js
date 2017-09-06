import { FONT_FAMILY_MONO, FONT_FAMILY_SANS_BOLD } from '../css-config'

export const H1 = ({ children }) => (
  <h1>
    {children}
    <style jsx>
      {`
      h1 {
        font-size: 2.25rem;
        line-height: 2.75rem;
        margin-bottom: 1.5rem;
      }
    `}
    </style>
  </h1>
)

const B = ({ children }) => (
  <span>
    {children}
    <style jsx>
      {`
      span {
        font-family: ${FONT_FAMILY_SANS_BOLD};
        font-weight: 400;
      }
    `}
    </style>
  </span>
)

H1.B = B

export const H2 = ({ children }) => (
  <h2>
    {children}
    <style jsx>
      {`
      h2 {
        font-family: ${FONT_FAMILY_SANS_BOLD};
        font-weight: 400;
        line-height: 1.75rem;
        font-size: 1.875rem;
        margin-bottom: 1.5rem;
      }
    `}
    </style>
  </h2>
)

export const H3 = ({ children }) => (
  <h3>
    {children}
    <style jsx>
      {`
      h3 {
        font-size: 1.375rem;
        line-height: 1.75rem;
        margin-bottom: 1.5rem;
      }
    `}
    </style>
  </h3>
)

export const H4 = ({ children, isCommand }) => (
  <h4 className={isCommand ? 'command' : ''}>
    {children}
    <style jsx>
      {`
      h4 {
        font-family: ${FONT_FAMILY_SANS_BOLD};
        font-weight: 400;
        line-height: 1.625rem;
        font-size: 1.1rem;
        margin-bottom: 0.25rem;
      }

      .command {
        font-family: ${FONT_FAMILY_MONO};
        font-size: 0.9em;
        color: #bd10e0;
      }
    `}
    </style>
  </h4>
)
