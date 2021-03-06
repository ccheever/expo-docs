import React from 'react'
import PermalinkIcon from '~/components/icons/permalink-icon'

const slugs = require(`github-slugger`)()

class Permalink extends React.Component {
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
    let text = children
    if (typeof children === 'string') {
      text = children
    } else if (typeof children === 'object') {
      text = children.toString()
    } else {
      text = children[0].toString()
    }

    slugs.reset()
    id = slugs.slug(text)
  }

  return (
    <Permalink
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
    </Permalink>
  )
}

export default fn
