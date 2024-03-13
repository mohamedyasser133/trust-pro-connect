const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "username is required"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: [true, "email is required"],
    unique: [true, "email must be unique"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minLength: [4, "Too short password"],
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
