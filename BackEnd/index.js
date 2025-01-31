const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const dashboardRoutes = require("./Routes/dashboardRoutes");

app.use("/api/dashboard", dashboardRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
