const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

// Get all images
router.get('/', imageController.getAllImages);

// Get single image
router.get('/:id', imageController.getImage);

// Upload local image
router.post('/upload', imageController.uploadLocalImage);

// Create network image
router.post('/network', imageController.createNetworkImage);

// Update image
router.put('/:id', imageController.updateImage);

// Delete image
router.delete('/:id', imageController.deleteImage);

module.exports = router;
