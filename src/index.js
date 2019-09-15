import express from 'express'

let app = require('./server').default

if (module.hot) {
  module.hot.accept('./server', function() {
    // eslint-disable-next-line
    console.log('🔁  HMR Reloading `./server`...')
    try {
      app = require('./server').default
    } catch (error) {
      // eslint-disable-next-line
      console.error(error)
    }
  })
  // eslint-disable-next-line
  console.info('✅  Server-side HMR Enabled!')
}

const port = process.env.PORT || 3000

export default express()
  .use((req, res) => app.handle(req, res))
  .listen(port, function(err) {
    if (err) {
      // eslint-disable-next-line
      console.error(err)
      return
    }
    // eslint-disable-next-line
    console.log(`> Started on port ${port}`)
  })
