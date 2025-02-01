const DashBoard = require("../Models/dashBoardModel");

const getData = async (req, res) => {
  try {
    const data = {
      employers: 2000,
      candidates: 55000,
      jobsPosted: 10000,
      revenue: 3.42,
      jobPostChange: -4.3,
      revenueChange: 1.8,
    };

    return res.status(200).json({ message: data });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const getEmployeeData = async (req, res) => {
  try {
    const Employerdata = {
      NewEmployer: 12,
      TotalEmployers: 55000,
      ActiveEmployer: 10000,
      TopEmployer: 3.42,
    };

    return res.status(200).json({ message: Employerdata });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = { getData, getEmployeeData };
