// CONTAINS ALL SPECIFIC STOCK GET REQUESTS 
"use strict";
require("dotenv").config();
const { REACT_APP_API_KEY } = process.env;

//GET GENERAL PROFILE DATA ON THE SPECIFIC STOCK
const getStock = async (req, res) => {
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

  response
    ? res.status(200).json({ status: 200, data: parsedResponse })
    : res.status(400).json({ status: 400, message: "error while fetching" });
};

// GET REAL TIME PRICES BASED ON ID SEEKINGALPHA RETURNS
const getPrice = async (req, res) => {
  const { id } = req.params;

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

  response
    ? res.status(200).json({ status: 200, data: parsedResponse })
    : res.status(400).json({ status: 400, message: "error while fetching" });
};

// GETS ONLY THE STOCKS ID FOR FUTURE SEARCHES DUE TO HOW SEEKING ALPHA'S API WORKS
const getStockId = async (req, res) => {
  const { id } = req.params;
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

  response
    ? res.status(200).json({ status: 200, data: parsedResponse })
    : res.status(400).json({ status: 400, message: "error while fetching" });
};

module.exports = { getStock, getPrice, getStockId };
