"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();

const { REACT_APP_MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// LOAD THE FAVOURITES TO DISPLAY FROM MONGO
const getFavourites = async (req, res) => {
  const { email } = req.params;
  const client = new MongoClient(REACT_APP_MONGO_URI);

  try {
    await client.connect();
    const db = client.db("db-name");
    const finding = await db.collection("users").findOne({ email: email });

    finding
      ? res.status(200).json({ status: 200, data: finding.favourite })
      : res.status(400).json({ status: 400, message: "error while fetching" });
  } catch (e) {
    console.log(e);
    client.close();
  }
  client.close();
  console.log("Success!");
};

module.exports = { getFavourites };
