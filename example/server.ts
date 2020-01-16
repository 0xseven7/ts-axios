import express from 'express'
import bodyParser from 'body-parser'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevMiddleware from 'webpack-dev-middleware'
import WebpackConfig from './webpack.config'
import webpack = require('webpack')

const config = new WebpackConfig('development')
const compiler = webpack(config)

const app = express()
const router = express.Router()

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/build/',
    stats: {
      colors: true,
      chunks: false
    }
  })
)
app.use(webpackHotMiddleware(compiler))
app.use(express.static(__dirname))
router.get('/webpack', (req, res) => {
  res.json(config)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
router.get('/simple/get', (req, res) => {
  res.json({
    msg: 'hello world'
  })
})
router.post('/base/post', (req, res) => {
  res.json(req.body)
})
router.get('/user/get', (req, res) => {
  res.json({
    code: 0,
    result: {
      name: 'zx',
      age: 28
    },
    message: 'success'
  })
})

router.post('/extend/post', (req, res) => {
  res.json(req.body)
})
router.post('/base/buffer', (req, res) => {
  let msg: Buffer[] = []
  req.on('data', (chunk) => {
    if (chunk) {
      msg.push(chunk)
    }
  })
  req.on('end', () => {
    let buf = Buffer.concat(msg)
    console.log(buf)
    res.json(buf.toJSON())
  })
})

app.use(router)
app.listen(10000, () => {
  console.log('server listen at 9999')
})
