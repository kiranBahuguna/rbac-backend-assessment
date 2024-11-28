const express = require("express");
const { authenticate, authorize } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/admin", authenticate, authorize(["Admin"]), (req, res) => {
  res.status(200).json({ message: "Welcome Admin!" });
});

router.get("/moderator", authenticate, authorize(["Moderator", "Admin"]), (req, res) => {
  res.status(200).json({ message: "Welcome Moderator!" });
});

router.get("/user", authenticate, authorize(["User", "Moderator", "Admin"]), (req, res) => {
  res.status(200).json({ message: "Welcome User!" });
});

module.exports = router;
