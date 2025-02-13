const express = require("express");
const router = express.Router();

const EmployeeController = require("../contoller/employeeDashBoardController");

router.get("/getEmployeesData", EmployeeController.getEmployeesData);
router.put("/getTopEmployee", EmployeeController.getTopEmployee);
router.put("/deactivate/:id", EmployeeController.deacticeEmployee);
router.post("/add", EmployeeController.addnewEmployers);

module.exports = router;
