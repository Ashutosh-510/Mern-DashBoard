const getCandidateData = async (req, res) => {
  try {
    const CandidateData = {
      NewCandidate: 12,
      TotalCandidate: 2000,
      ActiveCandidate: 400,
      CandidateHired: 1000,
    };

    res.status(200).json({ message: CandidateData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getCandidateData,
};
