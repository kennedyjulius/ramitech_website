const Partner = require("../models/Partner");

// Add a partner
exports.addPartner = async (req, res) => {
  try {
    const { name, imageUrl, localImage } = req.body;
    
    // Ensure at least one image source is provided
    if (!imageUrl && !localImage) {
      return res.status(400).json({ 
        message: "Either imageUrl or localImage must be provided" 
      });
    }

    const partner = new Partner({
      name,
      imageUrl,
      localImage
    });

    await partner.save();
    res.status(201).json({ 
      message: "Partner added successfully", 
      data: partner 
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all active partners
exports.getPartners = async (req, res) => {
  try {
    const partners = await Partner.find({ active: true })
      .select('name imageUrl localImage')
      .sort('-createdAt');
    res.json(partners);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a partner
exports.updatePartner = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, imageUrl, localImage, active } = req.body;

    const partner = await Partner.findByIdAndUpdate(
      id,
      { name, imageUrl, localImage, active },
      { new: true }
    );

    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }

    res.json({ 
      message: "Partner updated successfully", 
      data: partner 
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a partner
exports.deletePartner = async (req, res) => {
  try {
    const { id } = req.params;
    const partner = await Partner.findByIdAndDelete(id);

    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }

    res.json({ message: "Partner deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
