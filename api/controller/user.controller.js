const User = require("../model/user.model");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

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

module.exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user)
      return res
        .status(401)
        .json({ msg: "Incorrect Username or Password", status: false });
    const hashedPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.HASH_KEY
    );
    const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
    if (originalPassword !== password)
      return res.json({ msg: "Incorrect Username or Password", status: false });

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );
    const { password: userPassword, ...others } = user;
    return res.json({ status: true, user: others._doc, token });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "username",
      "image",
      "_id",
    ]);
    return res.status(200).json(users);
  } catch (ex) {
    next(ex);
  }
};

module.exports.setImage = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const image = req.body.image;
    const userData = await User.findByIdAndUpdate(
      userId,
      {
        isImageSet: true,
        image,
      },
      { new: true }
    );
    return res.status(200).json({
      isImageSet: userData.isImageSet,
      image: userData.image,
    });
  } catch (ex) {
    next(ex);
  }
};

module.exports.logOut = (req, res, next) => {
  try {
    if (!req.params.id) return res.json({ msg: "User id is required " });
    onlineUsers.delete(req.params.id);
    return res.status(200).send();
  } catch (ex) {
    next(ex);
  }
};
