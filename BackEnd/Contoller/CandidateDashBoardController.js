const getCandidateData = async (req, res) => {
  try {
    const CandidateData = {
      summary: {
        NewCandidate: 12,
        TotalCandidate: 2000,
        ActiveCandidate: 400,
        CandidateHired: 1000,
      },
      changes: {
        NewCandidate: "2.3% Down from yesterday",
        TotalCandidate: "8.5% Last updated on 12PM",
        ActiveCandidate: "4.3% Down from yesterday",
        CandidateHired: "1.3% Last 7 days",
      },
      Analytics: {
        jobPosted: 278532,
        candidates: 2000,
      },
      overview: {
        activeAccounts: 2000,
        deactivatedAccounts: 2000,
        verificationPending: 30,
      },
    };

    res.status(200).json({ message: CandidateData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// export
module.exports = {
  getCandidateData,
};
