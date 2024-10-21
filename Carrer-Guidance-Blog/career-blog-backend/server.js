require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { errorHandler } = require("./middleware"); // Import error handler

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // To allow requests from the frontend

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes
const articlesRoute = require("./router/article-route");
const inquiriesRoute = require("./router/inquiry-route"); // Import inquiry route
app.use("/api/articles", articlesRoute);
app.use("/api/inquiries", inquiriesRoute); // Use inquiry route

// Use the error handler middleware
app.use(errorHandler);

// Server listening on a port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
