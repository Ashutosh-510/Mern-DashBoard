const express = require("express");
const router = express.Router();

const RevenueController = require("../Contoller/RevenueDashboardController.js");

router.get("/getRevenueData", RevenueController.getRevenueData);

module.exports = router;
