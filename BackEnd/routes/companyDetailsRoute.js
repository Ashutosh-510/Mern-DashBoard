const express = require("express");
const router = express.Router();


const companyDetailsController = require("../contoller/companyDetailsController");

router.get("/getCompanyDetails", companyDetailsController.getCompanyDetails)

router.post("/createCompanyDetails", companyDetailsController.postCompanyDetails);
router.delete("/deletecomanybyid/:id", companyDetailsController.deleteCompanyDetails);

module.exports = router;

