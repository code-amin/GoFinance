"use strict";
require("dotenv").config();
const { MongoClient } = require("mongodb");
const { cloudinary } = require("./utils/cloudinary");
const { REACT_APP_MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// UPLOADS THE URL CREATED FROM CLOUDINARY TO MONGODB USER'S PROFILE PICTURE KEY
const updateProfile = async (req, res) => {
  const client = new MongoClient(REACT_APP_MONGO_URI);

  try {
    const fileStr = req.body.data;
    const email = req.body.email;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "gpyplrmb",
    });

    await client.connect();
    const db = client.db("db-name");
    const finding = await db
      .collection("users")
      .updateOne(
        { email: email },
        { $set: { profilepicture: uploadedResponse.secure_url } }
      );

    finding
      ? res.status(200).json({
          status: 200,
          data: finding,
          profile_url: uploadedResponse.secure_url,
        })
      : res.status(400).json({ status: 400, message: "error while fetching" });
  } catch (e) {
    res.status(500).json({ err: "errrror" });
    console.log(e);
    client.close();
  }
  client.close();
  console.log("Success!");
};

module.exports = { updateProfile };
