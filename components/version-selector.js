import React from 'react'
import { orderBy } from 'lodash'
import { LATEST_VERSION } from './utils/url'

const NEW_DOC_VERSIONS = ['v20.0.0']

const VERSIONS = [
  `latest`,
  `v20.0.0`,
  `v19.0.0`,
  `v18.0.0`,
  `v17.0.0`,
  `v16.0.0`,
  `v15.0.0`,
  `v14.0.0`,
  `v13.0.0`
]

class VersionSelector extends React.Component {
  setVersion(version) {
    if (NEW_DOC_VERSIONS.indexOf(version) !== -1) {
      // Do nothing, supports new docs
    } else {
      // Redirect to old docs
      window.location.href = `https://docs.expo.io/versions/${version}/index.html`
    }
  }

  render() {
    return (
      <div
        style={{
          float: `right`
        }}
      >
        <div
          style={{
            paddingTop: '4px',
            paddingRight: '10px',
            display: 'inline-block'
          }}
        >
          <select
            value={'v20.0.0'}
            onChange={e => this.setVersion(e.target.value)}
            style={{
              marginLeft: '4px',
              background: `none`,
              borderRadius: 0,
              cursor: `pointer`,
              outline: `none`,
              fontSize: `100%`,
              // backgroundColor: '#f7f7f7',
              // borderColor: '#ccc',
              border: 'none',
              textAlignLast: `center`,
              textAlign: `center`
            }}
          >
            {orderVersions(VERSIONS)
              .map(version => {
                return (
                  <option key={version} value={version}>
                    {version === 'latest'
                      ? 'latest (' + LATEST_VERSION + ')'
                      : version}
                  </option>
                )
              })
              .reverse()}
          </select>
        </div>
      </div>
    )
  }
}

function orderVersions(versions) {
  versions = [...versions]

  if (versions.indexOf('unversioned') >= 0) {
    versions.splice(versions.indexOf('unversioned'), 1)
  }

  if (versions.indexOf('latest') >= 0) {
    versions.splice(versions.indexOf('latest'), 1)
  }

  versions = orderBy(
    versions,
    v => {
      let match = v.match(/v([0-9]+)\./)
      return parseInt(match[1], 10)
    },
    ['asc']
  )

  versions.push('latest')

  if (typeof window === 'object' && window.GATSBY_ENV === 'development') {
    versions.push('unversioned')
  }

  return versions
}

export default VersionSelector
