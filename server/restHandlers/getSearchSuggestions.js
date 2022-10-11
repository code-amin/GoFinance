"use strict";
require("dotenv").config();
const { REACT_APP_API_KEY } = process.env;

// GET SEARCH SUGGESTIONS BASED ON QUERY USER ENTERED IN SEARCH BAR
const getSearchSuggestions = async (req, res) => {
  const { query } = req.params;

  const url = `https://seeking-alpha.p.rapidapi.com/v2/auto-complete?query=${query}&type=symbols&size=10`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${REACT_APP_API_KEY}`,
      "X-RapidAPI-Host": "seeking-alpha.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);

  const parsedResponse = await response.json();

  parsedResponse.symbols.map((symbol) => {
    const companyInfo = [];
    companyInfo.push(`${(symbol.slug, symbol.content)}`);
    return companyInfo;
  });

  parsedResponse
    ? res.status(200).json({ status: 200, data: parsedResponse.symbols })
    : res.status(400).json({ status: 400, message: "error while fetching" });
};

module.exports = { getSearchSuggestions };
