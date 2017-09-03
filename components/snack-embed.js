import React from 'react'

export default class SnackEmbed extends React.Component {
  render() {
    return (
      <div
        data-snack-id={this.props.snackId}
        data-snack-platform="ios"
        data-snack-preview={false}
        data-snack-theme="light"
        style={{
          overflow: 'hidden',
          background: '#fafafa',
          borderWidth: 1,
          borderStyle: 'solid',
          height: 505,
          width: '100%',
          borderRadius: 4,
          borderColor: 'rgba(0,0,0,.16)'
        }}
      >
        <script async src="https://snack.expo.io/embed.js" />
      </div>
    )
  }
}
