const express = require("express");
const router = express.Router();

const RevenueController = require("../contoller/revenueDashboardController.js");

router.get("/getRevenueData", RevenueController.getRevenueData);

module.exports = router;
