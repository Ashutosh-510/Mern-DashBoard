const express = require("express");
const router = express.Router();

const CandidateController = require("../Contoller/candidateDashBoardController");

router.get("/getCandidateData", CandidateController.getCandidateData);

module.exports = router;
