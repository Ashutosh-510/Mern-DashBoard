const mongoose = require("mongoose");

const candidateData = new mongoose.Schema({
  newCandidate: {
    type: Number,
    default: 0,
  },
  totalCandidate: {
    type: Number,
    default: 0,
  },
  activeCandidate: {
    type: Number,
    default: 0,
  },
  topCandidate: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("candidate", candidateData);
