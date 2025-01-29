const express = require("express");
const { updateComingSoon, getComingSoon } = require("../controllers/comingSoonController");
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.put("/", authMiddleware, upload.single("image"), updateComingSoon);
router.get("/", getComingSoon);

module.exports = router;
