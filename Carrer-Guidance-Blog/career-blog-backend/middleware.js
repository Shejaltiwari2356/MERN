const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(500).json({ message: "Internal Server Error" }); // Send error response
};

module.exports = {
  errorHandler,
};
