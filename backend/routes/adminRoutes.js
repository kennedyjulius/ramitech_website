const express = require('express');
const { signup, login, logout, getProfile, resetPassword, getActiveUsers } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Signup, Login, and Logout routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

// Profile route (protected)
router.get('/profile', getProfile);

// Active users route
router.get('/active-users', getActiveUsers);

// Reset password route
router.post('/reset-password', resetPassword);

module.exports = router;
