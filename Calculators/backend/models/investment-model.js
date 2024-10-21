const mongoose = require("mongoose");

const investmentSchema = new mongoose.Schema({
  principal: { type: Number, required: true },
  age: { type: Number, required: true },
  period: { type: Number, required: true },
  interest: { type: Number, required: true },
});

const Investment = mongoose.model("Investment", investmentSchema);

module.exports = Investment;
