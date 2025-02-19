const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Store active users in memory with their token expiration timeouts
let activeUsers = new Set();
let userTimeouts = new Map();


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

// Get active users count
exports.getActiveUsers = async (req, res) => {
  try {
    res.json({ count: activeUsers.size });
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

      // Add user to active users with timeout
      activeUsers.add(admin.email);
      
      // Clear any existing timeout for this user
      if (userTimeouts.has(admin.email)) {
        clearTimeout(userTimeouts.get(admin.email));
      }
      
      // Set new timeout to remove user after token expiration (1 hour)
      const timeout = setTimeout(() => {
        activeUsers.delete(admin.email);
        userTimeouts.delete(admin.email);
      }, 3600000); // 1 hour in milliseconds
      
      userTimeouts.set(admin.email, timeout);
  
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

// Logout logic
exports.logout = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_secret_key');
      const { email } = decoded;

      // Remove user from active users
      activeUsers.delete(email);
      
      // Clear timeout if exists
      if (userTimeouts.has(email)) {
        clearTimeout(userTimeouts.get(email));
        userTimeouts.delete(email);
      }

      res.json({ message: 'Logged out successfully' });
    } catch (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
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
  