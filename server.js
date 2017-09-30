const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

import { LATEST_VERSION } from '~/data/versions'

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    // `latest` URLs should render the latest version
    const splitPath = pathname.split('/')
    if (splitPath[2] === 'latest') {
      splitPath[2] = LATEST_VERSION
      app.render(req, res, splitPath.join('/'), query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, err => {
    if (err) throw err
    //console.log('> Ready on http://localhost:3000')
  })
})
