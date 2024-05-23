const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userControllers");
const authUser = require("../middlewares/authentication");

router.post("/sign-up", registerUser);
router.post("/login", loginUser);

module.exports = router;
