const express = require("express");

const router = express.Router();
const productsRoutes = require("./products");

router.use("/api/products", productsRoutes);


module.exports = router;