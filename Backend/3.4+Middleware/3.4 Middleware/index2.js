//added the morgan

import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/", function (req, res) {
  res.send("hello, world!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
