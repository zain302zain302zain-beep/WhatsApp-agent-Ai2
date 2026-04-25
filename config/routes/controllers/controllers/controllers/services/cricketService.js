const axios = require("axios");

exports.fetchScore = async () => {
  const res = await axios.get("https://api.cricapi.com/v1/currentMatches?apikey=YOUR_API_KEY");
  return res.data;
};
