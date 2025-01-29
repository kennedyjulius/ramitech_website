require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/coming-soon", require("./routes/comingSoonRoutes"));
app.use("/api/coverage-areas", require("./routes/coverageAreaRoutes"));
app.use("/api/services", require("./routes/servicesRoutes"));
app.use("/api/internet-packages", require("./routes/internetPackageRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
