const path = require("path");

const express = require("express");

const userController = require("../controller/user");

const router = express.Router();

// /admin/add-user => GET
router.get("/add-user", userController.getAddProduct);

// /admin/add-user => POST
router.post("/add-user", userController.postAddProducts);

router.post("/friends");

module.exports = router;
