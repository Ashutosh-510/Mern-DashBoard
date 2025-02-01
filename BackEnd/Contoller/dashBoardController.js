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

const getCandidateData = async (req, res) => {
  try {
    const CandidateData = {
      NewCandidate: 12,
      TotalCandidate: 2000,
      ActiveCandidate: 400,
      CandidateHired: 1000,
    };

    res.status(200).json({ message: CandidateData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getJobPostedData = async (req, res) => {
  try {
    const JobpostedData = {
      NewJobPosted: 3000,
      TotalJobPosted: 3000,
      TotalActiveJobs: 500,
      ExpiredJobs: 2500,
    };
    res.status(200).json({ message: JobpostedData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getData,
  getEmployeeData,
  getCandidateData,
  getJobPostedData,
};
