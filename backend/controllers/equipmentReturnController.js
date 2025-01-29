const EquipmentReturn = require('../models/EquipmentReturn');
const Admin = require('../models/Admin'); // Import the Admin model

// Create a new equipment return entry
const createEquipmentReturn = async (req, res) => {
  try {
    const { equipmentName, returnDate, adminId } = req.body;

    const admin = await Admin.findById(adminId);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    const equipmentReturn = new EquipmentReturn({
      equipmentName,
      returnDate,
      adminProcessed: admin._id,
    });

    await equipmentReturn.save();
    res.status(201).json({ message: 'Equipment return recorded successfully', equipmentReturn });
  } catch (err) {
    res.status(500).json({ message: 'Error creating equipment return', error: err });
  }
};

// Get all equipment returns
const getEquipmentReturns = async (req, res) => {
  try {
    const equipmentReturns = await EquipmentReturn.find().populate('adminProcessed', 'username'); // Populating admin info
    res.status(200).json(equipmentReturns);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching equipment returns', error: err });
  }
};

// Update equipment return status
const updateEquipmentReturnStatus = async (req, res) => {
  try {
    const { returnId } = req.params;
    const { status } = req.body;

    const equipmentReturn = await EquipmentReturn.findById(returnId);
    if (!equipmentReturn) {
      return res.status(404).json({ message: 'Equipment return record not found' });
    }

    equipmentReturn.status = status;
    await equipmentReturn.save();
    res.status(200).json({ message: 'Equipment return status updated', equipmentReturn });
  } catch (err) {
    res.status(500).json({ message: 'Error updating status', error: err });
  }
};

module.exports = {
  createEquipmentReturn,
  getEquipmentReturns,
  updateEquipmentReturnStatus,
};
