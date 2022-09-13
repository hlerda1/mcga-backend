const suppliers = require("../controllers/suppliers");

const router = require("express").Router();

router.get("/", suppliers.getAll)
router.get("/:id", suppliers.getSupplier)
router.delete("/:id", suppliers.deleteSupp)
router.patch("/:id", suppliers.updateSupp)
router.post("/", suppliers.create);

module.exports = router;