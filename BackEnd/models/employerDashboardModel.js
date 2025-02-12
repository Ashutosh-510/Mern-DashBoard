const mongoose = require("mongoose");

const employersData = new mongoose.Schema({
  newEmployer: {
    type: Number,
    default: 0,
  },
  TotalEmployers: {
    type: Number,
    default: 0,
  },
  activeEmployers: {
    type: Number,
    default: 0,
  },
  topEmployer: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Employer", employersData);
