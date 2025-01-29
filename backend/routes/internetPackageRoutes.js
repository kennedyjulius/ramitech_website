const express = require("express");
const { addInternetPackage, getInternetPackages } = require("../controllers/internetPackagesController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, addInternetPackage);
router.get("/", getInternetPackages);

module.exports = router;
