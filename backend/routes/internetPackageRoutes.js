const express = require("express");
const { 
  addInternetPackage, 
  getInternetPackages, 
  updateInternetPackage,
  deleteInternetPackage 
} = require("../controllers/internetPackagesController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Protected route for adding packages
router.post("/", protect, addInternetPackage);

// Protected route for updating packages
router.put("/:id", protect, updateInternetPackage);

// Protected route for deleting packages
router.delete("/:id", protect, deleteInternetPackage);

// Public route for getting packages
router.get("/", getInternetPackages);

module.exports = router;
