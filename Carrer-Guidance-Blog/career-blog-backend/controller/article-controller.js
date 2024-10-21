const Article = require("../model/article-model");

// GET all articles
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find({});
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// POST a new article
exports.createArticle = async (req, res) => {
  const { id, title, content } = req.body;
  try {
    const newArticle = new Article({ id, title, content });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: "Error creating article" });
  }
};
