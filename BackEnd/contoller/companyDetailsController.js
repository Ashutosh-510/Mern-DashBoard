const CompanyDetail = require("../models/companyDetailsModel");

const createCompanyDetails = async (req, res) => {};

const getCompanyDetails = async (req, res) => {
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

module.exports = { getCompanyDetails };
