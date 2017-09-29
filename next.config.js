const glob = require('glob-promise')

module.exports = {
  exportPathMap: async function() {
    const paths = await glob('pages/**')
    const pages = paths.map(path => {
      path = path.replace(/^pages/, '')
      path = path.replace('index.js', '')
      // TODO: Switching to having `.html`
      path = path.replace('.js', '')

      if (path === '/') return path

      path = path.replace(/\/$/, '')
      return path
    })

    const pageMap = pages.reduce((map, page) => {
      map[page] = { page }
      return map
    }, {})

    return pageMap
  }
}
