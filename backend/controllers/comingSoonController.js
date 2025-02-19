const ComingSoon = require('../models/ComingSoon');

// Get all announcements
exports.getComingSoon = async (req, res) => {
  try {
    const announcements = await ComingSoon.find().sort({ activeTimer: 1 });
    res.json(announcements);
  } catch (error) {
    console.error('Error retrieving announcements:', error);
    res.status(500).json({ message: 'Error retrieving announcements', error: error.message });
  }
};

// Create a new announcement
exports.createComingSoon = async (req, res) => {
  try {
    const { text, image, activeTimer } = req.body;

    // Validate required fields
    if (!text || !activeTimer) {
      return res.status(400).json({ message: 'Text and active timer are required' });
    }

    // Validate date
    const eventDate = new Date(activeTimer);
    if (isNaN(eventDate)) {
      return res.status(400).json({ message: 'Invalid date format' });
    }

    const announcement = new ComingSoon({
      text,
      image,
      activeTimer: eventDate
    });

    await announcement.save();
    res.status(201).json(announcement);
  } catch (error) {
    console.error('Error creating announcement:', error);
    res.status(500).json({ message: 'Error creating announcement', error: error.message });
  }
};

// Update an announcement
exports.updateComingSoon = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, image, activeTimer } = req.body;

    // Validate required fields
    if (!text || !activeTimer) {
      return res.status(400).json({ message: 'Text and active timer are required' });
    }

    // Validate date
    const eventDate = new Date(activeTimer);
    if (isNaN(eventDate)) {
      return res.status(400).json({ message: 'Invalid date format' });
    }

    const announcement = await ComingSoon.findByIdAndUpdate(
      id,
      { text, image, activeTimer: eventDate },
      { new: true }
    );

    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }

    res.json(announcement);
  } catch (error) {
    console.error('Error updating announcement:', error);
    res.status(500).json({ message: 'Error updating announcement', error: error.message });
  }
};

// Delete an announcement
exports.deleteComingSoon = async (req, res) => {
  try {
    const { id } = req.params;
    const announcement = await ComingSoon.findByIdAndDelete(id);

    if (!announcement) {
      return res.status(404).json({ message: 'Announcement not found' });
    }

    res.json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    console.error('Error deleting announcement:', error);
    res.status(500).json({ message: 'Error deleting announcement', error: error.message });
  }
};
