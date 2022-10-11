"use strict";
require("dotenv").config();
const { REACT_APP_API_KEY } = process.env;

//GET 20 NEWS ARTICLES FROM SEEKING ALPHA AND FOR NOW ONLY USING THE PICTURE AND HEADLINE
const getNews = async (req, res) => {
  const url =
    "https://seeking-alpha.p.rapidapi.com/news/v2/list?category=market-news%3A%3Aall&until=0&since=0&size=20&number=1";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${REACT_APP_API_KEY}`,
      "X-RapidAPI-Host": "seeking-alpha.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.error("error:" + err));
  const response = await fetch(url, options);

  const parsedResponse = await response.json();

  response
    ? res.status(200).json({ status: 200, data: parsedResponse.data })
    : res.status(400).json({ status: 400, message: "error while fetching" });
};

module.exports = { getNews };
