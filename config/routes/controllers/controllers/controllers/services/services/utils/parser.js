exports.parseMessage = (msg) => {
  if (msg.includes("match")) return "score";
  if (msg.includes("video")) return "video";
  return "unknown";
};
