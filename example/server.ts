import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const router = express.Router()
app.get('/simple/hello', (req, res) => {
  res.json(req.query)
})
app.get('')
app.use(router)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(9999, () => {
  console.log('server listen at 9999')
})
