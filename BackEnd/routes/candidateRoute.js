const express = require("express");
const router = express.Router();

const CandidateController = require("../contoller/candidateDashBoardController");

router.get("/getCandidateData", CandidateController.getCandidateData);

module.exports = router;
