const lineData = require("../models/analyticsModel");

const getAnalyticsData = (req, res) => { //get api
  res.json(lineData);
};

module.exports = { getAnalyticsData };


