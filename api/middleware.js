exports.logger = (req, res, next) => {
  console.log("METHOD: ", req.method);
  console.log("REQUEST_BODY: ", req.body);
  next();
};
