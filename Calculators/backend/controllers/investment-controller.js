const Investment = require("../models/investment-model");

// Logic to calculate simple interest
const calculateInterest = async (req, res) => {
  const { principal, age, period } = req.body;

  if (!principal || !age || !period) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    let rate = 5; // Normal rate
    if (age >= 60) {
      rate = 7; // Senior citizen rate
    }

    // Calculate interest
    const interest = (principal * rate * period) / 100;

    // Save to DB
    const newInvestment = new Investment({ principal, age, period, interest });
    await newInvestment.save();

    res
      .status(200)
      .json({ interest, message: "Interest calculated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { calculateInterest };
