const express = require("express");

const router = express.Router();
const productsRoutes = require("./products");
const suppliersRoutes = require("./suppliers");

router.use("/api/products", productsRoutes);
router.use("/api/suppliers", suppliersRoutes);


module.exports = router;