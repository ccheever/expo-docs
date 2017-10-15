import React from 'react'
import Link from 'next/link'
import Logo from './logo'
import AlgoliaSearch from './algolia-search'
import VersionSelector from './version-selector'
import Button from './button'

class Header extends React.PureComponent {
  render() {
    const { clean } = this.props

    return (
      <div>
        <header className={clean ? 'clean' : null}>
          <Link prefetch href="/versions">
            <a className="logo">
              <Logo />
            </a>
          </Link>
          <VersionSelector
            activeVersion={this.props.activeVersion}
            setVersion={this.props.setVersion}
          />
          <AlgoliaSearch
            style={{ float: 'right' }}
            router={this.props.router}
            activeVersion={this.props.activeVersion}
          />
        </header>

        <header
          className="mobile"
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            background: `white`,
            position: 'fixed',
            padding: '20px',
            right: 0,
            top: 0,
            left: 0,
            zIndex: 1001,
            borderBottom: `1px solid #ccc`
          }}
        >
          <Link prefetch href="/versions">
            <a className="logo">
              <Logo />
            </a>
          </Link>
          <Button onClick={this.props.toggleMobileOverlay} value="Menu" />
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

            header.mobile {
              display: none;
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
                display: none;
              }

              header.clean {
                display: none;
              }

              header.mobile {
                display: flex;
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
