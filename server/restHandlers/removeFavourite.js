"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();

const { REACT_APP_MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// REMOVES FAVOURITE FROM MONGODB FAVOURITES ARRAY
const removeFavourite = async (req, res) => {
  const { email, ticker } = req.body;
  const client = new MongoClient(REACT_APP_MONGO_URI);

  try {
    await client.connect();
    const db = client.db("db-name");
    const removedFavourite = await db
      .collection("users")
      .updateOne({ email: email }, { $pull: { favourite: ticker } });

    removedFavourite
      ? res.status(200).json({ status: 200, data: removedFavourite })
      : res.status(400).json({ status: 400, message: "error while fetching" });
  } catch (e) {
    console.log(e);
    client.close();
  }
  client.close();
  console.log("Success!");
};

module.exports = { removeFavourite };
