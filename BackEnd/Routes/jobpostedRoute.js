const express = require("express");
const router = express.Router();

const JobPostedController = require("../Contoller/JobPostedDashBoardController.js");

router.get("/GetJobPosted", JobPostedController.getJobPostedData);

module.exports = router;
