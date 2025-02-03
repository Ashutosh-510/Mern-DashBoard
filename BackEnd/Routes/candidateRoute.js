const express = require("express");
const router = express.Router();

const CandidateController = require("../Contoller/candidateDashBoardController.js");

router.get("/getCandidateData", CandidateController.getCandidateData);

module.exports = router;
