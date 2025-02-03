const getJobPostedData = async (req, res) => {
  try {
    const JobpostedData = {
      summary: {
        NewJobPosted: 3000,
        TotalJobPosted: 3000,
        TotalActiveJobs: 500,
        ExpiredJobs: 2500,
      },
      changes: {
        NewJobPosted: "2.3% Down from yesterday",
        TotalJobPosted: "8.5% Last updated on 12PM",
        TotalActiveJobs: "4.3% Down from yesterday",
        ExpiredJobs: "1.3% Last 7 days",
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
    res.status(200).json({ message: JobpostedData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getJobPostedData,
};
