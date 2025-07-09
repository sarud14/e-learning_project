const error = (err, req, res, next) => {
  console.log(err.message)
  res.status(err.statusCode || 500).json({ message: err.message || "Something Wrong!!" });
}

export default error