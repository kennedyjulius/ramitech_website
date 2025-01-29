const CoverageArea = require("../models/CoverageArea");

// Create a new coverage area
exports.addCoverageArea = async (req, res) => {
  try {
    const { name, description } = req.body;
    const coverageArea = new CoverageArea({ name, description });
    await coverageArea.save();
    res.json({ message: "Coverage area added", data: coverageArea });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all coverage areas
exports.getCoverageAreas = async (req, res) => {
  try {
    const coverageAreas = await CoverageArea.find();
    res.json(coverageAreas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a coverage area
exports.deleteCoverageArea = async (req, res) => {
  try {
    await CoverageArea.findByIdAndDelete(req.params.id);
    res.json({ message: "Coverage area deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
