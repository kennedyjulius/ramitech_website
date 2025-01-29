const ComingSoon = require('../models/ComingSoon');
const path = require('path');
const multer = require('multer');

// Multer setup for local image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/'); // Specify the directory where images will be saved
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Save file with a unique name
  },
});

const upload = multer({ storage }).single('image');  // Assuming the frontend sends a form field called "image"

// Function to handle the "Coming Soon" section update
exports.updateComingSoon = (req, res) => {
  upload(req, res, async (err) => {
    try {
      if (err) {
        return res.status(500).json({ message: "Error uploading image", error: err.message });
      }

      const { text, image, activeTimer } = req.body;

      // Check if required fields are present
      if (!text || !activeTimer) {
        return res.status(400).json({ message: "Text and event date are required" });
      }

      let imagePath = '';

      // If image is uploaded, use the file path
      if (req.file) {
        imagePath = `/uploads/${req.file.filename}`; // Path where the file is saved
      } else if (image) {
        // If image is provided as a URL, use it directly
        imagePath = image;
      }

      // Parse activeTimer to ensure it's a valid Date
      const eventDate = new Date(activeTimer);
      if (isNaN(eventDate)) {
        return res.status(400).json({ message: "Invalid event date" });
      }

      // Create or update the "Coming Soon" section
      const updatedComingSoon = await ComingSoon.findOneAndUpdate(
        {},  // Empty filter to update the first document
        { text, image: imagePath, activeTimer: eventDate },
        { new: true, upsert: true }  // Create if not found, return the updated document
      );

      // Return the updated "Coming Soon" data
      res.json(updatedComingSoon);

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  });
};

// Optionally, add a route to retrieve the "Coming Soon" data
exports.getComingSoon = async (req, res) => {
  try {
    const comingSoon = await ComingSoon.findOne();  // This assumes there's only one "Coming Soon" entry
    res.json(comingSoon);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving Coming Soon data", error: error.message });
  }
};
