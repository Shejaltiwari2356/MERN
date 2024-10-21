const Inquiry = require("../model/inquiry-model");

// POST a new inquiry
exports.createInquiry = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newInquiry = new Inquiry({ name, email, message });
    await newInquiry.save();
    res.status(201).json(newInquiry);
  } catch (err) {
    res.status(400).json({ message: "Error creating inquiry" });
  }
};
