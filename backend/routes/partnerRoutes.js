const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  addPartner,
  getPartners,
  updatePartner,
  deletePartner,
} = require("../controllers/partnerController");

const router = express.Router();

// Public route to get partners
router.get("/", getPartners);

// Protected routes for admin operations
router.post("/", protect, addPartner);
router.put("/:id", protect, updatePartner);
router.delete("/:id", protect, deletePartner);

module.exports = router;
