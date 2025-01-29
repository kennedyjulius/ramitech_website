const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

// Content Schema
const contentSchema = new mongoose.Schema({
  key: String,
  value: mongoose.Schema.Types.Mixed
});
const Content = mongoose.model('Content', contentSchema);

// Admin Routes
const adminRoutes = require('./routes/admin');
app.use('/api/admin', adminRoutes);

// Public Content Route
app.get('/api/content', async (req, res) => {
  const content = await Content.find();
  res.json(content);
});

app.listen(process.env.PORT || 5000);