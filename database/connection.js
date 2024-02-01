const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database Connected Successfully.");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDatabase;
