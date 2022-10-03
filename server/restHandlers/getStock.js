"use strict";
require("dotenv").config();
const { REACT_APP_API_KEY } = process.env;

const getStock = async (req, res) => {
  console.log("getQuote api triggered");
  const ticker = req.params.stock
  const url =
    `https://seeking-alpha.p.rapidapi.com/symbols/get-profile?symbols=${ticker}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${REACT_APP_API_KEY}`,
      "X-RapidAPI-Host": "seeking-alpha.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);

  const parsedResponse = await response.json();
  console.log(parsedResponse);

  response
    ? res.status(200).json({ status: 200, data: parsedResponse })
    : res.status(400).json({ status: 400, message: "error while fetching" });
};

module.exports = { getStock };
