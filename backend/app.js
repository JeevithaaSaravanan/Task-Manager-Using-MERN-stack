// Load environment variables ASAP
require('dotenv').config({ path: './.env' });

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const profileRoutes = require("./routes/profileRoutes");

// Middlewares
app.use(express.json());
app.use(cors());

// Debug: Confirm MONGO_URI is loaded
console.log("MONGO_URI from env:", process.env.MONGO_URI);

const mongoUrl = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,   //useMongoClient:
  useUnifiedTopology: true,
})
  .then(() => console.log("Mongodb connected..."))
  .catch(err => console.error("Mongodb connection error:", err));

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/profile", profileRoutes);

// Serve frontend if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../frontend/build")));
  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../frontend/build/index.html")));
}

// Start server
const port = process.env.PORT || 5000;

// ✅ Bind to 0.0.0.0 to allow external access from EC2/public IP/Docker
app.listen(port, '0.0.0.0', () => {
  console.log(`Backend is running on port ${port}`);
});

//node app.js
