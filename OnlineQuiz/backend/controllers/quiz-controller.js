const Question = require("../models/quiz-model");

// Get all quiz questions
exports.getQuizQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions" });
  }
};

// Add a new quiz question
exports.addQuizQuestion = async (req, res) => {
  const { question, options, correctAnswer } = req.body;
  const newQuestion = new Question({ question, options, correctAnswer });

  try {
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(400).json({ message: "Error adding question" });
  }
};
