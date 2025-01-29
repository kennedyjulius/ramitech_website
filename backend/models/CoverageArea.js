const mongoose = require("mongoose");

const coverageAreaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model("CoverageArea", coverageAreaSchema);
