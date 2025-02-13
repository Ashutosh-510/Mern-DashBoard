const EmployersData = require("../models/employerDashboardModel");

// Get EmployeesData
const getEmployeesData = async (req, res) => {
  try {
    const employersData = await EmployersData.find();
    if (!employersData) {
      return res.status(404).json({ message: "No employer data found" });
    }
    res.status(200).json(employersData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add New Emloyers
const addnewEmployers = async (req, res) => {
  try {
    let employersData = await EmployersData.find();

    if (!employersData) {
      employersData = new EmployersData({
        newEmployer: 1,
        totalEmployers: 1,
        activeEmployers: 1,
      });
    } else {
      employersData.newEmployer += 1;
      employersData.totalEmployers += 1;
      employersData.activeEmployers += 1;
    }

    await employersData.save();

    res
      .status(201)
      .json({ message: "Employer added successfully", data: employersData });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

// Mark Employer AsDeactive
const deacticeEmployee = async (req, res) => {
  try {
    const employers = await EmployersData.findById(req.params.id);
    if (!employers || employers.activeEmployers === 0) {
      return res
        .status(400)
        .json({ message: "No active employers to deactivate" });
    }
    if (!employers.isActive) {
      return res.status(400).json({ message: "Employer is already inactive" });
    }

    employers.isActive = false;
    await employers.save();

    let employersData = await EmployersData.findOne();
    if (employersData && employersData.activeEmployers > 0) {
      employersData.activeEmployers -= 1;
      employersData.lastUpdated = Date.now();
      await employersData.save();
    }
    res
      .status(200)
      .json({ message: "Employer marked as inactive", data: employersData });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

// Top Employer count
const getTopEmployee = async (req, res) => {
  try {
    let employersData = await EmployersData.findOne();
    if (!employersData) {
      return res.status(400).json({ message: "Employer data not found" });
    }

    employersData.topEmployer += 1;
    employersData.lastUpdated = Date.now();
    await employersData.save();

    res.status(200).json({ message: "Top employer count update" });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};
/*Analytics: {
        jobPosted: 278532,
        candidates: 2000,
      },
      overview: {
        activeAccounts: 2000,
        deactivatedAccounts: 2000,
        verificationPending: 30,
      },*/

module.exports = {
  getEmployeesData,
  getTopEmployee,
  deacticeEmployee,
  addnewEmployers,
};
