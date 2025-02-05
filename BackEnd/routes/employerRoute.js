const express = require("express");
const router = express.Router();

const EmployeeController = require("../Contoller/employeeDashBoardController");

router.get("/getEmployeeData", EmployeeController.getEmployeeData);

module.exports = router;
