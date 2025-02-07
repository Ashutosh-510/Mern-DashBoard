const DashBoard = require("../models/dashBoardModel");

const getData = async (req, res) => {
  try {
    const data = {
      summary: {
        employers: 2000,
        candidates: 55000,
        jobsPosted: 10000,
        revenue: 3.42,
      },
      changes: {
        jobPostChange: -4.3,
        revenueChange: 1.8,
      },
    };

    return res.status(200).json({ message: data });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const analyticsData = [
  {
    date: "2025-02-01",
    employer: 2500,
    candidate: 53000,
    jobs: 10500,
    revenue: 3.5,
  },
  {
    date: "2025-02-02",
    employer: 2550,
    candidate: 53500,
    jobs: 10400,
    revenue: 3.6,
  },
  {
    date: "2025-02-03",
    employer: 2600,
    candidate: 54000,
    jobs: 10300,
    revenue: 3.7,
  },
  {
    date: "2025-03-01",
    employer: 2700,
    candidate: 55000,
    jobs: 10200,
    revenue: 3.8,
  },
  {
    date: "2025-03-02",
    employer: 2750,
    candidate: 55500,
    jobs: 10100,
    revenue: 3.9,
  },
];

const getAnalyticsData = async (req, res) => {
  const { year, Month } = req.query;
  let filteredData = analyticsData;

  if (year || Month) {
    filteredData = filteredData.filter((item) => {
      const date = new Date(item.date);
      if (year && date.getFullYear() !== parseInt(year)) return false;
      if (Month && date.getMonth() + 1 !== parseInt(Month)) return false;
      return true;
    });
  }

  // Group data by month
  const groupedData = filteredData.reduce((result, item) => {
    const date = new Date(item.date);
    const monthName = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    const key = `${monthName}-${year}`;

    if (!result[key]) {
      result[key] = { month: monthName, year, data: [] };
    }

    result[key].data.push(item);
    return result;
  }, {});

  res.json({
    status: "success",
    data: { analytics: Object.values(groupedData) },
  });
};

//const
module.exports = {
  getData,
  getAnalyticsData,
};
