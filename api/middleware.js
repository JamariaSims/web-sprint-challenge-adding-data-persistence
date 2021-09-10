exports.logger = (req, res, next) => {
  console.log("METHOD: ", req.method);
  next();
};
