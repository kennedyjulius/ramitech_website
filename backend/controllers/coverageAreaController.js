const CoverageArea = require('../models/CoverageArea'); // assuming you have a model for coverage areas

// Add a new coverage area
exports.addCoverageArea = async (req, res) => {
  try {
    const { areaName, details } = req.body;
    const coverageArea = new CoverageArea({
      areaName,
      details,
      createdBy: req.admin.username,  
    });

    await coverageArea.save();
    res.status(201).json(coverageArea);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all coverage areas
exports.getCoverageAreas = async (req, res) => {
  try {
    const areas = await CoverageArea.find();
    res.status(200).json(areas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a coverage area
exports.deleteCoverageArea = async (req, res) => {
  try {
    const area = await CoverageArea.findById(req.params.id);
    if (!area) return res.status(404).json({ message: "Coverage Area not found" });

    await area.remove();
    res.status(200).json({ message: "Coverage Area deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
