const dashboardData = require("../models/dashboardModel");

const getDashboardData = (req, res) => {
  res.json(dashboardData);
};

module.exports = { getDashboardData };
