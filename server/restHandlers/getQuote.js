"use strict";

const getQuote = async (req, res) => {
  console.log("getQuote api triggered");
  const url =
    "https://seeking-alpha.p.rapidapi.com/symbols/get-profile?symbols=aapl";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "seeking-alpha.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  // .then((res) => res.json())
  // .then((json) => console.log("l18", json))
  // .catch((err) => console.error("error:" + err));
  const parsedResponse = await response.json()
  console.log(parsedResponse);

  response ? res.status(200).json({status:200, data:parsedResponse.data}) : res.status(400).json({status:400, message:"error while fetching"})
//   parsedResponse
//     ? response
//         .status(200)
//         .json({ status: 200, message: "‼‼ QUOTE ‼‼", data: parsedResponse })
//     : response.status(400).json({ status: 400, message: "fetch errors" });
};
// getQuote();
module.exports = { getQuote };
