const mongoose = require('mongoose');

const comingSoonSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Announcement text is required'],
    trim: true,
    minlength: [3, 'Text must be at least 3 characters long']
  },
  image: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        // Allow empty string or valid URL
        return !v || /^(http|https):\/\/[^ "]+$/.test(v);
      },
      message: props => `${props.value} is not a valid URL`
    }
  },
  activeTimer: {
    type: Date,
    required: [true, 'Active timer is required'],
    validate: {
      validator: function(v) {
        return v instanceof Date && !isNaN(v);
      },
      message: 'Invalid date format'
    }
  }
}, {
  timestamps: true
});

// Add index for sorting by activeTimer
comingSoonSchema.index({ activeTimer: 1 });

module.exports = mongoose.model('ComingSoon', comingSoonSchema);
