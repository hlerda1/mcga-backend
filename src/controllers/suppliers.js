const Suppliers = require("../models/suppliers");

const getAll = (req, res) => {
    Suppliers.find({ isDeleted: false })
      .then((data) => res.json({ data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
  }

const getSupplier = (req, res) => {
    Suppliers.find({ id: req.params.id })
      .then((data) => res.json({ data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
  }

const create = (req, res) => {
    const newSupplier = {
        id: req.body.id,
        name: req.body.name,
    };
    Suppliers.create(newSupplier)
        .then((data) => res.json({ msg: "Supplier added: ", data }))
        .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

const deleteSupp = (req, res) => {
    Suppliers.updateOne({id: req.params.id},{$set:{isDeleted: true}})
        .then((data) => res.json({ msg: "Supplier deleted: ", data }))
        .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

const updateSupp = (req, res) => {
    // const newSupplier = {
    //     // id: req.body.id,
    //     name: req.body.name,
    // };
    Suppliers.updateOne({id: req.params.id},{$set:{name: req.body.name}})
        .then((data) => res.json({ msg: "Supplier updated: ", data }))
        .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

  module.exports = {
    getAll,
    create,
    getSupplier,
    deleteSupp,
    updateSupp,
  };