const { downloadVideo } = require("../services/videoService");

exports.getVideo = async (msg) => {
  const videoPath = await downloadVideo(msg);
  return `Video saved at: ${videoPath}`;
};
