const express = require("express");
const { registerUser, loginUser, logoutUser, verifyUser } = require("../controllers/userController");

const router = express.Router();

// ✅ Register User
router.post("/register", registerUser);

// ✅ Login User
router.post("/login", loginUser);

// ✅ Logout User
router.post("/logout", logoutUser);

// ✅ Verify Authentication
router.get("/verify", verifyUser);

module.exports = router;
