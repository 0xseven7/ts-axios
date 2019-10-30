const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')
const router = express.Router()
const app = express()
const compiler = webpack(WebpackConfig)
router.get('/simple/get', (req, res) => {
  console.log(req.query);
  res.json(req.query)
})
router.post('/data/post', (req, res) => {
  console.log(reqes.body);
  res.json(req.body)
})
router.post('/data/buffer', (req, res) => {
  let msg = []
  req.on('data', (chunk) => {
    if (chunk) msg.push(chunk)
  })
  req.on('end', () => {
    let buf = Buffer.concat(msg)
    res.json(buf.toJSON())
  })
})
app.use(router)
app.use(webpackDevMiddleware(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})
