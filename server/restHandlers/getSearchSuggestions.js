"use strict";
require("dotenv").config();
const { REACT_APP_API_KEY } = process.env;

const getSearchSuggestions = async (req, res) => {
  console.log("getSearchSuggestions api triggered");
  const {query} = req.params
  console.log(query);
  // const query = "tes";
  const url = `https://seeking-alpha.p.rapidapi.com/v2/auto-complete?query=${query}&type=symbols`;
  const options = {
    method: "GET",
    headers: {
      // TEMPORARY TO AVOID TOO MANY API REQUESTS
      // "X-RapidAPI-Key": `${REACT_APP_API_KEY}`,
      "X-RapidAPI-Host": "seeking-alpha.p.rapidapi.com",
    },
  };

  // TEMPORARY TO AVOID TOO MANY API REQUESTS
  // const response = await fetch(url, options);

  // TEMPORARY TO AVOID TOO MANY API REQUESTS
  const parsedResponse = {
    symbols: [
      {
        id: 581299,
        name: "TES-USD",
        slug: "tes-usd",
        content: "TeslaCoin USD",
        exchange: "Cryptocurrency",
        currency: "USD",
        is_quant_rated: 0,
      },
      {
        id: 617763,
        name: "TES:CA",
        slug: "tes:ca",
        content: "Tesoro Minerals Corp.",
        exchange: "TSXV",
        currency: "CAD",
        is_quant_rated: 0,
      },
      {
        id: 10367,
        name: "TESS",
        slug: "tess",
        content: "TESSCO Technologies Incorporated",
        exchange: "NASDAQ",
        currency: "USD",
        is_quant_rated: 1,
      },
      {
        id: 283055,
        name: "TESIX",
        slug: "tesix",
        content: "Franklin Mutual Shares Fund Class A A",
        exchange: "MUTF",
        currency: "USD",
        is_quant_rated: 0,
      },
      {
        id: 530145,
        name: "TESHX",
        slug: "teshx",
        content:
          "TIAA-CREF Short-Term Bond Index Fund Retirement Class Retirement",
        exchange: "MUTF",
        currency: "USD",
        is_quant_rated: 0,
      },
    ],
  };
  // const parsedResponse = await response.json();

  // const symbols = parsedResponse.symbols.map((symbol) => {
  //   // const companyInfo = `${(symbol.slug, symbol.content)}`;
  //   const companyInfo = []
  //   companyInfo.push(`${(symbol.slug, symbol.content)}`)
  //   return companyInfo;
  // });

  parsedResponse
    ? res.status(200).json({ status: 200, data: parsedResponse.symbols })
    : res.status(400).json({ status: 400, message: "error while fetching" });
};

module.exports = { getSearchSuggestions };
