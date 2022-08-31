const express = require('express')
const filesystem = require('fs')
const products = require('./data/products.json')
const companies = require('./data/companies.json')
const employees = require('./data/employees.json')
const { restart } = require('nodemon')
const { json } = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.post("/products/add", (req, res) => {
  console.log(req.body)
  const newProd = {
    // id: "1001",
    // name: "cherry - rootbeer",
    // price: "$4.56"
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
  };
  if (!newProd.id){
    res.sendStatus(400);
  }
  products.push(newProd);
  filesystem.writeFile("./data/products.json", JSON.stringify(products), (err) => {
    //if (err) { res.sendError(500, 'Error While Saving Data'); }
  });
  res.json(newProd);
});

app.delete("/products/delete", (req, res) => {
  console.log(req.body)
  
})

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