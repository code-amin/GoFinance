"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();

const { REACT_APP_MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const ticker = "AAPL";
const tenant = "dev-2nqo5xwv";
const addFavourite = async (req, res) => {
  console.log("addfavourites  api triggered");
  
  console.log(req.body);
  // const client = new MongoClient(REACT_APP_MONGO_URI);
  // try {
  //   await client.connect();
  //   const db = client.db("db-name");
  //   const finding = await db
  //     .collection("users")
  //     .updateOne({ tenant: tenant }, { $addToSet: { favourite: ticker } });
  //   console.log(finding);
  //   return finding;
  // } catch (e) {
  //   console.log(e);
  //   client.close();
  // }
  // client.close();
  // console.log("Success!");
};

module.exports = { addFavourite };
