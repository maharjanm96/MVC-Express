const express = require("express");
const connectDatabase = require("./database/connection");
const logger = require("./middleware/logger");

const port = 8000;

//Importing Routes
const homeRoutes = require("./routes/homeRoute");
const userRoutes = require("./routes/userRoute");
const errorRoutes = require("./routes/errorRoute");


const app = express();
connectDatabase();
app.use(logger);
app.use(express.json());

app.use("/api", homeRoutes);
app.use("/api/users", userRoutes);
app.use("/api", errorRoutes);

app.listen(port, () => {
  console.log(`Server Started At  http://localhost:${port}`);
});
