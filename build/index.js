console.log("this page waS HIT");
const express = require("express");
const app = express();
const { PORT = 3000 } = process.env;
let timesHit = 0;
app.get("/", (_, res) => {
  console.log(`port ${PORT}. page hit ${++timesHit}`);
  res.send(`app listening on port ${PORT}`);
});

app.listen(PORT, () => console.log(`app listening on ${PORT}`));
