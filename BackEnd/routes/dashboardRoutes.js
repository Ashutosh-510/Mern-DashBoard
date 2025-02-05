const express = require("express");
const router = express.Router();
const dashBoardController = require("../Contoller/dashBoardController.js");

router
  .get("/", dashBoardController.getData)
  .get("/", dashBoardController.getAnalyticsData);

module.exports = router;
