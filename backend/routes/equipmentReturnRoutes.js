const express = require('express');
const router = express.Router();
const equipmentReturnController = require('../controllers/equipmentReturnController');

// POST route to create equipment return entry
router.post('/equipment-returns', equipmentReturnController.createEquipmentReturn);

// GET route to get all equipment return records
router.get('/equipment-returns', equipmentReturnController.getEquipmentReturns);

// PUT route to update equipment return status
router.put('/equipment-returns/:returnId/status', equipmentReturnController.updateEquipmentReturnStatus);

module.exports = router;
