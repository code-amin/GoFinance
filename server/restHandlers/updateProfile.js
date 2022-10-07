"use strict";
require("dotenv").config();
const { cloudinary } = require("./utils/cloudinary");
const { REACT_APP_API_KEY } = process.env;

const updateProfile = async (req, res) => {
  console.log("updateProfile api triggered");
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "gpyplrmb",
    });
    console.log(uploadedResponse.secure_url);
    return res.json({ msg: "yes" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: "errrror" });
  }
};

module.exports = { updateProfile };
