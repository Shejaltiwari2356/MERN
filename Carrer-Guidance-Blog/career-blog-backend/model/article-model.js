const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = mongoose.model("Article", articleSchema, "C-articles");
