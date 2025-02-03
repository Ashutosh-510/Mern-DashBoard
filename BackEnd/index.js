const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const dashboardRoutes = require("./Routes/dashboardRoutes");
const employerRoutes = require("./Routes/employerRoute");
const candidateRoute = require("./Routes/candidateRoute");
const JobpostedRoutes = require("./Routes/jobpostedRoute");
const revenueRoutes = require("./Routes/revenueRoute");

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/employer", employerRoutes);
app.use("/api/candidate", candidateRoute);
app.use("/api/JobPosted", JobpostedRoutes);
app.use("/api/revenue", revenueRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
