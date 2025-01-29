const express = require("express");
const { addInternetPackage, getInternetPackages } = require("../controllers/internetPackagesController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addInternetPackage);
router.get("/", getInternetPackages);

module.exports = router;
