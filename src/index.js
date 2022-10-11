const express = require('express')
const mongoose = require('mongoose')
const filesystem = require('fs')
// const products = require('../data/products.json')
// const companies = require('../data/companies.json')
// const employees = require('../data/employees.json')
const { restart } = require('nodemon')
const { json } = require('express')
const { exit } = require('process')
const app = express()
const router = require("./routes");

app.use(express.json());
app.use(express.static("public"));
app.use(router);

mongoose.connect('mongodb+srv://hlerda01:QBzkIuMc8cNIy3XS@clustermcga2022.q7tgwec.mongodb.net/MCGADATABASE?retryWrites=true&w=majority')
  .then(() => {
    console.log("🟢 DB Connected");
    app.listen(  4000 , () => {
      console.log(`🚗 Server running on port 4000`);
    });
  })
  .catch((err) => {
    console.log("🔴 There was an error on the DB connection method.");
    console.log(err);
  });


// READ APIS
// app.get('/products', (req, res) => {
//   res.json(products)
// })

// app.get('/products/:id', (req, res) => {
//   res.json(filterProducts(req.params.id))
// })

//Filtering function
const filterProducts = (id) => {
  let productos = products.filter(prod => prod.id == id)
  return productos  
}
// READ APIS
  

//REATE API
// app.post("/products/add", (req, res) => {
//   console.log(req.body)
//   const newProd = {
//     id: req.body.id,
//     name: req.body.name,
//     price: req.body.price,
//     category: req.body.category,
//     stock: req.body.stock
//   };
//   if (!newProd.id){
//     res.sendStatus(400);
//   }
//   products.push(newProd);
//   filesystem.writeFile("./data/products.json", JSON.stringify(products), (err) => {
//     //if (err) { res.sendError(500, 'Error While Saving Data'); }
//   });
//   res.json(newProd);
// });



// DELETE API
// app.delete("/products/delete/id/:id", (req, res) => {
//   let resp = '';
//   let idProduct = parseInt(req.params.id);
//   const index = products.findIndex(function (product) {return product.id == idProduct;});
//   index < 0 ? (resp = 'value not found'):(products.splice(index, 1), resp = `Deleted Value: ${idProduct}`);

//   filesystem.writeFile("./data/products.json", JSON.stringify(products), (err) => {
//     //if (err) { res.sendError(500, 'Error While Saving Data'); }
//   });
//   res.send(resp)
// })

// UPDATE API
// app.patch("/products/update/id/:id", (req, res) => {
//   let resp = '';
//   let idProduct = parseInt(req.params.id);
//   const index = products.findIndex(function (product) {return product.id == idProduct;});
//   index < 0 ? (resp = 'value not found'):(
//     products[index].id = req.body.id,
//     products[index].name = req.body.name, 
//     products[index].price = req.body.price,
//     products[index].category = req.body.category,
//     products[index].stock = req.body.stock,
//     resp = `Modified Value: ${products[index].id}`);
//   filesystem.writeFile("./data/products.json", JSON.stringify(products), (err) => {
//     //if (err) { res.sendError(500, 'Error While Saving Data'); }
//   });  
//   res.send(resp)
// })


//////*APIs for educational porpouses*//////
// app.get('/helloWorld', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/login', (req, res) => {
//   res.send('LOGIN')
// })

// app.get('/person/id/:id', (req, res) => {
//   res.json({
//     name: 'matias',
//     id: 1
//   })
// })

// app.get('/companies', (req, res) => {
//   res.json(companies)
// })

// app.get('/employees', (req, res) => {
//   res.json(employees)
// })

// app.get('/companies/:id', (req, res) => {
//   res.json(filtrarCompanies(req.params.id))
// })

// app.get('/employees/:id', (req, res) => {
//   res.json(filtrarEmployees(req.params.id))
// })

// const filtrarCompanies = (id) => {
//   let companias = companies.filter(comp => comp.id == id)
//   return companias  
// }

// const filtrarEmployees = (id) => {
//   let empleados = employees.filter(emp => emp.id == id)
//   return empleados  
// }
//////*APIs for educational porpouses*//////


// app.listen(3000, () => {
//   console.log(`Example app listening on port 4000`)
// })