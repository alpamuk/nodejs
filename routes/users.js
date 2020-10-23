const express = require("express");
const path = require("path");
const router = express.Router();
//console.log('asderrr');
const userController = require("../controller/user");
const friendController = require("../controller/friends");

router.get("/", userController.getUserList);

router.post("/friends", friendController.postUserFriends);

module.exports = router;
