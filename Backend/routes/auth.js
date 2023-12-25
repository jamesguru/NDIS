const express = require("express");
const router = express.Router();
const CryptoJs = require("crypto-js");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const {sendWelcomeEmail}= require("../EmailService/Welcome")

dotenv.config();

// REGISTER

router.post("/register", async (req, res) => {
  const unsavedPassword = req.body.password;

  const newUser = User({
    username: req.body.username,
    email: req.body.email,
    fullname: req.body.fullname,
    phone: req.body.phone,
    address: req.body.address,
    staffID: req.body.staffID,
    gender: req.body.gender,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASS
    ).toString(),
  });

  try {
    const user = await newUser.save();
   
      await sendWelcomeEmail(
        req.body.fullname,
        req.body.staffID,
        unsavedPassword,
        req.body.email
      );

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("You have not registered");
    const hashedPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.PASS
    );
    const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
    originalPassword !== req.body.password &&
      res.status(401).json("wrong credentials");
    const { password, ...info } = user._doc;
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SEC,
      { expiresIn: "10d" }
    );

    res.status(200).json({ ...info, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
