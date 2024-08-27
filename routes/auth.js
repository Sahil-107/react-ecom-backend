const router = require("express").Router();
const authController = require("../controllers/auth.js");

router.post("/signup", authController.postSignup);

module.exports = router;
