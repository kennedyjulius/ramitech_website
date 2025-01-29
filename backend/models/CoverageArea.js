const mongoose = require('mongoose');

const coverageAreaSchema = new mongoose.Schema({
  areaName: { type: String, required: true },
  details: { type: String, required: true },
  createdBy: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('CoverageArea', coverageAreaSchema);
