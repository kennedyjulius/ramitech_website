const express = require("express");
const { addCoverageArea, getCoverageAreas, deleteCoverageArea } = require("../controllers/coverageAreaController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, addCoverageArea);
router.get("/", getCoverageAreas);
router.delete("/:id", protect, deleteCoverageArea);

module.exports = router;
