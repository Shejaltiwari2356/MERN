const express = require("express");
const router = express.Router();
const {
  getAllArticles,
  createArticle,
} = require("../controller/article-controller");

// GET all articles
router.get("/", getAllArticles);

// POST a new article
router.post("/", createArticle);

module.exports = router;
