const express = require("express");
const router = express.Router();
const { createInquiry } = require("../controller/inquiry-controller");

// POST a new inquiry
router.post("/", createInquiry);

module.exports = router;
