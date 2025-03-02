const CompanyDetail = require("../models/companyDetailsModel");

const getCompanyDetailsById = async (req, res) => {
  try {
    const { id } = req.params;
    let comDetails = await CompanyDetail.findById(id);

    if (!id) {
      return res.status(404).json({ message: "Id not found" });
    }

    return res.status(200).json({ success: true, data: comDetails });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const createCompanyDetails = async (req, res) => {
  try {
    const {
      companyName,
      companyType,
      companyContent,
      companyVision,
      companyBenefits,
      companyFounded,
      companyOrganizationType,
      companyTeamSize,
      companyContact,
    } = req.body;

    if (
      !companyName ||
      !companyType ||
      !companyContent ||
      !companyVision ||
      !companyBenefits ||
      !companyOrganizationType ||
      !companyTeamSize ||
      !companyContact ||
      !companyContact.companyUrl ||
      !companyContact.companyPhone ||
      !companyContact.companyEmail
    ) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const newCompany = new CompanyDetail({
      companyName,
      companyType,
      companyContent,
      companyVision,
      companyBenefits,
      companyFounded,
      companyOrganizationType,
      companyTeamSize,
      companyContact,
    });

    await newCompany.save();
    res.status(201).json({
      message: "Company details added successfully!",
      data: newCompany,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


const deleteCompanyDetails = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Company ID is required!" });
    }

    const deletedCompany = await CompanyDetail.findByIdAndDelete(id);

    if (!deletedCompany) {
      return res.status(404).json({ message: "Company not found!" });
    }

    return res.status(200).json({
      success: true,
      message: "Company details deleted successfully!",
    });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = { getCompanyDetailsById, createCompanyDetails, deleteCompanyDetails };



