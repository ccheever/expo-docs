import React from 'react'
import Link from 'next/link'
import Logo from './logo'
import AlgoliaSearch from './algolia-search'
import VersionSelector from './version-selector'

class Header extends React.PureComponent {
  render() {
    const { clean } = this.props

    return (
      <div>
        <header className={clean ? 'clean' : null}>
          <Link prefetch href="/docs">
            <a className="logo">
              <Logo />
            </a>
          </Link>
          <VersionSelector
            activeVersion={this.props.activeVersion}
            setVersion={this.props.setVersion}
          />
          <AlgoliaSearch
            router={this.props.router}
            activeVersion={this.props.activeVersion}
          />
        </header>
        <style jsx>
          {`
            header {
              max-width: 900px;
              margin: auto;
              padding: 30px 0px 10px 0px;
              position: relative;
              background-color: #FFFFFF;
              border-bottom: 1px solid #EEE;
              margin-bottom: 60px;
            }

            header.clean {
              max-width: 100%;
              margin: 0 30px;
            }

            a.logo {
              display: inline-block;
              width: 39px;
              height: 35px;
              position: relative;
            }

            @media screen and (max-width: 950px) {
              header {
                text-align: center;
              }

              header.clean {
                margin: 0;
              }

              .logo {
                margin-left: 20px;
              }
            }
            `}
        </style>
      </div>
    )
  }
}

export default Header
