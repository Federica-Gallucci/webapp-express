function handlerError(err, req, res, next) {
  res.status(500).json({
    error: "internal server error",
  });
}

module.exports = { handlerError };
