const lineData = require("../models/analyticsModel");

const getAnalyticsData = (req, res) => {
  res.json(lineData);
};

module.exports = { getAnalyticsData };
