const express = require("express");
const router = express.Router();

const companyDetailsController = require("../contoller/companyDetailsController");

router.get("/getCompanyDetails", companyDetailsController.getCompanyDetails)

module.exports = router;