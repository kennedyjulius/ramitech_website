const express = require("express");
const { addService, getServices } = require("../controllers/servicesController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, addService);
router.get("/", getServices);

module.exports = router;
