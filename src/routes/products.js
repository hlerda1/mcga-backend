const products = require("../controllers/products");

const router = require("express").Router();

router.get("/", products.getAll)
router.post("/", products.create);

module.exports = router;