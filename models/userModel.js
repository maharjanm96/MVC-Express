const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: false,
    validate: {
      validator: validator.isAlpha,
      message: "Invalid Fullname ",
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  
  password: {
    type: String,
    required: true,
    validate: {
      validator: validator.isStrongPassword,
    },
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
