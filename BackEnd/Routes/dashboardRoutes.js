const express = require("express");
const router = express.Router();
const dashBoardController = require("../Contoller/dashBoardController.js");

router.get("/", dashBoardController.getData);

module.exports = router;