const getQuote = async (req, res) => {

  res.status(200).json({ status: 200, message: "‼‼ QUOTE ‼‼", data: res });
};

module.exports = { getQuote };
