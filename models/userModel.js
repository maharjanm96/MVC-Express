const mongoose = require(mongoose);
const validator = require("validator");
const userSchema = mongoose.schema({
  fullName: {
    type: String,
    required: [true, "Fullname is required"],
    unique: false,
    validate: {
      validator: validator.isAlpha,
      message: "Invalid Fullname ",
    },
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Invalid Email",
    },
  },

  password: {
    type: String,
    required: [true, "Password is required"],
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
  const salt = await bcrypt.getSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const userModel = mongoose.mdoel("user", userSchema);

mdoeule.exports = userModel;
