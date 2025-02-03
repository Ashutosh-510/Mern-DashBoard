const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const dashboardRoutes = require("./Routes/dashboardRoutes");
const employerRoutes = require("./Routes/employerRoute");

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/employer", employerRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
