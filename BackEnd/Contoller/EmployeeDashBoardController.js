const getEmployeeData = async (req, res) => {
  try {
    const Employerdata = {
      summary: {
        NewEmployer: 12,
        TotalEmployers: 55000,
        ActiveEmployer: 10000,
        TopEmployer: 3.42,
      },
      changes: {
        NewEmployer: "2.3% Down from yesterday",
        TotalEmployers: "8.5% Last updated on 12PM",
        ActiveEmployer: "4.3% Down from yesterday",
        TopEmployer: "1.3% Last 7 days",
      },
    };

    return res.status(200).json({ message: Employerdata });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getEmployeeData,
};
