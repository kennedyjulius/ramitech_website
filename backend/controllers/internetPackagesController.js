const InternetPackage = require("../models/InternetPackage");

// Add an internet package
exports.addInternetPackage = async (req, res) => {
  try {
    const { name, speed, price } = req.body;
    const package = new InternetPackage({ name, speed, price });
    await package.save();
    res.json({ message: "Package added", data: package });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all packages
exports.getInternetPackages = async (req, res) => {
  try {
    const packages = await InternetPackage.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
