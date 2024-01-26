const express = require("express")
const app = express();

const { AuthController } = require("../controllers/auth.controllers")
// const loginValidation = require("../models/login.validator")
// const userValidation = require("../models/user.validator")rs
const authController = new AuthController();

const router = express.Router();

// router.post("/login", loginValidation, authController.userLogin)
router.post("/register", authController.userRegistration)

module.exports = router;