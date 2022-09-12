const Products = require("../models/products");

const getAll = (req, res) => {
    Profiles.find({ isDeleted: false })
      .then((data) => res.json({ data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
  }

  const create = (req, res) => {
    const newProduct = {
      id: req.body.id,
      name: req.body.name,
    };
    Products.create(newProduct)
      .then((data) => res.json({ msg: "Product added: ", data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
  };

  module.exports = {
    getAll,
    create,
  };