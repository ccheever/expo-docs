import React from 'react'
import { orderBy } from 'lodash'

import { VERSIONS, LATEST_VERSION } from '~/data/versions'

class VersionSelector extends React.Component {
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
            value={this.props.activeVersion}
            onChange={e => this.props.setVersion(e.target.value)}
            style={{
              marginLeft: '4px',
              background: `none`,
              cursor: `pointer`,
              fontSize: `100%`,
              backgroundColor: '#f7f7f7',
              borderColor: '#ccc',
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
          <style jsx>
            {`

            select {
              border-radius: 0;
              border: 'none';
              outline: 'none';
            }

              @media screen and (min-width: 950px) {
                select {
                  border-radius: 0;
                  border: 'none';
                  outline: 'none';
                }
              }
            `}
          </style>
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
