const mongoose = require("mongoose");

const comingSoonSchema = new mongoose.Schema({
  text: { type: String, required: true },
  image: { type: String, required: true }, // URL or path to the image
  activeTimer: { type: Date, required: true },
});

module.exports = mongoose.model("ComingSoon", comingSoonSchema);
