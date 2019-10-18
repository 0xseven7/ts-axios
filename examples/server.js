const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')
const router = express.Router()
const app = express()
console.log('sadsadsadsa')
const compiler = webpack(webpackConfig)
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/__build__/',
    stats: {
      color: true,
      chunks: false
    }
  })
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
router.get('/simple/get', (req, res) => {
  res.json({
    msg: 'hello world'
  })
})
router.get('/base/get', (req, res) => {
  res.json(req.query)
})
router.post('/base/post', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})
router.post('/base/buffer', (req, res) => {
  let msg = []
  req.on('data', chunk => {
    if (chunk) {
      msg.push(chunk)
    }
  })
  req.on('end', () => {
    let buf = Buffer.concat(msg)
    res.json(buf.toJSON())
  })
})
router.get('/error/get1', (req, res) => {
  res.end('no error')
})

app.use(router)
app.use(webpackHotMiddleware(compiler))
app.use(express.static(__dirname))

const port = process.env.PORT || 8888
module.exports = app.listen(port, () => {
  console.log('Server listening on ' + port)
})
