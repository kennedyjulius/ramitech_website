const mongoose = require('mongoose');

const comingSoonSchema = new mongoose.Schema({
  text: { type: String, required: true },
  image: { type: String, required: true }, // This will be the URL or the path to the local image
  activeTimer: { type: Date, required: true },
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

module.exports = mongoose.model('ComingSoon', comingSoonSchema);
