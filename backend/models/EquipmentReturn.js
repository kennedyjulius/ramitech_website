const mongoose = require('mongoose');

const equipmentReturnSchema = new mongoose.Schema({
  equipmentName: {
    type: String,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['returned', 'pending'],
    default: 'pending',
  },
  adminProcessed: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    required: true,
  },
}, {
  timestamps: true,
});

const EquipmentReturn = mongoose.model('EquipmentReturn', equipmentReturnSchema);

module.exports = EquipmentReturn;
