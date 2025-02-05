const express = require("express");
const router = express.Router();

const companyDetailsController = require("../contoller/companyDetailscontroller/companyDetailsContoller");

router.post("/postCompanyDetails", companyDetailsController.postCompanyDetails);

module.exports = router;
