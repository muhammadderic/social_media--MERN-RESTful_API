const User = require("../models/User");
const bcrypt = require("bcrypt");

// REGISTER
const register = async (req, res) => {
  try {
    // Generate password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // Saved user
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
}

// LOGIN
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json({ message: "User not Found" });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    !validPassword && res.status(401).json({ message: "Password not valid" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  register,
  login,
}