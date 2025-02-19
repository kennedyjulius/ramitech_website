const mongoose = require("mongoose");

const internetPackageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Package name is required'],
    trim: true
  },
  speed: {
    type: String,
    required: [true, 'Package speed is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Package price is required'],
    min: [0, 'Price cannot be negative'],
    validate: {
      validator: Number.isFinite,
      message: 'Price must be a valid number'
    }
  }
}, {
  timestamps: true
});

// Add index for sorting by price
internetPackageSchema.index({ price: 1 });

module.exports = mongoose.model("InternetPackage", internetPackageSchema);
