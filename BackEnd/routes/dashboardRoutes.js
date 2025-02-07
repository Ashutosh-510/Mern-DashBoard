const express = require("express");
const router = express.Router();
const dashBoardController = require("../contoller/dashBoardController.js");

router
  .get("/", dashBoardController.getData)
  .get("/", dashBoardController.getAnalyticsData);

module.exports = router;
