const mongoose = require("mongoose");

const dashBoardSchema = new mongoose.Schema({
  dashBoard: {
    employers: {
      type: Number,
      required: true,
    },
    candidates: {
      type: Number,
      required: true,
    },
    jobsPosted: {
      type: Number,
      required: true,
    },
    revenue: {
      type: Number,
      required: true,
    },
    jobPostChange: {
      type: Number,
      required: true,
    },
    revenueChange: {
      type: Number,
      required: true,
    },
  },
  analytics: {
    date: {
      type: Date,
      default: Date.now(),
    },
    empolyer: {
      type: Number,
      required: true,
    },
    candidate: {
      type: Number,
      required: true,
    },
    jobs: {
      type: Number,
      required: true,
    },
    revenue: {
      type: Number,
      required: true,
    },
  },
  // { date: "1 Mar", employer: 1.5, candidate: 2.2, jobs: 1.8, revenue: 2.4 },
  // { date: "2 Mar", employer: 2.0, candidate: 2.5, jobs: 1.7, revenue: 2.8 },
  // { date: "3 Mar", employer: 2.5, candidate: 3.0, jobs: 2.0, revenue: 3.1 },
  // { date: "4 Mar", employer: 2.8, candidate: 3.2, jobs: 2.1, revenue: 3.4 },
  // { date: "5 Mar", employer: 3.0, candidate: 3.5, jobs: 2.4, revenue: 3.8 },
  // { date: "6 Mar", employer: 3.2, candidate: 3.8, jobs: 2.5, revenue: 4.0 },
});

module.exports = mongoose.model("DashBoard", { dashBoardSchema });
