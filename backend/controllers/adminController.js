const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const generateToken = (id, email) => {
    return jwt.sign({id, email}, process.env.JWT_SECRET || 'your_secret_key', { expiresIn: '1h'});
};

// Signup logic
exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) return res.status(400).json({ message: 'Admin already exists' });

    const newAdmin = new Admin({ username, email, password });
    await newAdmin.save();

    const token = generateToken({ id: newAdmin._id, email: newAdmin.email });

    res.status(201).json({ message: 'Admin created successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login logic
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const admin = await Admin.findOne({ email: email.toLowerCase() });
      if (!admin) return res.status(400).json({ message: "Invalid credentials" });
  
      console.log("Stored Hashed Password:", admin.password);
  
      // Compare hashed password with input password
      const isMatch = await bcrypt.compare(password, admin.password);
      console.log("Password Match Result:", isMatch);
  
      if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
  
      const token = jwt.sign(
        { id: admin._id, email: admin.email },
        process.env.JWT_SECRET || "your_secret_key",
        { expiresIn: "1h" }
      );
  
      res.json({ token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

// Get logged-in admin profile
exports.getProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id); // Using the ID from the JWT payload
    if (!admin) return res.status(400).json({ message: 'Admin not found' });

    res.json({ username: admin.username, email: admin.email });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Reset Password logic
exports.resetPassword = async (req, res) => {
    try {
      const { email, newPassword } = req.body;
  
      console.log("Checking for admin with email:", email);
  
      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
  
      const updatedAdmin = await Admin.updateOne(
        { email: email.toLowerCase() },
        { $set: { password: hashedPassword } }
      );
  
      console.log("Update result:", updatedAdmin);
  
      if (updatedAdmin.modifiedCount === 0) {
        return res.status(400).json({ message: "Admin not found or password not updated" });
      }
  
      res.json({ message: "Password updated successfully" });
    } catch (err) {
      console.error("Error updating password:", err);
      res.status(500).json({ message: err.message });
    }
  };
  