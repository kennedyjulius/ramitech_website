const express = require("express");
const { addService, getServices } = require("../controllers/servicesController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addService);
router.get("/", getServices);

module.exports = router;
