require('colors');
const { default: mongoose } = require("mongoose");
const ApiError = require("../utils/ApiError");

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected successfully".green);
  } catch (error) {
    console.log("Error connection in database".red);
    return new ApiError("database error connection", 500);
  }
};
