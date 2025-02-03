const express = require("express");
const router = express.Router();

const EmployeeController = require("../Contoller/EmployeeDashBoardController.js");

router.get("/", EmployeeController.getEmployeeData);

module.exports = router;