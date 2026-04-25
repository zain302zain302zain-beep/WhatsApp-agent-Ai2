const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const webhook = require("./routes/webhook");

app.use("/webhook", webhook);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
