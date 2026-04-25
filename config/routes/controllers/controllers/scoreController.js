const { fetchScore } = require("../services/cricketService");

exports.getScore = async (msg) => {
  const data = await fetchScore(msg);
  return `Live Score: ${data}`;
};
