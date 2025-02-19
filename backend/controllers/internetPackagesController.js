const InternetPackage = require("../models/InternetPackage");

// Add an internet package
exports.addInternetPackage = async (req, res) => {
  try {
    const { name, speed, price } = req.body;
    
    // Validate required fields
    if (!name || !speed || price === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!name.trim()) {
      return res.status(400).json({ message: "Package name is required" });
    }

    if (!speed.trim()) {
      return res.status(400).json({ message: "Package speed is required" });
    }

    const numericPrice = Number(price);
    if (isNaN(numericPrice) || numericPrice <= 0) {
      return res.status(400).json({ message: "Please enter a valid price" });
    }

    const package = new InternetPackage({
      name: name.trim(),
      speed: speed.trim(),
      price: numericPrice
    });

    await package.save();
    res.status(201).json(package);
  } catch (err) {
    console.error('Error creating package:', err);
    res.status(500).json({ message: "Error creating package", error: err.message });
  }
};

// Get all packages
exports.getInternetPackages = async (req, res) => {
  try {
    const packages = await InternetPackage.find().sort({ price: 1 });
    res.json(packages);
  } catch (err) {
    console.error('Error retrieving packages:', err);
    res.status(500).json({ message: "Error retrieving packages", error: err.message });
  }
};

// Update a package
exports.updateInternetPackage = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, speed, price } = req.body;
    
    // Validate required fields
    if (!name || !speed || price === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!name.trim()) {
      return res.status(400).json({ message: "Package name is required" });
    }

    if (!speed.trim()) {
      return res.status(400).json({ message: "Package speed is required" });
    }

    const numericPrice = Number(price);
    if (isNaN(numericPrice) || numericPrice <= 0) {
      return res.status(400).json({ message: "Please enter a valid price" });
    }

    const updatedPackage = await InternetPackage.findByIdAndUpdate(
      id,
      {
        name: name.trim(),
        speed: speed.trim(),
        price: numericPrice
      },
      { new: true, runValidators: true }
    );

    if (!updatedPackage) {
      return res.status(404).json({ message: "Package not found" });
    }

    res.json(updatedPackage);
  } catch (err) {
    console.error('Error updating package:', err);
    res.status(500).json({ message: "Error updating package", error: err.message });
  }
};

// Delete a package
exports.deleteInternetPackage = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPackage = await InternetPackage.findByIdAndDelete(id);

    if (!deletedPackage) {
      return res.status(404).json({ message: "Package not found" });
    }

    res.json({ message: "Package deleted successfully" });
  } catch (err) {
    console.error('Error deleting package:', err);
    res.status(500).json({ message: "Error deleting package", error: err.message });
  }
};
