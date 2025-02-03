const getJobPostedData = async (req, res) => {
  try {
    const JobpostedData = {
      NewJobPosted: 3000,
      TotalJobPosted: 3000,
      TotalActiveJobs: 500,
      ExpiredJobs: 2500,
    };
    res.status(200).json({ message: JobpostedData });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getJobPostedData,
};
