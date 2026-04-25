const { getScore } = require("./scoreController");
const { getVideo } = require("./videoController");

exports.handleMessage = async (req, res) => {
  const message = req.body.message;

  if (message.includes("match")) {
    const score = await getScore(message);
    return res.send(score);
  }

  if (message.includes("video")) {
    const video = await getVideo(message);
    return res.send(video);
  }

  res.send("Unknown command");
};
