const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("../views/add-user");
});

module.exports = router;
