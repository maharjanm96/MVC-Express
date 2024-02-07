const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  try {
    const userExists = await userModel.findOne({ email: req.body.email });
    if (userExists)
      return res.status(409).json({ message: "Email already exists." });
    else {
      const user = await userModel.create(req.body);
      res.status(201).json({ message: "Account created successfully.", user });
    }
  } catch (err) {
    res.status(500).json({ message: "Something Went Wrong", error: err });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) return res.status(501).json({ message: "Email doesn't exist." });
    else {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!isValidPassword)
        return res.status(501).json({ message: "Password is invalid." });
      else {
        const accessToken = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
        const { password, ...rest } = user._doc;
        res.cookie("jwt", accessToken);
        res.json({ ...rest, accessToken });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(501).json({ message: "Something Went Wrong", error: err });
  }
};

module.exports = { registerUser, loginUser };
