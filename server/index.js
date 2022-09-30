const express = require("express");
const morgan = require("morgan");

express()
  .use(morgan("tiny"))

  .get("/hello", (req, res) => {
    res.status(200).json({ status: 200, messagE: "hi" });
  })

  .listen(2000, () => {
    console.log(`GoFinance app listening on port 2000`);
  });
