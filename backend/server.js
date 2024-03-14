require("colors");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const path = require("path");
const authRoutes = require("./routes/authRoutes");
const { connectDB } = require("./middlewares/connectDB");
const { globalError } = require("./middlewares/errorMiddleware");
const ApiError = require("./utils/ApiError");

// connect with database
connectDB();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// routes
app.use("/api/v1", authRoutes);

// handle all route
app.all("*", (req, res, next) => {
  // const error = new Error(`can't find route match this url ${req.originalUrl}`)
  next(new ApiError(`can't find route match this url ${req.originalUrl}`, 400));
});

// global error handle middleware
app.use(globalError);

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, "0.0.0.0", (err) => {
  if (!err) {
    console.log("app listening on port " + PORT);
  }
});

process.on("unhandledRejection", (err) => {
  console.log(`rejection unhandled error ${err.name} -> ${err.message}`.red);
  // if have a pending request => server close after end it
  server.close(() => {
    console.log("shutting down application ...".red);
    // close app
    process.exit(1);
  });
});
