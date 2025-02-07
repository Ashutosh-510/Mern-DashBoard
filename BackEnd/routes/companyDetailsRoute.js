const express = require("express");
const router = express.Router();


const companyDetailsController = require("../contoller/companyDetailsController");

router.get("/getCompanyDetailsById/:id", companyDetailsController.getCompanyDetailsById)

router.post("/createCompanyDetails", companyDetailsController.createCompanyDetails);
router.delete("/deleteCompanyDetails/:id", companyDetailsController.deleteCompanyDetails);

module.exports = router;

