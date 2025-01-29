const express = require("express");
const { addCoverageArea, getCoverageAreas, deleteCoverageArea } = require("../controllers/coverageAreaController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, addCoverageArea);
router.get("/", getCoverageAreas);
router.delete("/:id", authMiddleware, deleteCoverageArea);

module.exports = router;
