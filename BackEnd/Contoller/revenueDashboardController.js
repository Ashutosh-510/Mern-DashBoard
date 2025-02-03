const getRevenueData = async (req, res) => {
  try {
    const RevenueData = {
      summary: {
        TotalSubscription: 4000,
        TotalRevenue: "2m",
        ActiveSubscription: 3500,
        NotSubscribed: 500,
      },
      changes: {
        TotalSubscriptionChange: "2.3% Down from yesterday",
        TotalRevenue: "8.5% Up from Yesterday",
        ActiveSubscription: "4.3 Down from yesterday",
        NotSubscribed: "1.3% Up from Yesterday",
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
  getRevenueData,
};
