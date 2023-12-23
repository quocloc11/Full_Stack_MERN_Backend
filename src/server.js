
import express from 'express'
const app = express()

const hostname = 'localhost'
const port = 8017

app.get('/', function (req, res) {
  res.send('<h1>Hello</h1>')
})

app.listen(port, hostname, () => {
  console.log(`hello loc http://${hostname}:${port}/`)
})