const express = require("express");
const connectDatabase = require("./database/connection");
require("dotenv").config();
const port = 8000;

//Importing Routes
const homeRoutes = require("./routes/homeRoute");
const userRoutes = require("./routes/userRoute");
const errorRoutes = require("./routes/errorRoute");

const app = express();
connectDatabase();

app.use("/api/", homeRoutes);
app.use("/api/", userRoutes);
app.use("/api/", errorRoutes);

app.listen(port, () => {
  console.log(`Server Started At PORT ${port}`);
});
