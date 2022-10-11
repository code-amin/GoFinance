"use strict";

const express = require("express");
const morgan = require("morgan");

// ALL ENDPOINTS FOR RETREIVING STOCK DATA
const { getNews } = require("./restHandlers/getNews");
const { getStock, getPrice, getStockId } = require("./restHandlers/getStock");
const { getSearchSuggestions } = require("./restHandlers/getSearchSuggestions");
const { addFavourite } = require("./restHandlers/addFavourite");
const { removeFavourite } = require("./restHandlers/removeFavourite");
const { getFavourites } = require("./restHandlers/getFavourites");
const { updateProfile } = require("./restHandlers/updateProfile");

express()
  .use(morgan("tiny"))
  .use(express.json({ limit: "50mb" }))
  .use(express.urlencoded({ limit: "50mb", extended: true }))

  .get("/api/get-news/", getNews)
  .get("/api/get-stock/:stock", getStock)
  .get("/api/get-stock-id/:id", getStockId)
  .get("/api/get-price/:id", getPrice)
  .get("/api/get-search-suggestions/:query", getSearchSuggestions)

  .post("/api/add-favourite/", addFavourite)
  .post("/api/update-profile/", updateProfile)
  .get("/api/get-favourites/:email", getFavourites)
  .patch("/api/remove-favourite", removeFavourite)

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(2000, () => {
    console.log(`GoFinance app listening on port 2000`);
  });
