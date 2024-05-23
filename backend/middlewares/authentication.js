const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authUser = async (req, res, next) => {
  try {
    let token = req.headers?.authorization;
    console.log("token", token);
    if (token) {
      token = token.split(" ")[1];
      let decoded = jwt.verify(token, process.env.JWT_SECERET);
      let isValidUser = await User.find({ id: decoded.id });
      if (isValidUser) {
        req.userId = decoded.id;
        next();
      } else res.status(404).json({ message: "Unauthorized User!" });
    } else {
      res.status(404).json({ message: "Unauthorized User!" });
    }
  } catch (err) {
    res.status(404).json({ message: "Unauthorized User!" });
    console.log("Error in authentication middleware", err);
  }
};

module.exports = authUser;
