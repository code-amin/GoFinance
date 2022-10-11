"use strict";
require("dotenv").config();
const { REACT_APP_API_KEY } = process.env;

const getStock = async (req, res) => {
  console.log("getQuote api triggered");
  const ticker = req.params.stock;
  const url = `https://seeking-alpha.p.rapidapi.com/symbols/get-profile?symbols=${ticker}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${REACT_APP_API_KEY}`,
      "X-RapidAPI-Host": "seeking-alpha.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);

  const parsedResponse = await response.json();
  // console.log('getStock parsed',parsedResponse);

  response
    ? res.status(200).json({ status: 200, data: parsedResponse })
    : res.status(400).json({ status: 400, message: "error while fetching" });
};

const getPrice = async (req, res) => {
  console.log("getPrice api triggered");
  const {id} = req.params;

  const url = `https://seeking-alpha.p.rapidapi.com/market/get-realtime-quotes?sa_ids=${id}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${REACT_APP_API_KEY}`,
      "X-RapidAPI-Host": "seeking-alpha.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);

  const parsedResponse = await response.json();
  // console.log(parsedResponse);

  response
    ? res.status(200).json({ status: 200, data: parsedResponse })
    : res.status(400).json({ status: 400, message: "error while fetching" });
};

const getStockId = async (req, res) => {
  console.log("getStockId api triggered");
  const {id} = req.params;
  const url = `https://seeking-alpha.p.rapidapi.com/symbols/get-meta-data?symbol=${id}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${REACT_APP_API_KEY}`,
      "X-RapidAPI-Host": "seeking-alpha.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);

  const parsedResponse = await response.json();
  // console.log('getStock parsed',parsedResponse);

  response
    ? res.status(200).json({ status: 200, data: parsedResponse })
    : res.status(400).json({ status: 400, message: "error while fetching" });
};

module.exports = { getStock, getPrice, getStockId };
