const express = require('express')
const products = require('./data/products.json')
const app = express()
const port = 3000

app.get('/helloWorld', (req, res) => {
  res.send('Hello World!')
})

app.get('/person/id/:id', (req, res) => {
  res.json({
    name: 'matias',
    id: 1
  })
})

app.get('/products', (req, res) => {
  res.json(products)
})

app.get('/products/:id', (req, res) => {
  res.json(filtrar(req.params.id))
})

const filtrar = (id) => {
  let productos = products.filter(prod => prod.id == id)
  return productos
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})