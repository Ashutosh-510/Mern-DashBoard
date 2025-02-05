const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const dashboardRoutes = require("./routes/dashboardRoutes");
const employerRoutes = require("./routes/employerRoute");
const candidateRoute = require("./routes/candidateRoute");
const JobpostedRoutes = require("./routes/jobpostedRoute");
const revenueRoutes = require("./routes/revenueRoute");
const companyDetails = require("./routes/companyDetailsRoute");

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/employer", employerRoutes);
app.use("/api/candidate", candidateRoute);
app.use("/api/JobPosted", JobpostedRoutes);
app.use("/api/revenue", revenueRoutes);
app.use("/api/companyDetails", companyDetails);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
