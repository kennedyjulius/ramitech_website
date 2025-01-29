const Service = require("../models/Services");

// Add a service
exports.addService = async (req, res) => {
  try {
    const { name, description } = req.body;
    const service = new Service({ name, description });
    await service.save();
    res.json({ message: "Service added", data: service });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all services
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
