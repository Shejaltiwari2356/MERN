const express = require("express");
const { calculateInterest } = require("../controllers/investment-controller");

const router = express.Router();

// POST route for interest calculation
router.post("/calculate", calculateInterest);

module.exports = router;
