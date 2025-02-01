const express = require("express");
const router = express.Router();
const dashBoardController = require("../Contoller/dashBoardController.js");
//const EmployeeDashBoard = require("../Contoller/EmployeeDashBoard.js");

router.get("/", dashBoardController.getData);
router.route("/Employer").get(dashBoardController.getEmployeeData);
router.route("/Candidate").get(dashBoardController.getCandidateData);
router.route("/JobPosted").get(dashBoardController.getJobPostedData);
module.exports = router;
