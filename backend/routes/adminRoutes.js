const express = require('express');
const { signup, login, getProfile, resetPassword } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Signup and Login routes
router.post('/signup', signup);
router.post('/login', login);

// Profile route (protected)
router.get('/profile', getProfile);

// Reset password route
router.post('/reset-password', resetPassword);

module.exports = router;
