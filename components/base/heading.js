import React from 'react'
import PermalinkIcon from '~/components/icons/permalink-icon'
import { FONT_FAMILY_MONO, FONT_FAMILY_SANS_BOLD } from '~/style/css-config'

const slugs = require(`github-slugger`)()

// Heading that supports permalink

class Heading extends React.Component {
  render() {
    const { component, className, children, ...rest } = this.props
    return React.cloneElement(
      component,
      {
        className: [className, component.props.className || ''].join(' '),
        ...rest
      },
      children
    )
  }
}

const fn = props => {
  const component = props.children
  const children = component.props.children || ''
  let id = props.id

  if (null == id) {
    const text = 'string' === typeof children ? children : children.join('')
    slugs.reset()
    id = slugs.slug(text)
  }

  return (
    <Heading
      className={props.lean ? 'lean' : ''}
      component={component}
      data-components-heading
    >
      <span id={id} className="target" />
      <a href={'#' + id}>{children}</a>
      <span className="permalink"><PermalinkIcon /></span>
      <style jsx>
        {`
        a {
          border-bottom: 1px solid transparent;
          color: inherit;
          margin-right: 10px;
          text-decoration: none;
        }

        a:hover {
          border-bottom-color: inherit;
        }

        :global(h1[data-components-heading]) a::before {
          content: "# ";
        }

        :global(h2[data-components-heading]) a::before {
          content: "## ";
        }

        :global(h3[data-components-heading]) a::before {
          content: "### ";
        }

        :global(.lean[data-components-heading]) a::before {
          content: "";
        }

        :global(h1[data-components-heading]::before),
        :global(h2[data-components-heading]::before),
        :global(h3[data-components-heading]::before),
        :global(h4[data-components-heading]::before) {
          display: none;
        }

        .target {
          display: block;
          margin-top: -100px;
          padding-bottom: 100px;
          visibility: hidden;
        }

        .permalink {
          text-align: center;
          vertical-align: middle;
          visibility: hidden;
        }

        a:hover ~ .permalink {
          visibility: visible;
        }
        `}
      </style>
    </Heading>
  )
}

export default fn

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
