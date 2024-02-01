const express = require("express");
const port = 8000;
const app = express();

//Importing Routes
const homeRoutes = require("./routes/homeRoute");
const userRoutes = require("./routes/userRoute");
const errorRoutes = require("./routes/errorRoute");

app.use("/api/", homeRoutes);
app.use("/api/", userRoutes);
app.use("/api/", errorRoutes);

app.listen(port, () => {
  console.log(`Server Started At PORT ${port}`);
});
