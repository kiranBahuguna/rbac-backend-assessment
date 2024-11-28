const app = require("./app"); // Import the Express app
const mongoose = require("mongoose");

// Environment variables
const PORT = process.env.PORT || 5000; // Default to port 5000
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/test"; // Replace with your MongoDB URI

// Connect to MongoDB and start the server
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });
