const { check } = require("express-validator");
const validatorMiddleware = require("../middlewares/validatorMiddleware");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const ApiError = require("../utils/ApiError");

exports.registerValidator = [
  check("name")
    .notEmpty()
    .withMessage("name required")
    .isLength({ min: 2 })
    .withMessage("must be 2 character or more"),
  check("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("Please enter a valid email")
    // check if email is used or not
    .custom(async (value, { req }) => {
      const isUsed = await User.findOne({ email: value });
      if (isUsed) {
        throw new ApiError("this email already used", 400);
      }
      return true;
    }),
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 4 })
    .withMessage("Too short password"),
  check("passwordConfirm")
    .notEmpty()
    .withMessage("password confirmation is required")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("password confirmation is incorrect");
      }
      return true;
    }),
  validatorMiddleware,
];

exports.loginValidator = [
  check("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .notEmpty()
    .withMessage("email is required")
    .custom(async (value, { req }) => {
      const user = await User.findOne({ email: value });
      req.user = user;
      if (!user) {
        throw new ApiError("email or password is incorrect", 401);
      }
      return true;
    }),
  check("password")
    .isLength({ min: 4 })
    .withMessage("password must be 4 character or more")
    .notEmpty()
    .withMessage("enter your password")
    .custom(async (value, { req }) => {
      const user = req.user;
      if (user) {
        const isCorrect = await bcrypt.compare(value, user.password);
        if (!isCorrect) {
          throw new ApiError("email or password is incorrect", 401);
        }
        return true;
      }
    }),
  validatorMiddleware,
];
