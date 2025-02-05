const companyModel = require("./models/companyDetailsModel");

const postCompanyDetails = async (req, res) => {
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
      !campanyName ||
      !companyType ||
      !companyContent ||
      !companyVision ||
      !companyBenifits ||
      !companyFounded ||
      !companyOrginazationType ||
      !companyTeamSize ||
      !companyContact ||
      !companyContact.companyUrl ||
      !companyContact.companyPhone ||
      !companyContact.companyEmail
    ) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const newCompany = new companyModel({
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
      company: newCompany,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = {
  postCompanyDetails,
};
