const express = require("express");
const morgan = require("morgan");

const { getQuote } = require("./restHandlers/getQuote");

express()
  .use(morgan("tiny"))

  .get("/hello", (req, res) => {
    res.status(200).json({ status: 200, message: "hi" });
  })

  .get("/api/getQuote", getQuote)

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
    res.send("error 404")
  })

  .listen(2000, () => {
    console.log(`GoFinance app listening on port 2000`);
  });
