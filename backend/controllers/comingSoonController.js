const ComingSoon = require("../models/ComingSoon");

// Create or update the Coming Soon section
exports.updateComingSoon = async (req, res) => {
  try {
    const { text, activeTimer } = req.body;
    const image = req.file ? req.file.path : null;

    let comingSoon = await ComingSoon.findOne();
    if (!comingSoon) {
      comingSoon = new ComingSoon({ text, image, activeTimer });
    } else {
      comingSoon.text = text;
      if (image) comingSoon.image = image;
      comingSoon.activeTimer = activeTimer;
    }
    await comingSoon.save();

    res.json({ message: "Coming Soon section updated", data: comingSoon });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Coming Soon details
exports.getComingSoon = async (req, res) => {
  try {
    const comingSoon = await ComingSoon.findOne();
    if (!comingSoon) return res.status(404).json({ message: "No data found" });
    res.json(comingSoon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
