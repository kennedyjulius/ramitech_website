const express = require('express');
const router = express.Router();
const comingSoonController = require('../controllers/comingSoonController');

// Update the Coming Soon section (admin only)
router.post('/', comingSoonController.updateComingSoon);  // This will be for updating

// Optionally, you can add a route to get the current "Coming Soon" section (optional)
router.get('/', comingSoonController.getComingSoon);

module.exports = router;
