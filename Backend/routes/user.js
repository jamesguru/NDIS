const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const CryptoJs = require("crypto-js");
const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("../middlewares/verifyToken");
dotenv.config();

//UPDATE

router.put("/:id", async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASS
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE

router.delete("/:id", async (req, res) => {
  try {
    await User.findOneAndDelete(req.params.id);

    res.status(200).json("The user has been deleted");
  } catch (error) {
    res.status(500).json("You are not authorized for this operation");
  }
});

// GET A USER
router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL USERS

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET USERS STATS

router.get("/stats", async (req, res) => {
  const date = new Date();

  const lastYear = new Date(date.setFullYear(date.getFullYear - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },

      {
        $project: {
          month: { $month: "createdAt" },
        },
      },

      {
        $group: {
          _id: "$month",

          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
