const Image = require('../models/Image');
const multer = require('multer');
const path = require('path');

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb('Error: Images Only!');
  }
}).single('image');

// Get all images
exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single image
exports.getImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.json(image);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new image (local upload)
exports.uploadLocalImage = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err });
    }
    if (!req.file) {
      return res.status(400).json({ message: 'Please upload a file' });
    }

    try {
      const image = new Image({
        title: req.body.title,
        imageUrl: `/uploads/${req.file.filename}`,
        description: req.body.description,
        isLocal: true
      });

      const savedImage = await image.save();
      res.status(201).json(savedImage);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
};

// Create new image (network URL)
exports.createNetworkImage = async (req, res) => {
  try {
    const image = new Image({
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      description: req.body.description,
      isLocal: false
    });

    const savedImage = await image.save();
    res.status(201).json(savedImage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update image
exports.updateImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    if (req.body.title) image.title = req.body.title;
    if (req.body.imageUrl) image.imageUrl = req.body.imageUrl;
    if (req.body.description) image.description = req.body.description;

    const updatedImage = await image.save();
    res.json(updatedImage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete image
exports.deleteImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    await image.remove();
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
