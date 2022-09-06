const express = require('express')
const filesystem = require('fs')
const products = require('./data/products.json')
const companies = require('./data/companies.json')
const employees = require('./data/employees.json')
const { restart } = require('nodemon')
const { json } = require('express')
const { exit } = require('process')
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
    category: req.body.category,
    stock: req.body.stock
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

//Delete option, incomplete
// app.delete("/products/delete/id/:id", (req, res) => {
//   console.log(req.body) 
//   let resp = 'value not found' 
//   let id = 0;
//   id = req.params.id;
//   for(let i = 0; i < products.length; i++){
//     if(id == products[i].id){
//       products.splice(i, 1);
//       resp = 'Deleted Value: ' + id
//     }
//     // id == products[i].id ? (products.splice(i, 1), resp = 'Deleted Value: ' + id):();
//   }
//   filesystem.writeFile("./data/products.json", JSON.stringify(products), (err) => {
//     //if (err) { res.sendError(500, 'Error While Saving Data'); }
//   });
//   res.send(resp)
// })

//Delete Endpoint
app.delete("/products/delete/id/:id", (req, res) => {
  let resp = '';
  let idProduct = parseInt(req.params.id);
  const index = products.findIndex(function (product) {return product.id == idProduct;});
  index < 0 ? (resp = 'value not found'):(products.splice(index, 1), resp = 'Deleted Value: ' + idProduct);

  filesystem.writeFile("./data/products.json", JSON.stringify(products), (err) => {
    //if (err) { res.sendError(500, 'Error While Saving Data'); }
  });
  res.send(resp)
})

app.patch("/products/update/id/:id", (req, res) => {
  let resp = '';
  let idProduct = parseInt(req.params.id);
  const index = products.findIndex(function (product) {return product.id == idProduct;});
  index < 0 ? (resp = 'value not found'):(
    products[index].id = req.body.id,
    products[index].name = req.body.name, 
    products[index].price = req.body.price,
    products[index].category = req.body.category,
    products[index].stock = req.body.stock,
    resp = 'Modified Value: \n' + products[index].id);
  filesystem.writeFile("./data/products.json", JSON.stringify(products), (err) => {
    //if (err) { res.sendError(500, 'Error While Saving Data'); }
  });  
  res.send(resp)
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
  res.json(filterProducts(req.params.id))
})

app.get('/companies/:id', (req, res) => {
  res.json(filtrarCompanies(req.params.id))
})

app.get('/employees/:id', (req, res) => {
  res.json(filtrarEmployees(req.params.id))
})

const filterProducts = (id) => {
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