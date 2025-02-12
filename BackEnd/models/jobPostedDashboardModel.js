const mongoose = require("mongoose");

const jobPostedSchema = new mongoose.Schema({
  totalJobs: {
    type: Number,
    default: 0,
  },
  newJobs: {
    type: Number,
    default: 0,
  },
  activeJobs: {
    type: Number,
    default: 0,
  },
  expiredJobs: {
    type: Number,
    default: 0,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
  newApplicants: {
    type: Number,
    default: 0,
  },
  Shortlist: {
    type: Number,
    default: 0,
  },
  shortlistReviewed: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("JobListing", JobListingSchema);
