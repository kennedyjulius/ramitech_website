const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Partner name is required"],
  },
  imageUrl: {
    type: String,
    required: [true, "Partner image URL is required"],
  },
  // For local file uploads, we'll store the path
  localImage: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Partner", partnerSchema);
