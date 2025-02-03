const express = require("express");
const router = express.Router();
const dashBoardController = require("../Contoller/dashBoardController.js");


const JobPostedController = require("../Contoller/JobPostedDashBoardController.js");
const RevenueController = require("../Contoller/RevenueDashboardController.js");

router
  .get("/", dashBoardController.getData)
  .get("/", dashBoardController.getAnalyticsData);


router.route("/JobPosted").get(JobPostedController.getJobPostedData);

router.route("/Revenue").get(RevenueController.getRevenueData);
module.exports = router;