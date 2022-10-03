"use strict";

const express = require("express");
const morgan = require("morgan");

const { getQuote } = require("./restHandlers/getQuote");
const { getStock } = require("./restHandlers/getStock");
const { getSearchSuggestions } = require("./restHandlers/getSearchSuggestions");

express()
  .use(morgan("tiny"))
  .use(express.json())

  .get("/api/get-quote", getQuote)
  .get("/api/get-stock/:stock", getStock)
  .get("/api/get-search-suggestions", getSearchSuggestions)

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(2000, () => {
    console.log(`GoFinance app listening on port 2000`);
  });
