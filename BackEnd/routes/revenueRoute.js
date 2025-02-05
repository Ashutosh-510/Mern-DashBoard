const express = require("express");
const router = express.Router();

const RevenueController = require("../Contoller/revenueDashboardController.js");

router.get("/getRevenueData", RevenueController.getRevenueData);

module.exports = router;
