const cp = require('child_process')
const { resolve } = require('path')
const fs = require('mz/fs')
const GitHubApi = require('github')
const jwt = require('jsonwebtoken')

const { ZEIT_TOKEN, GH_KEY } = process.env

module.exports = async (pullRequestId, tarballName) => {
  // Extract the static ap
  await fs.mkdir(`/tmp/${tarballName}`)
  await fs.rename(
    `/tmp/${tarballName}.tar.gz`,
    `/tmp/${tarballName}/app.tar.gz`
  )

  const execOptions = {
    cwd: `/tmp/${tarballName}`
  }

  await exec('tar xzf app.tar.gz', execOptions)

  // Deploy it to now
  const nowPath = resolve(__dirname, 'node_modules/.bin/now')
  await exec(`${nowPath} switch zeit -t ${ZEIT_TOKEN}`, execOptions)
  const nowApp = await exec(
    `${nowPath} -n zeit-docs -t ${ZEIT_TOKEN} out`,
    execOptions
  )

  const deployUrl = nowApp.stdout

  // Add a GH comment
  const github = new GitHubApi({
    protocol: 'https',
    headers: {
      'user-agent': 'ZEIT-docs-deployer'
    },
    Promise,
    followRedirects: true,
    timeout: 5000
  })

  const key = Buffer.from(GH_KEY, 'base64').toString('utf8')
  const token = await getToken(github, key, 3412, 36421)

  github.authenticate({
    type: 'token',
    token
  })

  await github.issues.createComment({
    owner: 'zeit',
    repo: 'docs',
    number: pullRequestId,
    body: `You can view the modified docs at: ${deployUrl}/docs`
  })

  await exec(`rm -rf ${execOptions.cwd}`)
}

function exec(command, options = {}) {
  return new Promise((done, failed) => {
    cp.exec(command, options, (error, stdout, stderr) => {
      if (error) {
        error.stdout = stdout
        error.stderr = stderr
        failed(error)
        return
      }

      done({ stdout, stderr })
    })
  })
}

async function getToken(github, key, appId, installationId) {
  // Create the JWT token
  const now = Math.ceil(Date.now() / 1000)
  const jwtPayload = {
    iat: now,
    exp: now + 8 * 60,
    iss: appId
  }
  const token = jwt.sign(jwtPayload, key, { algorithm: 'RS256' })

  github.authenticate({
    type: 'integration',
    token
  })

  // Get the real github token
  const tokenInfo = await github.integrations.createInstallationToken({
    installation_id: installationId
  })

  return tokenInfo.data.token
}
