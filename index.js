const express = require('express')
const products = require('./data/products.json')
const companies = require('./data/companies.json')
const employees = require('./data/employees.json')
const app = express()
const port = 3000

app.get('/helloWorld', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('LOGIN')
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

app.get('/companies', (req, res) => {
  res.json(companies)
})

app.get('/employees', (req, res) => {
  res.json(employees)
})

app.get('/products/:id', (req, res) => {
  res.json(filtrarProducts(req.params.id))
})

app.get('/companies/:id', (req, res) => {
  res.json(filtrarCompanies(req.params.id))
})

app.get('/employees/:id', (req, res) => {
  res.json(filtrarEmployees(req.params.id))
})

const filtrarProducts = (id) => {
  let productos = products.filter(prod => prod.id == id)
  return productos  
}

const filtrarCompanies = (id) => {
  let companias = companies.filter(comp => comp.id == id)
  return companias  
}

const filtrarEmployees = (id) => {
  let empleados = employees.filter(emp => emp.id == id)
  return empleados  
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})