const express = require("express");
const router = express.Router();

const JobPostedController = require("../contoller/jobPostedDashBoardController");

router.get("/GetJobPosted", JobPostedController.getJobPostedData);

module.exports = router;
