const express = require("express");
const { addInternetPackage, getInternetPackages } = require("../controllers/internetPackagesController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Protected route for adding packages
router.post("/", protect, addInternetPackage);

// Public route for getting packages
router.get("/", getInternetPackages);

module.exports = router;
