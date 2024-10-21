const express = require("express");
const {
  getQuizQuestions,
  addQuizQuestion,
} = require("../controllers/quiz-controller");

const router = express.Router();

// Routes
router.get("/", getQuizQuestions);
router.post("/", addQuizQuestion);

module.exports = router;
