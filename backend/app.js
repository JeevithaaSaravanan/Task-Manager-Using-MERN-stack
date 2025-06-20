require('dotenv').config({ path: './.env' });  // load env variables ASAP

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const profileRoutes = require("./routes/profileRoutes");

// Middleware
app.use(express.json());
app.use(cors());

// Debug: log env variable to verify dotenv loaded correctly
console.log("MONGO_URI from env:", process.env.MONGO_URI);

const mongoUrl = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,   //useMongoClient:
  useUnifiedTopology: true,
})
  .then(() => console.log("Mongodb connected..."))
  .catch(err => console.error("Mongodb connection error:", err));

// Routes
app.use("/api/auth", authRoutes); //login,sign up
app.use("/api/tasks", taskRoutes); // task functionality
app.use("/api/profile", profileRoutes); //user profile

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../frontend/build")));
  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../frontend/build/index.html")));
}

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});

//node app.js
