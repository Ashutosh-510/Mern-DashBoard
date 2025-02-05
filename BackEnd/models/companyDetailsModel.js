const mongoose = require("mongoose");

const companyDetail = new mongoose.Schema({
  campanyName: {
    type: String,
    required: true,
  },
  companyType: {
    type: String,
    required: true,
  },
  companyContent: {
    type: String,
    required: true,
  },
  companyVision: {
    type: String,
    required: true,
  },
  companyBenifits: {
    type: String,
    required: true,
  },
  companyFounded: {
    type: Date,
    required: true,
  },
  companyOrginazationType: {
    type: String,
    required: true,
  },
  companyTeamSize: {
    type: Number,
    required: true,
  },

  companyContact: {
    companyUrl: {
      type: String,
      required: true,
    },
    companyPhone: {
      type: Number,
      required: true,
    },
    companyEmail: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model("companyDetail", companyDetail);