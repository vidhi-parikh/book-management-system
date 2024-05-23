const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const token = require("../utils/generate-token");

const loginUser = async (req, res) => {
  let { email, password } = req.body;

  try {
    if (email.length < 1) {
      res.status(404);
      res.send("Please enter email!");
      return;
    }
    if (password.length < 1) {
      res.status(404);
      res.send("Please enter password!");
      return;
    }

    let user = await User.findOne({ email: email });

    if (!user) {
      res.status(404);
      res.send("Email id not found!");
      return;
    }

    let isPasswordMatched = await bcrypt.compare(password, user.password);

    if (isPasswordMatched) {
      res.status(200);
      res.json({
        userId: user._id,
        email,
        token: token(user._id),
        msg: "Login Successfull!",
      });
    } else {
      res.status(404);
      res.send("Incorrect Password! Please check it again");
    }
  } catch (err) {
    res.status(404);
    res.send("Something went wrong!");
  }
};

const registerUser = async (req, res) => {
  let { firstName, lastName, email, password } = req.body;

  try {
    if (firstName.length < 1) {
      res.status(404);
      res.send("Please enter first name");
      return;
    }
    if (lastName.length < 1) {
      res.status(404);
      res.send("Please enter last name");
      return;
    }
    if (email.length < 1) {
      res.status(404);
      res.send("Please enter email name");
      return;
    }
    if (password.length < 1) {
      res.status(404);
      res.send("Please enter password name");
      return;
    }

    let isEmailIdExists = await User.findOne({ email: email });

    if (isEmailIdExists) {
      console.log("email already exists", isEmailIdExists);
      res.status(404);
      res.send("Email Id already exists! Create new one.");
      return;
    }

    const userData = new User({
      firstName,
      lastName,
      email,
      password,
    });

    const hash = await bcrypt.hash(password, 10);
    userData.password = hash;

    let data = {
      msg: "Data Saved!",
      token: token(userData._id),
    };

    userData
      .save()
      .then(() => {
        res.status(200);
        res.json(data);
      })
      .catch((err) => {
        res.status(404);
        res.send("Something went wrong!");
      });
  } catch (err) {
    res.status(404);
    res.send("Something went wrong!");
  }
};

module.exports = {
  registerUser,
  loginUser,
};
