const express = require('express');
const router = express.Router();
const comingSoonController = require('../controllers/comingSoonController');

// Get all announcements
router.get('/', comingSoonController.getComingSoon);

// Create a new announcement
router.post('/', comingSoonController.createComingSoon);

// Update an announcement
router.put('/:id', comingSoonController.updateComingSoon);

// Delete an announcement
router.delete('/:id', comingSoonController.deleteComingSoon);

module.exports = router;
