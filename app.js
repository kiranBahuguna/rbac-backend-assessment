const express = require("express");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());

// A test route
app.get("/", (req, res) => {
  res.send("API is working!");
});

module.exports = app; // Export the app for use in server.js
