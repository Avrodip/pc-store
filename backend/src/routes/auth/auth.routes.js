const express = require("express")
const app = express();

const { AuthController } = require("../../controllers/auth.controllers")
const loginValidation = require("../../models/login.validator")
const userValidation = require("../../models/user.validator")

const authController = new AuthController();

const router = express.Router();

router.post("/register", userValidation, authController.userRegistration)
router.post("/login", loginValidation, authController.userLogin)
router.post("/getUserByID", authController.getUserDetailsByID)
router.post("/forgetPassword", authController.forgetPassword)
router.post("/verifyOtp",authController.verifyOtp)
module.exports = router;