const userModel = require("../models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({}, {password: 0});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Something Went Wrong.", error: err });
  }
};



module.exports = {getAllUsers};
