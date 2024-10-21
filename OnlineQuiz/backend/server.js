const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const quizRoute = require("./routers/quiz-route");
const cors = require("cors");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use("/api/quiz", quizRoute);

// Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.error("Database connection failed:", error));
