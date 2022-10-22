const User = require("../model/user.model");
const CryptoJs = require("crypto-js");

module.exports.register = async (req, res, next) => {
  const { email, username, password } = req.body;
  const hashedPassword = CryptoJs.AES.encrypt(
    password,
    process.env.HASH_KEY
  ).toString();
  const newUser = new User({
    email,
    username,
    password: hashedPassword,
  });
  try {
    const savedUser = await newUser.save();
    const { password, ...others } = savedUser;
    res.status(201).json(others._doc);
  } catch (err) {
    res.status(400).json("Registration failed");
  }
};
